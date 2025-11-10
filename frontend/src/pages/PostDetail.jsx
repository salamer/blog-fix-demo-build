import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

export default function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
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

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this post?')) {
      return
    }

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        navigate('/')
      } else {
        throw new Error('Failed to delete post')
      }
    } catch (err) {
      alert('Error deleting post: ' + err.message)
    }
  }

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
        <Link to="/" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
          ← Back to home
        </Link>
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
        <Link to="/" className="text-blue-600 hover:text-blue-700">
          ← Back to posts
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <div className="p-8">
          <time className="block text-sm text-gray-500">{date}</time>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">{post.title}</h1>
          <p className="mt-4 text-sm text-gray-600">By {post.author}</p>

          <div className="mt-8 whitespace-pre-wrap text-gray-700 leading-relaxed">
            {post.content}
          </div>

          <div className="mt-8 flex gap-4 border-t pt-6">
            <Link
              to={`/edit/${post.id}`}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Edit Post
            </Link>
            <button
              onClick={handleDelete}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              Delete Post
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
