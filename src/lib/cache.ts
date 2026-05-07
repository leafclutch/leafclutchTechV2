const memCache = new Map<string, { data: unknown; expires: number }>();
const TTL = 4 * 60 * 60 * 1000; // 4 hours — persists across refreshes, realtime keeps it fresh

export function cacheGet<T>(key: string): T | null {
  const mem = memCache.get(key);
  if (mem && Date.now() < mem.expires) return mem.data as T;

  try {
    const stored = localStorage.getItem(`lc_${key}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Date.now() < parsed.expires) {
        memCache.set(key, parsed);
        return parsed.data as T;
      }
      localStorage.removeItem(`lc_${key}`);
    }
  } catch {}

  return null;
}

// Returns cached data even if stale — for show-immediately-then-refresh (SWR) pattern
export function cacheGetStale<T>(key: string): T | null {
  const mem = memCache.get(key);
  if (mem) return mem.data as T;

  try {
    const stored = localStorage.getItem(`lc_${key}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      memCache.set(key, parsed);
      return parsed.data as T;
    }
  } catch {}

  return null;
}

export function cacheSet<T>(key: string, data: T): void {
  const entry = { data, expires: Date.now() + TTL };
  memCache.set(key, entry);
  try {
    localStorage.setItem(`lc_${key}`, JSON.stringify(entry));
  } catch {}
}

export function cacheInvalidate(key: string): void {
  memCache.delete(key);
  try {
    localStorage.removeItem(`lc_${key}`);
  } catch {}
}

const inflight = new Map<string, Promise<unknown>>();

export function dedupe<T>(key: string, fn: () => Promise<T>): Promise<T> {
  const existing = inflight.get(key);
  if (existing) return existing as Promise<T>;
  const promise = fn().finally(() => inflight.delete(key));
  inflight.set(key, promise);
  return promise;
}

export function preloadImages(urls: (string | null | undefined)[]): void {
  urls.forEach((url) => {
    if (!url || url === "string") return;
    const img = new Image();
    img.src = url;
  });
}
