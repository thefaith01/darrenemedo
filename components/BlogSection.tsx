import { blog } from "@/lib/content";
import { fetchLatestPosts, formatPostDate } from "@/lib/substack";
import { Section, SectionHeader, ui } from "@/components/ui";

export async function BlogSection() {
  const posts = await fetchLatestPosts(3);

  return (
    <Section id="blog" className="border-y border-line bg-paper">
      <SectionHeader title={blog.heading} subtitle={blog.subtitle} />
      {posts.length > 0 ? (
        <div data-reveal className="divide-y divide-line border-y border-line">
          {posts.map((post) => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener"
              className="group grid gap-1 py-6 no-underline sm:grid-cols-[150px_1fr] sm:items-baseline sm:gap-8"
            >
              <p className="text-sm text-muted">{formatPostDate(post.pubDate)}</p>
              <div className="max-w-measure">
                <h3 className="font-display text-[1.375rem] font-normal leading-snug text-ink underline decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-ink/40">
                  {post.title}
                </h3>
                {post.snippet && <p className="mt-1.5 text-body text-muted">{post.snippet}</p>}
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-body text-muted">
          The latest posts couldn&apos;t be loaded right now.
        </p>
      )}
      <div className="mt-8">
        <a href={blog.substackUrl} target="_blank" rel="noopener" className={ui.link}>
          Read all posts on Substack →
        </a>
      </div>
    </Section>
  );
}
