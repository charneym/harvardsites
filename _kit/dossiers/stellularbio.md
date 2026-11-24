# Stellular Bio, Inc. (slug: stellularbio) — HOME-ONLY build, batch 2026-11j

- Site: https://www.stellularbio.com/ (Webflow single page with Our Mission, Science, Team, Careers, Contact Us and per-person team pages, read 2026-11-23). Domain check: company name, team, science and contact details are on the site; the domain was registered 2022-11-16 (Verisign RDAP), has live MX (Proofpoint, mx1-us1.ppe-hosted.com), and the Series 1 release (PR Newswire, 2026-01-28) names "visit stellularbio.com" and info@stellularbio.com. No newer site on another domain.
- Type: preclinical/clinical-entry biotech; platelet-derived (platelet-inspired) regenerative biologic (PRB); lead STLR-201 for Sjögren's disease dry eye. Out-of-scope check: no pathogens, toxins or biodefence.
- HQ: 65 Grove St, Suite 303, Watertown, MA 02472. Telephone 857-299-6024.
- Lead: Derek Adams, PhD, President and CEO. Greeting: "Dear Dr. Adams".
- Best published email: info@stellularbio.com (site Contact Us and the PR Newswire release contact); careers@stellularbio.com for careers. No personal address for Dr. Adams found.

## Activity (pre-screen OK)
- 2026-01-28: "Stellular Bio Announces Closing of Series 1 Financing", led by Ziff Capital Partners, joined by Cockrell Interests and others, to advance STLR-201 into clinical testing for Sjögren's disease dry eye. https://www.prnewswire.com/news-releases/stellular-bio-announces-closing-of-series-1-financing-302671923.html (also BioSpace).

## Bad-site evidence
A plain flat dark-grey page (#4a4b55) with the logo, a small right-hand text nav and long blocks of small serif body text; no imagery, no hierarchy beyond one heading, bullet lists for the science, a bare name grid for the team, "Learn more" buttons that only expand text, a generic Webflow contact form; copyright 2025. Screenshot _kit/sourcing/v2-sheets/11j-stellularbio.jpg.

## Facts used
- stellularbio.com: tagline "Expanding the reach of regenerative medicine"; mission (OSD, PRB, proven efficacy in animal models, scalable manufacturing, initial clinical PoC in Sjögren's dry eye, expand into broader OSD); Science (PRB = PRP regenerative potential + engineered product; polypharmacology of hundreds of active substances, proprietary process, well-characterised and reproducible, off-the-shelf/donor plasma-independent, tunable via iPSC engineering, reimbursable; OSD ~20M US patients, ~4M severe, screen time and ageing increase incidence); team pages (titles and bios shortened, nothing added); contact.
- PR Newswire release: STLR-201 derived from platelet-progenitor stem cells, designed to modulate multiple cell and tissue types in OSD; SjD ~4M US patients; 75% of SjD patients report a major or moderate impact (Sjögren's Foundation survey); autologous products made per patient are cumbersome, inconsistent, expensive; CEO quote on chronic wounds, osteoarthritis.

## Palette / type
Live site: charcoal #43464d / page grey #4a4b55, logo gold #F3A000, white. Mapping: ink #33343b, accent on dark #f3a000, accent on light #995b00, bone #f7f5f0. Type: Outfit (close to their Radiona headings) and Zilla Slab for body copy (their body serif is Sentinel). Logo: their own vector SVG (white wordmark, gold dots) used as-is in the header and loader.

## Hero
Option (c), a crafted render of the product: one clear glass vial of a straw-gold biologic with a flip-off cap in the logo gold, ray-marched by _kit/home/stellularbio/vial.py (glass n=1.5 with Fresnel, liquid n=1.34 with amber absorption and in-scatter, two strip softboxes; premultiplied real alpha) → hero.webp 720×1120, faint floor reflection and slow breathing drift in field.js. No stock photo; unique to this site.

## Story
One fine-line picture: a platelet-progenitor cell (megakaryocyte with lobed nucleus and beaded proplatelet strands) at left, platelets in the middle, a section of the ocular surface (tear film over corneal epithelium, stroma) at right. Step 1: platelets light and release their substances. Step 2: the progenitor lights and new platelets bud along its strands (made from stem cells, not donors). Step 3: the substances drift to the ocular surface and the epithelial cells light.
