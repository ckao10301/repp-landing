"use client"

const CALENDLY_URL = "https://calendly.com/ckao1030/new-meeting"

export function BetaSignupButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 ${className}`}
    >
      Join the Beta — Free
    </a>
  )
}
