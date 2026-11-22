var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Karla"','500 1em "Karla"','600 1em "Karla"','700 1em "Karla"','700 1em "Roboto Slab"'];
var MAIL="contact@tingtherapeutics.com";
var NEWSURL="https://tingtherapeutics.com/announcements-events/";
var RP="https://reporter.nih.gov/project-details/";
/* pipeline: every line from tingtherapeutics.com (/pipeline, /announcements-events, /funding-support) and NIH RePORTER.
   Stages read from Ting's own pipeline chart (TT004 into Phase Ib; the others in the IND-enabling column).
   [programme, indication, area, status, detail, link, link label] */
var PIPE=[
 ["TT004","Cisplatin- and noise-induced hearing loss","Lead candidate · oral tablet","Phase Ib · China IND approved","Designed to protect normal tissues from cisplatin toxicity while preserving its anticancer activity. China’s Center for Drug Evaluation approved the IND for first-in-human evaluation; the Phase Ib trial in head and neck cancer patients will run at the Eye and ENT Hospital of Fudan University in Shanghai. China rights are licensed to Rising Dragon.","https://www.prlog.org/13179485-ting-therapeutics-advances-tt004-into-phase-ib-trial-to-reduce-cisplatin-toxicity.html","Release"],
 ["TT005","Noise-induced hearing loss","Small molecule","IND-enabling","A candidate for hearing loss caused by noise exposure, one of the major causes of hearing loss worldwide.","https://tingtherapeutics.com/pipeline/","Pipeline"],
 ["TT001","Cisplatin- and noise-induced hearing loss","Small molecule","IND-enabling","A further candidate for the hearing loss that follows cisplatin chemotherapy and noise exposure.","https://tingtherapeutics.com/pipeline/","Pipeline"],
 ["TT002","Cisplatin- and noise-induced hearing loss","Otoprotectant","IND-enabling","Preclinical evaluation supported by an NIH SBIR Phase II award from the NIDCD, “Preclinical evaluation of an otoprotectant TT002” (R44DC018762).",RP+"10891521","NIH RePORTER"],
 ["TT003","Aminoglycoside-induced hearing loss","Piplartine","IND-enabling","Piplartine protected against antibiotic-induced hearing loss in zebrafish and mice (Science Translational Medicine, 2024). Developed under an NIH SBIR Phase II award, “Therapeutics to prevent aminoglycoside-induced hearing loss” (R44DC019065).",RP+"11380822","NIH RePORTER"]];
/* TT004 preclinical results, every line from Ting's October 2026 release */
var EVID=[
 ["Survival","TT004 increased survival following cisplatin exposure three-fold"],
 ["Hearing and kidney","It reduced cisplatin-induced hearing loss and kidney injury by approximately 70%"],
 ["Anticancer activity","Both without compromising cisplatin’s anticancer effects"],
 ["Formulation","An extended-release oral formulation for once-daily dosing, with a lower effective dose in preclinical studies"]];
/* tingtherapeutics.com/our-team. Text-only masthead (CI/CL); summaries only from Ting's site, news and NIH RePORTER. */
var TEAM=[
 {g:"Leadership",name:"Jian Zuo, PhD",title:"Co-Founder & CEO",sum:"Began adapting a cancer drug to prevent hearing loss with Dr. Teitz in 2010; co-founded Ting in 2018. Contact PI on its NIH SBIR Phase II award for TT003."},
 {g:"Leadership",name:"Tal Teitz",title:"Co-Founder",sum:"Co-founded Ting in 2018. Presents Ting’s work on dabrafenib, a BRAF kinase inhibitor, for cisplatin- and noise-induced hearing loss."},
 {g:"Leadership",name:"Yunlong Huang",title:"Senior Scientist",sum:"Principal investigator on Ting’s NIH SBIR Phase II awards for TT002 and for CDK2 inhibitors that protect hearing."},
 {g:"Leadership",name:"Xintian Zhang",title:"Senior Technologist",sum:""},
 {g:"Advisory board",name:"Alan Cheng, MD/PhD",title:"Scientific Advisor",sum:""},
 {g:"Advisory board",name:"Lindsay Frazier, MD",title:"Scientific Advisor",sum:""},
 {g:"Advisory board",name:"Benjamin Chen, PhD",title:"Business Advisor",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","Dr. Jian Zuo moderates “From Target Identification to IND” at the 28th BioPharma Drug Discovery Nexus, San Diego","Ting Therapeutics",NEWSURL],
 ["October 2026","Ting Therapeutics advances TT004 into a Phase Ib trial as a potential chemoprotective therapy for cisplatin-treated patients","PRLog","https://www.prlog.org/13179485-ting-therapeutics-advances-tt004-into-phase-ib-trial-to-reduce-cisplatin-toxicity.html"],
 ["October 2026","Jian Zuo on protecting hearing during cisplatin chemotherapy, in Partnology’s Biotech Leader Spotlight","Partnology","https://www.partnology.com/jian-zuo-ceo-co-founder-of-ting-therapeutics/"],
 ["June 2026","Ting co-hosts “Invest in Hearing”, a hearing startups showcase and investor reception before BIO 2026","Premium Discovery","https://www.premiumdiscovery.group/event-details/invest-in-hearing-a-bio-special-event"],
 ["November 2025","New research from Ting published in the journal Neoplasia","Neoplasia","https://authors.elsevier.com/sd/article/S1476-5586(25)00130-7"],
 ["August 2024","NIH SBIR Phase II award, and a Science Translational Medicine paper on piplartine (TT003) against antibiotic-induced hearing loss","Science Transl. Med.","https://www.science.org/doi/10.1126/scitranslmed.adn2140"]];
var SHEETS=[];
