import { ArrowUpRight, Database, FileJson, GitGraph } from "lucide-react";

export default function WorkPage() {
  return (
    <section className="space-y-12">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-mono font-semibold tracking-tight">
          /artifacts
        </h1>
        <p className="text-lg text-neutral-600">
          Engineering memos, reference architectures, and internal tooling.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="group border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-900">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FileJson className="h-5 w-5 text-neutral-500" />
                <h2 className="text-lg font-mono font-semibold">
                  Agent Evaluation Harness
                </h2>
              </div>
              <p className="text-sm text-neutral-500">
                Internal Tooling • Python / LangSmith
              </p>
            </div>
            <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs font-mono text-neutral-600">
              v1.2
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-neutral-600">
            A CI/CD pipeline step that runs synthetic user queries against the
            RAG agent, measuring precision/recall drift before deployment.
            Prevents &quot;silent failures&quot; in production.
          </p>
        </div>

        <div className="group border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-900">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-neutral-500" />
                <h2 className="text-lg font-mono font-semibold">
                  Hybrid Graph-RAG Architecture
                </h2>
              </div>
              <p className="text-sm text-neutral-500">
                System Design • Neo4j / Vector
              </p>
            </div>
            <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs font-mono text-neutral-600">
              Ref
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-neutral-600">
            A design pattern for grounding LLMs in structured enterprise data.
            Combines vector search for unstructured similarity with knowledge
            graphs for structured relationship traversal.
          </p>
        </div>

        <div className="group border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-900">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GitGraph className="h-5 w-5 text-neutral-500" />
                <h2 className="text-lg font-mono font-semibold">
                  Firemage Studio Infra
                </h2>
              </div>
              <p className="text-sm text-neutral-500">
                Recursive Case Study • Next.js / Stripe / Cal
              </p>
            </div>
            <a href="/" className="text-neutral-400 hover:text-neutral-900">
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-4 max-w-2xl text-neutral-600">
            The automated delivery pipeline for this studio. Zero-maintenance
            booking flow, payment gating, and GitOps deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
