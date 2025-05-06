import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Check if environment variables are defined
  const url_defined = !!supabaseUrl
  const key_defined = !!supabaseAnonKey

  if (!url_defined || !key_defined) {
    return NextResponse.json(
      {
        status: "disconnected",
        message: "Supabase environment variables are not defined.",
        url_defined,
        key_defined,
      },
      { status: 200 },
    )
  }

  try {
    // Create a Supabase client
    const supabase = createClient(supabaseUrl!, supabaseAnonKey!)

    // Try a simple query to verify connection
    const { data, error } = await supabase.from("profiles").select("count", { count: "exact" }).limit(1)

    if (error) {
      return NextResponse.json(
        {
          status: "error",
          message: error.message,
          url_defined,
          key_defined,
        },
        { status: 200 },
      )
    }

    return NextResponse.json(
      {
        status: "connected",
        message: "Successfully connected to Supabase.",
        url_defined,
        key_defined,
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error",
        url_defined,
        key_defined,
      },
      { status: 200 },
    )
  }
}
