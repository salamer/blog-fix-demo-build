#!/bin/bash
set -e

echo "Starting FastAPI server..."
uvicorn backend.main:app --host 0.0.0.0 --port 8000
