# GitHub Pages Deployment Troubleshooting Guide

## When the page does not appear

### 1. Check GitHub Actions
1. Go to the **Actions** tab of the repository
2. Check the most recent workflow run
3. Confirm that the build has succeeded
4. If there are errors, inspect the logs

### 2. Check GitHub Pages settings
1. Go to **Settings** → **Pages**
2. Ensure **Source** is set to **\"GitHub Actions\"**
3. You do not need to set a branch when using GitHub Actions

### 3. Check environment permissions
1. Go to **Settings** → **Environments** → **github-pages**
2. Ensure **Deployment branches** is set to **\"All branches\"** or **\"main\"**
3. If necessary, enable **\"Allow all actors\"**

### 4. Manually trigger the workflow
1. Go to the **Actions** tab
2. Select the **\"Deploy to GitHub Pages\"** workflow
3. Click the **\"Run workflow\"** button
4. Select the **main** branch and run

### 5. Check build artifacts
1. In **Actions**, click the latest run
2. Check the **build** job
3. Confirm that the **\"Upload artifact\"** step succeeded
4. Ensure that the **\"out\"** folder was generated

### 6. Check the URL
Deployed site URL:
- `https://hjqueeen.github.io/reservation_app/`

**Note**: The URL must end with a trailing slash (`/`).

### 7. Clear browser cache
- Ctrl+Shift+R (Windows/Linux)
- Cmd+Shift+R (Mac)

### 8. Check deployment status
1. Go to **Settings** → **Pages**
2. Confirm that you see the **\"Your site is live at\"** message
3. Make sure the deployment status is **\"Active\"**

## Common issues

### Issue: 404 error
- **Cause**: Incorrect `basePath` configuration
- **Fix**: Ensure `repositoryName` in `next.config.js` matches the repository name

### Issue: Build failure
- **Cause**: Dependency issues or build errors
- **Fix**: Check error messages in the Actions log

### Issue: Page loads but styles/images are missing
- **Cause**: `assetPrefix` misconfiguration
- **Fix**: Verify `next.config.js` settings

## Debugging checklist

- [ ] Has the GitHub Actions workflow run?
- [ ] Did the build succeed?
- [ ] Is the Pages Source set to \"GitHub Actions\"?
- [ ] Is the URL correct? (includes repository name)
- [ ] Have you cleared the browser cache?
- [ ] Has the deployment completed? (may take a few minutes)
