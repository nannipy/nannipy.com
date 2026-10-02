import type { CSSProperties } from "react";
import type { Locale, PortfolioProject } from "@/lib/portfolio";
function Diagram({
  kind,
}: {
  kind: "signals" | "context" | "conversation" | "server";
}) {
  return (
    <svg viewBox="0 0 400 250" aria-hidden="true" className="journey-svg">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {kind === "signals" ? (
          <>
            <circle cx="200" cy="125" r="80" />
            <circle cx="200" cy="125" r="60" strokeDasharray="2 7" />
            <path d="M70 125h58l17-28 22 60 21-78 21 64 16-18h105" />
            <circle cx="200" cy="125" r="103" opacity=".25" />
          </>
        ) : kind === "context" ? (
          <>
            <rect x="167" y="92" width="66" height="66" rx="8" />
            <path d="M70 65h68v30l29 15M70 185h68v-30l29-15M330 65h-68v30l-29 15M330 185h-68v-30l-29-15" />
            <circle cx="65" cy="65" r="20" />
            <circle cx="65" cy="185" r="20" />
            <circle cx="335" cy="65" r="20" />
            <circle cx="335" cy="185" r="20" />
            <path d="M186 125h28M200 111v28" />
          </>
        ) : kind === "conversation" ? (
          <>
            <rect x="103" y="42" width="194" height="90" rx="16" />
            <path d="M125 132v23l30-23M128 67h125M128 85h97M128 103h70" />
            <rect x="147" y="150" width="150" height="65" rx="14" />
            <path d="M272 215v15l-23-15M167 174h105M167 192h66" />
          </>
        ) : (
          <>
            <rect x="123" y="46" width="154" height="46" rx="7" />
            <rect x="123" y="102" width="154" height="46" rx="7" />
            <rect x="123" y="158" width="154" height="46" rx="7" />
            <path d="M220 67h37M220 79h37M220 123h37M220 135h37M220 179h37M220 191h37" />
            <circle cx="148" cy="69" r="4" />
            <circle cx="148" cy="125" r="4" />
            <circle cx="148" cy="181" r="4" />
            <path d="M200 204v22M173 226h54" />
          </>
        )}
      </g>
    </svg>
  );
}
export default function ProjectJourney({
  project,
  locale,
}: {
  project: PortfolioProject;
  locale: Locale;
}) {
  if (!project.journey) return null;
  return (
    <section
      className="project-journey"
      aria-label={
        locale === "it" ? "Dall’idea al progetto" : "From idea to execution"
      }
    >
      <p className="eyebrow">
        {locale === "it" ? "Dall’idea al progetto" : "From idea to execution"}
      </p>
      {project.journey.map((step, index) => (
        <article className="journey-step" key={step.diagram}>
          <div
            className="journey-art"
            style={
              {
                "--project-color": project.color,
                "--project-ink": project.ink,
              } as CSSProperties
            }
          >
            <Diagram kind={step.diagram} />
          </div>
          <div className="journey-copy">
            <span className="eyebrow">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(project.journey!.length).padStart(2, "0")}
            </span>
            <h2>{step.title[locale]}</h2>
            <p>{step.body[locale]}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
