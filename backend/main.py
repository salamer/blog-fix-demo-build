from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

from .api.posts import router as posts_router


app = FastAPI(
    title="Blog API",
    description="A simple blog website API with mock data",
    version="1.0.0",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint (must be before catch-all route)
@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "mode": "mock_data"}

# Include API routers
app.include_router(posts_router)

# Serve static files from frontend dist
static_dir = os.path.join(os.path.dirname(__file__), "..", "frontend", "dist")
if os.path.exists(static_dir):
    # Mount static assets
    app.mount("/assets", StaticFiles(directory=os.path.join(static_dir, "assets")), name="assets")

    # Catch-all route to serve index.html for all frontend routes
    # This must be the last route defined
    @app.get("/{full_path:path}")
    async def serve_frontend(full_path: str):
        """Serve frontend for all non-API routes

        This allows the React app to handle routing based on window.location
        All routes go through the backend and return index.html
        """
        # If path starts with api/, this shouldn't be hit (API routes are already defined)
        if full_path.startswith("api/"):
            return {"detail": "API endpoint not found"}

        # For all other paths, serve the React app
        # The React app will read window.location.pathname and render the appropriate page
        index_path = os.path.join(static_dir, "index.html")
        if os.path.exists(index_path):
            return FileResponse(index_path)

        return {"detail": "Frontend not built. Run 'bash build.sh' to build the frontend."}
