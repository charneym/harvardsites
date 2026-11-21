var FONTS=['400 1em "Questrial"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
var MAIL="";
var RP="https://reporter.nih.gov/project-details/";
var PM="https://pubmed.ncbi.nlm.nih.gov/";
/* Programmes: from the NIH RePORTER record of Iluminos Therapeutics, LLC (Tucson, AZ; R42/R44NS129400), the 2026
   DYR533 preprints (PMID 41648480, 42687920) and the company's MassBio profile. [compound, indication, route, status, detail, link, link label] */
var PIPE=[
 ["DYR533","Down syndrome: cognitive decline and Alzheimer's-like pathology","Oral small molecule","IND-enabling · NINDS SBIR Phase II","The NIH programme was designed in two phases: Phase I to confirm the lead molecule's efficacy in a mouse model of Down syndrome, Phase II to take it through IND-enabling studies. The project period runs to August 2027.",RP+"11194266","NIH RePORTER"],
 ["DYR533","Alzheimer's disease","Oral small molecule","Preclinical","In 3xTg-AD mice, DYR533 reduced pathological tau hyperphosphorylation, attenuated neuroinflammation, ameliorated amyloidosis and improved spatial memory.",PM+"41648480/","bioRxiv, 2026"],
 ["DYR533","Primary tauopathies: Pick's disease, CBD, PSP","Oral small molecule","Preclinical","Dyrk1a protein is elevated in human brains with primary tauopathies and tracks disease severity. In the PS19 tauopathy model, DYR533 reduced tau phosphorylation at T217, T181 and S396 and lowered neuroinflammatory cytokines.",PM+"42687920/","Research Square, 2026"],
 ["Dyrk1a programme","Type 1 diabetes","Small molecule","Exploratory","Iluminos lists Type 1 diabetes among the potential applications of its Dyrk1a strategy, alongside its central nervous system programmes.","https://www.massbio.org/mb-drive-participant/iluminos-therapeutics/","MassBio"]];
/* The January 2026 DYR533 preprint (bioRxiv, PMID 41648480) and the August 2026 Research Square preprint (PMID 42687920). */
var EVID=[
 ["In human brains","Dyrk1a protein is consistently elevated across Alzheimer's disease and related dementias, and in primary tauopathies it rises with Braak stage"],
 ["The molecule","DYR533 is a selective, orally bioavailable, brain-penetrant Type 1 Dyrk1a inhibitor that also blocks the kinase's autophosphorylation and reduces its abundance"],
 ["In three mouse models","Across 3xTg-AD, PS19 and Ts65Dn mice, DYR533 reduced tau hyperphosphorylation, attenuated neuroinflammation and ameliorated amyloidosis"],
 ["In behaviour","Treated mice showed improved anxiety-like behaviour and spatial memory; in the PS19 model the behavioural gains were modest"]];
/* Text-only masthead (CI/CL): NIH RePORTER (contact PI and co-PI), MassBio profile, Tech Launch Arizona and University of Arizona releases. */
var TEAM=[
 {g:"Co-founders",name:"Travis Dunckley, PhD",title:"Co-Founder",sum:"Contact PI on the NIH awards; led the biological validation of the Dyrk1a inhibitors."},
 {g:"Co-founders",name:"Christopher Hulme, PhD",title:"Co-Founder",sum:"Professor of medicinal chemistry at the University of Arizona, formerly at Eli Lilly and Amgen; led the medicinal chemistry behind DYR533."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","Elevated DYRK1A in primary tauopathies and therapeutic targeting with the brain-penetrant inhibitor DYR533","Research Square",PM+"42687920/"],
 ["January 2026","Dyrk1a inhibition with the novel compound DYR533: a cross-disease strategy targeting amyloidosis, tau and neuroinflammation","bioRxiv",PM+"41648480/"],
 ["August 2025","NINDS continues Iluminos's SBIR Phase II programme, Commercialization of Selective Dyrk1a Inhibitors for Down Syndrome ($1,428,499)","NIH RePORTER",RP+"11194266"],
 ["September 2024","NINDS awards Iluminos an SBIR Phase II grant to take its Dyrk1a inhibitor through IND-enabling studies ($1,496,403)","NIH RePORTER",RP+"10709750"],
 ["November 2022","ASU researchers developing pioneering drug to treat Alzheimer's disease in Down syndrome patients","ASU News","https://news.asu.edu/20221117-solutions-asu-researchers-developing-pioneering-drug-treat-alzheimers-disease-down-syndrome"],
 ["September 2022","NINDS awards Iluminos an STTR Phase I grant for selective Dyrk1a inhibitors in Down syndrome ($498,634)","NIH RePORTER",RP+"10545138"],
 ["April 2018","Startup Iluminos licenses Arizona-invented treatment for Alzheimer's disease","Tech Launch Arizona","https://techlaunch.arizona.edu/news/2018/04/startup-iluminos-licenses-arizona-invented-treatment-alzheimer%E2%80%99s-disease"]];
var SHEETS=[];
