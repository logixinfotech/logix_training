# HR Management System (Frontend)

A frontend-only HR Management System UI built with React, Vite, Tailwind CSS,
and React Router. Scope here is UI, navigation, routing, and layout only —
module logic (tables, forms, APIs) is intentionally left for teammates to
build inside each page's placeholder.

## Stack

- React 18 + Vite
- Tailwind CSS (utility-first styling, custom design tokens in `tailwind.config.js`)
- React Router DOM (routing)
- React Icons (`lucide` icon set via `react-icons/lu`)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     Reusable UI: Header, Sidebar, cards, breadcrumb, etc.
  layouts/        DashboardLayout — the fixed sidebar + header shell
  pages/          One folder per module, mirroring the sidebar
  data/           sidebarData.js (single source of truth for navigation)
                  usePageMeta.js (resolves route -> breadcrumb/title)
  App.jsx         Route definitions
  main.jsx        App entry point
```

## Navigation model

All sidebar modules, submenus, and routes are defined once in
`src/data/sidebarData.js`. Adding a new module or page means:

1. Add an entry to `sidebarData.js` (module or item).
2. Create the page component under `src/pages/<Module>/`.
3. Register the route in `src/App.jsx`.

Breadcrumbs and page titles are derived automatically from this data via
`usePageMeta`, so there's nothing to hardcode per page.

## Design system

- **Overview page** (`/dashboard/overview`) is the only fully designed page —
  a complete dashboard with live widgets (tasks, activity, department
  summary, quick actions).
- Every other module page renders `<PlaceholderPage />`, a styled empty state
  ready for a teammate to fill in with real tables/forms/logic.
- Fonts: `Newsreader` (display/headings), `Inter` (UI/body), `IBM Plex Mono`
  (numerals, timestamps, breadcrumbs).
- Color tokens, shadows, and animation keyframes are defined in
  `tailwind.config.js` — extend from there rather than using inline styles.
