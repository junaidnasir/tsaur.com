# Atlora 11i.sh Launch Notes

Atlora should be packaged under the new 11i.sh project-home direction, not as a new tsaur.com-facing project.

## Target URLs

- Primary project landing: `https://atlora.11i.sh/`
- Internal/legacy static path while hosted in this repo: `/atlora/index.html`
- GitHub: `https://github.com/junaidnasir/travel-planner-app`
- Bundle ID: `com.junaidnasir.atlora`

## Current implementation

- `public/atlora/index.html` is a self-contained editorial landing page using the existing Tsaur/11i design language.
- `vercel.json` rewrites host `atlora.11i.sh` to `/atlora/:path*`.
- `middleware.js` handles root requests for `atlora.11i.sh` → `/atlora/index.html` for parity with the Chalk root behavior.

## DNS / Vercel wiring still required

When the `11i.sh` domain is ready:

1. Add `11i.sh` to the Vercel project that serves this repo, or migrate to a renamed `11i.sh` project.
2. Add `atlora.11i.sh` as a domain/alias.
3. Point DNS for `atlora.11i.sh` to Vercel per their instructions.
4. Smoke test:
   - `https://atlora.11i.sh/` loads the Atlora page.
   - `https://atlora.11i.sh/atlora/index.html` is not required as public UX, but the static path should still exist.
5. If Universal Links are added later, add Associated Domains entitlement for `applinks:atlora.11i.sh` and host AASA under `.well-known/`.

## Copy direction

- Public line: “The command centre for trips that are already in motion.”
- AI principle: “AI proposes, you apply.”
- Avoid fake availability claims until TestFlight/App Store is live; use “Coming to TestFlight.”
