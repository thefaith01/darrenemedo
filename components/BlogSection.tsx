import { blog } from "@/lib/content";
import { fetchLatestPosts, formatPostDate } from "@/lib/substack";
import { Section, SectionHeader, ui } from "@/components/ui";

export async function BlogSection() {
  const posts = await fetchLatestPosts(3);

  return (
    <Section id="blog">
      <SectionHeader
        eyebrow="Writing"
        title={blog.heading}
        subtitle="Latest from He Who Has Ears, my Substack."
      />
      {posts.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener"
              className="block rounded-[18px] border border-line bg-paper p-5 no-underline shadow-sm transition hover:shadow-md"
            >
              <p className="text-xs text-faint">{formatPostDate(post.pubDate)}</p>
              <h3 className="mt-1.5 font-display text-[16px] font-bold leading-snug text-ink">
                {post.title}
              </h3>
              {post.snippet && (
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.snippet}</p>
              )}
            </a>
          ))}
        </div>
      ) : (
        <div className="rounded-[18px] border border-dashed border-line bg-paper/60 p-8 text-center">
          <p className="text-sm text-muted">Latest posts couldn&apos;t be loaded right now.</p>
        </div>
      )}
      <div className="mt-6">
        <a href={blog.substackUrl} target="_blank" rel="noopener" className={ui.link}>
          Read all posts on Substack →
        </a>
      </div>
    </Section>
  );
}
