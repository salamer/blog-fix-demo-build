import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
  const date = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg">
      <div className="p-6">
        <time className="block text-xs text-gray-500">{date}</time>
        <Link to={`/post/${post.id}`}>
          <h3 className="mt-2 text-xl font-semibold text-gray-900 hover:text-blue-600">
            {post.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-3 text-gray-600">
          {post.content}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">By {post.author}</span>
          <Link
            to={`/post/${post.id}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
}
