// Helper to build correct URLs for assets in /public across preview + published environments.
export function publicUrl(path: string) {
  // In dev/preview BASE_URL is "/", in production build it's "/packwave/"
  const base = import.meta.env.BASE_URL || "/";
  // Remove leading slash from path if present
  const clean = path.startsWith("/") ? path.slice(1) : path;
  // Ensure base ends with /
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${clean}`;
}
