#!/bin/bash

echo "🚀 Deploying VibeSpark to Vercel..."
echo ""

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if there are uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes"
    echo "   Committing changes..."
    git add -A
    git commit -m "Auto-commit before deployment"
fi

# Push to remote
echo "📤 Pushing to remote repository..."
git push origin main

echo ""
echo "✅ Code pushed successfully!"
echo ""
echo "🌐 Your app should now be deploying on Vercel"
echo "   Check your Vercel dashboard for deployment status"
echo ""
echo "💡 If this is your first deployment:"
echo "   1. Go to vercel.com"
echo "   2. Import your GitHub repository"
echo "   3. Deploy with default settings" 