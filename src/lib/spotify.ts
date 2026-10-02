export type RecentTrack = {
  name: string;
  artist: string;
  image: string | null;
  url: string;
};
export async function getRecentTracks(): Promise<{
  connected: boolean;
  tracks: RecentTrack[];
}> {
  const {
    SPOTIFY_CLIENT_ID: id,
    SPOTIFY_CLIENT_SECRET: secret,
    SPOTIFY_REFRESH_TOKEN: refresh,
  } = process.env;
  if (!id || !secret || !refresh) return { connected: false, tracks: [] };
  try {
    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refresh,
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(4000),
      },
    );
    if (!tokenResponse.ok) return { connected: false, tracks: [] };
    const token = await tokenResponse.json();
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=6",
      {
        headers: { Authorization: `Bearer ${token.access_token}` },
        next: { revalidate: 900 },
        signal: AbortSignal.timeout(4000),
      },
    );
    if (!response.ok) return { connected: false, tracks: [] };
    const data = await response.json();
    const seen = new Set<string>();
    const tracks: RecentTrack[] = [];
    for (const item of data.items ?? []) {
      const t = item.track;
      if (!t || seen.has(t.id)) continue;
      seen.add(t.id);
      tracks.push({
        name: t.name,
        artist: t.artists.map((a: { name: string }) => a.name).join(", "),
        image: t.album.images.at(-1)?.url ?? null,
        url: t.external_urls.spotify,
      });
      if (tracks.length === 3) break;
    }
    return { connected: true, tracks };
  } catch {
    return { connected: false, tracks: [] };
  }
}
