"use client"

import { AlertTriangle } from "lucide-react"
import { isDemoMode } from "@/lib/supabase"
import { useEffect, useState } from "react"

export function DemoModeIndicator() {
  const [isDemo, setIsDemo] = useState(false)

  useEffect(() => {
    setIsDemo(isDemoMode())
  }, [])

  if (!isDemo) return null

  return (
    <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
      <AlertTriangle className="h-3 w-3 mr-1" />
      Demo Mode
    </div>
  )
}
