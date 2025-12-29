import Link from "next/link";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="space-y-16">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-mono font-semibold tracking-tight sm:text-5xl">
          {SITE.name}
        </h1>
        <p className="text-xl leading-relaxed text-neutral-900">
          I engineer the data foundations for production AI.
          <span className="mt-4 block text-neutral-600">
            Moving enterprises from &quot;fragile demos&quot; to &quot;governed,
            reliable systems.&quot; I bridge the gap between experimental AI
            models and strict engineering standards.
          </span>
        </p>
      </div>

      <div className="max-w-3xl border-l-2 border-neutral-900 bg-neutral-50/50 p-6 sm:p-8">
        <p className="text-xl font-semibold text-neutral-900 sm:text-2xl">
          For technical founders and engineering teams who need to move AI from
          experimental notebooks to governed production systems.
        </p>
      </div>

      <div className="grid gap-8 border-t border-neutral-100 pt-12 sm:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wide text-neutral-900">
            01. Data First
          </h3>
          <p className="text-sm leading-relaxed text-neutral-600">
            Models are commodities. Your data structure, access patterns, and
            governance are the real moat.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wide text-neutral-900">
            02. Local &amp; Private
          </h3>
          <p className="text-sm leading-relaxed text-neutral-600">
            Architecture that respects privacy by design. Local-first workflows
            and private RAG pipelines.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wide text-neutral-900">
            03. Strict Evals
          </h3>
          <p className="text-sm leading-relaxed text-neutral-600">
            If you can&apos;t measure it, don&apos;t ship it. Every agent
            includes automated regression testing.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        <Link
          href="/services"
          className="bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          View Services
        </Link>
        <Link
          href="/work"
          className="border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
        >
          See Work
        </Link>
        <Link
          href="/book"
          className="border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
        >
          Book Consult
        </Link>
      </div>
    </section>
  );
}
