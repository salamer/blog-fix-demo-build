from fastapi import APIRouter, HTTPException
from typing import List

from ..schemas import BlogPost, BlogPostCreate, BlogPostUpdate
from .. import mock_data

router = APIRouter(prefix="/api/posts", tags=["posts"])


@router.get("/", response_model=List[BlogPost])
async def get_posts(skip: int = 0, limit: int = 100):
    """Get all blog posts"""
    posts = mock_data.get_all_posts(skip=skip, limit=limit)
    return posts


@router.get("/{post_id}", response_model=BlogPost)
async def get_post(post_id: int):
    """Get a single blog post by ID"""
    post = mock_data.get_post_by_id(post_id)
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return post


@router.post("/", response_model=BlogPost, status_code=201)
async def create_post(post: BlogPostCreate):
    """Create a new blog post"""
    new_post = mock_data.create_post(
        title=post.title,
        content=post.content,
        author=post.author
    )
    return new_post


@router.put("/{post_id}", response_model=BlogPost)
async def update_post(post_id: int, post: BlogPostUpdate):
    """Update a blog post"""
    updated_post = mock_data.update_post(
        post_id=post_id,
        title=post.title,
        content=post.content,
        author=post.author
    )
    if updated_post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return updated_post


@router.delete("/{post_id}", status_code=204)
async def delete_post(post_id: int):
    """Delete a blog post"""
    success = mock_data.delete_post(post_id)
    if not success:
        raise HTTPException(status_code=404, detail="Post not found")
    return None
