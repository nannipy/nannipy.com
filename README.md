# nanni.py

Personal portfolio of Giovanni Battista Pernazza, built with Next.js 16 App Router, React 19 and TypeScript.

Dark portfolio with English and Italian content, curated project stories, real screenshots and photographs, and downloadable CVs. Project content stays editorial in `src/lib/portfolio.ts`; no automatic repository publishing is required.

## Development and checks

Use Node.js 22.18 or newer (the tests use native TypeScript stripping).

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build -- --webpack
npm start
```

The lint command checks the portfolio pages and their active components/data. Tests check curated routes and media files. To run the HTTP smoke test against a running production server, use `PORTFOLIO_TEST_URL=http://localhost:3100 npm test`.

## Content and identity

- `src/lib/portfolio.ts`: project narratives, galleries, links, colours and EN/IT copy.
- `src/components/PortfolioShared.tsx`: shared navigation, wordmark, project covers and footer.
- `src/components/PortfolioInteractions.tsx`: native photo dialog and lightweight route transitions.
- `public/work`, `public/personal`, `public/cv`: published media and CVs.
- `scripts/generate-wordmark-brand.mjs`: custom n favicon and sharing artwork. Run with `node scripts/generate-wordmark-brand.mjs`.

The wordmark is **nanni.py** with a sage dot; animation respects reduced-motion preferences. Every project has a distinct colour. Photographs are resized WebP files, and the Garda flight video loads only on demand.

## Photography

Strava is not connected. The personal gallery displays owner-provided photographs without activity statistics. See `REDESIGN_NOTES.md` for media provenance and remaining integration limits.

Original photographs, unused media and design previews are preserved outside
the repository in `../nannipy-materiale-archiviato-2026-10-02/`. See its
`manifest.json` for original paths and verified checksums.

## Nannix: Home Lab, open source e biblioteca

La sezione `/nannix?lang=it` raccoglie la panoramica del laboratorio e i capitoli
`setup`, `immich`, `tailscale-pihole`, `file-browser`, `monitoraggio`,
`manutenzione` e `open-source`. Le stesse pagine sono disponibili in inglese
con `?lang=en`. La pagina portfolio `/projects/homelab` conserva una presentazione
breve e rimanda a Nannix.

I testi sono in `src/lib/nannix.ts`: ogni capitolo ha titolo, descrizione,
sezioni con ancore, paragrafi italiani e inglesi, eventuale immagine e fonti.
La sintassi `**testo**` crea enfasi semantica in grassetto. Il renderer non
interpreta HTML. Le esperienze personali sono basate sull’intervista;
configurazioni non confermate non sono presentate come guide riproducibili.

### Aggiungere risorse alla biblioteca

La biblioteca `/nannix/biblioteca` permette ricerca libera e filtri combinabili
per tipo e argomento. Per aggiungere una risorsa, aggiungere un elemento a
`nannixLibrary` in `src/lib/nannix.ts`, con ID univoco, titolo, autore, URL,
argomenti e nota nelle due lingue. Per esempio:

```ts
{
  id: 'identificatore-univoco',
  title: 'Titolo della risorsa',
  kind: 'paper',
  author: 'Autore',
  href: 'https://indirizzo-della-risorsa.example',
  topics: ['Ricerca', 'Open source'],
  note: { it: 'Perché mi interessa.', en: 'Why it interests me.' },
}
```

Tipi supportati: `channel`, `video`, `book`, `paper`, `documentation`, `website`,
`repository` (mostrato come “Repository”).
I nuovi argomenti compaiono automaticamente nel filtro. Libri, video e paper
possono essere aggiunti senza cambiare la pagina. I filtri vuoti mostrano uno
stato dedicato e un pulsante per ripristinare l’intero catalogo.
La raccolta è mantenuta nel repository; non è presente un editor amministrativo.
