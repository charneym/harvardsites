var FONTS=['400 1em "Libre Baskerville"','italic 400 1em "Libre Baskerville"','700 1em "Libre Baskerville"','300 1em "Inter"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"','400 1em "Source Sans 3"','600 1em "Source Sans 3"'];
var MAIL="shashi@neoviaoncology.com";
var TEL="+1 866 636 8423";
var LI="https://www.linkedin.com/company/neovia-oncology";
var TW="https://www.neoviaoncology.net";
/* the NEV-801 programme: every line from neoviaoncology.net (home, /press-release) and Neovia's 2026 press releases.
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["NEV-801 · monotherapy","Advanced solid tumors","Phase I(a) · NCT02797795","Completed 2026","Dose escalation from 20 to 600 mg/m² in 33 heavily pretreated patients with refractory, late-stage solid tumors. The primary objectives were safety, tolerability and pharmacokinetics.","https://www.clinicaltrials.gov/study/NCT02797795","ClinicalTrials.gov"],
 ["NEV-801 · next studies","Multidrug-resistant solid tumors","Late lines of therapy","Next phase","Upcoming studies in patients with advanced multidrug-resistant solid tumors, with Creatv Bio’s liquid biopsy generating translational and biomarker data to improve patient stratification.","https://www.prnewswire.com/news-releases/creatv-bio-and-neovia-oncology-announce-strategic-partnership-to-study-multiple-drug-resistance-mdr-in-solid-tumors-302788688.html","Release"],
 ["NEV-801 · combinations","With antibody therapies","Checkpoint inhibitors and mAbs","Preclinical","Laboratory studies have shown potential synergy with immune checkpoint inhibitors and monoclonal antibody therapies, supporting future combination regimens.","https://www.biopharmadive.com/press-release/20260606-neovia-oncology-announces-completion-of-phase-ia-study-of-nev-801-a-nove/","Release"],
 ["Proprietary portfolio","Next-generation ADC payloads","High-potency compounds","In evaluation","The medicinal-chemistry program behind NEV-801 produced further proprietary compounds with markedly different potency. Several are being evaluated as antibody-drug conjugate payloads.",TW+"/s/Neovia-announces-patent-filing-for-unique-mechanism-of-action.pdf","Release"]];
/* Phase I(a) results: Neovia's release of 6 June 2026 and neoviaoncology.net */
var EVID=[
 ["Safety","No treatment-related serious adverse events, no Grade 3 or 4 treatment-related adverse events, and no neutropenia, ocular toxicity or interstitial lung disease"],
 ["Activity","62% stable disease, 56% tumor inhibition and 22% partial responses (more than 30% tumor size reduction) in the higher-dose cohorts"],
 ["Resistant disease","Efficacy in patients who had previously failed on the parent compound and on monoclonal antibodies"],
 ["Tolerability","No GI disturbance associated with the parent compounds: part of a notably clean tolerability profile across all 33 patients"]];
/* neoviaoncology.net/about. Text-only masthead (CI/CL); the summaries are condensed from their bios. */
var TEAM=[
 {g:"Leadership",name:"Trevor G. Blake, B.Sc., M.B.A.",title:"Founder & Chief Executive Officer",sum:"Founded Neovia in 2012 to take on drug resistance in cancer. Previously founded and led QOL Medical, ANU RTS and ANU Pharmaceutical, after roles at 3M, Biogen and Orphan Medical."},
 {g:"Leadership",name:"Li-Xi Yang, M.D., Ph.D.",title:"Inventor & Chief Scientific Officer",sum:"Inventor of Neovia’s global patent portfolio, including NEV-801. Formerly Senior Director of Research at California Pacific Medical Center; Ph.D. in Pharmacology and Toxicology, Dartmouth."},
 {g:"Leadership",name:"Shashi Marulappa, D.V.M., M.S., M.B.A.",title:"Chief Operating Officer",sum:"More than two decades in drug and biologics development, regulatory affairs and licensing; co-founder of NanoScrips, with leadership roles at Arog Pharmaceuticals, Metrik Biotech and Trimer Biotech."},
 {g:"Leadership",name:"Gerald Su",title:"Chief Financial Officer",sum:"International finance and strategic planning in New York, London, San Francisco and Washington, D.C.; MBA, Columbia Business School."},
 {g:"Founders",name:"Raymond Su",title:"Co-founder",sum:"More than five decades building and investing in healthcare, technology, finance and real estate; founder and chairman of the Yuren Foundation."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","Neovia files a new patent after independent studies show NEV-801 catalytically inhibits both Topoisomerase I and II","Neovia Oncology",TW+"/s/Neovia-announces-patent-filing-for-unique-mechanism-of-action.pdf"],
 ["June 2026","Neovia completes the Phase I(a) study of NEV-801, a novel dual topoisomerase drug-drug conjugate","BioPharma Dive","https://www.biopharmadive.com/press-release/20260606-neovia-oncology-announces-completion-of-phase-ia-study-of-nev-801-a-nove/"],
 ["June 2026","Creatv Bio and Neovia Oncology partner to study multiple drug resistance in solid tumors","PR Newswire","https://www.prnewswire.com/news-releases/creatv-bio-and-neovia-oncology-announce-strategic-partnership-to-study-multiple-drug-resistance-mdr-in-solid-tumors-302788688.html"]];
var SHEETS=[];
