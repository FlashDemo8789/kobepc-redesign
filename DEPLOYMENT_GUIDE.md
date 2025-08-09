# GitHub Pages Deployment Guide

## Steps to Deploy to GitHub Pages

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `kobepc-demo` or any name you prefer
3. Make it public (required for GitHub Pages with custom domain)
4. Don't initialize with README (we already have one)

### 2. Push Code to GitHub
Run these commands in the project directory:

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit - Kobe PC multi-page website"

# Add your GitHub repository as origin (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**

### 4. Configure Custom Domain in Namecheap

**IMPORTANT: Never share your API key! Do these steps yourself:**

1. Log in to your Namecheap account
2. Go to **Domain List** → **Manage** for `flash.zone`
3. Click on **Advanced DNS** tab
4. Add these DNS records:

#### Add CNAME Record:
- **Type**: CNAME
- **Host**: demo
- **Value**: YOUR_USERNAME.github.io (replace with your GitHub username)
- **TTL**: Automatic

#### Or if using A Records (alternative):
Add these four A records:
- **Type**: A
- **Host**: demo
- **Value**: 185.199.108.153
- **TTL**: Automatic

- **Type**: A
- **Host**: demo
- **Value**: 185.199.109.153
- **TTL**: Automatic

- **Type**: A
- **Host**: demo
- **Value**: 185.199.110.153
- **TTL**: Automatic

- **Type**: A
- **Host**: demo
- **Value**: 185.199.111.153
- **TTL**: Automatic

### 5. Wait for DNS Propagation
- DNS changes can take 10 minutes to 48 hours to propagate
- GitHub Pages will automatically provision an SSL certificate
- You can check the status in your repository's Settings → Pages

### 6. Verify Deployment
Once deployed, your site will be available at:
- `https://demo.flash.zone`

## Troubleshooting

### If the site doesn't load:
1. Check GitHub Pages settings - ensure it shows "Your site is published"
2. Verify CNAME file exists in repository root
3. Check DNS propagation using: `nslookup demo.flash.zone`
4. Ensure repository is public

### If you see 404 errors:
1. Check that all file paths use forward slashes (/)
2. Ensure index.html is in the root directory
3. Verify all linked files exist in the repository

## Security Notes
- **NEVER** commit API keys, passwords, or sensitive data
- Use environment variables or GitHub Secrets for sensitive information
- Keep your Namecheap account secure with 2FA

## Repository Structure
```
kobepc-redesign/
├── index.html          # Homepage
├── CNAME              # Custom domain configuration
├── css/               # Stylesheets
├── js/                # JavaScript files
├── pages/             # All other pages
│   ├── about.html
│   ├── services.html
│   ├── pricing.html
│   ├── portfolio.html
│   ├── faq.html
│   ├── blog.html
│   ├── contact.html
│   └── services/      # Service sub-pages
└── images/            # Image assets (placeholder structure)
```