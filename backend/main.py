from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import os

from .api.posts import router as posts_router
from . import mock_data


app = FastAPI(
    title="Blog API",
    description="A simple blog website",
    version="1.0.0",
)

# Setup Jinja2 templates
templates_dir = os.path.join(os.path.dirname(__file__), "templates")
templates = Jinja2Templates(directory=templates_dir)

# Include API routers
app.include_router(posts_router)


# Frontend routes
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    """Home page with all posts"""
    posts = mock_data.get_all_posts()
    return templates.TemplateResponse("home.html", {"request": request, "posts": posts})


@app.get("/about", response_class=HTMLResponse)
async def about(request: Request):
    """About page"""
    return templates.TemplateResponse("about.html", {"request": request})


@app.get("/posts/{post_id}", response_class=HTMLResponse)
async def post_detail(request: Request, post_id: int):
    """Post detail page"""
    post = mock_data.get_post_by_id(post_id)
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return templates.TemplateResponse("post_detail.html", {"request": request, "post": post})
