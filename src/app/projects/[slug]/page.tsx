import ProjectJourney from "@/components/ProjectJourney";
import ProjectImage, { needsImageFrame } from "@/components/ProjectImage";
import ProjectResources, { LinkedProjectText, createProjectTextLinker } from "@/components/ProjectResources";
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
  const linkText = createProjectTextLinker();
  return (
    <div className="portfolio-page">
      <SiteNav locale={locale} path={`/projects/${slug}`} />
      <main
        id="main-content"
        className={`project-detail ${slug === "sapienza-foiling-team" ? "project-telemetry project-narrative" : slug === "edgeworks" ? "project-narrative" : ""}`}
        style={{ "--project-color": project.color, "--project-ink": project.ink } as CSSProperties}
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
          <p>{linkText(project.summary[locale])}</p>
        </div>
        <ProjectCover project={project} priority />
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
              {it ? "Il progetto" : "The project"}
            </p>
            <div className="project-tools">
              {project.tools.map((t) => (
                <span key={t}><LinkedProjectText>{t}</LinkedProjectText></span>
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
              <p key={i}>{linkText(p[locale])}</p>
            ))}
          </div>
        </section>
        {slug === "homelab" && (
          <section className="nannix-project-entry">
            <div>
              <p className="eyebrow">Nannix</p>
              <h2>{it ? "Dentro il mio Home Lab." : "Inside my Home Lab."}</h2>
              <p>{it ? "Il mio percorso nel self hosting: quello che esploro, gli strumenti che mi piace usare e la comodità che provo a costruire da me. Nannix raccoglie il racconto, insieme alle idee e alle letture che lo accompagnano." : "My self-hosting journey: what I explore, the tools I enjoy using and the convenience I try to build myself. Nannix brings together the story, the ideas and the readings that accompany it."}</p>
            </div>
            <TransitionLink href={localHref("/nannix", locale)} className="text-link">{it ? "Esplora Nannix" : "Explore Nannix"} ↗︎</TransitionLink>
          </section>
        )}
        {project.chapters ? (
          <section
            className="project-chapters"
            aria-label={slug === "edgeworks" ? (it ? "I progetti della collaborazione" : "Projects from the collaboration") : (it ? "Il nostro percorso nel team" : "Our journey with the team")}
          >
            {project.chapters.map((chapter, index) => (
              <article
                className={`story-chapter ${chapter.video ? "chapter-with-video" : ""} ${!chapter.image && !chapter.video ? "chapter-text-only" : ""}`}
                key={chapter.title.en}
                id={chapter.id}
              >
                <div className="chapter-text">
                  <p className="eyebrow">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {slug === "edgeworks" ? (it ? "Il progetto" : "The project") : (it ? "La nostra storia" : "Our story")}
                  </p>
                  <h2>{chapter.title[locale]}</h2>
                  {chapter.body.map((paragraph, i) => (
                    <p key={i}>{linkText(paragraph[locale])}</p>
                  ))}
                  {chapter.links ? (
                    <div className="experience-links">
                      {chapter.links.map(link => <a key={link.href} href={link.href} className="text-link" target="_blank" rel="noreferrer">{link.label[locale]} ↗</a>)}
                    </div>
                  ) : null}
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
                  {[...(chapter.image ? [chapter.image] : []), ...(chapter.images || [])].map(photo => (
                    <figure
                      key={photo.src}
                      className={`chapter-photo ${needsImageFrame(photo.width, photo.height) ? "framed-photo" : ""}`}
                      style={{ "--media-ratio": photo.width / photo.height } as CSSProperties}
                    >
                      <ProjectImage
                        src={photo.src}
                        alt={photo.caption[locale]}
                        width={photo.width}
                        height={photo.height}
                        sizes={(slug === "sapienza-foiling-team" || slug === "edgeworks") ? "(max-width:900px) 90vw, 45vw" : "(max-width:700px) 95vw, 85vw"}
                      />
                      <figcaption>
                        <span>{photo.caption[locale]}</span>
                        {photo.credit ? (
                          <span>© {photo.credit}</span>
                        ) : null}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </section>
        ) : null}
        {project.gallery ? (
          <section
            className={`project-field-gallery ${project.gallery.some((photo) => photo.body) ? "gallery-with-story" : ""}`}
            aria-label={
              project.slug === "sapienza-foiling-team"
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
                      <p key={i}>{linkText(paragraph[locale])}</p>
                    ))}
                  </div>
                ) : null}
                <figure
                  className={`chapter-photo ${photo.mediaKind === "logo" ? "service-logo" : slug === "edocla" || needsImageFrame(photo.width, photo.height) ? "framed-photo" : ""}`}
                  style={{ "--media-ratio": photo.width / photo.height } as CSSProperties}
                >
                  <ProjectImage
                    frame={photo.mediaKind !== "logo" && (slug === "edocla" || needsImageFrame(photo.width, photo.height))}
                    src={photo.src}
                    alt={photo.caption[locale]}
                    width={photo.width}
                    height={photo.height}
                    sizes={(slug === "sapienza-foiling-team" || slug === "edgeworks") ? "(max-width:900px) 90vw, 45vw" : "(max-width:700px) 95vw, 50vw"}
                  />
                  <figcaption>
                    {photo.website ? (
                      <a href={photo.website} target="_blank" rel="noreferrer" className="text-link">
                        {new URL(photo.website).hostname} ↗
                      </a>
                    ) : <span>{photo.caption[locale]}</span>}
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
        <ProjectJourney project={project} locale={locale} linkText={linkText} />
        {project.images.length > 1 && project.cover !== "pomodoro" && project.cover !== "team" && project.cover !== "edgeworks" ? (
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
        <ProjectResources project={project} locale={locale} />
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
