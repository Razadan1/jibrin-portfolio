# Jibrin Nasiruddin — Data Scientist Portfolio

A standalone React + Vite portfolio site. Runs locally with plain npm — no monorepo, no workspaces, no extra setup.

## Requirements

- Node.js 18 or newer (Node 20+ recommended)
- npm (comes with Node.js)

## Run locally

Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

The site will open automatically at **http://localhost:3000**.

## Build for production

```bash
npm run build
npm run preview
```

The built files are written to the `dist/` folder. You can host them on any static host (Netlify, Vercel, GitHub Pages, S3, etc.) or open the preview locally.

## Project structure

```
.
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── src/
    ├── main.tsx            # React entry point
    ├── App.tsx             # Root component
    ├── index.css           # Tailwind v4 + theme variables
    └── pages/
        └── Home.tsx        # The portfolio page (all sections)
```

## Tech stack

- **React 18** + **Vite 6** — fast dev server and build
- **TypeScript** — type safety
- **Tailwind CSS v4** — styling via `@tailwindcss/vite`
- **Framer Motion** — scroll-driven animations
- **Lucide React** + **react-icons** — icon sets

## Customizing the content

All copy (name, sections, experience, projects, contact) lives in
`src/pages/Home.tsx`. Edit the strings directly and the dev server will
hot-reload your changes.

The color palette (white, navy blue, black) is defined in `src/index.css`
under the `:root` block. The primary navy is `--primary: 220 65% 15%`.
