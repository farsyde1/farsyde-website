# FARSYDE LLC — Website

Marketing and corporate website for FARSYDE LLC, a specialized software
engineering firm serving the DoD, Intelligence Community, and prime
contractors. Deployed to GitHub Pages at [https://farsyde.net](https://farsyde.net).

## Tech Stack

- **React 19 + TypeScript** via Vite
- **Tailwind CSS v4** (CSS-first config in `src/index.css`)
- **Lucide React** icons

## Local Development

```bash
npm install
npm run dev
```

Production build and preview:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) automatically builds and
publishes the site on every push to `main`. The custom domain is configured
via `public/CNAME` (`farsyde.net`).

### First-time GitHub Pages setup

1. Create a repository on GitHub and push this project to `main`.
2. In **Settings → Pages** set Source to **GitHub Actions**.
3. In **Settings → Pages → Custom domain**, add `farsyde.net`.
4. At your DNS provider add:

   | Type | Host | Value |
   | ---- | ---- | ----- |
   | A    | @    | `185.199.108.153` |
   | A    | @    | `185.199.109.153` |
   | A    | @    | `185.199.110.153` |
   | A    | @    | `185.199.111.153` |
   | CNAME | www | `<username>.github.io` |

## Content

Company profile data (CAGE, UEI, NAICS, contact info) lives in
`src/data/company.ts`. Drop your capabilities statement PDF into `public/`
named `FARSYDE_LLC_Capabilities_Statement.pdf` to activate the download
buttons.