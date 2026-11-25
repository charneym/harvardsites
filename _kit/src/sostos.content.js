var FONTS=['500 1em "Exo"','600 1em "Exo"','500 1em "Inter"','400 1em "Inter"','600 1em "Inter"','500 1em "Saira Semi Condensed"','600 1em "Saira Semi Condensed"'];
var WEB="https://www.sostosinc.com/";
var MAIL="nguo1@binghamton.edu";
var TEL="+13042766217";
/* technology tiles: [big word, small unit, title, one line]. From sostosinc.com, the NSF SBIR award abstracts (2334510,
   2434965, 2450913) and the Phase I project outcomes report */
var PROPS=[
 ["Multi-omics","","Every kind of sample","CATOS analyses the multi-omics profiles of single cells, liquid biopsies, biopsies and bulk tumors."],
 ["Networks","","Boolean implication networks","Prediction logic that integrates disparate data and models genome-scale gene regulatory networks."],
 ["1,600+","patients","Clinically validated","Our 7-gene lung cancer assay has been validated in more than 1,600 patients, including randomized phase III trials."],
 ["696","compounds","Drug repositioning","Candidate compounds for lung cancer found with our AI, 18 of them patented as new drugs or new indications."],
 ["Cloud","","Built for oncologists","A cloud-based portal with a graphical interface, data security and tiered access for clinical and research use."],
 ["Proven","","From satellites to cells","The same AI first assured the reliability of satellite systems, in research with NASA."]];
/* products, from sostosinc.com "Our Products": [name, kind, one line, status, link, link label] */
var PROD=[
 ["CATOS-AI","Web portal","A web portal for biomarker identification, clinical decision making and drug repositioning, for oncologists and drug developers.","NSF SBIR Phase II, 2025–2027","https://www.nsf.gov/awardsearch/showAward?AWD_ID=2450913","NSF award"],
 ["CATOS-LU","Lung cancer assay","A 7-gene assay for prognosis and prediction of the benefit of adjuvant chemotherapy in non-small cell lung cancer.","Classified as “Novel Technology” by FDA (in review)","https://doi.org/10.1016/j.ebiom.2018.05.025","EBioMedicine, 2018"],
 ["CATOS-BR","Breast cancer signature","A 28-gene mRNA and miRNA expression signature for breast cancer diagnosis and prognosis.","Published","https://doi.org/10.3390/ijms241310561","IJMS, 2023"]];
var FUND=["NSF","NASA","NIH","CDC","CPSC"];
var PROGS=["NIH Innovator Showcase","Equalize","NSF I-Corps"];
/* people, as published on sostosinc.com (Meet the Team) */
var LEAD=[
 ["Nancy L. Guo, PhD","Founder and Chief Executive Officer","Fulbright U.S. Scholar for biomarker discovery; more than $45.5M in federal funding to develop AI for healthcare."],
 ["Qing Ye, PhD","Chief Technology Officer","AI and big data; principal investigator on Sostos’s NSF and NIH SBIR awards."]];
var BOARD=[
 ["Stephen Carrithers, PhD","Board Director","President and Director of R&D, AmDx PrognostX; has led multiple diagnostics to commercialization."],
 ["Kevin Combs","Board Director","Entrepreneur and investor for over 30 years; co-founder of the Country Roads Angel Network."],
 ["Daniel C. Flynn, PhD","Business Advisor","Former vice president for research, Florida Atlantic University; scientific creator of Protea Biosciences."],
 ["Ray Johnson, DBA MBA","Business Advisor","Serial entrepreneur; CEO, President or Managing Director of six start-up and early-stage companies."]];
var CLIN=["Afshin Dowlati, MD","Thomas Hensing, MD","David Carbone, MD PhD","Kathy Mangold, PhD (medical laboratory)"];
var STAFF=["Prem Bhajaj, data scientist","Ryan Goodman, data scientist"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2026","From idea to startup: Binghamton University profiles Dr. Nancy Guo and Sostos","Binghamton University","https://www.binghamton.edu/news/story/6335/from-idea-to-startup-entrepreneurial-spirit-drives-watson-college-faculty"],
 ["June 2026","Dr. Guo presents Sostos, Inc. at the 2026 BIO International Convention","BIO 2026","https://convention.bio.org/speakers/nancy-guo"],
 ["July 2025","NSF SBIR Phase II award of $1.24 million to advance the CATOS-AI drug repositioning portal","NSF","https://www.nsf.gov/awardsearch/showAward?AWD_ID=2450913"],
 ["June 2025","NSF SBIR Phase I award for AI-enabled discovery of multi-omics biomarkers for broad cancer populations","NSF","https://www.nsf.gov/awardsearch/showAward?AWD_ID=2434965"]];
var SHEETS=[];
