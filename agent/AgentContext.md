# Firemage Studio — Web Presence v0 Charter (for Coding Agent)

## Context

I’m building a public “stage” for my work under my domain (Firemage Studio). This is not a final product; it’s the start of a compounding curve. The goal is to publish a clean, credible online presence that can later expand into paid services and/or tools. I want a practical, low-cost, controllable setup.

## Goal (v0)

Deploy an initial portfolio site to production on Vercel, connected to my domain, with a structure that can evolve into:

* Consulting/services packages page
* Proof/work/case-studies page
* Contact/booking flow
* Optional Supabase-backed features later (intake forms, leads, gated content, lightweight client portal)

## Stack choices (locked)

* Hosting / Frontend: Vercel
* Database: Supabase (Postgres; optional auth/storage later)
* Repo: local portfolio repo → push to GitHub → Vercel import
* CI/CD: Git push → Vercel preview builds + prod deploy on main

## Constraints / Preferences

* Keep it minimal and clean. Avoid premature complexity.
* Use environment variables properly (no secrets committed).
* Make changes incrementally in small tickets.
* Favor simple defaults that are scalable later.
* “Done” means: deployed + domain live + reproducible steps documented.

## Assumptions (agent can proceed with these unless repo indicates otherwise)

* This is a Next.js project (if not, adjust accordingly).
* We’ll use GitHub as the remote.
* Domain is already purchased (firemage studio) and can be pointed to Vercel.
* Supabase is created via dashboard; code only needs env var wiring + a minimal connectivity check (optional).

## Deliverables (v0)

* Site deploys successfully on Vercel from GitHub
* Domain connected and serving HTTPS
* Basic site sections in place (Home / Work / Services / Contact)
* Basic “services packages” content scaffolded (can be placeholder text)
* Repo has a README with: deploy steps, env vars, and local dev commands
* Optional: Supabase client wired + simple health check route or build-time check (no sensitive keys leaked)

## Non-goals (for now)

* No full SaaS, no billing system, no complex auth
* No GPU hosting or heavy compute deployment
* No complex analytics pipeline (optional later)

## Security Rules

* Never commit .env files.
* Only use NEXT_PUBLIC_* for non-sensitive client values (public URL + anon key are okay; never expose service role key).
* If a server-side key is needed later, keep it server-only and use Vercel env vars.

## Working style

Create small PR-sized changes. Each ticket should end with a clear validation step.
