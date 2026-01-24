import type { MediumRSSResponse } from "./types";

/**
 * Fetches the latest posts for a given Medium username.
 * Uses rss2json as a proxy to bypass CORS and convert RSS to JSON.
 */
export const fetchMediumPosts = async (
  username: string
): Promise<MediumRSSResponse> => {
  const rssUrl = `https://medium.com/feed/@${username.replace("@", "")}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
    rssUrl
  )}`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch medium posts");
  }

  const data: MediumRSSResponse = await response.json();
  if (data.status !== "ok") {
    throw new Error("Medium feed not found or invalid");
  }

  return data;
};

/**
 * Helper to strip HTML tags and get a clean snippet
 */
export const getCleanSnippet = (html: string, length: number = 150): string => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const text = doc.body.textContent || "";
  return text.length > length ? text.substring(0, length) + "..." : text;
};

/**
 * Helper to extract the first image source from HTML content
 */
export const getFirstImage = (html: string): string | null => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const img = doc.querySelector("img");
  return img ? img.src : null;
};

/**
 * Attempts to extract reading time string directly from Medium content.
 */
export const extractReadTime = (html: string): string | null => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const text = doc.body.textContent || "";
  const match = text.match(/(\d+\s+min\s+read)/i) || text.match(/(\d+\s+min)/i);
  return match ? match[0] : null;
};

/**
 * Manual calculation fallback (if needed, though user requested 'from medium only')
 */
export const calculateReadTime = (html: string): string => {
  const wordsPerMinute = 200;
  const text =
    new DOMParser().parseFromString(html, "text/html").body.textContent || "";
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};
