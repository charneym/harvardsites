var FONTS=['300 1em "Sora"','400 1em "Sora"','600 1em "Sora"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','700 1em "Manrope"'];
var MAIL="info@kneevoice.com";
var LI="https://www.linkedin.com/company/kneevoice";
var RP="https://reporter.nih.gov/project-details/";
var JOEI="https://journaloei.scholasticahq.com/article/140763-comparison-of-audioarthrography-and-magnetic-resonance-imaging-for-diagnosis-of-patellofemoral-cartilage-damage";
var FDA="https://www.kneevoice.com/kneevoice-receives-fda-510-k-clearance-for-innovative-cartilage-auscultation-system/";
/* products and programmes: every line from kneevoice.com (/what-is-kneevoice, /why-kneevoice, the Feb 2026 FDA release) and
   NIH RePORTER 1R43AG099200-01. [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["Knee · patellofemoral joint","Cartilage Evaluation System","Point of care","FDA 510(k) cleared","Patented knee sensors and a compact console record the sound, vibration and position of the joint through 8–10 knee flexions, then produce a cartilage score report and a sound recording. Cleared in February 2026 and commercially available in the United States.",FDA,"FDA release"],
 ["Knee · patellofemoral and medial","Wearable Kneevoice","Remote monitoring","NIH SBIR Phase I","A portable, non-invasive wearable that extends cartilage auscultation to the medial compartment, where knee osteoarthritis is most common, for remote diagnosis and real-time monitoring. National Institute on Aging award 1R43AG099200, September 2026.",RP+"11308404","NIH RePORTER"],
 ["Musculoskeletal care","Longitudinal joint monitoring","Clinical applications","In development","Repeatable, objective readings to follow a joint over time: before and after an intervention, through physical therapy, and to track the effect of biologic treatments.",FDA,"FDA release"]];
/* the 2025 clinical study (Journal of Orthopaedic Experience & Innovation 6(2)), every number from the paper */
var EVID=[
 ["Concordance with arthroscopy","Audioarthrography matched the arthroscopic ICRS grade in 78 of 90 patients (87%); MRI matched in 48 (53%)"],
 ["Agreement","Weighted kappa of 0.91 for audioarthrography against 0.53 for MRI"],
 ["Sensitivity and specificity","90.3% and 89.3% for patellofemoral cartilage damage"],
 ["Likelihood ratios","LR+ 8.43 and LR− 0.10 for audioarthrography, against 2.80 and 0.38 for MRI"]];
/* kneevoice.com/our-team. Text-only masthead (CI/CL); the summaries are condensed from their bios. */
var TEAM=[
 {g:"Leadership",name:"Gustavo De Greiff",title:"Chief Executive Officer",sum:"Executive and entrepreneur with over 15 years in finance, business development, contract negotiation and product marketing; has started and sold two companies."},
 {g:"Leadership",name:"Charlie Leal, MD",title:"Chief Scientific Officer",sum:"Orthopedic surgeon and knee specialist, a Harvard Medical School graduate and an international key opinion leader in knee surgery and sports medicine."},
 {g:"Leadership",name:"James Rigby",title:"Chief Technology Officer",sum:"With Kneevoice since its inception; a CTO across several companies, in mobile platforms, serverless technology and high-load services."},
 {g:"Leadership",name:"Todd Davis",title:"Marketing, Sales & General Manager",sum:"Spent three decades leading the knee franchises of three of the world’s largest orthopedic companies."},
 {g:"Leadership",name:"Jerry Chickillo",title:"VP of Business Development",sum:"Over 25 years in medical devices with a focus on orthopedics, including management at Smith & Nephew Endoscopy."},
 {g:"Leadership",name:"Brad Durcholz",title:"Development Engineer & Project Manager",sum:"Over 34 years in the medical device industry as a development engineer, manager and project manager."},
 {g:"Leadership",name:"Marianne Grunwaldt",title:"Quality & Regulatory",sum:"20 years in medical devices with extensive FDA experience, and an instructor at the University of Miami."},
 {g:"Clinical advisors",name:"Robert Hunter, MD",title:"Orthopedic surgeon",sum:"Directs the HRRMC Orthopedic Center of Excellence and the Orthopedic Sports Medicine Center."},
 {g:"Clinical advisors",name:"Michael McBreen",title:"Advisor",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","Kneevoice receives an NIH SBIR Phase I award from the National Institute on Aging to develop Wearable Kneevoice","NIH RePORTER",RP+"11308404"],
 ["February 2026","Kneevoice receives FDA 510(k) clearance for its Cartilage Evaluation System","Kneevoice",FDA],
 ["September 2025","Comparison of audioarthrography and MRI for diagnosis of patellofemoral cartilage damage","J. Orthop. Experience & Innovation",JOEI]];
var SHEETS=[];
