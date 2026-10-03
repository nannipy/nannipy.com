import type { PortfolioProject } from "./portfolio";

export type ProjectResource = {
  label: string;
  href: string;
  terms: string[];
};

// Curated tools and useful guides; generic brands and language names stay plain text.
export const projectResources: ProjectResource[] = [
  { label: "FoxRun · Source code", href: "https://github.com/nannipy/foxrun", terms: ["FoxRun"] },
  { label: "Strava · Developer program", href: "https://communityhub.strava.com/insider-journal-9/an-update-to-our-developer-program-13428", terms: ["Strava"] },
  { label: "python-garminconnect · Source & setup", href: "https://github.com/cyberjunky/python-garminconnect", terms: ["python-garminconnect"] },
  { label: "Docker · Get started", href: "https://docs.docker.com/get-started/", terms: ["Docker"] },
  { label: "Docker Compose", href: "https://docs.docker.com/compose/", terms: ["Docker Compose"] },
  { label: "Telegram · Bot tutorial", href: "https://core.telegram.org/bots/tutorial", terms: ["Telegram"] },
  { label: "Immich · Installation & mobile backup", href: "https://docs.immich.app/overview/quick-start/", terms: ["Immich"] },
  { label: "Pi-hole · Documentation", href: "https://docs.pi-hole.net/", terms: ["Pi-hole"] },
  { label: "Filebrowser · Source & setup", href: "https://github.com/filebrowser/filebrowser", terms: ["Filebrowser", "File Browser"] },
  { label: "Tailscale · Quickstart", href: "https://tailscale.com/docs/how-to/quickstart", terms: ["Tailscale"] },
  { label: "Scrutiny · Source & setup", href: "https://github.com/AnalogJ/scrutiny", terms: ["Scrutiny"] },
  { label: "Beszel · Getting started", href: "https://beszel.dev/guide/getting-started", terms: ["Beszel"] },
  { label: "Uptime Kuma · Source & setup", href: "https://github.com/louislam/uptime-kuma", terms: ["Uptime Kuma"] },
  { label: "Next.js · Documentation", href: "https://nextjs.org/docs", terms: ["Next.js"] },
  { label: "TypeScript · Handbook", href: "https://www.typescriptlang.org/docs/", terms: ["TypeScript"] },
  { label: "Supabase · Documentation", href: "https://supabase.com/docs", terms: ["Supabase"] },
  { label: "React · Learn", href: "https://react.dev/learn", terms: ["React 19", "React"] },
  { label: "Vercel · Documentation", href: "https://vercel.com/docs", terms: ["Vercel"] },
  { label: "Resend · Documentation", href: "https://resend.com/docs", terms: ["Resend"] },
  { label: "ESP32-S3 · Overview", href: "https://www.espressif.com/en/products/socs/esp32-s3", terms: ["ESP32-S3"] },
  { label: "WebSocket · Web API", href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket", terms: ["WebSocket"] },
  { label: "IMU · Inertial sensors", href: "https://www.pololu.com/product/2738", terms: ["IMU"] },
  { label: "System tray · macOS status bar", href: "https://developer.apple.com/documentation/appkit/nsstatusbar", terms: ["System tray", "menu bar", "menu-bar"] },
  { label: "LLMs · Learn", href: "https://huggingface.co/learn/llm-course/chapter1/1", terms: ["LLMs", "LLM", "Local LLMs", "LLM locali", "modelli linguistici", "language models"] },
  { label: "Connect IQ · SDK & documentation", href: "https://developer.garmin.com/connect-iq/overview/", terms: ["Connect IQ"] },
  { label: "Monkey C · Language reference", href: "https://developer.garmin.com/connect-iq/monkey-c/", terms: ["Monkey C"] },
  { label: "Ollama · Documentation", href: "https://docs.ollama.com/", terms: ["Ollama"] },
  { label: "Gemini · API documentation", href: "https://ai.google.dev/gemini-api/docs", terms: ["Gemini"] },
  { label: "RAG · Introduction", href: "https://aws.amazon.com/what-is/retrieval-augmented-generation/", terms: ["RAG"] },
  { label: "Recharts · Documentation", href: "https://recharts.github.io/en-US/guide/", terms: ["Recharts"] },
  { label: "Hacker News", href: "https://news.ycombinator.com/", terms: ["Hacker News"] },
  { label: "SuMoth Challenge", href: "https://sumoth.org/", terms: ["SuMoth Challenge"] },
  { label: "Gmail API · Documentation", href: "https://developers.google.com/workspace/gmail/api/guides", terms: ["Gmail API"] },
  { label: "Ruby on Rails · Get started", href: "https://rubyonrails.org/", terms: ["Ruby on Rails"] },
  { label: "Pololu MinIMU-9 v5 · Overview", href: "https://www.pololu.com/product/2738", terms: ["Pololu MinIMU-9 v5", "MinIMU-9 v5"] },
  { label: "Linux Mint · Installation guide", href: "https://linuxmint-installation-guide.readthedocs.io/en/latest/", terms: ["Linux Mint"] },
  { label: "Ubuntu Server · Documentation", href: "https://ubuntu.com/server/docs/", terms: ["Ubuntu Server"] },
  { label: "Kubernetes · Overview", href: "https://kubernetes.io/docs/concepts/overview/", terms: ["Kubernetes"] },
  { label: "DNS · Introduction", href: "https://www.cloudflare.com/learning/dns/what-is-dns/", terms: ["DNS"] },
  { label: "Figma · Learn", href: "https://help.figma.com/hc/en-us", terms: ["Figma"] },
  { label: "Cloudflare · Domain management", href: "https://developers.cloudflare.com/registrar/", terms: ["Cloudflare"] },
  { label: "Umami · Documentation", href: "https://umami.is/docs", terms: ["Umami"] },
  { label: "Google Apps Script · Overview", href: "https://developers.google.com/apps-script/overview", terms: ["Google Apps Script", "Apps Script"] },
  { label: "MIP display · Visual design guide", href: "https://developer.garmin.com/connect-iq/user-experience-guidelines/incorporating-the-visual-design-and-product-personalities/", terms: ["MIP display", "display MIP"] },
  { label: "Flask · Get started", href: "https://flask.palletsprojects.com/en/stable/", terms: ["Flask"] },
  { label: "rembg · Source & setup", href: "https://github.com/danielgatis/rembg", terms: ["rembg"] },
  { label: "Pillow · Documentation", href: "https://pillow.readthedocs.io/en/stable/", terms: ["Pillow"] },
];

const escapePattern = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const terms = projectResources.flatMap((resource) => resource.terms).sort((a, b) => b.length - a.length);
export const resourcePattern = () => new RegExp(
  `(^|[^\\p{L}\\p{N}_])(${terms.map(escapePattern).join("|")})(?=$|[^\\p{L}\\p{N}_])`,
  "giu",
);
export const resourceForTerm = (term: string) => projectResources.find(
  (resource) => resource.terms.some((alias) => alias.toLowerCase() === term.toLowerCase()),
);

export function resourceLabel(resource: ProjectResource, locale: "en" | "it") {
  if (locale === "en") return resource.label;
  const translations: Record<string, string> = {
    "Get started": "Guida introduttiva", "Getting started": "Guida introduttiva",
    "Bot tutorial": "Creare un bot", "Installation & mobile backup": "Installazione e backup dal telefono",
    "Source code": "Codice sorgente", "Developer program": "Programma sviluppatori",
    "Documentation": "Documentazione", "Source & setup": "Codice e installazione",
    "Quickstart": "Guida rapida", "Support": "Supporto", "Definition": "Definizione",
    "Data ownership": "Controllo dei dati", "Handbook": "Manuale", "Learn": "Da dove iniziare",
    "Developer resources": "Risorse per sviluppare", "Programming guide": "Guida alla programmazione",
    "Official information": "Informazioni ufficiali", "Inertial sensors": "Sensori inerziali",
    "Console interfaces": "Interfacce nel terminale", "Pixel manipulation": "Elaborazione dei pixel",
    "SDK & documentation": "SDK e documentazione", "Language reference": "Riferimento del linguaggio",
    "Overview": "Panoramica", "Introduction": "Introduzione",
    "Installation guide": "Guida all’installazione", "Domain management": "Gestione del dominio",
    "Visual design guide": "Guida al design del display",
    "API documentation": "Documentazione API", "Original paper": "Articolo originale", "Association": "Associazione",
  };
  const [name, detail] = resource.label.split(" · ");
  return detail ? `${name} · ${translations[detail] || detail}` : name;
}

export function resourcesForProject(project: PortfolioProject, locale: "en" | "it") {
  // Scan prose and tool names, never media paths or URLs.
  const prose = [
    ...project.tools, project.summary[locale],
    ...project.story.map((paragraph) => paragraph[locale]),
    ...(project.chapters || []).flatMap((chapter) => [
      chapter.title[locale], ...chapter.body.map((paragraph) => paragraph[locale]),
      ...[...(chapter.image ? [chapter.image] : []), ...(chapter.images || [])].map((image) => image.caption[locale]),
      chapter.video?.caption[locale] || "",
    ]),
    ...(project.gallery || []).flatMap((entry) => [
      entry.title?.[locale] || "", entry.caption[locale],
      ...(entry.body || []).map((paragraph) => paragraph[locale]),
    ]),
    ...(project.journey || []).flatMap((step) => [step.title[locale], step.body[locale]]),
  ].join("\n");
  const found = new Map<string, ProjectResource>();
  for (const match of prose.matchAll(resourcePattern())) {
    const resource = resourceForTerm(match[2])!;
    if (!found.has(resource.href)) found.set(resource.href, resource);
  }
  // Compose is the practical next step for readers replicating the Docker setup.
  if (project.slug === "homelab") found.set(resourceForTerm("Docker Compose")!.href, resourceForTerm("Docker Compose")!);
  return [...found.values()];
}
