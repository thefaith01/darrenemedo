-- Contact form messages for darrenemedo.com
-- Run in the Supabase SQL editor. Only the service role can read/write:
-- RLS is enabled with no policies, so the anon key has no access (same
-- pattern as the SureStep tables).

create table if not exists messages (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  message    text not null,
  created_at timestamptz not null default now()
);

alter table messages enable row level security;
