from datetime import datetime, timedelta
from typing import List, Dict, Optional

# In-memory storage for blog posts
mock_posts: List[Dict] = [
    {
        "id": 1,
        "title": "Getting Started with FastAPI",
        "content": "FastAPI is a modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints. It's incredibly fast, easy to learn, and production-ready.\n\nKey features include:\n- Fast to code: Increase development speed\n- Fewer bugs: Reduce human errors\n- Intuitive: Great editor support\n- Easy: Designed to be easy to use and learn\n- Short: Minimize code duplication\n\nIn this post, we'll explore how to build a simple API with FastAPI and why it's becoming the go-to choice for Python developers.",
        "author": "Jane Smith",
        "created_at": (datetime.now() - timedelta(days=5)).isoformat(),
        "updated_at": (datetime.now() - timedelta(days=5)).isoformat(),
    },
    {
        "id": 2,
        "title": "Modern Frontend Development with React",
        "content": "React has revolutionized how we build user interfaces. With the introduction of hooks, functional components, and concurrent features, React continues to evolve and improve.\n\nRecent updates include:\n- React 19 with improved performance\n- Server Components for better data fetching\n- Enhanced Suspense capabilities\n- Improved TypeScript support\n\nThis post will guide you through modern React patterns and best practices for building scalable applications.",
        "author": "John Doe",
        "created_at": (datetime.now() - timedelta(days=3)).isoformat(),
        "updated_at": (datetime.now() - timedelta(days=3)).isoformat(),
    },
    {
        "id": 3,
        "title": "Building Responsive UIs with Tailwind CSS",
        "content": "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. It's become incredibly popular for its developer experience and flexibility.\n\nWhy developers love Tailwind:\n- Rapid prototyping with utility classes\n- Consistent design system out of the box\n- Responsive design made simple\n- Easy customization and theming\n- Excellent documentation\n\nLet's dive into how to create beautiful, responsive interfaces using Tailwind CSS.",
        "author": "Sarah Johnson",
        "created_at": (datetime.now() - timedelta(days=1)).isoformat(),
        "updated_at": (datetime.now() - timedelta(days=1)).isoformat(),
    },
    {
        "id": 4,
        "title": "Understanding Async/Await in Python",
        "content": "Asynchronous programming in Python has become essential for building high-performance applications. The async/await syntax makes it easier to write concurrent code.\n\nKey concepts:\n- Event loop fundamentals\n- Coroutines and tasks\n- Async context managers\n- Async generators\n\nWith async/await, you can handle multiple operations concurrently without the complexity of threading or multiprocessing. This post explores practical examples and best practices.",
        "author": "Mike Chen",
        "created_at": (datetime.now() - timedelta(hours=12)).isoformat(),
        "updated_at": (datetime.now() - timedelta(hours=12)).isoformat(),
    },
    {
        "id": 5,
        "title": "PostgreSQL vs MySQL: Choosing Your Database",
        "content": "Choosing the right database is crucial for your application's success. PostgreSQL and MySQL are two of the most popular open-source relational databases.\n\nPostgreSQL strengths:\n- Advanced data types (JSON, arrays, etc.)\n- Powerful query optimizer\n- Strong ACID compliance\n- Extensive extension ecosystem\n\nMySQL strengths:\n- Simplicity and ease of use\n- Wide hosting support\n- Excellent documentation\n- Mature ecosystem\n\nWe'll compare features, performance, and use cases to help you make an informed decision.",
        "author": "Emily Davis",
        "created_at": (datetime.now() - timedelta(hours=6)).isoformat(),
        "updated_at": (datetime.now() - timedelta(hours=6)).isoformat(),
    },
]

# Counter for new post IDs
next_id = 6


def get_all_posts(skip: int = 0, limit: int = 100) -> List[Dict]:
    """Get all posts with pagination"""
    # Sort by created_at descending
    sorted_posts = sorted(mock_posts, key=lambda x: x["created_at"], reverse=True)
    return sorted_posts[skip : skip + limit]


def get_post_by_id(post_id: int) -> Optional[Dict]:
    """Get a single post by ID"""
    for post in mock_posts:
        if post["id"] == post_id:
            return post
    return None


def create_post(title: str, content: str, author: str) -> Dict:
    """Create a new post"""
    global next_id
    new_post = {
        "id": next_id,
        "title": title,
        "content": content,
        "author": author,
        "created_at": datetime.now().isoformat(),
        "updated_at": datetime.now().isoformat(),
    }
    mock_posts.append(new_post)
    next_id += 1
    return new_post


def update_post(post_id: int, title: Optional[str] = None, content: Optional[str] = None, author: Optional[str] = None) -> Optional[Dict]:
    """Update an existing post"""
    post = get_post_by_id(post_id)
    if not post:
        return None

    if title is not None:
        post["title"] = title
    if content is not None:
        post["content"] = content
    if author is not None:
        post["author"] = author

    post["updated_at"] = datetime.now().isoformat()
    return post


def delete_post(post_id: int) -> bool:
    """Delete a post"""
    global mock_posts
    initial_length = len(mock_posts)
    mock_posts = [post for post in mock_posts if post["id"] != post_id]
    return len(mock_posts) < initial_length
