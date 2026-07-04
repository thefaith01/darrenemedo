import { blog } from "@/lib/content";

export type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  snippet: string;
};

function textBetween(xml: string, tag: string): string {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!m) return "";
  return m[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

/**
 * Fetches the latest posts from the Substack RSS feed. Cached via ISR for an
 * hour; returns [] on any failure so the Blog section can fall back to a
 * static link card.
 */
export async function fetchLatestPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const res = await fetch(blog.feedUrl, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();

    return xml
      .split("<item>")
      .slice(1, limit + 1)
      .map((item) => {
        const snippet = textBetween(item, "description");
        return {
          title: textBetween(item, "title"),
          link: textBetween(item, "link"),
          pubDate: textBetween(item, "pubDate"),
          snippet: snippet.length > 180 ? `${snippet.slice(0, 177)}...` : snippet,
        };
      })
      .filter((p) => p.title && p.link);
  } catch {
    return [];
  }
}

export function formatPostDate(pubDate: string): string {
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
