var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="info@q3medical.com";
var TW="https://www.q3medical.com";
/* products: every line from q3medical.com (/biodegradable.html, /peripheral.html, /group.html) and the FDA 510(k) records.
   [family, product, description, status, detail] */
var PIPE=[
 ["Biodegradable","ARCHIMEDES","Biodegradable biliary and pancreatic stent","FDA 510(k) cleared · CE marked","A biodegradable polymer stent placed endoscopically to drain the bile or pancreatic duct. It degrades in place, so there is no removal procedure. Cleared by the FDA for the pancreatic duct in July 2025 and, as ARCHIMEDES (Medium), for biliary and pancreatic drainage in July 2026."],
 ["Biodegradable","UNITY-B","Endoscopic system","In development","An endoscopic, balloon expandable biodegradable biliary stent system, built on a hybrid platform of magnesium and polymer."],
 ["Biodegradable","UNITY-B","Percutaneous system","In development","A percutaneous, balloon expandable biodegradable biliary stent system on the same magnesium and polymer platform."],
 ["Peripheral","MICRO","Micro invasive technologies","The 4F / 5F perfection","Catheter-based technologies for peripheral vascular interventions at 4F and 5F."],
 ["Peripheral","MINI","Mini invasive technologies","Up to 6F","Peripheral technologies for interventions up to 6F."]];
/* the ARCHIMEDES regulatory record (FDA 510(k) K243412, K260835; CE mark announced by amg International, June 2018) */
var EVID=[
 ["July 2026","FDA 510(k) clearance, K260835: ARCHIMEDES Biodegradable Stent (Medium), to drain biliary and pancreatic ducts"],
 ["July 2025","FDA 510(k) clearance, K243412: ARCHIMEDES Biodegradable Pancreatic Stent"],
 ["Evidence","Five clinical studies, single-centre and multicentre, supported the 2026 clearance"],
 ["Europe","CE mark for ARCHIMEDES, the group’s first bioresorbable replacement for plastic biliary stents"]];
/* leadership, from q3medical.com /group.html. Text-only masthead. */
var TEAM=[
 {g:"Leadership",name:"Eric K. Mangiardi",title:"President & CEO",sum:"Founder and CEO of Alveolus, acquired by Merit Medical, where it forms the foundation of the Merit Endotek division; 25 years of experience and a number of patents for novel medical devices."},
 {g:"Leadership",name:"Manfred Gülcher",title:"Chief Risk Officer",sum:"Founder and co-managing director of Q3 Medical Germany, where he led regulatory, quality and drug-device combination technologies; formerly head of medical device approval at DEKRA."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2026","FDA clears ARCHIMEDES (Medium) to drain biliary and pancreatic ducts","U.S. FDA","https://www.accessdata.fda.gov/cdrh_docs/pdf26/K260835.pdf"],
 ["July 2025","FDA clears the ARCHIMEDES Biodegradable Pancreatic Stent","U.S. FDA","https://www.accessdata.fda.gov/cdrh_docs/pdf24/K243412.pdf"],
 ["2019","Medtronic and Q3 Medical Devices sign a distribution deal for the ARCHIMEDES stent","MassDevice","https://www.massdevice.com/medtronic-q3-medical-devices-ink-archimedes-stent-distro-deal/"],
 ["June 2018","amg International receives the European CE mark for the ARCHIMEDES biodegradable biliary and pancreatic stent","BioSpace","https://www.biospace.com/amg-international-gmbh-receives-european-ce-mark-approval-for-archimedes-biodegradable-biliary-and-pancreatic-stent"]];
var SHEETS=[];
