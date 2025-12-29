import Link from "next/link";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {SITE.name}
        </h1>
        <p className="text-xl text-neutral-700">
          I engineer the data foundations for production AI.
          <span className="mt-2 block text-lg text-neutral-500">
            Moving enterprises from &quot;fragile demos&quot; to
            &quot;governed, reliable systems.&quot;
          </span>
        </p>
        <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed">
          For founders, small teams, and builders who want a real working
          artifact (not just a slide deck).
        </p>
      </div>

      <ul className="grid gap-3 max-w-3xl sm:grid-cols-3">
        <li className="border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900">
          Launch Sprint (Ship v0)
        </li>
        <li className="border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900">
          Systems Tune-Up (Fix fragility)
        </li>
        <li className="border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900">
          RAG-lite Knowledge Base (Docs → Answers)
        </li>
      </ul>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/services"
          className="rounded-none bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
        >
          View Services
        </Link>
        <Link
          href="/work"
          className="rounded-none border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
        >
          See Work
        </Link>
        <Link
          href="/contact"
          className="rounded-none border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
