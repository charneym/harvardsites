var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Jost"','500 1em "Jost"','600 1em "Jost"'];
var MAIL="information@avantibiosciences.com";
var BD="bd@avantibiosciences.com";
var RP="https://reporter.nih.gov/project-details/";
var AN="https://www.avantibiosciences.com/news";
/* the pipeline, from avantibiosciences.com/pipeline (chart + programme notes):
   [programme, sub, indication, status, progress 0..5 (done), progress incl. in-progress, detail, dim] */
var PIPE=[
 ["ABI-171","Lead programme","Idiopathic pulmonary fibrosis (IPF)","IND-ready · Phase 1 start targeted Q4 2026",2,2.35,"FDA Orphan Drug Designation. GLP toxicology complete and GMP manufacturing established; FDA Pre-IND written responses received in March 2026 (PIND 180251).",0],
 ["ABI-171","Expansion","Liver fibrosis / NASH","Preclinical development · IND targeted 2027–2028",1.3,1.7,"Extends the anti-fibrotic mechanism validated in the IPF programme to the liver. Preclinical efficacy studies ongoing, with an NIDDK SBIR in collaboration with Ohio State University.",0],
 ["Undisclosed","Discovery","Alzheimer’s disease","Discovery · lead optimisation",.6,.85,"Targets DYRK1A, a validated kinase implicated in Alzheimer’s disease pathology. Built on Avanti’s NIA-funded DYRK1A programme.",1]];
var PHS=["Discovery","Preclinical","Phase 1","Phase 2","Phase 3"];
/* milestones for ABI-171 (avantibiosciences.com home, pipeline and news) */
var EVID=[
 ["Orphan Drug","FDA Orphan Drug Designation granted for ABI-171 in IPF (July 2024)"],
 ["Pre-IND","Constructive written responses from the FDA to the Pre-IND Type B meeting (March 2026)"],
 ["IND-ready","GLP toxicology complete and GMP manufacturing established"],
 ["NHLBI Catalyze","Funding and regulatory support for IND-enabling work and clinical trial preparation (December 2025)"]];
/* avantibiosciences.com (Executive Team, Scientific Advisory Board). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Management",name:"Gian Luca Araldi, PhD, PharmD, MBA, PMP",title:"Founder and Chief Executive Officer",sum:"More than 25 years in research through clinical development at Glaxo, Forest Laboratories and Merck-Serono; inventor of 113 granted patents."},
 {g:"Scientific advisory board",name:"Ganesh Raghu, MD",title:"University of Washington",sum:"Professor of Medicine; a leader in interstitial lung diseases including IPF, and an advisor to the FDA and the Pulmonary Fibrosis Foundation."},
 {g:"Scientific advisory board",name:"Iwao Ojima, PhD",title:"Stony Brook University",sum:"Distinguished Professor of Chemistry; Director of the Institute of Chemical Biology & Drug Discovery."},
 {g:"Scientific advisory board",name:"James DiNunzio, PhD",title:"Paladin Advisory Services",sum:"Chief Scientific Officer."},
 {g:"Scientific advisory board",name:"Wayne Hancock, MD, PhD",title:"University of Pennsylvania · CHOP",sum:"Professor of Pathology and Laboratory Medicine; Chief of Transplantation Immunology at the Children’s Hospital of Philadelphia."},
 {g:"Scientific advisory board",name:"Ronglih Liao, PhD",title:"Stanford University",sum:"Professor of Medicine, Stanford Cardiovascular Institute; visiting professor at Harvard Medical School, Brigham and Women’s Hospital."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["March 2026","FDA delivers constructive written responses to Avanti’s Pre-IND Type B meeting for ABI-171 in IPF","Avanti news",AN],
 ["March 2026","Avanti named a Connect San Diego 2026 Cool Company","Avanti news",AN],
 ["February 2026","Selected as a Hello Tomorrow Deep Tech Pioneer, from 4,800+ applications in 108 countries","Avanti news",AN],
 ["December 2025","Awarded the NHLBI Catalyze Program for IND-enabling studies of ABI-171","Avanti news",AN],
 ["November 2024","Development and evaluation of ABI-171, a new fluoro-catechin derivative, for the treatment of IPF","Int J Mol Sci","https://doi.org/10.3390/ijms252111827"],
 ["July 2024","FDA grants Orphan Drug Designation to ABI-171 for idiopathic pulmonary fibrosis","Avanti news",AN],
 ["August 2023","NIDDK SBIR for DYRK1A/B kinase inhibitors in liver disease, with Ohio State University","NIH RePORTER",RP+"10696380"]];
var SHEETS=[];
