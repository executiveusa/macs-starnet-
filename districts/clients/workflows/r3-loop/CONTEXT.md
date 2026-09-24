# MACS R3 Loop — context

## What this is

A reusable client workflow for service businesses:

**Review → Reward → Return**

It is not a standalone SaaS product and it does not require Shopify. The workflow can start from a completed visit, a QR scan, a CSV export, a manual customer list, or a future approved connector.

## Core promise

Turn a completed customer experience into:
1. private feedback,
2. an optional owner-approved thank-you reward,
3. an optional honest public review,
4. an easy return path,
5. measurable evidence.

The system is useful even when the public-review step is skipped.

## Pilot state

Crown & Core is the first implementation candidate. The customer-facing pilot is in `executiveusa/crown-and-core`.

**Important:** Crown & Core is still in discovery. Do not treat the workflow as an approved client program and do not send customer messages until the owner approves audience, wording, timing, reward, and data access.

## Workflow

VISIT / IMPORT
→ ELIGIBILITY
→ REQUEST PRIVATE FEEDBACK
→ RECORD FEEDBACK
→ ISSUE OWNER-APPROVED THANK-YOU
→ OPTIONAL PUBLIC REVIEW / BOOKING / REFERRAL
→ MEASURE
→ REPORT
→ OWNER DECIDES KEEP / CHANGE / STOP

## Hard rules

- A reward is never conditional on a positive rating or a public review.
- Do not review-gate.
- Do not contact imported customers unless the business can lawfully contact them through the selected channel.
- Client data stays client-owned.
- Public/mobile surfaces never expose stored feedback rows.
- First deployments are small tests with explicit owner approval.
- No revenue claim, review-count claim, or return-rate claim without measured evidence.

## Presentation contract

Client-facing material follows two upstream MIT-licensed skills:

- ADHD output contract: `ayghri/i-have-adhd`, `skills/i-have-adhd/SKILL.md` @ blob `9138ae4af11065b7971eea17edc48a2498c1af35`.
  - next action is obvious
  - smallest useful working set
  - numbered bounded steps
  - visible progress
  - no filler/preamble
  - matter-of-fact errors
- ELI5 audience contract: `DreambigOu/ELI5`, `skills/eli5/SKILL.md` @ blob `b0644b6cbc4839749aeecf0b340074be9e88f475`.
  - lead with what it is
  - explain why it matters
  - business owners get outcome/decision language, not implementation jargon
  - one idea per sentence when complexity is low

For owner meetings, default to respectful business language. Never talk down to the owner.

## Evidence

Every run should retain:
- cohort definition
- channel
- messages approved
- reward approved
- requests sent
- feedback received
- review clicks
- booking clicks
- redemptions when available
- return bookings when attributable
- owner decision

Do not fill missing metrics with estimates.
