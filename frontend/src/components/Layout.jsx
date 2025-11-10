export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center gap-6">
              <a href="/" className="flex shrink-0 items-center">
                <h1 className="text-2xl font-bold text-gray-900">My Blog</h1>
              </a>
              <a
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="/create"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                New Post
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
