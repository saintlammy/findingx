# Finding X — Event Website

Single-page event site for **Finding X** (Living, Working & Building in the UK), a BuildersCabal initiative — first edition in Leeds, 26 Sept 2026.

Two design directions are implemented side by side, with a switcher above the navbar:

- `/` — **Direction A · Kinetic Editorial** (cream/ink/kola-orange, Bricolage Grotesque, GSAP slot-machine hero word)
- `/crossing` — **Direction C · The Crossing** (violet/acid-lime neo-brutalist, Unbounded, stamped rotating word, clip-wipe reveals)

## Stack

- [Astro](https://astro.build) (static output)
- GSAP + ScrollTrigger via CDN
- No other runtime dependencies

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Content

All shared copy (agenda, FAQs, audiences, partner packages, event date) lives in `src/content.ts`. The countdown target is `EVENT_DATE_ISO` in that file.

Pending real content: venue name, speakers, registration platform link, newsletter provider.
