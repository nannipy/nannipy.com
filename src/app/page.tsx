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
const journalPalette = [
  ...portfolioProjects.map(({ color, ink }) => ({ color, ink })),
  { color: "#d5b8b3", ink: "#422c30" },
  { color: "#b3c7a8", ink: "#2b3925" },
  { color: "#cbbd9f", ink: "#3b3224" },
  { color: "#b8c6d5", ink: "#293644" },
];
const journalItems = homeMediaGallery.map(({ src, width, height, caption, credit, poster }, index) => ({
  src, width, height, caption, credit, poster,
  ...journalPalette[index % journalPalette.length],
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
                  src="/personal/profile-hiking.jpg"
                  alt={
                    it
                      ? "Giovanni durante un’escursione in montagna"
                      : "Giovanni hiking in the mountains"
                  }
                  width={3024}
                  height={3568}
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
                {it ? "Progetti" : "Projects"}
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
                  ? "Freelance e collaborazioni"
                  : "Freelance work and collaborations"}
              </p>
              <h2>{it ? "Esperienze e collaborazioni." : "Work and collaborations."}</h2>
            </div>
          </div>
          <div className="about-layout">
            <div className="about-intro">
              <p>
                {it
                  ? "Software costruito insieme a persone, aziende e associazioni."
                  : "Software built with people, companies and organisations."}
              </p>
              <p className="body-copy">
                {it
                  ? "Lavoro come freelance su progetti per Edgeworks, RECUP e Marsilea. Accanto a questi incarichi, collaboro con Sapienza Foiling Team: un impegno continuativo e strutturato nello sviluppo software ed embedded, che porto avanti mentre studio Ingegneria Informatica alla Sapienza."
                  : "I work as a freelancer on projects for Edgeworks, RECUP and Marsilea. Alongside these assignments, I contribute to Sapienza Foiling Team: a sustained, structured commitment to software and embedded development, which I pursue while studying Computer Engineering at Sapienza."}
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
                    ? "HireSight per le candidature, Time Tracker per tempi e report e Mora: un primo MVP per preparare bozze email con un piccolo sistema RAG."
                    : "HireSight for applications, Time Tracker for time tracking and reporting, and Mora: an early MVP for email drafts with a small RAG system."}
                </p>
                <div className="experience-links">
                  <TransitionLink
                    href={`${localHref("/projects/edgeworks", locale)}#timesheet`}
                  >
                    Time Tracker ↗
                  </TransitionLink>
                  <TransitionLink
                    href={`${localHref("/projects/edgeworks", locale)}#hiresight`}
                  >
                    HireSight ↗
                  </TransitionLink>
                  <TransitionLink href={`${localHref("/projects/edgeworks", locale)}#mora`}>Mora ↗</TransitionLink>
                </div>
              </article>
              <article>
                <span className="eyebrow">
                  {it
                    ? "Freelance · Impatto sociale"
                    : "Freelance · Social impact"}
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
                  {it ? "Freelance · Progetto su commissione" : "Freelance · Client project"}
                </span>
                <h3>Marsilea</h3>
                <p>
                  {it ? "Collaborazione freelance su un progetto per Marsilea." : "Freelance collaboration on a project for Marsilea."}
                </p>
              </article>
              <article>
                <span className="eyebrow">
                  {it
                    ? "Collaborazione nel team · Set 2024 — oggi"
                    : "Team collaboration · Sep 2024 — present"}
                </span>
                <h3>Sapienza Foiling Team</h3>
                <p>
                  {it
                    ? "Un’esperienza con responsabilità e continuità simili a quelle di un lavoro: dal sito del team alla telemetria della barca, tra software, sensori e lavoro di squadra."
                    : "An experience with the responsibility and continuity of a job: from the team’s website to the boat’s telemetry, combining software, sensors and teamwork."}
                </p>
                <div className="experience-links">
                  <TransitionLink
                    href={localHref("/projects/sapienza-foiling-team", locale)}
                  >
                    {it ? "Il percorso nel team" : "My journey with the team"} ↗
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
              <h2>Touching the grass. Sometimes.</h2>
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
