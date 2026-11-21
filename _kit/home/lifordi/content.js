var FONTS=['300 1em "Jost"','italic 300 1em "Jost"','400 1em "Jost"','italic 400 1em "Jost"','500 1em "Jost"','600 1em "Jost"','400 1em "Oswald"','500 1em "Oswald"'];
var WEB="https://www.lifordi.com/";
var MAIL="info@lifordi.com";
var CT="https://clinicaltrials.gov/study/NCT07207954";
var PR="https://lifordi.reportablenews.com/pr/";
/* pipeline: lifordi.com Technology > Pipeline, Clinical Trials, and the 2026-11-09 press release. [name, indication, stage label, detail, link, link label, stage 0-4 (discovery, lead optimization, preclinical, phase 1, phase 2)] */
var PIPE=[
 ["LFD-200","Moderate-to-severe rheumatoid arthritis","Phase 1b · enrolling","A 12-week multiple ascending dose study, randomized, double-blind, placebo- and active-controlled: patients on stable methotrexate receive subcutaneous LFD-200, oral prednisone or placebo. Sites in Georgia, Moldova, Poland and Ukraine; initial data expected by the end of 2026.",CT,"NCT07207954",3],
 ["LFD-200","Healthy participants","Phase 1a · reported","Single and multiple ascending doses were safe and well tolerated, with dose-responsive anti-inflammatory effects and no effect on serum cortisol at doses up to 12 mg/kg. Presented at EULAR and ACR Convergence 2026.",PR+"lifordi-immunotherapeutics-presents-phase-1-clinical-data-for-lfd-200-a-subcutaneous-glucocorticoid-antibody-drug-conjugate-for-treatment-of-autoimmune-disorders","ACR 2026 data",3],
 ["ASO ADC","Th2-driven disease","Lead optimization","Lifordi’s lead antisense oligonucleotide ADC delivers its nucleic-acid payload to VISTA-expressing cells and has shown efficacy in multiple Th2-driven disease models.",WEB+"technology/pipeline/","Pipeline",1],
 ["Diverse payloads","Rheumatology, gastroenterology, pulmonology, dermatology","Platform · partnering","The same VISTA targeting carries small molecules and nucleic acids, including siRNAs, to innate and adaptive immune cells, with long immune-tissue exposure in vitro and in vivo.",WEB+"technology/pipeline/","Partnering",0]];
/* people: lifordi.com/about/leadership/ (no portraits used) */
var TEAM=[
 ["Arthur Tzianabos, Ph.D.","President and Chief Executive Officer","Immunologist and former Associate Professor of Medicine at Harvard Medical School; President and CEO of Homology Medicines, earlier at Shire. Venture Partner at 5AM Ventures and Chair of Stoke Therapeutics."],
 ["Naina Bhasin, Ph.D.","Chief Operating Officer","Twenty years in corporate and business development, strategy and operations; previously Chief Business Officer at Ensoma, Chief of Staff to the CEO at Intellia, and business development at Shire."],
 ["Matthew W. McClure, M.D.","Chief Medical Officer","Trained at Duke; CMO at Aligos Therapeutics and Second Genome, where he designed and oversaw six first-in-human trials as well as Phase 2 studies."],
 ["Dave Nichols","Chief Technology Officer","More than 25 years in process development and GMP manufacturing for biologics, including ADCs; previously CTO at Magenta."],
 ["Theresa McNeely","Chief Communications Officer","More than 25 years in investor relations, public relations and corporate communications; previously Chief Communications Officer and Patient Advocate at Homology Medicines."],
 ["Jay Rothstein, Ph.D.","Scientific Co-Founder and Advisor","Translational immunobiologist with more than 30 years in discovery, PK/PD and toxicology; previously Chief Scientific Officer at ImmuNext."],
 ["Rex L. Williams, Ph.D.","SVP, Clinical Pharmacology and DMPK","More than 20 years across molecular biology, DMPK and clinical pharmacology; previously Vice President of Clinical Pharmacology at SpringWorks Therapeutics."]];
/* news: lifordi.com News, items that link out. [date, headline, source, url] */
var NEWS=[
 ["November 9, 2026","Lifordi presents Phase 1 clinical data for LFD-200, a subcutaneous glucocorticoid ADC, at ACR Convergence 2026","Press release",PR+"lifordi-immunotherapeutics-presents-phase-1-clinical-data-for-lfd-200-a-subcutaneous-glucocorticoid-antibody-drug-conjugate-for-treatment-of-autoimmune-disorders"],
 ["June 2026","Phase 1 clinical data for LFD-200 presented at EULAR 2026","Press release",PR+"lifordi-immunotherapeutics-presents-phase-1-clinical-data-for-lfd-200-a-subcutaneous-glucocorticoid-antibody-drug-conjugate-at-eular-2026"],
 ["December 2025","Lifordi focuses on autoimmune diseases","The Wall Street Journal","https://webreprints.djreprints.com/2640181.pdf"],
 ["November 2025","Strategic investment from Sanofi Ventures, and additional capital from existing investors","Press release",PR+"lifordi-immunotherapeutics-secures-strategic-investment-from-sanofi-ventures-and-additional-capital-from-existing-investors"],
 ["October 2025","Nonclinical data on LFD-200 at ACR 2025, and a Phase 1 study in rheumatoid arthritis begins","Press release",PR+"lifordi-presents-nonclinical-data-on-glucocorticoid-adc-and-initiates-ph-1-in-ra"],
 ["February 2025","Lifordi: applying ADCs to autoimmune conditions","BioCentury",WEB+"wp-content/uploads/2026/05/Lifordi_ApplyingADCstoautoimmuneconditions.pdf"]];
var SHEETS=[];
