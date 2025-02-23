import Link from "next/link"
import Image from "next/image"
import MultiStepRegistration from "@/components/MultiStepRegistration"

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md">
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
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center bg-white">
        <div className="max-w-md w-full space-y-8 p-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-teal">Create your account</h2>
          </div>
          <MultiStepRegistration />
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

