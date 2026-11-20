# Cloverleaf Bio (slug: cloverleafbio) — HOME-ONLY build, 2026-11-20

- Site: https://cloverleafbio.com/ (WordPress). Its whole content: the logo on a near-black ground and four lines of small centered text/links ("Developing a new class of RNA therapeutics to revolutionize cancer therapy.", "Cloverleaf Raises $33M Seed Round", "We are hiring!", contact@cloverleafbio.com) and "© 2026 Cloverleaf Bio".
- Type: US therapeutics startup (SPEC §2c). Engineered tRNA therapeutics for cancer (HCC, colorectal, ccRCC). Oncology; no pathogens, toxins or biodefence.
- HQ: Cloverleaf Bio, Inc., 101 College Street, Suite 210, New Haven, CT 06510 (SEC Form D, CIK 0002153574, via formds.com). Lab space at BioLabs New Haven (job posting). RePORTER: New Haven CT, UEI NR4GYWZ66HM5.
- Email: contact@cloverleafbio.com (their home page, Cloudflare-obfuscated link decoded).
- Lead: Austin Stratton Draycott, Ph.D., Co-founder and CEO (seed release; contact PI on 1R42CA290914-01A1; Form D director and executive officer). Yale Ph.D. (NCI F31 fellowship at Yale, "Developing Tools to Map and Quantify Dihydrouridine in the Mammalian Transcriptome"). The NIH abstract refers to him as "he". Greeting: "Dear Dr. Draycott".
- Others: Cole Lewis, Ph.D., Co-founder and CSO; Wendy Gilbert, Ph.D., Co-founder and SAB Chair (Maxine F. Singer '57 PhD Professor of Molecular Biophysics and Biochemistry, Yale). Advisors: Albert Lai (AbbVie Ventures), Luisa Escobar-Hoyos (Yale), Michael McCaman (former head of CMC, Intellia). Form D directors: Draycott, Dima Kuzmin, Matthias Samwer, Christina Vorvis.

## Facts used
- Seed release 2026-09-08 (GlobeNewswire; reprinted by Yale Ventures, Manila Times/GNW, Pulse 2.0): upsized, oversubscribed $33M seed led by 4BIO Capital with AbbVie Ventures, Eli Lilly and Company, Boehringer Ingelheim Venture Fund, Draper Associates, Mission BioCapital, American Cancer Society BrightEdge. Proceeds: inhibitory tRNA asset for HCC through early clinical testing; antibody-tRNA conjugate (ATC) for colorectal cancer through preclinical development. CLB-001 preclinical: greater potency and selectivity for cancer cells than healthy cells; active in CRC cell lines resistant to frontline chemotherapy and current ADC payloads; outperformed standard of care in HCC and lung adenocarcinoma models at lower doses; no liver-damage markers or systemic toxicity in animal tolerability studies. Platform may extend to other cancers and, longer term, neurodegenerative and fibrotic diseases. Early support from NCI SBIR/STTR.
- RePORTER 1R42CA290914-01A1 abstract: HCC >90% of liver cancer; 5-year survival <15%; HCC cells depend on high expression of multiple tRNA-modifying enzymes for proliferation and metastasis; engineered tRNAs containing 5-FU irreversibly inhibit multiple enzymes from the same molecule; CLB-001 IC50 >7,000x lower than free 5-FU in HCC cells, nanomolar, outperforms sorafenib in vivo.
- RePORTER 75N91025C00020 (SBIR FY25 Concept Award, $355,000, start 2025-09-15): engineered tRNA therapeutics for ccRCC (>75% of kidney cancer).
- Not used: ">25 enzymes" (only in a search summary, not confirmed in a primary source).

## Activity (since 2025-05-18)
- 2026-09-08: $33M seed financing (GlobeNewswire release; Form D filed 2026-09-09).
- 2025-09-15: NCI SBIR concept award, $355,000 (RePORTER 75N91025C00020).
- 2025-06-23: NCI STTR award 1R42CA290914-01A1, $399,966. https://reporter.nih.gov/project-details/11175149

## Bad-site evidence
- A near-empty holding page: logo on black plus four lines of small centered text and links; no navigation, no pages.
- No science: one sentence ("Developing a new class of RNA therapeutics to revolutionize cancer therapy."); no mention of tRNA, CLB-001, HCC, the ATC program or 5-FU.
- No team, no pipeline, no investors, no address; the only news is an outbound link to the $33M seed release.

## Palette
- Sampled from the live site and logo PNG (wp-content/uploads/2026/09/website_test_3.png): ground #161515 → --ink; amber #feae00 → --accL; ember #eb4304 → --ember, darkened #b83a08 → --acc on the warm white #f7f3ec. Logo mark cut from their PNG (unmixed from the dark ground) and used as the brand mark; wordmark set live in Figtree 600 (close to the logo's geometric sans), "Bio" in amber like the logo.

## Hero / story
- Hero (update option c): crafted render of the real molecule: a space-filling model of yeast tRNA-Phe from its 1.93 Å crystal structure (RCSB PDB 1EHZ, https://www.rcsb.org/structure/1EHZ), rendered offline by trna.py (sphere shading, depth AO, backbone amber, bases ember) on a transparent ground; slow drift, ink scrim on the left, no pointer response.
- Story: one line-drawn tRNA cloverleaf with three tRNA-modifying enzymes: (1) enzymes work the loops, native modifications light; (2) 5-FU positions light in the engineered tRNA; (3) enzymes dock and stay (irreversibly inhibited). Schematic positions.

## Photos (BJ)
- The site has only the logo; no photography exists, hence option (c).

## Gates (2026-11-20)
- smoke, reveal 1440/390, anim 1440/390, clip 1440/390, overlay, masthead, mixed, polish, loader, unstyled, cramped, hoverpad, split, balance, logo, buildout-test (8 nav clicks at 1440 and 390): OK.
- hero-audit: "no title found", the same environment-wide result as on shipped sites (olmedabio, nephrodi, dotyscientific).
- By eye: hero at 390/1280/1440/1920 (render clear of the H1, no seam); every story frame at 1440 and 390; build-out page at 1440 and 390.
