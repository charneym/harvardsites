var FONTS=['300 1em "Source Sans 3"','400 1em "Source Sans 3"','500 1em "Source Sans 3"','600 1em "Source Sans 3"','italic 300 1em "Source Sans 3"','italic 400 1em "Source Sans 3"'];
var WEB="https://flowpointmedical.com/";
var MAIL="jasonbobe@gmail.com";
var RPT="https://reporter.nih.gov/project-details/11013179";
/* facts: flowpointmedical.com (home, about); NIH RePORTER 1R43DK141421-01 (appl 11013179) and 3R43DK141421-01S1 (11237368);
   SBIR.gov award 213501 (company address, contact); US 2024/0238575 A1 (Azeloglu, Lima; Icahn School of Medicine at Mount Sinai);
   Startland News 2025-03-12; all fetched 2026-11-21 */
var SYS=[["Guide","The right point, every time","A 3D-printed titanium shell guides the hemodialysis needle to the correct insertion point, at a fixed angle and depth."],
 ["Seal","Bleeding stops on removal","A titanium-nitride coated valve closes the channel as the needle comes out, stopping bleeding immediately."],
 ["Integrate","Built to become part of the arm","An open titanium lattice of through-holes and fenestrations is designed to encourage tissue ingrowth around the device."]];
var DEV=[
 ["Phase I · now","Manufacturability","Refine the manufacturability and operating parameters of the device with state-of-the-art materials and engineering techniques."],
 ["Phase I · now","Large-animal study","A preclinical study of device function, tissue integration, inflammatory profile, and infection and bleeding risks."],
 ["Next","GLP study and first-in-human","Results are planned to pave the way for a comprehensive, large-scale GLP-certified animal study and a first-in-human trial."],
 ["Horizon","Dialysis at home","Safer, easier cannulation could make treatments more efficient, and possibly help wider adoption of home hemodialysis."]];
var TEAM=[
 {g:"Leadership",name:"Jason Bobe",title:"Co-Founder and CEO",sum:"Contact principal investigator on Flowpoint’s NIH NIDDK SBIR award; Associate Professor at the Icahn School of Medicine at Mount Sinai."},
 {g:"Inventors",name:"Evren U. Azeloglu, PhD",title:"Co-Inventor",sum:"Associate Professor at Mount Sinai; co-inventor of the self-sealing vascular access device and investigator on the NIH award."},
 {g:"Inventors",name:"Eric Lima, PhD",title:"Co-Inventor",sum:"Tenured Professor at The Cooper Union; co-inventor of the self-sealing vascular access device."},
 {g:"Clinical",name:"Alan Benvenisty, MD",title:"Vascular Surgeon",sum:"Vascular surgeon and Professor at Mount Sinai."}];
var NEWS=[
 ["May 2025","NIH NIDDK adds a supplement to Flowpoint’s SBIR award for the self-sealing needle guide system","NIH RePORTER","https://reporter.nih.gov/project-details/11237368"],
 ["Mar 2025","Flowpoint Medical advances to Round 2 of the Gamechangers & Champions pitch competition for Kansas startups","Startland News","https://startlandnews.com/2025/03/gamechangers-champions-kansas/"],
 ["Sep 2024","NIH NIDDK awards Flowpoint Medical an SBIR Phase I grant: “Self-sealing needle guide system for reliable hemodialysis”","NIH RePORTER",RPT],
 ["Jul 2024","“Vascular access devices with self-sealing valves”: the inventors’ patent application is published","Google Patents","https://patents.google.com/patent/US20240238575A1/en"]];
var SHEETS=[];
