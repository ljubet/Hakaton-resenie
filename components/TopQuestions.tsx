import Link from "next/link"

const topQuestions = [
  { id: 1, title: "How to secure funding for your startup", author: "John Doe", comments: 15 },
  { id: 2, title: "Best practices for remote team management", author: "Jane Smith", comments: 12 },
  { id: 3, title: "The importance of user experience in product design", author: "Bob Johnson", comments: 10 },
]

export default function TopQuestions() {
  return (
    <div className="space-y-4">
      {topQuestions.map((question) => (
        <div key={question.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <Link
            href={`/forum/question/${question.id}`}
            className="text-lg font-semibold text-brand-teal hover:text-brand-orange"
          >
            {question.title}
          </Link>
          <p className="text-sm text-gray-600">By {question.author}</p>
          <p className="text-sm text-gray-500">{question.comments} comments</p>
        </div>
      ))}
      <div className="text-center mt-6">
        <Link href="/forum" className="text-brand-red hover:text-brand-orange">
          View All Questions
        </Link>
      </div>
    </div>
  )
}

