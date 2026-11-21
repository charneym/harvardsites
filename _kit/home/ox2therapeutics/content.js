var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var WEB="https://ox2therapeutics.com/";
var CONTACT="https://ox2therapeutics.com/contact/";
var CT="https://clinicaltrials.gov/study/NCT06305910";
var PR26=WEB+"ox2-reaches-recommended-phase-2-dose-milestone-in-pediatric-brain-tumor-trial/";
/* pipeline: ox2therapeutics.com/pipeline (four ARL200 indications) and the 2021 / 2026 press releases. [name, indication, tag, detail, link, label] */
var PIPE=[
 ["Pediatric brain cancer","Diffuse midline glioma (newly diagnosed) · recurrent or progressive high-grade glioma","Phase I · RP2D reached","ARL200 with the GBM6-AD tumor lysate vaccine, run with the neuro-oncology team at Children’s Minnesota. Ten of fifteen planned patients treated, no dose-limiting toxicities, and a multicenter international Phase II planned.",CT,"NCT06305910"],
 ["Adult brain cancer","Recurrent glioblastoma","Phase I","A single-center, open-label, dose-escalation study at the University of Minnesota, authorized by the FDA in June 2020; the first patient was treated in January 2021.","https://www.1stoncology.com/blog/?p=53947","2021 release"],
 ["Adult breast metastases","Breast cancer metastases","Expansion","Part of OX2’s plan to take ARL200 beyond brain tumors, across multiple solid tumor cancers.",WEB+"pipeline/","Pipeline"],
 ["CNS metastases","Focused ultrasound for CNS and solid tumors","Expansion","Pairing ARL200 with focused ultrasound for tumors of the central nervous system and other solid tumors.",WEB+"pipeline/","Pipeline"]];
/* people: CEO from the May 2026 press release; scientific founders from the 2017 University of Minnesota story and 2021 release. No portraits are published. */
var TEAM=[
 ["Jeff Liter","Chief Executive Officer","Joined OX2 in 2017 and has led the company from its Phase I trial in recurrent glioblastoma to the pediatric trial that reached its Recommended Phase 2 Dose in 2026."],
 ["Michael Olin, PhD","Co-founder","University of Minnesota researcher. The founders’ discovery that a cancer-associated protein blunts vaccines for glioblastoma and other tumors is the basis of the company."],
 ["Christopher Moertel, MD","Co-founder","University of Minnesota physician and researcher, who co-founded OX2 with Michael Olin and the university’s Masonic Cancer Center."]];
/* news: from ox2therapeutics.com/news-updates; every item links out. [date, headline, source, url] */
var NEWS=[
 ["November 15, 2026","Why the pace of OX2’s research matters: a young brain cancer patient’s story","Children’s Cancer Research Fund","https://childrenscancer.org/why-the-pace-of-research-matters/"],
 ["May 1, 2026","OX2 reaches the Recommended Phase 2 Dose milestone in its pediatric brain tumor trial","Press release",PR26],
 ["February 12, 2025","Vaccine trial launched to fight pediatric brain cancer","KSTP","https://kstp.com/kstp-news/top-news/u-of-m-researchers-doctor-at-childrens-hospital-launching-vaccine-trial-to-fight-childhood-brain-cancer/"],
 ["January 12, 2021","New treatment for central nervous system tumors enters Phase I clinical trials","Business Wire","https://www.businesswire.com/news/home/20210112005092/en/New-Treatment-for-Central-Nervous-System-Tumors-Enters-Phase-I-Clinical-Trials"],
 ["June 7, 2020","FDA grants IND approval for a Phase I trial of OX2’s peptide checkpoint modulator in CNS tumors","Press release",WEB+"fda-grants-ind-approval-to-ox2-therapeutics-to-initiate-phase-i-clinical-trial-of-its-peptide-checkpoint-modulator-for-patients-with-cns-tumors/"]];
var SHEETS=[];
