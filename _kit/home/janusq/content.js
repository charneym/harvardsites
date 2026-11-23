var FONTS=['400 1em "Cabin"','500 1em "Cabin"','600 1em "Cabin"','400 1em "Source Sans 3"','500 1em "Source Sans 3"'];
var MAIL="mailto:george.farr@janusq.com";
var RP="https://reporter.nih.gov/project-details/";
/* Programs, from janusq.com (Our Products) and JanusQ's NIH SBIR abstracts (NIH RePORTER). Stage words only as the
   company states them. [program, area, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["JQ-A1","DA1 · Alzheimer's","Keeps mitochondria whole","Animal models · NIH SBIR","JQ-A1 prevents the aberrant association of two mitochondrial proteins, ATAD3A and the fission GTPase Drp1, that would otherwise lead to mitochondrial fragmentation and neuronal cell death. It also improves brain cholesterol metabolism, with markedly improved behavioral and neurological outcomes in both AD and HD models.",0,"Alzheimer's",RP+"11254613","NIH RePORTER"],
 ["JQ-H3","HV-3 · Huntington's","Spares mitochondria from degradation","Animal models · NIH SBIR","JQ-H3 blocks a pathological interaction between mutant huntingtin protein and VCP (p97) at the mitochondrion, preventing degradation of mitochondria and degeneration of neurons. Early intervention with JQ-H3 delays the onset of HD and extends life in animal models.",0,"Huntington's",RP+"11254642","NIH RePORTER"],
 ["JQ-P2","CS2 · Parkinson's","Shields mitochondria from α-synuclein","Animal models","JQ-P2 blocks the toxic effects of α-synuclein inside the mitochondria of neurons affected by Parkinson's disease. By treating patients early, JQ-P2 aims to ameliorate PD onset and progression.",1,"Parkinson's","",""]];
/* NIH SBIR awards to JanusQ, LLC, from NIH RePORTER. */
var EVID=[
 ["NIA · 2025","Phase I SBIR (1R43AG097351) for the pharmacokinetics and in vivo efficacy of DA1 macrocyclic peptides in a mouse model of Alzheimer's disease"],
 ["NINDS · 2025","Phase I SBIR (R43NS145846) for in vivo efficacy and in vitro toxicity of the peptide HV-3 in Huntington's disease, continued in 2026"],
 ["NIA · 2022","Phase I SBIR (1R43AG079692) for the pharmacokinetics and pharmacodynamics of DA1 in Alzheimer's disease"],
 ["NINDS · 2020","Phase I SBIR (1R43NS119006) for the pharmacokinetics of HV-3 in Huntington's disease"]];
/* janusq.com (Team). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Board of directors",name:"George Farr, PhD",title:"Co-Founder & CEO",sum:"Over 30 years of experience in biochemistry, biophysics and pharmacology, and extensive experience in animal studies of CNS diseases."},
 {g:"Board of directors",name:"Xin Qi, PhD",title:"Co-Founder & CSO",sum:"Professor and chair of the Department of Physiology & Biophysics at Case Western Reserve University; research on mitochondrial quality control and neurodegenerative diseases."},
 {g:"Board of directors",name:"Paul Schlather",title:"Co-Founder & CFO",sum:"34 years in public accounting; a board member of four privately held companies in northeast Ohio and of one public company, Stoneridge (SRI)."},
 {g:"Board of directors",name:"Walter Boron, MD, PhD",title:"Co-Founder & Chairman",sum:"Professor and former chair of Physiology & Biophysics at Case Western Reserve University; co-founder of Aeromics and co-editor of the textbook Medical Physiology."},
 {g:"Science team",name:"Andrew Schilb, PhD",title:"Principal Scientist",sum:"Principal investigator on JanusQ's NIH SBIR projects for HV-3 and DA1."},
 {g:"Science team",name:"Thomas Radford",title:"Lab Technician",sum:""}];
var NEWS=[
 ["September 2025","NIA awards a Phase I SBIR for DA1 macrocyclic peptides in a mouse model of Alzheimer's disease","NIH RePORTER",RP+"11254613"],
 ["September 2025","NINDS awards a Phase I SBIR for in vivo efficacy and toxicity of HV-3 in Huntington's disease","NIH RePORTER",RP+"11254642"],
 ["September 2022","NIA awards a Phase I SBIR for the pharmacokinetics and pharmacodynamics of DA1 in Alzheimer's disease","NIH RePORTER",RP+"10546403"],
 ["December 2020","NINDS awards a Phase I SBIR for the pharmacokinetics of HV-3 in Huntington's disease","NIH RePORTER",RP+"10078211"]];
var SHEETS=[];
