"use client"

import { DmPreview } from "./dm-preview"
import { BetaSignupButton } from "./beta-signup"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span className="text-xs font-semibold text-primary">AI Sales Agent for Instagram DMs</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
              {"Book more calls without living in your "}
              <span className="text-primary">DMs.</span>
            </h1>

            <p className="mt-6 max-w-lg text-xl leading-relaxed text-muted-foreground font-medium text-pretty">
              Repp connects to your Instagram and automates the tedious parts of sales — qualifying leads, follow-ups, and booking calls — straight from your DMs.
            </p>

            <p className="mt-6 text-sm text-muted-foreground">
              Full transparency. Total oversight. You stay in the pilot&apos;s seat.
            </p>

            <BetaSignupButton className="mt-8" />
          </div>

          {/* DM Preview */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <DmPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
