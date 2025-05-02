"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageUploadGalleryProps {
  onImagesChange: (images: File[]) => void
}

export function ImageUploadGallery({ onImagesChange }: ImageUploadGalleryProps) {
  const [images, setImages] = useState<string[]>(Array(9).fill(""))

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newImages = [...images]
        newImages[index] = e.target?.result as string
        setImages(newImages)

        const imageFiles = newImages
          .map((img, i) => {
            if (img) {
              return event.target.files?.[0] as File
            }
            return null
          })
          .filter((file): file is File => file !== null)

        onImagesChange(imageFiles)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages[index] = ""
    setImages(newImages)

    const imageFiles = newImages
      .map((img, i) => {
        if (img) {
          return new File([], `image-${i}`)
        }
        return null
      })
      .filter((file): file is File => file !== null)

    onImagesChange(imageFiles)
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square">
          {image ? (
            <>
              <Image
                src={image || "/placeholder.svg"}
                alt={`Uploaded image ${index + 1}`}
                fill
                className="object-cover rounded-md"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => removeImage(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <label className="flex items-center justify-center w-full h-full border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-gray-400 transition-colors">
              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, index)} />
              <Upload className="h-6 w-6 text-gray-400" />
            </label>
          )}
        </div>
      ))}
    </div>
  )
}
