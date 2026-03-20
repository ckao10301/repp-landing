"use client"

import { CheckCircle, Target, Eye, CalendarCheck, LayoutDashboard } from "lucide-react"

const solutionFeatures = [
  {
    icon: CheckCircle,
    title: "Lead Qualification",
    description:
      "Automatically identifies budget, goals, and readiness before pushing a booking link.",
  },
  {
    icon: Target,
    title: "Objection Handling & Follow-up",
    description:
      'Handles "price concerns" natively, follows up on unread messages, and nudges towards checkout.',
  },
  {
    icon: Eye,
    title: "Human-in-the-Loop Transparency",
    description:
      "The AI summarizes its reasoning. You can jump in, override the agent, and flag conversations to train it.",
  },
  {
    icon: CalendarCheck,
    title: "Call Booking",
    description:
      "Pushes qualified leads directly to your Calendly. The AI handles availability and sends the link at the perfect moment.",
  },
  {
    icon: LayoutDashboard,
    title: "Lead Dashboard",
    description:
      "See every conversation, lead score, and pipeline stage in one place. Track who's hot, who's stalling, and where your revenue is coming from.",
  },
]

const leads = [
  {
    name: "Sarah Jenkins",
    handle: "@sarahj_fit",
    score: "Hot",
    tag: "Price Concern",
    stage: "Offer Sent",
  },
  {
    name: "Michael Chang",
    handle: "@mchang99",
    score: "Warm",
    tag: "Wedding Goal",
    stage: "Qualified",
  },
]

const scoreStyles: Record<string, string> = {
  Hot: "bg-green-500/10 text-green-600 border-green-500/20",
  Warm: "bg-amber-500/10 text-amber-600 border-amber-500/20",
}

const stageStyles: Record<string, string> = {
  "Offer Sent": "bg-primary/10 text-primary border-primary/20",
  Qualified: "bg-blue-500/10 text-blue-600 border-blue-500/20",
}

export function DashboardPreview() {
  return (
    <section id="sales-engine" className="py-24 md:py-32 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: text + features */}
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl text-balance">
              A Domain-Specific Sales Engine.
            </h2>
            <p className="mt-4 text-accent-foreground/60 text-lg text-pretty">
              We encoded sales psychology, brand voice, and objection handling directly into the system. It gets smarter on its own.
            </p>

            <ul className="mt-8 flex flex-col gap-6">
              {solutionFeatures.map((feat) => (
                <li key={feat.title} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <feat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{feat.title}</h4>
                    <p className="text-accent-foreground/60 text-sm mt-1">{feat.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="rounded-2xl border border-accent-foreground/10 bg-accent-foreground/5 overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-accent-foreground/10 px-4 py-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-accent-foreground/50 font-medium">Dashboard Overview</span>
              <div />
            </div>

            <div className="p-6">
              {/* Headline stat */}
              <div className="mb-6 flex items-center justify-between rounded-xl bg-primary p-4">
                <div>
                  <p className="text-sm font-medium text-primary-foreground/70">Calls Booked This Week</p>
                  <p className="text-3xl font-bold text-primary-foreground">14</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-primary-foreground/70">VSLs Sent</p>
                  <p className="text-xl font-bold text-primary-foreground">32</p>
                </div>
              </div>

              {/* Mini CRM */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-foreground/50 mb-3">
                Live Pipeline
              </h4>
              <div className="flex flex-col gap-3">
                {leads.map((lead) => (
                  <div
                    key={lead.handle}
                    className="flex items-center justify-between rounded-lg border border-accent-foreground/10 bg-accent-foreground/5 p-3"
                  >
                    <div>
                      <p className="text-sm font-medium">
                        {lead.name}{" "}
                        <span className="text-xs text-accent-foreground/40">{lead.handle}</span>
                      </p>
                      <div className="mt-1 flex gap-2">
                        <span className={`rounded border px-2 py-0.5 text-[10px] font-bold uppercase ${scoreStyles[lead.score]}`}>
                          {lead.score}
                        </span>
                        <span className="rounded bg-accent-foreground/10 px-2 py-0.5 text-[10px] text-accent-foreground/60">
                          {lead.tag}
                        </span>
                      </div>
                    </div>
                    <span className={`rounded-full border px-2 py-1 text-xs ${stageStyles[lead.stage]}`}>
                      {lead.stage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
