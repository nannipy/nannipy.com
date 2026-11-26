import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { portfolioProjects, homeMediaGallery, siteContent, getLocale, localHref } from '../src/lib/portfolio.ts';
import { nannixArticles } from '../src/lib/nannix.ts';

test('Every curated route and local media asset exists in both languages', () => {
  const slugs = portfolioProjects.map(p => p.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.equal(new Set(portfolioProjects.map(p => p.color)).size, slugs.length);
  for (const project of portfolioProjects) {
    for (const locale of ['en', 'it']) {
      assert.ok(project.title && project.summary[locale]);
      assert.ok(project.story.every(paragraph => paragraph[locale]));
      assert.equal(localHref(`/projects/${project.slug}`, locale), `/projects/${project.slug}?lang=${locale}`);
    }
  }
  const visit = value => {
    if (typeof value === 'string' && value.startsWith('/')) {
      const asset = fileURLToPath(new URL(`../public${value}`, import.meta.url));
      assert.ok(existsSync(asset), `Missing asset: ${value}`);
      let parent = fileURLToPath(new URL('../public', import.meta.url));
      for (const segment of value.slice(1).split('/')) {
        assert.ok(readdirSync(parent).includes(segment), `Incorrect path casing on Linux: ${value}`);
        parent = join(parent, segment);
      }
    } else if (Array.isArray(value)) value.forEach(visit);
    else if (value && typeof value === 'object') Object.values(value).forEach(visit);
  };
  visit([portfolioProjects, homeMediaGallery, siteContent, nannixArticles]);
  for (const file of ['src/app/page.tsx', 'src/components/PortfolioShared.tsx', 'src/styles/globals.css', 'src/app/metadata.ts']) {
    const source = readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
    for (const match of source.matchAll(/["'(](\/(?:personal|work|cv|brand)\/[^"'()\s]+)/g)) visit(match[1]);
  }
  visit(['/favicon.svg', '/brand/social-card.png']);
  assert.equal(getLocale(undefined), 'en');
  assert.equal(getLocale('it'), 'it');
  assert.equal(getLocale('unexpected'), 'en');
});

test('Production server renders both languages, all projects, downloads and 404s', { skip: !process.env.PORTFOLIO_TEST_URL }, async () => {
  const base = process.env.PORTFOLIO_TEST_URL;
  for (const locale of ['en', 'it']) {
    for (const [source, destination, hash] of [
      ['sft-telemetry', 'sapienza-foiling-team', ''],
      ['hiresight', 'edgeworks', '#hiresight'],
      ['timesheet', 'edgeworks', '#timesheet'],
    ]) {
      const legacy = await fetch(`${base}/projects/${source}?lang=${locale}`, { redirect: 'manual' });
      assert.equal(legacy.status, 308);
      const target = new URL(legacy.headers.get('location'), base);
      assert.equal(target.pathname, `/projects/${destination}`);
      assert.equal(target.searchParams.get('lang'), locale);
      assert.equal(target.hash, hash);
    }
    const home = await fetch(`${base}/?lang=${locale}`);
    assert.equal(home.status, 200);
    const html = await home.text();
    assert.ok(html.includes(locale === 'it' ? 'Progetti' : 'Projects'));
    assert.ok(html.includes('wordmark-dot'));
    assert.ok(!html.includes('/brand/urchin.svg'));
    for (const path of ['/nannix', '/nannix/biblioteca', ...nannixArticles.map(a => `/nannix/${a.slug}`)]) {
      const response = await fetch(`${base}${localHref(path, locale)}`);
      assert.equal(response.status, 200, path);
      const content = await response.text();
      assert.ok(content.includes('Nannix'), path);
      assert.ok(content.includes(`/nannix/biblioteca?lang=${locale}`), path);
      const article = nannixArticles.find(a => path === `/nannix/${a.slug}`);
      if (article) for (const section of article.sections) {
        assert.ok(content.includes(`id="${section.id}"`), `${path} #${section.id}`);
      }
    }
    for (let i = 0; i < portfolioProjects.length; i += 4) {
      await Promise.all(portfolioProjects.slice(i, i + 4).map(async project => {
        const page = await fetch(`${base}${localHref(`/projects/${project.slug}`, locale)}`);
        assert.equal(page.status, 200, project.slug);
        assert.ok((await page.text()).includes(project.title), project.slug);
      }));
    }
  }
  for (const [path, mime] of [
    [siteContent.cv.en, 'application/pdf'], [siteContent.cv.it, 'application/pdf'],
    ['/work/garda-flight.mp4', 'video/mp4'], ['/favicon.svg', 'image/svg+xml'],
    ['/personal/hero-hiking-2886.webp', 'image/webp'],
  ]) {
    const response = await fetch(`${base}${path}`, { method: 'HEAD' });
    assert.equal(response.status, 200, path);
    assert.ok(response.headers.get('content-type')?.includes(mime), path);
  }
  assert.equal((await fetch(`${base}/projects/not-a-real-project`)).status, 404);
  assert.equal((await fetch(`${base}/nannix/not-a-real-chapter`)).status, 404);
});
