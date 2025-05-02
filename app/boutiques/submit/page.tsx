"use client"

import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { ImageUploadGallery } from "@/components/image-upload-gallery"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BoutiqueFormInputs>()

  const onSubmit: SubmitHandler<BoutiqueFormInputs> = (data) => {
    setIsSubmitting(true)
    // Simulate an API call
    setTimeout(() => {
      console.log({ ...data, images })
      alert("Boutique information submitted successfully!")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="max-w-2xl mx-auto">
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
