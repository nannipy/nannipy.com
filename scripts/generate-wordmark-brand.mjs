import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const sage = '#b7c9a2';
const canvas = '#141113';
// A custom lowercase n: a small shoulder and an asymmetric, open arch.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="${canvas}"/><path d="M28 75V29L29 43C36 24 70 26 70 48L72 75" fill="none" stroke="${sage}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
await mkdir('public/brand', { recursive: true });
await mkdir('output/redesign', { recursive: true });
await writeFile('public/brand/n-monogram.svg', svg);
await writeFile('public/favicon.svg', svg);
for (const n of [16, 32, 96]) await sharp(Buffer.from(svg)).resize(n, n).png().toFile(`public/favicon-${n}x${n}.png`);
for (const [file, n] of [['apple-touch-icon.png', 180], ['web-app-manifest-192x192.png', 192], ['web-app-manifest-512x512.png', 512]]) {
  // Full background and safe inset for maskable application icons.
  const appIcon = svg.replace('rx="22"', 'rx="0"').replace('<path', '<g transform="translate(10 10) scale(.8)"><path').replace('</svg>', '</g></svg>');
  await sharp(Buffer.from(appIcon)).resize(n, n).png().toFile(`public/${file}`);
}
const png = await sharp(Buffer.from(svg)).resize(64, 64).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4); header[6] = 64; header[7] = 64;
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12); header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
await writeFile('public/favicon.ico', Buffer.concat([header, png]));
await sharp(Buffer.from(svg)).resize(320, 320).png().toFile('output/redesign/n-favicon-preview.png');
const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="${canvas}"/><text x="75" y="95" font-family="Arial, sans-serif" font-size="32" font-weight="600" fill="#f7f2f4">nanni<tspan fill="${sage}">.</tspan><tspan font-weight="400" fill="#b1a6ac">py</tspan></text><text x="75" y="284" font-family="Arial, sans-serif" font-size="64" letter-spacing="-2" fill="#f7f2f4">Giovanni Battista</text><text x="75" y="358" font-family="Arial, sans-serif" font-size="64" letter-spacing="-2" fill="#f7f2f4">Pernazza<tspan fill="${sage}">.</tspan></text><text x="78" y="455" font-family="Arial, sans-serif" font-size="24" fill="#b1a6ac">Software engineer · Rome</text><path d="M75 545 H1125" stroke="#f7f2f4" stroke-opacity=".15"/><text x="75" y="585" font-family="Arial, sans-serif" font-size="17" fill="#b1a6ac">nannipy.com</text></svg>`;
await writeFile('public/brand/social-card.svg', social);
await sharp(Buffer.from(social)).png().toFile('public/brand/social-card.png');
