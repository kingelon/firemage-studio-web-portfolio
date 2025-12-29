"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight, Clock, CreditCard } from "lucide-react";
import { LINKS } from "@/lib/links";

function normalizeCalLink(input: string): string {
  if (input.startsWith("http://") || input.startsWith("https://")) {
    try {
      const url = new URL(input);
      return url.pathname.replace(/^\/+/, "");
    } catch {
      return input;
    }
  }
  return input.replace(/^\/+/, "");
}

export default function BookPage() {
  const calDiscovery = normalizeCalLink(LINKS.calDiscovery);

  useEffect(() => {
    (async function initCal() {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="space-y-12">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-mono font-semibold tracking-tight">
          /booking
        </h1>
        <p className="text-lg text-neutral-600">
          Select a protocol. Discovery is free. Technical work is pre-paid.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="group border border-neutral-200 bg-white p-8 transition-colors hover:border-neutral-400">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-xl font-mono font-semibold">
                Discovery Call
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <Clock className="h-4 w-4" />
                <span>15 Minutes</span>
              </div>
            </div>
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium uppercase tracking-wide">
              Free
            </span>
          </div>

          <p className="mt-4 min-h-[80px] text-neutral-600">
            Fit-check. We clarify scope, timeline, and determine if Firemage is
            the right partner for your build.
          </p>

          <button
            data-cal-link={calDiscovery}
            data-cal-config='{"layout":"month_view"}'
            className="mt-6 flex w-full items-center justify-center gap-2 border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition-all hover:border-neutral-900 hover:bg-neutral-50 group-hover:shadow-sm"
          >
            Select Time Slot
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="group border border-neutral-200 bg-white p-8 transition-colors hover:border-neutral-400">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-xl font-mono font-semibold">
                System Deep Dive
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <Clock className="h-4 w-4" />
                <span>60 Minutes</span>
              </div>
            </div>
            <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
              Paid
            </span>
          </div>

          <p className="mt-4 min-h-[80px] text-neutral-600">
            Architecture review, debugging session, or strategy planning.
            <span className="mt-2 block font-medium text-neutral-900">
              Requires $X deposit. Calendar unlocks after payment.
            </span>
          </p>

          <a
            href={LINKS.stripePaidCall}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800"
          >
            <CreditCard className="h-4 w-4" />
            Purchase & Book
          </a>
        </div>
      </div>
    </section>
  );
}
