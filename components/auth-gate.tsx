"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, AlertTriangle } from "lucide-react"
import { supabase, isDemoMode } from "@/lib/supabase"

export function AuthGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showDemoNotice, setShowDemoNotice] = useState(false)

  // Check if user is already authenticated
  useEffect(() => {
    const checkSession = async () => {
      try {
        // Check if we're in demo mode
        if (isDemoMode()) {
          console.log("Running in demo mode - skipping authentication")
          setShowDemoNotice(true)
          // Auto-authenticate after a short delay in demo mode
          setTimeout(() => {
            setIsAuthenticated(true)
          }, 1500)
          return
        }

        const {
          data: { session },
          error,
        } = await supabase.auth.getSession()

        if (error) {
          console.error("Error checking session:", error)
          setError("Failed to check authentication status. Please try again later.")
          setIsAuthenticated(false)
          return
        }

        setIsAuthenticated(!!session)
      } catch (err) {
        console.error("Unexpected error in auth check:", err)
        setError("An unexpected error occurred. Please try again later.")
        setIsAuthenticated(false)
      }
    }

    checkSession()

    // Set up auth state change listener
    let subscription: { unsubscribe: () => void } | null = null

    try {
      const { data } = supabase.auth.onAuthStateChange((_event, session) => {
        setIsAuthenticated(!!session)
      })
      subscription = data.subscription
    } catch (err) {
      console.error("Failed to set up auth listener:", err)
    }

    return () => {
      if (subscription) {
        subscription.unsubscribe()
      }
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // For Supabase, we need to use email/password authentication
      // If your Supabase is set up for username/password, you'll need to adjust this
      const { error } = await supabase.auth.signInWithPassword({
        email: username, // Using username as email for simplicity
        password,
      })

      if (error) {
        throw error
      }
    } catch (error: any) {
      setError(error.message || "Invalid username or password. Please try again or contact support.")
    } finally {
      setIsLoading(false)
    }
  }

  // Show loading state while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-black mx-auto mb-4" />
          <p className="text-lg font-medium">Loading FashionBuyersClub</p>
          {showDemoNotice && (
            <p className="text-sm text-amber-600 mt-2">
              <AlertTriangle className="h-4 w-4 inline mr-1" />
              Running in demo mode - authentication disabled
            </p>
          )}
        </div>
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

          {isDemoMode() ? (
            <div className="space-y-4 pt-4">
              <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                <div className="flex">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-amber-800">Demo Mode Active</h3>
                    <p className="text-sm text-amber-700 mt-1">
                      The application is running in demo mode because Supabase environment variables are not configured.
                    </p>
                  </div>
                </div>
              </div>
              <Button onClick={() => setIsAuthenticated(true)} className="w-full">
                Continue in Demo Mode
              </Button>
              <p className="text-xs text-center text-gray-500">
                Note: In demo mode, all database operations are simulated.
              </p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
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
                <p className="text-xs text-gray-500">Use your Supabase credentials to log in</p>
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
              <div className="pt-2 text-center">
                <Button type="button" variant="link" onClick={() => setIsAuthenticated(true)} className="text-sm">
                  Continue Without Authentication (Demo Mode)
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    )
  }

  // If authenticated, render children
  return (
    <>
      {isDemoMode() && (
        <div className="bg-amber-50 border-b border-amber-200 py-2 px-4 text-center text-sm text-amber-800">
          <AlertTriangle className="h-4 w-4 inline mr-1" />
          Demo Mode: Database operations are simulated. Some features may be limited.
        </div>
      )}
      {children}
    </>
  )
}
