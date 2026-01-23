/**
 * Utility to build image paths considering GitHub Pages basePath
 */
export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // If basePath exists, prepend it; otherwise just use the original path
  return `${basePath}${path}`;
}
