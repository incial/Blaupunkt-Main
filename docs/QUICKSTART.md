# ⚡ Quick Start

Follow these steps to get the Blaupunkt EV site running locally.

## Prerequisites
- Node.js 18 or newer
- pnpm (preferred) or npm/yarn
- Optional: PHP runtime if you want to exercise the contact endpoints under `public/api`

## 1) Clone and install
```bash
git clone https://github.com/incial/Blaupunkt-Main.git
cd Blaupunkt-Main
pnpm install
```

## 2) Environment variables
Create `.env.local` in the project root:
```bash
RESEND_API_KEY=your-resend-key
CONTACT_EMAIL=team@your-domain.com
```
These power the `/api/contact` Next.js route that sends mail via Resend.

## 3) Run the app
```bash
pnpm dev
```
The dev server starts on http://localhost:3000.

## 4) Production build
```bash
pnpm build
pnpm start
```
`server.js` serves the built output, which is compatible with Hostinger and similar hosts.

## 5) Lint
```bash
pnpm lint
```

## 6) Contact endpoint check
Hit the built-in test endpoint to verify your Resend key:
```bash
curl http://localhost:3000/api/contact
```
Expect a JSON success response after a test email is sent to `CONTACT_EMAIL`.

## 7) Localization basics
Routes live in `app/[locale]/`. Supported locales are defined in `src/i18n/routing.js` (`en`, `de`, `ar`). Duplicate content under a new locale folder when adding translations.

## 8) Product data updates
Product specs, downloads, and images are organized under `src/Data/` with the main export in `src/Data/index.js`. Update the relevant product config to adjust catalog content.
