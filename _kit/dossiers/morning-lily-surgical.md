# Morning Lily Surgical Innovations (slug: morning-lily-surgical) — HOME-ONLY build, 2026-11-20

- Site: https://morninglily.com/ redirects to /password: a Shopify password page. Its whole content is "Morning Lily" in plain type, "Something new is coming", "Stay in the loop!" with an email box, "Enter using password", and "This shop will be powered by Shopify / Are you the store owner? Log in here". It has a peach-to-blush gradient background and nothing else.
- Type: Canadian medtech startup (registry batch 2026-11e, assigned by the coordinator). An implantable hernia repair device. No pathogens, toxins or biodefence.
- Legal name: Morning Lily Surgical Innovations Inc. Operating name on the NRC record: "Daisy-H". Incorporated in Alberta on 2021-05-26 (albertacorporations.com, via search snippet).
- HQ: Sherwood Park, Alberta T8B 1M4 (NRC grant record). No street address is published.
- Email: none published (site, NRC records, HIH listing and search all checked). Their site only offers a Shopify "stay in the loop" signup.
- Lead: NOT FOUND. No founder or CEO is named on the site, the NRC records, the HIH member list, patents or press. The only named person found is Mariam Sultan, "Lead Project Coordinator" since 2024 (LinkedIn/ZoomInfo, third party); not a lead. Not named on the site.

## Facts used
- NRC IRAP agreement 1034006, $64,000, 2025-09-01 to 2027-02-28 (end date extended 120 days on 2026-09-18), "Advancement of a Novel Mesh Implantation Device for Inguinal Hernia Repair": the firm "has developed a novel implantable hernia repair device" "to transform the treatment of inguinal hernias"; it will validate the manufacturing approach of the current prototype and contract an established nitinol medical device manufacturer to produce commercial-grade prototype units for preclinical animal testing, with the manufacturing data used to attract investment and prepare a regulatory submission. https://search.open.canada.ca/grants/record/nrc-cnrc%2C172-2025-2026-Q2-1034006%2Ccurrent
- NRC IRAP Youth Employment Program agreement 1023364, $30,000, 2024-10-01 to 2025-03-31, "Biomechanical and Pre-Clinical Testing a Nitinol Implantation Device": tests the device for safety and efficacy through preclinical animal trials and biomechanical tests toward human trials; aims for shorter recovery times, fewer secondary hernias and fewer post-operative complications. https://search.open.canada.ca/grants/record/nrc-cnrc%2C172-2024-2025-Q3-1023364%2Ccurrent
- Health Innovation Hub at UAlberta (managed by Applied Pharmaceutical Innovation) member list: "Morning Lily has engineered an innovative Nitinol-based Daisy Hernia System for hernia surgical repairs." https://appliedpharma.ca/initiatives/hih/hih-member-companies/
- General facts: nitinol is a nickel-titanium alloy, superelastic at body temperature, used widely in implantable devices.
- Not used: the device's shape or mechanism (unpublished; the story scene is labelled a schematic of nitinol, not the device). No team section (no published names).

## Activity (since 2025-05-18)
- 2025-09-01: NRC IRAP contribution, $64,000 (agreement 1034006; amended 2026-09-18).

## Bad-site evidence
- The domain shows a Shopify password page ("Something new is coming" / "Stay in the loop!"), not a company site.
- No content at all: no device, no science, no team, no news, no address, no contact email.
- Shopify store-owner boilerplate is public ("This shop will be powered by Shopify", "Are you the store owner? Log in here").

## Palette
- Sampled from the live password page (its only design element is the gradient): peach #faac85 → --accL; blush #f2d0c7 → --ember; peach deepened to terracotta #a4472a → --acc on the warm white #f9f3ef; plum-ink #15121a ground. Their font, Assistant (Shopify Dawn), is used for text; Fraunces for display. They have no logo, so the brand is a text wordmark: "Morning Lily" with "Surgical Innovations" as a small line under it.

## Hero / story / build-out
- Hero (update option b): Pexels photo 24193873, "Surgical Instruments in a Hospital" (a gloved hand laying out instruments on the draped table before an operation), Pexels licence: https://www.pexels.com/photo/surgical-instruments-in-a-hospital-24193873/ (downloaded from https://images.pexels.com/photos/24193873/pexels-photo-24193873.jpeg?w=2600). Graded by _kit/home/morning-lily-surgical/grade.py: plum-ink shadows, teal drape calmed to slate, peach glove kept; the printed sterile-pack label is softened with a feathered mask. The hand sits right of ~60% on desktop with an ink wash over the headline side and feathered edges; slow Ken Burns drift. On phones it sits in the top band and fades out above the text.
- Story: one engraved drawing sheet: a nitinol wire loop squeezed between two hatched plates and springing back, with the alloy's superelastic stress-strain hysteresis traced alongside; step 2 adds a tray of commercial-grade units; step 3 adds overlaid test cycles. A milestone line (prototype, commercial units, preclinical, regulatory) lights as the steps go, from the IRAP records.
- Build-out pages: _kit/lib/buildout.js (@libs buildout), English. Technology / Programme / Team / News open #/more/<item>; "keep scrolling" returns to story / programme / about (Team) / news; Contact scrolls to the contact block.
