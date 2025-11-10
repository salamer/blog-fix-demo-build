import { useState, useEffect } from 'react'

export default function PostDetail({ id }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`)
        if (!response.ok) {
          throw new Error('Post not found')
        }
        const data = await response.json()
        setPost(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="text-lg text-gray-600">Loading post...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-md bg-red-50 p-4">
        <p className="text-sm text-red-800">Error: {error}</p>
        <a href="/" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
          ← Back to home
        </a>
      </div>
    )
  }

  const date = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <article className="mx-auto max-w-3xl">
      <div className="mb-6">
        <a href="/" className="text-blue-600 hover:text-blue-700">
          ← Back to posts
        </a>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <div className="p-8">
          <time className="block text-sm text-gray-500">{date}</time>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">{post.title}</h1>
          <p className="mt-4 text-sm text-gray-600">By {post.author}</p>

          <div className="mt-8 whitespace-pre-wrap text-gray-700 leading-relaxed">
            {post.content}
          </div>
        </div>
      </div>

      {/* About CTA */}
      <div className="mt-6 rounded-lg border-2 border-blue-200 bg-blue-50 p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-blue-900">
              Curious about how this blog works?
            </p>
            <p className="mt-1 text-xs text-blue-700">
              Learn about the tech stack, features, and architecture behind this project.
            </p>
          </div>
          <a
            href="/about"
            className="shrink-0 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            View Tech Details
          </a>
        </div>
      </div>
    </article>
  )
}
