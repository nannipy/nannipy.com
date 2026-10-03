import type { ReactNode } from "react";
import type { Locale, PortfolioProject } from "@/lib/portfolio";
import { resourcePattern, resourceForTerm, resourceLabel, resourcesForProject } from "@/lib/project-resources";

function linkedProjectText(children: string, seen: Set<string>) {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  for (const match of children.matchAll(resourcePattern())) {
    const start = match.index! + match[1].length;
    nodes.push(children.slice(cursor, start));
    const resource = resourceForTerm(match[2])!;
    if (seen.has(resource.href)) {
      nodes.push(match[2]);
    } else {
      seen.add(resource.href);
      nodes.push(<a className="project-inline-resource" key={start} href={resource.href} target="_blank" rel="noreferrer">{match[2]}</a>);
    }
    cursor = start + match[2].length;
  }
  nodes.push(children.slice(cursor));
  return <>{nodes}</>;
}

export function LinkedProjectText({ children }: { children: string }) {
  return linkedProjectText(children, new Set());
}

// Each page creates its own linker: one prose link per destination, independently of tool badges.
export function createProjectTextLinker() {
  const seen = new Set<string>();
  return (text: string) => linkedProjectText(text, seen);
}

export default function ProjectResources({ project, locale }: { project: PortfolioProject; locale: Locale }) {
  const it = locale === "it";
  const resources = resourcesForProject(project, locale);
  const email = `mailto:gb.pernazza@gmail.com?subject=${encodeURIComponent(`${project.title} · ${it ? "Una domanda sul progetto" : "A question about the project"}`)}`;
  return (
    <section className="project-resources" aria-labelledby="project-resources-title">
      <p className="eyebrow">{it ? "Per chi vuole provare" : "For the curious"}</p>
      <h2 id="project-resources-title">{it ? "Risorse per approfondire." : "Explore and build."}</h2>
      <p>{it ? "Gli strumenti citati nel racconto, con documentazione, guide e codice da cui partire per costruire qualcosa di tuo." : "The tools mentioned in the story, with documentation, guides and source code to help you build something of your own."}</p>
      <ul>
        {project.github ? <li><a href={project.github} target="_blank" rel="noreferrer">{it ? "Codice del progetto" : "Project source code"} <span aria-hidden="true">↗</span></a></li> : null}
        {project.website ? <li><a href={project.website} target="_blank" rel="noreferrer">{it ? "Sito del progetto" : "Project website"} <span aria-hidden="true">↗</span></a></li> : null}
        {resources.map((resource) => <li key={resource.href}><a href={resource.href} target="_blank" rel="noreferrer">{resourceLabel(resource, locale)} <span aria-hidden="true">↗</span></a></li>)}
      </ul>
      <div className="project-question">
        <h3>{it ? "Vuoi fare qualcosa di simile?" : "Want to try something similar?"}</h3>
        <p>{it ? "Se hai una domanda su questo progetto o vuoi confrontarti su un’idea, scrivimi. Mi fa piacere condividere quello che ho imparato." : "If you have a question about this project or an idea to discuss, write to me. I’m happy to share what I’ve learned."}</p>
        <a className="text-link" href={email}>{it ? "Fammi una domanda" : "Ask me a question"} <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
