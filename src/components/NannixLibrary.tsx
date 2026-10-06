'use client';
import { useState } from 'react';
import { libraryKinds, libraryKindLabels, nannixLibrary, type LibraryKind } from '@/lib/nannix';
import type { Locale } from '@/lib/portfolio';
export default function NannixLibrary({ locale }: { locale: Locale }) {
  const [kind, setKind] = useState<LibraryKind | 'all'>('all');
  const [topic, setTopic] = useState('all');
  const [query, setQuery] = useState('');
  const it = locale === 'it';
  const topics = [...new Set(nannixLibrary.flatMap(r => r.topics))].sort();
  const search = query.trim().toLocaleLowerCase(locale);
  const results = nannixLibrary.filter(r => (kind === 'all' || kind === r.kind) && (topic === 'all' || r.topics.includes(topic)) && `${r.title} ${r.author} ${r.note[locale]} ${r.topics.join(' ')}`.toLocaleLowerCase(locale).includes(search));
  return <section className="nannix-library" aria-label={it ? 'Catalogo della biblioteca' : 'Library catalogue'}>
    <div className="nannix-library-controls"><label htmlFor="library-search">{it ? 'Cerca nella biblioteca' : 'Search the library'}<input id="library-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={it ? 'Titolo, autore, argomento…' : 'Title, author, topic…'} /></label><label htmlFor="library-topic">{it ? 'Argomento' : 'Topic'}<select id="library-topic" value={topic} onChange={e => setTopic(e.target.value)}><option value="all">{it ? 'Tutti gli argomenti' : 'All topics'}</option>{topics.map(t => <option key={t} value={t}>{t}</option>)}</select></label></div>
    <div className="nannix-filters" role="group" aria-label={it ? 'Tipo di risorsa' : 'Resource type'}><button type="button" aria-pressed={kind === 'all'} onClick={() => setKind('all')}>{it ? 'Tutto' : 'All'}</button>{libraryKinds.map(k => <button type="button" key={k} aria-pressed={kind === k} onClick={() => setKind(k)}>{libraryKindLabels[k][locale]}</button>)}</div>
    <p className="eyebrow nannix-results" role="status" aria-live="polite">{results.length} {it ? 'risorse' : 'resources'}</p>
    {results.length ? <ul className="nannix-library-list">{results.map(resource => <li key={resource.id}><div><span className="eyebrow">{libraryKindLabels[resource.kind][locale]}</span><h2><a href={resource.href} target="_blank" rel="noreferrer">{resource.title} <span aria-hidden="true">↗︎</span></a></h2><p className="nannix-library-author">{resource.author}</p></div><div><p>{resource.note[locale]}</p><ul className="nannix-tags" aria-label={it ? 'Argomenti' : 'Topics'}>{resource.topics.map(t => <li key={t}>{t}</li>)}</ul></div></li>)}</ul> : <div className="nannix-empty"><h2>{it ? 'Questo scaffale aspetta ancora.' : 'This shelf is still waiting.'}</h2><p>{it ? 'Non ci sono risorse con questi filtri. La raccolta cresce nel tempo: libri e paper avranno posto anche qui.' : 'No resources match these filters. The collection grows over time: books and papers have a place here too.'}</p><button type="button" className="text-link" onClick={() => { setKind('all'); setTopic('all'); setQuery(''); }}>{it ? 'Mostra tutte le risorse' : 'Show all resources'} ↗︎</button></div>}
  </section>;
}
