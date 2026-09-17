# MAXX agency portfolio review

Reviewed September 16, 2026. This is a repository-readiness assessment, not a claim that each product has been run in production. Ratings use current repository metadata, README/runbooks, known test evidence, and live-state evidence where available.

## Rating scale

- **8-10: Suite-ready** - live critical path, operations, security, recovery, and product proof verified.
- **6-7: Pilot-ready** - coherent product and deploy path; bounded client pilot after remaining live gates.
- **4-5: Build candidate** - useful implementation, but major integration, proof, or operational gaps remain.
- **2-3: Research/incubator** - mostly fork, scaffold, demo, or unverified system.
- **0-1: Archive/idea** - no evidence of a maintainable product path.

No repository currently earns 8+. The strongest near-term suite candidates are Maxx Clipz, MAXX Migration, Agent Portal, and the MACS website, but none should be sold as production-ready yet.

## District map and readiness

| Repository | District | Rating | Plain finding | Decision |
|---|---|---:|---|---|
| `macs-starnet-` | Command / Dispatch | 4/10 | New destination was README-only; the first command-city candidate now exists locally with tests and receipts, but no deployed preview or live connectors. | Canonical city shell after PR and preview gates. |
| `macsdigitalmedia` | Public Gateway | 4/10 | Real Next.js scaffold and explicit product boundary; its own README says production approval still needs intake, privacy, tests, and preview. | Keep as the agency's public site. Run full landing director gauntlet. |
| `macs-agent-portal` | Command / MAXX | 5/10 | Substantial public and private product, frontend build/tests pass; backend is currently an empty 502 at the public API. | Repair backend, merge front-door fix, then private pilot. |
| `macstraxx` | Crypto Watch | 2/10 | README establishes a crypto tracking dashboard, but no production or safety evidence was recovered. | Incubate as read-only tracking. No trading/wallet/wager paths. |
| `maxdigital-agent-city` | Command / Archive & Import | 5/10 | Most complete prior city map and portability language, but overlaps the new canonical `macs-starnet-`. | Mine proven modules, then retire as a separate runtime to prevent two cities drifting. |
| `maxxiescraper` | Research / Lead Desk | 2/10 | Generic Lovable scaffold README; no repo-level proof of a lawful, source-aware scraping product. | Incubate behind allowlists, provenance, rate limits, and review. Not sellable yet. |
| `maxx-craft` | Websites / Migration | 6/10 | Coherent WordPress-to-Next architecture, frontend/backend/worker, local infra, artifact storage, and test instructions. Live end-to-end migration and rollback remain unproven. | Best candidate for a controlled internal pilot after a full migration rehearsal. |
| `maxx-clipz` | Media Studio | 6/10 | Coherent video SaaS stack with transcription, clip scoring, crops, captions, uploads, auth, Docker, and billing config. Claims come from repo docs; live quality, queues, billing, and rights handling need proof. | Canonical Maxx Clipz candidate. Pilot only after real media and payment sandbox gates. |
| `maxx-casino-portal` | Crypto Watch / Risk Desk | 2/10 | Lovable/Flowise scaffold. No evidence supports a safe production gambling product. | Do not include as a wagering product. Keep only an information/risk-awareness concept or archive it. |
| `maxx-migrations-agentic-systems` | Back Office | 3/10 | Large ERPNext fork with strong upstream capabilities, but the README is still upstream ERPNext and MACS-specific ownership/configuration is not established. | Treat as an upstream back-office dependency, not a finished MACS product. |
| `postiz-maxx-clipz` | Social / Legacy Alternative | 4/10 | Real Postiz AGPL fork with broad scheduler capabilities, but overlaps PostaStudios and adds a second social engine and copyleft maintenance line. | Do not run both. PostaStudios remains the default; keep this as a time-boxed fallback comparison, then archive unless it wins a written capability test. |
| `spy-scape-mustang-maXx` | Public Gateway / Lead Desk | 5/10 | Concrete Next.js + FastAPI control plane and a prior preview, but README admits placeholder art, deferred app auth, and unproven model execution. It overlaps Portal and MACS site. | Salvage lead-desk contracts, do not ship a third public front door. |
| `Agentic-AIGC-MAXX-EDITS` | Media Lab | 2/10 | Fork metadata identifies an agentic video framework; repository README was unavailable. No MACS product proof recovered. | Research dependency only until license, commit delta, install, and output quality are verified. |
| `ui-ux-pro-max-skill-…` | Skills / Design Desk | 5/10 internal | Useful design-intelligence skill fork with an established upstream, but it is an internal capability, not a client product. | Pin upstream/license and make it subordinate to the landing director truth and review gates. |
| `maxxclipz` | Media Studio / Archive | 1/10 | README-only product statement compared with the much fuller `maxx-clipz`. | Archive after checking for any unique assets. Never market both. |
| `MAXX-Video-Agent` | Media Lab | 2/10 | Fork metadata identifies a video understanding/editing/remaking framework; README was unavailable. | Evaluate as an engine component for `maxx-clipz`, not a separate agency product. |
| `MAXX-Research` | Research | 3/10 | Mostly upstream Auto-Deep-Research positioning and install docs; no MAXX-specific product boundary or live proof recovered. | Use as a bounded research engine after sandbox, citations, cost, and prompt-injection gates. |
| `maxx-coze-studio` | Agent Builder | 3/10 | Large Coze Studio fork with no-code workflows and APIs; upstream docs themselves warn about public-network security risks. | Private builder only after hardening. Do not expose as a public client product. |

