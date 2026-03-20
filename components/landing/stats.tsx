const stats = [
  { value: "↑", label: "More calls booked", description: "vs. manual DM management" },
  { value: "5 min", label: "Setup time", description: "No prompts. No workflows." },
  { value: "24/7", label: "Always on", description: "Never miss a lead again" },
]

export function Stats() {
  return (
    <section className="border-y border-border/50 bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-px md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-6 py-10 text-center">
            <span className="font-display text-3xl font-bold text-primary md:text-4xl">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-foreground">{stat.label}</span>
            <span className="text-xs text-muted-foreground">{stat.description}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
