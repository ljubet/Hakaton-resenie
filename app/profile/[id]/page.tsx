"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/ui/Navbar"


const mockUserData = {
  id: 1,
  name: "John Doe",
  username: "johndoe",
  profilePicture: "/placeholder.svg",
  badges: ["AI Enthusiast", "Top Contributor", "Networking Pro"],
}

export default function UserProfile({ params }) {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // In a real application, you would fetch user data based on the ID
    // For this example, we'll use mock data
    setUserData(mockUserData)
  }, [])

  if (!userData) {
    return <div>Loading...</div>
  }

  return (

    <div className="container mx-auto px-4 py-8">
      <Navbar/>
      <br></br>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center space-x-4 mb-6">
          <Image
            src={userData.profilePicture || "/placeholder.svg"}
            alt={userData.name}
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-bold text-brand-teal">{userData.name}</h1>
            <p className="text-gray-600">@{userData.username}</p>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-brand-teal mb-2">Badges</h2>
          <div className="flex flex-wrap gap-2">
            {userData.badges.map((badge, index) => (
              <span key={index} className="bg-brand-yellow text-brand-teal px-3 py-1 rounded-full text-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>
        {/* Add more sections for user information, activity, etc. */}
      </div>
    </div>
  )
}

