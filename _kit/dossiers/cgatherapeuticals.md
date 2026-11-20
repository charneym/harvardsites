# CgA Therapeuticals, Inc. — dossier (batch 2026-11e, HOME-ONLY build)

Slug: `cgatherapeuticals` · built at `/cgatherapeuticals/` · domain cgatherapeuticals.com · parts and render in `_kit/home/cgatherapeuticals/`

## The company
CgA Therapeuticals, Inc. (San Diego, CA) develops catestatin (CST; human chromogranin A residues 352–372, a naturally
occurring 21-amino-acid peptide) and next-generation CST peptides and peptidomimetics (CST-R 22-mer, human variants G364S-CST
and P370L-CST, retro-inverso RI-CST, D-amino-acid CST) for gastroparesis/GI dysmotility, metabolic disease, cardiovascular
disease and Alzheimer's disease/tauopathies. Sources: cgatherapeuticals.com /pipeline, /therapeutic-application,
/patent-and-ip, /federal-research-support, /news, /media, /publications, /leadership/*, /contact-us.

Organisation record (NIH RePORTER, 1R43DK148298-01): CGA THERAPEUTICALS INCORPORATED, San Diego, CA 92130-2694, UEI GU3WUM9SAR81.
No street address published on the site; the build shows "San Diego, CA 92130". Phone (858) 204-2924 and
smahata@cgatherapeuticals.com from /contact-us.

## Lead
- Sushil K. Mahata, Ph.D. — Founder & President (site /leadership). Professor of Medicine, UC San Diego; Research
  Physiologist, VA San Diego Healthcare System. Co-discoverer of catestatin (proposed domain 1995, identified 1996, coined
  the name 1997). Email published on the contact page: smahata@cgatherapeuticals.com. Greeting: "Dear Dr. Mahata".
- Manjula Mahata, Ph.D. — Chief Scientific Officer; contact PI of 1R43DK148298-01 (Sushil K. Mahata is co-PI).

## Activity
- NIH/NIDDK SBIR Phase I 1R43DK148298-01, "Peptide and Peptidomimetic Therapy for Gastroparesis", $350,195, award notice
  2026-09-17, project start 2026-09-23 (https://reporter.nih.gov/project-details/11410020).
- Jan 2026 exclusive licence with The Regents of the University of California (UC San Diego) (site /news).
- Sept 2026 Molecular Therapy paper (PMID 42768750) and UC San Diego Today story (2026-09-22); May 2026 Communications
  Biology (PMID 42177347); April 2026 Acta Neuropathologica Communications (PMC13192062).

## Bad-site evidence (live site, 2026-11-20)
1. Hero is a raw protein-sequence diagram (CgA bar with PST/CST blocks and six numbered disease icons) pasted in as the
   main image with a plain caption beneath, over a large empty white band.
2. A slate band with one line ("From the Discovery of Catestatin (CST) to Next-Generation Therapeutics.") and a button.
3. Generic agency template (footer "Site designed and maintained by AudiologyLive", an audiology-practice vendor);
   jQuery cycle slider, Font Awesome 5.7, boxed portrait cards with "Read BIO".

## Hero
A crafted render of their real product (HOME_BRIEF 2c): human catestatin from its published NMR structure, RCSB PDB 1LV4
("Human catestatin 21-mer", model 1, all atoms incl. H), space-filling, ray traced in numpy by `render.py`
(`python3 render.py 1100 1100 hero.png 2 0 30 -15`), carbon in logo teal, oxygen in logo orange; analytic sphere AO and
soft shadows; alpha, no ground. The 1LV4 file is kept beside the script.

## Palette (BK)
logo.png pixel samples: teal #3e6668 (site CSS uses #3e6668 for bands/buttons), orange ~#bc4a04, black.
→ --acc #bc4a04 (buttons, segment), --accL #ec9358 (accent text on dark), --accD #9a3c03 / --rd #a5420a (on bone),
--teal #3e6668 / --tealL #8fb7b6 (logo mark, story beads, glow), --ink #0b1516 (teal-black), bone #f4f1ec.
Type: Fira Sans (their own site font) + Fraunces for display.

## Photos (BJ)
Used: the five leadership portraits (400×400, cropped 4:5). Not used: banner-2.jpg (the diagram hero itself; its content
is redrawn as the story scene), logo (redrawn as an SVG mark).

## Story
CgA bar (439 aa) → CST segment 352–372 lifts into the 21-residue chain with its real sequence SSMKLSFRARAYGFRGPGPQL →
lines to the systems CST acts on in preclinical studies → chain turns retro-inverso (reversed sequence, D-amino acids)
and a protease cuts a native chain while RI-CST stays intact (site: RI-CST "increased resistance to proteolytic
degradation", "substantially prolonged pharmacokinetic profile").
