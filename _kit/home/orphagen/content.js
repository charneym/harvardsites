var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Arimo"','500 1em "Arimo"','600 1em "Arimo"'];
var MAIL="info@orphagen.com";
var OG="https://www.orphagen.com/";
var RP="https://reporter.nih.gov/project-details/";
/* the pipeline, from orphagen.com (Pipeline, OR-449, OR-812, RORβ pages) and the CPRIT release (Nov 2024):
   [programme, target, indication, stage label, progress 0..4 (done), progress incl. in-progress, detail, dim, link label] */
var PIPE=[
 ["OR-449","SF-1 (NR5A1) antagonist","Adrenocortical cancer, with potential expansion in head & neck, lung squamous and other cancers where SF-1 is highly elevated","IND-enabling studies practically complete; Phase 1 next",2.85,3.15,"First-in-class and orally bioavailable. FDA Rare Pediatric Disease Designation for paediatric adrenocortical carcinoma, and a $10.2M CPRIT award toward IND filing and a Phase 1 trial in adult ACC.",0,"Lead programme"],
 ["OR-812","RARα antagonist","Ulcerative colitis, Crohn’s disease and other conditions of gut inflammation; potential in graft-versus-host disease","Preclinical development",2,2.5,"A highly selective oral antagonist that blocks the gut-homing markers CCR9 and α4β7 on T cells, reducing inflammatory T-cell infiltration and tissue damage in mouse colitis models.",0,"Development candidate"],
 ["RORβ","Antagonists and agonists","Small cell lung cancer and certain leukaemias","Research tools; open to collaboration",1,1.3,"Potent, highly specific RORβ ligands. RORβ antagonists broadly modulate gene expression and inhibited growth of a small cell lung cancer cell line.",1,"Partnering"]];
/* milestones: orphagen.com press releases and NIH RePORTER */
var EVID=[
 ["FDA · January 2023","Rare Pediatric Disease Designation for OR-449 in paediatric adrenocortical carcinoma"],
 ["CPRIT · November 2024","A $10.2M product development award toward IND filing and a Phase 1 trial of OR-449"],
 ["NIH NIDDK · 2024–2025","SBIR funding of up to $1.7M for the preclinical development of OR-812 in inflammatory bowel disease"],
 ["Partnering · since 2008","A strategic partnership on RORγ antagonists for autoimmune disease, the first of many RORγ programmes across the industry"]];
/* orphagen.com (Team). Text-only masthead; summaries only restate the site. */
var TEAM=[
 {g:"Leadership",name:"Scott Thacher, PhD",title:"Founder and Chief Executive Officer",sum:"30+ years in pharmaceutical R&D; directed dermatology and metabolic disease programmes at Allergan. PhD in biophysics, Harvard."},
 {g:"Leadership",name:"Paul Crowe, PhD",title:"Vice President of Drug Discovery",sum:"At Orphagen since 2008; formerly Senior Director of Pharmacology and Lead Discovery at Neurocrine Biosciences."},
 {g:"Leadership",name:"Andrew Dorr, MD",title:"Chief Medical Officer",sum:"Former Senior Investigator at the NCI; senior roles at Eli Lilly, Ionis and Salmedix; Phase 1 trial design and execution."},
 {g:"Leadership",name:"Neil Raheja, PhD",title:"Director of Chemistry",sum:"Designed compounds including OR-812 and OR-449; formerly Group Leader of Chemistry at Celgene San Diego, and Pfizer."},
 {g:"Leadership",name:"JoAnn Z. Wilson, PhD",title:"CMC Expert Consultant",sum:"Formerly Vice President, Chemistry, Manufacturing and Controls at Exelixis."},
 {g:"Outside board members",name:"Kelly Beck, MBA",title:"Board member",sum:"CEO of Trench Therapeutics; formerly CEO of PolyCore Therapeutics."},
 {g:"Outside board members",name:"Rick Hawkins",title:"Board member",sum:"Co-founder of Pharmaco and Sensus; CEO of Lumos Pharma, 2010–2024."},
 {g:"Outside board members",name:"Len Post, PhD",title:"Board member",sum:"CSO at Vivace & Virtuoso Therapeutics; formerly CSO at BioMarin."},
 {g:"Scientific advisors",name:"Gary Hammer, MD, PhD",title:"University of Michigan",sum:"Schembechler Professor of Adrenal Cancer; publications on SF-1 function and the genomics of ACC."},
 {g:"Scientific advisors",name:"Anjana Rao, PhD",title:"La Jolla Institute for Immunology",sum:"Member of the National Academy of Sciences; gene expression in T cells."},
 {g:"Scientific advisors",name:"Casey T. Weaver, MD",title:"University of Alabama at Birmingham",sum:"Member of the National Academy of Sciences; known for defining the Th17 subset. Advisor since 2009."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2025","NIDDK continues Orphagen’s SBIR award for a novel oral drug class that inhibits gut migration of activated T cells","NIH RePORTER",RP+"11184207"],
 ["December 2024","Orphagen receives NIH funding award to advance a novel drug for inflammatory bowel disease","Orphagen",OG+"orphagen-pharmaceuticals-receives-nih-funding-award-to-advance-a-novel-drug-for-inflammatory-bowel-disease/"],
 ["November 2024","CPRIT announces a product development award to support a Phase 1 clinical trial for OR-449","Orphagen",OG+"the-texas-state-cancer-agency-cprit-announces-a-product-development-award-to-support-a-phase-1-clinical-trial-for-or-449-a-first-in-class-therapy-for-oncology/"],
 ["January 2023","FDA grants OR-449 Rare Pediatric Disease Designation for paediatric adrenocortical carcinoma","Orphagen",OG+"orphagen-pediatric-adrenocortical-carcinoma/"],
 ["June 2022","Data on downstream targets of the SF-1 antagonist OR-449 presented at ENDO 2022","Orphagen",OG+"orphagen-pharmaceuticals-presents-data-on-downstream-targets-of-sf-1-antagonist-or-449-at-endo-2022/"],
 ["April 2022","Preclinical efficacy data on OR-449 in Leydig cell tumours presented at AACR 2022","Orphagen",OG+"orphagen-pharmaceuticals-presents-preclinical-efficacy-data-at-aacr-2022-on-or-449-a-first-in-class-steroidogenic-factor-1-inhibitor-for-the-treatment-of-leydig-cell-tumors/"]];
var SHEETS=[];
