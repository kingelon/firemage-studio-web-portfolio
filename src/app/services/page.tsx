import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <section className="space-y-12">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-mono font-semibold tracking-tight">
          /services
        </h1>
        <p className="text-lg text-neutral-600">
          Production AI is 10% models, 90% data engineering. I handle the hard
          90%.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-400">
          <div className="mb-4 space-y-2">
            <h2 className="text-lg font-mono font-semibold">
              Data Readiness Sprint
            </h2>
            <p className="text-sm text-neutral-500">
              For teams who want AI but fear the data mess.
            </p>
          </div>
          <div className="mb-6 grow space-y-3">
            <p className="text-sm text-neutral-600">
              A 2-week deep dive to map your data, define access patterns, and
              establish the governance needed for safe RAG/Agent deployment.
            </p>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-neutral-900" />
                Compliance/Risk Register
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-neutral-900" />
                RAG Feasibility Scorecard
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-neutral-900" />
                Access Control Architecture
              </li>
            </ul>
          </div>
          <div className="mt-auto border-t border-neutral-100 pt-6">
            <div className="mb-3 text-sm font-mono font-semibold text-neutral-900">
              Fixed Scope (2 Weeks)
            </div>
            <a
              href="/book"
              className="flex w-full items-center justify-center gap-2 border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-900 hover:border-neutral-900 hover:bg-white"
            >
              Book Fit Check
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col border border-neutral-200 bg-white p-6 ring-1 ring-neutral-900/5 transition-shadow hover:shadow-lg">
          <div className="mb-4 space-y-2">
            <h2 className="text-lg font-mono font-semibold">
              RAG/Agent Production Path
            </h2>
            <p className="text-sm text-neutral-500">
              From &quot;Cool Demo&quot; to &quot;Reliable System&quot;.
            </p>
          </div>
          <div className="mb-6 grow space-y-3">
            <p className="text-sm text-neutral-600">
              We ship a working agent integrated into real workflows
              (SQL/NoSQL/Graph), hardened with evaluation loops and
              observability.
            </p>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-neutral-900" />
                Working End-to-End Pipeline
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-neutral-900" />
                Eval Harness (Precision/Recall)
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-neutral-900" />
                Cost &amp; Latency Controls
              </li>
            </ul>
          </div>
          <div className="mt-auto border-t border-neutral-100 pt-6">
            <div className="mb-3 text-sm font-mono font-semibold text-neutral-900">
              Project Based
            </div>
            <a
              href="/book"
              className="flex w-full items-center justify-center gap-2 bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Discuss Architecture
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-400">
          <div className="mb-4 space-y-2">
            <h2 className="text-lg font-mono font-semibold">Ops &amp; Governance</h2>
            <p className="text-sm text-neutral-500">
              Prevent drift. Ensure safety.
            </p>
          </div>
          <div className="mb-6 grow space-y-3">
            <p className="text-sm text-neutral-600">
              Ongoing engineering support for data contracts, prompt drift,
              retrieval quality, and schema evolution.
            </p>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-neutral-900" />
                Weekly Tuning &amp; Evals
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-neutral-900" />
                Data Pipeline Maintenance
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 text-neutral-900" />
                Incident Response SLA
              </li>
            </ul>
          </div>
          <div className="mt-auto border-t border-neutral-100 pt-6">
            <div className="mb-3 text-sm font-mono font-semibold text-neutral-900">
              Monthly Retainer
            </div>
            <a
              href="/book"
              className="flex w-full items-center justify-center gap-2 border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-900 hover:border-neutral-900 hover:bg-white"
            >
              Inquire
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
