"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { FaUser, FaBuilding } from "react-icons/fa"

const MultiStepRegistration: React.FC = () => {
  const [step, setStep] = useState(1)
  const [accountType, setAccountType] = useState<"personal" | "business" | null>(null)
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ accountType, name, username, email, password })
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <h2 className="text-2xl font-bold text-brand-teal mb-4 text-center">Одбери тип на профил</h2>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={() => {
                  setAccountType("personal")
                  setStep(2)
                }}
                className={`flex flex-col items-center p-4 border-2 rounded-lg ${
                  accountType === "personal" ? "border-brand-red" : "border-gray-300"
                }`}
              >
                <FaUser size={48} className="text-brand-red mb-2" />
                <span>Личен</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setAccountType("business")
                  setStep(2)
                }}
                className={`flex flex-col items-center p-4 border-2 rounded-lg ${
                  accountType === "business" ? "border-brand-red" : "border-gray-300"
                }`}
              >
                <FaBuilding size={48} className="text-brand-red mb-2" />
                <span>Бизнис</span>
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <h2 className="text-2xl font-bold text-brand-teal mb-4">
              {accountType === "personal" ? "Име и презиме" : "Име на компанија"}
            </h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={accountType === "personal" ? "Внесете име" : "Внесете име на компанија"}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
              required
            />
            <button
              type="button"
              onClick={() => setStep(3)}
              className="mt-4 w-full bg-brand-red text-white py-2 rounded-md hover:bg-brand-orange transition-colors"
            >
Следно            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <h2 className="text-2xl font-bold text-brand-teal mb-4">Информации за корисникот</h2>
            <div className="space-y-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Корисничко име"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Мејл"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Лозинка"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-brand-red text-white py-2 rounded-md hover:bg-brand-orange transition-colors"
            >
              Пријави се
            </button>
          </motion.div>
        )}
      </form>
    </div>
  )
}

export default MultiStepRegistration

