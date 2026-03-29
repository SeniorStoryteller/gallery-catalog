# Gallery Catalog — The Orchard Galleries on 25

## Project

Online art gallery catalog for The Orchard Galleries on 25. Current exhibition runs February 28 – May 2, 2026, featuring Bella Feldman, Joseph Slusky, and Art of the African Diaspora.

## Tech Stack

- React + Vite (SPA, no SSR)
- react-router-dom for client-side routing
- JSON data files for artists and artworks (`src/data/`)
- Static images in `public/artworks/`
- Deployed to Vercel at https://gallery-catalog.vercel.app
- GitHub repo: https://github.com/SeniorStoryteller/gallery-catalog

## Architecture

- `src/pages/` — Home, Artists, ArtistDetail, ArtistProfile, ArtworkDetail
- `src/components/` — Header, Footer, ArtworkCard, ScrollToTop
- `src/data/artists.json` — Artist data including full profile content with sourced sections
- `src/data/artworks.json` — Artwork entries with images, medium, descriptions
- `vercel.json` — SPA rewrites for client-side routing
- Dark theme (always dark, no light mode toggle)

## Design

- Black background (#0a0a0a) with light text
- Georgia serif italic for headings, Helvetica Neue sans for body
- 960px max-width content area
- 3-column artwork grid (2 on tablet, 1 on mobile)
- Artwork images use `object-fit: contain` (no cropping), left-aligned in square frames
- Card text aligns with image left edge, not frame edge
- Artist name links to profile page, artwork title/image links to detail page
- Footer links back to landing page

## Deployment Workflow

1. `git add` + `git commit` + `git push`
2. `npx --cache /tmp/npm-cache-vercel vercel --prod --yes`
   (temp cache needed due to npm permissions issue on this machine)

## Content Notes

### Bella Feldman Profile
- Comprehensive biographical profile with 12 numbered sources (was 7, expanded March 2026)
- 9 narrative/list sections: Early Life & Education, Career & Teaching, Artistic Philosophy & Materials, Major Series, Architectural Commissions (new), Legacy (expanded), Selected Exhibitions (24 entries), Awards & Recognition (5), Collections (9)
- Profile sources in `artists.json` use `{ label, url }` objects; inline superscript footnotes (¹ ² ³ etc.) are parsed by `renderWithFootnotes()` in `ArtistProfile.jsx` and rendered as clickable `(N)` links
- `renderWithFootnotes()` supports multi-digit superscripts (¹⁰, ¹¹, ¹²) via Unicode digit-value parsing — not limited to single digits
- Sources without URLs (physical catalogs, award citations, journal articles) render as plain text
- Key sources: Wikipedia, official CV/website, SculptureSite Gallery, BAWALP, Richmond Art Center catalog, WCA citation, Desta Gallery, Leonardo journal, Selz/Sculpture Magazine, Baker/SF Chronicle, Ollman/LA Times, Cohn/Squarecylinder
- Uganda dates follow her CV (1972–1975), not Wikipedia (1971–1973)
- Architectural commissions section sourced entirely from official CV
- Exhibitions list is reverse-chronological; University Art Museum Berkeley is undated (placed last)

### General
- Artwork titles are placeholders ("Untitled (descriptive)") — real titles not yet provided
- Joseph Slusky and African Diaspora content not yet added
- Hero image: `bella-feldman-hero-image.jpg` (Feldman seated beside monumental sculpture)
- OG/Twitter meta tags use `Orchard Galleries on 25 - Featured Image.png`
