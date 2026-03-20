"use client"

import { useEffect, useState } from "react"

const messages = [
  {
    sender: "lead",
    name: "fitness_dave",
    text: "Hey, interested in the 12-week program but $3k is a bit steep for me right now.",
    delay: 0,
  },
  {
    sender: "ai",
    name: "Repp AI",
    text: "Hear you, Dave. I get that a lot. But guys who commit to the full 12 weeks? They don't regret it. You got a number that works for you, or you wanna look at a payment plan?",
    delay: 1400,
  },
  {
    sender: "lead",
    name: "fitness_dave",
    text: "A payment plan could work actually. What are the options?",
    delay: 2800,
  },
  {
    sender: "ai",
    name: "Repp AI",
    text: "We can split it over 3 or 6 months. No excuses, just results. I'll walk you through everything on a quick call and find what fits. Want me to grab you a spot?",
    delay: 4200,
  },
  {
    sender: "lead",
    name: "fitness_dave",
    text: "Yes, that would be great!",
    delay: 5400,
  },
  {
    sender: "ai",
    name: "Repp AI",
    text: "Let's go! Here's my calendar. Lock in your time and show up ready: calendly.com/coachmike",
    delay: 6600,
  },
]

export function DmPreview() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const timers = messages.map((msg, i) =>
      setTimeout(() => setVisibleCount(i + 1), msg.delay + 500)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative">
      {/* Chat frame */}
      <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">AI</div>
          <div>
            <p className="text-sm font-semibold text-foreground">Conversation with @fitness_dave</p>
            <p className="text-xs text-muted-foreground">AI auto-pilot active</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-3 p-4" style={{ minHeight: "360px" }}>
          {messages.slice(0, visibleCount).map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${
                msg.sender === "ai" ? "flex-row-reverse" : ""
              } animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div className={`h-6 w-6 rounded-full flex-shrink-0 mt-1 flex items-center justify-center text-[10px] font-bold ${
                msg.sender === "ai"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}>
                {msg.sender === "ai" ? "AI" : ""}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.sender === "ai"
                    ? "bg-primary text-primary-foreground rounded-tr-none"
                    : "bg-secondary text-foreground rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {visibleCount < messages.length && (
            <div className="flex items-center gap-1 px-1 self-end">
              <div className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse" />
              <div className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "0.15s" }} />
              <div className="h-1.5 w-1.5 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: "0.3s" }} />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border bg-secondary/30 px-4 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="h-3.5 w-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {'AI Reasoning: Handling price objection'}
          </div>
          <button className="rounded border border-border bg-card px-2.5 py-1 text-muted-foreground hover:bg-secondary">Override</button>
        </div>
      </div>

      {/* Floating badge */}
      {visibleCount >= messages.length && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm animate-in fade-in zoom-in duration-500">
          <span className="text-xs font-medium text-primary">Call booked in 2 minutes</span>
        </div>
      )}
    </div>
  )
}
