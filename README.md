# Blog Website

A full-stack blog website built with FastAPI (Python) backend and React frontend with **mock data** (no database required).

## Features

- Create, read, update, and delete blog posts
- Responsive design with Tailwind CSS
- In-memory mock data storage
- RESTful API with FastAPI
- Modern React frontend with React Router
- 5 pre-populated sample blog posts

## Technology Stack

### Backend
- **FastAPI**: Modern Python web framework
- **Mock Data**: In-memory storage (no database required)
- **Uvicorn**: ASGI server

### Frontend
- **React 19**: UI library
- **Vite**: Build tool
- **Tailwind CSS 4**: Utility-first CSS framework
- **React Router 7**: Client-side routing

## Quick Start

### Development

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Install Node.js dependencies and build frontend:
```bash
cd frontend
npm install
npm run build
cd ..
```

3. Start the server:
```bash
uvicorn backend.main:app --reload
```

Visit `http://localhost:8000` to see the application.

### Development Mode (with hot reload)

Run the backend:
```bash
uvicorn backend.main:app --reload
```

In a separate terminal, run the frontend dev server:
```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173` for frontend development with hot reload.

### Production Build

Run the build script:
```bash
bash build.sh
```

Then start the server:
```bash
bash start.sh
```

## API Endpoints

- `GET /api/posts/` - Get all posts
- `GET /api/posts/{id}` - Get a single post
- `POST /api/posts/` - Create a new post
- `PUT /api/posts/{id}` - Update a post
- `DELETE /api/posts/{id}` - Delete a post
- `GET /api/health` - Health check

## Sample Blog Posts

The application comes with 5 pre-populated blog posts:
1. Getting Started with FastAPI
2. Modern Frontend Development with React
3. Building Responsive UIs with Tailwind CSS
4. Understanding Async/Await in Python
5. PostgreSQL vs MySQL: Choosing Your Database

All posts are stored in memory and will reset when the server restarts.

## Project Structure

```
.
├── backend/
│   ├── main.py           # FastAPI application
│   ├── mock_data.py      # In-memory data storage
│   ├── schemas.py        # Pydantic models
│   └── api/
│       └── posts.py      # Blog post endpoints
├── frontend/
│   ├── src/
│   │   ├── App.jsx       # Main app with routing
│   │   ├── components/   # Reusable components
│   │   └── pages/        # Page components
│   ├── package.json
│   └── vite.config.js
├── build.sh              # Build script
├── start.sh              # Start script
├── requirements.txt      # Python dependencies
└── leapcell.yml         # Deployment config
```

## Notes

- Data is stored in memory and will be lost on server restart
- No database setup required
- Perfect for demos, testing, and learning
- Can easily be upgraded to use a real database later

## License

MIT
