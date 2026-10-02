import ProjectJourney from "@/components/ProjectJourney";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { portfolioProjects, getLocale, localHref } from "@/lib/portfolio";
import {
  SiteNav,
  SiteFooter,
  ProjectCover,
} from "@/components/PortfolioShared";
import { TransitionLink } from "@/components/PortfolioInteractions";
export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);
  return {
    title: project?.title || "Project",
    description: project?.summary.en,
  };
}
export default async function ProjectPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  const locale = getLocale(query.lang),
    it = locale === "it",
    index = portfolioProjects.indexOf(project),
    next = portfolioProjects[(index + 1) % portfolioProjects.length];
  return (
    <div className="portfolio-page">
      <SiteNav locale={locale} path={`/projects/${slug}`} />
      <main
        id="main-content"
        className={`project-detail ${slug === "sft-telemetry" ? "project-telemetry" : ""}`}
      >
        <TransitionLink
          href={`${localHref("/", locale)}#work`}
          className="text-link back-link"
        >
          ← {it ? "Tutti i progetti" : "All projects"}
        </TransitionLink>
        <div className="project-title-block">
          <p className="eyebrow">{project.category}</p>
          <h1>
            {project.title}
            <span style={{ color: project.color }}>.</span>
          </h1>
          <p>{project.summary[locale]}</p>
        </div>
        <ProjectCover project={project} priority />
        {project.chapters ? (
          <section
            className="project-chapters"
            aria-label={it ? "La nostra storia al Garda" : "Our story at Garda"}
          >
            {project.chapters.map((chapter, index) => (
              <article
                className={`story-chapter ${chapter.video ? "chapter-with-video" : ""} ${!chapter.image && !chapter.video ? "chapter-text-only" : ""}`}
                key={chapter.title.en}
              >
                <div className="chapter-text">
                  <p className="eyebrow">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {it ? "La nostra storia" : "Our story"}
                  </p>
                  <h2>{chapter.title[locale]}</h2>
                  {chapter.body.map((paragraph, i) => (
                    <p key={i}>{paragraph[locale]}</p>
                  ))}
                </div>
                <div
                  className={chapter.video ? "chapter-media-pair" : undefined}
                >
                  {chapter.video ? (
                    <figure className="chapter-photo chapter-video">
                      <video
                        controls
                        playsInline
                        preload="none"
                        poster={chapter.video.poster}
                        width={720}
                        height={1280}
                        aria-label={chapter.video.caption[locale]}
                      >
                        <source src={chapter.video.src} type="video/mp4" />
                        <a href={chapter.video.src}>
                          {it ? "Guarda il video" : "Watch the video"}
                        </a>
                      </video>
                      <figcaption>{chapter.video.caption[locale]}</figcaption>
                    </figure>
                  ) : null}
                  {chapter.image ? (
                    <figure
                      className="chapter-photo"
                      style={{ "--media-ratio": chapter.image.width / chapter.image.height } as CSSProperties}
                    >
                      <Image
                        src={chapter.image.src}
                        alt={chapter.image.caption[locale]}
                        width={chapter.image.width}
                        height={chapter.image.height}
                        sizes={slug === "sft-telemetry" ? "(max-width:900px) 90vw, 45vw" : "(max-width:700px) 95vw, 85vw"}
                      />
                      <figcaption>
                        <span>{chapter.image.caption[locale]}</span>
                        {chapter.image.credit ? (
                          <span>© {chapter.image.credit}</span>
                        ) : null}
                      </figcaption>
                    </figure>
                  ) : null}
                </div>
              </article>
            ))}
          </section>
        ) : null}
        <section className="project-story">
          <div>
            {project.logo && project.website ? (
              <a
                className="project-association"
                href={project.website}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={project.logo}
                  alt="Logo RECUP"
                  width={120}
                  height={154}
                />
                <span>
                  {it ? "L’associazione RECUP" : "RECUP association"} ↗
                </span>
              </a>
            ) : null}
            <p className="eyebrow">
              {project.chapters
                ? it
                  ? "Il mio contributo · Telemetria"
                  : "My contribution · Telemetry"
                : it
                  ? "Il progetto"
                  : "The project"}
            </p>
            <div className="project-tools">
              {project.tools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {project.designCredit ? (
              <p className="project-design-credit">
                {it ? "Design di" : "Design by"}{" "}
                {project.designCredit.instagram ? (
                  <a href={project.designCredit.instagram} target="_blank" rel="noreferrer" className="text-link">
                    {project.designCredit.name} ↗
                  </a>
                ) : <span>{project.designCredit.name}</span>}
              </p>
            ) : null}
            <div className="project-external">
              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  {it ? "Visita il sito" : "Visit website"} ↗
                </a>
              ) : null}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  GitHub ↗
                </a>
              ) : null}
            </div>
          </div>
          <div>
            {project.story.map((p, i) => (
              <p key={i}>{p[locale]}</p>
            ))}
          </div>
        </section>
        {project.gallery ? (
          <section
            className={`project-field-gallery ${project.gallery.some((photo) => photo.body) ? "gallery-with-story" : ""}`}
            aria-label={
              project.slug === "sft-telemetry"
                ? it ? "Dal banco di lavoro alla barca" : "From the workbench to the boat"
                : it ? "Il progetto, tra immagini e racconto" : "The project, in pictures and words"
            }
          >
            {project.gallery.map((photo) => (
              <article className="field-entry" key={photo.src}>
                {photo.body ? (
                  <div className="field-copy">
                    {photo.title ? <h2>{photo.title[locale]}</h2> : null}
                    {photo.body.map((paragraph, i) => (
                      <p key={i}>{paragraph[locale]}</p>
                    ))}
                  </div>
                ) : null}
                <figure
                  className={`chapter-photo ${photo.mediaKind === "logo" ? "service-logo" : ""}`}
                  style={{ "--media-ratio": photo.width / photo.height } as CSSProperties}
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption[locale]}
                    width={photo.width}
                    height={photo.height}
                    sizes={slug === "sft-telemetry" ? "(max-width:900px) 90vw, 45vw" : "(max-width:700px) 95vw, 50vw"}
                  />
                  <figcaption>
                    {photo.website ? (
                      <a href={photo.website} target="_blank" rel="noreferrer" className="text-link">
                        {new URL(photo.website).hostname} ↗
                      </a>
                    ) : photo.caption[locale]}
                  </figcaption>
                </figure>
              </article>
            ))}
          </section>
        ) : null}
        {project.technicalImage ? (
          <figure className="chapter-photo technical-photo">
            <Image
              src={project.technicalImage}
              alt={
                it
                  ? "Visualizzatore di telemetria SFT senza sensore collegato"
                  : "SFT telemetry visualiser without a connected sensor"
              }
              width={1800}
              height={1125}
              sizes="(max-width:700px) 95vw, 85vw"
            />
            <figcaption>
              {it
                ? "Il visualizzatore · sensore non collegato"
                : "The visualiser · sensor disconnected"}
            </figcaption>
          </figure>
        ) : null}
        <ProjectJourney project={project} locale={locale} />
        {project.images.length > 1 && project.cover !== "pomodoro" ? (
          <section
            className="project-screenshots"
            aria-label={it ? "Immagini del progetto" : "Project images"}
          >
            {project.images.slice(1).map((src, i) => (
              <figure key={src}>
                <Image
                  src={src}
                  alt={`${project.title} — ${it ? "vista" : "view"} ${i + 2}`}
                  width={1800}
                  height={1125}
                  sizes="(max-width:700px) 95vw, 85vw"
                />
                <figcaption>
                  {project.title} / {String(i + 2).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </section>
        ) : null}
        <TransitionLink
          className="next-project"
          href={localHref(`/projects/${next.slug}`, locale)}
        >
          <span className="eyebrow">
            {it ? "Continua a esplorare" : "Keep exploring"}
          </span>
          <span>{next.title} ↗</span>
        </TransitionLink>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
