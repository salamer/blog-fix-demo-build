#!/bin/bash
set -e

echo "Installing Node.js and npm..."
# Install Node.js 20.x using apt (for Debian/Ubuntu based systems)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

echo "Installing Python dependencies..."
pip install --no-cache-dir -r requirements.txt

echo "Building frontend..."
cd frontend
npm install
npm run build
cd ..

echo "Build complete!"
