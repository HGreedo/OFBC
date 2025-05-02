import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageModal } from "@/components/message-modal"
import { Users } from "lucide-react"

interface ProfileHeaderProps {
  name: string
  image: string
  location: string
  tags: string[]
  type: "boutique" | "designer"
  followerCount: number
}

export function ProfileHeader({ name, image, location, tags, type, followerCount }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 p-6 bg-secondary rounded-lg">
      <Avatar className="w-32 h-32">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-grow text-center md:text-left">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-lg text-gray-600 mt-2">{location}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-start mt-4 text-gray-600">
          <Users className="w-5 h-5 mr-2" />
          <span>{followerCount.toLocaleString()} followers</span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <MessageModal recipientName={name} recipientType={type} />
        <Button variant="outline">Follow</Button>
      </div>
    </div>
  )
}
