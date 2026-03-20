import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-accent text-accent-foreground text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl font-bold md:text-5xl text-balance">
          Stop managing DMs. Start closing.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-accent-foreground/60 text-pretty">
          See how many calls your DMs are actually hiding. Get started today.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 text-lg font-bold shadow-lg shadow-primary/30"
          >
            {"Set Up in 5 Minutes"}
          </Button>
        </div>
        <p className="mt-6 text-sm text-accent-foreground/40">
          No credit card required.
        </p>
      </div>
    </section>
  )
}
