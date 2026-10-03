import type { PortfolioProject } from "./portfolio";

export type ProjectResource = {
  label: string;
  href: string;
  terms: string[];
};

// Official documentation and project sites, shared by inline links and reading lists.
export const projectResources: ProjectResource[] = [
  { label: "Linux", href: "https://docs.kernel.org/", terms: ["Linux"] },
  { label: "Docker · Get started", href: "https://docs.docker.com/get-started/", terms: ["Docker"] },
  { label: "Docker Compose", href: "https://docs.docker.com/compose/", terms: ["Docker Compose"] },
  { label: "Telegram · Bot tutorial", href: "https://core.telegram.org/bots/tutorial", terms: ["Telegram"] },
  { label: "Immich · Installation & mobile backup", href: "https://docs.immich.app/overview/quick-start/", terms: ["Immich"] },
  { label: "Pi-hole · Documentation", href: "https://docs.pi-hole.net/", terms: ["Pi-hole"] },
  { label: "Filebrowser · Source & setup", href: "https://github.com/filebrowser/filebrowser", terms: ["Filebrowser", "File Browser"] },
  { label: "Tailscale · Quickstart", href: "https://tailscale.com/docs/how-to/quickstart", terms: ["Tailscale"] },
  { label: "Scrutiny · Source & setup", href: "https://github.com/AnalogJ/scrutiny", terms: ["Scrutiny", "S.M.A.R.T."] },
  { label: "Beszel · Getting started", href: "https://beszel.dev/guide/getting-started", terms: ["Beszel"] },
  { label: "Uptime Kuma · Source & setup", href: "https://github.com/louislam/uptime-kuma", terms: ["Uptime Kuma"] },
  { label: "Google Photos", href: "https://photos.google.com/", terms: ["Google Photos", "Google Foto"] },
  { label: "Google", href: "https://about.google/", terms: ["Google"] },
  { label: "MacBook Air · Support", href: "https://support.apple.com/mac/macbook-air", terms: ["MacBook Air", "MacBook"] },
  { label: "Open source · Definition", href: "https://opensource.org/osd", terms: ["open source", "open-source"] },
  { label: "Self-hosted · Data ownership", href: "https://www.gnu.org/philosophy/who-does-that-server-really-serve.html", terms: ["Self-hosted"] },
  { label: "Next.js · Documentation", href: "https://nextjs.org/docs", terms: ["Next.js"] },
  { label: "TypeScript · Handbook", href: "https://www.typescriptlang.org/docs/", terms: ["TypeScript"] },
  { label: "Supabase · Documentation", href: "https://supabase.com/docs", terms: ["Supabase"] },
  { label: "React · Learn", href: "https://react.dev/learn", terms: ["React 19", "React"] },
  { label: "Vercel · Documentation", href: "https://vercel.com/docs", terms: ["Vercel"] },
  { label: "Resend · Documentation", href: "https://resend.com/docs", terms: ["Resend"] },
  { label: "Python · Tutorial", href: "https://docs.python.org/3/tutorial/", terms: ["Python"] },
  { label: "Go · Documentation", href: "https://go.dev/doc/", terms: ["Go"] },
  { label: "macOS · Developer resources", href: "https://developer.apple.com/macos/", terms: ["macOS"] },
  { label: "ESP32-S3 · Programming guide", href: "https://docs.espressif.com/projects/esp-idf/en/stable/esp32s3/", terms: ["ESP32-S3"] },
  { label: "C++ · Learn", href: "https://learn.microsoft.com/en-us/cpp/cpp/", terms: ["C++"] },
  { label: "WebSocket · Web API", href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket", terms: ["WebSocket"] },
  { label: "GPS · Official information", href: "https://www.gps.gov/", terms: ["GPS"] },
  { label: "IMU · Inertial sensors", href: "https://www.bosch-sensortec.com/products/motion-sensors/imus/", terms: ["IMU"] },
  { label: "Web design · Learn", href: "https://developer.mozilla.org/en-US/docs/Learn_web_development", terms: ["Web design"] },
  { label: "System tray · macOS status bar", href: "https://developer.apple.com/documentation/appkit/nsstatusbar", terms: ["System tray"] },
  { label: "TUI · Console interfaces", href: "https://learn.microsoft.com/en-us/windows/console/console-virtual-terminal-sequences", terms: ["TUI"] },
  { label: "Image processing · Pixel manipulation", href: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", terms: ["Image processing"] },
  { label: "LLMs · Learn", href: "https://huggingface.co/learn/llm-course/chapter1/1", terms: ["LLMs"] },
  { label: "Garmin Connect", href: "https://connect.garmin.com/", terms: ["Garmin Connect"] },
  { label: "Garmin", href: "https://www.garmin.com/", terms: ["Garmin"] },
  { label: "Connect IQ · SDK & documentation", href: "https://developer.garmin.com/connect-iq/overview/", terms: ["Connect IQ", "Garmin fēnix 7X", "Personal Fenix Face", "MIP display"] },
  { label: "Monkey C · Language reference", href: "https://developer.garmin.com/connect-iq/monkey-c/", terms: ["Monkey C"] },
  { label: "Ollama · Documentation", href: "https://docs.ollama.com/", terms: ["Ollama", "Local LLMs"] },
  { label: "Gemini · API documentation", href: "https://ai.google.dev/gemini-api/docs", terms: ["Gemini"] },
  { label: "RAG · Original paper", href: "https://arxiv.org/abs/2005.11401", terms: ["RAG"] },
  { label: "Recharts · Documentation", href: "https://recharts.github.io/en-US/guide/", terms: ["Recharts"] },
  { label: "Hacker News", href: "https://news.ycombinator.com/", terms: ["Hacker News"] },
  { label: "RECUP · Association", href: "https://associazionerecup.org/", terms: ["RECUP"] },
  { label: "Sapienza Foiling Team", href: "https://sapienzafoilingteam.com/", terms: ["Sapienza Foiling Team"] },
  { label: "SuMoth Challenge", href: "https://sumoth.org/", terms: ["SuMoth Challenge"] },
  { label: "Edgeworks", href: "https://www.edgeworks.it/", terms: ["Edgeworks"] },
  { label: "Mora · Edgeworks", href: "https://www.edgeworks.it/products_mora.php", terms: ["Mora"] },
  { label: "Gmail API · Documentation", href: "https://developers.google.com/workspace/gmail/api/guides", terms: ["Gmail API"] },
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
    "Documentation": "Documentazione", "Source & setup": "Codice e installazione",
    "Quickstart": "Guida rapida", "Support": "Supporto", "Definition": "Definizione",
    "Data ownership": "Controllo dei dati", "Handbook": "Manuale", "Learn": "Da dove iniziare",
    "Developer resources": "Risorse per sviluppare", "Programming guide": "Guida alla programmazione",
    "Official information": "Informazioni ufficiali", "Inertial sensors": "Sensori inerziali",
    "Console interfaces": "Interfacce nel terminale", "Pixel manipulation": "Elaborazione dei pixel",
    "SDK & documentation": "SDK e documentazione", "Language reference": "Riferimento del linguaggio",
    "API documentation": "Documentazione API", "Original paper": "Articolo originale", "Association": "Associazione",
  };
  const [name, detail] = resource.label.split(" · ");
  return detail ? `${name} · ${translations[detail] || detail}` : name;
}

export function resourcesForProject(project: PortfolioProject) {
  // Scan prose and tool names, never media paths or URLs.
  const prose = [
    ...project.tools, project.category, ...Object.values(project.summary),
    ...project.story.flatMap(Object.values),
    ...(project.chapters || []).flatMap((chapter) => [
      ...Object.values(chapter.title), ...chapter.body.flatMap(Object.values),
      ...Object.values(chapter.image?.caption || {}), chapter.image?.credit || "",
    ]),
    ...(project.gallery || []).flatMap((entry) => [
      ...Object.values(entry.title || {}), ...Object.values(entry.caption),
      ...(entry.body || []).flatMap(Object.values),
    ]),
    ...(project.journey || []).flatMap((step) => [...Object.values(step.title), ...Object.values(step.body)]),
  ].join("\n");
  const found = new Set([...prose.matchAll(resourcePattern())].map((match) => resourceForTerm(match[2])!));
  // Compose is the practical next step for readers replicating the Docker setup.
  if (project.slug === "homelab") found.add(resourceForTerm("Docker Compose")!);
  return [...found];
}
