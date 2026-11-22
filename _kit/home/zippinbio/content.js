var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"','600 1em "Lexend"'];
var RPT="https://reporter.nih.gov/project-details/11380908";
var LI="https://www.linkedin.com/company/zippin-bio";
/* the Phase I aims, as set out in the NIH SBIR award abstract (R43NS139812, NINDS). [tag, title, detail] */
var AIMS=[
 ["Aim 1","Build the carrier library","Create eight ZippinCarriers that vary in size, shape, charge, composition and hydrophobicity, and conjugate each to a phosphorodiamidate morpholino oligomer (PMO) and to transferrin."],
 ["Aim 2","Screen across a 3D barrier","Test how well the eight carrier–PMO conjugates cross the blood–brain barrier in vitro, in three-dimensional BBB models built in microfluidic systems."],
 ["Aim 3","Confirm in the brain","Evaluate the four best-performing conjugates in the brain in mice. The Phase I goal: a ZippinCarrier that specifically crosses the BBB, with consistent data in vitro and in vivo."],
 ["Phase II","Efficacy, safety and scale","Planned next: efficacy and safety studies in healthy and disease models, and a scalable continuous-flow manufacturing process at the Corvallis Microfluidics Technology Hub."]];
/* award record (NIH RePORTER, project 11380908; zippinbio.com news, 15 August 2025) */
var AWARD=[
 ["Award","NIH SBIR Phase I, National Institute of Neurological Disorders and Stroke (NINDS), R43NS139812"],
 ["Project","Novel carriers for enhanced oligonucleotide permeability through the blood–brain barrier"],
 ["Payload","Phosphorodiamidate morpholino oligomers (PMOs), carried across the BBB via the transferrin receptor"],
 ["Principal investigator","Mahsa Khoshbakht, PhD. Second-year award issued July 2026"]];
/* zippinbio.com/team and the linked profile pages. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founders",name:"Mahsa Khoshbakht, PhD",title:"CEO and Co-Founder",sum:"Leads the company’s vision and strategy. Deep expertise in oligonucleotide and peptide therapeutics, chemical modification and targeted delivery of complex molecules."},
 {g:"Founders",name:"Omid Sadeghi, PhD",title:"Executive Chairman and Co-Founder",sum:"The mind behind the technology: more than 20 years in inorganic chemistry and nanoparticle design, controlling the size, surface and composition of nanomaterials."},
 {g:"Founders",name:"Douglas Keszler, PhD",title:"Advisor and Co-Founder",sum:"University Distinguished Professor of Chemistry Emeritus at Oregon State University; a leader in materials chemistry and technology commercialization."},
 {g:"Team and advisors",name:"Valeriia Stepanova, MS",title:"Research Scientist",sum:"Drives experimental work: biochemical assays, advanced sample preparation and analytical characterization, validating Zippin Bio’s delivery technologies."},
 {g:"Team and advisors",name:"David Katz, PhD",title:"Advisor",sum:"Founder of Sparrow Pharmaceuticals; 18 years in R&D leadership at Abbott/AbbVie; Entrepreneur-in-Residence at Oregon Health & Science University."}];
/* news: zippinbio.com news posts and the NIH award record. [date, headline, source, url] */
var NEWS=[
 ["August 2026","Zippin Bio named a finalist in the 2026 TiE Oregon Women’s Pitch Competition","Zippin Bio","https://www.zippinbio.com/about-1-1-1"],
 ["July 2026","NIH issues the second-year award for Zippin Bio’s blood–brain barrier carrier project","NIH RePORTER",RPT],
 ["November 2025","Zippin Bio receives a prize from Perkins Coie at the Pitch Polish Competition","Zippin Bio","https://www.zippinbio.com/about-1-1"],
 ["August 2025","Zippin Bio awarded a $700K NIH Phase I SBIR grant to advance its BBB delivery platform","Zippin Bio","https://www.zippinbio.com/about-1"],
 ["October 2024","Finalist at the 2024 Innovation Showcase Pitch Challenge, OHSU Biotech Summit","Zippin Bio","https://www.zippinbio.com/about-1-2"]];
var SHEETS=[];
