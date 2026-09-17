# PRD: MACS back office on ERPNext
**Job:** manage confirmed clients, projects, work, invoices, and operations in a separate back-office authority.
**To production:** decide fork-vs-upstream deployment; document MACS deltas; pin ERPNext/Frappe versions; map roles/data retention; test migrations, backups, restore, audit logs, email, invoice numbering, tax/accounting review, and upgrades; expose narrow APIs to MAXX with least privilege.
**Acceptance:** clean install on Max's server; role tests; backup/restore rehearsal; one synthetic quote-to-project journey; MAXX cannot approve payments or alter accounting authority.
**Stops:** no real accounting data or invoices before owner/accounting review; do not market upstream features as custom work.
