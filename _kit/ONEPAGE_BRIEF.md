# One-page site at FULL quality (client-approved format, 2026-11-18)

Read `_kit/BATCH_BRIEF.md`, `_kit/SPEC.md` (§2b/§4b for PE) and `_kit/PRINCIPLES.md` (CU–DA at the top are binding) first. Everything there still applies; this brief changes only the FORMAT, never the quality.

## What changes
- ONE long page instead of separate routes: no page transitions, no person-sheet overlays.
- The nav still looks like a full site: Approach, Criteria, Portfolio, Team, News, plus a Contact button. Phones get a MENU button with a full-screen menu. Every item smooth-scrolls (Lenis) to its section with a header offset; the URL updates to #/approach etc. and opening such a URL lands on that section; the active item follows the scroll. No dead links.
- In-page buttons as on the full sites ("Our approach →", "Full criteria →", "All companies →", "Meet the team →", "All news →", "Start a conversation") all scroll to real sections.
- Each section opens like a page: a clear section title in a full-width band. Sections carry the SAME depth as the full sites' sub-pages: full criteria; every portfolio company with a description and link; the team with portraits and short bios inline (expandable "Read bio" toggles instead of sheets); news with dates and links; contact.

## What does NOT change (this is what makes it look expensive)
- A custom signature hero tied to the firm: beautiful at a glance (DA), with a filled focal point (CU), calm motion and no pointer-follow on art that already animates (CZ); reprised behind the footer.
- A custom pinned scroll story with clean labels that never collide (CY) and exactly one caption at rest.
- Brand evolved from their logo and colours, refined typography, and the loader and opening choreography (CR).
- QA: the full gate list once at the end, the opening recorded at 4x CPU, the §5b review at 1440 and 390, ONE fresh design-critic pass with its findings fixed, and CW checked at 360/390/430.

Lift the invisible plumbing from `_kit/src/hidden-river.src.html` (loader, Lenis/GSAP, reveal helpers, story engine, footer fit, CW band) and the one-page nav from `_kit/src/sharpvue.src.html` (nav/menu/scroll code only, NOT its design). Use the efficiency rules in BATCH_BRIEF.
