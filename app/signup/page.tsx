import Link from "next/link"
import Image from "next/image"
import MultiStepRegistration from "@/components/MultiStepRegistration"
import Navbar from "@/components/ui/Navbar"

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md">
          <Navbar />
      </nav>

      <main className="flex-grow flex items-center justify-center bg-white ">
          <div className="w-1/3 mx-auto shadow-lg text-center rounded-lg">
        <div className="max-w-md w-full space-y-8 p-8 mx-auto">
          <div className="text-center">
            <h2 className="mt-2 text-center text-3xl font-extrabold text-brand-teal mb-32 ">Направи тој профил</h2>
          </div >
          <MultiStepRegistration />
        </div>
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

