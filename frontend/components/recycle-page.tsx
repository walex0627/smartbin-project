"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Recycle, ArrowRight, Coins, CheckCircle, Trash2 } from "lucide-react"

interface RecyclePageProps {
  onNavigate: (page: "home" | "recycle" | "impact" | "techo" | "profile") => void
}

export function RecyclePage({ onNavigate }: RecyclePageProps) {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Points Balance */}
        <div className="flex justify-end mb-8">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">1,247 Points</span>
            </div>
          </Card>
        </div>

        {/* SmartBin Visualization */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">SmartBin Station</h1>
          <div className="max-w-md mx-auto">
            <Card className="p-8 bg-gradient-to-b from-muted/30 to-muted/60">
              <div className="w-32 h-40 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center border-2 border-primary/30">
                <Recycle className="w-16 h-16 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Insert waste items here</p>
            </Card>
          </div>
        </div>

        {/* Step-by-step Flow */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Insert Waste</h3>
              <p className="text-sm text-muted-foreground">Place your recyclable items into the SmartBin opening</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">2. Automatic Sorting</h3>
              <p className="text-sm text-muted-foreground">
                AI technology identifies and sorts materials automatically
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">3. Earn Points</h3>
              <p className="text-sm text-muted-foreground">
                Receive points based on the type and quantity of materials
              </p>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="max-w-2xl mx-auto mb-8">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Recycling Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Plastic bottles (3 items)</span>
                </div>
                <span className="text-sm font-medium text-primary">+15 points</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Aluminum cans (2 items)</span>
                </div>
                <span className="text-sm font-medium text-primary">+20 points</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Paper (5 sheets)</span>
                </div>
                <span className="text-sm font-medium text-primary">+10 points</span>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" onClick={() => onNavigate("impact")} className="text-lg px-8 py-6">
            See My Impact
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
