import { blog } from "@/lib/content";
import { fetchLatestPosts, formatPostDate } from "@/lib/substack";
import { Section, SectionHeader, ui } from "@/components/ui";

export async function BlogSection() {
  const posts = await fetchLatestPosts(3);

  return (
    <Section id="blog" className="border-y border-line bg-paper">
      <SectionHeader eyebrow="Writing" title={blog.heading} subtitle={blog.subtitle} />
      {posts.length > 0 ? (
        <div data-reveal className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener"
              className="clipping-card block rounded-sm border border-line bg-base p-5 no-underline transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(42,32,22,0.2)]"
            >
              <p className="font-serif text-xs italic text-faint">{formatPostDate(post.pubDate)}</p>
              <h3 className="mt-2 font-display text-[16px] font-bold leading-snug text-ink">
                {post.title}
              </h3>
              {post.snippet && (
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.snippet}</p>
              )}
            </a>
          ))}
        </div>
      ) : (
        <div className="rounded-sm border border-dashed border-gold/40 bg-base/60 p-9 text-center">
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
