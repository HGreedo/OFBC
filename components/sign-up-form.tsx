"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageUploadGallery } from "@/components/image-upload-gallery"

const signUpSchema = z
  .object({
    userType: z.enum(["designer", "boutique"]),
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    location: z.string().min(2, "Location must be at least 2 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    website: z.string().url("Invalid URL").optional().or(z.literal("")),
    instagram: z.string().optional(),
    specialties: z.string().min(2, "Specialties must be at least 2 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type SignUpFormInputs = z.infer<typeof signUpSchema>

export function SignUpForm() {
  const [images, setImages] = useState<File[]>([])
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpSchema),
  })

  const userType = watch("userType")

  const onSubmit = (data: SignUpFormInputs) => {
    // Here you would typically send the data to your backend
    console.log(data, images)
    alert("Profile created successfully!")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create your profile to join our fashion community.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="userType">I am a:</Label>
            <Select onValueChange={(value) => register("userType").onChange({ target: { value } })}>
              <SelectTrigger>
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="boutique">Boutique</SelectItem>
              </SelectContent>
            </Select>
            {errors.userType && <p className="text-red-500 text-sm mt-1">{errors.userType.message}</p>}
          </div>

          <div>
            <Label htmlFor="name">{userType === "designer" ? "Designer Name" : "Boutique Name"}</Label>
            <Input id="name" {...register("name")} />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" {...register("location")} />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
          </div>

          <div>
            <Label htmlFor="description">{userType === "designer" ? "Designer Bio" : "Boutique Description"}</Label>
            <Textarea id="description" {...register("description")} />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          <div>
            <Label htmlFor="specialties">
              {userType === "designer" ? "Specialties / Signature Styles" : "Style and Aesthetic"}
            </Label>
            <Input id="specialties" {...register("specialties")} />
            {errors.specialties && <p className="text-red-500 text-sm mt-1">{errors.specialties.message}</p>}
          </div>

          <div>
            <Label htmlFor="website">Website (optional)</Label>
            <Input id="website" type="url" {...register("website")} />
            {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>}
          </div>

          <div>
            <Label htmlFor="instagram">Instagram Handle (optional)</Label>
            <Input id="instagram" {...register("instagram")} />
            {errors.instagram && <p className="text-red-500 text-sm mt-1">{errors.instagram.message}</p>}
          </div>

          <div>
            <Label>Upload Images (up to 9)</Label>
            <ImageUploadGallery onImagesChange={setImages} />
          </div>

          <Button type="submit" className="w-full">
            Create Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
