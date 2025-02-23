"use client"

import type React from "react"
import { useState } from "react"

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchTerm)
  }

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex">
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
        />
        <button
          type="submit"
          className="bg-brand-teal text-white px-6 py-2 rounded-r-md hover:bg-brand-red transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar

