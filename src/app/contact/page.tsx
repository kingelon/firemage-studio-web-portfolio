export default function ContactPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-2 text-neutral-600 text-lg">
          Tell me what you're trying to accomplish. If it's a fit, I'll propose
          a package and timeline.
        </p>
      </div>

      <div className="rounded-xl border border-neutral-200 p-6 bg-neutral-50/50">
        <h2 className="font-semibold text-base">Connect</h2>
        <p className="mt-2 text-sm text-neutral-600 mb-4">
          Open for booking starting Q1.
        </p>
        <ul className="space-y-3 text-sm text-neutral-600">
          <li className="flex items-center gap-2">
            <span className="font-medium text-neutral-900">Email:</span>
            hello@firemage.studio
          </li>
          <li className="flex items-center gap-2">
            <span className="font-medium text-neutral-900">X / Twitter:</span>
            @FiremageStudio
          </li>
        </ul>
      </div>
    </section>
  );
}
