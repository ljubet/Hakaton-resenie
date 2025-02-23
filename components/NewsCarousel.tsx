"use client"

import type React from "react"
import { motion } from "framer-motion"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  image: string
}

interface NewsCarouselProps {
  category: string
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ category }) => {
  // This is mock data. In a real application, you would fetch this data from an API
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: `${category} News 1`,
      excerpt: "This is a brief excerpt of the news article...",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: `${category} News 2`,
      excerpt: "Another brief excerpt of a different news article...",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: `${category} News 3`,
      excerpt: "Yet another brief excerpt of a news article...",
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="overflow-x-auto mb-12">
      <motion.div className="flex space-x-6" drag="x" dragConstraints={{ right: 0, left: -300 }}>
        {newsItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 w-72 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-brand-teal mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.excerpt}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default NewsCarousel

