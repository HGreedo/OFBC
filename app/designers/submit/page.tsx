"use client"

import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { ImageUploadGallery } from "@/components/image-upload-gallery"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface DesignerFormInputs {
  name: string
  location: string
  bio: string
  contactInformation: string
  designPhilosophy: string
  specialties: string
  website: string
  instagram: string
}

export default function SubmitDesigner() {
  const [images, setImages] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DesignerFormInputs>()

  const onSubmit: SubmitHandler<DesignerFormInputs> = (data) => {
    setIsSubmitting(true)
    // Simulate an API call
    setTimeout(() => {
      console.log({ ...data, images })
      alert("Designer information submitted successfully!")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Submit Your Designer Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name">Designer Name / Brand Name</Label>
          <Input id="name" {...register("name", { required: "Name is required" })} />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <Label htmlFor="location">Location / Studio Location</Label>
          <Input id="location" {...register("location", { required: "Location is required" })} />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
        </div>

        <div>
          <Label htmlFor="bio">Designer Bio</Label>
          <Textarea id="bio" {...register("bio", { required: "Bio is required" })} />
          {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
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
          <Label htmlFor="designPhilosophy">Design Philosophy</Label>
          <Textarea
            id="designPhilosophy"
            {...register("designPhilosophy", { required: "Design philosophy is required" })}
          />
          {errors.designPhilosophy && <p className="text-red-500 text-sm mt-1">{errors.designPhilosophy.message}</p>}
        </div>

        <div>
          <Label htmlFor="specialties">Specialties / Signature Styles</Label>
          <Textarea id="specialties" {...register("specialties", { required: "Specialties are required" })} />
          {errors.specialties && <p className="text-red-500 text-sm mt-1">{errors.specialties.message}</p>}
        </div>

        <div>
          <Label htmlFor="website">Website (optional)</Label>
          <Input id="website" type="url" {...register("website")} placeholder="https://www.yourdesignerbrand.com" />
        </div>

        <div>
          <Label htmlFor="instagram">Instagram Handle (optional)</Label>
          <Input id="instagram" {...register("instagram")} placeholder="@yourdesignerbrand" />
        </div>

        <div>
          <Label>Portfolio Gallery (Upload up to 9 images)</Label>
          <ImageUploadGallery onImagesChange={setImages} />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Designer Profile"}
        </Button>
      </form>
    </div>
  )
}
