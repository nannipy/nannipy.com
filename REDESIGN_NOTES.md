# Personal portfolio redesign

Dark-only portfolio with an editorial project selection, English/Italian copy,
local optimised photographs and individual project pages. Project colours are
inspired by screenshots and outdoor photographs. Grain is a static 160px PNG;
animations use transforms/opacity and respect reduced-motion preferences.

## Content

Edit `src/lib/portfolio.ts` to maintain project summaries, narratives, links,
colours, screenshots and personal photos. No GitHub auto-discovery is used by
the new home or project pages. The old API and sync tooling are preserved.

CV English: original Google Docs export supplied by the owner. CV Italian:
translation of that document. Both files live in `public/cv` and can be replaced
without changing links. Quantitative CV claims are reproduced from the owner's
source, not independently verified. The website's case studies avoid these
unverified percentages.

## Spotify

The server component displays up to three distinct recent tracks with artwork,
artist and official Spotify links. It has no audio autoplay or playback SDK.
Configure the three server-only environment variables in `.env.example`.
The owner must authorise the app with `user-read-recently-played` through the
Spotify developer authorisation-code flow. Never paste tokens into project
content or client code. With no credentials or API failure the page remains
usable and shows a forthcoming-listens message. API requests have a four-second
timeout and track responses are cached for 15 minutes. A Suspense boundary keeps
Spotify from blocking the main page.

Documentation:
https://developer.spotify.com/documentation/web-api/reference/get-recently-played
https://developer.spotify.com/documentation/web-api/tutorials/refreshing-tokens

## Photography and Strava

For this first version, the gallery uses owner-supplied photographs from
`immagini-nanni`, converted to stripped, resized WebP assets in `public/personal`.
No activity statistics, GPS coordinates or rankings are displayed. Strava is not
connected; connecting it is a separate step requiring owner authorisation.

## Screenshot provenance (2026-10-02)

- SFT: current public website screenshot; secondary views from existing assets.
- Edocla: current public website screenshot; existing project photographs.
- HireSight: current public login screenshot; existing internal app screenshots.
- Telemetry: real local visualiser in disconnected state, no invented telemetry.
- Remove Background: real local frontend capture, processing backend not running.
- RECUP: owner-provided September 2026 captures, no fresh authenticated session.
- Vector: owner-provided terminal captures, no new terminal capture.
- OllaPy: existing screenshots in public/ollapy.
- Aesculapius: illustrated idea-to-execution narrative. Homelab now uses the owner’s hardware photographs, dashboard captures and service logos.
- Pomodoro Go: owner-provided command and macOS menu-bar screenshots in pomodorogo/.
  Small interface captures are displayed without stretching them beyond their native size.
- Timesheet: three screenshots from https://www.edgeworks.it/products_timetracker.php
  (reports, dashboard and calendar), exported from the page assets and optimised as WebP.
- Garmin Watch Face: current 280 × 280 simulator capture preview-spacing-live.png
  from the owner’s Desktop/garmin-watchface folder. Narrative verified against its README.
  Physical-device interaction remains unverified; no signing keys copied.
- Hero: hiking and climbing photos replace the two original selfies at the owner’s request.
- Current hero: the owner’s hero-hiking-2886.webp mountain photograph is the only homepage
  portrait, rendered in grayscale with a static grain overlay. The existing
  Touching the grass gallery contains 15 photos and one on-demand video, with
  horizontal scrolling and the original photo dialog. The separate gallery
  below the hero has been removed. RECUP includes its owner-provided logo and links to
  the verified official association site, https://associazionerecup.org/.
- SFT Telemetry includes the Garda team photo and a five-chapter bilingual
  story based on the owner’s account. All four owner-provided garda/ photos are
  included, without cropping photographer credits. The boat, shared work and
  European teams appear within the narrative; the technical visualiser follows it.
- Five additional Garda photos show construction, electronics and sharing the
  project. The owner-provided 18.7-second flight video is converted to H.264/AAC
  MP4 (540 × 960, about 6.1 MB), with a lightweight poster, native controls,
  preload="none" and no autoplay. Original files are archived externally under `../nannipy-materiale-archiviato-2026-10-02/garda/`.
