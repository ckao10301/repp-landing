const testimonials = [
  {
    quote:
      "I was spending 3 hours a day replying to DMs. Now Repp handles it and my bookings actually went up. Wild.",
    name: "Jess T.",
    role: "Fitness Coach, 42K followers",
    initials: "JT",
  },
  {
    quote:
      "The onboarding blew my mind. I described my offer, picked a tone, and the sample messages already sounded like me. Activated in under 5 minutes.",
    name: "Marcus D.",
    role: "Course Creator, 18K followers",
    initials: "MD",
  },
  {
    quote:
      "I was skeptical about AI talking to my leads. But the human-in-the-loop feature let me approve everything first. After a week I turned on autopilot.",
    name: "Rachel P.",
    role: "Business Coach, 95K followers",
    initials: "RP",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Creators love Repp
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border/50 bg-card p-6"
            >
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${t.quote}"`}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
