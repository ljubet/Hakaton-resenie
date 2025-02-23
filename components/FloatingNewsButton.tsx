"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FloatingNewsButton: React.FC = () => {
  const [showNews, setShowNews] = useState(false)

  const toggleNews = () => {
    setShowNews(!showNews)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        onClick={toggleNews}
        className="bg-brand-orange text-white px-4 py-2 rounded-full font-semibold hover:bg-brand-yellow transition-colors shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showNews ? "Сокриј" : "Среќа на денот"}
      </motion.button>
      <AnimatePresence>
        {showNews && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-full right-0 mb-2 p-4 bg-white rounded-lg shadow-md w-64"
          >
            <h3 className="text-xl font-semibold text-brand-teal mb-2">Вест на денот</h3>
            <p className="text-gray-600">
              Хакатонот за редизајн на среќа.мк газиииии.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FloatingNewsButton

