import Link from "next/link"

const topQuestions = [
  { id: 1, title: "Како да дојдам до финансиски средства за мојот стартап?", author: "Љупчо Трошански", comments: 15 },
  { id: 2, title: "Кои се добри практики за далечинско управување со тимот", author: "Петар Србиноски", comments: 12 },
  { id: 3, title: "Важноста на корисничкото искуство во дизајнот на производот", author: "Симона Живковиќ", comments: 10 },
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
          <p className="text-sm text-gray-500">{question.comments} коментари</p>
        </div>
      ))}
      <div className="text-center mt-6">
        <Link href="/forum" className="text-brand-red hover:text-brand-orange">
          Види повеќе прашања
        </Link>
      </div>
    </div>
  )
}

