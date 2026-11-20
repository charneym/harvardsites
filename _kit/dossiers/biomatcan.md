# BIOMATCAN (slug: biomatcan) — HOME-ONLY build, 2026-11-20

- Site: https://www.biomatcan.com/ (Weebly). Pages: Home, About Us, Technology, B-REGEN ("COMING SOON"), Distributor (a form), Contact (a form).
- Type: medtech (synthetic bone graft bioceramics; orthopedic, dental, maxillofacial). Canadian, not US: assigned by the coordinator in batch 2026-11e despite SPEC §2c. No pathogens, toxins or biodefence.
- HQ: BIOMATCAN Ltd., Unit 1, 151 Whiting Road, Fredericton, New Brunswick E3B 5Y5, Canada (site footer; the grant record also gives Fredericton E3B 5Y5). Hours Mon–Fri 8:15 am–5 pm. Tel 1 800 558 1979, 1 506 450 0404.
- Email: info@biomatcan.com (site footer, contact and technology pages). It is the only published address; ZoomInfo shows a masked f***@biomatcan.com for Dabbarh, not used.
- Lead: Fouad Dabbarh, Ph.D., Chief Operating Officer (LinkedIn ca.linkedin.com/in/dabbarhfouad: "Fouad Dabbarh, PhD - Chief Operating Officer - Biomatcan", since July 2011; ResearchGate lists him at Biomatcan; co-author of the IntechOpen chapter "Chitosan Based Biocomposites for Hard Tissue Engineering", affiliation Biomatcan Ltd). Greeting: "Dear Dr. Dabbarh" (PhD). No CEO is published. Dun & Bradstreet lists Noureddin Kassimi (UNB chemistry teaching professor, the chapter's co-author as Elbakali-Kassimi) as "key principal"; a 2014 BioNB article reportedly called Dabbarh president (page now 404). Not used on the site.

## Facts used (all from biomatcan.com unless noted)
- Private medical device company: research, development, manufacturing and marketing of biomaterial products for orthopedic and dental applications worldwide; bone-like substitute bioceramics (synthetic bone substitutes / orthobiologics).
- Mission: synthetic implantable regenerative devices for bone regeneration in orthopedic, dental and skull-maxillofacial surgery; reduce the risks of allograft, xenograft and autograft (limited supply, second surgery).
- Fully synthetic: no human or animal tissue, no risk of disease transmission or rejection; consistent high-quality batches, no limits on supply; manufactured, packaged and gamma sterilized under strict quality conditions.
- Technology page: bone grafting is the second most performed transplantation after blood transfusion; autograft from the iliac crest carries donor morbidity and is often insufficient; CaP bioceramics; BCP = HA + beta-TCP, HA bonds to bone, beta-TCP resorbs faster; new generation of orthobiologic ultrapure bioceramics, enhanced bioactivity, excellent osteoconduction, controlled highly interconnected multi-scale porosity, nanostructured surface for cell attachment; forms: powders, granules, blocs, porous shapes, settable pastes and putties; highlights: highest purity, bioactive, osteoconductive and controlled microstructure, balanced biphasic formulation, safe/fully synthetic/gamma sterilized, high hydrophilicity and capillary forces.
- Home page: bone regenerates completely if given the space to grow into; natural bone generally replaces the graft completely, a fully integrated region of new bone.
- About: certified, custom-designed facility in New Brunswick; certified clean rooms for production and packaging with real-time monitoring; stringent quality and safety controls at all stages; certified to relevant international standards; quality-policy quote; scientists collaborate with biomaterials scientists, biologists and clinical researchers worldwide.
- LinkedIn (company post reshared by Dabbarh, 2022-04-11): renewal of the MDSAP ISO 13485 certificate, meeting the requirements of Canadian and U.S. regulators.
- Not used: the "$6.9 billion by 2026" market figure (dated); B-REGEN specifics (page is "coming soon"); S-VETOSS (hashtag only); revenue/headcount estimates (third-party).

## Activity (since 2025-05-18)
- 2025-09-08: NRC IRAP Youth Employment Program contribution, $30,000 (2025-09-08 to 2026-05-25), "to hire a production assistant to help manufacture medical implant devices in an ISO 13485-regulated environment". https://search.open.canada.ca/grants/record/nrc-cnrc%2C172-2025-2026-Q2-1034780%2Ccurrent

## Bad-site evidence
- Weebly template: serif Times-style nav with a "more..." overflow item and a LOG IN link; tiny grey justified body text.
- Hero is a stock-style composite banner (gloved hands, glowing knee hologram) with a lone "LEARN ABOUT OUR PRODUCTS" button and no headline.
- B-REGEN page is just "COMING SOON"; "VIEW OUR PRODUCT SHEET (coming soon)"; no team, no news, no leadership named anywhere; Distributor and Contact are bare forms.
- Stale market claim ("expected to reach 6.9 billion by 2026") and low-resolution images (300px histology and comparison graphics).

## Palette
- Sampled from their logo PNG (uploads/.../picture6.png): hexagon blue #0677dd → --ember, lifted to #4aa3f2 → --accL on dark, darkened #0560b8 → --acc on white; the B's navy #04184a deepened to the ink #0a1220. Ceramic white #f4f6f8 → --bone. Logo mark redrawn as SVG (blue hexagon, white inner hexagon, navy B); wordmark set in Krona One (close to the logo's wide geometric caps).

## Hero / story
- Hero (update option c): crafted render of the real product: porous biphasic calcium phosphate granules (one large, two behind), interconnected macropores, micropores, fine mineral grain; ray-marched offline by _kit/home/biomatcan/render.py (numpy, AO, soft shadow, depth darkening in the pores, rim light in the logo blue) on a transparent ground, cropped to biomatcan/hero.webp; slow drift, ink scrim on the left. No usable Unsplash/Pexels photo of the subject exists (search returned skeletons and skulls); their own images are low-res stock/histology.
- Story (single engraved scene, 4 steps): bone section with a defect → porous HA/beta-TCP granules settle in → capillary uptake (fluid rises) → new trabeculae grow through; beta-TCP granules resorb, HA stays.
- Nav: Technology / Products / Manufacturing / Company open build-out pages (#/more/<item>, _kit/lib/buildout.js); Contact scrolls to the contact block.
