# TOP-FIX for sent sites (client, 2026-11-27)
Read _kit/DESIGN_IDEOLOGY.md first, especially sections 8, 9 and 11.
Scope (client's exact words: "i just need the home page initial top to look good" + "Real brand colours"). Change ONLY:
1. **Brand colours.** Set the site's colour tokens (accent, accent-light, tints and any brand hue in the hero/field) from the company's actual logo and current live site, sampled as hex. Apply them via the site's parts (_kit/home/<site>/root.css or equivalent). Keep the template's dark/light section rhythm. Change a ground only if it clearly clashes with the brand.
2. **The first screen (hero) must look good, not "AI":**
   - If the company has a good, sharp real product photo, use it as the hero subject instead of the render, placed per DESIGN_IDEOLOGY section 6 (whole, facing the text, no seam, no pasted box, ≤ native size).
   - Otherwise keep the render, but remove the glow / floating halo so it sits naturally.
   - Headline in one colour: no italic accent-coloured second line.
Do NOT change anything else: no motion, layout, sections, copy, story, loader, transitions, fonts or spacing. Work only in _kit/home/<site>/, then assemble.py, then build.js. Never hand-edit index.html. Diff the rebuilt page against the deployed one and make sure only colour and hero changed. Run the usual gates (entities, contrast, overflow 360/390/414, squeeze, orphans, textclash, buildout-test). Check the first screen by eye at 1440, 1920 and 390.

## APPROVED RECIPE (client chose variant B, 2026-11-27). Reference: /teknomedical/, where B is now live (_kit/home/teknomedical/: render_b.py, field.js, extra.css; the B copy /teknomedical-b/ was removed). Recipe details and code: _kit/reports/topfix/RECIPE_NOTES.md
Per site, change ONLY the following. Use the triage row for the site in _kit/reports/topfix/triage.csv.
1. **One-colour headline (every site):** the hero H1's emphasised second line has the same colour, style and weight as the first line (no italic, no accent colour). Use the same CSS approach as teknomedical's extra.css.
2. **Brand colours (only where triage accent_ok = no/unclear, or ground clash = yes):** sample their real logo and live site, then set the colour tokens (acc/accL/accD, the related tints, story stroke colours, and the ground only if it clashes). For "unclear" (neutral or multicolour logo), keep the current accent unless it is clearly not in their brand. Text on buttons must stay readable.
3. **Hero light (B), every site with a render/canvas object:**
   - Remove any glow, halo, beam, bloom or coloured ambient light around the object.
   - Light the object like a studio product shot: one soft key light from the headline side giving real specular highlights, a low neutral fill, a dim rim on the far edge.
   - Add a very faint, wide, soft cast shadow on an implied surface below (no hard edge, no reflection).
   - Optionally add a neutral, barely perceptible ground falloff (≤ ~2–3% brighter, not centred on the object, never coloured).
   - If the object's working end points away from the text and the render has no lettering, mirror it (as Tekno). Never mirror anything with text or a logo.
   - If the hero is a photo rather than a render, only remove glows or overlays; don't relight.
   - Keep the object's position and size.
4. Nothing else changes: motion, loader, layout, copy, story geometry, sections and fonts stay as sent (except step 5).
5. **Hero scroll behaviour (conditional; client 2026-11-27: "why does it not scroll up with the text", then "sometimes it looks good [fixed], but here it doesn't"):**
   - **OBJECT → it scrolls up with the text.** The hero visual is a discrete object: one product, device, instrument, part, molecule or cell, as a render or a cut-out photo, sitting in the open area beside the headline with ground around it.
     - Desktop: offset its draw position by the hero's `getBoundingClientRect().top` (1:1 with the page) while the hero is on screen, and use 0 once the hero has left (so the footer echo still finds it).
     - Phones: nothing to do. The template already makes `#field` `position:absolute` at ≤860px.
     - Exact code: RECIPE_NOTES.md section 6.
   - **BACKDROP → keep the template's fixed/fade behaviour.** The hero visual is ambient: an atmospheric field, light field, particles, gradient flow, landscape, or a full-bleed scene behind the text.
   - **How to decide:** ask "could I put a box around the thing and name it?" and "would it look wrong if the text slid off while it stayed put?" If both answers are yes, it's an OBJECT. Examples:
     - **OBJECT:** Tekno's rigid endoscope render (/teknomedical/); a single pump, sensor, catheter, implant or chip render on the right; a cut-out photo of their device.
     - **BACKDROP:** a slow light or particle field filling the screen; a full-bleed graded photo of a lab, landscape or factory hall behind the text; a molecular or flow-field texture with no single subject.
   - **Mixed** (an object floating on a living field): only the object scrolls; the field drawn behind it stays fixed.
   - **Check at 1440:** scroll 0/150/300/500/800px. The object's top moves within a few px of the H1's movement, never overlaps the next section, no jitter, and the footer echo still shows the object.
How: edit _kit/home/<slug>/ parts, then assemble.py, then build.js. If the site has no parts folder (has_parts=no), edit _kit/src/<slug>.src.html, then build.js. Never hand-edit <slug>/index.html.
Check:
- Diff against the deployed page. Only the H1 emphasis, colour tokens and hero field/render may differ.
- Gates: entities, contrast 1440/390, overflow 360/390/414 (scratch tools in _kit/tools), orphans, squeeze 390/768, textclash, buildout-test.
- Screenshot the first screen BEFORE and AFTER at 1440 (wait 8s) into _kit/reports/topfix/done/<slug>-before.jpg and -after.jpg, and look at them by eye: B must not read as glowy, and the object must look lit, not pasted.
Push each site to main as you finish it (git pull --rebase first).
