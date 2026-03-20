"use client"

import { ArrowUpRight, ChevronRight, MessageSquare, Calendar, TrendingUp } from "lucide-react"

const leads = [
  {
    name: "Sarah Jenkins",
    handle: "@sarahj_fit",
    avatar: "SJ",
    score: "Hot",
    stage: "Call Booked",
    lastMsg: "Just confirmed for Thursday!",
    time: "2m ago",
  },
  {
    name: "Michael Chang",
    handle: "@mchang99",
    avatar: "MC",
    score: "Hot",
    stage: "Offer Sent",
    lastMsg: "This sounds amazing, what's included?",
    time: "8m ago",
  },
  {
    name: "Lisa Martinez",
    handle: "@lisamartz",
    avatar: "LM",
    score: "Warm",
    stage: "Qualified",
    lastMsg: "I've been thinking about coaching for a while...",
    time: "22m ago",
  },
  {
    name: "James Okafor",
    handle: "@jamesokafor",
    avatar: "JO",
    score: "Warm",
    stage: "Nurturing",
    lastMsg: "What results do your clients typically see?",
    time: "1h ago",
  },
  {
    name: "Emily Park",
    handle: "@emilypark_",
    avatar: "EP",
    score: "Cold",
    stage: "New Lead",
    lastMsg: "Hey! Saw your reel about meal prep",
    time: "3h ago",
  },
]

const scoreStyles: Record<string, string> = {
  Hot: "bg-green-50 text-green-700 border-green-200",
  Warm: "bg-amber-50 text-amber-700 border-amber-200",
  Cold: "bg-secondary text-muted-foreground border-border",
}

const stageStyles: Record<string, string> = {
  "Call Booked": "text-green-700",
  "Offer Sent": "text-primary",
  Qualified: "text-blue-700",
  Nurturing: "text-amber-700",
  "New Lead": "text-muted-foreground",
}

export function LeadDashboard() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Your entire pipeline, auto‑updated in real time.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Every DM, lead score, and booked call in real time. No more spreadsheets, no more guessing. Pipeline stages are fully customizable to match your sales process.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              app.repp.ai/dashboard
            </span>
            <div className="w-12" />
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {[
              { label: "Active Conversations", value: "47", icon: MessageSquare, delta: "+12 today" },
              { label: "Calls Booked", value: "14", icon: Calendar, delta: "+3 today" },
              { label: "Qualification Rate", value: "87%", icon: TrendingUp, delta: "+4% this week" },
              { label: "Revenue Influenced", value: "$12.4k", icon: ArrowUpRight, delta: "this month" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <stat.icon className="h-4 w-4" />
                  <span className="text-xs font-medium">{stat.label}</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-primary mt-1">{stat.delta}</p>
              </div>
            ))}
          </div>

          {/* Lead table */}
          <div className="border-t border-border">
            <div className="grid grid-cols-[1fr_80px_100px_1fr_60px] gap-4 border-b border-border bg-secondary/50 px-5 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground hidden md:grid">
              <span>Lead</span>
              <span>Score</span>
              <span>Stage</span>
              <span>Last Message</span>
              <span />
            </div>

            {leads.map((lead) => (
              <div
                key={lead.handle}
                className="group grid grid-cols-1 gap-3 border-b border-border/50 px-5 py-4 transition-colors hover:bg-secondary/30 md:grid-cols-[1fr_80px_100px_1fr_60px] md:gap-4 md:items-center"
              >
                {/* Lead info */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {lead.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{lead.name}</p>
                    <p className="text-xs text-muted-foreground">{lead.handle}</p>
                  </div>
                </div>

                {/* Score */}
                <div>
                  <span
                    className={`inline-block rounded border px-2 py-0.5 text-[11px] font-bold uppercase ${scoreStyles[lead.score]}`}
                  >
                    {lead.score}
                  </span>
                </div>

                {/* Stage */}
                <p className={`text-sm font-medium ${stageStyles[lead.stage]}`}>
                  {lead.stage}
                </p>

                {/* Last message */}
                <p className="truncate text-sm text-muted-foreground">
                  {lead.lastMsg}
                  <span className="ml-2 text-xs text-muted-foreground/60">{lead.time}</span>
                </p>

                {/* Action */}
                <div className="flex justify-end">
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground opacity-0 transition-all hover:bg-primary/10 hover:text-primary group-hover:opacity-100"
                    aria-label={`View ${lead.name} conversation`}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
