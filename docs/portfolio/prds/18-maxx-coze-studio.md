# PRD: MAXX Coze Studio
**Job:** private low-code agent/workflow builder for trained operators.
**To production:** pin upstream/version/license; minimize services; disable open registration and unsafe code/plugin surfaces; isolate runners; add auth/RBAC, SSRF/egress controls, secrets vault, audit logs, backups, upgrade test, and private-network deployment on Max's server; define what StarNet owns versus Coze.
**Acceptance:** private clean install, role/tenant tests, hostile plugin/workflow tests, backup/restore, one approved workflow exported and invoked through a narrow API.
**Stops:** no public exposure until upstream-documented SSRF, code execution, registration, and authorization risks are closed.
