import { readFileSync } from 'fs';
import path from 'path';
import menu from '../menu/menu-data.json';
import offer from '../menu/marenda-items.json';
import { resolveMarenda } from '../menu/pricing.mjs';

export const breakfastPrice = menu.breakfast;
export const dailyOffer = { ...offer, items: resolveMarenda(offer) };
export function getPublications() {
  const manifest = JSON.parse(readFileSync(path.join(process.cwd(), 'public/cjenici/manifest.json'), 'utf8'));
  const publications = manifest.publications.map(p => ({ ...p, href: `/cjenici/${p.filename}` }));
  return { full: publications.filter(p => p.kind === 'full').at(-1), daily: publications.filter(p => p.kind === 'daily').at(-1), archive: [...publications].reverse() };
}
