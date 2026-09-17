# Setup

1. Install Node.js 20 or newer.
2. Run `npm test` and `npm run check`.
3. Run `npm start` and open `http://127.0.0.1:8787`.
4. Add `MACS_COMMAND_TOKEN` before exposing the service beyond the local machine.
5. Configure connectors one at a time from their own scoped secrets. Do not commit secrets.
6. Use `npm run report` for the local daily report.

For a team installation, ACFS is an optional developer tool, not a runtime dependency. Follow its pinned upstream documentation rather than piping remote scripts blindly.
