var FONTS=['400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:info@xdotmedical.com";
var CT_P="https://clinicaltrials.gov/study/NCT07719244",CT_E="https://clinicaltrials.gov/study/NCT07464353";
var MD="https://www.massdevice.com/xdot-begin-study-vascular-closure-device/";
var EIN="https://www.einpresswire.com/article/687826671/xdot-medical-inc-announces-successful-first-in-human-study-for-xcinch-access-management-system";
var TCT="https://www.tctmd.com/slide/novel-vascular-closure-device-xdot-us-early-feasibility-study-results";
/* Clinical programme, from the February 2024 release (EIN Presswire), ClinicalTrials.gov NCT07464353 and NCT07719244,
   MassDevice (6 July 2026) and TCTMD (TCT 2026). Status words only as the registries state them.
   [stage, date, title, place, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["Pivotal IDE","From Sep 2026 (est.)","Pivotal study, 266 subjects","Femoral arterial and venous cohorts","A prospective, multicenter, dual-cohort, single-arm, open-label study to establish reasonable assurance of safety and effectiveness of the xDot Access Management System for femoral-arterial and femoral-venous closure, with follow-up through 30 days. FDA approved the IDE in July 2026.",0,"Not yet recruiting",CT_P,"NCT07719244"],
 ["Early feasibility","June 2026","US early feasibility study, 30 patients","Downers Grove · Saint Cloud · Tulsa · Sioux Falls · Milwaukee","Safety and effectiveness of the xDot AMS for closure of large-bore femoral-arterial and femoral-venous access sites, after procedures through 8F to 22F devices or sheaths such as TAVR and EVAR. Results were presented at TCT 2026.",0,"Recruiting",CT_E,"NCT07464353"],
 ["First in human","February 2024","First-in-human study, xCinch AMS","Sanatorio Italiano, Asunción, Paraguay","Five arterial and three venous closures after large-bore procedures, with good clinical, hemodynamic and angiographic results and immediate hemostasis reported in every case.",1,"Completed",EIN,"Release"]];
var EVID=[
 ["FDA IDE approval","In July 2026 FDA approved xDot&#8217;s investigational device exemption, allowing the pivotal study to begin"],
 ["TCT 2026","US early feasibility study results presented by Susheel K. Kodali, MD, on 3 November 2026"],
 ["Immediate hemostasis","Reported in all eight first-in-human closures, five arterial and three venous"],
 ["Patented mechanism","A dynamic cinching mechanism that automates the surgical purse-string approach to closure"]];
/* xdotmedical.com (Team). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Management",name:"Aashiish Agnihotri, PhD",title:"Founder & CEO",sum:"Founder of xDot Medical; also a member of the Board of Directors."},
 {g:"Management",name:"Jeff Sandstrom",title:"VP of R&D",sum:""},
 {g:"Management",name:"Kyle King",title:"CFO",sum:""},
 {g:"Board of Directors",name:"Aashiish Agnihotri, PhD",title:"Director",sum:"Founder & CEO."},
 {g:"Board of Directors",name:"Steven F. Bolling, MD",title:"Director",sum:"Cardiac surgeon, University of Michigan."},
 {g:"Board of Directors",name:"Shahin Enayati",title:"Director",sum:""},
 {g:"Medical advisors",name:"Vinayak Bapat, MD",title:"Medical Advisor",sum:"Chief of Cardiac Surgery, Abbott Northwestern Hospital."},
 {g:"Medical advisors",name:"Steve Bolling, MD",title:"Medical Advisor",sum:"Cardiac Surgeon, University of Michigan."},
 {g:"Medical advisors",name:"Susheel Kodali, MD",title:"Medical Advisor",sum:"Director of Structural Heart & Valve Center, New York Presbyterian Medical Center."},
 {g:"Medical advisors",name:"Chris Meduri, MD",title:"Medical Advisor",sum:"Interventional Cardiologist, Karolinska Institute, Sweden."},
 {g:"Medical advisors",name:"Paul Sorajja, MD",title:"Medical Advisor",sum:"Director of Valve and Structural Heart Center, Abbott Northwestern Hospital."}];
var NEWS=[
 ["3 November 2026","Novel vascular closure device (xDot): US early feasibility study results, presented at TCT 2026","TCTMD",TCT],
 ["6 July 2026","xDot Medical receives FDA IDE approval to begin a pivotal study of its vascular closure device","MassDevice",MD],
 ["12 February 2024","xDot Medical announces successful first-in-human study for the xCinch Access Management System","EIN Presswire",EIN]];
var SHEETS=[];
