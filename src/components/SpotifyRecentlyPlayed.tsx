import { getRecentTracks } from "@/lib/spotify";
import type { Locale } from "@/lib/portfolio";
import Image from "next/image";
export default async function SpotifyRecentlyPlayed({
  locale,
}: {
  locale: Locale;
}) {
  const { connected, tracks } = await getRecentTracks();
  return (
    <div className="music-section">
      <div className="music-heading">
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          aria-label="Spotify"
          role="img"
        >
          <circle cx="12" cy="12" r="11" fill="currentColor" />
          <g stroke="#111" strokeWidth="1.4" fill="none" strokeLinecap="round">
            <path d="M6 9c4-1.6 8-1.2 12 1M7 12c3-1 6.5-.8 10 1M8 15c2.6-.8 5.5-.6 8 .8" />
          </g>
        </svg>
        <span>{locale === "it" ? "La colonna sonora" : "The soundtrack"}</span>
        <span className="eyebrow">Spotify</span>
      </div>
      {tracks.length ? (
        <div className="music-tracks">
          {tracks.map((t) => (
            <a key={t.url} href={t.url} target="_blank" rel="noreferrer">
              {t.image ? (
                <Image
                  src={t.image}
                  width={44}
                  height={44}
                  alt=""
                  loading="lazy"
                  unoptimized
                />
              ) : null}
              <span>
                {t.name}
                <small>{t.artist}</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      ) : (
        <p>
          {connected
            ? locale === "it"
              ? "Nessun ascolto recente."
              : "No recent listens."
            : locale === "it"
              ? "Ascolti recenti in arrivo."
              : "Recent listens coming soon."}
        </p>
      )}
    </div>
  );
}
