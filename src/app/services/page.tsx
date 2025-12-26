export default function ServicesPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
        <p className="mt-2 text-neutral-600 text-lg">
          Packaged outcomes. Clear scope. Clean handoff. Minimal fluff.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 p-6">
          <h2 className="font-semibold text-lg">AI Workflow Setup</h2>
          <p className="text-sm text-neutral-500 mb-4">Local / Hybrid</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>Goal-driven setup and tuning</li>
            <li>Repeatable structure (scripts, presets)</li>
            <li>Handoff guide for control</li>
          </ul>
        </div>

        <div className="rounded-xl border border-neutral-200 p-6">
          <h2 className="font-semibold text-lg">Knowledge Base / RAG-lite</h2>
          <p className="text-sm text-neutral-500 mb-4">Documentation Systems</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>Turn scattered docs into searchable answers</li>
            <li>Privacy-friendly (BYO-key)</li>
            <li>Simple evaluation loops</li>
          </ul>
        </div>

        <div className="rounded-xl border border-neutral-200 p-6">
          <h2 className="font-semibold text-lg">Prototype v0 Shipping</h2>
          <p className="text-sm text-neutral-500 mb-4">Idea to Artifact</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>Functional working artifacts</li>
            <li>Clean repo structure + deployment</li>
            <li>Designed for fast iteration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
