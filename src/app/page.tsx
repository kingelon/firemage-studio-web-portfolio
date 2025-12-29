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
            &quot;governed, reliable systems.&quot; I bridge the gap between
            experimental AI models and strict engineering standards.
          </span>
        </p>
        <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed">
          For technical founders and engineering teams who need to move AI from
          experimental notebooks to governed production systems.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Data First
          </h2>
          <p className="text-sm text-neutral-600">
            Models are commodities. Your data structure, access patterns, and
            governance are the real moat.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Local &amp; Private
          </h2>
          <p className="text-sm text-neutral-600">
            Architecture that respects privacy by design. Local-first workflows
            and private RAG pipelines.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Strict Evals
          </h2>
          <p className="text-sm text-neutral-600">
            If you can&apos;t measure it, don&apos;t ship it. Every agent
            includes automated regression testing.
          </p>
        </div>
      </div>

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
          href="/book"
          className="rounded-none border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
        >
          Book Consult
        </Link>
      </div>
    </section>
  );
}
