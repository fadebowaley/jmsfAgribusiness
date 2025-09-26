# JMSF Agribusiness - Deployment Guide

## 🚀 Quick Start

### Manual Deployment
```bash
# Build and deploy to production
./deploy.sh
```

### Automated Deployment (CI/CD)
The project uses GitHub Actions for automated deployment. Deployments are triggered when code is pushed to the `production` branch.

## 📋 Prerequisites

### Local Development
- Node.js 18+ 
- npm or yarn
- SSH access to Namecheap server

### GitHub Secrets Setup
To enable automated deployments, add these secrets to your GitHub repository:

1. Go to your repository → Settings → Secrets and variables → Actions
2. Add the following secrets:

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `NAMECHEAP_SSH_PRIVATE_KEY` | Your private SSH key | The private key for SSH access |
| `NAMECHEAP_SSH_USER` | `jmsfzikd` | Your cPanel username |
| `NAMECHEAP_SSH_HOST` | `66.29.132.130` | Your server IP address |

## 🌿 Branch Strategy

- **`main`**: Development branch
- **`staging`**: Testing branch (for staging environment)
- **`production`**: Production branch (triggers deployment)

## 🔄 Deployment Workflow

### Development Process
1. Work on `main` branch
2. Test changes on `staging` branch
3. Merge to `production` branch for deployment

### Manual Deployment Steps
```bash
# 1. Switch to production branch
git checkout production

# 2. Merge latest changes
git merge main

# 3. Deploy
./deploy.sh

# 4. Push changes
git push origin production
```

### Automated Deployment
- Push to `production` branch triggers GitHub Actions
- Builds the React app
- Deploys to Namecheap server automatically

## 🛠️ Server Configuration

### Namecheap Server Details
- **Host**: 66.29.132.130
- **Username**: jmsfzikd
- **Port**: 22
- **Deployment Directory**: `/public_html/`
- **Domain**: jmsfagribusiness.com

### SSH Key Setup
Your SSH keys are already configured. The private key is used for automated deployments.

## 📁 Project Structure

```
jmsf/
├── .github/workflows/    # GitHub Actions workflows
├── public/               # Static assets
├── src/                  # React source code
├── deploy.sh            # Manual deployment script
└── package.json         # Dependencies
```

## 🔧 Build Process

The deployment process:
1. Installs dependencies (`npm ci`)
2. Builds the React app (`npm run build`)
3. Creates `dist/` directory with production files
4. Uploads files to Namecheap server
5. Sets proper file permissions

## 🚨 Troubleshooting

### Common Issues

**SSH Connection Failed**
- Verify SSH key is correctly added to GitHub secrets
- Check server IP and username
- Ensure SSH service is running on server

**Build Failed**
- Check for TypeScript/JavaScript errors
- Verify all dependencies are installed
- Review build logs in GitHub Actions

**Deployment Failed**
- Verify server has enough disk space
- Check file permissions on server
- Ensure deployment directory exists

### Manual SSH Test
```bash
ssh jmsfzikd@66.29.132.130
```

## 📞 Support

For deployment issues:
1. Check GitHub Actions logs
2. Verify server connectivity
3. Review build output for errors

## 🔄 Updating the Website

### For Content Updates
1. Make changes in your local repository
2. Test locally: `npm run dev`
3. Commit and push to `production` branch
4. GitHub Actions will automatically deploy

### For Code Changes
1. Work on `main` branch
2. Test on `staging` branch
3. Merge to `production` when ready
4. Automated deployment will handle the rest

---

**Website URL**: https://jmsfagribusiness.com
**Repository**: https://github.com/fadebowaley/jmsfAgribusiness
