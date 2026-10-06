import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getLocale, localHref } from "@/lib/portfolio";
import { nannixArticles } from "@/lib/nannix";
import { NannixShell } from "@/components/NannixShared";

export const metadata: Metadata = {
  title: "Nannix · Il mio percorso nel self hosting",
  description:
    "Un racconto personale di self hosting, dati, DNS e strumenti aperti: quello che esploro e la comodità che provo a costruire da me.",
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
            ? "Appunti da casa · da gennaio 2026"
            : "Notes from home · since January 2026"}
        </p>
        <h1>
          Nannix<span>.</span>
        </h1>
        <p className="nannix-lead">
          {it
            ? "Mi piace capire le cose che uso. E provare a costruirmele."
            : "I like understanding the things I use. And trying to build them myself."}
        </p>
        <p>
          {it ? (
            <>
              Da un po’ di tempo mi sono appassionato al{" "}
              <strong>self hosting</strong>. Sono partito dalla voglia di far
              girare le mie applicazioni e mi sono ritrovato a esplorare tutto
              quello che succede attorno ai miei dati: DNS, tracking, pubblicità
              e strumenti per avere un po’ più di controllo.
            </>
          ) : (
            <>
              I have been getting into <strong>self-hosting</strong> for a
              while. I started with wanting to run my own applications and ended
              up exploring what happens around my data: DNS, tracking,
              advertising and tools that give me a little more control.
            </>
          )}
        </p>
        <p>
          {it ? (
            <>
              Gli abbonamenti mi sono sempre stati antipatici. Quando a una
              quota mensile si aggiunge la raccolta di informazioni sulle mie
              abitudini, mi chiedo quanto sto concedendo in cambio della
              comodità. Riconosco il valore di un servizio che funziona bene; io
              sono disposto a dedicare tempo a{" "}
              <strong>costruirmi una parte di quell’efficienza</strong>, e a
              imparare mentre lo faccio.
            </>
          ) : (
            <>
              I have always disliked subscriptions. When a monthly fee comes
              with collecting information about my habits, I wonder how much I
              am giving in exchange for convenience. I recognise the value of a
              service that works well; I am willing to spend time{" "}
              <strong>building some of that efficiency myself</strong> and
              learning along the way.
            </>
          )}
        </p>
        <p>
          {it
            ? "Nannix è il racconto di questo percorso: cosa ho esplorato, cosa mi piace usare, le scelte che rifarei e quelle su cui sto ancora ragionando. Tutto parte da un vecchio MacBook che avevo già in casa."
            : "Nannix is the story of that journey: what I have explored, what I enjoy using, the choices I would make again and those I am still thinking through. It all starts with an old MacBook I already had at home."}
        </p>
        <div className="nannix-hero-links">
          <Link className="text-link" href={localHref("/nannix/setup", locale)}>
            {it ? "Entra nel laboratorio" : "Step into the lab"} ↗︎
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
            {it ? "Tutto è partito da qui" : "It all started here"}
          </p>
          <h2 id="machine-title">MacBook Air, 2016.</h2>
          <p>
            {it
              ? "Era fermo a casa e mi piaceva l’idea di dargli un altro lavoro. Oggi gira con Linux Mint e Docker: 256 GB di spazio, nessuna batteria e parecchie cose da imparare. È la macchina su cui le mie curiosità diventano strumenti che uso davvero."
              : "It was sitting unused at home, and I liked giving it another job. Today it runs Linux Mint and Docker: 256 GB of storage, no battery and plenty to learn. It is the machine where my curiosity turns into tools I actually use."}
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
            {it ? "Un pezzo alla volta." : "One piece at a time."}
          </h2>
          <p>
            {it
              ? "Le foto sono state il primo passo. Poi sono arrivati i file, la curiosità per la rete e la voglia di capire come sta il server. Qui racconto come ogni pezzo ha trovato posto nella mia giornata."
              : "Photos were the first step. Then came files, curiosity about the network and wanting to understand how the server is doing. Here I tell how each piece found a place in my day."}
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
              ? "Mi piace poterci mettere le mani."
              : "I like being able to get my hands on it."}
          </h2>
          <p>
            {it
              ? "Questo percorso mi sta aiutando a capire cosa cerco nel software e nel modo di lavorare: conoscenza condivisa, autonomia e spazio per costruire."
              : "This journey is helping me understand what I look for in software and ways of working: shared knowledge, independence and room to build."}
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
              ? "Le cose su cui voglio tornare."
              : "Things I want to return to."}
          </h2>
          <p>
            {it
              ? "Persone, guide, progetti e letture che mi hanno dato un’idea o aperto una domanda. Li tengo qui insieme a quello che voglio ancora esplorare."
              : "People, guides, projects and readings that gave me an idea or opened a question. I keep them here alongside what I still want to explore."}
          </p>
          <span className="nannix-card-arrow" aria-hidden="true">
            ↗︎
          </span>
        </Link>
      </section>
    </NannixShell>
  );
}
