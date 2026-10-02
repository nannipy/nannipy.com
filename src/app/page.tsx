import Image from "next/image";
import { Suspense } from "react";
import {
  getLocale,
  portfolioProjects,
  localHref,
  siteContent,
  homeMediaGallery,
  personalPhotos,
} from "@/lib/portfolio";
import { SiteNav, SiteFooter, ProjectCard } from "@/components/PortfolioShared";
import {
  PhotoJournal,
  TransitionLink,
} from "@/components/PortfolioInteractions";
import SpotifyRecentlyPlayed from "@/components/SpotifyRecentlyPlayed";
const journalItems = homeMediaGallery.map(({ src, width, height, caption, credit, poster }) => ({
  src, width, height, caption, credit, poster,
  tag: personalPhotos.find((photo) => photo.src === src)?.tag || "Sapienza Foiling Team",
}));
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const locale = getLocale((await searchParams).lang),
    it = locale === "it";
  return (
    <div className="portfolio-page">
      <SiteNav locale={locale} />
      <main id="main-content">
        <section className="hero">
          <div className="hero-topline">
            <span className="eyebrow">
              <span className="status-dot" />{" "}
              {it
                ? "Software engineer · Roma, Italia"
                : "Software engineer · Rome, Italy"}
            </span>
            <span className="eyebrow hero-note">
              {it ? "Curioso, per natura." : "Curious, by nature."}
            </span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <h1>
                Giovanni
                <br />
                <span>Battista</span>
                <br />
                Pernazza<span className="name-period">.</span>
              </h1>
              <p className="hero-description">
                {it
                  ? "Costruisco software. Mi sporco le mani. Prendo la strada panoramica."
                  : "I build software. Get my hands dirty. Take the scenic route."}
              </p>
              <a href="#work" className="text-link">
                {it ? "Esplora il mio lavoro" : "Explore my work"}{" "}
                <span>↓</span>
              </a>
            </div>
            <div className="hero-photos hero-single-photo">
              <div className="portrait-photo">
                <Image
                  src="/personal/hero-hiking-2886.webp"
                  alt={
                    it
                      ? "Giovanni durante un’escursione in montagna"
                      : "Giovanni hiking in the mountains"
                  }
                  width={1600}
                  height={2133}
                  sizes="(max-width:700px) 95vw, 42vw"
                  priority
                />
                <span className="portrait-label">
                  {it
                    ? "Dalle idee alle cose che funzionano."
                    : "From ideas to things that work."}
                </span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <p>
              {it
                ? "Dal web all’hardware. Dalle idee alle cose che funzionano."
                : "From the web to hardware. From ideas to things that work."}
            </p>
            <span>Python / TypeScript / C++</span>
          </div>
        </section>
        <section className="work-section section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {it
                  ? "Una selezione di ciò che costruisco"
                  : "A selection of things I build"}
              </p>
              <h2>
                {it ? "Lavori scelti" : "Selected work"}
                <sup>({portfolioProjects.length})</sup>
              </h2>
            </div>
            <p>
              {it
                ? "Per le persone, per i team. E a volte, solo per curiosità."
                : "For people, for teams. And sometimes, just out of curiosity."}
            </p>
          </div>
          <div className="project-grid">
            {portfolioProjects.slice(0, 4).map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                index={index}
              />
            ))}
          </div>
          <div className="more-work">
            <p className="eyebrow">
              {it ? "Altre esplorazioni" : "More explorations"}
            </p>
            {portfolioProjects.slice(4).map((p, index) => (
              <TransitionLink
                key={p.slug}
                href={localHref(`/projects/${p.slug}`, locale)}
                className="project-row"
                style={{ "--row-color": p.color } as React.CSSProperties}
              >
                <span className="row-index">
                  {String(index + 5).padStart(2, "0")}
                </span>
                <span className="row-name">
                  {p.title}
                  <small>{p.summary[locale]}</small>
                </span>
                <span className="row-category">{p.category}</span>
                <span className="row-arrow">↗</span>
              </TransitionLink>
            ))}
          </div>
        </section>
        <section className="about-section section" id="about">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {it
                  ? "La persona dietro i progetti"
                  : "The person behind the projects"}
              </p>
              <h2>{it ? "Un po’ di me." : "A little about me."}</h2>
            </div>
          </div>
          <div className="about-layout">
            <div className="about-intro">
              <p>
                {it
                  ? "Mi piace capire come funzionano le cose. E poi provare a costruirle."
                  : "I like figuring out how things work. Then trying to build them."}
              </p>
              <p className="body-copy">
                {it
                  ? "Sono Giovanni, software engineer a Roma e studente di Ingegneria Informatica alla Sapienza. Lavoro su applicazioni web, strumenti con AI e sistemi embedded. Mi interessa il punto in cui il codice incontra un bisogno reale."
                  : "I’m Giovanni, a software engineer based in Rome and a Computer Engineering student at Sapienza. I work on web applications, AI tools and embedded systems. I’m interested in the point where code meets a real need."}
              </p>
              <div className="cv-links">
                {(["en", "it"] as const).map((lang) => (
                  <a
                    key={lang}
                    href={
                      siteContent.cv[lang] ||
                      "https://docs.google.com/document/d/1vAQ1L3jJVlAHoDqd7wD-Hajjb4rq8G9MCdZC5TdDHrA/edit"
                    }
                    download={!!siteContent.cv[lang]}
                    className="text-link"
                  >
                    CV {lang === "en" ? "English" : "Italiano"} ↓
                  </a>
                ))}
              </div>
            </div>
            <div className="experience-list">
              <article>
                <span className="eyebrow">
                  {it
                    ? "Freelance · Sviluppo software"
                    : "Freelance · Software development"}
                </span>
                <h3>Edgeworks</h3>
                <p>
                  {it
                    ? "Strumenti per il lavoro quotidiano: Timesheet per tempi e report, HireSight per organizzare e analizzare le candidature."
                    : "Tools for everyday work: Timesheet for time tracking and reporting, HireSight for organising and analysing applications."}
                </p>
                <div className="experience-links">
                  <TransitionLink
                    href={localHref("/projects/timesheet", locale)}
                  >
                    Timesheet ↗
                  </TransitionLink>
                  <TransitionLink
                    href={localHref("/projects/hiresight", locale)}
                  >
                    HireSight ↗
                  </TransitionLink>
                </div>
              </article>
              <article>
                <span className="eyebrow">
                  {it
                    ? "Collaborazione · Impatto sociale"
                    : "Collaboration · Social impact"}
                </span>
                <h3>RECUP</h3>
                <p>
                  {it
                    ? "Un gestionale per supportare volontari, recuperi alimentari e report dell’associazione."
                    : "A management platform supporting volunteers, food recovery and the organisation’s reporting."}
                </p>
                <TransitionLink
                  className="text-link"
                  href={localHref("/projects/recup", locale)}
                >
                  {it ? "Il progetto" : "The project"} ↗
                </TransitionLink>
              </article>
              <article>
                <span className="eyebrow">
                  {it
                    ? "Software engineer · Set 2024 — oggi"
                    : "Software engineer · Sep 2024 — present"}
                </span>
                <h3>Sapienza Foiling Team</h3>
                <p>
                  {it
                    ? "Dal sito del team alla telemetria della barca: software che incontra sensori, acqua e lavoro di squadra."
                    : "From the team’s website to the boat’s telemetry: software meeting sensors, water and teamwork."}
                </p>
                <div className="experience-links">
                  <TransitionLink
                    href={localHref("/projects/sapienza-foiling-team", locale)}
                  >
                    Website ↗
                  </TransitionLink>
                  <TransitionLink
                    href={localHref("/projects/sft-telemetry", locale)}
                  >
                    Telemetry ↗
                  </TransitionLink>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="outside-section section" id="outside">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {it ? "Lontano dalla scrivania" : "Away from the desk"}
              </p>
              <h2>Touching the grass.</h2>
            </div>
            <p>
              {it
                ? "Corsa, ciclismo, montagna. Nessuna classifica: solo cose per cui vale la pena uscire."
                : "Running, cycling, mountains. Just a few reasons to get outside."}
            </p>
          </div>
          <PhotoJournal locale={locale} items={journalItems} />
          <div className="outside-bottom">
            <span className="eyebrow">
              {it
                ? "Meno numeri. Più ricordi."
                : "Less numbers. More memories."}
            </span>
            <Suspense fallback={<p className="eyebrow">Spotify</p>}>
              <SpotifyRecentlyPlayed locale={locale} />
            </Suspense>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
