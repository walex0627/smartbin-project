import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Share2, Award, Calendar, TrendingUp, Recycle, Users, Target } from "lucide-react"

interface ProfilePageProps {
  onNavigate: (page: "home" | "recycle" | "impact" | "techo" | "profile") => void
}

const monthlyData = [
  { month: "Jan", points: 120 },
  { month: "Feb", points: 180 },
  { month: "Mar", points: 240 },
  { month: "Apr", points: 320 },
  { month: "May", points: 280 },
  { month: "Jun", points: 420 },
]

const achievements = [
  { name: "Eco Warrior", description: "Recycled 100+ items", icon: Award, earned: true },
  { name: "Green Champion", description: "30 days streak", icon: Target, earned: true },
  { name: "Community Helper", description: "Referred 5 friends", icon: Users, earned: true },
  { name: "Sustainability Master", description: "1000+ points earned", icon: TrendingUp, earned: false },
  { name: "TECHO Supporter", description: "Donated to TECHO", icon: Recycle, earned: false },
]

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/eco-friendly-person.jpg" />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>

            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold mb-2">Jane Doe</h1>
              <p className="text-muted-foreground mb-4">Eco Warrior since March 2024</p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">1,247</p>
                  <p className="text-sm text-muted-foreground">Total Points</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">156</p>
                  <p className="text-sm text-muted-foreground">Items Recycled</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">23</p>
                  <p className="text-sm text-muted-foreground">Days Streak</p>
                </div>
              </div>
            </div>

            <Button className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share Profile
            </Button>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recycling History */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Points Over Time
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Line
                    type="monotone"
                    dataKey="points"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Recycled 3 plastic bottles</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <span className="text-sm font-medium text-primary">+15 pts</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Earned "Green Champion" badge</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
                <Award className="w-4 h-4 text-secondary" />
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Recycled 5 aluminum cans</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
                <span className="text-sm font-medium text-accent">+25 pts</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="p-6 mt-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Award className="w-5 h-5" />
            Achievements & Badges
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-all ${
                  achievement.earned ? "border-primary/20 bg-primary/5" : "border-muted bg-muted/30 opacity-60"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.earned ? "bg-primary/10" : "bg-muted"
                    }`}
                  >
                    <achievement.icon
                      className={`w-5 h-5 ${achievement.earned ? "text-primary" : "text-muted-foreground"}`}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{achievement.name}</h4>
                    {achievement.earned && (
                      <Badge variant="secondary" className="text-xs">
                        Earned
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Social Sharing */}
        <Card className="p-6 mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Share Your Impact</h3>
          <p className="text-muted-foreground mb-6">
            Inspire others by sharing your recycling achievements on social media
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Share2 className="w-4 h-4" />
              Share on Twitter
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Share2 className="w-4 h-4" />
              Share on Facebook
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Share2 className="w-4 h-4" />
              Share on LinkedIn
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
