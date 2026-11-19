# Rafael Felipe Suerte — Portfolio

A sharp, night-shift portfolio built with **React + Vite**, **React-Bootstrap**
and **React Router** (data router). Near-black canvas, acid lime, condensed
uppercase display type and data-style labels — deliberately loud, deliberately
not another beige serif site.

## Run it

```bash
npm install
npm run dev      # http://localhost:5186
npm run build    # typecheck + production build
npm run preview  # serve the production build
```

## Pages

| Route      | File                      | What it holds                                   |
| ---------- | ------------------------- | ----------------------------------------------- |
| `/`        | `src/pages/Home.tsx`      | Intro, portrait, stats, approach                |
| `/work`    | `src/pages/Work.tsx`      | Filterable project index + case-study modal     |
| `/about`   | `src/pages/About.tsx`     | Résumé: profile, experience, education, skills  |
| `/contact` | `src/pages/Contact.tsx`   | Public contact details + validated demo form    |
| `*`        | `src/pages/NotFound.tsx`  | 404                                             |

All five pages are separate `.tsx` files and are linked from the single
navigation bar (`src/components/SiteNav.tsx`), which becomes a full-screen
menu on small screens.

## React-Bootstrap components used

`Navbar` / `Nav` / `Offcanvas`, `Container`, `Row`, `Col`, `Card`, `Button`,
`Badge`, `Accordion`, `ProgressBar`, `ListGroup`, `Table`, `Form`, `Alert`,
`Modal`.

## Design system

- **Type:** Anton for display, Archivo for body, IBM Plex Mono for labels.
- **Colour:** `#0a0a0c` canvas, `#f2f0e8` ink, `#d4ff3f` acid lime, with
  cobalt and orange reserved for project covers.
- **Shapes:** zero radius, 1px rules, hard offset shadows, rotated sticker.
- **Motion:** page fade-up, hover lifts, scroll progress bar; all disabled
  under `prefers-reduced-motion`.

## Editing content

All copy, projects, résumé entries and contact details live in
`src/data/site.ts`. The portrait is `public/portrait.jpg` — replace it with a
real photo at the same 4:5 ratio (the About page crops it to a square).

The contact form is a front-end demo: it validates input and shows a
confirmation, but it does not post anywhere. Swap in your provider in
`handleSubmit` in `src/pages/Contact.tsx` if you want it live.

Sample content (phone number, social handles, school) is placeholder text —
update it before publishing.

## Notes

- Dot matrix, grid rules, project-cover patterns and the outlined footer
  wordmark are pure CSS; no animation or SVG-illustration libraries.
- `@media print` turns the About page into a clean one-column résumé sheet
  (the "Print résumé" button simply calls `window.print()`).
