from fastapi import APIRouter, HTTPException
from typing import List
from pydantic import BaseModel

from .. import mock_data

class BlogPost(BaseModel):
    id: int
    title: str
    content: str
    author: str
    created_at: str
    updated_at: str


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
