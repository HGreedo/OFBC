import { MessageCenter } from "@/components/message-center"

export default function Messages() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Message Center</h1>
      <p className="text-lg">Manage your conversations with boutiques and designers.</p>
      <MessageCenter />
    </div>
  )
}

