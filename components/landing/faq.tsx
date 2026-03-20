import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Will the AI sound like me?",
    answer:
      "Yes. During onboarding you describe your offer and pick a sales personality (Professional, Warm, or High-Energy). The AI adapts its tone, vocabulary, and approach to match your brand voice. You also preview messages before going live.",
  },
  {
    question: "What happens if the AI says something wrong?",
    answer:
      "You have full human-in-the-loop control. You can approve messages before they're sent, flag off-brand replies, and override the AI at any time. Repp also has built-in content rails to prevent inappropriate responses.",
  },
  {
    question: "Does it only work with Instagram?",
    answer:
      "Currently Repp is optimized for Instagram DMs, which is where most creators get inbound leads. We're expanding to other platforms soon.",
  },
  {
    question: "How does lead qualification work?",
    answer:
      "Repp asks natural qualifying questions about budget, goals, and timeline to score leads as Hot, Warm, or Cold — all in conversation. The data is stored in your dashboard automatically.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. No contracts, no cancellation fees. You can cancel your subscription at any time from your dashboard.",
  },
  {
    question: "What if I sell multiple offers?",
    answer:
      "The Pro plan supports multiple offers. The AI can identify which offer a lead is interested in and route the conversation accordingly.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border/50 bg-card">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold text-primary">FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Common questions
          </h2>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border/50 bg-background px-6 data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
