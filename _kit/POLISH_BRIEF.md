# POLISH sweep (client critique 2026-11-22): small breakages lose leads

These sites are LIVE and have already been emailed to the firms. Your job is to find and fix every small visual defect, frame by frame. **Do not change facts, copy, leads, palette, layout concept or the hero image** unless one of them is broken. Read PRINCIPLES **DR** first (newest rule at the top of _kit/PRINCIPLES.md), then DQ, DP, DJ.

The client found these on sent sites:
- turnerscientific's loader stacked "Turner" one letter per line. The cause was SplitText chars inside a `display:flex;flex-direction:column` wrapper. (The loader is fixed; its story labels still clash. "ROUND WINDOW" sits under the drop icon, and the curve crosses "COCHLEA, UNROLLED".)
- pharmacoidea's loader logo was a faint, thin, etched-looking outline, and story labels sat on the membrane strokes.
- biredimaging's animated white curve stopped short of its top-right end point. **biredimaging was already fixed by the client: do not touch it.**
- In several sites, text overlapped the animation.

For EACH slug in your list:
1. Run `git pull --rebase`, then `node _kit/tools/textclash.js SLUG`. Open every crop in /tmp/tc_SLUG and decide whether it is a real collision. Footer or big-wordmark false positives are common.
2. Look by eye at loader frames (about 0.3s, 0.8s, 1.5s, and the final frame before it lifts) at 1440×900 and 390×844. Check that:
   - the wordmark is on one line, like the real logo;
   - the logo mark is crisp, solid and readable at brand weight, never a hairline ghost, etched trace or blurry upscale;
   - the counter, bar and caption don't collide with anything.
3. Scroll the home page slowly at 1440×900, 1920×930 and 390×844, and look at every story step and its end state. Check that:
   - no label, number, caption or heading touches or crosses a stroke, icon, dot, curve, image or other text (keep at least 8px clear);
   - every drawn line or curve reaches its real end point;
   - nothing is clipped by the viewport or a container;
   - nothing is cut mid-word or overflows.
   On phones, reposition, shrink or drop labels rather than let them collide.
4. Check the hero again (whole, at least 100px clear of the H1, below the nav, no box edge) and the header logo (crisp, not stretched).
5. Fix the defects with minimal, scoped CSS/JS changes in SLUG/index.html, then re-run textclash and look again at every frame you touched.
6. Run smoke and clip at 1440/390 and `node _kit/tools/buildout-test.js` (or the equivalent in _kit) so nothing regresses. Commit per site ("SLUG: polish — <what>"), `git pull --rebase`, push to main, retrying on rejection.

Work through all your slugs in one go; never stop after planning. When done, send ONE message to the coordinator session_014388NFYUsdqRg21Sq5nZUz with this format:
"POLISH DONE: <group>". Then one line per slug: "slug: OK (nothing found)", "slug: fixed — <what>", or "slug: NEEDS COORDINATOR — <what>".
