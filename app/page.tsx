import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Stats } from "@/components/landing/stats"
import { Features } from "@/components/landing/features"
import { LeadDashboard } from "@/components/landing/lead-dashboard"
import { DriversSeat } from "@/components/landing/drivers-seat"
import { BottomCta } from "@/components/landing/bottom-cta"
export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <LeadDashboard />
      <DriversSeat />
      <BottomCta />
    </main>
  )
}
