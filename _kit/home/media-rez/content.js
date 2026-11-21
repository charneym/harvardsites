var FONTS=['400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"'];
var MAIL="contact@mediarez.com";
var RP="https://reporter.nih.gov/project-details/";
/* Programs: every line from NIH RePORTER (Media Rez, LLC, Washington, DC), JAMA Network Open 2024;7(9):e2435011,
   JMIR Formative Research 2025;9:e64869 and mediarez.com. [program, focus, area, status, detail, link, link label] */
var PIPE=[
 ["More SHEEP","Insomnia in young adult cancer survivors","Insomnia · CBT-I","SBIR Phase II · NCI · 2025–2028","The More Sleep Hours Electronic Education Program: CBT-I through a screen-free, conversational, AI-driven smart speaker, custom lighting to plan and remind, and a smart router that reports bedtime screen use. Phase II finalises the prototype, field-tests it and runs a randomized controlled trial against an attention control.",RP+"11348878","NIH RePORTER"],
 ["Sleep Helper","Insomnia in breast cancer survivors","Insomnia · CBT-I","Randomized trial complete · 2024","A voice-activated program through which survivors report their sleep to an internet-connected speaker and receive feedback, more like an in-person provider than a web course. In a 76-woman randomized trial it cut Insomnia Severity Index scores by 8.4 points, against 2.6 for an education control.","https://doi.org/10.1001/jamanetworkopen.2024.35011","JAMA Netw Open"],
 ["Virtual reality for cancer pain","Chronic pain in people living with cancer","Pain · VR","SBIR Phase I · NCI · 2025","A patient-directed virtual reality intervention for non-pharmacologic management of chronic cancer pain, designed with patients through an iterative process and tested for feasibility, acceptability, usability and safety.",RP+"11314954","NIH RePORTER"],
 ["HIV testing uptake","Adolescents and young adults","Prevention","SBIR Phase II · NICHD · 2016–2025","An interactive intervention to increase HIV testing uptake among adolescents and young adults, extended with an NICHD supplement in 2023.",RP+"10377481","NIH RePORTER"]];
/* the Sleep Helper randomized trial, JAMA Network Open, 3 September 2024 (NCT05233800) */
var EVID=[
 ["Insomnia severity","Insomnia Severity Index down 8.4 points with the smart-speaker program, against 2.6 with education alone (P < .001)"],
 ["Falling asleep","Sleep onset latency improved by 8.3 minutes relative to control, and wake after sleep onset by 9.5 minutes"],
 ["Retention","70 of 76 women (92%) completed the six-week study"],
 ["Effect size","A Cohen d of 1.41 on the primary outcome, in breast cancer survivors with insomnia"]];
/* team: mediarez.com (President and CEO), NIH RePORTER (principal investigators) and the published papers. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Media Rez",name:"Daniel Greenberg",title:"President & CEO",sum:"Principal investigator on Media Rez’s NIH awards since 2013, from relapse-prevention video games to voice-driven CBT-I."},
 {g:"Research partners",name:"J. Hunter Groninger, MD",title:"MedStar Health Research Institute",sum:"Principal investigator with Media Rez on More SHEEP and on virtual reality for cancer pain."},
 {g:"Research partners",name:"Hannah Arem, PhD",title:"Principal investigator, Sleep Helper",sum:"Senior author of the 2024 JAMA Network Open randomized trial of the smart-speaker CBT-I program."},
 {g:"Research partners",name:"Amanda D. Castel, MD, MPH",title:"Principal investigator, HIV programs",sum:"Principal investigator with Media Rez on the NIH-funded HIV testing and treatment-adherence programs for young people."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2026","NCI continues the More SHEEP SBIR Phase II award for insomnia in young adult cancer survivors ($696,092)","NIH RePORTER",RP+"11348878"],
 ["September 2025","NCI awards Media Rez an SBIR Phase I grant for patient-directed virtual reality for cancer pain ($404,295)","NIH RePORTER",RP+"11314954"],
 ["June 2025","NCI awards the More SHEEP SBIR Phase II grant ($734,690)","NIH RePORTER",RP+"11069198"],
 ["2025","Development of a voice-activated virtual assistant to improve insomnia among young adult cancer survivors: feasibility and acceptability","JMIR Formative Research","https://formative.jmir.org/2025/1/e64869"],
 ["September 2024","Voice-activated cognitive behavioral therapy for insomnia: a randomized clinical trial","JAMA Network Open","https://doi.org/10.1001/jamanetworkopen.2024.35011"]];
var SHEETS=[];
