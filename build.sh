#!/bin/bash
set -e

curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

echo "Installing Python dependencies..."
pip install --no-cache-dir -r requirements.txt

echo "Build complete!"
