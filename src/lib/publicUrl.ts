// Helper to build correct URLs for assets in /public across preview + published environments.
export function publicUrl(path: string) {
  const envBase = import.meta.env.BASE_URL || "/";
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const normalizedEnvBase = envBase.endsWith("/") ? envBase : `${envBase}/`;

  // If the runtime URL doesn't include the configured base (common in preview/dev),
  // fall back to root so public assets still resolve.
  const runtimeBase =
    typeof window !== "undefined" &&
    normalizedEnvBase !== "/" &&
    !window.location.pathname.startsWith(normalizedEnvBase)
      ? "/"
      : normalizedEnvBase;

  return `${runtimeBase}${clean}`;
}

