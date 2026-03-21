"use client"

import { BetaSignupButton } from "./beta-signup"

export function BottomCta() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <span className="text-xs font-semibold text-primary">Limited Beta Spots</span>
        </div>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
          Join the beta and get an exclusive deal
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          Be among the first to use Repp and lock in a deal that won&apos;t last.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 text-left">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <div className="mb-2 text-2xl">🎁</div>
            <p className="font-display font-bold text-foreground">Free During Beta</p>
            <p className="mt-1 text-sm text-muted-foreground">Full access, no credit card required.</p>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <div className="mb-2 text-2xl">💸</div>
            <p className="font-display font-bold text-foreground">50% Off for Life</p>
            <p className="mt-1 text-sm text-muted-foreground">Locked-in discount that never goes away.</p>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <div className="mb-2 text-2xl">🤝</div>
            <p className="font-display font-bold text-foreground">White Glove Onboarding</p>
            <p className="mt-1 text-sm text-muted-foreground">We set everything up for you personally.</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <BetaSignupButton />
        </div>

        <div className="mt-16 border-t border-border/50 pt-12 max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Our story</p>
          <p className="text-muted-foreground leading-relaxed">
            Calvin built businesses from scratch using social media. Amir spent 4 years at Google watching billion-dollar companies grow — and noticed small businesses never got the same tools. So they built Repp to change that. Cutting-edge technology from Silicon Valley, finally built for coaches.
          </p>
        </div>
      </div>
    </section>
  )
}
