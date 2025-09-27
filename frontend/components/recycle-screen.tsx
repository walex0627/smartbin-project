"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Coins, Trash2, CheckCircle } from "lucide-react"

interface RecycleScreenProps {
  onNavigate: (screen: "home" | "recycle" | "impact" | "techo" | "profile") => void
}

export function RecycleScreen({ onNavigate }: RecycleScreenProps) {
  return (
    <div className="p-6 pb-24 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pt-8">
        <h1 className="text-3xl font-bold text-foreground">Smart Recycling</h1>
        <div className="flex items-center bg-accent/20 px-4 py-2 rounded-full">
          <Coins className="h-5 w-5 text-accent mr-2" />
          <span className="font-bold text-accent">1,247 pts</span>
        </div>
      </div>

      {/* Smart Bin Illustration */}
      <Card className="mb-8 p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="w-40 h-48 mx-auto bg-gradient-to-b from-primary/20 to-primary/40 rounded-2xl flex flex-col items-center justify-center border-4 border-primary/30">
              <div className="w-24 h-6 bg-primary/60 rounded-full mb-4"></div>
              <Trash2 className="h-12 w-12 text-primary mb-2" />
              <div className="text-xs text-primary font-medium">SMART BIN</div>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 text-foreground">ReviVida Smart Sorter</h2>
          <p className="text-muted-foreground text-balance">AI-powered waste classification system</p>
        </div>
      </Card>

      {/* Process Steps */}
      <div className="space-y-4 mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">How it works:</h3>

        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
            1
          </div>
          <div className="flex-1">
            <div className="font-medium text-foreground">Insert waste</div>
            <div className="text-sm text-muted-foreground">Place items in the smart bin</div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
            2
          </div>
          <div className="flex-1">
            <div className="font-medium text-foreground">Automatic classification</div>
            <div className="text-sm text-muted-foreground">AI sorts materials instantly</div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
            3
          </div>
          <div className="flex-1">
            <div className="font-medium text-foreground">Points earned</div>
            <div className="text-sm text-muted-foreground">Get rewards for recycling</div>
          </div>
          <CheckCircle className="h-4 w-4 text-accent" />
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="mb-6 p-4">
        <h3 className="font-semibold mb-3 text-foreground">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-sm text-foreground">Plastic bottles (3x)</span>
            </div>
            <span className="text-sm font-medium text-accent">+45 pts</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
              <span className="text-sm text-foreground">Aluminum cans (2x)</span>
            </div>
            <span className="text-sm font-medium text-accent">+30 pts</span>
          </div>
        </div>
      </Card>

      {/* Action Button */}
      <Button
        onClick={() => onNavigate("impact")}
        className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        View My Impact
      </Button>
    </div>
  )
}
