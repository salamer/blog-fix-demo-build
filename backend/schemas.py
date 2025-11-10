from pydantic import BaseModel


class BlogPostBase(BaseModel):
    title: str
    content: str
    author: str


class BlogPostCreate(BlogPostBase):
    pass


class BlogPostUpdate(BaseModel):
    title: str | None = None
    content: str | None = None
    author: str | None = None


class BlogPost(BlogPostBase):
    id: int
    created_at: str
    updated_at: str
