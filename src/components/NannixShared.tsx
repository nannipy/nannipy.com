import Link from 'next/link';
import type { ReactNode } from 'react';
import { localHref, type Locale } from '@/lib/portfolio';
import { nannixArticles } from '@/lib/nannix';
import { SiteNav, SiteFooter } from './PortfolioShared';

export function NannixText({ text }: { text: string }) {
  return <>{text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part)}</>;
}

export function NannixShell({ locale, path, children }: { locale: Locale; path: string; children: ReactNode }) {
  const it = locale === 'it';
  return <div className="portfolio-page nannix-page">
    <SiteNav locale={locale} path={path} />
    <main id="main-content">
      <nav className="nannix-nav" aria-label={it ? 'Navigazione Nannix' : 'Nannix navigation'}>
        {[
          ['/nannix', 'Nannix', 'Nannix'],
          ['/nannix/setup', 'Home Lab', 'Home Lab'],
          ['/nannix/open-source', 'Open source', 'Open source'],
          ['/nannix/biblioteca', 'Biblioteca', 'Library'],
        ].map(([href, a, b]) => <Link key={href} href={localHref(href, locale)} aria-current={path === href ? 'page' : undefined}>{it ? a : b}</Link>)}
      </nav>
      {children}
    </main>
    <SiteFooter locale={locale} />
  </div>;
}

export function NannixChapters({ locale, current }: { locale: Locale; current?: string }) {
  return <nav className="nannix-chapters" aria-label={locale === 'it' ? 'Capitoli del laboratorio' : 'Lab chapters'}>
    <p className="eyebrow">{locale === 'it' ? 'Il laboratorio' : 'The lab'}</p>
    {nannixArticles.filter(a => a.category === 'lab').map((a, i) => <Link key={a.slug} href={localHref(`/nannix/${a.slug}`, locale)} aria-current={current === a.slug ? 'page' : undefined}><span>{String(i + 1).padStart(2, '0')}</span>{a.title[locale]}</Link>)}
  </nav>;
}
