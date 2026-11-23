var FONTS=['500 1em "Jost"','600 1em "Jost"','400 1em "Nunito Sans"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var MAIL="mailto:info@procyrion.com";
var NR="https://procyrion.com/news/";
var CT="https://clinicaltrials.gov/study/";
/* Clinical programme, from procyrion.com (Clinical Trials, Overview) and the company's news releases (17 Nov 2026,
   21 Mar 2023). Stage words only as the company states them. [indication, area, title, stage, detail, dim, tag, NCT] */
var PIPE=[
 ["Acute decompensated heart failure","Cardiorenal","DRAIN-HF pivotal IDE trial","Enrolling · United States and Eastern Europe","Diuretics alone versus Aortix in patients hospitalized with ADHF who remain congested and diuretic resistant despite standard medical management. A registry arm includes end-stage heart failure patients at high risk of needing an LVAD or a heart transplant.",0,"NCT05677100","NCT05677100"],
 ["Cardiorenal syndrome","Cardiorenal","Aortix CRS Pilot Study","Enrollment completed","Patients unresponsive to medical therapy showed rapid decongestion and significant improvements in kidney function, cardiac function and shortness of breath at 30 days, presented as a late-breaking trial at THT 2023.",0,"NCT04145635","NCT04145635"],
 ["Acute kidney injury","Renal support","Perioperative Reduction of Kidney Injury Study","Enrollment completed","Aortix as renal support to reduce acute kidney injury in cardiac surgery and coronary interventions, the second indication now under clinical evaluation.",0,"NCT04999163","NCT04999163"],
 ["Myocardial infarction · chronic HF","Future","Unloading and at-home therapy","Observed in preclinical testing","Cardiac unloading to reduce myocardial infarct size, and longer-term at-home therapy to improve outcomes in chronic heart failure: indications where the device&#8217;s dual effect on heart and kidneys could also help.",1,"Potential indications",""]];
/* Milestones, each from a company news release */
var EVID=[
 ["Breakthrough-designated","Aortix is a Breakthrough-designated therapy in a pivotal trial (17 Nov 2026)"],
 ["$57.7 million","Series E led by Fannin Partners to fund DRAIN-HF and prepare for commercialization (5 Feb 2024)"],
 ["New ICD-10-PCS codes","Hospital procedure codes for a short-term pump in the descending thoracic aorta (7 Sep 2023)"],
 ["Fierce 15 of 2023","Named one of Fierce Medtech&#8217;s Fierce 15 companies of the year (4 Mar 2024)"]];
/* procyrion.com (Team). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Management",name:"Jason Whiting",title:"President & CEO",sum:"More than 25 years commercializing novel medical technologies, including several heart failure therapies; formerly CEO of Avation Medical and, for more than eight years, President of ZOLL Cardiac Management Solutions."},
 {g:"Management",name:"Reynolds M. Delgado III, MD, FACC",title:"Founder & Chief Medical Officer",sum:"Practicing heart failure cardiologist; Medical Director, Mechanical Support Devices in Heart Failure, Texas Heart Institute; author on two NEJM articles behind the FDA approval of the HeartMate II LVAD."},
 {g:"Management",name:"Andrew Davis",title:"Chief Commercial Officer",sum:"More than 25 years in medical devices, leading commercial teams and launching cardiovascular therapies that widen patient access."},
 {g:"Management",name:"Jason Heuring, PhD",title:"Chief Scientific Officer",sum:"Venture-backed founder of three start-ups and former McKinsey consultant on CV OR and cath-lab engagements; PhD from Oxford in sensors and control systems."},
 {g:"Management",name:"Elisabeth (Beth) Neely",title:"SVP, Clinical and Regulatory Affairs",sum:"More than 20 years as a global regulatory affairs leader, with a key role in the approval of neuromodulation and cardiac devices."},
 {g:"Management",name:"Chris Durst, PhD",title:"SVP, Product Development and Operations",sum:"Bioengineer and medical device entrepreneur from structural heart research; BS from Georgia Tech, PhD in Bioengineering from Rice University."},
 {g:"Management",name:"Katherine Cox",title:"VP, Quality Assurance",sum:"Quality engineering and quality management systems under 21 CFR 820 and ISO 13485, for 510(k), CE Mark and PMA programmes."},
 {g:"Board of directors",name:"Gerhard “Gary” F. Burbach",title:"Chairman",sum:"Independent director and chairman since 2016; president and CEO of Thoratec Corporation from 2006 to 2014."},
 {g:"Board of directors",name:"Eric S. Fain, MD",title:"Director",sum:"Procyrion’s President and CEO from 2018 to 2026; formerly Group President, Cardiovascular and Neuromodulation at Abbott after its acquisition of St. Jude Medical."},
 {g:"Board of directors",name:"Jason Whiting",title:"Director",sum:"President and CEO of Procyrion."},
 {g:"Board of directors",name:"Leo Linbeck III",title:"Director",sum:"Chairman and founder of Fannin Innovation Studio; President and CEO of the Aquinas Companies."},
 {g:"Board of directors",name:"Carter Meyer",title:"Director",sum:"Founder and Managing Partner of View Ventures, investing in medical and health technologies."},
 {g:"Board of directors",name:"Marc Chaput",title:"Director",sum:"Partner at Gravitas Healthcare; represents the State of Texas on the Procyrion board."},
 {g:"Board of directors",name:"Jeff Bird, MD, PhD",title:"Director",sum:"Life science investor for nearly twenty years at Sutter Hill Ventures; founded Bluebird Ventures in 2019."},
 {g:"Board of directors",name:"Lucas Buchanan",title:"Director",sum:"Chief Operating Officer and Chief Financial Officer at Silk Road Medical."}];
/* Scientific advisory board (procyrion.com, Team): name and institution */
var SAB=[["Jennifer Cowger, MD","Henry Ford Hospital"],["Matheen A. Khuddus, MD","The Cardiac and Vascular Institute"],["Manesh R. Patel, MD","Duke University"],["Sean Pinney, MD","Mount Sinai Morningside"],["Janani Rangaswami, MD","George Washington University"],["Palak Shah, MD","Northwestern Medicine"],["Nir Uriel, MD","NewYork-Presbyterian"],["Prof. Stephen Worthley","GenesisCare"],["Robby Wu, DO","Tampa General Hospital"]];
/* news releases (procyrion.com, News), each linking to the company's own page */
var NEWS=[
 ["17 Nov 2026","Jason Whiting appointed President and CEO as Eric Fain retires","procyrion-announces-ceo-transition-appointing-jason-whiting-as-new-ceo"],
 ["2 Dec 2025","Andrew Davis appointed Chief Commercial Officer","procyrion-appoints-andrew-davis-as-chief-commercial-officer"],
 ["9 Sep 2024","Lucas Buchanan joins the Board of Directors","procyrion-announces-appointment-of-lucas-buchanan-to-board-of-directors"],
 ["5 Feb 2024","$57.7 million Series E financing closed","procyrion-closes-57-million-in-series-e-financing"],
 ["30 Nov 2023","First patients enrolled in the DRAIN-HF pivotal IDE trial","procyrion-announces-first-patient-enrollments-in-the-drain-hf-pivotal-trial"]];
var SHEETS=[];
