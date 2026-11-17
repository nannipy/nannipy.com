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
                  ? "Sviluppo software per risolvere problemi e rendere più semplici le attività di ogni giorno. Mi piace usare la tecnologia per aiutare le persone a fare meglio ciò che conta per loro."
                  : "I build software to solve problems and make everyday tasks simpler. I enjoy using technology to help people do what matters to them more effectively."}
              </p>
              <a href="#work" className="text-link">
                {it ? "I miei progetti" : "My projects"}{" "}
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
                    ? "Una giornata in montagna."
                    : "A day in the mountains."}
                </span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <p>
              {it
                ? "Freelance e studente di Ingegneria Informatica alla Sapienza."
                : "Freelance developer and Computer Engineering student at Sapienza."}
            </p>
            <span>Python / TypeScript / C++</span>
          </div>
        </section>
        <section className="work-section section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {it
                  ? "Lavori e progetti personali"
                  : "Client work and personal projects"}
              </p>
              <h2>
                {it ? "Progetti" : "Projects"}
                <sup>({portfolioProjects.length})</sup>
              </h2>
            </div>
            <p>
              {it
                ? "Cosa ho costruito, le scelte fatte e quello che resta da migliorare."
                : "What I built, the decisions I made and what still needs work."}
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
              {it ? "Altri progetti" : "Other projects"}
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
                <span className="row-category">{it ? p.categoryIt : p.category}</span>
                <span className="row-arrow">↗︎</span>
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
              <h2>{it ? "Il mio lavoro" : "About my work"}</h2>
            </div>
          </div>
          <div className="about-layout">
            <div className="about-intro">
              <p>
                {it
                  ? "Lavoro come freelance e studio Ingegneria Informatica alla Sapienza."
                  : "I work as a freelance software engineer and study Computer Engineering at Sapienza."}
              </p>
              <p className="body-copy">
                {it
                  ? "Ho lavorato a strumenti per Edgeworks e Marsilea e al gestionale di RECUP. Con Sapienza Foiling Team sviluppo il sito, gli strumenti interni e l’elettronica della barca. Mi occupo di interfacce, backend, API e pubblicazione delle applicazioni, in base a ciò che il progetto richiede."
                  : "I’ve worked on tools for Edgeworks and Marsilea and RECUP’s management platform. With Sapienza Foiling Team, I build the website, internal tools and boat electronics. I work across interfaces, backends, APIs and deployment as the project requires."}
              </p>
              <p className="body-copy">
                {it
                  ? "Preferisco provare presto una versione piccola, parlarne con chi la userà e rivedere le scelte alla luce dei problemi che emergono. Nel tempo libero sperimento con modelli AI locali e un server domestico. Mi interessano collaborazioni in cui posso seguire un problema fino a un prodotto funzionante e continuare a migliorarlo con chi lo usa."
                  : "I prefer to try a small version early, discuss it with the people who’ll use it and revise decisions as problems emerge. In my own time, I experiment with local AI models and a home server. I’m interested in collaborations where I can follow a problem through to a working product and keep improving it with the people using it."}
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
                    ? "Ho contribuito a Time Tracker per registrare le ore, HireSight per organizzare e analizzare CV e al primo MVP di Mora per preparare bozze email con informazioni aziendali."
                    : "I helped build Time Tracker to record hours, HireSight to organise and analyse CVs, and Mora’s first MVP to draft email replies using company information."}
                </p>
                <div className="experience-links">
                  <TransitionLink
                    href={`${localHref("/projects/edgeworks", locale)}#timesheet`}
                  >
                    Time Tracker ↗︎
                  </TransitionLink>
                  <TransitionLink
                    href={`${localHref("/projects/edgeworks", locale)}#hiresight`}
                  >
                    HireSight ↗︎
                  </TransitionLink>
                  <TransitionLink href={`${localHref("/projects/edgeworks", locale)}#mora`}>Mora ↗︎</TransitionLink>
                </div>
              </article>
              <article>
                <span className="eyebrow">
                  {it
                    ? "Freelance · Gestionale per l’associazione"
                    : "Freelance · Association management platform"}
                </span>
                <h3>RECUP</h3>
                <p>
                  {it
                    ? "Ho sviluppato il portale in cui i volontari registrano i recuperi alimentari e l’area admin per consultare i dati e preparare report."
                    : "I built the portal where volunteers record food recoveries and the admin area for reviewing data and preparing reports."}
                </p>
                <TransitionLink
                  className="text-link"
                  href={localHref("/projects/recup", locale)}
                >
                  {it ? "Il progetto" : "The project"} ↗︎
                </TransitionLink>
              </article>
              <article>
                <span className="eyebrow">
                  {it ? "Freelance · Progetto su commissione" : "Freelance · Client project"}
                </span>
                <h3>Marsilea</h3>
                <p>
                  {it ? "Ho realizzato uno strumento per registrare le ore con Google Sheets e Google Apps Script." : "I built a time-tracking tool with Google Sheets and Google Apps Script."}
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
                    ? "Dal primo sito al CRM e al prototipo di telemetria. Per la stagione 2026–2027 coordino anche un piccolo gruppo di informatici ed elettronici."
                    : "From the first website to the CRM and telemetry prototype. For the 2026–2027 season, I also coordinate a small software and electronics group."}
                </p>
                <div className="experience-links">
                  <TransitionLink
                    href={localHref("/projects/sapienza-foiling-team", locale)}
                  >
                    {it ? "Il mio lavoro nel team" : "My work with the team"} ↗︎
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
              <h2>{it ? "Fuori dalla scrivania" : "Away from the desk"}</h2>
            </div>
            <p>
              {it
                ? "Corro, vado in bici e cammino in montagna. Mi aiutano a staccare, e a volte mi danno l’idea per un progetto."
                : "I run, cycle and hike. They help me switch off, and sometimes give me an idea for a project."}
            </p>
          </div>
          <PhotoJournal locale={locale} items={journalItems} />
          <div className="outside-bottom">
            <span className="eyebrow">
              {it
                ? "Foto dalle uscite e dal lavoro con il team"
                : "Photos from days outside and work with the team"}
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