- IMG_8833.jpeg adds the real wired telemetry prototype alongside its connected
  visualiser. The technical photographs now alternate with five bilingual
  narrative sections about motivation, the prototype, PCB assembly and sharing
  the work. The standalone visualiser capture remains explicitly disconnected.

## Validation

`npm run build -- --webpack` and `npx tsc --noEmit`.
Use the existing local preview at localhost:3000. Browser checks should cover
language switching, internal project navigation and back, mobile horizontal
overflow (observed at 319px and 390px), keyboard photo-dialog navigation and Escape, and CV downloads.

Verified in this run: production webpack build, TypeScript check, navigation
to SFT and back, bilingual rendering, native dialog arrow keys/Escape/focus
return, no horizontal document overflow at 319px and 390px, and desktop
inspection at 1280px. Spotify without credentials falls back gracefully;
a live Spotify response and Strava connection are not verified.

## Edocla collaboration story

Edocla now credits Iachini Design for the design and Giovanni for React implementation, Vercel deployment and Resend contact emails. Five bilingual narrative sections alternate with freshly captured close views of the live website: introduction, services, process and contact form. The cover uses a new close view of the opening photographs. The exact Instagram profile is awaiting the owner’s link; no guessed handle is published.

## Homelab photographs and Zen captures

Three owner-provided HEIC photographs were converted into lightweight WebP assets. The terminal photograph is now the cover; all three appear with bilingual narrative. Six screenshots were captured from the authenticated tabs in Zen: Pi-hole, Scrutiny, File Browser, Beszel, Uptime Kuma and Tailscale. Browser chrome is cropped from website assets; Tailscale is framed on platform and connection columns to exclude account emails and network addresses. Monitoring captures represent a moment in time.

Tailscale privacy: the saved Zen capture was replaced with the same IP-free detail used on the website. No full Tailscale device-address capture remains in the project outputs.

Tailscale now uses its official white brand icon instead of the device screenshot. Immich has a matching logo-only section using the official flower SVG. Both sections include expanded EN/IT narrative and official-site links. Logo sources: Tailscale media kit linked from https://tailscale.com/press and the rendered https://immich.app homepage.

## Current identity and release checks

The final identity uses the text wordmark nanni.py, with sage #B7C9A2 on the dot and a subtle CSS hover/focus movement. A custom lowercase n is used for favicons and device icons. Regenerate the current published identity with `node scripts/generate-wordmark-brand.mjs`. Earlier sunburst and sea-urchin sketches remain local experiments.

Project colours are intentionally distinct: blue, yellow, teal, clay, lavender and other muted shades. SFT Telemetry now uses the owner-provided wired-prototype photograph with its connected visualiser as the cover in both the homepage card and project page.

The gallery receives only the fields it renders from the server; full project narratives stay out of the client module. Images use Next Image, animations use CSS, and the photo viewer uses a native dialog. The obsolete server localStorage workaround is no longer imported by the layout.

Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build -- --webpack`. Native tests verify all curated media/route data, unique project colours, and Spotify credentials/failure/deduplication behaviour without real account access. Live Spotify credentials, Strava integration and the exact Iachini Design Instagram URL remain owner setup items.

Release verification: lint, TypeScript, production webpack build and three native tests passed against the isolated staged release. HTTP tests cover 26 bilingual project routes, the two homepages, CV/video/favicon files and an unknown project returning 404. Browser checks cover the photo dialog’s arrow/Escape controls, focus return, language switching and 390px mobile layout without horizontal overflow. Live Spotify authorisation remains unconfigured.

## External source archive (2026-10-02)

Original folders `garda`, `homelab`, `immagini-nanni`, `pomodorogo` and
`project-screenshots`, design previews from `output`, the standalone Osmo HTML
prototype, and public media without references in source code or asset-generation
scripts have moved to `../nannipy-materiale-archiviato-2026-10-02/`, preserving
their relative paths. The unrelated `Sakura` planning folder is also archived there.
Published assets referenced by the application and existing components remain in
`public`. The archive contains `manifest.json` with verified file hashes and
`git-status-prima.txt` with the repository status before cleanup.
