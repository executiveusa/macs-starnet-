# PRD: Agent MAXX portal
**Job:** public introduction plus a private, authenticated command center for Max.
**To production:** merge public-root route fix; recover the 502 backend; verify Caddy path stripping/upstream, container health, Supabase allowlist, pinned Hermes, approval lifecycle, voice, persistence, backup/restore, and browser mutation isolation; run landing gauntlet on public surface only.
**Acceptance:** `/` is public; `/signin` and `/dashboard` are correct; unapproved users fail; one normal and one MAXX-mode request complete through Hermes with receipts; restart preserves state.
**Stops:** no production claim until live auth-to-result passes; MAXX persona cannot be changed by upstream sync.
