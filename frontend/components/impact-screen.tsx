"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Users, Leaf, QrCode, Share2 } from "lucide-react"

interface ImpactScreenProps {
  onNavigate: (screen: "home" | "recycle" | "impact" | "techo" | "profile") => void
}

export function ImpactScreen({ onNavigate }: ImpactScreenProps) {
  return (
    <div className="p-6 pb-24 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8 pt-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Your Impact</h1>
        <p className="text-muted-foreground">Making a difference, one item at a time</p>
      </div>

      {/* Personal Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5">
          <Leaf className="h-8 w-8 text-primary mx-auto mb-2" />
          <div className="text-3xl font-bold text-primary">23.4kg</div>
          <div className="text-sm text-muted-foreground">You recycled</div>
        </Card>
        <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-secondary/5">
          <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
          <div className="text-3xl font-bold text-secondary">2.1T</div>
          <div className="text-sm text-muted-foreground">Community total</div>
        </Card>
      </div>

      {/* Badges */}
      <Card className="p-6 mb-8">
        <h3 className="font-semibold mb-4 text-foreground flex items-center">
          <Trophy className="h-5 w-5 text-accent mr-2" />
          Your Achievements
        </h3>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-accent/20 text-accent border-accent/30">Green Starter</Badge>
          <Badge className="bg-primary/20 text-primary border-primary/30">Eco Warrior</Badge>
          <Badge className="bg-secondary/20 text-secondary border-secondary/30">Community Helper</Badge>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress to Eco Hero</span>
            <span className="text-accent font-medium">78%</span>
          </div>
          <Progress value={78} className="h-2" />
        </div>
      </Card>

      {/* TECHO Connection */}
      <Card className="p-6 mb-6 bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/20">
        <h3 className="font-semibold mb-3 text-foreground">How your recycling supports TECHO</h3>
        <div className="space-y-3 mb-4">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
            <span className="text-sm text-foreground">Every 10kg = $5 donated to housing projects</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
            <span className="text-sm text-foreground">Your contribution: $11.70 so far</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            <span className="text-sm text-foreground">Helping build homes in Colombian Caribbean</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button
            onClick={() => onNavigate("techo")}
            className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            <QrCode className="h-4 w-4 mr-2" />
            Visit TECHO
          </Button>
          <Button variant="outline" size="icon" className="border-secondary text-secondary bg-transparent">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      {/* Environmental Impact */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4 text-foreground">Environmental Impact</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">156L</div>
            <div className="text-xs text-muted-foreground">Water saved</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">34kg</div>
            <div className="text-xs text-muted-foreground">CO₂ reduced</div>
          </div>
        </div>
      </Card>
    </div>
  )
}
