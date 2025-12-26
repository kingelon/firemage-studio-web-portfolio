import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white mt-auto">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-500">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>(c) {new Date().getFullYear()} {SITE.name}</div>
          <div className="text-neutral-400">{SITE.tagline}</div>
        </div>
      </div>
    </footer>
  );
}
