var FONTS=['300 1em "Jost"','400 1em "Jost"','500 1em "Jost"','400 1em "Source Sans 3"','500 1em "Source Sans 3"','600 1em "Source Sans 3"'];
var MAIL="info@trtherapeutics.com";
var CT="https://clinicaltrials.gov/study/";
/* The programmes, from tissuerepair.com.au (About, Clinical Program) and ClinicalTrials.gov. [area, sub, title, status, detail, dim, tag] */
var PIPE=[
 ["TR987®","Chronic wounds · venous leg ulcers","Phase 3, BG002, United States","NCT06707090 · 312 patients planned · recruiting","A randomised, double-blind, multicentre 16-week study of TR987 0.1% gel with standard of care against standard of care alone. Sponsor: TR Therapeutics, Inc., Tissue Repair's US subsidiary.",0,"Phase 3"],
 ["TR987®","Chronic wounds · venous leg ulcers","Phase 3, BG003, Australia and the US","NCT06707103 · 312 patients planned · recruiting","The second pivotal study, at sites in Australia and the United States. Together the two trials target a 10 to 15% difference in the incidence of complete healing, toward FDA and TGA approval as a topical drug.",0,"Phase 3"],
 ["TR Pro+®","Acute wounds · aftercare","Post-procedure gel for aesthetic and medical procedures","Launched June 2023 · pilot programme in Australia","A topical gel for use after procedures involving wounds, including incisions, needling, abrasions, chemical peels, skin grafts and laser treatments. Distribution in Australia and overseas is being explored.",0,"Marketed"],
 ["Glucocol","Surgical incisions","A low-molecular-weight colloidal beta-glucan","Not in active development","Intended to support the healing of surgical incisions at risk of breakdown; the company's focus remains on Glucoprime®.",1,"Paused"]];
/* Clinical record, from tissuerepair.com.au (Clinical Program) and Dermatologic Surgery 2022;48(12):1312-1316. */
var EVID=[
 ["Phase 2B · venous leg ulcers","Almost double the wound-area reduction: 90.5% with TR987 against 46.6% on placebo in the per-protocol group (p=0.035), 82 patients"],
 ["Phase 2B · complete closure","An adjusted 20.6% improvement in the incidence of complete wound closure at 12 weeks (intention to treat), the FDA's gold-standard endpoint"],
 ["Phase 2B · after CO₂ laser","35% more patients improved in wrinkling (p=0.041) and 40% more in elastosis (p=0.011) than on placebo at day 28, 42 patients"],
 ["Across all trials","More than 240 patients studied in Phase 1, 2A and 2B, most in randomised, double-blind, placebo-controlled trials under FDA-approved protocols"]];
/* tissuerepair.com.au (Our Team). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Tony Charara",title:"Co-Founder and Executive Director",sum:"Has led the clinical programme across both Phase 2B trials, commercialisation, IP and manufacturing; holds patents on Glucoprime®. Formerly in investment banking at ANZ and JPMorgan; co-founder of Mable Technologies."},
 {g:"Leadership",name:"Dr Sarika Namjoshi",title:"Chief Operating Officer",sum:"Over 18 years in pharmaceutical development and CMC; leads product and process development, analytics, manufacturing, regulatory and quality."},
 {g:"Leadership",name:"Mark Bouw",title:"Chief Financial Officer",sum:"Founder and CEO of Straterra Australia; more than 30 years across clinical practice, finance leadership and directorships, including Volpara Health Technologies."},
 {g:"Leadership",name:"Anhthu Nguyen",title:"Vice President, Global Clinical Operations",sum:"Clinical operations leader from 9 Meters Biopharma, Synergy, AbbVie and Integra LifeSciences."},
 {g:"Leadership",name:"Dr Darryl Reed",title:"Senior Medical Affairs Manager",sum:"Over 25 years in pharma, including the TGA and senior medical and commercial roles at Roche and Bayer."},
 {g:"Board",name:"Alistair McKeough",title:"Non-Executive Chairman",sum:"Lawyer and director of private and listed companies across professional services, technology and biotech."},
 {g:"Board",name:"Patrick Kania",title:"Non-Executive Director",sum:"More than 20 years commercialising medical devices and pharma across the US, Europe and APAC; formerly at Smith+Nephew, Abbott, J&J and Roche."},
 {g:"Scientific advisors",name:"Prof. Graham Kelly",title:"Chief Scientific Advisor",sum:"Inventor of the technology, first developed from 1989 at the Department of Surgery, The University of Sydney."},
 {g:"Scientific advisors",name:"Dr Robert Kirsner",title:"Medical and Scientific Advisor, Chronic Wounds",sum:"Chairman of Dermatology and Cutaneous Surgery, University of Miami Miller School of Medicine."},
 {g:"Scientific advisors",name:"Dr Mitchel P. Goldman",title:"Medical and Scientific Advisor, Aesthetic Dermatology",sum:"Volunteer Clinical Professor of Dermatology, University of California, San Diego."},
 {g:"Scientific advisors",name:"A/Prof. Michael Woodward",title:"Scientific Advisor",sum:"Wound management expert who heads a wound clinic at a large Melbourne teaching hospital."},
 {g:"Scientific advisors",name:"Dr Vaclav Vetvicka",title:"Scientific Advisor",sum:"Researcher of natural immunomodulators and glucans, with more than 360 peer-reviewed publications."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["April 2025","Phase 3 trial BG003 of TR987® gel in venous leg ulcers opens at sites in Australia and the US","ClinicalTrials.gov",CT+"NCT06707103"],
 ["January 2025","Phase 3 trial BG002 of TR987® gel in venous leg ulcers starts in the United States","ClinicalTrials.gov",CT+"NCT06707090"],
 ["December 2022","A novel macrophage-activating gel improves healing and skin quality after CO₂ laser resurfacing of the chest","Dermatologic Surgery","https://pubmed.ncbi.nlm.nih.gov/36449873/"]];
var SHEETS=[];