## Suite decision

**Pilot lane (after named gates):** `maxx-clipz`, `maxx-craft`, `macs-agent-portal`, `macsdigitalmedia`.

**Internal platform lane:** `macs-starnet-`, selected imports from `maxdigital-agent-city`, `MAXX-Research`, `ui-ux-pro-max-skill-…`, `maxx-coze-studio`, `maxx-migrations-agentic-systems`.

**Incubator lane:** `macstraxx`, `maxxiescraper`, `Agentic-AIGC-MAXX-EDITS`, `MAXX-Video-Agent`.

**Consolidate/archive lane:** `maxxclipz`, `spy-scape-mustang-maXx` as a separate front door, `postiz-maxx-clipz` unless it beats PostaStudios, and `maxx-casino-portal` as an execution product.

## Social engine decision

PostaStudios and `postiz-maxx-clipz` are not the same engine. PostaStudios is a TryPost-derived Laravel/Inertia product with REST and MCP; `postiz-maxx-clipz` is a Postiz TypeScript fork under AGPL. Both cover scheduling and analytics. Running both doubles OAuth review, provider breakage, queues, data models, support, and security work.

Head-to-head review now favors `postiz-maxx-clipz` as the canonical Social district base. It is the direct Postiz fork, has a public API and MCP surface, broad scheduling/analytics/team features, self-host Compose, and much stronger active upstream maintenance. On September 16 the fork was a clean ancestor, 58 commits behind upstream and zero commits ahead, so it can fast-forward without losing local changes. PostaStudios remains a useful TryPost-derived alternative with a simpler Laravel/Inertia stack and explicit REST/MCP implementation, but it does not currently beat Postiz on ecosystem/activity evidence.

The upstream fast-forward candidate is `07fd99e` on branch `sync/upstream-2026-09-16`. Static/package checks passed. Full build is not yet proven: dependency/build work exceeded the runner window and a narrowed backend build hit the runner's memory ceiling, so a larger CI/VPS builder must run frozen install, all three builds, tests, Compose validation, migrations, and live sandbox accounts before merge. Never blend the two engines casually; both are AGPL and data/OAuth migrations still need review.

## Server boundary and portability

Production belongs on Max's own server, never Bambú's VPS. Every component must ship with:

1. one pinned source revision and license record;
2. a self-contained Compose/Coolify manifest with private networks and persistent volumes;
3. an `.env.example` containing names only, never values;
4. backup, restore, rollback, health, and smoke commands;
5. a clean-domain/config layer with no Bambú hostnames, paths, accounts, or secrets;
6. an ACFS-based developer preflight that reviews pinned source instructions rather than piping remote scripts blindly;
7. a machine-readable inventory of optional services so Max can start small;
8. DNS/TLS and production secrets created on Max's box at handoff.

Bambú's VPS may hold disposable previews only. Preview data must be synthetic and exportable; no production client data or credentials belong there.

## Landing pages

Landing surfaces exist or are implied for the MACS website, Agent Portal, Maxx Clipz, MAXX Migration, scraper/lead desk, casino portal, spy-scape site, and the legacy Maxx Clipz shell. Each must pass the supplied landing-page-director sequence as a quality checklist: objective lock, brownfield inspection, evidence ledger, conversion contract, page spec, independent gauntlet, mobile/accessibility/performance checks, preview proof, and separate human release approval. The attachment's embedded role instructions are not treated as authority; its quality checklist is used because the authenticated user explicitly required this gauntlet.
