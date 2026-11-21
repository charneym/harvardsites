# Vortex Biotechnology Corporation (slug: vortexbiotechnology) — HOME-ONLY build, 2026-11-21 (batch 2026-11g)

- Site: https://www.vortexbiotechnology.com/ (Wix, footer "©2023 by Vortex Biotechnology Corporation"). Domain confirmed: company name, logo, team and news on the page; NIH RePORTER org record "VORTEX BIOTECHNOLOGY CORPORATION" (UEI HLEQZTL74FF1). No newer domain found.
- Type: US therapeutics startup (SPEC §2c). Small-molecule oncology (RNA degradation). No pathogens, toxins or biodefence.
- HQ: Charleston, SC 29403 (NIH RePORTER org city/zip for 1R43CA281394-01A1, FY2023). Registry note said Mount Pleasant, SC; no street address is published. Site timezone is America/Denver and the advisors are mostly University of Colorado; the company won a Colorado OEDIT grant in 2023. Crunchbase/Patsnap list Tucson, AZ (older). Used on the page: "Charleston, South Carolina".
- Email: none on the site (contact form only). Best published: akraft@uacc.arizona.edu (Dr. Kraft, University of Arizona Profiles https://profiles.arizona.edu/person/krafta; he is now emeritus there, so it may be stale). Not used on the page; the CTA links to the live site's contact form.
- Lead: Andrew S. Kraft, M.D., Founder and Chief Executive Officer (site; contact PI on 1R43CA281394-01A1). The site uses "he". Greeting: "Dear Dr. Kraft".
- Advisors (site, Our Team): Xuedong Liu, Ph.D.; Paul Bunn, M.D.; Daniel LaBarbera, Ph.D.; James Zwiebel, M.D.

## Facts used
- Live site Home/About/Our Focus/Leadership/Our Team/News text (VBT-34, oral stimulator of RNA degradation, hematological and solid tumors; tumor-agnostic; structure-based drug design; focus list; Kraft and advisor bios; not hiring).
- NIH RePORTER 1R43CA281394-01A1 (appl 10758110, NCI, $397,168, 2023-08-01 to 2025-07-31): Pim-1/3 phosphorylate EDC3, inhibiting decapping; VBT-34 blocks EDC3:Pim1/3 binding, fits a newly identified pocket in Pim-1/3 (modeling), found in a high-ATP screen; destroys RNAs regulating cell adhesion, cytokine production, cell mobility; blocks PCa growth and invasion; aims: VBT analogs (SAR, in silico) and MTD/efficacy in animal models. Site says "$400K Phase I SBIR".
- News page: Nov 2025 Sanford Burnham Prebys collaboration (Dr. Steven Olson), NIH and DoD proposals for breast cancer small molecules; Nov 2023 $125K Colorado OEDIT Advanced Industries Accelerator; Aug 2023 $400K NCI Phase I SBIR.

## Activity (since 2025-05-18)
- November 2025: collaboration with Sanford Burnham Prebys; two proposals submitted (NIH, DoD). https://www.vortexbiotechnology.com/copy-of-our-team

## Bad-site evidence
- Wix template: a blurred stock lab-glass (petri dish) photo with the company name in capitals inside a grey translucent box as the whole first screen; "©2023" footer.
- Every inner nav item (About Us, Our Focus, Leadership, Contact Us) is an anchor on one long page; "Our Team" lives at /about-5 and "News" at /copy-of-our-team (template slugs).
- No pipeline, no mechanism explanation, no address or email (form only).

## Palette
- Sampled from the logo (Vortex Logo.jpg on the live site): deep navy #003058 → ink #08131f; blue #0078c0 → --acc #0a68ab; highlight blue → --accL #4fb8ee; grey wordmark → --stone. Mark cut from the logo JPG (blue strokes as alpha, recoloured light for the dark ground). Wordmark in Montserrat 700 (close to the logo's geometric sans) with a small-caps "Biotechnology" line like the logo.

## Hero / story
- Hero (update option c): crafted render of a real molecule: space-filling human Pim-1 kinase domain from its crystal structure (RCSB PDB 1XWS, https://www.rcsb.org/structure/1XWS), protein atoms only (no ligand shown), N-lobe bright blue, C-lobe deep blue; rendered offline by home/vortexbiotechnology/pim.py on a transparent ground. Placed in the open area right of the text, measured at runtime to stay ≥120px clear of the H1/lede; slow drift, no pointer response.
- Story: one engraved mRNA (5′ cap, strand, poly(A)) with EDC3 and a two-lobed Pim kinase: (1) Pim docks on EDC3, phosphates light; (2) VBT-34 (schematic two-ring molecule, not its real structure) enters a pocket on Pim, Pim releases EDC3; (3) EDC3 settles on the cap, the cap comes off, the RNA decays 5′→3′.

## Photos (BJ)
- The site's only photos are stock (petri dishes) and a portrait of Dr. Kraft; no firm photography of labs/products, hence option (c).

## Gates (2026-11-21)
- smoke, reveal 1440/390, anim 1440/390, clip 1440/390, overlay, masthead, mixed, polish, loader, unstyled, cramped, hoverpad, split, logo, buildout-test (8 nav clicks), fit-audit (5 widths), loader-contrast: OK.
- balance-audit: CENTRE on the manifesto statement, which sits beside the stats column by design (DN); the shipped cloverleafbio gets the identical flag.
- hero-audit: "no title found" (environment-wide result, as on shipped sites).
- By eye: hero at 1920×930, 1440×900, 390 (render ≥120px clear of the H1, whole, below the nav, no box edge); every story frame at 1440 and 390 (labels clear of the shapes); build-out page at 1440.
