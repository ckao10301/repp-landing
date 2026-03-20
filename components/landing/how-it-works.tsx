import {
  MessageSquare,
  ClipboardCheck,
  CalendarCheck,
  Handshake,
} from "lucide-react"

const steps = [
  {
    step: 1,
    icon: MessageSquare,
    title: "The Conversation",
    description:
      "Repp filters spam, answers questions in your voice, and keeps every prospect engaged — instantly, 24/7.",
  },
  {
    step: 2,
    icon: ClipboardCheck,
    title: "The Qualification & Data Sync",
    description:
      "Qualifies budget, goals, and timeline. Overcomes objections naturally. Autofills your CRM with every detail.",
  },
  {
    step: 3,
    icon: CalendarCheck,
    title: "The Booking",
    description:
      "Sends your calendar link at the perfect moment, books the call, and moves the lead card to \"Meeting Booked.\"",
  },
  {
    step: 4,
    icon: Handshake,
    title: "The Handoff & Close",
    description:
      "Pings your team with full context. Your closer enters the Zoom armed with everything they need — ready to close.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center mb-16">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
          The Perfect Handoff
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          From first DM to booked call — a seamless 4-step partnership between AI and your sales team.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {/* Connecting line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-0.5 bg-primary/20" />
              )}

              <div className="relative mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm ring-4 ring-background">
                {item.step}
              </div>

              <div className="mb-3 flex justify-center text-primary">
                <item.icon className="h-6 w-6" />
              </div>

              <h4 className="font-display font-bold text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
