"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useForm, type SubmitHandler } from "react-hook-form"
import { ImageUploadGallery } from "@/components/image-upload-gallery"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface BoutiqueFormInputs {
  name: string
  location: string
  description: string
  contactInformation: string
  styleAndAesthetic: string
  website: string
  instagram: string
}

export default function SubmitBoutique() {
  const [images, setImages] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BoutiqueFormInputs>()

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem("isAuthenticated")
    setIsAuthenticated(authStatus === "true")
  }, [])

  const onSubmit: SubmitHandler<BoutiqueFormInputs> = (data) => {
    setIsSubmitting(true)
    // Simulate an API call
    setTimeout(() => {
      console.log({ ...data, images })
      alert("Boutique information submitted successfully!")
      setIsSubmitting(false)
      router.push("/boutiques")
    }, 1000)
  }

  // Show loading state while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  // If not authenticated, show sign-up prompt
  if (!isAuthenticated) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Account Required</CardTitle>
            <CardDescription>You need to create an account or sign in before submitting your boutique.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center text-gray-600">
              <p>Creating an account allows you to:</p>
              <ul className="list-disc list-inside mt-2 text-left">
                <li>Manage your boutique profile</li>
                <li>Connect with designers</li>
                <li>Receive inquiries and messages</li>
                <li>Access exclusive platform features</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <Button asChild className="w-full">
                <Link href="/signup">Create an Account</Link>
              </Button>
              <div className="text-center">
                <span className="text-gray-500">Already have an account?</span>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  localStorage.setItem("isAuthenticated", "true")
                  setIsAuthenticated(true)
                }}
              >
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // If authenticated, show the submission form
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Submit Your Boutique</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name">Boutique Name</Label>
          <Input id="name" {...register("name", { required: "Boutique name is required" })} />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register("location", { required: "Location is required" })} />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
        </div>

        <div>
          <Label htmlFor="description">Boutique Description</Label>
          <Textarea id="description" {...register("description", { required: "Description is required" })} />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <div>
          <Label htmlFor="contactInformation">Contact Information</Label>
          <Input
            id="contactInformation"
            {...register("contactInformation", { required: "Contact information is required" })}
          />
          {errors.contactInformation && (
            <p className="text-red-500 text-sm mt-1">{errors.contactInformation.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="styleAndAesthetic">Style and Aesthetic</Label>
          <Textarea
            id="styleAndAesthetic"
            {...register("styleAndAesthetic", { required: "Style and aesthetic is required" })}
          />
          {errors.styleAndAesthetic && <p className="text-red-500 text-sm mt-1">{errors.styleAndAesthetic.message}</p>}
        </div>

        <div>
          <Label htmlFor="website">Website (optional)</Label>
          <Input id="website" type="url" {...register("website")} placeholder="https://www.yourboutique.com" />
        </div>

        <div>
          <Label htmlFor="instagram">Instagram Handle (optional)</Label>
          <Input id="instagram" {...register("instagram")} placeholder="@yourboutique" />
        </div>

        <div>
          <Label>Image Gallery (Upload up to 9 images)</Label>
          <ImageUploadGallery onImagesChange={setImages} />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Boutique"}
        </Button>
      </form>
    </div>
  )
}
