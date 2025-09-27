"use client"

import { Button } from "@/components/ui/button"
import { Recycle, Leaf } from "lucide-react"

interface HeaderProps {
  currentPage: "home" | "recycle" | "impact" | "techo" | "profile"
  onNavigate: (page: "home" | "recycle" | "impact" | "techo" | "profile") => void
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Recycle className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">SmartBin</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Button
            variant={currentPage === "home" ? "default" : "ghost"}
            onClick={() => onNavigate("home")}
            className="font-medium"
          >
            Home
          </Button>
          <Button
            variant={currentPage === "recycle" ? "default" : "ghost"}
            onClick={() => onNavigate("recycle")}
            className="font-medium"
          >
            Recycle
          </Button>
          <Button
            variant={currentPage === "impact" ? "default" : "ghost"}
            onClick={() => onNavigate("impact")}
            className="font-medium"
          >
            Impact
          </Button>
          <Button
            variant={currentPage === "techo" ? "default" : "ghost"}
            onClick={() => onNavigate("techo")}
            className="font-medium"
          >
            TECHO
          </Button>
          <Button
            variant={currentPage === "profile" ? "default" : "ghost"}
            onClick={() => onNavigate("profile")}
            className="font-medium"
          >
            Profile
          </Button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <Leaf className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
