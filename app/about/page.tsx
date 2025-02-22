"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/ui/Navbar";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md sticky top-0 z-10">
       <Navbar/>
      </nav>

      <main className="flex-grow flex items-center justify-center bg-white">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.h1
            className="text-5xl font-bold text-brand-teal mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are dedicated to creating meaningful connections and fostering engaging discussions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/services"
              className="bg-brand-orange text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-brand-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange inline-block"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">&copy; 2023 Srekja.mk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

