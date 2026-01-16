# GitHub Website Setup Guide

## 1. Install Git (if not already installed)

```bash
# macOS (using Homebrew)
brew install git

# Or download from: https://git-scm.com/downloads
```

## 2. Configure Git (first time only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 3. Create a GitHub Account

1. Go to https://github.com
2. Sign up for a free account
3. Verify your email address

## 4. Create a New Repository on GitHub

1. Click the **+** icon (top right) → **New repository**
2. Enter a repository name (e.g., `my-portfolio`)
3. Choose **Public** or **Private**
4. Do NOT initialize with README (leave unchecked)
5. Click **Create repository**

## 5. Initialize Your Local Project

```bash
# Navigate to your project folder
cd /path/to/your/project

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit"
```

## 6. Connect to GitHub

```bash
# Add the remote repository (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 7. Enable GitHub Pages (for static hosting)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select **GitHub Actions**
4. Choose the **Static HTML** workflow or create custom workflow

## 8. Create GitHub Actions Workflow (for SvelteKit)

Create file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## 9. Update svelte.config.js for GitHub Pages

```javascript
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME' : ''
    }
  }
};
```

## 10. Push Changes

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push
```

## 11. Verify Deployment

- Go to **Settings** → **Pages**
- Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Common Git Commands Reference

| Command | Description |
|---------|-------------|
| `git status` | Check current changes |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Commit with message |
| `git push` | Push to GitHub |
| `git pull` | Pull latest changes |
| `git log` | View commit history |

---

## Troubleshooting

### Authentication error?

- Use a Personal Access Token: GitHub → Settings → Developer settings → Personal access tokens
- Or set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### Push rejected?

```bash
git pull --rebase origin main
git push
```
