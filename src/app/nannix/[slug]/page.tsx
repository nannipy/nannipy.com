import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getLocale, localHref } from '@/lib/portfolio';
import { nannixArticles } from '@/lib/nannix';
import { NannixShell, NannixChapters, NannixText } from '@/components/NannixShared';
export function generateStaticParams() { return nannixArticles.map(a => ({ slug: a.slug })); }
export async function generateMetadata({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const article = nannixArticles.find(a => a.slug === slug), locale = getLocale(query.lang);
  return { title: `${article?.title[locale] || 'Nannix'} · Nannix`, description: article?.description[locale] };
}
export default async function NannixArticlePage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> }) {
  const [{ slug }, query] = await Promise.all([params, searchParams]), locale = getLocale(query.lang), it = locale === 'it';
  const article = nannixArticles.find(a => a.slug === slug);
  if (!article) notFound();
  const position = nannixArticles.indexOf(article), next = nannixArticles[position + 1];
  return <NannixShell locale={locale} path={`/nannix/${slug}`}>
    <header className="nannix-article-header"><Link className="text-link" href={localHref('/nannix', locale)}>← Nannix</Link><p className="eyebrow">{article.category === 'lab' ? 'Home Lab' : 'Open source'}</p><h1>{article.title[locale]}</h1><p className="nannix-lead">{article.description[locale]}</p></header>
    <div className="nannix-reading-layout"><aside className="nannix-sidebar"><nav aria-label={it ? 'In questa pagina' : 'On this page'}><p className="eyebrow">{it ? 'In questa pagina' : 'On this page'}</p>{article.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title[locale]}</a>)}</nav><NannixChapters locale={locale} current={slug} /></aside>
      <article className="nannix-prose">
        {article.image && <figure><Image src={article.image} alt={article.title[locale]} width={article.imageWidth || 1500} height={article.imageHeight || 1000} sizes="(max-width: 700px) 90vw, 60vw" priority /><figcaption>{it ? 'Dal mio laboratorio.' : 'From my lab.'}</figcaption></figure>}
        {slug === 'tailscale-pihole' && <figure className="nannix-network" aria-label={it ? 'Accesso ai servizi del laboratorio' : 'Access to lab services'}>
          <div><span>{it ? 'I miei dispositivi' : 'My devices'}</span><span aria-hidden="true">↔</span><span>{it ? 'Rete privata Tailscale' : 'Tailscale private network'}</span><span aria-hidden="true">↔</span><span>{it ? 'MacBook e servizi' : 'MacBook and services'}</span></div>
          <figcaption>{it ? 'Pi-hole fornisce il filtro DNS ai dispositivi configurati. Questo schema rappresenta l’accesso ai servizi, senza presumere l’instradamento di tutta la navigazione.' : 'Pi-hole provides DNS filtering for configured devices. This diagram shows service access without assuming all browsing traffic is routed through the server.'}</figcaption>
        </figure>}
        {article.sections.map(section => <section id={section.id} key={section.id}><h2>{section.title[locale]}</h2>{section.paragraphs.map((p, i) => <p key={i}><NannixText text={p[locale]} /></p>)}</section>)}
        <section className="nannix-sources" aria-labelledby="sources-title"><p className="eyebrow">{it ? 'Per approfondire' : 'Read further'}</p><h2 id="sources-title">{it ? 'Documentazione e riferimenti' : 'Documentation and references'}</h2><ul>{article.sources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.title} ↗︎</a></li>)}</ul><Link className="text-link" href={localHref('/nannix/biblioteca', locale)}>{it ? 'Esplora la biblioteca' : 'Explore the library'} ↗︎</Link></section>
        <nav className="nannix-next" aria-label={it ? 'Continua a leggere' : 'Keep reading'}><p className="eyebrow">{it ? 'Continua a leggere' : 'Keep reading'}</p><Link href={localHref(next ? `/nannix/${next.slug}` : '/nannix/biblioteca', locale)}>{next ? next.title[locale] : it ? 'La biblioteca' : 'The library'} <span aria-hidden="true">↗︎</span></Link></nav>
      </article>
    </div>
  </NannixShell>;
}
