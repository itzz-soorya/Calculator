#!/bin/bash

# DemoDemoDemo Deployment Script
# This script helps deploy the FLAMES calculator to GitHub Pages

echo "🚀 Preparing DemoDemoDemo for GitHub Pages deployment..."

# Create .gitignore for unnecessary files
cat > .gitignore << EOL
# Logs
*.log
npm-debug.log*

# OS generated files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Temporary files
*.tmp
*.temp
EOL

# Create GitHub Pages deployment info
cat > DEPLOYMENT.md << EOL
# DemoDemoDemo - Deployment Information

## Live Demo
Your app will be live at: https://yourusername.github.io/demodemodemo

## Features
- ❤️ FLAMES Love Calculator
- 📊 Love Percentage Calculator  
- 🎨 Beautiful animated interface
- 📧 Hidden email notifications (when configured)
- 📱 Mobile responsive design

## Email Configuration Status
- Email: dragonofhorse666@gmail.com
- Status: Configured for EmailJS integration
- App Password: Secured in EmailJS dashboard

## Deployment Steps
1. Create GitHub repository named 'demodemodemo'
2. Upload all files
3. Enable GitHub Pages
4. Configure EmailJS (optional)

## Security
- No sensitive data exposed in code
- Email functionality through secure EmailJS service
- Client-side only - no backend required
EOL

echo "✅ Files prepared for deployment!"
echo "📂 Files ready to upload to GitHub:"
echo "   - index.html"
echo "   - styles.css" 
echo "   - script.js"
echo "   - email-config.js"
echo "   - README.md"
echo "   - DEPLOYMENT.md"
echo "   - .gitignore"
echo ""
echo "🔧 Next steps:"
echo "1. Create GitHub repository"
echo "2. Upload these files"
echo "3. Enable GitHub Pages in repository settings"
echo "4. Configure EmailJS for email functionality"
echo ""
echo "🌐 Your app will be live at: https://yourusername.github.io/demodemodemo"
