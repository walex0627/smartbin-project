import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, Share2, Trophy, Calendar, Recycle, Heart } from "lucide-react"

interface ProfileScreenProps {
  onNavigate: (screen: "home" | "recycle" | "impact" | "techo" | "profile") => void
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="p-6 pb-24 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pt-8">
        <h1 className="text-3xl font-bold text-foreground">Profile</h1>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      {/* User Info */}
      <Card className="p-6 mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/eco-friendly-person.jpg" />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl">MR</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground">Maria Rodriguez</h2>
            <p className="text-muted-foreground">Eco Warrior since March 2024</p>
            <div className="flex items-center mt-2">
              <Trophy className="h-4 w-4 text-accent mr-1" />
              <span className="text-sm font-medium text-accent">Level 3 Recycler</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">1,247</div>
            <div className="text-xs text-muted-foreground">Total Points</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">23.4kg</div>
            <div className="text-xs text-muted-foreground">Recycled</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">$11.70</div>
            <div className="text-xs text-muted-foreground">TECHO Impact</div>
          </div>
        </div>
      </Card>

      {/* Badges */}
      <Card className="p-6 mb-6">
        <h3 className="font-semibold mb-4 text-foreground flex items-center">
          <Trophy className="h-5 w-5 text-accent mr-2" />
          Achievements
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Recycle className="h-4 w-4 text-accent-foreground" />
            </div>
            <div>
              <div className="font-medium text-foreground text-sm">Green Starter</div>
              <div className="text-xs text-muted-foreground">First 10 items</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Trophy className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <div className="font-medium text-foreground text-sm">Eco Warrior</div>
              <div className="text-xs text-muted-foreground">100+ items</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-secondary/10 rounded-lg">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <Heart className="h-4 w-4 text-secondary-foreground" />
            </div>
            <div>
              <div className="font-medium text-foreground text-sm">Community Helper</div>
              <div className="text-xs text-muted-foreground">TECHO supporter</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg opacity-50">
            <div className="w-8 h-8 bg-muted-foreground/20 rounded-full flex items-center justify-center">
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <div className="font-medium text-muted-foreground text-sm">Eco Hero</div>
              <div className="text-xs text-muted-foreground">30 days streak</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6 mb-6">
        <h3 className="font-semibold mb-4 text-foreground">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <div>
                <div className="text-sm font-medium text-foreground">Recycled 3 plastic bottles</div>
                <div className="text-xs text-muted-foreground">2 hours ago</div>
              </div>
            </div>
            <span className="text-sm font-medium text-accent">+45 pts</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
              <div>
                <div className="text-sm font-medium text-foreground">Earned Eco Warrior badge</div>
                <div className="text-xs text-muted-foreground">1 day ago</div>
              </div>
            </div>
            <Trophy className="h-4 w-4 text-accent" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
              <div>
                <div className="text-sm font-medium text-foreground">Shared impact on social media</div>
                <div className="text-xs text-muted-foreground">3 days ago</div>
              </div>
            </div>
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </Card>

      {/* Social Sharing */}
      <Button
        variant="outline"
        className="w-full h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
      >
        <Share2 className="mr-2 h-4 w-4" />
        Share Your Progress
      </Button>
    </div>
  )
}
