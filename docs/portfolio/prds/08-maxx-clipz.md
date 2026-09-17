# PRD: Maxx Clipz
**Job:** turn an owned/licensed long video into reviewed short clips with captions and crops.
**To production:** verify upload/YouTube rights flow, queue limits/retries, FFmpeg isolation, face/caption quality, provider costs, deletion/retention, moderation, export formats, concurrency, auth, email, billing sandbox, webhook idempotency, quotas, backups, and GPU/CPU sizing on Max's server; gauntlet the landing/pricing pages.
**Acceptance:** real licensed videos complete across aspect ratios; humans visually approve clips; failures refund quotas correctly; sandbox upgrade/cancel/webhook paths pass; no default prices go live without Max's confirmation.
**Stops:** no “viral” guarantee, no rights inference, no live charge before pricing and payment approval.
