"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  index?: number
}

export function AnimatedCard({ children, className, index = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1,
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className={className}>{children}</Card>
    </motion.div>
  )
}

export function AnimatedCardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <CardHeader className={className}>{children}</CardHeader>
}

export function AnimatedCardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <CardContent className={className}>{children}</CardContent>
}

export function AnimatedCardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <CardFooter className={className}>{children}</CardFooter>
}
