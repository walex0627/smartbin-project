"use client"

import { Button } from "@/components/ui/button"
import { Home, Recycle, BarChart3, Heart, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface BottomNavigationProps {
  currentScreen: "home" | "recycle" | "impact" | "techo" | "profile"
  onNavigate: (screen: "home" | "recycle" | "impact" | "techo" | "profile") => void
}

export function BottomNavigation({ currentScreen, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: "home" as const, icon: Home, label: "Home" },
    { id: "recycle" as const, icon: Recycle, label: "Recycle" },
    { id: "impact" as const, icon: BarChart3, label: "Impact" },
    { id: "techo" as const, icon: Heart, label: "TECHO" },
    { id: "profile" as const, icon: User, label: "Profile" },
  ]

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentScreen === item.id

          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex flex-col items-center space-y-1 h-auto py-2 px-3",
                isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
