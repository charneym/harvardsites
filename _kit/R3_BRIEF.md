Coordinator — CLIENT REVIEW ROUND 3. The client looked closely and was angry: "frankly, there are simply errors that shouldn't be happening here or ever again." Every gate passed while the sites still looked unfinished. This round fixes that for good. git pull --rebase first, then read the new v15 section at the top of _kit/PRINCIPLES.md (BS–CB) IN FULL. Apply every rule to EVERY site you own (all routes, 1440 and 390), not only the examples.

Client's words (verbatim excerpts):
- On a bio sheet with a small circle portrait beside a huge name: "this bio just looks unprofessional."
- "hanging photos that seem out of place — are you serious?" (a micrograph alone at the left of an empty band)
- "logos that are unreadable and even detract from the quality of the new website"
- "stray lines in designs? are you serious!?"
- "many of those product walk-through designs are just confusing/not that clear/need to be redesigned" — but "I do love how smooth the 'How it works' on Elements Endoscopy looks."
- "wouldn't it be more classy to have the top background moving dynamic thing in the bottom behind the footer of the company titles?"
- "why are some things not centered, like the team people in Elements Endoscopy?"
- "not everyone needs a profile if it's just repeating what their short bio says" — "but the initial bio to inside card ratio for Team of Virtus was fine/good."
- "the cards sitting there look unprofessional at times."
- "are you intending for the 'Why it matters' / scrolling colored text sections to be centered on screen while left justified? they're not centered on screen right now."
- OnVagus: "No pills. No needles. No surgery." "the intro animation is nice but then it stops and then just jumps together ... it happens on others too like 'Lab to clinic.'" And the co-founder card "looks like noob formatting — so much unparalleled white space, uncentred card."

What to do on every site you own:
1. BS text jump: replace the .ln-mask rule with exactly `.ln-mask{padding:.16em .14em .26em;margin:0 -.14em -.42em;position:relative;top:-.16em}` (remove any older/!important variants; I measured the bug on 40 of 41 sites: lines move 13–15px when the split reverts). Gate: split-audit OK, then clip-audit still OK.
2. BT: the hero's living background, quieter, behind the footer wordmark on every route; pause off-screen.
3. BU: centre short rows (or size the grid to the item count); centre the scroll-coloured statement block (text stays left-aligned); no half-empty bands.
4. BV: the sheet has a LARGE portrait or none (the slim/circle mode is removed from _kit/components/person-sheet.html — port that change). Don't open a sheet that repeats the card: put the short bio on the card and make it non-clickable. Keep Virtus's pattern (card = name + role, sheet = bio) where the sheet adds information. A lone person = a composed founder feature, never a lone card.
5. BW: every logo in one consistent legible tone, or set in type; fix or replace boxed/white/low-res files.
6. BX: no image alone in a band; compose it beside its text or across the measure.
7. BY: re-examine every story walk-through and diagram against the Elements Endoscopy "How it works" standard (study _kit/src/elements-endoscopy.src.html: one recognisable object drawn once, each step lights/changes one labelled part, the first frame is already a complete picture). REDESIGN any walk-through a first-time viewer couldn't read at a glance. Remove every stray stroke, line ending in nothing, overshooting guide, unlabeled bar or floating blob. Inspect every step zoomed in with sfxshot.
8. BZ: cards fit their content; no stranded labels; no box when type and a rule do the job.
9. Gates, ONE AT A TIME (parallel runs give false failures): navtest, reveal, anim, clip (1440+390, --bios), overlay-audit (now also fails small portraits and redundant sheets), split-audit, balance-audit, logo-audit — all OK on every route. prepush-check before every push. Same folders; URLs must not change.
10. CB visual sign-off (mandatory): screenshot every route at 1440 and 390, every story step, every person sheet; give them to a FRESH critic subagent (no code, only the images plus the full client-critique list in PRINCIPLES v13–v15) and fix until it finds nothing. Then report.

Report per site with send_message to session_014388NFYUsdqRg21Sq5nZUz: "R3 DONE: <slug>" + commit, what you redesigned (especially the walk-through: before → after in one line each step), what you removed, which gates ran, and what the fresh critic flagged and you fixed. Do not claim anything you did not verify; if you couldn't fix something, say so. No outreach.
