import type { Metadata } from "next";
import { getLocale } from "@/lib/portfolio";
import { NannixShell } from "@/components/NannixShared";
import NannixLibrary from "@/components/NannixLibrary";
export const metadata: Metadata = {
  title: "Biblioteca · Nannix",
  description:
    "Guide e progetti che consulto per Linux, self-hosting e sviluppo software, insieme a letture da approfondire.",
};
export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const locale = getLocale((await searchParams).lang),
    it = locale === "it";
  return (
    <NannixShell locale={locale} path="/nannix/biblioteca">
      <header className="nannix-article-header">
        <p className="eyebrow">
          {it ? "Riferimenti e letture" : "References and reading"}
        </p>
        <h1>{it ? "La biblioteca." : "The library."}</h1>
        <p className="nannix-lead">
          {it
            ? "Guide che uso e letture da approfondire."
            : "Guides I use and reading to follow up on."}
        </p>
        <p>
          {it
            ? "Qui raccolgo guide, progetti e persone che consulto per Linux, self-hosting e sviluppo software. Alcuni riferimenti mi hanno aiutato a configurare strumenti che uso ogni giorno; altri sono ancora da approfondire."
            : "I keep guides, projects and people I refer to for Linux, self-hosting and software development here. Some helped me configure tools I use daily; others are still on my reading list."}
        </p>
        <p>
          {it
            ? "Le note spiegano perché ho salvato ogni risorsa. Puoi cercare un argomento o filtrare per tipo."
            : "The notes explain why I saved each resource. You can search by subject or filter by type."}
        </p>
      </header>
      <NannixLibrary locale={locale} />
    </NannixShell>
  );
}
