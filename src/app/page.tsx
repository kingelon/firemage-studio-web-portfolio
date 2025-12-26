import Link from "next/link";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {SITE.name}
        </h1>
        <p className="text-xl text-neutral-600 font-light">{SITE.tagline}</p>
        <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed">
          {SITE.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/services"
          className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
        >
          View services
        </Link>
        <Link
          href="/work"
          className="rounded-lg border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
        >
          See work
        </Link>
      </div>

      <div className="rounded-xl border border-neutral-200 p-6 bg-neutral-50/50">
        <h2 className="text-base font-semibold">Current Focus</h2>
        <p className="mt-2 text-neutral-600">
          Building a clean stage for my work + a private delivery system for
          client-ready AI workflows. This is v0 -- the curve bends up from here.
        </p>
      </div>
    </section>
  );
}
