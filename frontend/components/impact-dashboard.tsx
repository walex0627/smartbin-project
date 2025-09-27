"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Leaf, Users, Target, Award, TrendingUp, Home } from "lucide-react"

interface ImpactDashboardProps {
  onNavigate: (page: "home" | "recycle" | "impact" | "techo" | "profile") => void
}

const weeklyData = [
  { day: "Mon", items: 12 },
  { day: "Tue", items: 8 },
  { day: "Wed", items: 15 },
  { day: "Thu", items: 10 },
  { day: "Fri", items: 18 },
  { day: "Sat", items: 22 },
  { day: "Sun", items: 14 },
]

export function ImpactDashboard({ onNavigate }: ImpactDashboardProps) {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Your Impact Dashboard</h1>
          <p className="text-lg text-muted-foreground">Track your environmental impact and contribution to TECHO</p>
        </div>

        {/* Community Statistics */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Community Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">2,847 kg</p>
                  <p className="text-sm text-muted-foreground">Total Waste Recycled</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1,523 kg</p>
                  <p className="text-sm text-muted-foreground">CO2 Saved</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">94.2%</p>
                  <p className="text-sm text-muted-foreground">Sorting Accuracy</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* User Statistics */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Your Weekly Activity</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Bar dataKey="items" fill="hsl(var(--primary))" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Your Stats</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Points Earned</span>
                  <span className="text-sm font-bold">1,247</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Items Recycled</span>
                  <span className="text-sm font-bold">156</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">Badges Unlocked</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Eco Warrior
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Leaf className="w-3 h-3" />
                    Green Champion
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    Community Helper
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* TECHO Connection */}
        <Card className="p-8 bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">How Your Recycling Supports TECHO</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every kilogram you recycle contributes to TECHO's housing projects. Your efforts help provide safe,
              dignified housing for families in vulnerable situations across the Colombian Caribbean.
            </p>

            <div className="max-w-md mx-auto mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Community Goal Progress</span>
                <span className="text-sm font-bold">68%</span>
              </div>
              <Progress value={68} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2">680kg of 1,000kg goal = 1 family supported by TECHO</p>
            </div>

            <Button variant="secondary" onClick={() => onNavigate("techo")} className="font-medium">
              Learn More About TECHO
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
