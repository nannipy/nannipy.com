import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const primary = '#b7c9a2';
const bordeaux = '#a93249';
const sage = '#b7c9a2';
const canvas = '#141113';
let seed = 71241;
const random = () => {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return seed / 4294967296;
};
const point = (angle, radius, tangent = 0) => [
  400 + Math.cos(angle) * radius - Math.sin(angle) * tangent,
  400 + Math.sin(angle) * radius + Math.cos(angle) * tangent,
];
const xy = (p) => p.map(v => v.toFixed(2)).join(' ');
const spines = [];
// Uneven roots and tapering needles give the mark an organic silhouette.
for (let i = 0; i < 48; i++) {
  const a = i / 48 * Math.PI * 2 + (random() - .5) * .028;
  const radius = 268 + random() * 90 + Math.sin(a * 5) * 10;
  const root = -22 - random() * 12;
  const bend = (random() - .5) * 21;
  const thickness = 9 + random() * 11;
  const bodyRadius = 100 + random() * 24;
  const leftRoot = point(a, root, -35 - thickness);
  const rightRoot = point(a, root, 35 + thickness);
  const leftBody = point(a, bodyRadius, -thickness * .75);
  const rightBody = point(a, bodyRadius, thickness * .75);
  const leftShoulder = point(a, radius * .62, -thickness * .42 + bend * .23);
  const rightShoulder = point(a, radius * .64, thickness * .35 + bend * .23);
  const tip = point(a, radius, bend);
  spines.push(`<path d="M${xy(leftRoot)} L${xy(leftBody)} Q${xy(leftShoulder)} ${xy(tip)} Q${xy(rightShoulder)} ${xy(rightBody)} L${xy(rightRoot)} Z"/>`);
}
// Fine incisions break up the dense body like an engraved sea-urchin print.
const incisions = [];
for (let i = 0; i < 16; i++) {
  const a = i / 16 * Math.PI * 2 + (random() - .5) * .10;
  const start = 150 + random() * 35;
  const end = start + 45 + random() * 85;
  const width = .7 + random() * 2.2;
  incisions.push(`<path d="M${xy(point(a, start, -width))} Q${xy(point(a, (start + end) * .5, -width * .3))} ${xy(point(a, end, 2))} Q${xy(point(a, (start + end) * .5, width * .4))} ${xy(point(a, start, width))} Z"/>`);
}
const mask = `<defs><mask id="urchin-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="800"><rect width="800" height="800" fill="white"/><g fill="black">${incisions.join('')}</g></mask></defs>`;
const mark = `${mask}<g fill="${primary}" mask="url(#urchin-cut)">${spines.join('')}</g>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">${mark}</svg>`;
const white = svg.replace(mark, `<rect width="800" height="800" fill="#ffffff"/>${mark}`);
await mkdir('public/brand', { recursive: true });
await writeFile('public/brand/urchin.svg', svg);
await writeFile('public/brand/urchin-white.svg', white);
const green = svg.replaceAll(primary, sage);
await writeFile('public/brand/urchin-bordeaux.svg', svg.replaceAll(primary, bordeaux));
await writeFile('public/brand/urchin-sage.svg', green);
await writeFile('public/brand/urchin-sage-white.svg', green.replace(mark.replaceAll(primary, sage), `<rect width="800" height="800" fill="#ffffff"/>${mark.replaceAll(primary, sage)}`));
await sharp(Buffer.from(svg)).resize(560,560).flatten({background:canvas}).png().toFile('output/redesign/urchin-logo-preview.png');
await sharp(Buffer.from(green)).resize(560,560).flatten({background:canvas}).png().toFile('output/redesign/urchin-sage-preview.png');
const comparison = `<svg xmlns="http://www.w3.org/2000/svg" width="1120" height="610" viewBox="0 0 1120 610"><rect width="1120" height="610" fill="${canvas}"/><svg x="0" y="0" width="560" height="560" viewBox="0 0 800 800">${mark.replaceAll(primary, bordeaux)}</svg><svg x="560" y="0" width="560" height="560" viewBox="0 0 800 800">${mark.replaceAll('urchin-cut', 'urchin-green-cut').replaceAll(primary, sage)}</svg><g fill="#f7f2f4" font-family="Arial, sans-serif" font-size="20" text-anchor="middle"><text x="280" y="586">Bordeaux</text><text x="840" y="586">Verde salvia</text></g></svg>`;
await sharp(Buffer.from(comparison)).png().toFile('output/redesign/urchin-colors-comparison.png');

if (process.argv.includes('--apply')) {
  await writeFile('public/favicon.svg', svg);
  for (const n of [16,32,96]) await sharp(Buffer.from(svg)).resize(n,n).png().toFile(`public/favicon-${n}x${n}.png`);
  for (const [file,n] of [['apple-touch-icon.png',180],['web-app-manifest-192x192.png',192],['web-app-manifest-512x512.png',512]]) {
    await sharp(Buffer.from(white)).resize(n,n).png().toFile(`public/${file}`);
  }
  const png = await sharp(Buffer.from(svg)).resize(64,64).png().toBuffer();
  const header = Buffer.alloc(22);
  header.writeUInt16LE(1,2);header.writeUInt16LE(1,4);header[6]=64;header[7]=64;
  header.writeUInt16LE(1,10);header.writeUInt16LE(32,12);header.writeUInt32LE(png.length,14);header.writeUInt32LE(22,18);
  await writeFile('public/favicon.ico', Buffer.concat([header,png]));
  const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="${canvas}"/><g transform="translate(810 110) scale(.48)">${mark}</g><text x="75" y="90" font-family="Arial, sans-serif" font-size="27" fill="${primary}">nanni.py</text><text x="75" y="284" font-family="Arial, sans-serif" font-size="64" letter-spacing="-2" fill="#f7f2f4">Giovanni Battista</text><text x="75" y="358" font-family="Arial, sans-serif" font-size="64" letter-spacing="-2" fill="#f7f2f4">Pernazza.</text><text x="78" y="455" font-family="Arial, sans-serif" font-size="24" fill="#b1a6ac">Software engineer · Rome</text><path d="M75 545 H1125" stroke="#f7f2f4" stroke-opacity=".15"/><text x="75" y="585" font-family="Arial, sans-serif" font-size="17" fill="#b1a6ac">nannipy.com</text></svg>`;
  await writeFile('public/brand/social-card.svg',social);
  await sharp(Buffer.from(social)).png().toFile('public/brand/social-card.png');
}
