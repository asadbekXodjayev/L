# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Photography portfolio single-page app for Lobar Jabborova ("Lobar's Diary"), deployed at `https://loabrsdiary.uz` on Vercel. **Vite + React 18, plain JavaScript (`.jsx`) — not TypeScript, not Next.js.** Ignore the global Next.js/TypeScript/shadcn stack defaults from personal memory; this repo does not use them.

## Commands

```bash
npm run dev       # Vite dev server with HMR
npm run build     # production build to dist/
npm run preview   # serve the built dist/ locally
npm run lint      # ESLint
```

There is no test suite, no test runner, and no formatter configured. Note `eslint.config.js` is written in old CommonJS `.eslintrc` format (`module.exports`), which mismatches the ESLint 9 flat-config the dependencies imply — `npm run lint` may not behave as expected.

## Architecture

- **Routing**: `src/main.jsx` mounts `<BrowserRouter>`; `src/App.jsx` defines all routes (`/`, `/about`, `/resume`, `/works`, `/reflection`, `*` → NotFound). Vercel rewrites all paths to `/` (`vercel.json`) so the SPA handles client-side routing. New pages = add a `<Route>` in `App.jsx` and a folder under `src/Pages/`.
- **Pages vs Components**: `src/Pages/*` are thin route-level wrappers that compose presentational pieces from `src/components/*`. Each component lives in its own folder with a co-located `.css` file (e.g. `components/WorkCom/WorkCom.jsx` + `WorkCom.css`). Naming convention is `<Name>Com`.
- **Always-mounted helpers** in `App.jsx`, outside `<Routes>`: `NavbarCom`, `FooterCom`, `ScrollToTop` (scrolls to top on route change), and `BotCom`.
- **Works data**: the portfolio gallery is a single hardcoded array `worksData` exported from `components/WorkCom/WorkCom.jsx`, grouped by `category` (Studio, Wedding, etc.), each item `{ category, title, photos: [{ src, alt }] }`. Image `src` paths point into `public/works/`. Pages render subsets via `worksData.slice(...)` (e.g. the Home page shows only a slice). To add work, add entries to this array and drop the images in `public/works/`.

## Styling

Plain CSS per component plus `src/index.css` for globals and CSS custom properties (`var(--color-2)`, `var(--backround-color)` [sic — misspelled token name is intentional/in-use], `var(--font-main)`). MUI, Emotion, styled-components, and Swiper are all installed dependencies — check what a component actually imports before assuming an approach. Some styles are inline in JSX (see `Home.jsx`).

## SEO

SEO is a primary concern for this project (see `SEO-GUIDE.md` for the full playbook and target keywords). When changing pages, content, or routes, keep these in sync: `index.html` meta tags + Schema.org structured data, `public/sitemap.xml`, and `public/robots.txt`. `public/google88802942aba4eed0.html` is the Google Search Console verification file — do not remove it.

## BotCom — visitor telemetry

`src/components/BotCom.jsx` silently reports every visitor to a Telegram chat (IP via ipify, device/OS/UA, screen size, page-switch durations, session length via `sendBeacon` on unload). **The Telegram bot token and chat ID are hardcoded in this file.** Be aware this is live analytics on a production site; treat the credentials as sensitive and do not expose or duplicate them.
