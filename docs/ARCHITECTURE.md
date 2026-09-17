# Architecture

MACS Command City uses the useful FirstMate pattern: one captain-facing surface, explicit task briefs, bounded worker lanes, durable receipts, and checks before completion. It does not copy FirstMate code.

The local Node service owns data and credentials. The browser receives no secrets. Connectors begin disconnected and their status is literal. `config/policies.json` is the central action gate. MAXX is the primary interface and dispatcher; imported Hermes or upstream harness changes are allowed only when they do not rewrite MAXX's persona.

## Instinct relay

1. MAXX creates an outbound envelope with a correlation ID and idempotency key.
2. The relay accepts only allowlisted task fields and a scoped outbound token.
3. Instinct dispatches work outside this repo.
4. A callback arrives on a separate route with a separate token.
5. MAXX records the receipt before changing UI status.
6. Replayed callbacks return the original receipt and do not repeat work.

## Upstream use

The reusable skills library comes from `executiveusa/pauli-starnet` at the pinned commit recorded in `UPSTREAM_SOURCES.md`. FirstMate informs orchestration shape. The ACFS repository informs developer setup and verification. Third-party names and artwork are not copied into the product shell.
