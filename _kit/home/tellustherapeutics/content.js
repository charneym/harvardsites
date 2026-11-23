var FONTS=['500 1em "Montserrat"','600 1em "Montserrat"','700 1em "Montserrat"','400 1em "Montserrat"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var MAIL="mailto:jasonkralic@tellustherapeutics.com";
var MAIL2="mailto:austinschwartz@tellustherapeutics.com";
/* Programmes, from tellustherapeutics.com (Pipeline page and its pipeline chart, Oct 2025). Stage words as the chart shows
   them. [population, asset, indication, stage, detail, dim, tag] */
var PIPE=[
 ["Newborns","TT-20","White matter injury (WMI)","Phase 1-ready","The leading cause of cerebral palsy in preterm babies, with no treatment today. The IND-enabling programme has been agreed with the U.S. FDA, and a first-in-human trial approved by Australia&#8217;s Human Research Ethics Committee.",0,"Lead asset"],
 ["Newborns","","Necrotizing enterocolitis (NEC)","Preclinical (in vivo)","Inflammation and tissue death in the bowel of premature infants, affecting up to 10% of very low birth weight babies. No preventive therapy or medicine can halt it once it begins.",0,""],
 ["Newborns","","Post-hemorrhagic hydrocephalus (PHH)","Discovery (in vitro)","Bleeding in the preterm brain blocks the flow of cerebrospinal fluid. Treatment today is surgical drainage; nothing prevents the condition or the inflammation behind it.",1,""],
 ["Adults","","Multiple sclerosis (MS)","Preclinical (in vivo)","Over 2.8 million people live with MS. Existing treatments slow the disease but cannot repair damaged myelin, the coating Tellus&#8217;s oxysterols help rebuild.",0,""],
 ["Adults","","Inflammatory bowel disease (IBD)","Discovery (in vitro)","Crohn&#8217;s disease and ulcerative colitis, where similar biological pathways drive chronic inflammation and current treatments cannot heal the underlying tissue damage.",1,""]];
/* tellustherapeutics.com (About). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Jason Kralic, PhD",title:"CEO and Co-founder",sum:"Neuropharmacologist and business development executive; formerly Head of Neurosciences Business Development at GlaxoSmithKline. PhD in pharmacology, UNC-Chapel Hill."},
 {g:"Leadership",name:"Eric Benner, MD, PhD",title:"Acting CSO and Co-founder",sum:"Board-certified neonatologist at Duke University, whose laboratory discovered that oxysterols in human breast milk promote oligodendrocyte differentiation in neural stem cells."},
 {g:"Leadership",name:"Austin Schwartz, PhD, MBA",title:"VP of Operations and Finance",sum:"Leads programme management of the lead programme and the company’s finances; PhD in Molecular Biophysics and MBA, Florida State University."},
 {g:"Leadership",name:"Jaron Ballentine, MBA",title:"VP of Clinical Operations and Business Development",sum:"Life sciences executive who began in R&D commercial strategy at GSK, then ran his own consultancy for small and mid-sized life science companies."},
 {g:"Leadership",name:"Khadar Abdi, PhD",title:"Director of Research",sum:"Over 12 years researching neural stem cells and progenitor cells at Duke University; leads the pipeline development programme."},
 {g:"Scientific advisory board",name:"Simon Gregory, PhD",title:"Duke University",sum:"Professor of Neurology and Research Director of the Duke Center for Research in Autoimmunity and MS."},
 {g:"Scientific advisory board",name:"Terrie E. Inder, MD",title:"CHOC Children’s",sum:"Chair of the Center of Neonatal Research; formerly Chair of Pediatric Newborn Medicine at Brigham and Women’s Hospital."},
 {g:"Scientific advisory board",name:"Chi Hornik, PharmD",title:"Duke University",sum:"Director of Clinical Research, Division of Pediatric Critical Care Medicine; site PI on federal and industry-funded clinical trials."},
 {g:"Board of directors",name:"Chris Garabedian",title:"Chairman of the Board",sum:"Chairman and CEO of Xontogeny and Portfolio Manager of the Perceptive Xontogeny Venture Fund; formerly President and CEO of Sarepta Therapeutics."},
 {g:"Board of directors",name:"Heather Antioquia",title:"Board Member",sum:"Vice President of Program Development at Xontogeny."}];
/* news, linking to the company's own posts */
var NEWS=[
 ["28 Sep 2025","Therapeutic innovations stand out to investors at Triangle Venture Day","https://www.tellustherapeutics.com/therapeutic-innovations-stand-out-to-investors-at-triangle-venture-day/","NCBiotech"],
 ["20 Jun 2025","C-Path launches a global collaborative to advance drug development for neonatal brain injury, with Tellus as a founding industry member","https://www.tellustherapeutics.com/c-path-launches-global-collaborative-to-advance-drug-development-for-neonatal-brain-injury/","Critical Path Institute"],
 ["Aug 2023","Cell Stem Cell: 20-α-hydroxycholesterol, an oxysterol in human breast milk, reverses mouse neonatal white matter injury","https://www.cell.com/cell-stem-cell/pdf/S1934-5909(23)00255-2.pdf","Chao, Benner et al."]];
var SHEETS=[];
