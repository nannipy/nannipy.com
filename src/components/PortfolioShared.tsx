import Image from "next/image";
import pomodoroStyles from "./PomodoroDemo.module.css";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  localHref,
  siteContent,
  type Locale,
  type PortfolioProject,
} from "@/lib/portfolio";
import { DocumentLanguage, TransitionLink } from "./PortfolioInteractions";

export function SiteNav({
  locale,
  path = "/",
}: {
  locale: Locale;
  path?: string;
}) {
  return (
    <header className="site-nav">
      <DocumentLanguage locale={locale} />
      <Link
        href={localHref("/", locale)}
        className="wordmark"
        aria-label="Giovanni Battista Pernazza, home"
      >
        <span className="wordmark-name">nanni<span className="wordmark-dot">.</span><span className="wordmark-extension">py</span></span>
      </Link>
      <nav
        aria-label={
          locale === "it" ? "Navigazione principale" : "Main navigation"
        }
      >
        <Link href={`${localHref("/", locale)}#work`}>
          {locale === "it" ? "Progetti" : "Projects"}
        </Link>
        <Link href={`${localHref("/", locale)}#about`}>
          {locale === "it" ? "Esperienze" : "Experience"}
        </Link>
        <Link href={localHref("/nannix", locale)} aria-current={path.startsWith("/nannix") ? "page" : undefined}>
          Nannix
        </Link>
        <Link
          href={localHref(path, locale === "en" ? "it" : "en")}
          hrefLang={locale === "en" ? "it" : "en"}
          className="language-switch"
          aria-label={
            locale === "en" ? "Switch to Italian" : "Passa all’inglese"
          }
        >
          {locale === "en" ? "IT" : "EN"}
          <span>↗︎</span>
        </Link>
      </nav>
    </header>
  );
}
export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-signature">
        <Link href={localHref("/", locale)} className="wordmark" aria-label="Nannipy, home">
          <span className="wordmark-name">nanni<span className="wordmark-dot">.</span><span className="wordmark-extension">py</span></span>
        </Link>
        <p className="eyebrow">
          {locale === "it" ? "Progetti e collaborazioni" : "Projects and collaborations"}
        </p>
      </div>
      <a className="contact-title" href="mailto:gb.pernazza@gmail.com">
        {locale === "it" ? "Parliamo del tuo progetto." : "Tell me about your project."}
        <span>↗︎</span>
      </a>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Giovanni Battista Pernazza</span>
        <div>
          <a href="https://github.com/nannipy" target="_blank" rel="noreferrer">
            GitHub ↗︎
          </a>
          <a
            href="https://www.linkedin.com/in/giovannibpernazza/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗︎
          </a>
          {siteContent.cv[locale] ? (
            <a href={siteContent.cv[locale]!} download>
              CV {locale.toUpperCase()} ↓
            </a>
          ) : (
            <a
              href="https://docs.google.com/document/d/1vAQ1L3jJVlAHoDqd7wD-Hajjb4rq8G9MCdZC5TdDHrA/edit"
              target="_blank"
              rel="noreferrer"
            >
              CV ↗︎
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
export function ProjectCover({
  project,
  priority = false,
}: {
  project: PortfolioProject;
  priority?: boolean;
}) {
  const style = {
    backgroundColor: project.slug === "homelab" ? "#141614" : project.slug === "nanni-pdf" ? "#f8f9fa" : undefined,
    "--project-color": project.color,
    "--project-ink": project.ink,
  } as CSSProperties;
  return (
    <div
      className={`project-cover cover-${project.cover || "screen"}${project.slug === "recup" ? " cover-recup" : project.slug === "nanni-pdf" ? " cover-nanni-pdf" : ""}`}
      style={style}
    >
      {project.cover === "edgeworks" ? (
        <div className="edgeworks-cover-art">
          <span className="team-cover-title">Edgeworks</span>
          <div className="edgeworks-cover-panels">
            {project.images.map((src, index) => (
              <div className="edgeworks-cover-panel" key={src}>
                <span className="screen-toolbar"><i /><i /><i /><span>{index === 0 ? "HireSight" : "Time Tracker"}</span></span>
                <Image src={src} alt={index === 0 ? "HireSight" : "Time Tracker"} width={1280} height={720} sizes="(max-width:700px) 40vw, 25vw" priority={priority} />
              </div>
            ))}
            <div className="edgeworks-cover-panel mora-cover-panel">
              <span className="screen-toolbar"><i /><i /><i /><span>Mora · MVP</span></span>
              <Image className="mora-cover-logo" src="/work/mora-logo.webp" alt="Logo Mora" width={720} height={720} sizes="(max-width:700px) 40vw, 25vw" priority={priority} />
            </div>
          </div>
          <span className="art-label">HireSight · Time Tracker · Mora</span>
        </div>
      ) : project.cover === "team" ? (
        <div className="team-cover-art">
          <span className="team-cover-title">Sapienza Foiling Team</span>
          <div className="team-cover-panels">
            {project.images.map((src, index) => (
              <div className="team-cover-panel" key={src}>
                <span className="screen-toolbar"><i /><i /><i /><span>{index === 0 ? "Website" : "SFT Telemetry"}</span></span>
                <Image src={src} alt={index === 0 ? "Sapienza Foiling Team · Website" : "Sapienza Foiling Team · SFT Telemetry"} width={index === 0 ? 1280 : 1672} height={index === 0 ? 720 : 941} sizes="(max-width:700px) 43vw, 40vw" priority={priority} />
              </div>
            ))}
          </div>
          <span className="art-label">website · electronics · teamwork</span>
        </div>
      ) : project.cover === "photo" ? (
        <Image
          src={project.images[0]}
          alt={project.slug === "homelab" ? "NANNIX" : project.title}
          width={1024}
          height={683}
          sizes="(max-width:700px) 95vw, 85vw"
          priority={priority}
        />
      ) : project.cover === "pomodoro" ? (
        <div className={pomodoroStyles.cover}>
          <span className={pomodoroStyles.label}>Pomodoro Go / macOS</span>
          <Image src="/work/pomodoro-work.webp" alt="Pomodoro Go — macOS menu-bar countdown" width={170} height={60} sizes="240px" priority={priority} className={pomodoroStyles.coverTimer} />
          <Image src="/work/pomodoro-launch.webp" alt="Pomodoro Go — Start Pomodoro command in Raycast" width={747} height={123} sizes="(max-width:700px) 75vw, 560px" priority={priority} className={pomodoroStyles.launch} />
          <span className="art-label">a little room to focus.</span>
        </div>
      ) : project.images.length > 0 && project.cover === "watchface" ? (
        <div className="native-preview">
          <Image
            src={project.images[0]}
            alt="Personal Fenix Face — Garmin fēnix 7X simulator"
            width={280}
            height={280}
            sizes="280px"
            priority={priority}
          />
          <span className="art-label">fēnix 7X · 280 × 280 · MIP</span>
        </div>
      ) : project.images.length > 0 ? (
        <div className={project.slug === "recup" ? "recup-cover-art" : "screen-cover-art"}>
        {project.slug === "recup" ? <span className="team-cover-title">RECUP</span> : null}
        <div className="screen-frame">
          <span className="screen-toolbar">
            <i />
            <i />
            <i />
            <span>{project.title}</span>
          </span>
          <Image
            src={project.images[0]}
            alt={`${project.title} — ${project.category}`}
            width={1800}
            height={1125}
            sizes="(max-width: 700px) 95vw, 60vw"
            priority={priority}
          />
        </div>
        </div>
      ) : (
        <div
          className="project-art"
          aria-label={`${project.title}, project artwork`}
        >
          {project.cover === "telemetry" ? (
            <>
              <svg viewBox="0 0 480 280" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="1.2">
                  <ellipse
                    cx="240"
                    cy="140"
                    rx="155"
                    ry="65"
                    transform="rotate(-25 240 140)"
                  />
                  <ellipse
                    cx="240"
                    cy="140"
                    rx="155"
                    ry="65"
                    transform="rotate(25 240 140)"
                  />
                  <circle cx="240" cy="140" r="82" />
                  <path d="M55 140h370M240 20v240M210 110h60v60h-60z" />
                </g>
                <circle cx="240" cy="140" r="6" fill="currentColor" />
              </svg>
              <span className="art-label">ESP32 · IMU · GPS</span>
            </>
          ) : project.cover === "homelab" ? (
            <>
              <div className="server-art">
                <span />
                <span />
                <span />
              </div>
              <span className="art-label">a home server.</span>
            </>
          ) : project.cover === "cutout" ? (
            <>
              <div className="cutout-art">↗︎</div>
              <span className="art-label">local background removal.</span>
            </>
          ) : (
            <>
              <span className="ai-art">æ</span>
              <span className="art-label">Garmin data in Telegram.</span>
            </>
          )}
        </div>
      )}
      <span className="cover-arrow" aria-hidden="true">
        ↗︎
      </span>
    </div>
  );
}
export function ProjectCard({
  project,
  locale,
  index,
}: {
  project: PortfolioProject;
  locale: Locale;
  index: number;
}) {
  return (
    <article className="project-card">
      <TransitionLink
        href={localHref(`/projects/${project.slug}`, locale)}
        aria-label={`${locale === "it" ? "Scopri" : "Explore"} ${project.title}`}
      >
        <ProjectCover project={project} />
        <div className="project-info">
          <div>
            <p className="eyebrow">{locale === "it" ? project.categoryIt : project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.summary[locale]}</p>
          </div>
          <span className="project-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </TransitionLink>
    </article>
  );
}
