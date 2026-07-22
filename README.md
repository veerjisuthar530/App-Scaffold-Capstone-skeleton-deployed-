# App Scaffold

A lightweight Next.js + TypeScript + Tailwind starter with a basic app shell, navigation, and a health-check route.

## Overview

This project provides a minimal foundation for building a web app using:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Simple route-based page structure

The app currently includes placeholder pages for Home, Dashboard, Profile, Settings, About, and Health, along with a basic API health endpoint.

## Project Structure

```text
app-scaffold/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── api/health/
│   │   ├── dashboard/
│   │   ├── health/
│   │   ├── profile/
│   │   ├── settings/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── Nav.tsx
├── package.json
├── tailwind.config.ts
└── next.config.mjs
```

## Available Routes

- `/` — home landing page
- `/dashboard` — dashboard placeholder page
- `/profile` — profile placeholder page
- `/settings` — settings placeholder page
- `/about` — about placeholder page
- `/health` — health page that checks the API route
- `/api/health` — JSON health endpoint

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev    # run the app locally
npm run build  # create a production build
npm run start  # run the production build
npm run lint   # run Next.js lint checks
```

## Health Check

The `health` page fetches the `/api/health` endpoint at request time and shows the returned JSON data, including status and environment details. This helps validate that the app is able to serve live server-side data.

## Environment

A sample environment file is included as `.env.example`. Use a local `.env.local` file for any real development secrets or environment values.

## Notes

- The app is currently a scaffold and uses placeholder content where real product pages have not yet been implemented.
- The shared UI is controlled through Tailwind design tokens defined in `tailwind.config.ts` and `src/app/globals.css`.

