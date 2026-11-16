# Round 4 brief (client review 4)
The client looked at a few sites and found more defects, and expects the same problems on every site: "these are likely general problems, I only looked at a few sites ... I just need you to be better and fix them." Read the v16 section at the top of _kit/PRINCIPLES.md (CC–CK) in full, then for EACH of your sites:

1. git pull --rebase. Run `node _kit/polish-audit.js <slug>/index.html "<people route>"` and fix everything it reports (OVERFLOW, MASKCLIP, UNDERLAP, POPIN, HOVER, LINK, SCRUB, CUE). It must print OK.
2. Apply the design standards a script can't check, by looking at the page:
   - CI team section: portrait grid or masthead list exactly as specified; no boxes, no tight hover fills, no "Profile" labels.
   - CJ partners/funders as one clean credit line, one format per section.
   - CH "Why it matters" sized to the measure, fully coloured by mid-screen.
   - CG hovers: immediate, 0.2–0.4s, no tight fills.
   - CK walk-through: physically right, no edge-fade over labels, no ambiguous duplicate outlines, plain-language labels.
   - CC footer wordmark fits.
3. Do not change anything else: no redesigns beyond these standards. The sites are otherwise approved.
4. Gates, ONE AT A TIME, on the routes you changed: loader-audit (preloader text must not overlap at 390/1440), polish-audit, navtest, smoke, split-audit, balance-audit, logo-audit, overlay-audit, clip-audit at 1440 and 390 (--bios on the people route). prepush-check before every push. Same folders; URLs never change.
5. ONE fresh-critic pass per site (a subagent that has not seen the code), given full-size screenshots of: the hero during and after load (several frames in the first 3s), the "Why it matters" block centred, every walk-through step at full size, the team section plus a hovered card, partner/funder section, footer, all at 1440 and 390, plus the v13–v16 critique list. Fix what it finds, then stop; no second loop unless it found a v16 violation.
6. Report to session_014388NFYUsdqRg21Sq5nZUz per site: "R4 DONE: <slug>" + commit + one line per item. If you hit a usage limit, resume as soon as it resets. No outreach.

## Client's specific notes (apply to these sites, and the same class of fix everywhere)
- artificial-axon-labs: footer "Artificial Axon Labs" wordmark runs off the right edge (CC). "Built and tested at MIT": partner names in a ruled 3-column grid next to a ruled publications list. The mixed line formats are confusing (CJ). The hero "drugs that repair it." loses "r it." during the entrance, then it pops in (CD).
- oak-therapeutics:
  - On load the title's bottom line passes over the paragraph beneath it (CD).
  - Team hover colour appears after a delay instead of animating (CG).
  - Walk-through: labels at the canvas edge start faded; "support matrix" is unclear; the strip's offset second outline reads as two boxes, one off-centre; the strip stands upright and dissolves sideways while "placed on the tongue" (CK).
  - "Why it matters": too much empty space, and words still faded when centred (CH).
- immunebro: footer "E" link goes to a not-found page (CF). The hero has both a moving line and an arrow as a scroll cue, and they don't line up (CE).
- elements-endoscopy: hover fill on the Phase II aim cards is too tight (CG). The team formatting is "poor and unprofessional" (CI).
- virtus: the team format and its hover highlight are weird (CI, CG).
