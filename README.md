# Rafael Felipe Suerte — Portfolio

A small, editorial portfolio built with **React + Vite**, **React-Bootstrap** and
**React Router** (data router). Warm paper, hairline grid, Instrument Serif
display type and one persimmon accent.

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
| `/`        | `src/pages/Home.tsx`      | Intro, portrait, stats, selected work, approach |
| `/work`    | `src/pages/Work.tsx`      | Filterable project index + case-study modal     |
| `/about`   | `src/pages/About.tsx`     | Résumé: profile, experience, education, skills  |
| `/contact` | `src/pages/Contact.tsx`   | Public contact details + validated demo form    |
| `*`        | `src/pages/NotFound.tsx`  | 404                                             |

All five pages are separate `.tsx` files and are linked from the single
navigation bar (`src/components/SiteNav.tsx`), which collapses into an
off-canvas menu on small screens.

## React-Bootstrap components used

`Navbar` / `Nav` / `Offcanvas`, `Container`, `Row`, `Col`, `Card`, `Button`,
`Badge`, `Accordion`, `ProgressBar`, `ListGroup`, `Table`, `Form`, `Alert`,
`Modal`.

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

- Paper-grain texture, grid lines, marquee, seal and page transition are pure
  CSS/SVG; no animation library.
- `prefers-reduced-motion` stops the marquee, seal and entrance animations.
- `@media print` turns the About page into a clean one-column résumé sheet
  (the "Print résumé" button simply calls `window.print()`).
