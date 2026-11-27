# Top-fix triage notes (2026-11-27)

The list is `sent150.txt` (coordinator's authoritative list) minus teknomedical: 149 sites.
Screenshots: live pages at 1440x900, 8 s after load. `triage/<slug>.jpg`, contact sheets `triage/sheet-01..08.jpg`.

How each column was set:
- accent_ok: the page's primary button colour (or the eyebrow colour if the button is neutral) compared with the logo in the page and with the company's live site (logo file, header, and the CSS colours of buttons and links). Every pair was then checked by eye. `unclear` means the logo is neutral or multicoloured and the call is judgement.
- brand_hex_live_site: the live-site colour that represents the brand. It is blank where the live site couldn't be reached from the sandbox (gimac, appiani, dlb-ovi, bennett-mahler, mos-electronic) or where ndhmedical.com redirects to an Outlook login.
- glow: judged by eye on full-resolution crops. "yes" means a visible halo, light pool, beam, flare or glowing part. A plain render on a dark ground counts as "no", as in the approved teknomedical pilot.
- italic_h1: all 149 have the template's accent-coloured second H1 line; 41 of them are also italic. This alone makes needs_fix = yes for every site.
- ground_clash: only clear hue clashes (teal or indigo grounds on a red brand). Navy grounds on blue brands, and near-neutral graphite grounds, are not counted as clashes.
- real_photo_candidate: the first viewport plus scrolled images on the company's homepage, ≥1600 px wide, checked by eye. Inner pages were not crawled, so "no" means none was found on the homepage. These are reported only and were not used.
