# EnzyTag B.V. — home-only concept (batch 2026-11f)

- **Built:** `/enzytag/` → https://charneym.github.io/harvardsites/enzytag/
- **Live site:** https://enzytag.com/ (WordPress, Avada-style template; "Created by SOPmedia")
- **HQ:** Daelderweg 9, NL-6361 HK Nuth, The Netherlands (next to the Chemelot campus). Tel +31 45 208 4814.
- **Lead:** Dr. Leendert van den Bos, Chief Executive Officer. Greeting: "Dear Dr. van den Bos" (his own bio on enzytag.com/team uses he/him).
- **Best published email:** info@enzytag.com (the only address published; the site's contact page, the footer and the scientist.com provider listing give no personal address, and a web search for a direct one found none — not invented).

## Domain check (first step)
`enzytag.com` is the company's own domain and there is no newer site:
- The company name, the Nuth address and the +31 45 phone number appear on the site itself (enzytag.com/contact).
- CORDIS (European Commission) lists "EnzyTag BV", VAT NL859463205B01, Daelderweg 9, 6361 HK Nuth as a beneficiary of Horizon Europe project 101311592 — same legal name and street address as the site.
- The site is still being maintained on that domain: the contact page carries a 2026-07-06 modification date and the technology page 2024-10-18.
- No other EnzyTag domain surfaced in search; the scientist.com provider listing points at the same company and address.

## Activity (pre-screen: must be after 2025-05-18)
- **2026-06-11 — EU signature date for Horizon Europe MSCA Doctoral Network "FlexCAT" (grant 101311592)**, "Training program to engage flexible and disordered protein targets for therapeutic development: The oncogene β-catenin as showcase", EC contribution €4,510,715.40; EnzyTag BV is a named participating organisation with an EC contribution of €605,085.84. Project runs 2027-01-01 → 2030-12-31.
  Source: https://cordis.europa.eu/project/id/101311592 (verified in the CORDIS JSON record, where the EnzyTag BV entity block appears with its VAT number and Nuth address).
- Supporting: a poster with EnzyTag affiliation at the 16th Australian Peptide Conference (October 2025); contact page updated 2026-07-06.

## Bad-site evidence (quoted from enzytag.com)
1. **A single heavy Times-style paragraph used as the homepage headline, set over a grey stock molecule graphic**: "Our goal is to develop improved synthetic routes for the manufacture of peptide-based new chemical entities (NCEs), small proteins and peptide-containing (bio)conjugates using the peptiligase technology" — five lines of bold serif body copy, no hierarchy, orange pill buttons ("OUR PROPOSITION", "CONTACT US").
2. **Template leftovers and CMS scaffolding visible on every page**: each page prints its WordPress author and timestamp as body text — "EnzyTag Home Thomas 2022-06-07T09:09:30+00:00", "Technology Thomas 2024-10-18T09:38:21+00:00", "Proposition Thomas 2020-07-08T19:28:38+00:00".
3. **Untranslated Dutch chrome on an English site**: "Ga naar inhoud", "Zoeken naar:", "Ga naar de bovenkant", and on the contact page "Maak een Google Map van Nederland Kaart".
4. **A broken primary call to action**: the orange nav button "Order your Enzyme Need" opens https://enzytag.com/order-your-enzyme-need-here/, a page whose entire content is the fragment "here – EnzyTag" — no form, no products, nothing.
5. **The science is carried by a flat screenshot-quality figure table** ("Representative Examples") rather than explained; the home page has no news, and the only dated material on the site is the 2016–2019 reference list.

## Build
- **Hero (HOME_BRIEF update 2026-11-20, option c — a crafted render of the real subject):** thymoligase, the substrate-tailored peptiligase variant from EnzyTag's own reference list (Schmidt et al., *Org. Biomol. Chem.* 2018), rendered from its published crystal structure, PDB **5OX2** (chain A, 1,872 heavy atoms). `_kit/home/enzytag/render.py` draws every atom as a van der Waals sphere into a depth buffer, then Lambert + specular + rim lighting with multi-scale depth-buffer ambient occlusion, supersampled 2×, on a **transparent ground** so it sits on the page ink with no box edge (DJ/DP). The structure is turned so the catalytic triad (Asp32, His64, Cys221) faces the viewer, picked out in the site's own button orange; the chain runs N→C through the logo ribbon's cyan → violet → magenta. It sits centred in the open area right of the copy (~68% width), fully below the nav, >100px clear of the H1, with the scrim only over the text (DO/DI/DP). No pointer parallax (CZ).
- **Story (one continuous scene, BL/BY/DB):** two peptide fragments (bead chains in the logo cyan and magenta) dock into the engraved ligase's cleft, the new bond forms there in amber with water ripples, then the enzyme releases **one continuous chain** across the frame with no linker at the junction. Content from enzytag.com (Technology, Proposition) and the papers it cites.
- **Palette (BK), sampled from the logo ribbon and the live site:** ribbon cyan `#4cc7e6` → `--accL` (accent on dark, solid buttons); ribbon violet `#6a2a92` → `--acc` (accent on light); ribbon magenta `#e2266f` → `--mag`; the ribbon's darkest violet → the page ink `--ink #0e0b1d`; the live site's button orange `#ffa737` → `--ora`, kept for the catalytic highlights. Type: Source Sans 3 (matches the live wordmark) with Source Serif 4 for display.
- **Photography:** the company's own four portraits (Team and Scientific Advisory Board), one uniform 4:5 crop, graded (CI). Their other images were not used, with reasons (BJ): the aerial shot of the Nuth building and the two lab interiors add no information the page needs; the group photo outside the lab is small and poorly lit; the 'Representative Examples' table and the mechanism cartoon are screenshots of slides, and the hero render and the story already carry the subject (BR); the EnzyPep wordmark files belong to another company.
- **Build-out pages:** Technology / Applications / Team / News open `#/more/<item>` through the shared `_kit/lib/buildout.js` (added to `@libs`); Contact scrolls to the contact block.
- Source regions: `_kit/home/enzytag/` → `_kit/src/enzytag.src.html` → `enzytag/index.html` (`assemble.py`, then `_kit/build.js`).

## Facts used, and where each comes from
Everything on the page comes from enzytag.com (Home, Company, Technology, Proposition, Team, Scientific Advisory Board, Contact), the CORDIS record for 101311592, and the four papers EnzyTag's technology page cites (DOIs linked on the page). Nothing is invented: no funding amounts, no claims of customers, no pipeline.
