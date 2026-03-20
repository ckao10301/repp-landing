import {
  Rocket,
  Database,
  RefreshCw,
  Users,
} from "lucide-react"

const superpowers = [
  {
    icon: Rocket,
    title: "Your Trusted Co-Pilot",
    description: "Stop staring at a blank reply. Get instant message suggestions trained on your offer, voice, and objections — so every reply sounds like you and converts like your best conversations.",
  },
  {
    icon: Database,
    title: "Self-Updating CRM",
    description: "Extracts budgets, pain points, and goals. Autofills your pipeline automatically.",
  },
  {
    icon: RefreshCw,
    title: "Never Miss a Follow-Up",
    description: "Repp tells you exactly which leads need attention and when. No more guessing who to follow up with or letting hot leads go cold.",
  },
  {
    icon: Users,
    title: "Built for Teams Too",
    description: "Multiple setters and closers can work the same inbox together. Admins get a dedicated view to track each rep's activity, conversion rates, and pipeline performance.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-card border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Your unfair advantage — whether you sell solo or run a setter team.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {superpowers.map((power) => (
            <div
              key={power.title}
              className="group rounded-2xl border border-border/50 bg-secondary/50 p-8 transition-all hover:border-primary/30"
            >
              <div className="mb-4 text-primary">
                <power.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {power.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {power.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
