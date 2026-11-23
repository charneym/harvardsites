var FONTS=['300 1em "Inter Tight"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var EMAIL="miden@multi4.se";
var PHONE="+46 736 929 000";
/* multi4.se, "Comparison": Multi4 against a resectoscope, as published by the company. [criterion, Multi4, resectoscope] */
var CMP=[
 ["Complete treatment time for the physician","5–30 min","20–60 min"],
 ["Complete time for the patient at the hospital","0.5–1 hour","6–48 hours"],
 ["People needed for the treatment","1 (2)","6–16"],
 ["Spinal or general anaesthesia","No","Yes"],
 ["Urethral catheter needed","No","Yes"],
 ["Treatment at the same visit as the control cystoscopy","Yes","No"],
 ["Performed in outpatient care","Yes","No"],
 ["Full sterility required","No","Yes"],
 ["Automatic transport of tissue out of the body","Yes","No"]];
/* multi4.se "Timeline" and "Awards", the June 2025 FDA release and CORDIS (grant 101188461). [year, milestone, detail] */
var MIL=[
 ["2021","Preclinical study","Performed with RISE Research Institutes of Sweden, the University of Gothenburg and the Urology Clinic at Sahlgrenska University Hospital."],
 ["2024","EIC Accelerator","€2.5 million from the European Innovation Council for Multi4, the first surgical instrument for bladder cancer treatment in a 20-minute outpatient procedure."],
 ["2025","FDA 510(k) clearance","Multi4 is cleared for commercial sale in the United States. A technical file for the MDR / CE mark was submitted for review the same year."],
 ["2025","MedTech Innovator","Selected for the 2025 MedTech Innovator cohort, and winner of the Innovate Nordic 2025 commercialisation accelerator of the Swedish American Chamber of Commerce, New York."],
 ["2026","Soft launch in the U.S.","The first commercial step in the United States, the world’s largest healthcare market."]];
var AWD=["Quality Innovation Award, Worldwide","Startup Company of the Year in the Nordics, Techarenan","Innovator of the Year, Nordic Woman in Tech","Årets Nybyggare, West Sweden","Winner, Innovate Nordic 2025, SACC New York"];
var TEAM=[
 {g:"Leadership",name:"Miden Melle-Hannah",title:"Founder and CEO",sum:"Surgeon and urologist who established Multi4 Medical."},
 {g:"Leadership",name:"Erik Selin",title:"Chairman of the Board",sum:"Investor and backer of Multi4 Medical."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2025","Breakthrough in cancer care: Multi4 Medical’s new technology cleared by the FDA","Mynewsdesk","https://www.mynewsdesk.com/se/multi4-ab/pressreleases/breakthrough-in-cancer-care-multi4-medicals-new-technology-cleared-by-fda-3394498"],
 ["2026","First-in-human outpatient management of recurrent NMIBC with the Multi4 instrument","UroToday","https://www.urotoday.com/recent-abstracts/urologic-oncology/bladder-cancer/171835-first-in-human-outpatient-management-of-recurrent-nmibc-with-the-multi4-instrument.html"],
 ["2025","Clinical investigation of the Multi4 System in patients with suspected recurrent bladder cancer","Veeva CTV","https://ctv.veeva.com/study/clinical-investigation-of-the-multi4-system"],
 ["September 2024","Multi4 starts its EIC Accelerator project under Horizon Europe","CORDIS","https://cordis.europa.eu/project/id/101188461"]];
var SHEETS=[];
