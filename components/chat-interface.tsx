"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  sender: string
  content: string
  timestamp: Date
  status: "sent" | "delivered" | "read"
}

interface ChatInterfaceProps {
  recipientName: string
  recipientType: "boutique" | "designer"
}

export function ChatInterface({ recipientName, recipientType }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Simulated message history
  useEffect(() => {
    const simulatedMessages: Message[] = [
      {
        id: "1",
        sender: "user",
        content: "Hello, I'm interested in your designs",
        timestamp: new Date(Date.now() - 100000),
        status: "read",
      },
      {
        id: "2",
        sender: recipientName,
        content: "Thank you for your interest! How can I help you?",
        timestamp: new Date(Date.now() - 80000),
        status: "read",
      },
      {
        id: "3",
        sender: "user",
        content: "I was wondering if you have any upcoming collections?",
        timestamp: new Date(Date.now() - 60000),
        status: "read",
      },
      {
        id: "4",
        sender: recipientName,
        content: "Yes, we have a new summer collection coming out next month. Would you like to see a preview?",
        timestamp: new Date(Date.now() - 40000),
        status: "delivered",
      },
    ]
    setMessages(simulatedMessages)
  }, [recipientName])

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [scrollAreaRef]) //Corrected dependency

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: Date.now().toString(),
        sender: "user",
        content: newMessage,
        timestamp: new Date(),
        status: "sent",
      }
      setMessages([...messages, newMsg])
      setNewMessage("")
      // Simulate received message
      setTimeout(() => {
        const receivedMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: recipientName,
          content: "Thank you for your message. I'll get back to you soon!",
          timestamp: new Date(),
          status: "delivered",
        }
        setMessages((prev) => [...prev, receivedMsg])
      }, 1000)
    }
  }

  return (
    <div className="flex flex-col h-[600px] border rounded-lg">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">{recipientName}</h2>
        <p className="text-sm text-gray-500">{recipientType}</p>
      </div>
      <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
        {messages.map((msg) => (
          <div key={msg.id} className={`flex mb-4 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            {msg.sender !== "user" && (
              <Avatar className="w-8 h-8 mr-2">
                <AvatarImage src="/placeholder.svg" alt={recipientName} />
                <AvatarFallback>{recipientName[0]}</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`max-w-[70%] p-3 rounded-lg ${msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
            >
              <p>{msg.content}</p>
              <div className="text-xs mt-1 flex justify-between">
                <span>{msg.timestamp.toLocaleTimeString()}</span>
                {msg.sender === "user" && <span>{msg.status}</span>}
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  )
}
