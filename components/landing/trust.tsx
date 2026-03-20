import { Check } from "lucide-react"

const trustPoints = [
  {
    title: "Full History & Summaries",
    description: "Click any lead to see the full DM thread plus an instant AI summary.",
  },
  {
    title: "Approve Early, Auto-pilot Later",
    description: "Review and approve messages manually at first, then flip the switch when you're confident.",
  },
  {
    title: "Conversation Memory",
    description: "The agent remembers past interactions, objections, and preferences for every individual user forever.",
  },
]

export function Trust() {
  return (
    <section className="py-24 md:py-32 bg-primary/5 border-y border-primary/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left: text */}
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              Gradual handoff. Total trust.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              {"We know giving an AI access to your brand feels like a leap of faith. That's why we built it with total transparency."}
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {trustPoints.map((point) => (
                <li key={point.title} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">{point.title}:</strong> {point.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: placeholder graphic */}
          <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <p className="font-display text-xl font-bold text-foreground">You stay in control</p>
              <p className="max-w-xs text-sm text-muted-foreground">
                Every message is transparent. Every decision is yours. The AI works for you, not around you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
