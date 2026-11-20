var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','700 1em "Archivo"'];
var MAIL="info@bedrocktherapeutics.com";
var RP="https://reporter.nih.gov/project-details/";
var PM="https://pubmed.ncbi.nlm.nih.gov/";
/* Programmes: every line from the NIH RePORTER records of Bedrock Therapeutics, Inc. (Chapel Hill, NC) and from
   bedrocktherapeutics.com. [platform, programme, route, status, detail, link, link label] */
var PIPE=[
 ["scIM · AAV","High-risk corneal transplant rejection","Ex vivo, donor graft","STTR Phase II · NEI","A single dose of AAV carrying a single-chain immune modulator is applied to the donor cornea before surgery. Phase I selected the lead candidate, BDRK-401, and optimised graft gene transfer for a hospital setting; treated grafts were completely protected from acute immunological rejection in a rabbit model. Phase II is directed at FDA guidance, large-scale manufacturing and long-term safety and efficacy toward an IND.",RP+"11180103","NIH RePORTER"],
 ["scIM · AAVLP2-10","Neovascular age-related macular degeneration","Intravitreal","STTR Phase I · NEI · 2025","Bedrock's neutralising-antibody-evasive capsid combined with the secreted scIM transgene, as a durable alternative to repeated anti-vascular injections for the leading cause of blindness in people over 50.",RP+"11068416","NIH RePORTER"],
 ["scIM · AAV","Ocular graft-versus-host disease","Ocular","STTR Phase I · NEI","An HLA-G-based strategy for the ocular manifestations of chronic graft-versus-host disease after allogeneic haematopoietic stem cell transplantation, where current therapies reach a response rate of only 23% at six months.",RP+"10326039","NIH RePORTER"],
 ["Soluble PD-L1 · AAV","Rheumatoid arthritis","Intramuscular","STTR Phase I · NIAMS · 2025","AAV vectors encoding a soluble form of the checkpoint protein PD-L1. In a collagen-induced arthritis model, intra-articular soluble PD-L1 improved arthritis more than the wild-type, membrane-bound protein at the same dose; this award tests intramuscular administration.",RP+"11252985","NIH RePORTER"],
 ["AAVLP2-10 capsid","Liver-directed gene therapy","Systemic","STTR Phase I · NIDDK · NHLBI","Capsid engineering for the two problems that limit systemic AAV: low human hepatocyte transduction and neutralising antibodies. BDRK001 (AAV mutant LP2-10) was isolated from the liver of chimeric mice carrying human hepatocytes in the presence of human antibodies.",RP+"10546241","NIH RePORTER"]];
/* The 2024 Molecular Therapy study (PMID 39245940), as reported by UNC Ophthalmology, 18 March 2025. */
var EVID=[
 ["The molecule","A single-chain immunomodulator that mimics the structure and function of the HLA-G homodimer, the molecule behind the eye's natural immune privilege"],
 ["In the mouse","Subconjunctival AAV-scIM reduced trauma-induced corneal neovascularisation and fibrosis"],
 ["In the rabbit","Ex vivo AAV-scIM delivery to corneal allografts reduced rejection in a high-risk transplant model"],
 ["Where it goes","UNC describes the work as proof of concept, which Bedrock, a UNC spinout, is advancing toward a Phase I clinical trial"]];
/* bedrocktherapeutics.com (leadership team) plus UNC and NIH RePORTER records. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Matthew Hirsch, PhD",title:"CEO & Co-Founder",sum:"Associate Professor of Ophthalmology at UNC-Chapel Hill; lead author of the 2024 scIM study."},
 {g:"Leadership",name:"Brian Gilger, DVM, MS, DACVO",title:"CMO & Co-Founder",sum:"Professor of Ophthalmology at NC State; contact PI on Bedrock's National Eye Institute awards."},
 {g:"Leadership",name:"Jackie Bower, PhD",title:"CFO",sum:"Research Assistant Professor at UNC-Chapel Hill and a co-author of the 2024 Molecular Therapy study."},
 {g:"Co-founders",name:"Chengwen Li, MD, PhD",title:"Co-Founder",sum:"Contact PI on Bedrock's capsid-engineering awards from NIDDK and NHLBI."},
 {g:"Co-founders",name:"Roger “Bryan” Sutton, PhD",title:"Co-Founder",sum:"Structural work behind the single-chain immunomodulator; co-author of the 2024 Molecular Therapy study."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2025","NIAMS awards Bedrock an STTR Phase I grant for AAV vectors encoding soluble PD-L1 in rheumatoid arthritis ($304,502)","NIH RePORTER",RP+"11252985"],
 ["August 2025","NEI awards Bedrock an STTR Phase I grant for vector-mediated anti-vascular and anti-inflammatory therapy in AMD ($310,952)","NIH RePORTER",RP+"11068416"],
 ["March 2025","UNC–NCSU team discovers a genetically engineered pathway to decrease rejection of high-risk corneal transplantation","UNC Ophthalmology","https://www.med.unc.edu/ophth/2025/03/unc-ncsu-discovery-genetically-engineered-pathway-decreased-rejection-corneal-transplantation/"],
 ["November 2024","A chimeric anti-vascularization immunomodulator prevents high-risk corneal transplantation rejection via ex vivo gene therapy","Molecular Therapy",PM+"39245940/"],
 ["September 2024","NEI continues the STTR Phase II programme for AAV-BDRK-401 in corneal transplant rejection ($975,387)","NIH RePORTER",RP+"10822747"],
 ["September 2020","Development of AAV variants with human hepatocyte tropism and neutralizing antibody escape capacity","Molecular Therapy — Methods & Clinical Development",PM+"32637455/"]];
var SHEETS=[];
