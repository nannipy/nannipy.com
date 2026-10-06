import type { Metadata } from "next";
import { getLocale } from "@/lib/portfolio";
import { NannixShell } from "@/components/NannixShared";
import NannixLibrary from "@/components/NannixLibrary";
export const metadata: Metadata = {
  title: "Biblioteca · Nannix",
  description:
    "Canali, video, libri, paper e progetti: una biblioteca personale di cose interessanti.",
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
          {it ? "Appunti di curiosità" : "Notes of curiosity"}
        </p>
        <h1>{it ? "La biblioteca." : "The library."}</h1>
        <p className="nannix-lead">
          {it
            ? "Le cose su cui voglio tornare."
            : "Things I want to return to."}
        </p>
        <p>
          {it
            ? "Molto di quello che faccio è iniziato da un video, una guida o qualcuno che raccontava il proprio lavoro. Qui tengo i riferimenti che mi hanno aiutato a partire e quelli che mi fanno venire voglia di approfondire: self hosting, Linux, dati, software aperto e modi di costruire insieme."
            : "Much of what I do started with a video, a guide or someone describing their work. Here I keep references that helped me get started and those that make me want to dig deeper: self-hosting, Linux, data, open software and ways of building together."}
        </p>
        <p>
          {it
            ? "Alcuni accompagnano strumenti che uso davvero; altri sono ancora piste da esplorare. Mi piace tenere vicine queste due cose, perché spesso il prossimo esperimento nasce proprio da una lettura lasciata qui. La raccolta crescerà anche con video, libri e paper, seguendo la mia curiosità dentro e fuori dall’informatica."
            : "Some accompany tools I actually use; others are still paths to explore. I like keeping the two close, because the next experiment often starts with something I saved here to read. The collection will grow with videos, books and papers too, following my curiosity in computing and beyond."}
        </p>
      </header>
      <NannixLibrary locale={locale} />
    </NannixShell>
  );
}
