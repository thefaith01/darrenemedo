import { blog } from "@/lib/content";
import { fetchLatestPosts, formatPostDate } from "@/lib/substack";
import { Section, SectionHeader, ui } from "@/components/ui";

export async function BlogSection() {
  const posts = await fetchLatestPosts(3);

  return (
    <Section id="blog" className="border-y border-line bg-paper">
      <SectionHeader eyebrow="Writing" title={blog.heading} subtitle={blog.subtitle} />
      {posts.length > 0 ? (
        <div data-reveal className="divide-y divide-line">
          {posts.map((post) => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener"
              className="group grid gap-1 py-5 no-underline transition-colors duration-200 sm:grid-cols-[140px_1fr] sm:items-baseline sm:gap-6"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-faint">
                {formatPostDate(post.pubDate)}
              </p>
              <div>
                <h3 className="font-display text-lg font-normal leading-snug text-ink transition-colors duration-200 group-hover:text-ink/70">
                  {post.title}
                </h3>
                {post.snippet && (
                  <p className="mt-1 text-sm leading-relaxed text-muted">{post.snippet}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-line bg-paper p-9 text-center">
          <p className="text-sm text-muted">Latest posts couldn&apos;t be loaded right now.</p>
        </div>
      )}
      <div className="mt-6">
        <a href={blog.substackUrl} target="_blank" rel="noopener" className={ui.link}>
          READ ALL POSTS ON SUBSTACK →
        </a>
      </div>
    </Section>
  );
}
