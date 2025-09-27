import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Heart, Home, Share2, Users } from "lucide-react"

interface TechoScreenProps {
  onNavigate: (screen: "home" | "recycle" | "impact" | "techo" | "profile") => void
}

export function TechoScreen({ onNavigate }: TechoScreenProps) {
  return (
    <div className="p-6 pb-24 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8 pt-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-secondary rounded-full p-3 mr-3">
            <Home className="h-6 w-6 text-secondary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">TECHO</h1>
        </div>
        <p className="text-muted-foreground text-balance">Building homes, transforming communities</p>
      </div>

      {/* Hero Image */}
      <Card className="mb-8 overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
          <div className="text-center">
            <Users className="h-16 w-16 text-secondary mx-auto mb-4" />
            <div className="text-lg font-semibold text-foreground">Families building their future</div>
            <div className="text-sm text-muted-foreground">Colombian Caribbean Region</div>
          </div>
        </div>
      </Card>

      {/* Mission Description */}
      <Card className="p-6 mb-6">
        <h3 className="font-semibold mb-3 text-foreground">Our Mission</h3>
        <p className="text-muted-foreground text-balance leading-relaxed mb-4">
          Your recycling supports housing projects in the Colombian Caribbean. TECHO works with families to build
          emergency housing and develop sustainable communities with access to basic services.
        </p>
        <div className="bg-accent/10 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Heart className="h-4 w-4 text-accent mr-2" />
            <span className="text-sm font-medium text-accent">Your Impact</span>
          </div>
          <p className="text-sm text-foreground">
            Through ReviVida, you've contributed <strong>$11.70</strong> to housing projects, helping provide materials
            for emergency shelters.
          </p>
        </div>
      </Card>

      {/* Project Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-secondary">847</div>
          <div className="text-xs text-muted-foreground">Homes built</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary">2.3K</div>
          <div className="text-xs text-muted-foreground">Families helped</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-accent">15</div>
          <div className="text-xs text-muted-foreground">Communities</div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <Button className="w-full h-14 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground">
          <ExternalLink className="mr-3 h-5 w-5" />
          Learn More & Donate
        </Button>

        <Button
          variant="outline"
          className="w-full h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share on Social Media
        </Button>
      </div>

      {/* Additional Info */}
      <Card className="mt-6 p-4 bg-muted/50">
        <div className="text-center">
          <p className="text-sm text-muted-foreground text-balance">
            Every recycling action through ReviVida directly supports TECHO's mission to eliminate poverty housing in
            Latin America.
          </p>
        </div>
      </Card>
    </div>
  )
}
