import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "Perfect for testing AI-powered DMs with your first leads.",
    features: [
      "Up to 100 DM conversations/mo",
      "Lead qualification & scoring",
      "1 Calendly integration",
      "Basic dashboard",
      "Email support",
    ],
    cta: "Set Up in 5 Minutes",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/mo",
    description: "For creators ready to scale their sales pipeline.",
    features: [
      "Unlimited DM conversations",
      "Advanced lead qualification (BANT)",
      "Objection handling engine",
      "Full pipeline dashboard",
      "Human-in-the-loop controls",
      "Custom sales personality",
      "Priority support",
    ],
    cta: "Set Up in 5 Minutes",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$349",
    period: "/mo",
    description: "For high-volume creators and teams with multiple offers.",
    features: [
      "Everything in Growth",
      "Multiple offer support",
      "Advanced analytics & reports",
      "Custom AI training",
      "API access",
      "Dedicated account manager",
      "White-glove onboarding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary">Pricing</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Simple pricing. Real ROI.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            One booked call pays for months of Repp. Start free, upgrade when you see results.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border/50 bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  className={`w-full rounded-full ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
