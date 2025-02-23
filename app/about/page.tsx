"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import NewsSection from "@/components/NewsSection"
import NewsCarousel from "@/components/NewsCarousel"
import SearchBar from "@/components/SearchBar"
import NewsOfTheDayButton from "@/components/NewsOfTheDayButton"
import Navbar from "@/components/ui/Navbar";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-white shadow-md sticky top-0 z-10">
                <Navbar/>
            </nav>

            <main className="flex-grow bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.h1
                        className="text-5xl font-bold text-brand-teal mb-8 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Вести
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 mb-12 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Вашата дневна доза на возбудливи приказни, моменти кои го загреваат срцето и добри вибрации за да ви го разубават денот. Затоа што среќата вреди да се сподели!🌟
                    </motion.p>

                    <SearchBar />


                    <NewsSection title="😁Хумор" />
                    <NewsCarousel category="Смешни" />

                    <NewsSection title="💖 Национални вести" />
                    <NewsCarousel category="Македонски" />

                    <NewsSection title="🌎 Светски Вест" />
                    <NewsCarousel category="Светски" />
                </div>
            </main>

            <footer className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-500">&copy; 2025 Srekja.mk. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

