"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const podcastShorts = [
  { id: 1, src: "/podcast-short-1.mp4" },
  { id: 2, src: "/podcast-short-2.mp4" },
  { id: 3, src: "/podcast-short-3.mp4" },
  { id: 4, src: "/podcast-short-4.mp4" },
  { id: 5, src: "/podcast-short-5.mp4" },
]

export default function PodcastCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextShort = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % podcastShorts.length)
  }

  const prevShort = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + podcastShorts.length) % podcastShorts.length)
  }

  return (
    <div className="relative h-[calc(100vh-200px)] max-h-[800px] max-w-[450px] mx-auto">
      <AnimatePresence initial={false}>
        <motion.video
          key={currentIndex}
          src={podcastShorts[currentIndex].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        />
      </AnimatePresence>
      <button
        onClick={prevShort}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={nextShort}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        Next
      </button>
    </div>
  )
}

