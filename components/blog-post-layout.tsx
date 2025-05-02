import type { FC, ReactNode } from "react"

interface BlogPostLayoutProps {
  title: string
  date: string
  author: string
  children: ReactNode
}

export const BlogPostLayout: FC<BlogPostLayoutProps> = ({ title, date, author, children }) => {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600">
          Published on {date} by {author}
        </p>
      </header>
      <div className="prose max-w-none">{children}</div>
    </article>
  )
}
