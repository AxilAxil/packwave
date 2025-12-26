// Helper to build correct URLs for assets in /public across preview + published environments.
export function publicUrl(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${clean}`;
}
