var FONTS=['300 1em "Lato"','400 1em "Lato"','700 1em "Lato"'];
var MAIL="mailto:info@helpwear.ca";
var CT="https://clinicaltrials.gov/study/";
/* Clinical studies sponsored by HelpWear Inc., as registered on ClinicalTrials.gov (records read 2026-11-23).
   [acronym, NCT, title, status, detail, dim, site, link] */
var STUDIES=[
 ["CLONE","NCT07624435","Conventional Lead Opposed to Novel ECG","Active, not recruiting","A blinded, beat-by-beat comparison of standard ECG intervals (QRS, PQ and P-wave duration) from standard lead V4 with paired HeartWatch signals. Started February 2026; 40 participants enrolled.",0,"University of Calgary"],
 ["CATCH","NCT06164808","Cardiac Arrhythmia Telemetry: Conventional vs HeartWatch","Recruiting","The HeartWatch, worn on the upper arm and paired with a smartphone app for tagging symptoms, compared with conventional monitoring in patients with heart rhythm disorders. An estimated 300 participants.",0,"Foothills Medical Centre, Calgary"],
 ["ALERT","NCT05821465","Ambulatory Leadless Electrocardiogram Recorder Trial, feasibility","Completed","Patients recommended for heart monitoring wore the HeartWatch alongside standard Holter and event recorders, to compare QRS detection and the characterisation of tagged and abnormal arrhythmia events. 144 participants.",1,"Foothills Medical Centre, Calgary"],
 ["PRE-ALERT","NCT05357716","Preliminary research evaluation for the ALERT trial","Completed","The first evaluation of the HeartWatch ahead of the ALERT trial. 7 participants.",1,"HelpWear, Toronto"]];
/* helpwear.ca (Company). Text-only masthead; summaries state only what the site and its linked press state. */
var TEAM=[
 {g:"Leadership",name:"Scott Klein",title:"Chief Executive Officer",sum:"Biomedical engineer and MBA with 25 years in cardiology medtech at Medtronic and Abbott, focused on remote monitoring devices, now with $1B in annual sales."},
 {g:"Leadership",name:"Dr. Derek Exner, FACC, FHRS",title:"Co-Founder & Chief Medical Officer",sum:"Practising electrophysiologist, Canada Research Chair and international clinical trialist, with some 300 peer-reviewed publications."}];
var NEWS=[
 ["3 June 2026","CLONE study of the HeartWatch registered: a blinded beat-by-beat comparison with a standard ECG lead, at the University of Calgary","ClinicalTrials.gov",CT+"NCT07624435"],
 ["11 December 2023","CATCH study registered: the HeartWatch compared with conventional cardiac arrhythmia monitoring","ClinicalTrials.gov",CT+"NCT06164808"],
 ["24 September 2021","HelpWear awarded the Digital Technologies of Tomorrow QuickFire Challenge","J&amp;J Innovation","https://jnjinnovation.com/innovation-challenges/digital-technologies-tomorrow-quickfire-challenge"],
 ["14 September 2020","HelpWear named in CIX&#8217;s Top 20 most innovative early-stage companies","Accesswire","https://www.accesswire.com/605984/CIX-TOP-20-Early-and-CIX-TOP-10-Growth-Announced-Canadas-Most-Innovative-Technology-Companies"],
 ["1 March 2020","HelpWear accepted into the Texas Medical Center TMCx accelerator","TMC Innovation","https://medium.com/@TMCInnovation/introducing-the-tmcx-spring-2020-finalists-21dfb01436e6"],
 ["13 May 2019","HelpWear taps Canada Research Chair Derek Exner as Chief Medical Officer","BetaKit","https://betakit.com/helpwear-taps-canada-research-chair-derek-exner-as-chief-medical-officer/"]];
var SHEETS=[];
