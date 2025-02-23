import type React from "react"

interface NewsSectionProps {
  title: string
}

const NewsSection: React.FC<NewsSectionProps> = ({ title }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-brand-teal mb-4">{title}</h2>
    </div>
  )
}

export default NewsSection

