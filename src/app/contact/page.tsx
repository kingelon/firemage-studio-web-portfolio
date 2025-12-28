import { SITE } from "@/lib/site";

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Initialize Project
        </h1>
        <p className="mt-2 text-neutral-600 text-lg">
          Tell me what you're trying to accomplish. I&apos;ll recommend the
          smallest package to get a win.
        </p>
      </div>

      <div className="border border-neutral-200 bg-white p-6">
        <a
          href={`mailto:${SITE.email}?subject=Project%20Inquiry`}
          className="inline-flex border border-neutral-200 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Start Intake
        </a>
        {SITE.social?.twitter ? (
          <div className="mt-4 text-sm text-neutral-500">
            <a
              href={SITE.social.twitter}
              className="underline underline-offset-4 hover:text-neutral-700"
            >
              X / Twitter
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
