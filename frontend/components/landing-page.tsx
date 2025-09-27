"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Recycle, Heart, ArrowRight, Users, Target } from "lucide-react"

interface LandingPageProps {
  onNavigate: (page: "home" | "recycle" | "impact" | "techo" | "profile") => void
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <Recycle className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Recycle Smarter. <span className="text-primary">Create Impact.</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Connect your recycling efforts with social impact. Every item you recycle through SmartBin helps support
            TECHO's housing projects in the Colombian Caribbean.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => onNavigate("recycle")}>
              <Recycle className="w-5 h-5 mr-2" />
              Start Recycling
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => onNavigate("techo")}>
              <Heart className="w-5 h-5 mr-2" />
              Support TECHO
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Recycle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Sorting</h3>
            <p className="text-muted-foreground">
              Our AI-powered bins automatically sort your waste and reward you with points for every item recycled
              correctly.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Track Impact</h3>
            <p className="text-muted-foreground">
              See your environmental impact in real-time with detailed statistics on CO2 saved and waste diverted from
              landfills.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Social Impact</h3>
            <p className="text-muted-foreground">
              Your recycling efforts directly support TECHO's mission to build homes for families in need across Latin
              America.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already making an impact through smart recycling.
          </p>
          <Button size="lg" onClick={() => onNavigate("recycle")} className="text-lg px-8 py-6">
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
