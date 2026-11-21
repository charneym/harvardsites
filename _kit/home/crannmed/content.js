var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"'];
var WEB="https://crannmed.com/";
var MAIL="info@crannmed.com";
var MAIL_SURE="sure@crannmed.com";
var LI="https://ie.linkedin.com/company/crannmed";
/* sources: crannmed.com (pages and posts, read through the site's public WordPress API while the front end shows a maintenance
   page), CORDIS 101297521 and 190167448, Enterprise Ireland (26 Feb 2026), ThinkBusiness (26 Feb 2026), ClinicalTrials.gov NCT06550024 */
var N_EI="https://www.enterprise-ireland.com/en/news/crannmed-awarded-12-5-million-from-european-innovation-council";
var N_TB="https://www.thinkbusiness.ie/articles/crannmed-eic-accelerator-funding-2026/";
var N_CORDIS26="https://cordis.europa.eu/project/id/101297521";
var N_CORDIS22="https://cordis.europa.eu/project/id/190167448";
var N_CT="https://clinicaltrials.gov/study/NCT06550024";
var N_EIC21="https://ec.europa.eu/commission/presscorner/detail/en/ip_21_5225";
/* programmes: [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["Knee osteoarthritis","Genicular artery embolization (GAE)","FDA Breakthrough Device · 2021","The SURE study, an FDA-approved IDE study, randomises 89 patients 2:1 between GAE with SakuraBead and a standard-of-care steroid injection. It follows a 15-patient pilot study whose results were presented at CIRSE in September 2024.",N_CT,"ClinicalTrials.gov"],
 ["Frozen shoulder","Adhesive capsulitis","FDA Breakthrough Device · 2023","CrannMed’s second Breakthrough Device Designation from the FDA, for SakuraBead in adhesive capsulitis: stiffness and pain that arise when the capsule around the shoulder joint becomes inflamed and thickened.","",""],
 ["Lower back pain","Lumbar embolization","Pilot research · SIR 2025","Pilot research investigating the feasibility of lumbar treatment with SakuraBead was presented at the SIR conference in April 2025 by Asst. Prof. Jessie Stewart of UCLA.","",""],
 ["Hand osteoarthritis and plantar fasciitis","Chronic inflammatory pain at new sites","EIC Accelerator · 2026–2028","Highlighted by successful pilot studies as two areas of great patient need. The first €2.5m phase of the 2026 EIC Accelerator award extends the technology to these and other anatomical sites.",N_EI,"Read the release"]];
var PARTNERS=["European Innovation Council · Horizon Europe","Enterprise Ireland","Disruptive Technologies Innovation Fund","Institute of Clinical Trials, University of Galway","Synecco","ICS Medical","Creganna Medical","CREST, TU Dublin"];
/* people: crannmed.com Our Team and Advisory Board; Enterprise Ireland release; ClinicalTrials.gov NCT06550024 */
var TEAM=[
 ["Liam Farrissey","Chief Executive Officer","Leads CrannMed, which grew through the GMIT Innovation Hub before moving into its own 6,000 sq ft facility in the Galway Technology Park."],
 ["Joan McCabe","Chief Operating Officer","Leads operations, and is the central contact for the SURE clinical study of SakuraBead in knee osteoarthritis."],
 ["Helen Ryan","Chair of the Board","More than twenty-five years in the medical device industry, including as CEO of Creganna Medical and in product development and research roles at Medtronic and Covidien. A director of Enterprise Ireland."],
 ["Andy Lewis, PhD","Technical Advisor and Board Observer","Formerly VP R&D at BTG/Boston Scientific (Biocompatibles UK). Led the development of the first commercial drug-eluting bead, now used in hundreds of thousands of procedures worldwide."]];
var STAFF=["Sankalp Agarwal, Material Science","Rena Daly, Quality & Regulatory","Con O’Brien, Clinical Management","Dermot O’Reilly, R&D","Raghvendra Bohara, R&D","Bebhinn Yong, Manufacturing","Roisin McNulty, Field Clinical","Ellen Conway, Clinical","Josh Yates, Operations","Laura Leigh, Quality","Bernie Quinn, Quality"];
var ADVISORS=["Dr. Ari Isaacson, Global Principal Investigator","Prof. Mark Little","Dr. Sid Padia","Dr. Jessie Stewart","Dr. Yuji Okuno","Dr. Bedros Taslakian","Dr. Leigh Casadaban","Dr. William Macaulay"];
/* news: only items with a working external link. [date, headline, source, url] */
var NEWS=[
 ["June 1, 2026","EIC Accelerator project “SakuraBead: pain agnostic treatment for everyone” begins, running to May 2028","CORDIS",N_CORDIS26],
 ["February 26, 2026","CrannMed approved for up to €12.5m from the European Innovation Council Accelerator","Enterprise Ireland",N_EI],
 ["February 26, 2026","CrannMed secures €12.5m from EU innovation fund, with first commercial sales expected by the end of 2026","ThinkBusiness",N_TB],
 ["October 2021","CrannMed among the EIC Accelerator’s new wave of start-up champions, with €3.5m for the EmboSure project","European Commission",N_EIC21]];
var SHEETS=[];
