# 📖 Documentation

## Overview
- Next.js 16 (App Router) with React 19
- Tailwind CSS 4 + PostCSS for styling
- `next-intl` for locale-aware routing and translation utilities
- Data-driven product catalog for charging stations, super-fast DC, portable chargers, and cables
- Contact form uses a Next.js API route backed by Resend email delivery

## Directory guide
- `app/[locale]/` – All routed pages by locale (`en`, `de`, `ar`), plus API routes and not-found boundaries
- `src/Components/` – Shared UI (hero sections, cards, product sections, loaders, emails)
- `src/Data/` – Modular product data/configuration, specs, download references, and image maps (`index.js` consolidates exports)
- `src/assets/Images/` – Marketing and product imagery (including README header assets)
- `src/app/api/contact/route.js` – Next.js API route that sends emails via Resend
- `src/config/api.js` – legacy API base URL helper (`apiCall` wrapper)
- `src/i18n/` – Routing helpers and localization setup (`routing.js`, `request.js`)
- `public/api/` – legacy PHP contact handlers (unused when Resend is enabled)
- `server.js` – Custom server entry used for production hosting

## Localization
- Supported locales: `en`, `de`, `ar` (see `src/i18n/routing.js`)
- Default locale: `en`
- Add a locale by updating `routing.js` and creating a sibling folder under `app/[locale]/`
- Use `next-intl` helpers (`Link`, `redirect`, `useRouter`, `usePathname`) from `src/i18n/routing.js` to keep navigation locale-aware

## Environment variables
- `RESEND_API_KEY`: API key for Resend email delivery
- `CONTACT_EMAIL`: recipient for contact form submissions
- `NEXT_PUBLIC_API_URL` (optional legacy): base URL if you still call PHP endpoints

## API layer
- `src/app/api/contact/route.js` sends email via Resend using `RESEND_API_KEY` and `CONTACT_EMAIL`
- `src/app/api/test-env/route.js` exposes environment sanity checks for Resend config
- Legacy PHP scripts live in `public/api/` if you still need them

## Data model
- Entry point: `src/Data/index.js`
- Each product category exports:
  - `data` – content blocks used across pages
  - `images` / `backgroundImages` – mapped assets
  - `downloads` / `downloadData` – downloadable PDFs grouped by category
- Utility getters (`getProductData`, `getProductImages`, `getProductSpecifications`, `getAvailableProducts`) simplify access across the app

## Styling
- Tailwind CSS v4 configuration in `tailwind.config.mjs`
- Global styles: `app/globals.css`
- Component-level styling via Tailwind utility classes; minimal custom CSS in `src/index.css`

## Build & deploy
- Dev: `pnpm dev`
- Prod build: `pnpm build` then `pnpm start`
- Hostinger flow: `pnpm build:hostinger` (prepares assets for shared hosting)
- Static assets served from `/public` (including `/public/api` PHP files)

## Testing checklist
- Verify each locale renders key routes under `/[locale]/...`
- Submit contact form against the chosen PHP endpoint
- Download links for each product category return valid files
- Lint passes: `pnpm lint`
