import Link from "next/link";

export default function ServicesPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
        <p className="mt-2 text-neutral-600 text-lg">
          Packaged outcomes. Clear scope. Clean handoff. Minimal fluff.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="border border-neutral-200 bg-white p-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Launch Sprint</h2>
            <p className="text-sm text-neutral-600">
              Fixed scope v0 shipping — deployed and maintainable.
            </p>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>Repo scaffold + clean architecture</li>
            <li>Deployment + production hardening</li>
            <li>Handoff guide so you keep control</li>
          </ul>
          <div className="mt-4 text-sm font-semibold text-neutral-900">
            Starts at $1,500
          </div>
          <Link
            href="/book"
            className="mt-4 inline-flex border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
          >
            Book a Call
          </Link>
        </div>

        <div className="border border-neutral-200 bg-white p-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Systems Tune-Up</h2>
            <p className="text-sm text-neutral-600">
              Make fragile systems stable, readable, and fast.
            </p>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>Audit + prioritized fix plan</li>
            <li>Implement top fixes</li>
            <li>Performance + reliability pass</li>
          </ul>
          <div className="mt-4 text-sm font-semibold text-neutral-900">
            Starts at $750
          </div>
          <Link
            href="/book"
            className="mt-4 inline-flex border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
          >
            Book a Call
          </Link>
        </div>

        <div className="border border-neutral-200 bg-white p-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">RAG-lite Knowledge Base</h2>
            <p className="text-sm text-neutral-600">
              Turn docs into searchable answers with eval loops.
            </p>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>Ingestion + chunking strategy</li>
            <li>Retrieval prompt structure</li>
            <li>Privacy-friendly options (BYO-key)</li>
          </ul>
          <div className="mt-4 text-sm font-semibold text-neutral-900">
            Starts at $1,500
          </div>
          <Link
            href="/book"
            className="mt-4 inline-flex border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  );
}
