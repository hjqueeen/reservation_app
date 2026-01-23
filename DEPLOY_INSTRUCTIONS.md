# GitHub Pages Deployment Guide

## How to add the workflow file

Because of Personal Access Token permission issues, the workflow file was excluded from the repository. Choose one of the following methods:

### Method 1: Add via GitHub web UI (recommended)

1. Go to the GitHub repository: https://github.com/hjqueeen/reservation_app
2. Create the `.github/workflows/` folder if it does not exist
3. Create a `deploy.yml` file and paste the content below:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        env:
          GITHUB_REPOSITORY_NAME: ${{ github.event.repository.name }}
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Method 2: Fix Personal Access Token permissions

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Select the token you are using or create a new one
3. Enable the `workflow` scope
4. Update the token and push again

### Method 3: Use SSH keys

If you use SSH keys, you can push the workflow file directly without PAT issues.

## GitHub Pages settings

1. Go to repository **Settings** → **Pages**
2. Set **Source** to **\"GitHub Actions\"**
3. Save

## Verify deployment

Pushing to the `main` branch will automatically trigger build and deployment.  
Deployed site: `https://hjqueeen.github.io/reservation_app/`
