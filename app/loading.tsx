"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <motion.div
        className="h-16 w-16 border-4 border-t-black border-r-transparent border-b-black border-l-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}
