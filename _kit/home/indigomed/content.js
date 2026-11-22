var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"','500 1em "Barlow Semi Condensed"','500 1em "Comfortaa"'];
var MAIL="info@indigomed.com";
var NB="https://indigomed.com/";
/* The CMM® system, from indigomed.com: Our Product, Technology, Chronic Diseases and the SHINE study news item (2025-03-20).
   [tag, title, detail, status] */
var SYS=[
 ["Sensor","Implanted under the skin","The CMM® sensor is a small spectrometer-on-a-chip. Once implanted it is invisible to the naked eye, with no external device worn on the body and no daily fingerprick.","In clinical investigation"],
 ["Metabolites","Glucose, ketones and lactate","Measured simultaneously and continuously. Ketones give early warning of ketosis and diabetic ketoacidosis; lactate indicates metabolic stress, exercise intensity and potential hypoxia.","SHINE study, 2025"],
 ["Connectivity","Shared with the people who care","The sensor connects securely and wirelessly to mobile devices via Bluetooth, sharing the user’s metabolite profiles with caregivers and family members.","Bluetooth"],
 ["Lifetime","Replaced once a year","A rechargeable battery powers the measurements. The sensor is expected to be replaced annually, with the potential to extend this to two years, and not to require calibration.","Expected"]];
/* indigomed.com, About / Management and Scientific Advisory Board. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Management",name:"Danaë Delbeke",title:"CTO, Managing Director and Founder",sum:"Inventor and founder of Indigo; has founded or co-founded seven high-tech photonics companies. PhD in Applied Sciences, Ghent University."},
 {g:"Management",name:"Peter J. Devlin",title:"Chief Executive Officer",sum:"Over 30 years in medical devices; formerly Chief Commercial Officer of Insulet and eleven years at Abbott, latterly in Diabetes Care."},
 {g:"Management",name:"Emmet Lydon",title:"Chief Operating Officer",sum:"Over 30 years of operations leadership in life sciences, at Stryker, Teleflex Medical, Alere and Boston Scientific."},
 {g:"Management",name:"Gijs Klarenbeek",title:"VP Clinical and Medical Affairs",sum:"MD, University of Leuven; medical and clinical affairs roles at Boston Scientific and Johnson & Johnson’s medical device division."},
 {g:"Scientific Advisory Board",name:"Dr. Tadej Battelino",title:"University of Ljubljana, Slovenia",sum:"Head of Department of Endocrinology, Diabetes & Metabolism, Faculty of Medicine."},
 {g:"Scientific Advisory Board",name:"Dr. Eric Renard",title:"University of Montpellier, France",sum:"Head of Department of Endocrinology, Diabetes & Metabolism, Medical School."},
 {g:"Scientific Advisory Board",name:"Dr. Thomas Danne",title:"Hannover Medical School, Germany",sum:"Director of Department of General Pediatrics Endocrinology/Diabetology & Clinical Research."},
 {g:"Scientific Advisory Board",name:"Dr. Christophe De Block",title:"University of Antwerp, Belgium",sum:"Head of Department of Endocrinology, Diabetology and Metabolic Disease."},
 {g:"Scientific Advisory Board",name:"Dr. Michael C. Riddell",title:"York University, Canada",sum:"School of Kinesiology & Health Science."},
 {g:"Scientific Advisory Board",name:"Dr. Ananda Basu",title:"University of Virginia, USA",sum:"Division of Endocrinology."},
 {g:"Scientific Advisory Board",name:"Dr. Anne Peters",title:"University of Southern California, USA",sum:"Keck School of Medicine."}];
/* news: items on indigomed.com/news, each linking to its post. [date, headline, source, url] */
var NEWS=[
 ["June 2025","Selected for the 2025 MedTech Innovator Accelerator cohort, one of 65 startups from nearly 1,500 applicants","Indigo","https://indigomed.com/indigo-selected-for-2025-medtech-innovator-accelerator-cohort/"],
 ["April 2025","Recognised as a Key Innovator by the European Commission’s Innovation Radar for the multi-metabolite sensor","Indigo","https://indigomed.com/indigo-recognized-as-key-innovator-by-the-european-commissions-innovation-radar/"],
 ["March 2025","SHINE study completed: six months of continuous multi-metabolite monitoring with the implantable sensor","Indigo","https://indigomed.com/shine-study-completed-validating-a-breakthrough-in-continuous-multi-metabolite-monitoring/"],
 ["October 2024","ISO 13485 certification reaffirmed by TÜV SÜD after the annual surveillance audit","Indigo","https://indigomed.com/indigo-reaffirms-iso-13485-certification-from-tuv-sud/"],
 ["May 2024","US Patent No. 11,992,310 granted for the personal health monitoring system","Indigo","https://indigomed.com/indigo-secures-patent-for-groundbreaking-personal-health-monitoring-system/"],
 ["January 2024","Danaë Delbeke named in the FINN Female Leaders ranking of the 100 most prominent women in Belgian media","Indigo","https://indigomed.com/danae-delbeke-recognized-in-finn-female-leaders-ranking-the-100-most-prominent-women-in-belgian-media/"]];
var SHEETS=[];
