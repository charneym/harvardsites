# OrthoTrophix, Inc. (slug: orthotrophix) — HOME-ONLY build, batch 2026-11j

- Site: https://www.orthotrophix.com/ (static HTML, read 2026-11-23; pages Home, About (Overview, Management and Co-Founders), Products (Overview, TPX-100, TPX-200), Investors, News, Contact). Domain check: company name, logo, team, products and press releases on the site; the apex orthotrophix.com redirects to www (the apex A records are Squarespace, but they only forward to the old site); MX live (Proofpoint mx1/mx2-us1.ppe-hosted.com); contact emails on the site are @OrthoTrophix.com; the Feb 2026 and May 2025 PR Newswire releases name the same company, CEO and phone (510-488-3832). No newer site on another domain.
- Type: clinical-stage biopharma; TPX-100 (MEPE-based, intra-articular), a candidate first-in-class disease-modifying osteoarthritis drug (DMOAD) for knee OA; TPX-200 (MEPE-based phosphatonin, non-clinical, bone/kidney). In scope (no pathogens, toxins or biodefence).
- HQ: Foster City, California (press-release datelines 2023, 2025, 2026); "based in the San Francisco Bay Area". PharmaCompass lists a mailing address at 303 Hegenberger Rd., Suite 312, Oakland, CA 94621 (not used on the concept site).
- Lead: Yoshi (Yoshinari) Kumagai, President and CEO, co-founder (Management page; company contact on press releases). Greeting: "Dear Mr. Kumagai" (the site calls him "Mr. Kumagai").
- Best published email: info@orthotrophix.com (Contact page: "Business, Financial, Human Resources, and Other General Inquiries"). Also medical@orthotrophix.com and clinicaltrial@orthotrophix.com. No personal address for Mr. Kumagai found (site, press releases, web search). Phone 510-488-3832.

## Activity (pre-screen OK)
- 2026-02-24: "OrthoTrophix Announces Early Completion of Enrollment in Phase 2b Trial of TPX-100 in Knee Osteoarthritis" (PR Newswire, Foster City). https://www.biospace.com/press-releases/orthotrophix-announces-early-completion-of-enrollment-in-phase-2b-trial-of-tpx-100-in-knee-osteoarthritis
- 2025-05-12: Phase 2b initiated (PR Newswire). https://www.prnewswire.com/news-releases/orthotrophix-initiated-phase-2b-clinical-trial-of-tpx-100-in-patients-with-mild-to-severe-knee-osteoarthritis-302451562.html
- The site's own newest news item is 2023-12-14 (American Regent licence); neither 2025/2026 release is on it.

## Bad-site evidence
Early-2010s static layout: logo floating in a large white void, a faded watercolour brush-stroke ensō and a ragged "torn paper" blue nav band built from image-sliced PNG buttons, tiny body text, an empty home page apart from one "Welcome" paragraph and three news links; newest news is December 2023, so the 2025 Phase 2b start and the February 2026 enrollment milestone are missing; the Investors page is one sentence; the CSO bio is in the past tense.

## Facts used (orthotrophix.com unless noted)
- Home/About: biopharmaceutical company for hard tissues (bone, cartilage); TPX-100 candidate first-in-class DMOAD; Phase 2 placebo-controlled study in fifteen U.S. centers; post-traumatic arthritis and rheumatoid arthritis potential additional indications; incorporated by three founders May 2011, Bay Area; over $30 million in partnering revenue and equity financing.
- TPX-100 page: FGF-18 / cartilage-increase discordance; FDA 2018 draft guidance; NIH Osteoarthritis Initiative >9,000 knees; bone shape changes unidirectionally and irreversibly, faster in OA; starts much earlier than cartilage degeneration, most reliable structural marker to date, predicts progression and need for joint replacement; measurable with conventional MRI; TPX-100-treated knees showed statistically significant reductions in pathological 3D bone-shape change of the femur vs placebo.
- TPX-200 page: MEPE-based, phosphatonin; non-clinical: reduced bone porosity in CKD model, inhibited intestinal phosphate absorption and renal phosphate re-absorption.
- 2023-12-14 release: licence to American Regent (Daiichi Sankyo Group) for the U.S.; OrthoTrophix retains rights outside the U.S.; McGuire: knee OA "affects more than 350 million people worldwide and is a major cause of years lived with disability".
- 2026-02-24 release: Phase 2b of intra-articular TPX-100, multicenter U.S., initiated May 2025, completion expected Q1 2027; 53-week study in mild to severe tibiofemoral OA; NCT06865079; prior Phase 2a: favourable safety, significant knee-function improvement, attenuated bone-shape change ("B-score"); "designed not only to improve symptoms, but also to slow or halt disease progression"; subchondral bone central to symptoms and progression.
- Team: as on the Management page (summaries shortened, nothing added).

## Palette / type
Logo logo-home.png (389×65, alpha): brush-stroke "O" in blue #0055a3 with black, lettering black; live site nav band and headings #0054a4 on a pale ground; fonts Spectral (headings) and Barlow (body). Mapping: ink #0a1626, accent on dark #5aa8ec, accent on light #0055a3. Header and loader use the real logo at native size with black recoloured white and blue lightened (logo-w.png, _kit/home/orthotrophix/logo.py), favicon is the "O".

## Hero
Option (c), a crafted render of the subject: the bones of the human knee joint (distal femur, patella, proximal tibia, fibula head), whose 3D shape change TPX-100 slows. Signed-distance sculpture sphere-traced in numpy (_kit/home/orthotrophix/knee.py, args 2400 0.45 0.08): satin ivory bone, pale cartilage tint on the joint faces, soft key light, AO, soft shadow, real alpha, shaft ends faded over a long ease. Unsplash/Pexels had no free, clean knee photo (knee-model and knee X-ray results were Unsplash+ or wrong body part). Placed at ~74% width on desktop; on phones a 12-88% crop with an eased alpha mask sits in the top band above the text. No other site uses this render.

## Story
One fine-line front view of the knee (femur, tibia, fibula head, patella ghost). Step 1: the outline spreads and flattens (OA bone-shape change), a dashed healthy ghost stays behind. Step 2: TPX-100 drops travel into the joint space, which glows blue. Step 3: the treated outline holds and its joint faces light blue while a dashed "placebo" outline keeps changing. Schematic only; no patient data drawn.
