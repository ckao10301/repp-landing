import {
  Eye,
  ShieldCheck,
  Zap,
  LifeBuoy,
  CalendarCheck,
  ArrowRight,
  Tag,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

const trustPoints = [
  {
    icon: Eye,
    title: "Total Transparency",
    description:
      "Every message is visible in real-time. Take over any chat with one click — the AI steps back instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Approval Mode",
    description:
      "Start in \"Draft Only\" so every reply needs your sign-off. Flip to \"Auto Mode\" when you're ready.",
  },
  {
    icon: Zap,
    title: "Selective Autopilot (Intent Triggers)",
    description:
      "Set If/Then rules: auto-reply for FAQs and pricing questions, but draft-only for complex objections or VIP leads.",
  },
  {
    icon: LifeBuoy,
    title: "The Safety Net",
    description:
      "Auto-recognizes edge cases, angry leads, or off-script moments. Pauses Auto Mode and alerts a human instantly.",
  },
]

export function DriversSeat() {
  return (
    <section className="py-24 md:py-32 bg-primary/5 border-y border-primary/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left: Trust Points */}
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              You Stay in the Driver&apos;s Seat
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              AI handles the volume. You keep full control. Every message, every rule, every override — it&apos;s all yours.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {trustPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: UI Mockup Panels */}
          <div className="flex flex-col gap-4">
            {/* Panel 1: The Chat */}
            <Card className="border-border/50">
              <CardContent className="p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  The Chat
                </p>
                <div className="rounded-lg bg-secondary/50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      AI
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        Great question! Based on what you&apos;ve shared, the Growth Plan would be the best fit. Here&apos;s my calendar link to chat through the details:
                      </p>
                      <a className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        <CalendarCheck className="h-3.5 w-3.5" />
                        Book a 15-min call
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    Ready for Human Handoff
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Panel 2: The Control */}
            <Card className="border-border/50">
              <CardContent className="p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  The Control
                </p>
                <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">Response Mode</p>
                    <p className="text-xs text-muted-foreground">Toggle between draft review and full auto</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">Draft</span>
                    <Switch defaultChecked />
                    <span className="text-xs font-medium text-primary">Auto</span>
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between rounded-md bg-secondary/30 px-3 py-2 text-xs">
                    <span className="text-muted-foreground">If intent = <strong className="text-foreground">Pricing FAQ</strong></span>
                    <Badge variant="secondary" className="text-xs">Auto-reply</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-secondary/30 px-3 py-2 text-xs">
                    <span className="text-muted-foreground">If intent = <strong className="text-foreground">Complex Objection</strong></span>
                    <Badge variant="outline" className="text-xs">Draft only</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Panel 3: The Data */}
            <Card className="border-border/50">
              <CardContent className="p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  The Data
                </p>
                <div className="flex gap-3 overflow-x-auto">
                  {/* Kanban columns */}
                  {[
                    { title: "New Lead", items: ["Sarah M.", "Jake T."], muted: true },
                    { title: "Qualified", items: ["Alex R."], muted: true },
                    { title: "Booked", items: ["Maria L."], muted: false },
                  ].map((col) => (
                    <div key={col.title} className="flex-1 min-w-[120px]">
                      <p className={`mb-2 text-xs font-semibold ${col.muted ? "text-muted-foreground" : "text-primary"}`}>
                        {col.title}
                      </p>
                      <div className="space-y-2">
                        {col.items.map((name) => (
                          <div
                            key={name}
                            className={`rounded-md border p-2 text-xs ${
                              !col.muted
                                ? "border-primary/30 bg-primary/5"
                                : "border-border/50 bg-secondary/30"
                            }`}
                          >
                            <p className="font-medium text-foreground">{name}</p>
                            {!col.muted && (
                              <div className="mt-1.5 flex flex-wrap gap-1">
                                <span className="inline-flex items-center gap-0.5 rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">
                                  <Tag className="h-2.5 w-2.5" />
                                  Budget: $5k
                                </span>
                                <span className="inline-flex items-center gap-0.5 rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">
                                  <Tag className="h-2.5 w-2.5" />
                                  Pain: Scaling
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
