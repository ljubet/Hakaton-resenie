"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const NewsOfTheDayButton: React.FC = () => {
  const [showNews, setShowNews] = useState(false)

  const toggleNews = () => {
    setShowNews(!showNews)
  }

  return (
    <div className="mb-8">
      <motion.button
        onClick={toggleNews}
        className="bg-brand-yellow text-brand-teal px-6 py-3 rounded-md font-semibold hover:bg-brand-orange hover:text-white transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showNews ? "Hide News of the Day" : "Show News of the Day"}
      </motion.button>
      {showNews && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 p-4 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-brand-teal mb-2">Вест на денот</h3>
          <p className="text-gray-600">
            Хакатонот за ребрендирање на среќа.мк газиииии
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default NewsOfTheDayButton

