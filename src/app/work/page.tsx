export default function WorkPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Work</h1>
        <p className="mt-2 text-neutral-600 text-lg">
          Proof and write-ups. Starting simple -- will grow into case studies.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="rounded-xl border border-neutral-200 p-6 hover:border-neutral-300 transition-colors">
          <h2 className="font-medium text-lg">
            Firemage Studio - Web Presence v0
          </h2>
          <p className="mt-2 text-neutral-600">
            Clean Next.js baseline + deployment pipeline. (This site.)
          </p>
        </div>

        <div className="rounded-xl border border-neutral-200 p-6 hover:border-neutral-300 transition-colors">
          <h2 className="font-medium text-lg">AI Workflow Systems</h2>
          <p className="mt-2 text-neutral-600">
            Local-first workflows, small tools, and repeatable delivery kits.
          </p>
        </div>
      </div>
    </section>
  );
}
