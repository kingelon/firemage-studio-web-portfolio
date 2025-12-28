# Session Log (append-only)

## 2025-12-28
### Ticket 1 — Industrial Alchemist visual theme v1
- Added JetBrains Mono font variable and set monospace default in `src/app/layout.tsx`.
- Applied 24px engineering grid background on `body` in `src/app/layout.tsx`.
- Sharpened nav link corners to `rounded-none` in `src/components/NavBar.tsx`.
- Added `tailwind.config.ts` to map `font-mono` to `--font-mono`.
- Pending: confirm Tailwind config is picked up in build (Tailwind v4 uses config only when present).
