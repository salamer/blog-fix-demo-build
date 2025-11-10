import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import PostDetail from './pages/PostDetail'
import NotFound from './pages/NotFound'

function App() {
  const [currentPage, setCurrentPage] = useState(null)
  const [params, setParams] = useState({})

  useEffect(() => {
    // Parse the current URL path
    const path = window.location.pathname
    const searchParams = new URLSearchParams(window.location.search)

    // Route matching
    if (path === '/' || path === '/index.html') {
      setCurrentPage('home')
    } else if (path === '/about') {
      setCurrentPage('about')
    } else if (path.startsWith('/post/')) {
      const id = path.split('/post/')[1]
      setCurrentPage('post-detail')
      setParams({ id })
    } else {
      setCurrentPage('not-found')
    }
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'post-detail':
        return <PostDetail id={params.id} />
      case 'not-found':
        return <NotFound />
      default:
        return (
          <div className="flex justify-center py-12">
            <div className="text-lg text-gray-600">Loading...</div>
          </div>
        )
    }
  }

  return (
    <Layout>
      {renderPage()}
    </Layout>
  )
}

export default App
