"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"

export function SupabaseDebug() {
  const [apiStatus, setApiStatus] = useState<"loading" | "success" | "error" | "disconnected">("disconnected")
  const [apiMessage, setApiMessage] = useState<string>("Supabase is disconnected. Please add a new Supabase project.")
  const [isRefreshing, setIsRefreshing] = useState(false)

  const checkSupabaseAPI = async () => {
    setApiStatus("loading")
    setIsRefreshing(true)

    try {
      const response = await fetch("/api/supabase-check")
      const data = await response.json()

      if (response.ok) {
        if (data.status === "disconnected") {
          setApiStatus("disconnected")
          setApiMessage(data.message || "Supabase is disconnected. Please add a new Supabase project.")
        } else {
          setApiStatus("success")
          setApiMessage("API connection successful")
        }
      } else {
        setApiStatus("error")
        setApiMessage(data.error || "API connection failed")
      }
    } catch (error) {
      setApiStatus("error")
      setApiMessage("Failed to fetch API status")
    } finally {
      setIsRefreshing(false)
    }
  }

  useEffect(() => {
    checkSupabaseAPI()
  }, [])

  return (
    <Card className="mb-8 border-amber-200 bg-amber-50">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center text-amber-800">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Supabase Disconnected
          </span>
          <Button variant="outline" size="sm" onClick={checkSupabaseAPI} disabled={isRefreshing} className="h-8">
            {isRefreshing ? <RefreshCw className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            <span className="ml-2">Refresh</span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-amber-700 mb-4">
          The Supabase connection has been disconnected. You can now add a new Supabase project.
        </p>

        <div className="bg-white rounded-md p-4 border border-amber-200">
          <h3 className="font-medium mb-2">How to add a new Supabase project:</h3>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>
              Create a Supabase project at{" "}
              <a
                href="https://supabase.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                supabase.com
              </a>
            </li>
            <li>Get your project URL and anon key from the API settings</li>
            <li>
              Create a <code className="bg-gray-100 px-1 py-0.5 rounded">.env.local</code> file in your project root
            </li>
            <li>
              Add the following environment variables:
              <pre className="bg-gray-100 p-2 rounded mt-1 text-xs overflow-x-auto">
                NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
                <br />
                NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
              </pre>
            </li>
            <li>Restart your development server</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}
