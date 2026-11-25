var FONTS=['400 1em "Inter Tight"','500 1em "Inter Tight"','600 1em "Inter Tight"','700 1em "Inter Tight"','400 1em "Krona One"','300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var WEB="https://www.limaxbiosciences.com/";
var MAIL="info@limaxbiosciences.com";
/* why LiMax: the six properties stated on their home page, as [big metric, unit, property, one line]. Metrics are their own
   figures (">1000-2000 J/m2", "stretching up to 20x", "under 30 seconds", "less than 30 seconds"); the two qualitative ones are
   set in words from the same page ("in spite of contact with body fluids"; "physical entanglement and electrostatic interactions") */
var PROPS=[
 ["2,000","J/m²","Tough adhesion","100 to 1,000 times greater than other sealants and adhesives on the market."],
 ["20","×","Stretchability","Adapts to the shape and movement of tissue, stretching up to twenty times."],
 ["In blood","","Wet adhesion","A durable bond in spite of contact with blood and other body fluids."],
 ["&lt;30","s","Rapid adhesion","Bonds to wet tissue in under thirty seconds, inside or outside the body."],
 ["&lt;30","s","Rapid hemostasis","Stops a haemorrhage in less than thirty seconds."],
 ["Physical","bonds","Biocompatible","Entanglement and electrostatic interactions instead of toxic chemical linkers."]];
/* programs: [name, indication, stage label, stage index on Research / Preclinical / Regulatory / Clinical, description, source,
   source label]. The two HemoMax programs from the NIH SBIR awards (RePORTER abstracts: preclinical work, a large-animal GLP
   trial toward a 510(k); an IDE toward a class III PMA); dural and tendon repair from their publications page */
var PROG=[
 ["HemoMax-PPH","Postpartum hemorrhage","NIH SBIR Phase II · toward a 510(k)",2,"A biodegradable hydrogel adhesive combined with a balloon tamponade and negative pressure system, forming a durable seal within minutes irrespective of blood exposure.","https://reporter.nih.gov/project-details/11315884","NIH RePORTER"],
 ["HemoMax","Vascular surgery sealant","NIH SBIR Phase I · toward an IDE",2,"A tough adhesive sealant for vascular surgery, where up to 68% of patients still have major bleeding events despite industry-leading products.","https://reporter.nih.gov/project-details/11068592","NIH RePORTER"],
 ["Dural repair","Sutureless dural sealing","Science Translational Medicine, 2024",1,"A bioadhesive hydrogel that seals the dura without sutures, outperforming commercial sealants in porcine and human ex vivo models.",WEB+"publications","Publications"],
 ["Tendon repair","Adhesive and gliding faces","Nature Biomedical Engineering, 2021",1,"A dual-function hydrogel, adhesive on one side and gliding on the other, that promoted tendon healing and reduced scar.",WEB+"publications","Publications"]];
var STAGES=["Research","Preclinical","Regulatory","Clinical"];
var FUND=["Bill & Melinda Gates Foundation","NIH (SBIR)","NSF (SBIR, I-Corps)","MTEC","Massachusetts Life Sciences Center","BluePrint"];
var AWARDS=["Harvard President’s Innovation Challenge, winner 2022","MassChallenge 2023","MedTech Innovator Value Competition 2022","ATI and TechConnect Medical Innovation Challenge 2022","J&J JLABS QuickFire Challenge"];
/* people: as published on limaxbiosciences.com/our-team; Freedman's title from his BIO International Convention speaker page */
var TEAM=[
 ["Benjamin Freedman, PhD","Founder and CEO","Co-inventor of the technology at the Wyss Institute at Harvard; PhD in Bioengineering, Penn.","team-freedman.webp"],
 ["David Mooney, PhD","Co-founder","The technology was developed in his lab at the Wyss Institute at Harvard.","team-mooney.webp"],
 ["Phoebe Kwon","Research Scientist","Contact PI on the 2025 NIH SBIR award for tough vascular sealants.","team-kwon.webp"],
 ["Hamza Ijaz","Research Scientist","","team-ijaz.webp"]];
var ADV=["Adam Hacking, PhD","Anh Hoang, PhD","Neal Muni, MD, MSPH","Zhigang Suo, PhD"];
var CLIN=["David Wu, DMD · maxillofacial surgery","Francis McGovern, MD · urologic surgery","Brian Hibler, MD · dermatology","Rishi Kundi, MD · vascular surgery"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","A $1,047,908 NIH SBIR Phase II award for HemoMax-PPH, a hemostatic adhesive hydrogel system for postpartum hemorrhage","NIH RePORTER","https://reporter.nih.gov/project-details/11315884"],
 ["April 2026","“Hemostatic Tough Adhesives seal tissue and control hemorrhage,” published in Nature Communications","PubMed","https://pubmed.ncbi.nlm.nih.gov/41951623/"],
 ["August 2025","A $464,229 NIH SBIR Phase I award for tough adhesive sealants for vascular surgery","NIH RePORTER","https://reporter.nih.gov/project-details/11068592"],
 ["2025","Finalist in the Harvard President’s Innovation Challenge (alumni), after winning the challenge in 2022","LiMax news",WEB+"news"]];
var SHEETS=[];
