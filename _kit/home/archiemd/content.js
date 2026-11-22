var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','400 1em "Outfit"','500 1em "Outfit"'];
var MAIL="mailto:info@archiemd.com?subject=ArchieMD%20enquiry";
/* products, from archiemd.com (home, Products) and the product sites. [audience, product, description, link label, url] */
var PROD=[
 ["EMS","Medrills 2.0","A series of mobile and web applications that use 3D visualisation and interactive virtual medical simulation for EMS training and recertification, approved for continuing education hours.","medrills.com","https://www.medrills.com/"],
 ["Nursing","Nurse-Skills","A web-based, visually rich nursing education platform covering internal anatomy, physiology and pathophysiology, with over 50 hours of material.","",""],
 ["Procedures","Haptic procedure trainers","Low-cost haptic simulation tools for IV placement, needle chest decompression, fasciotomy, lateral canthotomy and more: the learner feels the tissue through a force-feedback stylus.","",""],
 ["Clinical skills","Mixed-reality PIVC trainer","Mixed-reality simulation for peripheral intravenous catheter placement, evaluated with the University of Michigan.","BMC Med Educ","https://bmcmededuc.biomedcentral.com/articles/10.1186/s12909-022-03946-y"],
 ["Surgery","Multimedia trauma training","Built with trauma surgeons from leading medical centres: 3D animation and interactive exercises for the major injuries of the chest and abdomen, with a virtual instructor.","",""],
 ["Patients & schools","Health science animations","A large library of 3D animations of anatomy, physiology and the onset and treatment of major conditions, each authored by a board-certified physician.","",""]];
/* published studies (archiemd.com Research and News; PubMed) [journal, title, url] */
var EVID=[
 ["Cureus, March 2026","Haptic training simulator use in emergency procedure education","https://pubmed.ncbi.nlm.nih.gov/42028530/"],
 ["BMC Medical Education, 2022","Mixed reality simulation for peripheral intravenous catheter placement training","https://bmcmededuc.biomedcentral.com/articles/10.1186/s12909-022-03946-y"],
 ["Clinical Simulation in Nursing, 2017","Interactive anatomy-augmented virtual simulation training","https://www.nursingsimulation.org/article/S1876-1399(17)30126-3/abstract"],
 ["Archives of Disease in Childhood, 2015","Using digital multimedia to improve parents’ and children’s understanding of clinical trials",""]];
/* archiemd.com, ArchieMD's Team. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Robert Levine, MD",title:"President and Chief Medical Officer",sum:"Board-certified emergency physician at Jackson Memorial Hospital; principal investigator on NIH and NSF grants."},
 {g:"Leadership",name:"Doug Levine",title:"Chairman",sum:"Entrepreneur who founded Crunch Fitness; leads the company’s strategic positioning and growth."},
 {g:"Leadership",name:"Michele Wornow",title:"Vice President, Sales and Marketing",sum:"With ArchieMD since 2003; partnerships with healthcare and science content publishers."},
 {g:"Leadership",name:"Kirk Macolini",title:"Director of Strategic Development",sum:"Business development and new product lines, including Medrills; US Army veteran."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["March 2026","Haptic simulation proves a feasible, effective adjunct for emergency procedure training","Cureus","https://pubmed.ncbi.nlm.nih.gov/42028530/"],
 ["December 2022","Mixed reality is a game changer for PIVC placement, University of Michigan research finds","BMC Medical Education","https://bmcmededuc.biomedcentral.com/articles/10.1186/s12909-022-03946-y"],
 ["June 2021","Medrills 2.0, a web-based EMS platform for training and recertification, launches","medrills.com","https://www.medrills.com/"],
 ["February 2018","Augmented reality for nursing education: interactive anatomy-augmented virtual simulation","Clinical Simulation in Nursing","https://www.nursingsimulation.org/article/S1876-1399(17)30126-3/abstract"]];
var SHEETS=[];
