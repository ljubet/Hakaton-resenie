"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/detelinka-02-LH4iMfwBhZdB5ckw9fhF8934CmpKMf.png"
                  alt="Srekja.mk Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:flex sm:space-x-8 items-center">
              <Link
                href="/"
                className="border-transparent text-gray-500 hover:border-brand-red hover:text-brand-red inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="border-brand-red text-brand-teal inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                className="border-transparent text-gray-500 hover:border-brand-red hover:text-brand-red inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Services
              </Link>
              <Link
                href="/matchmaker"
                className="border-transparent text-gray-500 hover:border-brand-red hover:text-brand-red inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Matchmaker
              </Link>
              <Link
                href="/forum"
                className="border-transparent text-gray-500 hover:border-brand-red hover:text-brand-red inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Forum
              </Link>
              <Link
                href="/login"
                className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-brand-teal hover:text-white hover:bg-brand-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-red hover:bg-brand-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
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

