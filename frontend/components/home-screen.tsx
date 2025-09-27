"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Recycle, Heart, Leaf } from "lucide-react"

interface HomeScreenProps {
  onNavigate: (screen: "home" | "recycle" | "impact" | "techo" | "profile") => void
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="p-6 pb-24 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12 pt-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-primary rounded-full p-4 mr-3">
            <Leaf className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">ReviVida</h1>
        </div>
        <p className="text-xl text-muted-foreground font-medium text-balance">Recycle easily. Create social impact.</p>
      </div>

      {/* Hero Visual */}
      <Card className="mb-8 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
              <Recycle className="h-16 w-16 text-primary animate-spin-slow" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Heart className="h-4 w-4 text-accent-foreground" />
            </div>
          </div>
          <p className="text-muted-foreground text-balance">Transform waste into hope for Colombian families</p>
        </div>
      </Card>

      {/* Main Actions */}
      <div className="space-y-4">
        <Button
          onClick={() => onNavigate("recycle")}
          className="w-full h-16 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
        >
          <Recycle className="mr-3 h-6 w-6" />
          Recycle Now
        </Button>

        <Button
          onClick={() => onNavigate("techo")}
          variant="outline"
          className="w-full h-16 text-lg font-semibold border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
          size="lg"
        >
          <Heart className="mr-3 h-6 w-6" />
          Support TECHO
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary">1,247</div>
          <div className="text-sm text-muted-foreground">Your Points</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-secondary">23kg</div>
          <div className="text-sm text-muted-foreground">Recycled</div>
        </Card>
      </div>
    </div>
  )
}
