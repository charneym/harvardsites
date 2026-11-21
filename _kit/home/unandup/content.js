var FONTS=['300 1em "Red Hat Display"','400 1em "Red Hat Display"','500 1em "Red Hat Display"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="fmc@unandup.com";
var LI="https://www.linkedin.com/company/un-up/";
var RP="https://reporter.nih.gov/project-details/";
var PR="https://www.unandup.com/press/";
/* programmes: every line from unandup.com (/theralode, /corbot, /thrombot, /press) and NIH RePORTER abstracts.
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["Acute ischemic stroke","TheraLode™","Magneto-thrombolysis","NIH SBIR Phase II · NINDS","Alteplase-conjugated magnetic nanoparticles, driven by a portable magnet system, reach the clot more than 350× faster than diffusion and lyse it with a dose nearly 250× lower than approved, to extend thrombolysis to 10× more stroke patients.",RP+"10871913","NIH RePORTER"],
 ["Medium vessel occlusion","ThromBot™","Thrombectomy device","Presented at LSI, MedTech Innovator and SVIN 2026","A radial-access compatible thrombectomy device that rapidly clears medium vessel occlusions (MeVOs). Selected for the 2026 SVINnovation pitch competition.",PR+"unanduptopresentatsvin2026","UN&UP press"],
 ["Electrophysiology","CorBot™","Magnetic navigation platform","NIH SBIR Phase II · NHLBI","Improves catheter navigation, stability and applied force in EP procedures. Its magnets are nearly 50× smaller than those of approved EP magnetic navigation systems, so it works with existing digital angiography suites, without shielding or room construction.",RP+"10897294","NIH RePORTER"],
 ["Hepatocellular carcinoma","Magnetomotive embolization","Tumor embolization","NIH SBIR Phase I · NCI, 2026","Magnetic embolization beads, designed to be safe in an MR environment, that a physician steers into and throughout a liver tumor’s vasculature with UN&UP’s magnet system.",RP+"11318520","NIH RePORTER"],
 ["Coronary disease","Magnetic rotational platform","Coronary lesions","NIH SBIR Phase I · NHLBI","A magnetic rotational platform for coronary lesions, aimed at two hard problems in percutaneous coronary intervention: navigating tortuous vessels and expanding stents in severely calcified occlusions.",RP+"11322013","NIH RePORTER"]];
/* unandup.com/team. Text-only masthead; roles exactly as published. */
var TEAM=[
 {g:"Leadership",name:"Francis M. Creighton, PhD",title:"Co-Founder, CEO & President",sum:""},
 {g:"Leadership",name:"Peter S. Finley",title:"Co-Founder, COO",sum:""},
 {g:"Leadership",name:"Michael E. Sabo",title:"Chief Program Officer",sum:""},
 {g:"Leadership",name:"Nicholas O. Jensen, PhD",title:"Director of Science & Robotics",sum:""},
 {g:"Leadership",name:"Leah Morrell",title:"Director of Product Management",sum:""},
 {g:"Leadership",name:"David C. Greenspan, PhD",title:"Consultant & Lead Material Scientist",sum:""},
 {g:"Clinical investigators",name:"Stroke, neurology & neurosurgery",title:"8 investigators",sum:"Washington University in St. Louis, University of Iowa, UC San Diego, UCLA, University of Pennsylvania and the University of Melbourne"},
 {g:"Clinical investigators",name:"Electrophysiology & cardiology",title:"5 investigators",sum:"Washington University in St. Louis, UPMC and The Christ Hospital"},
 {g:"Clinical investigators",name:"Cancer",title:"5 investigators",sum:"Harvard University, UPMC, Saint Louis University, UC San Diego and the University of Pennsylvania"}];
/* news: unandup.com/press and NIH RePORTER, only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","UN&UP selected for the 2026 SVINnovation Pitch Competition in Las Vegas, to present ThromBot™","UN&UP",PR+"unanduptopresentatsvin2026"],
 ["September 2026","NCI SBIR award for improved magnetomotive embolization for hepatocellular carcinoma","NIH RePORTER",RP+"11318520"],
 ["April 2026","CEO Francis Creighton presents ThromBot™ at the MedTech Innovator Radar Forum","UN&UP",PR+"thrombotatmedtechradarforum2026"],
 ["March 2026","UN&UP unveils its ThromBot™ technology at LSI USA ’26","UN&UP",PR+"unup-unveils-its-thrombot-technology-at-lsi2026"],
 ["March 2026","UN&UP partners with STL CAPS to support future biomedical engineers","UN&UP",PR+"stlcapspartnership"],
 ["2025","NINDS Commercialization Readiness Pilot award for the Flow Acceleration for Stroke Thrombolysis (FAST) System","NIH RePORTER",RP+"11073962"]];
var SHEETS=[];
