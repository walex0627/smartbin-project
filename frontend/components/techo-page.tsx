import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, QrCode, Home, Users, Heart, Globe } from "lucide-react"

interface TechoPageProps {
  onNavigate: (page: "home" | "recycle" | "impact" | "techo" | "profile") => void
}

export function TechoPage({ onNavigate }: TechoPageProps) {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* TECHO Banner */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Home className="w-12 h-12 text-secondary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">TECHO</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building homes, communities, and hope across Latin America
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <Card className="mb-12 overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-secondary/20 to-primary/20 flex items-center justify-center">
            <div className="text-center">
              <Users className="w-16 h-16 text-secondary mx-auto mb-4" />
              <p className="text-lg font-medium text-secondary">Families building their future together</p>
            </div>
          </div>
        </Card>

        {/* Mission Statement */}
        <Card className="p-8 mb-12 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Recycling Supports Housing Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your recycling efforts through SmartBin directly support TECHO's housing projects in the Colombian
              Caribbean. Every item you recycle helps provide safe, dignified housing for families in vulnerable
              situations, creating stronger communities and brighter futures.
            </p>
          </div>
        </Card>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">2,847</h3>
            <p className="text-sm text-muted-foreground">Homes Built</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">12,456</h3>
            <p className="text-sm text-muted-foreground">Families Helped</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-2">19</h3>
            <p className="text-sm text-muted-foreground">Countries</p>
          </Card>
        </div>

        {/* Donation Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Make a Direct Impact</h3>
            <p className="text-muted-foreground mb-8">
              While your recycling already supports TECHO, you can make an even bigger difference with a direct
              donation. Every contribution helps build more homes and stronger communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="flex items-center gap-2">
                <QrCode className="w-5 h-5" />
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2 bg-transparent">
                <ExternalLink className="w-5 h-5" />
                Visit TECHO Website
              </Button>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h4 className="font-semibold mb-2">QR Code for Quick Donation</h4>
              <div className="w-32 h-32 bg-muted rounded-lg mx-auto flex items-center justify-center">
                <QrCode className="w-16 h-16 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Scan to donate directly to TECHO</p>
            </div>
          </Card>
        </div>

        {/* Learn More */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to learn more about TECHO's mission and impact?</p>
          <Button variant="outline" className="flex items-center gap-2 mx-auto bg-transparent">
            <ExternalLink className="w-4 h-4" />
            Visit techo.org
          </Button>
        </div>
      </div>
    </div>
  )
}
