#!/bin/bash

# JMSF Agribusiness Deployment Script
# This script builds and deploys the React app to Namecheap

echo "�� Starting deployment to jmsfagribusiness.com..."

# Build the React app
echo "📦 Building React application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to Namecheap
echo "🌐 Deploying to Namecheap server..."

# Create deployment directory if it doesn't exist
ssh -i ~/.ssh/jmsf_deploy -o StrictHostKeyChecking=no -p 21098 jmsfzikd@66.29.132.130 "mkdir -p public_html"

# Copy built files to server
scp -i ~/.ssh/jmsf_deploy -o StrictHostKeyChecking=no -P 21098 -r dist/* jmsfzikd@66.29.132.130:public_html/

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed. Please check your SSH connection and try again."
    exit 1
fi

# Set proper permissions
ssh -i ~/.ssh/jmsf_deploy -o StrictHostKeyChecking=no -p 21098 jmsfzikd@66.29.132.130 "chmod -R 755 public_html"

echo "✅ Deployment completed successfully!"
echo "🌐 Your website is now live at: https://jmsfagribusiness.com"
