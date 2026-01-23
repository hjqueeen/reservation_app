/** @type {import('next').NextConfig} */
// On GitHub Pages we use the repository name as basePath
const repositoryName =
  process.env.GITHUB_REPOSITORY_NAME ||
  process.env.NEXT_PUBLIC_BASE_PATH ||
  "reservation_app";

const isDocker = process.env.DOCKER === "true";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

// Inside Docker containers we keep basePath empty (root path)
// Only GitHub Actions + Pages will use a non-empty basePath
const basePath = !isDocker && isGitHubActions ? `/${repositoryName}` : "";

const nextConfig = {
  // Use standalone output for Docker, static export for GitHub Pages
  output: isDocker ? "standalone" : "export",
  basePath,
  assetPrefix: basePath,
  images: {
    // GitHub Pages does not support image optimization
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
