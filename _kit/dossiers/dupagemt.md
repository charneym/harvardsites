# DuPage Medical Technology, Inc. (slug: dupagemt) — HOME-ONLY build, batch 2026-11f

- Site: https://dupagemt.com/ (WordPress/Divi; read 2026-11-21). Four pages: Home, About Us, Publications, Contact. Bad-site evidence: the home page is a flat red (#d83a2f) block with an embedded YouTube thumbnail sitting in it as the "hero", two black boxed buttons ("About Us", "Science & News") beside a two-line mission statement; the "Featured Listings" are three paper titles in all-caps with a bare "5" under each; the Publications page repeats the same single 2020 paper title three times under "Publications", "News" and "Presentations"; team bios open as Divi overlays with "Email Me" links; a WooCommerce placeholder image is still loaded on the Contact page; "Invest In Us" appears twice on every page.
- Domain check (passed): company name and logo on the page; staff emails @dupagemt.com (xdu@, astojan@, skidgelra@, yongjian@, admin@); the Chicago address 2201 W. Campbell Park Dr., Ste. 316 matches the NIH RePORTER organization record for DUPAGE MEDICAL TECHNOLOGY, INC. (Chicago, IL), which has ten awards 2016–2025; UIC Office of Technology Management spotlight names the company and its founder. No newer site on another domain found.
- Type: biotech, peptide-nanoparticle drugs for thrombosis and inflammation. No pathogens, toxins or biodefence.
- HQ: 2201 W. Campbell Park Dr., Ste. 316, Chicago, Illinois 60612 (site footer and Contact). Phone 312-690-3107.
- Lead: **Dr. Xiaoping Du, MD, PhD — Founder and President** (UIC OTM spotlight: "Founder and President of Dupage Medical Technology (DMT), a UIC faculty startup company"; the site's About Us lists him first). Greeting: "Dear Dr. Du". Best published email: **xdu@dupagemt.com** (mailto on dupagemt.com/about-us/). Registry row named Randal A. Skidgel (contact PI on the 2025 award, Senior Scientific Officer); his email is skidgelra@dupagemt.com, and the general address is admin@dupagemt.com.

## Activity (pre-screen OK)
- 2025-08-01: NIH NIDDK SBIR Phase I 1R43DK143845-01, $306,867, "A new drug to treat transplant-associated renal ischemia-reperfusion injury", contact PI Randal A Skidgel, to 2027-07-31. https://reporter.nih.gov/project-details/11186781
- 2021–2025: NHLBI SBIR Phase II 5R44HL156560 "Developing a new drug for treating myocardial ischemia/reperfusion injury" ($856,873 + $1,141,737). https://reporter.nih.gov/project-details/10491205
- 2018–2026: NHLBI SBIR 5R44HL142396 "Targeting integrin outside-in signaling for treating sepsis" (Phase I 2018 PI Michael K Delaney; Phase II renewals to 2026-05-31). https://reporter.nih.gov/project-details/10625353
- 2016–2019: NHLBI contract 268201700002C (PI Minyi Gu), "Developing an inhibitor of integrin outside-in signaling".
- NIH SBIR total to the company: over $6M (UIC OTM spotlight, https://otm.uic.edu/news-stories/otm-spotlight-du/).

## Facts used (their site, NIH RePORTER, PubMed)
- About Us: "a research and biotechnology company, is located in an Industrial park affiliated with the University of Illinois at Chicago"; drugs under development MB2mP6 and M3mP6, "innovative peptide drugs encapsulated in a unique lipid formulation to yield high loading peptide nanoparticles (HLPN)"; "These HLPN allow efficient intracellular peptide delivery enabling in vivo therapeutic use of peptides targeting the intracellular compartment"; "both anti-inflammatory and anti-thrombotic effects by targeting a newly described signaling pathway in platelets and leukocytes. Despite potent anti-thrombotic effects, these drugs do not cause bleeding."
- Initial indications: sepsis, myocardial ischemia/reperfusion injury, renal ischemia/reperfusion injury; proof-of-concept animal studies complete; plan to raise an additional $10 million for preclinical pharmacology/toxicology toward IND and Phase I.
- Patent-pending HLPN technology offered for licensing. Support "from contracts/grants from the National Heart, Lung and Blood Institute" (+ NIDDK since 2025).
- Team (About Us): Xiaoping Du, MD, PhD (UIC Distinguished Professor, Pharmacology and Regenerative Medicine; expert in thrombosis, bleeding, inflammation; inventor, patents licensed by DMT); Aleksandra Stojanovic, MS (COO, joined 2020, 15 years lab manager at UIC); Randal A. Skidgel, PhD (Senior Scientific Officer since 2016, 31 years professor at UIC, 130+ papers, PI on the SBIR awards); Yong-Jian Geng, MD, PhD (cardiovascular researcher, formerly UTHealth Houston and Texas Heart Institute). The site gives Geng no title, so the concept says "Team member".
- 9 patents, 7 of them on the ExE-motif peptide HLPNs (UIC OTM spotlight).
- Publications: Sci Transl Med 2020 "High-loading Gα13-binding EXE peptide nanoparticles prevent thrombosis and protect mice from cardiac ischemia/reperfusion injury" (PMC8061427); Nat Commun 2021 "Targeting Gα13-integrin interaction ameliorates systemic inflammation" (PMC8159967); J Immunol 2021 (PMC9117564); Nat Commun 2023 "Integrin β3 directly inhibits the Gα13-p115RhoGEF interaction..." (PMC10432399).

## Hero
Crafted render of the real subject (HOME_BRIEF option c, no photography of the product exists on their site): one high-loading peptide nanoparticle cut open — the lipid bilayer shell (ivory heads, smoke tails) with its packed ExE peptide cargo, each hexapeptide with a myristoyl tail, in the DuPage logo reds. Sphere-splat renderer with z-buffer, screen-space occlusion and real alpha (`_kit/home/dupagemt/render.py`), so it sits on the page ink with no box edge.

## Palette
Sampled from the live site: wordmark red #ab2318 / hero band #d83a2f → `--acc` / `--ember`, accent on dark `--accL #e4573f`; warm near-black ink #141011; bone #f4efea. Their own fonts kept: Ibarra Real Nova (display) + Open Sans (sans), both loaded by dupagemt.com.

## Story
Custom scene: the platelet membrane with integrin αIIbβ3 holding fibrinogen outside and its β3 tail in the cytoplasm, Gα13 docked on the tail and the outside-in signal running into the actin cytoskeleton. Step 1 the nanoparticle lands and releases its peptides; step 2 the peptides bind Gα13 and hold it off the tail; step 3 the signal fades and the cytoskeleton relaxes.
