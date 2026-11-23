var FONTS=['300 1em "Exo 2"','400 1em "Exo 2"','500 1em "Exo 2"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="contact@paulexbio.com";
var RP="https://reporter.nih.gov/project-details/";
var PR="https://paulexbio.com/pr/";
/* The programme, from paulexbio.com (Science, press releases of 2 and 10 November 2026) and the NIH STTR record.
   Status words only where the company or the public record states them. [area, sub, title, status, detail, dim, tag] */
var PIPE=[
 ["PAL-119","Phase 1 · healthy volunteers","Single and multiple ascending doses, and food effect","NCT07901595 · clinical sites in Australia","Single ascending doses in up to six cohorts and multiple ascending doses in up to three, blinded and placebo-controlled, with an open-label crossover to test the effect of food on PAL-119 exposure.",0,"Phase 1"],
 ["PAL-119","Phase 2a · type 2 diabetes","Two dose levels against placebo","Randomised, double-blind, placebo-controlled","Safety and tolerability first, then pharmacokinetics and changes in plasma C-peptide, a marker of the body's own insulin production, with serum insulin, fasting glucose and GLP-1.",0,"Phase 2a"],
 ["PAL-119","Phase 2a · type 1 diabetes","PAL-119 against placebo","Randomised, double-blind, placebo-controlled","A separate study in adults with type 1 diabetes, with the same focus on safety and tolerability and the same exploratory measures of C-peptide, insulin and glucose.",0,"Phase 2a"],
 ["Research","Function","The second target","NIH STTR 1R42DK148220, Aim 2","Beyond DYRK1A, the lead compound enhances beta cell function through protein kinase A signalling, which supports glucose sensing and insulin secretion. The NIH project identifies and validates this second target.",1,"Research"],
 ["Research","Durability","Back-up DYRK1A inhibitors","NIH STTR 1R42DK148220, Aim 3","Structurally distinct DYRK1A inhibitors advanced alongside the lead, to keep the programme durable.",1,"Discovery"]];
/* From the public abstract of NIDDK award 1R42DK148220-01 (September 2026). */
var EVID=[
 ["Potency","More than ten times as potent and more selective than harmine, the original proof-of-concept compound"],
 ["Efficacy","In mice carrying human islets, the lead restores normal blood glucose within one week"],
 ["Readiness","ADME, PK and 14-day GLP toxicology in rats and dogs completed with wide safety margins; more than a kilogram of GLP-grade drug substance made"],
 ["Combination","The effect of DYRK1A inhibitors is amplified by GLP-1 receptor agonists, a class already prescribed to millions"]];
/* paulexbio.com (About: leadership, scientific advisory board, board of directors; profile pages). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Miguel A. Sanjuan, Ph.D.",title:"Founder, President and Chief Executive Officer",sum:"More than 25 years in the life sciences. Previously SVP of Research and Early Development at Provention Bio, where he helped develop TZIELD®, and VP of Translational Research at Gossamer Bio."},
 {g:"Leadership",name:"Francisco Leon, M.D., Ph.D.",title:"Co-Founder and Chairman of the Board",sum:"Clinical and basic immunologist who has helped bring six drugs to market, most recently teplizumab (TZIELD®). Co-founded Celimmune (acquired by Amgen) and Provention Bio (acquired by Sanofi)."},
 {g:"Leadership",name:"Phil Ball, Ph.D.",title:"Head of Business Development and Operations",sum:"Over 20 years in international biopharma; VP of Alliance Management and Business Development at Provention Bio through its acquisition by Sanofi."},
 {g:"Leadership",name:"Justin Vogel",title:"Head of Finance",sum:"Close to two decades of biotech finance, more than $1.3 billion raised, and financial operations built for four public companies, including Provention Bio and Iveric Bio."},
 {g:"Leadership",name:"Christoph Nowak, M.D., Ph.D.",title:"Head of Clinical",sum:"Fourteen years across biotech and clinical medicine; former Chief Medical and Business Officer of Diamyd Medical and Assistant Professor at Karolinska Institutet."},
 {g:"Leadership",name:"Jacquelyn Brown, Ph.D.",title:"Translational Research and Medical Strategy Lead",sum:"Immunologist; type 1 diabetes research at JDRF, then the approval and launch of TZIELD® at Provention Bio."},
 {g:"Leadership",name:"Qing Liu, Ph.D.",title:"Project Manager",sum:"Clinical development and programme leader; Director at City of Hope Medical Center, overseeing IND submissions and regulatory reporting."},
 {g:"Leadership",name:"John Burkhardt, D.V.M., Ph.D.",title:"Toxicology Lead",sum:"Former SVP and Head of Global Drug Safety Research and Development at Pfizer; earlier led AbbVie Preclinical Safety."},
 {g:"Leadership",name:"Joseph Arena, Ph.D.",title:"Regulatory Lead",sum:"President of JP Arena Regulatory Consulting; formerly Vice President, Oncology Products, Global Regulatory Affairs at Pfizer."},
 {g:"Leadership",name:"Ashley Dudley",title:"Executive Administrative Assistant",sum:""},
 {g:"Scientific advisory board",name:"Andrew Fyfe Stewart, M.D.",title:"Director, Diabetes Obesity and Metabolism Institute, Icahn School of Medicine at Mount Sinai",sum:"His group discovered the DYRK1A inhibitor class of beta cell regenerative drugs in 2015."},
 {g:"Scientific advisory board",name:"Adolfo Garcia-Ocana, Ph.D.",title:"Chair, Molecular and Cellular Endocrinology, City of Hope",sum:"Internationally recognised leader in pancreatic beta cell biology and diabetes research."},
 {g:"Scientific advisory board",name:"Robert J. DeVita, Ph.D.",title:"Director of Medicinal Chemistry, Drug Discovery Institute, Mount Sinai",sum:"More than 35 years in drug discovery, including 22 at Merck Research Laboratories."},
 {g:"Board of directors",name:"Edgardo Rayo",title:"Director",sum:"Director of Investment Analysis at MDB Capital; board member of eXoZymes."},
 {g:"Board of directors",name:"Mo Hayat",title:"Director",sum:"Head of Corporate Development and Chief Legal Officer at MDB Capital; founding Chairman and CEO of eXoZymes."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["10 November 2026","Paulex Bio receives an NIH Fast-Track grant to advance the beta cell regeneration therapy PAL-119","Paulex Bio",PR+"paulex-bio-receives-nih-fasttrack-grant-to-advance-beta-cell-regeneration-therapy-of-pal119"],
 ["2 November 2026","Paulex Bio announces registration of its Phase 1/2a trial of PAL-119, an oral small molecule designed to regenerate insulin-producing beta cells","Paulex Bio",PR+"paulex-bio-announces-registration-of-phase-12a-trial-of-pal119-an-oral-small-molecule-designed-to-regenerate-and-restore-the-function-of-insulinproducing-beta-cells"],
 ["September 2026","NIDDK STTR award 1R42DK148220: preclinical development for human trials of beta cell regeneration to treat diabetes","NIH RePORTER",RP+"11405841"],
 ["2015","Harmine-mediated inhibition of DYRK1A increases human pancreatic beta cell replication: the Mount Sinai discovery behind Paulex","Nature Medicine","https://pmc.ncbi.nlm.nih.gov/articles/PMC4690535/"]];
var SHEETS=[];
