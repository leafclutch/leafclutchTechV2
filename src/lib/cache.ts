const memCache = new Map<string, { data: unknown; expires: number }>();
const TTL = 5 * 60 * 1000; // 5 minutes

export function cacheGet<T>(key: string): T | null {
  const mem = memCache.get(key);
  if (mem && Date.now() < mem.expires) return mem.data as T;

  try {
    const stored = sessionStorage.getItem(`lc_${key}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Date.now() < parsed.expires) {
        memCache.set(key, parsed);
        return parsed.data as T;
      }
      sessionStorage.removeItem(`lc_${key}`);
    }
  } catch {}

  return null;
}

export function cacheSet<T>(key: string, data: T): void {
  const entry = { data, expires: Date.now() + TTL };
  memCache.set(key, entry);
  try {
    sessionStorage.setItem(`lc_${key}`, JSON.stringify(entry));
  } catch {}
}

export function cacheInvalidate(key: string): void {
  memCache.delete(key);
  try {
    sessionStorage.removeItem(`lc_${key}`);
  } catch {}
}

export function preloadImages(urls: (string | null | undefined)[]): void {
  urls.forEach((url) => {
    if (!url || url === "string") return;
    const img = new Image();
    img.src = url;
  });
}
