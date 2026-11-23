var FONTS=['400 1em "Inter Tight"','500 1em "Inter Tight"','600 1em "Inter Tight"','700 1em "Inter Tight"','400 1em "Krona One"','300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var WEB="https://www.limaxbiosciences.com/";
var MAIL="info@limaxbiosciences.com";
/* why LiMax: the six properties stated on their home page. [property, figure, detail] */
var PROPS=[
 ["Tough adhesion",">1,000–2,000 J/m²","100 to 1,000 times greater than other sealants and adhesives on the market, and greater than collagen itself."],
 ["Stretchability","Up to 20×","Adapts to the shape and movement of tissue, stretching up to twenty times its length."],
 ["Wet adhesion","Despite body fluids","Holds a durable bond in spite of contact with blood and other body fluids, on wet, dynamically moving surfaces."],
 ["Rapid adhesion","Under 30 seconds","Forms its bond to tissue in under thirty seconds, inside or outside the body."],
 ["Rapid hemostasis","Under 30 seconds","Stops a haemorrhage in less than thirty seconds."],
 ["Biocompatibility","No toxic linkers","Promotes healing without triggering adverse reactions; it relies on physical entanglement and electrostatic interactions instead of toxic chemical linkers."]];
/* programs: from the NIH SBIR awards (RePORTER abstracts) */
var PROG=[
 ["HemoMax-PPH","Postpartum hemorrhage","A biodegradable hydrogel adhesive combined with a balloon tamponade and negative pressure system, forming a durable seal within minutes irrespective of blood exposure. NIH NHLBI SBIR Phase II, toward a 510(k) as a class II device.","https://reporter.nih.gov/project-details/11315884"],
 ["HemoMax","Vascular surgery sealant","Tough adhesive sealant for vascular surgery, where up to 68% of patients still have major bleeding events despite industry-leading products. NIH NHLBI SBIR Phase I, toward an IDE as a class III PMA device.","https://reporter.nih.gov/project-details/11068592"],
 ["Dural repair","Sutureless dural sealing","A bioadhesive hydrogel for sealing the dura without sutures, with mechanical performance superior to commercial sealants in porcine and human ex vivo models (Science Translational Medicine, 2024).",WEB+"publications"],
 ["Tendon repair","Adhesive and gliding faces","A dual-function hydrogel with an adhesive side and a gliding side that promoted tendon healing and reduced scar in a preclinical model (Nature Biomedical Engineering, 2021).",WEB+"publications"]];
var FUND=["Bill & Melinda Gates Foundation","NIH (SBIR)","NSF (SBIR, I-Corps)","MTEC","Massachusetts Life Sciences Center","BluePrint"];
var AWARDS=["Harvard President’s Innovation Challenge, winner 2022","MassChallenge 2023","MedTech Innovator Value Competition 2022","ATI and TechConnect Medical Innovation Challenge 2022","J&J JLABS QuickFire Challenge"];
/* people: as published on limaxbiosciences.com/our-team; Freedman's title from his BIO International Convention speaker page */
var TEAM=[
 ["Benjamin Freedman, PhD","Founder and CEO","Co-inventor of the technology as a postdoctoral fellow in David Mooney’s lab at the Wyss Institute at Harvard; PhD in Bioengineering, University of Pennsylvania."],
 ["David Mooney, PhD","Co-founder",""],
 ["Phoebe Kwon","Research Scientist",""],
 ["Hamza Ijaz","Research Scientist",""]];
var ADV=["Adam Hacking, PhD","Anh Hoang, PhD","Neal Muni, MD, MSPH","Zhigang Suo, PhD"];
var CLIN=["David Wu, DMD · maxillofacial surgery","Francis McGovern, MD · urologic surgery","Brian Hibler, MD · dermatology","Rishi Kundi, MD · vascular surgery"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","A $1,047,908 NIH SBIR Phase II award for HemoMax-PPH, a hemostatic adhesive hydrogel system for postpartum hemorrhage","NIH RePORTER","https://reporter.nih.gov/project-details/11315884"],
 ["April 2026","“Hemostatic Tough Adhesives seal tissue and control hemorrhage,” published in Nature Communications","PubMed","https://pubmed.ncbi.nlm.nih.gov/41951623/"],
 ["August 2025","A $464,229 NIH SBIR Phase I award for tough adhesive sealants for vascular surgery","NIH RePORTER","https://reporter.nih.gov/project-details/11068592"],
 ["2025","Finalist in the Harvard President’s Innovation Challenge (alumni), after winning the challenge in 2022","LiMax news",WEB+"news"]];
var SHEETS=[];
