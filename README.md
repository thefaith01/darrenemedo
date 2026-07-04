# darrenemedo.com

Personal website for Darren Emedo. Single-page Next.js site: About, What I Do, Projects, Blog (live Substack feed), and Contact (form stored in Supabase).

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript (strict)
- **Tailwind CSS 3.4** — design tokens in `tailwind.config.ts` (placeholder palette; design pass pending)
- **Supabase** — contact form messages only, server-side service key (demo mode when keys absent)
- **Vercel** — hosting + darrenemedo.com domain
- Conventions mirror the CMM project (cmmarketplace.org): flat PascalCase `components/`, shared primitives in `components/ui.tsx`, helpers in `lib/`, `@/*` path alias.

## Where things live

- **All copy and links**: `lib/content.ts` — edit this one file to change bio text, headline, project cards, and social links. *The About/bio copy is a first draft — review before launch.*
- **Blog feed**: `lib/substack.ts` pulls the latest posts from the Substack RSS feed, cached for 1 hour; falls back to a static link if the feed is unreachable.
- **Contact form**: `components/ContactForm.tsx` → `POST /api/contact` (`app/api/contact/route.ts`) → `lib/db.ts` → Supabase `messages` table.

## Local development

```bash
npm install
cp .env.local.example .env.local   # optional — without Supabase keys the contact form runs in demo mode
npm run dev                        # http://localhost:3000
```

## Deployment (one-time setup)

1. **GitHub**: create an empty repo (e.g. `darrenemedo`) at github.com, then:
   ```bash
   git remote add origin https://github.com/<you>/darrenemedo.git
   git push -u origin main
   ```
2. **Supabase**: create a project, run `supabase-schema.sql` in the SQL editor, copy the project URL and service role key from Settings → API.
3. **Vercel**: Import the GitHub repo (framework auto-detects Next.js). Add environment variables `SUPABASE_URL` and `SUPABASE_SERVICE_KEY`.
4. **Domain**: Vercel project → Settings → Domains → add `darrenemedo.com` (same Vercel-nameservers pattern as surestep.coach).

After setup, every push to `main` auto-deploys.

## Reading contact messages

Messages land in the Supabase `messages` table (Table Editor → messages). RLS is enabled with no policies, so only the service role key can read them.
