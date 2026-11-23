var FONTS=['300 1em "Poppins"','400 1em "Poppins"','500 1em "Poppins"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="info@corneat.com";
/* Products, from corneat.com (Home, CorNeat KPro, EverMatrix Platform, About, Events) and the company's PR Newswire release of
   2 September 2025. Stage words only where the company states them. [product, area, title, stage, detail] */
var PIPE=[
 ["CorNeat KPro","Corneal blindness","Artificial cornea that integrates with the eye wall","RESEE clinical trial; 50% enrolled (September 2025)","A synthetic cornea with a wide-aperture lens and an EverMatrix skirt, implanted without donor tissue. The RESEE trial, designed to support FDA 510(k) clearance and CE marking, runs in Canada, France, India, Israel and the Netherlands, with US centres planned for 2026. Supported by the European Innovation Council and a U.S. Army Project Award."],
 ["CorNeat EverPatch","Ocular surface surgery","Synthetic scleral patch","In clinical investigation","An EverMatrix patch for reinforcing and repairing the eye wall, with principal investigators at Kwale Eye Hospital and Kenyatta National Hospital in Kenya and in Tbilisi, Georgia."],
 ["eShunt","Glaucoma","Glaucoma drainage device","In development","A glaucoma drainage device that uses the EverMatrix to integrate with surrounding tissue, extending the platform from the cornea to glaucoma surgery."]];
/* Clinical record (PR Newswire, 2 September 2025; corneat.com CorNeat KPro page; Israel Hayom, 12 January 2021). */
var EVID=[
 ["20/20 vision","A patient blinded by corneal scarring from shingles, never a candidate for a transplant, regained 6/6 vision, stable eleven months after surgery"],
 ["After four failed grafts","In January 2021 the first patient, a 79-year-old man blind for over a decade after four unsuccessful transplants, regained his sight"],
 ["Half enrolled","The RESEE trial reached 50 percent enrolment in September 2025, at centres in five countries"],
 ["No biologics","No donor tissue, safe to import and export, and unable to carry an infectious agent, so the implant is independent of eye banks"]];
/* corneat.com (About Us; team bios). Text-only masthead; summaries only state what the site states. */
var TEAM=[
 {g:"Leadership",name:"Eli Aharoni",title:"CEO & VP R&D",sum:"Biomedical engineer and co-founder of VisionCare Ophthalmic Technologies (now Samsara Vision), with more than 28 years in ophthalmic device R&D and over 30 granted and pending patents."},
 {g:"Leadership",name:"Gilad Litvin, MD",title:"Co-Founder, Chairman & Chief Medical Officer",sum:"Ophthalmologist and surgical retina specialist who co-founded CorNeat Vision in 2015; inventor on nine patent applications, five of them granted, and still operating in a public clinic."},
 {g:"Leadership",name:"Tzvika Fisher",title:"Chief Operating Officer",sum:""},
 {g:"Leadership",name:"Ido Klein",title:"Director of Clinical & Regulatory Affairs",sum:""},
 {g:"Leadership",name:"Patricia Assouline",title:"Director of Project Management",sum:""}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2025","CorNeat Vision’s artificial cornea restores perfect 20/20 vision in a shingles-blinded eye","PR Newswire","https://www.prnewswire.com/il/news-releases/corneat-visions-artificial-cornea-restores-perfect-2020-vision-in-shingles-blinded-eye-302543974.html"],
 ["2025","CorNeat KPro: the European Innovation Council project record","CORDIS, European Commission","https://cordis.europa.eu/project/id/190138640"],
 ["March 2021","CorNeat Vision training surgeons remotely via 3D video","Israel Hayom","https://www.israelhayom.com/2021/03/09/corneat-vision-training-surgeons-remotely-via-3d-video/"],
 ["January 2021","Blind man sees again thanks to Israeli start-up’s artificial cornea","Israel Hayom","https://www.israelhayom.com/2021/01/12/blind-man-sees-again-thanks-to-israeli-startups-artificial-cornea/"],
 ["October 2017","CorNeat Vision unveils a revolutionary artificial cornea","Business Wire","https://www.businesswire.com/news/home/20171006005302/en/CorNeat-Vision-Unveils-Revolutionary-Artificial-Cornea"]];
var SHEETS=[];
