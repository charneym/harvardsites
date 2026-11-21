var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','800 1em "Archivo"'];
var MAIL="SKandlikar@biredimaging.com";
var NSF="https://www.nsf.gov/awardsearch/showAward?AWD_ID=";
var RITN="https://www.rit.edu/incubator/news/venture-creations-startup-company-redefining-breast-cancer-detection";
/* clinical evidence and the road ahead: every line from NSF award 2451205 (abstract and project outcomes report, 2026),
   NSF award 2136325, biredimaging.com/validation and the RIT news release of 19 Nov 2025. [year, title, sub, status, detail, link, label] */
var PIPE=[
 ["2020","First clinical study","Rochester General Hospital","24 patients","An IRB-approved study with 24 biopsy-proven patients validated the core concept: the technology detected the presence and absence of breast cancer regardless of breast tissue density.",NSF+"2451205","NSF report"],
 ["2025","Clinical validation","Rochester General Hospital","15 patients","A new IRB-approved study imaged 15 patients before their biopsy. The results showed no cancers missed and no false positives, regardless of breast tissue density.",NSF+"2451205","NSF report"],
 ["2025","Screening studies","Rochester Regional Health","Under way","BiRed is now running clinical studies to screen patients for breast cancer, in collaboration with Rochester Regional Health.",RITN,"RIT news"],
 ["Next","Next-generation imager","With a contract manufacturer","In development","A new imaging device, shaped by patient and technician feedback from the clinical study, designed to image a patient in under 15 minutes and to meet patients’ comfort needs.",NSF+"2451205","NSF report"]];
/* what the 2025 SBIR Phase I project changed (NSF award 2451205 outcomes report) */
var EVID=[
 ["Compute time","From over 90 hours to 10 minutes per breast, with physics-based AI: results within minutes of imaging"],
 ["Acclimation","New software tells the technician when each breast has acclimated, in 5 to 6 minutes instead of about 10"],
 ["Imaging time","About 32 minutes per patient before; the next-generation device is designed for under 15"],
 ["Software","The research algorithms are now packaged into a software module, the start of product development"]];
/* the team: RIT news, 19 Nov 2025, and the NSF award records. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Satish G. Kandlikar",title:"Co-founder",sum:"Gleason Professor of Mechanical Engineering at RIT. Co-founded BiRed Imaging in 2020."},
 {g:"Leadership",name:"Carlos B. Gutierrez",title:"Chief Technical Officer",sum:"RIT PhD in engineering, 2024. Principal investigator on BiRed’s 2025 NSF SBIR Phase I award."},
 {g:"Engineering",name:"Atharva Sundge",title:"AI Engineer",sum:"RIT MS in artificial intelligence, 2025."},
 {g:"Engineering",name:"Abhinav Kalsi",title:"Software Engineer",sum:"RIT MS in artificial intelligence, 2025."},
 {g:"Research",name:"Isaac Perez-Raya",title:"Principal investigator, 2022",sum:"Led BiRed’s first NSF SBIR Phase I project, an innovative breast cancer detection algorithm using infrared images."}];
/* research and news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2025","Venture Creations startup company redefining breast cancer detection: two new full-time hires and clinical studies with Rochester Regional Health","RIT",RITN],
 ["February 2025","NSF SBIR Phase I: efficient thermal-spatial point-cloud extraction and rapid assessment of physics-based AI from infrared images","NSF",NSF+"2451205"],
 ["2023","Thermal modeling of patient-specific breast cancer with physics-based artificial intelligence","Journal of Heat Transfer","https://doi.org/10.1115/1.4055347"],
 ["January 2022","NSF SBIR Phase I: innovative breast cancer detection algorithm using infrared images","NSF",NSF+"2136325"],
 ["March 2020","An inverse heat transfer approach for patient-specific breast cancer detection and tumor localization using surface thermal images in the prone position","Infrared Physics & Technology","https://doi.org/10.1016/j.infrared.2020.103202"],
 ["February 2020","Clinical infrared imaging in the prone position for breast cancer screening: initial screening and digital model validation","ASME J. Medical Diagnostics","https://doi.org/10.1115/1.4045319"],
 ["March 2019","Technology, application and potential of dynamic breast thermography for the detection of breast cancer","Int. J. Heat and Mass Transfer","https://doi.org/10.1016/j.ijheatmasstransfer.2018.11.089"]];
var SHEETS=[];
