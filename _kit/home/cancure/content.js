var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
var WEB="https://cancurellc.com/";
var MAIL="cancurellc@canzxbio.com";
var ADDR="1531 NE 172nd St., Shoreline, WA 98155";
var MAP="https://www.google.com/maps/search/?api=1&query=1531+NE+172nd+St+Shoreline+WA+98155";
var NEWSPG="https://cancurellc.com/news";
var RP25="https://reporter.nih.gov/project-details/11186003";
var RP19="https://reporter.nih.gov/project-details/9919279";
var RP16="https://reporter.nih.gov/project-details/9201826";
/* pipeline: from cancurellc.com (technology and news pages) and the NIH RePORTER records of CanCure's NCI awards.
   [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["CZX-11 (previously CB-10)","Solid tumours, including metastatic prostate cancer","Lead asset · preclinical","A humanized monoclonal antibody that targets the immune-suppressive soluble MIC (sMIC) and MIC on tumour cells. In the company’s mouse studies it was effective as a single agent at a low dose of 1 mg/kg.",RP19,"NCI SBIR Phase II"],
 ["CB-10 with NK cell therapy","Enhancing NK cell therapy for cancer","Partnered research","Under a material transfer and collaborative agreement signed with CHA Biotech in February 2024, CB-10 is being investigated as a way to enhance NK cell therapy.",NEWSPG,"Company news"],
 ["NK and CD8 T-cell stimulating agent","Cell therapies for solid tumours","NCI SBIR Phase I","A fusion protein of a soluble peptide and its binding agent, used as an additive while NK and antigen-specific CD8 T cells are expanded, to yield cells that persist and keep working in solid tumours.",RP25,"NIH RePORTER"]];
/* collaborators and funders named on cancurellc.com/news and NIH RePORTER (type only) */
var PARTNERS=["National Cancer Institute","Northwestern University","Robert H. Lurie Comprehensive Cancer Center","CHA Biotech"];
/* people: as named on cancurellc.com and on NIH RePORTER; no portraits are published */
var TEAM=[
 ["Jennifer D. Wu, Ph.D.","Co-founder","Mary and Patrick Scanlan Professor of Urology and Microbiology-Immunology at Northwestern University. Her research developed the sMIC-targeting antibody behind CZX-11."],
 ["Robert H. Pierce","Contact principal investigator, NCI SBIR Phase I (2025)","Leads CanCure’s 2025 study of a novel agent that stimulates NK and CD8 T cells, with Dr. Wu as co-investigator."],
 ["Grant H. Risdon","Principal investigator, NCI SBIR Phase II (2019)","Led the first year of CanCure’s Phase II program to develop the antibody for metastatic prostate cancer."]];
var ADVISORS=[];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 23, 2025","NCI awards CanCure a $399,444 SBIR Phase I grant for a novel NK and CD8 T-cell stimulating agent","NIH RePORTER",RP25],
 ["February 2024","CanCure signs a material transfer and collaborative agreement with CHA Biotech to investigate CB-10 in enhancing NK cell therapy","CanCure",NEWSPG],
 ["September 12, 2019","CanCure receives an NCI SBIR Phase II award to develop its antibody for metastatic prostate cancer","NIH RePORTER",RP19],
 ["August 22, 2016","NCI STTR Phase I award to optimize CanCure’s first-in-class cancer immunotherapeutic antibody for human use","NIH RePORTER",RP16]];
var SHEETS=[];
