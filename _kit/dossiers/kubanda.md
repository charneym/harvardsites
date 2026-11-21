# Kubanda Cryotherapy — dossier (home-only build, batch 2026-11c, veterinary medtech)

Sources, fetched 2026-11-21: kubandacryotherapy.com (home, /products, /vets, /clinical-research, /team, /contact, /one-health, /blog incl.
"New CryoDuo Expands Access..." press release dated 2026-09-24); citybiz "TEDCO Invests in Kubanda Cryotherapy" (2025-09-09).

## Pre-screen
- Bad site (screenshots _kit/sourcing/v2-sheets/11c-kubanda.png and 11c-kubanda-full.jpg): Squarespace; first screen is centred text and two
  pill buttons on white with no product, image or proof; a large empty white gap below the hero; footer
  links "home | about | contact" in tiny type; two different ZIP codes for the same address (21211 footer, 21202 contact page); typo "Free Free™"
  in a resource title; "One Health" page with "Medical Cryoblation" heading typo.
- Active: CryoDuo launch press release 2026-09-24; education posts Nov 3 and Nov 18, 2026; $1.7M seed round closed 2025 (per the release);
  TEDCO $200,000 Pre-Seed Builder Fund investment (citybiz, 2025-09-09).
- Scope: veterinary cryoablation device for tumors. No pathogens, toxins or biodefence.

## Company
- HQ: 3600 Clipper Mill Rd, Suite 310, Baltimore, MD 21211. Phone 667.401.2796.
- Emails published: Sales@KubandaCryo.com (site footer), help@KubandaCryo.com (contact + clinical research pages). No personal email found.
- Funding (press release 2026-09-24): $1.7M seed closed 2025; over $5M raised to date, including over $2M in research awards. TEDCO: MII Company
  Formation award, SBIR/STTR Proposal Lab, Social Impact Funds investment 2024, Pre-Seed Builder Fund $200,000 (2025).
- Product: CryoDuo, dual-treatment (topical + intratumoral), interchangeable probes (Subcutaneous, Multiuse Topical, Precision Ball Tip);
  "most powerful veterinary cryotherapy system on the market and the only capable of intratumoral treatment"; "half the cost of surgery";
  first & only Fear Free™ Preferred cryotherapy product. Mechanism (Vets page): intracellular ice crystals; cryoprobe + gas-control module;
  skin protected against the cold; often without general anesthesia. Clinical study: canine lipomas, Baltimore, free treatment.
- Team (site /team): Bailey Surtees (CEO and Founder), Clarisse Hu (CTO and Founder), Sophia Schwartsman (Chief of Staff), Kristen
  Kellar-Graney (Clinical Study Facilitator), Carl Herrick (Sales Director), Katie Ogg (Clinical Engineer), Taliyah Huang (Product Testing and
  Production Senior Co-op), Nicholas Durr (Advisor and Cofounder); in memoriam Naomi Gordon (omitted from the concept).
- Lead: Bailey Surtees, Founder and CEO. No published pronouns found → greeting "Dear Bailey Surtees". (Blog posts are authored "Bailey
  Brickley"; not assumed to be the same person.)

## Brand
- Logo JPG: navy wordmark #09304e, snowflake cyan ~#43b4e3; site type Inter Tight. Concept: ink #08263f, bone #f3f7fa, accent #43b4e3
  (#1673a5 on light). Logo keyed to alpha with the wordmark in bone for the dark header and preloader.

## Build notes
- Hero (HOME_BRIEF update option a): Kubanda's own CryoDuo studio render ("CryoDuo with Logo.png", products page), wordmark cropped off,
  drawn on its real alpha channel (no rectangle), centred at ~71% width, long-eased cyan halo behind and soft floor light, slow float.
- Story: engraved section through skin and subcutis: mass → cryoprobe inserted, skin sleeve → ice ball / intracellular ice → mass shrinks,
  skin intact. Proportions schematic.
- Nav items open build-out pages via _kit/lib/buildout.js; Contact scrolls to the contact block (mailto Sales@ + help@, address, phone).
