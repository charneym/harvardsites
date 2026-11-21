var FONTS=['300 1em "Poppins"','italic 300 1em "Poppins"','400 1em "Poppins"','italic 400 1em "Poppins"','500 1em "Poppins"','600 1em "Poppins"'];
var WEB="https://www.myogenica.com/";
var MAIL="info@myogenica.com";
var TRIAL="mdstemcell@umn.edu";
var ADDR="Saint Paul, Minnesota 55114";
var MAP="https://www.google.com/maps/search/?api=1&query=Saint+Paul+MN+55114";
var FLYER="https://www.myogenica.com/s/Trial-of-Cell-Based-Investigational-Therapy-for-DMD-Flyer-1.pdf";
var NEWSPG="https://www.myogenica.com/news";
var RP="https://reporter.nih.gov/project-details/11423642";
var BS="https://www.biospace.com/fda-clears-investigational-new-drug-application-for-muscular-dystrophy-treatment-from-university-of-minnesota-startup-myogenica";
var PPMD="https://www.parentprojectmd.org/duchenne-uk-and-ppmd-award-500000-to-evaluate-safety-and-tolerability-of-muscle-progenitor-cells-in-phase-1-trial/";
var MT="https://pubmed.ncbi.nlm.nih.gov/40682272/";
var MDA="https://mdaquest.org/stem-cell-innovations-drive-advances-in-muscle-regeneration/";
/* programmes: myogenica.com (home, /science, /news), the July 2024 IND release (BioSpace/PR Newswire) and the NIAMS STTR
   abstract (5R42AR083779). [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["MyoPAXon · intramuscular","Duchenne muscular dystrophy","Phase I · enrolling","FDA cleared the IND in July 2024. The University of Minnesota study gives non-ambulatory adults with Duchenne intramuscular injections of MyoPAXon and evaluates safety, tolerability and engraftment.",FLYER,"Study description"],
 ["MyoPAXon","Limb girdle muscular dystrophy","FDA IND received","In November 2026 MyoPAXon received an FDA IND to treat patients with limb girdle muscular dystrophy (LGMD).",NEWSPG,"Myogenica news"],
 ["Systemic MyoPAXon","Duchenne and other muscular dystrophies","IND-enabling studies","Delivered through the bloodstream, MyoPAXon could reach many skeletal muscles with a single injection. Funded by a NIAMS STTR Fast-Track award, with the University of Minnesota.",RP,"NIH RePORTER"]];
var PARTNERS=["NIH · NIAMS","Duchenne UK","Parent Project Muscular Dystrophy","U.S. Department of Defense","Greg Marzolf Jr. Foundation"];
/* people: the three co-founders as published on myogenica.com/our-team (condensed) */
var TEAM=[
 ["Rita Perlingeiro, Ph.D.","Co-founder","Inventor of the MyoPAXon platform and Lillehei Professor in Stem Cell & Regenerative Medicine at the University of Minnesota. Ph.D., University of Campinas; postdoctoral training at the Whitehead Institute, MIT."],
 ["Michael Kyba, Ph.D.","Co-founder","Co-inventor of MyoPAXon and an expert in stem cell expansion and transplantation. Professor of Pediatrics at the University of Minnesota. Ph.D., University of British Columbia; postdoctoral training at the Whitehead Institute, MIT."],
 ["Al Hawkins","Co-founder","Cell and gene therapy entrepreneur; co-founder of Abeona Therapeutics, Milo Biotechnology and Amplo Biotechnology, and former Director of New Ventures at Boston University."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 8, 2026","NIAMS continues the STTR award for systemic MyoPAXon: IND-enabling studies for Duchenne ($701,471)","NIH RePORTER",RP],
 ["October 2025","Paper describing the preclinical development of MyoPAXon published in Molecular Therapy","PubMed",MT],
 ["March 2025","MyoPAXon featured in MDA Quest magazine","MDA Quest",MDA],
 ["July 17, 2024","FDA clears the Investigational New Drug application for MyoPAXon in Duchenne muscular dystrophy","BioSpace",BS],
 ["April 2024","Duchenne UK and PPMD award $500,000 to evaluate the safety and tolerability of muscle progenitor cells in a Phase 1 trial","PPMD",PPMD]];
var SHEETS=[];
