import { SITE } from "@/lib/site";

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
        <div className="border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Firemage Studio v0</h2>
            <p className="text-sm text-neutral-600">
              The recursive case study.
            </p>
          </div>
          <p className="mt-4 text-sm text-neutral-600">
            Deployed a production-ready Next.js architecture in &lt;24 hours.
            Automated CI/CD via Vercel, strict type safety, and a scalable
            component system.
          </p>
          <a
            href={SITE.url}
            className="mt-4 inline-flex text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
          >
            View live site
          </a>
        </div>

        <div className="border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">AI Workflow Systems</h2>
            <p className="text-sm text-neutral-600">
              Local-first workflows + repeatable delivery kits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
