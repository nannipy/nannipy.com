import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getLocale, localHref } from "@/lib/portfolio";
import { nannixArticles } from "@/lib/nannix";
import { NannixShell } from "@/components/NannixShared";

export const metadata: Metadata = {
  title: "Nannix · Il mio server domestico",
  description:
    "Ho riutilizzato un vecchio computer per ospitare foto e applicazioni. Qui documento configurazione, accesso remoto, monitoraggio e limiti del mio laboratorio.",
};
export default async function NannixPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const locale = getLocale((await searchParams).lang),
    it = locale === "it";
  const services = [
    "Immich",
    "Tailscale",
    "Pi-hole",
    "File Browser",
    "Beszel",
    "Scrutiny",
    "Uptime Kuma",
    "Watchtower",
    "Telegram bots",
  ];
  return (
    <NannixShell locale={locale} path="/nannix">
      <header className="nannix-hero">
        <p className="eyebrow">
          {it
            ? "Appunti da casa"
            : "Notes from home"}
        </p>
        <h1>
          Nannix<span>.</span>
        </h1>
        <p className="nannix-lead">
          {it
            ? "Ho riutilizzato un vecchio computer che avevo già per farne un server domestico."
            : "I reused an old computer I already had to build a home server."}
        </p>
        <p>
          {it
            ? "Uso Linux Mint e Docker per ospitare foto, file e applicazioni personali. In Nannix documento come li uso, le scelte di configurazione e i problemi che incontro."
            : "I use Linux Mint and Docker to host photos, files and personal applications. Nannix documents how I use them, configuration choices and problems I encounter."}
        </p>
        <p>
          {it
            ? "Volevo più controllo sui miei dati e meno abbonamenti. Gestire il server significa anche occuparmi di aggiornamenti, spazio e backup. Qui racconto quello che funziona e quello su cui devo ancora lavorare."
            : "I wanted more control over my data and fewer subscriptions. Running the server also means handling updates, storage and backups. Here I write about what works and what still needs attention."}
        </p>
        <div className="nannix-hero-links">
          <Link className="text-link" href={localHref("/nannix/setup", locale)}>
            {it ? "La configurazione" : "The setup"} ↗︎
          </Link>
          <Link
            className="text-link"
            href={localHref("/nannix/open-source", locale)}
          >
            {it ? "Perché open source" : "Why open source"} ↗︎
          </Link>
        </div>
      </header>
      <section className="nannix-machine" aria-labelledby="machine-title">
        <Image
          src="/work/nannix-wordmark.webp"
          alt="NANNIX"
          width={1600}
          height={1066}
          sizes="(max-width: 700px) 90vw, 55vw"
          priority
        />
        <div>
          <p className="eyebrow">
            {it ? "La macchina" : "The machine"}
          </p>
          <h2 id="machine-title">{it ? "Il computer che avevo già" : "The computer I already had"}</h2>
          <p>
            {it
              ? "Era fermo a casa. Ora ospita la mia raccolta fotografica e gli altri servizi del laboratorio. Ha 256 GB di spazio e nessuna batteria: un blackout lo spegne subito. Lo spazio e l’alimentazione sono due limiti da migliorare."
              : "It was sitting unused at home. Now it hosts my photo library and the other lab services. It has 256 GB of storage and no battery, so a power cut switches it off immediately. Storage and power are two limits I want to improve."}
          </p>
          <ul className="nannix-services">
            {services.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="nannix-index" aria-labelledby="lab-title">
        <div className="nannix-section-heading">
          <p className="eyebrow">Home Lab</p>
          <h2 id="lab-title">
            {it ? "I servizi che uso" : "The services I use"}
          </h2>
          <p>
            {it
              ? "Sono partito dalle foto con Immich, poi ho aggiunto accesso ai file, filtro DNS e monitoraggio. Ogni articolo spiega un’esigenza, la scelta fatta e cosa comporta mantenerla."
              : "I started with photos in Immich, then added file access, DNS filtering and monitoring. Each article covers a need, the choice I made and the work it takes to maintain it."}
          </p>
        </div>
        <div className="nannix-card-grid">
          {nannixArticles
            .filter((a) => a.category === "lab")
            .map((article, i) => (
              <Link
                className="nannix-card"
                key={article.slug}
                href={localHref(`/nannix/${article.slug}`, locale)}
              >
                <span className="eyebrow">
                  {String(i + 1).padStart(2, "0")} / Home Lab
                </span>
                <h3>{article.title[locale]}</h3>
                <p>{article.description[locale]}</p>
                <span className="nannix-card-arrow" aria-hidden="true">
                  ↗︎
                </span>
              </Link>
            ))}
        </div>
      </section>
      <section
        className="nannix-bottom-grid"
        aria-label={it ? "Idee e letture" : "Ideas and reading"}
      >
        <Link
          className="nannix-card nannix-idea"
          href={localHref("/nannix/open-source", locale)}
        >
          <p className="eyebrow">Open source</p>
          <h2>
            {it
              ? "Perché scelgo software aperto"
              : "Why I choose open software"}
          </h2>
          <p>
            {it
              ? "Poter leggere il codice e capire le scelte di chi lo ha scritto cambia il modo in cui uso uno strumento. Qui raccolgo anche le mie idee sulla documentazione e sul lavoro nei team."
              : "Being able to read the code and understand its author’s decisions changes how I use a tool. I also write about documentation and how I’d like to work in a team."}
          </p>
          <span className="nannix-card-arrow" aria-hidden="true">
            ↗︎
          </span>
        </Link>
        <Link
          className="nannix-card"
          href={localHref("/nannix/biblioteca", locale)}
        >
          <p className="eyebrow">{it ? "Biblioteca" : "Library"}</p>
          <h2>
            {it
              ? "Guide e letture"
              : "Guides and reading"}
          </h2>
          <p>
            {it
              ? "I riferimenti che consulto per il laboratorio e i progetti che voglio approfondire, con una nota sul perché li ho salvati."
              : "References I use for the lab and projects I want to explore, with a note on why I saved each one."}
          </p>
          <span className="nannix-card-arrow" aria-hidden="true">
            ↗︎
          </span>
        </Link>
      </section>
    </NannixShell>
  );
}
