# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install       # Install dependencies
pnpm dev           # Start dev server at http://localhost:3000
pnpm build         # Build production bundle
pnpm start         # Start production server
pnpm lint          # Run ESLint
```

No test runner is configured.

## Architecture

**Next.js 15 App Router** marketing site for Aura Hogar, a smart home automation company based in Chajarí, Argentina. All content is in Spanish.

### Pages
- `app/page.tsx` — Main landing page (~565 lines): hero, services, benefits, process steps, project gallery, contact CTA
- `app/servicios/[service-name]/page.tsx` — Four service detail pages: `casa-inteligente`, `seguridad-monitoreo`, `iluminacion-premium`, `redes-conectividad`
- `app/layout.tsx` — Root layout: sets `lang="es"`, loads Inter font, adds WhatsApp button globally, Vercel Analytics

### Components
- `components/ui/` — 56 shadcn/ui components (don't edit manually; regenerate via `pnpm dlx shadcn@latest add <component>`)
- `components/header.tsx`, `components/footer.tsx` — Site-wide nav and footer
- `components/whatsapp-button.tsx` — Floating WhatsApp CTA, rendered in root layout

### Styling
Tailwind CSS with a custom brand palette defined in `tailwind.config.ts`:
- `aura-black`: #0A0908
- `aura-slate`: #22333B
- `aura-cream`: #EAE0D5
- `aura-tan`: #C6AC8F
- `aura-brown`: #5E503F

Use these brand colors instead of generic Tailwind colors for all Aura Hogar UI work.

### Key Libraries
- **shadcn/ui + Radix UI** — accessible UI primitives
- **React Hook Form + Zod** — form handling and validation
- **Lucide React** — icons
- **next-themes** — dark/light mode
- **Vercel Analytics** — production analytics

### next.config.mjs
Build errors and TypeScript errors are ignored during `build` (`ignoreBuildErrors: true`, `ignoreDuringBuilds: true`). Images are unoptimized (`unoptimized: true`).
