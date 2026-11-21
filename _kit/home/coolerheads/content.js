var FONTS=['300 1em "Manrope"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"'];
var WEB="https://www.coolerheads.com/";
var MAIL="press@coolerheads.com";
var LI="https://www.linkedin.com/company/cooler-heads-technology/";
/* access and coverage for clinics: coolerheads.com Providers and Press pages, and the releases they link. [name, line, tag, detail, link, label] */
var ACC=[
 ["Category I CPT codes","Mechanical scalp cooling, from January 1, 2026","AMA · Medicare","The AMA assigned Category I CPT codes to mechanical scalp cooling, and scalp cooling entered the Medicare Physician Fee Schedule for the first time. The codes don’t apply to manual cold caps.","https://www.prnewswire.com/news-releases/2026-medicare-physician-fee-schedule-rates-set-for-scalp-cooling-cpt-codes-302506058.html","PR Newswire"],
 ["Aetna","Medically necessary","Commercial payer","Aetna recognizes the Cooler Heads Amma system as medically necessary for hair preservation during chemotherapy, an important step toward wider access to scalp cooling.","https://www.newswise.com/articles/cooler-heads-amma-system-recognized-by-aetna-as-medically-necessary-for-hair-preservation-during-chemotherapy","Newswise"],
 ["New York Medicaid","CPT 97007, 97008 and 97009","Medicaid","New York Medicaid added the mechanical scalp cooling codes, a health-equity milestone that opens a once costly option to patients who could not pay for it.","https://briefglance.com/articles/ny-medicaid-covers-scalp-cooling-in-landmark-health-equity-move","BriefGlance"],
 ["California AB 1682","Coverage from January 1, 2027","State law","Signed in September 2026: large-group health plans and Medi-Cal must cover FDA-cleared scalp cooling when a physician prescribes it. The Medi-Cal benefit still depends on federal approval.","https://www.kpbs.org/news/health/2026/09/29/a-new-california-law-may-help-more-cancer-patients-keep-their-hair","KPBS"]];
/* team: coolerheads.com Company and Board pages; Series A release (PR Newswire, July 22, 2025). [name, role, one-line summary] */
var TEAM=[
 ["Kate Dilligan","Founder and Chief Executive Officer","Founded Cooler Heads in 2018 after cold cap therapy as a breast cancer patient; ten years in tech, Stanford GSB MBA."],
 ["Courtney Turich","Global VP of Sales and Marketing","More than 25 years of medical device leadership at Stryker and Veran Medical; leads the national expansion."],
 ["Laurie Sandberg","VP of Market Access","More than 25 years in sales, strategy and market access, most recently at Hologic, Gynesonics and Insulet."],
 ["Megan Dougherty","Director of Engineering","Mechanical engineer leading design, testing and manufacturing readiness for the scalp cooling technology."],
 ["Damien Rutten","Sr. Director of Supply Chain and Manufacturing","Over 20 years in medical device operations, including scale-up at Dexcom and Tandem."],
 ["Julia DeVincenzo, RN","Senior Director of Education and Training","An oncology nurse who leads the company’s scalp cooling navigation program for patients and clinical teams."],
 ["Andrew Nguyen","Director of Quality and Regulatory Affairs","Over 20 years in medical device quality management systems and software quality assurance."]];
var BOARD=["Kate Dilligan","Jason Pesterfield","Liz Todia Zambory","Maria Gonzalez-Blanch","Michael Schotzinger"];
var INV=["Mutual Capital Partners (lead)","SHD Partners","Crescent Ridge VC","Cal Innovation Fund","NuFund","Robin Hood Ventures","Golden Seeds","HIP VC"];
/* news: coolerheads.com Press page; every item links to the source. [date, headline, source, url] */
var NEWS=[
 ["Oct 2026","Carle Health brings portable scalp cooling to four Illinois infusion locations","Carle Health","https://carle.org/newsroom/community/2026/10/new-cold-cap-technology-available-to-cancer-patien"],
 ["Sep 2026","A new California law may help more cancer patients keep their hair","KPBS","https://www.kpbs.org/news/health/2026/09/29/a-new-california-law-may-help-more-cancer-patients-keep-their-hair"],
 ["Apr 2026","WellSpan offers scalp cooling at all its cancer centers: Kimberlee’s story","WellSpan Health","https://www.wellspan.org/articles/2026/04/web-kimberlees-cooling-cap-oncology-care-story"],
 ["Apr 2026","New York Medicaid covers scalp cooling in a landmark health-equity move","BriefGlance","https://briefglance.com/articles/ny-medicaid-covers-scalp-cooling-in-landmark-health-equity-move"],
 ["Jul 2025","Cooler Heads closes an oversubscribed $11M Series A to expand Amma","PR Newswire","https://www.prnewswire.com/news-releases/cooler-heads-secures-series-a-funding-to-revolutionize-scalp-cooling-technology-for-chemotherapy-patients-302510545.html"],
 ["Jul 2025","2026 Medicare Physician Fee Schedule rates set for scalp cooling CPT codes","PR Newswire","https://www.prnewswire.com/news-releases/2026-medicare-physician-fee-schedule-rates-set-for-scalp-cooling-cpt-codes-302506058.html"]];
