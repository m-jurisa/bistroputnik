# Bistro Putnik

Dark premium under-construction landing page for Bistro Putnik, built with:

- Next.js 16
- App Router
- Tailwind CSS
- JavaScript only
- Static export

The public site currently publishes only the main hero page.

## Project Structure

```text
app/
  icon.svg
  layout.js
  page.js
  globals.css
components/
  BrandDivider.js
  LogoLockupPlaceholder.js
  UnderConstructionHero.js
data/
  site.js
public/
next.config.mjs
postcss.config.js
tailwind.config.js
package.json
```

## How To Run

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Create the production export:

```bash
npm run build
```

The static site is generated into:

```text
out/
```

## What To Edit Most Often

Main homepage content:

- [components/UnderConstructionHero.js](/home/epiphany/2026/bistroputnik/components/UnderConstructionHero.js:1)

Logo placeholder component:

- [components/LogoLockupPlaceholder.js](/home/epiphany/2026/bistroputnik/components/LogoLockupPlaceholder.js:1)

Current live logo asset:

- [logo-primary.png](/home/epiphany/2026/bistroputnik/public/logo-primary.png)

Favicon / browser tab icon:

- [app/icon.svg](/home/epiphany/2026/bistroputnik/app/icon.svg:1)

Global colors, spacing, and dark theme styling:

- [app/globals.css](/home/epiphany/2026/bistroputnik/app/globals.css:1)
- [tailwind.config.js](/home/epiphany/2026/bistroputnik/tailwind.config.js:1)

Small site metadata / slogan:

- [data/site.js](/home/epiphany/2026/bistroputnik/data/site.js:1)

## Logo Setup

The homepage is now wired to use your real logo file directly:

- [logo-primary.png](/home/epiphany/2026/bistroputnik/public/logo-primary.png)

The component that renders it is:

- [components/LogoLockupPlaceholder.js](/home/epiphany/2026/bistroputnik/components/LogoLockupPlaceholder.js:1)

### If you want to replace the logo later

Simplest option:

1. Keep the same filename
2. Replace this file:

```text
public/logo-primary.png
```

No code changes are needed if the filename stays the same.

### If you want to use a different filename

Edit this path in [components/LogoLockupPlaceholder.js](/home/epiphany/2026/bistroputnik/components/LogoLockupPlaceholder.js:1):

```jsx
src="/logo-primary.png"
```

For example:

```jsx
src="/my-final-logo.png"
```

### Notes

- Files inside `public/` are available from the site root.
- `public/logo-primary.png` becomes `/logo-primary.png`.
- The current hero logo uses `next/image` and is already set up for static export.
- The image is displayed with `object-contain`, so it will not be stretched.

## How To Replace The Small Browser Icon

The browser tab icon is here:

- [app/icon.svg](/home/epiphany/2026/bistroputnik/app/icon.svg:1)

To replace it:

1. Open [app/icon.svg](/home/epiphany/2026/bistroputnik/app/icon.svg:1)
2. Replace its SVG markup with your own icon SVG

This is the best place for:

- a statue-only icon
- a simplified mark
- a favicon-safe brand symbol

## How To Change The Homepage Text

Edit:

- [components/UnderConstructionHero.js](/home/epiphany/2026/bistroputnik/components/UnderConstructionHero.js:1)

The main editable lines are:

- eyebrow label
- `We are under construction`
- opening message
- supporting slogan

## Design Notes

- Backgrounds are intentionally dark-only.
- The main visual system uses teal variants.
- Sand gold is the primary text accent.
- Premium off-white and muted gray are used sparingly for supporting text.
- The site currently has no public navigation and no inner published pages.

## Build Note

Fonts are loaded with `next/font/google`.

If you build in a restricted environment, the build may need outbound access to fetch Google Fonts once during the build process.

## Current Public Output

After build, the only public page exported is:

- `/`

There is no public About, Menu, Gallery, or Contact route in the current published version.
