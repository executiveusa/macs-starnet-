# Build contract

## Intent
A private, nontechnical command center operated through MAXX.

## Gates
1. Builder implements one bounded slice.
2. OCR reads the rendered pixels and records visible text.
3. Judge compares the render, runtime state, policy, and task contract.
4. Preview is staged to Coolify only after local gates pass.
5. Production requires a separate approval.

## Release blockers
- simulated connector state or invented clients
- any persona change to MAXX
- secret in frontend or repository
- trade, transfer, wallet-sign, wager, or betting execution path
- publishing, external communication, or Bluehost mutation without approval
- production deployment without separate approval
