import Image from "next/image";
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
          {locale === "it" ? "Progetti" : "Work"}
        </Link>
        <Link href={`${localHref("/", locale)}#about`}>
          {locale === "it" ? "Storia" : "About"}
        </Link>
        <Link href={`${localHref("/", locale)}#outside`}>
          {locale === "it" ? "Fuori" : "Outside"}
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
          <span>↗</span>
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
          {locale === "it" ? "La prossima cosa bella" : "The next good thing"}
        </p>
      </div>
      <a className="contact-title" href="mailto:gb.pernazza@gmail.com">
        {locale === "it" ? "Costruiamola insieme." : "Let’s build it together."}
        <span>↗</span>
      </a>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Giovanni Battista Pernazza</span>
        <div>
          <a href="https://github.com/nannipy" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/giovannibpernazza/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
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
              CV ↗
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
    "--project-color": project.color,
    "--project-ink": project.ink,
  } as CSSProperties;
  return (
    <div
      className={`project-cover cover-${project.cover || "screen"}`}
      style={style}
    >
      {project.cover === "photo" ? (
        <Image
          src={project.images[0]}
          alt={project.title}
          width={1024}
          height={683}
          sizes="(max-width:700px) 95vw, 85vw"
          priority={priority}
        />
      ) : project.images.length > 0 &&
        (project.cover === "watchface" || project.cover === "pomodoro") ? (
        <div className="native-preview">
          <Image
            src={project.images[0]}
            alt={
              project.cover === "watchface"
                ? "Personal Fenix Face — Garmin fēnix 7X simulator"
                : "Pomodoro Go — Start Pomodoro command"
            }
            width={project.cover === "watchface" ? 280 : 747}
            height={project.cover === "watchface" ? 280 : 123}
            sizes={
              project.cover === "watchface"
                ? "280px"
                : "(max-width:700px) 80vw, 747px"
            }
            priority={priority}
          />
          {project.cover === "pomodoro" && project.images[1] ? (
            <Image
              src={project.images[1]}
              alt="Pomodoro Go — macOS menu-bar timer"
              width={81}
              height={65}
              sizes="81px"
            />
          ) : null}
          <span className="art-label">
            {project.cover === "watchface"
              ? "fēnix 7X · 280 × 280 · MIP"
              : "a little room to focus."}
          </span>
        </div>
      ) : project.images.length > 0 ? (
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
              <span className="art-label">a second life.</span>
            </>
          ) : project.cover === "pomodoro" ? (
            <>
              <div className="timer-art">
                25<span>:00</span>
              </div>
              <span className="art-label">time for one thing.</span>
            </>
          ) : project.cover === "cutout" ? (
            <>
              <div className="cutout-art">↗</div>
              <span className="art-label">keep what matters.</span>
            </>
          ) : (
            <>
              <span className="ai-art">æ</span>
              <span className="art-label">code meets movement.</span>
            </>
          )}
        </div>
      )}
      <span className="cover-arrow" aria-hidden="true">
        ↗
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
            <p className="eyebrow">{project.category}</p>
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
