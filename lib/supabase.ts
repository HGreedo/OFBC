import { createClient } from "@supabase/supabase-js"

// Check if Supabase environment variables are defined
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a function to check if Supabase is properly configured
export function isSupabaseConfigured() {
  return !!supabaseUrl && !!supabaseAnonKey
}

// Create a function to check if we're in demo mode
export function isDemoMode() {
  return !isSupabaseConfigured()
}

// Create the Supabase client
export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "")

// Log the connection status
console.log(`Supabase client initialized with URL: ${supabaseUrl ? "defined" : "undefined"}`)
