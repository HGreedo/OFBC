"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Search } from "lucide-react"
import { ChatInterface } from "./chat-interface"

interface Contact {
  id: string
  name: string
  type: "boutique" | "designer"
  lastMessage: string
  timestamp: Date
  unreadCount: number
  isFavorite: boolean
}

export function MessageCenter() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Chic Boutique",
      type: "boutique",
      lastMessage: "Thank you for your interest!",
      timestamp: new Date(),
      unreadCount: 2,
      isFavorite: false,
    },
    {
      id: "2",
      name: "Emma Thompson",
      type: "designer",
      lastMessage: "The new collection will be ready next week.",
      timestamp: new Date(),
      unreadCount: 0,
      isFavorite: true,
    },
    // Add more contacts as needed
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const toggleFavorite = (id: string) => {
    setContacts(
      contacts.map((contact) => (contact.id === id ? { ...contact, isFavorite: !contact.isFavorite } : contact)),
    )
  }

  return (
    <div className="flex h-[600px] border rounded-lg">
      <div className="w-1/3 border-r">
        <div className="p-4 border-b">
          <Input
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-2"
          />
          <Button variant="outline" className="w-full">
            <Search className="w-4 h-4 mr-2" />
            Advanced Search
          </Button>
        </div>
        <ScrollArea className="h-[calc(100%-73px)]">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className={`p-4 border-b cursor-pointer hover:bg-secondary ${selectedContact?.id === contact.id ? "bg-secondary" : ""}`}
              onClick={() => setSelectedContact(contact)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src="/placeholder.svg" alt={contact.name} />
                    <AvatarFallback>{contact.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{contact.name}</h3>
                    <p className="text-sm text-gray-500">{contact.type}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(contact.id)
                  }}
                >
                  <Star className={`w-4 h-4 ${contact.isFavorite ? "fill-yellow-400" : ""}`} />
                </Button>
              </div>
              <p className="text-sm mt-2 truncate">{contact.lastMessage}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">{contact.timestamp.toLocaleDateString()}</span>
                {contact.unreadCount > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-1">
                    {contact.unreadCount}
                  </span>
                )}
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
      <div className="flex-grow">
        {selectedContact ? (
          <ChatInterface recipientName={selectedContact.name} recipientType={selectedContact.type} />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a contact to start chatting
          </div>
        )}
      </div>
    </div>
  )
}
