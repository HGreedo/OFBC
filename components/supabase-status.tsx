"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export function SupabaseStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
          Supabase Connection Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Environment Variables:</h3>
            <p>
              NEXT_PUBLIC_SUPABASE_URL: <span className="text-red-500">disconnected</span>
            </p>
            <p>
              NEXT_PUBLIC_SUPABASE_ANON_KEY: <span className="text-red-500">disconnected</span>
            </p>
          </div>

          <div>
            <h3 className="font-medium">Connection Status:</h3>
            <p className="text-red-600">Disconnected from Supabase</p>
            <p className="text-sm mt-1">Supabase connection has been forcibly disconnected.</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
            <div className="flex">
              <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-amber-800">Disconnected Mode Active</h3>
                <p className="text-sm text-amber-700 mt-1">
                  The application is running in disconnected mode. To connect a new Supabase project, please add new
                  environment variables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
