var FONTS=['300 1em "Literata"','italic 300 1em "Literata"','400 1em "Literata"','italic 400 1em "Literata"','400 1em "Lato"','700 1em "Lato"','italic 400 1em "Lato"','italic 700 1em "Lato"'];
var WEB="https://www.inlighta.com/";
var MAIL="JJYang@inlighta.com";
var TEL="+1 404-429-1434";
var ADDR="InLighta BioSciences L.L.C., Atlanta, GA 30303";
var SCIADV="https://doi.org/10.1126/sciadv.adz6815";
var RP_LUNG="https://reporter.nih.gov/project-details/11402700";
var PROD="https://www.inlighta.com/products/";
/* pipeline: from inlighta.com (Products; Investors overview), the 2026 Science Advances paper and the NIH RePORTER abstract of
   5R42HL170898-03. [programme, use, stage label, detail, link, link label] */
var PROG=[
 ["ProCA®32","Blood-pool agent: full-body contrast, with specificity in the liver","Available for non-clinical laboratory use","Derived from human parvalbumin, with its metal-binding sites mutated for higher affinity and selectivity for gadolinium. Images liver tumors smaller than 0.25 mm, and is more than 40 times more sensitive than commonly used, clinically approved agents for liver tumors.",PROD,"Product details"],
 ["ProCA32.collagen · INL-101","Lung cancer and metastases; lung and liver fibrosis","Preclinical · NHLBI STTR Phase II","Targets type I collagen. In 2026 mouse studies it found all 18 lung nodules confirmed by tissue analysis, including lesions under 1 mm, and metastases in the adrenal glands and kidneys that CT missed. The NIH-funded Phase II work covers toxicology and dosing toward the clinic.",SCIADV,"Science Advances, 2026"],
 ["ProCA32.CXCR4","Liver cancer detection","Preclinical","Builds on ProCA32 by adding a ligand-binding moiety that selectively binds CXCR4, a receptor overexpressed on the tissue of interest.",PROD,"Targeted agents"],
 ["ProCA32.HER2","Breast cancer detection","Preclinical","The same targeted design aimed at HER2. Further biomarkers named for the ProCA series include collagen, EGFR, PSMA and integrin.",PROD,"Targeted agents"]];
/* funders and partners named on inlighta.com (Investors) and in NIH RePORTER */
var PARTNERS=["National Cancer Institute","National Heart, Lung, and Blood Institute","National Institute on Alcohol Abuse and Alcoholism","National Institute of Diabetes and Digestive and Kidney Diseases","Georgia Research Alliance Venture Lab","Georgia State University"];
/* people: as listed on inlighta.com (Company Profile; Investors); no portraits are used */
var TEAM=[
 ["Jenny J. Yang, Ph.D.","Founder, Principal Scientist and Acting Chief Scientific Officer","Her research team created the ProCA platform by designing metal-binding sites into a scaffold protein. Recipient of the Torsten Almén Award for Pioneering Research in Contrast Media; now Professor and Presidential Faculty Scholar at the University of Alabama at Birmingham, formerly Regents’ Professor of Chemistry at Georgia State University."],
 ["Michael Kirberger, Ph.D.","Communications Director, Technical Advisor and Patent Portfolio Manager","Co-author of the company’s protein MRI contrast agent research, including the 2026 Science Advances study."],
 ["Nigamnarayan Acharya","General Counsel and Patent Attorney",""],
 ["David Xue, Ph.D.","Research Scientist, Product and Technology",""]];
var ADVISORS=["Zhi-ren Liu, Ph.D., Georgia State University","Andrew Wang, Ocean Nanotech","Hans Grossniklaus, M.D., M.B.A.","Shanping Yu, M.D., Ph.D., Emory University","Pardeep Mittal, Emory University","Brad Farris, Emory University"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 11, 2026","Collagen-targeted MRI contrast agent improves detection of small lung tumors and metastases","Inside Precision Medicine","https://www.insideprecisionmedicine.com/topics/oncology/collagen-targeted-mri-contrast-agent-improves-detection-of-small-lung-tumors-and-metastases/"],
 ["September 19, 2026","New MRI approach detects tiny lung tumors and metastases in preclinical study","Winship Cancer Institute of Emory University","https://winshipcancer.emory.edu/newsroom/articles/2026/new-mri-approach-detects-tiny-lung-tumors-and-metastases-in-preclinical-study"],
 ["September 19, 2026","O’Neal Cancer Center research advances precision imaging through multi-color MRI","UAB O’Neal Comprehensive Cancer Center","https://www.onealcanceruab.org/news-and-events/news/yang-lab-advances-mri-precision-imaging/"],
 ["September 11, 2026","NHLBI continues STTR Phase II funding ($1,026,874) for precision MRI of lung fibrosis","NIH RePORTER",RP_LUNG],
 ["September 9, 2026","New MRI agent detects lung cancer and hidden metastases earlier than current scans","Georgia State University","https://news.gsu.edu/2026/09/09/new-mri-agent-detects-lung-cancer-hidden-metastases-earlier-than-current-scans/"],
 ["September 9, 2026","Early detection of invasive lung cancer and multiorgan metastasis by a collagen-targeted protein MRI contrast agent","Science Advances",SCIADV]];
var SHEETS=[];
