"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/ui/Navbar"

const questions = [
  { id: 1, question: "Која е вашата примарна индустрија?", type: "text" },
  { id: 2, question: "Колку години искуство имате?", type: "number" },
  {
    id: 3,
    question: "Која е моменталната фаза на вашиот стартап??",
    type: "select",
    options: ["Idea", "MVP", "Early Stage", "Growth", "Scale"],
  },
  { id: 4, question: "Кои се вашите клучни вештини?", type: "text" },
  { id: 5, question: "Какво партнерство барате?", type: "text" },
]

export default function Matchmaker() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [currentAnswer, setCurrentAnswer] = useState("")

  const handleNext = () => {
    if (currentAnswer) {
      setAnswers({ ...answers, [questions[currentQuestion].id]: currentAnswer })
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setCurrentAnswer("")
      } else {
        setShowResults(true)
      }
    }
  }

  const matchedProfiles = [
    { id: 1, name: "Alice Johnson", role: "UX Designer", match: "95%" },
    { id: 2, name: "Bob Smith", role: "Full Stack Developer", match: "90%" },
    { id: 3, name: "Carol Williams", role: "Marketing Specialist", match: "85%" },
    { id: 4, name: "David Brown", role: "Business Analyst", match: "80%" },
  ]

  // @ts-ignore
  return (
      <div className="min-h-screen flex flex-col" style={{
        backgroundImage: "url('./bg_(1) 2 (1).svg')", // Updated path to the SVG file
        backgroundSize: 'cover', // Ensure the image covers the entire div
        backgroundPosition: 'right', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      }}>
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-8">
          {showResults ? (
              <>
                <h1 className="text-3xl font-bold text-brand-teal mb-8">Вашите резултати</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {matchedProfiles.map((profile) => (
                      <div key={profile.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-semibold text-brand-teal">{profile.name}</h2>
                        <p className="text-gray-600">{profile.role}</p>
                        <p className="text-brand-red font-bold mt-2">{profile.match} Совпаѓање</p>
                        <a
                            href={`/profile/${profile.id}`}
                            className="mt-4 inline-block bg-brand-orange text-white px-4 py-2 rounded hover:bg-brand-yellow hover:text-white transition-colors"
                        >
                          Отвори профил
                        </a>
                      </div>
                  ))}
                </div>
              </>
          ) : (
              <>
                <h1 className="text-5xl font-bold text-brand-teal mb-8 pl-3">Филија AI</h1>
                <div className="max-w-2xl mt-32 bg-transparent rounded-lg shadow-lg p-6 ">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-brand-teal mb-2">
                      Прашање {currentQuestion + 1} of {questions.length}
                    </h2>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                          className="h-2 bg-brand-teal rounded-full transition-all duration-300"
                          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <h2 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h2>

                  {questions[currentQuestion].type === "select" ? (
                      <select
                          value={currentAnswer}
                          onChange={(e) => setCurrentAnswer(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        {questions[currentQuestion].options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                        ))}
                      </select>
                  ) : (
                      <input
                          type={questions[currentQuestion].type}
                          value={currentAnswer}
                          onChange={(e) => setCurrentAnswer(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                          placeholder="Type your answer here..."
                      />
                  )}

                  <button
                      onClick={handleNext}
                      disabled={!currentAnswer}
                      className={`mt-6 flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-md text-white transition-colors duration-200 ${
                          currentAnswer
                              ? "bg-brand-teal hover:bg-brand-red"
                              : "bg-gray-300 cursor-not-allowed"
                      }`}
                  >
                    {currentQuestion === questions.length - 1 ? "Прикажи резултати" : "Следно"}
                    <ChevronRight size={20} />
                  </button>
                </div>
              </>
          )}
        </div>
      </div>
  )
}