# Content Brief — tsaur.com (index update) + chalk.tsaur.com landing

## tsaur.com — Content Updates

### Identity
- Owner: Junaid Nasir
- Location: London, UK (NOT Brooklyn)
- GitHub: github.com/junaidnasir
- Personal site: junaidnasir.com
- Email: junaid@tsaur.com (public-facing, use this even if catch-all)

### Hero Lede
Replace: "A [something] for everything I'm building — a chalk-powered editor, a slow-travel app, essays, and the occasional half-broken experiment."
With something like: "A home for everything I'm building — a pool tracker, a few ideas taking shape, and whatever comes next."

### Projects (keep 4 total: 1 live + 3 coming soon)

1. **Chalk** (chalk.tsaur.com) — LIVE
   - Color: vermillion (#d24317)
   - Tags: IOS, POOL, LIVE
   - Subtitle: "British 8-ball pool, scored properly"
   - Description: "Shot-by-shot frame scoring, deep analytics, real-time multiplayer, and cloud sync for British 8-ball pool. Built with SwiftUI."
   - Year: 2024 — ongoing
   - Link: chalk.tsaur.com (also App Store: https://apps.apple.com/app/chalk-pool-scoring/id6744640806)

2. **Atlas** (atlas.tsaur.com) — COMING SOON
   - Color: cobalt (#1f6feb)
   - Tags: TRAVEL, IOS
   - Year: 2025
   - Status: ○ SOON

3. **Loop** (loop.tsaur.com) — COMING SOON
   - Color: mustard (#e0a800)
   - Tags: AUDIO, EXPERIMENT
   - Year: 2025
   - Status: ○ SOON

4. **Garden** (garden.tsaur.com) — COMING SOON
   - Color: fuchsia (#c2185b)
   - Tags: WIKI, NOTES
   - Year: perennial
   - Status: ○ SOON

REMOVE: Field Notes (#3 in current) and Ledger (#5 in current). Update project count to 4.

### About Section
Replace the current about text. Something like:
"I build small, focused tools — the kind I wish existed. One project at a time, no venture funding, no roadmap deck."

### About Meta (4 columns)
- LOCATION: London, UK
- STACK: Swift, SwiftUI, Supabase
- STATUS: Building in public
- APPROACH: One project at a time

### Now Section (reduce to 3 cells)
- BUILDING: Chalk v1.x — real-time multiplayer, TestFlight soak testing
- READING: (keep as placeholder or remove)
- NEXT: Atlas — slow-travel mapping for iOS

### Footer
- Email: junaid@tsaur.com
- GitHub: github.com/junaidnasir
- Remove: are.na/tsaur, read.cv/tsaur, newsletter subscribe (don't exist)
- Keep: "say hello." heading
- Copyright: © 2025 Tsaur

### Marquee Strip
Update to: "Index of projects ✶ Est. 2024 ✶ Four projects, one author ✶ Built in public"

---

## chalk.tsaur.com — New Landing Page

### Purpose
Product landing page for Chalk iOS app. Must use the SAME design system as tsaur.com (see DESIGN.md).

### Project Color
`--accent: #d24317` (vermillion) — this replaces the multi-project color scheme. Only one color needed.

### Structure

#### Topbar
- Left: "chalk.tsaur.com" with vermillion dot
- Right: nav links → "Features", "About", "Download"
- Link back to tsaur.com

#### Hero
- Large display type: "Chalk." (same treatment as "TSAUR." on index — giant, bold, tight tracking)
- Each letter in vermillion, or mono-ink with vermillion dot
- Serif italic lede: "British 8-ball pool, scored properly."
- Meta row: "iOS · SwiftUI" | "V1.0 · 2024" | "FREE ON THE APP STORE"

#### Marquee Strip
"Pool scoring done right ✶ Shot-by-shot tracking ✶ Real-time multiplayer ✶ Deep analytics"

#### Features Section (bordered rows, not cards)
Section header: "§ 01 — FEATURES"

Rows (expandable like project rows on index):
1. **Frame Tracking** — "Score every frame shot-by-shot. Full match history with frame-level detail. Handles breaks, fouls, and ball-on-black rules."
2. **Analytics** — "Win rates, pot accuracy, break stats, streaks. All calculated automatically from your match data. Track improvement over time."
3. **Real-time Multiplayer** — "Play live sessions with friends. Event-sourced sync via WebSocket. Host authority with desync detection."
4. **Cloud Sync** — "Sign in with Apple. Your matches, friends, and stats sync across all your devices."
5. **Friends** — "Connect via handle or QR code. Share sessions, compare stats, build your pool circle."

#### Download Section
- Large "Get Chalk." display type (like footer's "say hello.")
- App Store badge/link: https://apps.apple.com/app/chalk-pool-scoring/id6744640806
- "Free on the App Store" in mono text

#### Footer
- Same inverted style as tsaur.com
- Links back to tsaur.com
- "Made by Junaid Nasir" / junaidnasir.com
- © 2025 Tsaur

### Tech Requirements
- Self-contained HTML file (like the index) — can use React + Babel from CDN if needed
- Embed all CSS (use the DESIGN.md tokens)
- Google Fonts: Inter Tight, Instrument Serif, JetBrains Mono (same as index)
- Responsive (same breakpoints as index: 880px)
- Paper theme default, support dark theme via class toggle
- Scroll animations for feature reveals (same cubic-bezier as index)
- No emoji — use typographic symbols (✶, ↗, ●)
