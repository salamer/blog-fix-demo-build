export default function About() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900">About This Blog</h1>

          <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Welcome to our blog! This is a modern, full-stack web application built to demonstrate
              best practices in web development using cutting-edge technologies.
            </p>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
              <p className="font-semibold text-blue-900">
                Built with modern web technologies for optimal performance and developer experience.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 pt-4">Technology Stack</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Backend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span><strong>FastAPI</strong> - Modern, fast Python web framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span><strong>Uvicorn</strong> - Lightning-fast ASGI server</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span><strong>Pydantic</strong> - Data validation using Python type hints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span><strong>Mock Data</strong> - In-memory storage for demo purposes</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Frontend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span><strong>React 19</strong> - Latest version of the popular UI library</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span><strong>Vite</strong> - Next generation frontend tooling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span><strong>Tailwind CSS 4</strong> - Utility-first CSS framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span><strong>Server-Side Routing</strong> - Traditional navigation via backend</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 pt-4">Features</h2>

            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="mt-1 h-5 w-5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3">
                  <strong>Full CRUD Operations</strong> - Create, read, update, and delete blog posts
                </span>
              </li>
              <li className="flex items-start">
                <svg className="mt-1 h-5 w-5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3">
                  <strong>Responsive Design</strong> - Works seamlessly on all devices
                </span>
              </li>
              <li className="flex items-start">
                <svg className="mt-1 h-5 w-5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3">
                  <strong>RESTful API</strong> - Clean, well-documented API endpoints
                </span>
              </li>
              <li className="flex items-start">
                <svg className="mt-1 h-5 w-5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3">
                  <strong>Modern UI</strong> - Clean, intuitive interface with smooth interactions
                </span>
              </li>
              <li className="flex items-start">
                <svg className="mt-1 h-5 w-5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3">
                  <strong>No Database Required</strong> - Uses in-memory storage for quick setup
                </span>
              </li>
              <li className="flex items-start">
                <svg className="mt-1 h-5 w-5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3">
                  <strong>Server-Side Routing</strong> - All routes handled by backend for better control
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 pt-4">Architecture</h2>

            <p>
              This blog uses a unique <strong>server-side routing</strong> approach that combines the best of traditional web apps with modern React:
            </p>

            <div className="rounded-lg bg-blue-50 p-4 border border-blue-200 mt-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 font-bold">→</span>
                  <span>Every page request goes through the FastAPI backend first</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 font-bold">→</span>
                  <span>Backend serves the same index.html for all routes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 font-bold">→</span>
                  <span>React app reads the URL and renders the appropriate page</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 font-bold">→</span>
                  <span>Traditional anchor tags cause full page reloads</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 font-bold">→</span>
                  <span>No client-side routing library needed (reduced bundle size)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 pt-4">Purpose</h2>

            <p>
              This project serves as a demonstration of modern web development practices and can be used as:
            </p>

            <ul className="space-y-2 ml-6">
              <li className="list-disc">A learning resource for full-stack development</li>
              <li className="list-disc">A starting template for similar projects</li>
              <li className="list-disc">A showcase of integration between FastAPI and React</li>
              <li className="list-disc">A reference for best practices in API design and frontend architecture</li>
            </ul>

            <div className="mt-8 rounded-lg bg-gray-50 p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Started</h3>
              <p className="text-gray-700">
                Feel free to explore the blog posts, create your own content, and see how everything works together.
                All data is stored in memory, so don't worry about breaking anything - just refresh to reset!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
