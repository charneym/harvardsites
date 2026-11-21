var FONTS=['300 1em "Jost"','400 1em "Jost"','italic 300 1em "Jost"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"'];
var WEB="https://medicarbone.com/";
var MAIL="info@medicarbone.com";
var AWD="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2600002";
/* facts: medicarbone.com (home, our-technology, about, news posts), NSF awards 2600002 (SBIR Phase II, 2026-08-24) and
   2322411 (SBIR Phase I, 2023-09-20, project outcomes report 2025-01-18); all fetched 2026-11-21 */
var SYS=[["01 · Sleeve","A carbon-fibre-reinforced sleeve","A two-layer intramedullary sleeve: a porous carbon fabric that compresses or stretches to the cavity, inside a non-porous polymer layer that keeps the resin in."],
 ["02 · Resin","An injectable, light-cured resin","A photocurable resin, pre-packed in amber syringes, is injected into the sleeve and cured in the bone within ten minutes of the light being applied."],
 ["03 · AI","A device sized to the patient","An AI tool reads patient-specific data and returns the optimal size, shape and materials of the composite device for that fracture."]];
var PROG=[
 ["Implant design","Custom sleeve systems","Highly targeted intramedullary sleeve systems, custom-designed for the anatomical location and fracture type.","NSF Phase II"],
 ["Materials","Radiopaque, in situ-curable resin","A radiopaque injectable resin that cures in situ, so the device stays visible during surgical and post-surgical imaging.","NSF Phase II"],
 ["Removal","Ultrasound removal device","A minimally invasive ultrasound device that removes the cured resin once the bone has healed.","NSF Phase II"],
 ["Guidance","Implant selection tool","An AI-driven tool for rapid selection of the right implant size from the anatomical site and fracture classification.","NSF Phase II"],
 ["First indication","Humerus fractures","Design and development of the first-generation implant, for fractures of the human humerus.","NSF Phase II"],
 ["Validation","GLP testing toward 510(k)","Good Laboratory Practice validation of each component and of the complete device, for early safety data on the path to 510(k).","NSF Phase II"]];
var TEAM=[
 {name:"Hamid Saadatmanesh, PhD, PE",title:"CEO",img:"t-hamid.webp",sum:"Inventor of the technology; 33 years of research in structural engineering, 10+ patents and 100+ publications. His previous company was acquired by Dow Chemical."},
 {name:"Abiraman Srinivasan, MPhil, PhD",title:"CTO",img:"t-abiraman.webp",sum:"More than 20 years in orthopaedic bioengineering, with DoD-funded work on biomaterials for long-bone and craniomaxillofacial repair."},
 {name:"Krishna Kolan, PhD",title:"VP, Research & Development",img:"t-krishna.webp",sum:"Lead engineer and principal investigator on both NSF awards; biomaterials, 3D printing and devices for bone repair, inventor on four patents."},
 {name:"Kevin Frederick, PhD",title:"Product Development Chemist",img:"t-kevin.webp",sum:"Materials scientist from the University of Arizona, whose PhD was on photocurable and reversible adhesives."}];
var NEWS=[
 ["Aug 2026","NSF awards MediCarbone a $1.25M SBIR Phase II grant to develop its minimally invasive fracture fixation device","NSF award 2600002",AWD],
 ["Jan 2025","Phase I outcomes: first prototype for large-animal studies, biocompatibility shown, insertion refined in a sheep cadaver","NSF award 2322411","https://www.nsf.gov/awardsearch/showAward?AWD_ID=2322411"],
 ["Sep 2023","MediCarbone receives a $273,563 NSF SBIR Phase I award for its intramedullary sleeve and light-triggered bone cement","MediCarbone","https://medicarbone.com/medicarbone-receives-nsf-sbir-phase-i-funding-cloned/"],
 ["Sep 2023","Patents: one licensed from the University of Arizona, two approved for publishing, more in the works","MediCarbone","https://medicarbone.com/medicarbone-secures-3-patents/"]];
var SHEETS=[];
