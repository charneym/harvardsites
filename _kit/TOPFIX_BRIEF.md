# TOP-FIX for sent sites (client, 2026-11-27)
Read _kit/DESIGN_IDEOLOGY.md first, especially sections 8, 9 and 11.
Scope (client's exact words: "i just need the home page initial top to look good" + "Real brand colours"). Change ONLY:
1. **Brand colours.** Set the site's colour tokens (accent, accent-light, tints and any brand hue in the hero/field) from the company's actual logo and current live site, sampled as hex. Apply them via the site's parts (_kit/home/<site>/root.css or equivalent). Keep the template's dark/light section rhythm. Change a ground only if it clearly clashes with the brand.
2. **The first screen (hero) must look good, not "AI":**
   - If the company has a good, sharp real product photo, use it as the hero subject instead of the render, placed per DESIGN_IDEOLOGY section 6 (whole, facing the text, no seam, no pasted box, ≤ native size).
   - Otherwise keep the render, but remove the glow / floating halo so it sits naturally.
   - Headline in one colour: no italic accent-coloured second line.
Do NOT change anything else: no motion, layout, sections, copy, story, loader, transitions, fonts or spacing. Work only in _kit/home/<site>/, then assemble.py, then build.js. Never hand-edit index.html. Diff the rebuilt page against the deployed one and make sure only colour and hero changed. Run the usual gates (entities, contrast, overflow 360/390/414, squeeze, orphans, textclash, buildout-test). Check the first screen by eye at 1440, 1920 and 390.
