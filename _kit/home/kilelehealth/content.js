var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Roboto"','500 1em "Roboto"','600 1em "Barlow Condensed"'];
var MAIL="information@kilelehealth.com";
/* programmes: kilelehealth.com (home and Aptamer Roadmap). [indication, wave, biomarkers, detail] */
var PROG=[
 ["Phenylketonuria","First wave","Phenylalanine","Real-time phenylalanine insight for PKU patients and care teams, in place of infrequent blood tests and delayed feedback: faster adjustments to diet, supplements, formula and therapy."],
 ["GLP-1 therapy","First wave","Phenylalanine trends, more biomarkers over time","Insight into protein metabolism to guide nutrition and activity, so patients can continue GLP-1 therapy to target weight without unacceptable muscle weakness."],
 ["Functional medicine & wellness","Second wave","Cortisol","Continuous cortisol monitoring to make stress physiology visible through the day, informing sleep, nutrition, activity and recovery."],
 ["Diabetes","Second wave","Insulin, cortisol, C-peptide","“Beyond glucose” information: insulin trends and the drivers of insulin resistance, from prediabetes to insulin-dependent care."],
 ["Chronic kidney disease","Second wave","Kidney function trends","Stage-appropriate monitoring, from optimising therapy in Stages 2 and 3A to anticipating destabilising events in Stages 4 and 5."],
 ["Heart failure","Second wave","Multi-analyte trends","Post-discharge risk stratification, early signs of decompensation, and faster, safer titration of guideline-directed therapy."]];
/* kilelehealth.com/team. Text-only masthead (CI/CL). Summaries only restate the site. */
var TEAM=[
 {g:"Founders",name:"Andrew Cothrel",title:"CEO and Co-Founder",sum:"Over 30 years in medtech, bringing products to market at Abbott, Roche and start-ups; led Roche’s $100 million Applied Science business."},
 {g:"Founders",name:"Jason Heikenfeld, PhD",title:"Chief Technology Officer and Co-Founder",sum:"Professor at the University of Cincinnati, where he directs the Novel Devices Laboratory; the most patented professor in UC’s history."},
 {g:"Core team",name:"Madeleine DeBrosse, PhD",title:"Head of Aptamer Development",sum:""},
 {g:"Core team",name:"Jessie Schoewe",title:"Sensor Development Lead",sum:""},
 {g:"Core team",name:"Madalyn Clare",title:"E-Chem Lead, Research Scientist II",sum:""},
 {g:"Core team",name:"Zach Watkins, PhD",title:"Systems Engineer",sum:""},
 {g:"Core team",name:"Nikki Arde",title:"Head of Corporate Operations",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","Mixed charge monolayers enable multi-week continuous analyte monitoring in whole serum","ACS Sensors","https://pubmed.ncbi.nlm.nih.gov/42925536/"],
 ["March 2025","Kilele Health announces a global first in wearable sensors: 10-day in vivo performance","Press release","https://kilelehealth.com/global-first-in-wearable-sensors"],
 ["January 2025","Breakthrough wearable lets you ‘tune in’ to heart health","University of Cincinnati","https://www.uc.edu/news/articles/2025/01/breakthrough-wearable-lets-you-tune-in-to-heart-health.html"],
 ["January 2025","Kilele Health named a Startup to Watch","Dayton Business Journal","https://www.bizjournals.com/dayton/inno/stories/awards/2025/01/10/dayton-startups-to-watch-2025.html"],
 ["January 2025","‘This is the holy grail’: a device to tell you’re sick before you feel it","WCPO","https://www.wcpo.com/news/local-news/finding-solutions/this-is-the-holy-grail-uc-professor-develops-device-to-tell-youre-sick-before-you-feel-it"],
 ["April 2024","National Science Foundation supports Dayton startup with $1M in funding","Dayton Business Journal","https://www.bizjournals.com/dayton/inno/stories/fundings/2024/04/02/kilele-health-awarded-1-million-in-funds.html"],
 ["May 2024","Kilele Health wins first place at the 2024 OhioXcelerate pitch competition","Alloy Development","https://alloydev.org/kilele-health-triumphs-at-2024-ohioxcelerate-program/"]];
var SHEETS=[];
