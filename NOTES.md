# Notes

## Decisions

- 2026-11-11: Named exports only. Import names stay consistent and refactoring tools work better.
- 2026-11-11: `interface` for object shapes. `type` for unions (enforced by typescript-eslint stylistic).
- 2026-11-11: Dates stored as `YYYY-MM-DD` strings because they will go through JSON.
- 2026-11-08: Chose Express over Fastify, since it's more common in job postings.

## Open questions

- MUI vs Tailwind: decide when making the form.
