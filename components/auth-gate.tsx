"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

// Demo credentials - in a real app, these would be verified against a backend
const DEMO_USERNAME = "fashionbuyersclub"
const DEMO_PASSWORD = "indiemusic103195"

export function AuthGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated")
    setIsAuthenticated(authStatus === "true")
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate API call with timeout
    setTimeout(() => {
      if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
        localStorage.setItem("isAuthenticated", "true")
        setIsAuthenticated(true)
      } else {
        setError("Invalid username or password. Please try again or contact support.")
      }
      setIsLoading(false)
    }, 1000)
  }

  // Show loading state while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <Loader2 className="h-8 w-8 animate-spin text-black" />
      </div>
    )
  }

  // If not authenticated, show login dialog
  if (!isAuthenticated) {
    return (
      <Dialog open={true} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Welcome to FashionBuyersClub</DialogTitle>
            <DialogDescription>Please log in to access the platform.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLogin} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pt-2">
              <p className="text-xs text-gray-500">Demo credentials available upon request</p>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto py-2 transition-transform hover:scale-105"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Log in"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    )
  }

  // If authenticated, render children
  return <>{children}</>
}
