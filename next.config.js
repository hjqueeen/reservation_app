/** @type {import('next').NextConfig} */
// On GitHub Pages we use the repository name as basePath
const repositoryName =
  process.env.GITHUB_REPOSITORY_NAME ||
  process.env.NEXT_PUBLIC_BASE_PATH ||
  "reservation_app";

const isDocker = process.env.DOCKER === "true";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isDevelopment = process.env.NODE_ENV === "development";

// Inside Docker containers we keep basePath empty (root path)
// Only GitHub Actions + Pages will use a non-empty basePath
// In development, always use empty basePath
const basePath = isDevelopment 
  ? "" 
  : !isDocker && isGitHubActions 
    ? `/${repositoryName}` 
    : "";

const nextConfig = {
  // Use standalone output for Docker production, static export for GitHub Pages
  // In development mode, output setting is ignored by Next.js
  ...(isDocker && !isDevelopment ? { output: "standalone" } : {}),
  ...(!isDocker && !isDevelopment ? { output: "export" } : {}),
  // Only set basePath if it's not empty
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    // GitHub Pages does not support image optimization
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'files.pengueen.de', pathname: '/**' },
      { protocol: 'https', hostname: 'files.pengueen.de', pathname: '/api/download/**' },
    ],
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
