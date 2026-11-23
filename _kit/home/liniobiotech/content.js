var FONTS=['300 1em "DM Sans"','400 1em "DM Sans"','500 1em "DM Sans"','400 1em "DM Mono"','500 1em "DM Mono"'];
var EMAIL="info@linio-biotech.com";
var LNB="https://linio-biotech.com";
/* linio-biotech.com (Science) and ClinicalTrials.gov NCT07368764. Stage words only as the company and the registry state them.
   [programme, area, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["Tience®","Skin defect treatment","Cell-free tissue product for therapeutic indications","In clinical use","Launched in Finland in 2023 and in Sweden in 2025, and used by about 40 leading healthcare clinics in the Nordics, with post-market data from nearly 2,500 treated patients.",0,"Nordics",LNB+"/science","Science"],
 ["Tience®","Acne scars","Split-face study of intradermal Tience® in moderate to severe acne scars","Clinical study","An open-label, single-centre study in Helsinki: three treatment sessions over three months, followed for twelve months with clinical assessment, patient self-evaluation and VISIA skin analysis.",0,"Study","https://clinicaltrials.gov/study/NCT07368764","ClinicalTrials.gov"],
 ["Hybrid injectable","Scarred or fibrotic tissue","Volume restoration with an immediate lift and endogenous soft-tissue formation","Investigational","Leverages Tience® technology for an immediate lifting effect, then supports the body’s own soft-tissue formation. Proof-of-concept and promising pre-clinical results; progressing towards MDR and FDA pathways.",1,"Pre-clinical","",""],
 ["Tience® platform","Post-surgical · soft tissue","Further regenerative injectables on the same biology","Platform","Scar treatments, post-surgical regeneration and soft tissue defects build on the same underlying biology, manufacturing infrastructure and regulatory backbone.",1,"Pipeline","",""]];
/* linio-biotech.com (Tissue establishment). [term, statement] */
var EST=[
 ["Licence TE4008","Granted in 2021 by the Finnish Medicines Agency Fimea, from donor evaluation and tissue procurement to distribution in the EU / EEA and export"],
 ["EU GMP Class A/C","Clean rooms for tissue processing, aseptic manufacturing and quality control, with continuous environmental and microbial monitoring"],
 ["In-house QC","Validated sterility, endotoxin and protein testing to pharmacopoeia standards before every batch release"],
 ["Made in Finland","All Linio Biotech products are manufactured in our own facility at Finn-Medi, Tampere"]];
/* linio-biotech.com (About, Linio's Timeline). [year, milestone] */
var MIL=[
 ["2005","University research on the potential of adipose tissue starts at Tampere University."],
 ["2021","Operations start with a seed round, and Fimea approves the tissue establishment licence."],
 ["2022","A comprehensive safety study on Tience® is completed."],
 ["2023","Tience® is launched in Finland, and a clinical study evaluates wound healing."],
 ["2025","A new EPO patent for Tience®, the launch in Sweden, the acne-scar study and the pre-clinical phase of the investigational device."]];
/* linio-biotech.com (Partnering, For investors). [attribute, detail] */
var INV=[
 ["Clinically validated foundation","Tience® is already used in routine clinical practice, generating real-world data and physician engagement."],
 ["Platform potential","One core technology enabling multiple regenerative indications and pipeline expansion."],
 ["Regulatory and operational backbone","An in-house licensed tissue establishment providing end-to-end control, scalability and compliance."],
 ["Clear value inflection points","Progression toward MDR and FDA pathways, expanding clinical data and next-generation product development."]];
/* linio-biotech.com (About, Leadership and Board). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Karita Reijonsaari, PhD",title:"CEO",sum:"Growth leader in hospital and health care; business strategy and new business development. Two and a half years as a visiting scholar at Stanford Medical School."},
 {g:"Leadership",name:"Riina Uusmies, PhD",title:"Founder, CTO",sum:"Co-inventor of Tience technology; cell biology, tissue engineering and regeneration, and medical device quality systems. 43 publications and 5 patent applications."},
 {g:"Founders",name:"Timo Ylikomi",title:"Professor of Cell Biology",sum:"Began the adipose tissue research with Riina Uusmies at Tampere University in 2005; continues to serve as a university professor."},
 {g:"Board of directors",name:"Timo Lappi",title:"Chairman of the Board",sum:"Builds top-performing boards and governance fit for growth, with legal expertise."},
 {g:"Board of directors",name:"Benoit Chardon",title:"Member of the Board",sum:"New category creation in medical aesthetics, brand building, hyper-growth and M&A."},
 {g:"Board of directors",name:"Jaana Linna",title:"Member of the Board",sum:"Launching best-in-class products to market, and people and talent strategies."},
 {g:"Board of directors",name:"Ilkka Laurila",title:"Member of the Board",sum:"Profitable growth, financial arrangements and value creation across industries."},
 {g:"Board of directors",name:"Didier Leclercq",title:"Member of the Board",sum:"Based in New York; managed the entire Galderma medical aesthetic business and led R&D in new product development."}];
/* news: items on linio-biotech.com/news, each links out. [date, headline, source, url] */
var NEWS=[
 ["29 May 2026","Damernas Värld on Tience: fat as the future of skin regeneration","In the press",LNB+"/news/damernas-varld-on-tience-fat-as-the-future-of-skin-regeneration"],
 ["3 March 2026","Linio Biotech featured in Sweden’s largest newspaper, Aftonbladet","In the press",LNB+"/news/linio-biotech-featured-in-swedens-largest-newspaper-aftonbladet"],
 ["12 February 2026","Named among LSI’s top 500 emerging medtech innovators worldwide","Article",LNB+"/news/linio-biotech-named-among-top-500-emerging-medtech-innovators-worldwide"],
 ["22 January 2026","Linio Biotech at the IMCAS World Congress 2026","Article",LNB+"/news/linio-biotech-at-imcas-world-congress-2026"],
 ["12 November 2025","Best Presentation Award at EATCB 2025 for Tience® technology","Article",LNB+"/news/linio-biotech-receives-best-presentation-award-at-eatcb-2025"]];
var SHEETS=[];
