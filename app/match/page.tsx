"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Match() {
  const [startupInterest, setStartupInterest] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Your startup interest: ${startupInterest}\nThis is a demo, so no actual matching is performed.`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image src="/logo.svg" alt="Your Brand Logo" width={40} height={40} />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="border-transparent text-gray-500 hover:border-brand-yellow hover:text-brand-yellow inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="border-transparent text-gray-500 hover:border-brand-orange hover:text-brand-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                className="border-transparent text-gray-500 hover:border-brand-red hover:text-brand-red inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1
            className="text-4xl font-bold text-brand-teal mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Find Your Startup Match
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="startupInterest" className="block text-gray-700 text-sm font-bold mb-2">
                  What's your startup interest?
                </label>
                <input
                  type="text"
                  id="startupInterest"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="e.g., AI, Fintech, E-commerce"
                  value={startupInterest}
                  onChange={(e) => setStartupInterest(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-brand-teal hover:bg-brand-yellow text-white hover:text-brand-teal font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
                >
                  Find My Match
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">&copy; 2023 Your Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

