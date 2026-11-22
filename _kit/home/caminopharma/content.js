var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','400 1em "Saira"','500 1em "Saira"'];
var MAIL="gonul@caminopharma.com";
var CP="https://www.caminopharma.com/";
/* programmes, from caminopharma.com (Programs, Vision) and the press releases (2020-06-30, 2021-08-25, 2023-12-07, 2024-02-06).
   [modulator, class, indication, molecule/stage line, progress 0..4, progress incl. in-progress, detail, dim] */
var PHS=["Discovery","Preclinical","Phase 1","Phase 2"];
var PIPE=[
 ["mGlu2 PAM","SBP-9330","Tobacco use disorder: an aid to smoking cessation","Phase 2-ready",3,3.5,"Well tolerated with favourable pharmacokinetics in a Phase 1 study in healthy nonsmokers and smokers (NCT04948827). A Phase 2a study in smokers will determine its efficacy for smoking cessation.",0],
 ["mGlu2 PAMs","Analogs","Alcohol, opioid and methamphetamine use disorders","Preclinical",1,1.6,"Validated in rodent models of alcohol dependence with Sanford Burnham Prebys and Wake Forest University School of Medicine, under an NIAAA SBIR award.",0],
 ["mGlu2/3 NAMs","SBP-9881 and analogs","Major depressive disorder and treatment-resistant depression","Preclinical",1,1.4,"Potential for rapid-onset antidepressant activity similar to ketamine, without its side effects such as dissociation and hallucinations. Dosed orally, with fast-acting and long-lasting effects in vivo.",0]];
/* caminopharma.com (About). Text-only masthead (CI/CL); summaries only restate the site. */
var TEAM=[
 {g:"Management team",name:"Gonul Velicelebi, Ph.D.",title:"Founder & CEO",sum:"Scientist-entrepreneur with more than 40 years in first-in-class small-molecule drugs; previously founder, CEO and director of CalciMedica, taken from concept to the clinic."},
 {g:"Management team",name:"Reto Gadient, Ph.D.",title:"Founder & CSO, Head of Pharmacology",sum:"Cellular and molecular neuroscientist with 25+ years in CNS drug discovery; previously Director of Biology at BrainCells Inc. and a team and project leader at AstraZeneca."},
 {g:"Academic founders & scientific advisory board",name:"Nicholas Cosford, Ph.D.",title:"Scientific founder · Sanford Burnham Prebys",sum:"Medicinal chemist and Professor at Sanford Burnham Prebys, whose team discovered SBP-9330; earlier at SIBIA Neurosciences and Merck Research Laboratories."},
 {g:"Academic founders & scientific advisory board",name:"Lutz Tautz, Ph.D.",title:"Scientific founder · Sanford Burnham Prebys",sum:"Research Associate Professor at Sanford Burnham Prebys, developing specific protein tyrosine phosphatase inhibitors as potential therapeutics; Ph.D., Karlsruhe Institute of Technology."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["December 2025","Spontaneous daily sleep disruptions associated with morphine dependence and withdrawal in rats, with Wake Forest and Sanford Burnham Prebys","PubMed","https://pubmed.ncbi.nlm.nih.gov/41273898/"],
 ["February 2024","$9 million NIH grant advances SBP-9330 toward Phase 2 for nicotine addiction","Press release",CP+"copy-of-december-7-2023-press-release"],
 ["December 2023","Camino Pharma receives a $1.97M SBIR grant from the NIAAA for alcohol use disorder","Press release",CP+"copy-of-august-25-2021-press-release"],
 ["August 2021","Camino Pharma initiates the Phase 1 study of SBP-9330 for tobacco use disorder","Press release",CP+"copy-of-september-16-2020-press-release"],
 ["September 2020","$11.4 million NIH grant takes SBP-9330 into first-in-human studies","Press release",CP+"copy-of-june-30-2020-press-release"],
 ["June 2020","Camino Pharma receives a $920K SBIR grant from the NIMH for treatment-resistant depression","Press release",CP+"copy-of-september-27-2017-press-rel"]];
var SHEETS=[];
