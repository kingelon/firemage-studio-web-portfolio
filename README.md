# Firemage Studio - Web Presence v0

Clean, minimal Next.js site that serves as the public stage for Firemage Studio.
This repo is intentionally small so it can evolve without heavy refactors.

## AgentContext alignment

This repo implements the v0 charter in `agent/AgentContext.md`:
- Home / Work / Services / Contact routes exist and are scaffolded.
- Content is minimal and editable; no backend dependencies yet.
- Deployed via Vercel from GitHub when ready.

## Local development

```bash
pnpm install
pnpm dev
```

Other commands:
```bash
pnpm lint
pnpm build
pnpm start
```

## Deploy notes (Vercel)

- Push repo to GitHub.
- Import into Vercel.
- Set environment variables (if/when needed).
- Connect the domain in Vercel and enable HTTPS.

## Environment variables (placeholders)

Only add what you use. Do not commit `.env` files.

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Working framework (for changes)

Keep changes small and traceable:
1) Context - what goal are we solving for?
2) Change - what files/sections move?
3) Validate - how do we confirm it works?
4) Log - short note in PR/commit about what shifted.

## Future roadmap (v0 -> v1)

- Add real case studies and proof of work.
- Expand services into clear packages.
- Add contact/booking flow.
- Optional Supabase client and health check route.

