"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center relative">
                    {/* Logo on the left */}
                    <div className="flex-shrink-0">
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

                    {/* Centered navigation links */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex space-x-8">
                            <Link
                                href="/"
                                className="border-transparent text-gray-500 hover:border-brand-red hover:text-brand-red inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="border-transparent text-gray-500 hover:border-brand-red hover:text-brand-red inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
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
                        </div>
                    </div>

                    {/* Buttons on the right */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/login"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-brand-teal hover:text-white hover:bg-brand-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal"
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
    )
}