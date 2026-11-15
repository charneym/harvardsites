ROUND 3 — LEAN SCOPE (replaces the earlier version). The client: "I didn't ask for major site changes! They're already mainly fantastic!" Usage is limited. Make ONLY the targeted fixes below. Do NOT redesign anything else, do NOT re-polish things that already pass, do NOT run full-site critic loops.

Fixes (each is small):
1. Text jump (BS): replace the .ln-mask rule with exactly `.ln-mask{padding:.16em .14em .26em;margin:0 -.14em -.42em;position:relative;top:-.16em}` (remove older/!important variants). Gate: split-audit.
2. Footer (BT): show the hero's existing living background, quieter, behind the footer wordmark. Reuse the hero code; pause off-screen. Gate: balance-audit FOOTER.
3. Centring (BU): centre the scroll-coloured "Why it matters" statement as a block (text stays left-aligned); centre short last rows of cards/people. Gate: balance-audit ROW/CENTRE.
4. Bio sheets (BV): port the person-sheet change (no small circle portrait: large portrait or none). Remove a sheet only where overlay-audit says it repeats the card. Gate: overlay-audit.
5. Logos (BW): one consistent legible tone via CSS; typeset/replace only logos that logo-audit flags. Gate: logo-audit.
6. Hanging images / empty cards (BX/BZ): fix only what balance-audit flags (ORPHAN/VOID).
7. Walk-throughs: REDESIGN ONLY Artificial Axon Labs and Oak (the client named them). On other sites, only delete obviously stray strokes if you see one; no redesigns.

Verification (lean): run the gates above plus navtest + clip-audit on the routes you changed, ONE AT A TIME. Then one quick screenshot look at the sections you changed. A fresh-critic pass ONLY for the AAL and Oak walk-throughs. prepush-check before push; same folders.

Report: "R3 DONE: <slug>" + commit + one line per fix. Keep it short.
