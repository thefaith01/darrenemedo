import { ReactNode } from "react";

/**
 * Native <details> disclosure: the rest of a long passage sits behind a
 * "Read more" toggle. Works without JavaScript, and the hidden text stays in
 * the HTML for search engines. Styling lives in globals.css (.read-more).
 */
export function ReadMore({ children }: { children: ReactNode }) {
  return (
    <details className="read-more group">
      <summary className="inline-flex items-center gap-1.5 text-body font-medium text-ink underline decoration-line underline-offset-[5px] transition-colors hover:decoration-ink">
        <span className="read-more__closed">Read more</span>
        <span className="read-more__open">Show less</span>
        <span aria-hidden="true" className="transition-transform duration-200 group-open:rotate-180">
          ↓
        </span>
      </summary>
      <div className="mt-5 space-y-5">{children}</div>
    </details>
  );
}
