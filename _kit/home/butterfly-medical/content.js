var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','300 1em "Titillium Web"','400 1em "Titillium Web"','600 1em "Titillium Web"'];
var MAIL="mailto:office@butterfly-medical.com";
/* clinical and regulatory milestones (butterfly-medical.com News; PR Newswire 13 Oct 2026; Urology Times 8 Jan 2026;
   PR Newswire / MassDevice 14 May 2026). [label, title, detail, status] */
var MILE=[
 ["Europe","CE Mark under EU MDR","Certified under the EU Medical Device Regulation (EU MDR 2017/745) for the Butterfly Prostatic Retraction Device, announced October 2026.","Certified"],
 ["United States","Premarket Approval application","Submitted to the U.S. FDA after the pivotal trial. In the USA the device is investigational, limited by federal law to investigational use.","Submitted"],
 ["Pivotal trial","244 men, randomized and double-blind","Prospective, double-blind trial of the device against sham rigid cystoscopy (2:1, crossover permitted) at U.S. sites; primary endpoints are IPSS change at 3 and 12 months (NCT05341661). Final 12-month follow-up completed January 2026.","Completed"],
 ["Pilot study","Five-year follow-up","BM-011-LT: 24 patients followed for five years, mean IPSS improvement of 6.04 points and an overall response rate of about 61% at last follow-up, presented at the 2025 AUA Annual Meeting.","Reported"]];
/* butterfly-medical.com, Company. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Patrick MacCarthy",title:"Chief Executive Officer",sum:"More than 20 years in medtech; formerly Business Unit VP, Urology and GYN at Olympus, leading a BPH treatment's U.S. launch."},
 {g:"Leadership",name:"Idan Geva, MBA",title:"Chief Operating Officer",sum:"More than 18 years in medical devices: FlowMedic (CEO), Abbott Vascular, MCS and Biotronik."},
 {g:"Leadership",name:"James Ulchaker, MD",title:"Chief Medical Officer",sum:"Urologist; formerly Vice Chair of Urology at the Cleveland Clinic, with long experience of BPH in practice and clinical trials."},
 {g:"Leadership",name:"Vardit Segal, PhD",title:"VP Clinical and Regulatory Affairs",sum:"More than 15 years leading clinical and regulatory work in the US and other countries; PhD in biomedical engineering."},
 {g:"Board",name:"Nayan Gregory Parekh, PhD",title:"Chairman",sum:"Founder and Managing Partner, New Rhein Healthcare Investors; formerly ran M&A at Novartis."},
 {g:"Board",name:"Adrian Paz, MD",title:"Co-founder and Board Member",sum:"Certified urologist and serial entrepreneur: EON Surgical, Orthospace, Vibrant, Clip-Tip Medical."},
 {g:"Board",name:"Shimon Eckhouse, PhD",title:"Investor and Board Member",sum:"Founded and invested in more than 20 startups, including Lumenis, Syneron and Rapid Medical."},
 {g:"Board",name:"Steffen Hovard",title:"Board Member",sum:"President of Interventional Urology at Coloplast from 2011 to 2019."},
 {g:"Board",name:"Ivan Gergel, MD",title:"Board Member",sum:"Managing Partner and CMO at New Rhein; formerly CMO at Nektar Therapeutics."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","Butterfly Medical achieves EU MDR certification for next-generation BPH treatment","PR Newswire","https://www.prnewswire.com/news-releases/butterfly-medical-achieves-eu-mdr-certification-for-next-generation-bph-treatment-302906797.html"],
 ["May 2026","Butterfly Medical secures $21 million in upsized Series C funding","PR Newswire","https://www.prnewswire.com/il/news-releases/butterfly-medical-secures-21-million-in-upsized-series-c-funding-to-advance-minimally-invasive-bph-treatment-302772142.html"],
 ["January 2026","Pivotal trial of the Butterfly device for BPH reaches final completion","Urology Times","https://www.urologytimes.com/view/pivotal-trial-of-butterfly-device-for-bph-reaches-final-completion"]];
var SHEETS=[];
