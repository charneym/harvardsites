var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="info@makaniscience.com";
/* milestones (makaniscience.com news; PR Newswire 2025-04-02; NIH RePORTER R61HL177500; ClinicalTrials.gov NCT06521385). [when, what, detail, label, url] */
var MILE=[
 ["February 2024","Accepted into CTIP","Makani Science joined the Consortium for Technology & Innovation in Pediatrics, an FDA-funded accelerator that supports getting pediatric devices to market.","CTIP","https://www.ctipmedtech.org"],
 ["May 2024","Head to head with capnography","A 32-participant study compared the Makani Respiratory Monitoring System with capnography for respiratory rate. It is complete, and its results were posted in March 2026.","NCT06521385","https://clinicaltrials.gov/study/NCT06521385"],
 ["April 2025","FDA 510(k) clearance","The Makani Respiratory Monitor was cleared by the FDA to market and distribute, for continuous, real-time monitoring of respiratory rate.","PR Newswire","https://www.prnewswire.com/news-releases/makani-science-receives-fda-clearance-for-groundbreaking-respiratory-monitor-302417666.html"],
 ["April 2025","NIH grant for apnea of prematurity","The National Heart, Lung, and Blood Institute funds a continuous respiratory monitoring platform for classifying apnea of prematurity in premature newborns.","NIH RePORTER","https://reporter.nih.gov/project-details/11318949"]];
/* the NICU need, as set out on makaniscience.com (Market Opportunity) */
var NEED=[
 ["Apnea of Prematurity","Half of all babies born before 32 weeks suffer from apnea of prematurity"],
 ["Missed events","Current NICU monitoring often fails to detect critical events: as many as 70% of apnea events are missed"],
 ["Burden on care","Ineffective management leads to an average of 5.7 excess days in the NICU"],
 ["Lifelong impact","Hypoxia events can lead to permanent neurodevelopmental impairment and raise lifetime care costs by up to $350,000"]];
/* makaniscience.com About Us (team and board); news page; NIH RePORTER. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Team",name:"Sima Ghafari",title:"CEO",sum:"Chief Executive Officer, and a member of the board of directors."},
 {g:"Team",name:"Michael Chu, PhD",title:"CTO and Co-founder",sum:"Co-founded Makani Science with Dr. Michelle Khine. Principal investigator on the company’s NIH grant for apnea of prematurity."},
 {g:"Team",name:"Stephen Young",title:"CFO",sum:""},
 {g:"Team",name:"Xinlei Chen, PhD",title:"Biomedical Scientist",sum:""},
 {g:"Team",name:"Tom Kroenke",title:"Regulatory Consultant",sum:""},
 {g:"Team",name:"Carolyn McCuan",title:"Clinical Consultant",sum:""},
 {g:"Board of directors",name:"Ray Chan",title:"Chairman",sum:""},
 {g:"Board of directors",name:"Michelle Khine, PhD",title:"Co-Founder",sum:"The sensor is the result of over ten years of her research at the University of California, Irvine."},
 {g:"Board of directors",name:"Greg Buchert, MD",title:"Board Member",sum:"Physician and former CEO, who led the company through its FDA clearance in 2025."},
 {g:"Board of directors",name:"Gabor Oroszlan, MBA",title:"Board Member",sum:"Senior medical device leader with decades of experience across sales, operations, quality, marketing, finance and clinical research."}];
var ADV=["Shannon Sullivan, MD","Steven Brooks, MD, MBA","Francis Duhay, MD, MBA","George Carpenter","Ramon Johnson, MD, MBA","Steve Yun, MD","Ali Abaye, PhD","Thomas Lee, MD","Terrie Inder"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["March 2026","Results posted: the Makani Respiratory Monitoring System compared with capnography for respiratory rate","ClinicalTrials.gov","https://clinicaltrials.gov/study/NCT06521385"],
 ["May 2025","UC Irvine startup Makani Science has created the most important medical device you’ll never notice","UC Irvine","https://innovation.uci.edu/news/makani/"],
 ["May 2025","Makani Science: a continuous respiration monitor","Future Human","https://futurehuman.beehiiv.com/p/makani-science"],
 ["April 2025","Makani Science receives FDA clearance for its respiratory monitor","PR Newswire","https://www.prnewswire.com/news-releases/makani-science-receives-fda-clearance-for-groundbreaking-respiratory-monitor-302417666.html"],
 ["April 2025","NIH awards Makani Science a grant to classify apnea of prematurity","NIH RePORTER","https://reporter.nih.gov/project-details/11318949"]];
var SHEETS=[];
