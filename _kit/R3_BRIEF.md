ROUND 3 — TARGETED SCOPE. The client: the sites are "already mainly fantastic", but "the problems likely exist beyond only the ones I mentioned; I only looked at about 2". So every site gets the fixes, but bounded: the coordinator measures every site centrally (gates + a walk-through contact sheet) and writes a per-site defect list to _kit/R3_DEFECTS.md. Fix exactly what is listed for your sites, plus the global fixes below. No open-ended redesigns, no repeated full-site critic loops: usage is limited.

Fixes (each is small):
1. Text jump (BS): replace the .ln-mask rule with exactly `.ln-mask{padding:.16em .14em .26em;margin:0 -.14em -.42em;position:relative;top:-.16em}` (remove older/!important variants). Gate: split-audit.
2. Footer (BT): show the hero's existing living background, quieter, behind the footer wordmark. Reuse the hero code; pause off-screen. Gate: balance-audit FOOTER.
3. Centring (BU): centre the scroll-coloured "Why it matters" statement as a block (text stays left-aligned); centre short last rows of cards/people. Gate: balance-audit ROW/CENTRE.
4. Bio sheets (BV): port the person-sheet change (no small circle portrait: large portrait or none). Remove a sheet only where overlay-audit says it repeats the card. Gate: overlay-audit.
5. Logos (BW): one consistent legible tone via CSS; typeset/replace only logos that logo-audit flags. Gate: logo-audit.
6. Hanging images / empty cards (BX/BZ): fix only what balance-audit flags (ORPHAN/VOID).
7. Walk-throughs: AAL and Oak are being redesigned. For every other site, _kit/R3_DEFECTS.md says per walk-through: OK, specific fixes (e.g. a stray line, an empty first frame, an unlabelled shape), or REDESIGN. Do exactly that.

Verification (lean): run the gates above plus navtest + clip-audit on the routes you changed, ONE AT A TIME. Then one quick screenshot look at the sections you changed. A fresh-critic pass ONLY for a walk-through you redesigned (one pass, on its frames). prepush-check before push; same folders.

Report: "R3 DONE: <slug>" + commit + one line per fix. Keep it short.
