var FONTS=['400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','500 1em "Source Serif 4"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
var WEB="https://biolightengineering.com/";
var MAIL="BiolightEng@gmail.com";
var MAP="https://www.google.com/maps/search/?api=1&query=506+Wedgewood+Ct+Hinsdale+IL+60521";
var RP1="https://reporter.nih.gov/project-details/11405867";      /* 1R44EY039153-01, NEI, notice 2026-07-07, $906,443 */
var RP0="https://reporter.nih.gov/project-details/10007701";      /* 2R44EY028786-02, NEI, notice 2020-09-01 */
var UIC="https://yaolab.bioe.uic.edu/news-stories/september-3-2020-new-phase-2-sbir-grant-from-the-national-eye-institute-of-nih";
var PAT="https://patents.google.com/patent/US11154193B2/en";      /* US 11,154,193, issued 2021-10-26, assignee Biolight Engineering LLC */
var PAPER="https://arxiv.org/abs/1910.07002";                     /* Toslak, Chau, Erol, Liu, Chan, Son, Yao, 2019 */
/* pipeline: the aims of the NEI Direct-to-Phase II SBIR award 1R44EY039153-01 (NIH RePORTER abstract). [stage, title, scope, detail, link, link label] */
var PROG=[
 ["Aim 1 · Build","Five MVP PedCam systems","Minimal viable product","Finalise and fabricate five PedCam systems with integrated pupil-matching control, adjustable illumination, autofocusing and HDR imaging.",RP1,"NIH RePORTER"],
 ["Aim 2 · Clinical validation","PedCam against today’s standard","UIC, the University of Chicago and Children’s Hospital Los Angeles","More than 360 sets of images from more than 180 patients, compared with RetCam and traditional indirect ophthalmoscopy.",RP1,"NIH RePORTER"],
 ["Aim 3 · Regulatory","Toward FDA 510(k)","The project’s success criterion","Safety testing and the regulatory documentation needed for an FDA 510(k) submission, which the project aims to file by its conclusion.",RP1,"NIH RePORTER"],
 ["In parallel · Screening","Images ready for remote reading","ROP severity and plus disease","PedCam images are evaluated for deep learning classification of ROP severity and plus disease, supporting future telemedicine deployment.",RP1,"NIH RePORTER"]];
/* people: Jia Ren from the company's FCOI policy (Point of Contact); Taeyun Son, Xincheng Yao and R. V. Paul Chan from the NIH award
   records (contact PI and PIs) and UIC's 2020 grant announcement. No portraits are published: masthead list (CL), not clickable. */
var TEAM=[
 {name:"Taeyun Son, PhD",title:"Contact principal investigator",sum:"Leads PedCam’s National Eye Institute SBIR awards; research assistant professor of biomedical engineering at the University of Illinois Chicago."},
 {name:"Jia Ren, CPA",title:"Chief Financial Officer",sum:"Biolight Engineering’s point of contact for its research compliance."}];
var INV=[
 {name:"Xincheng Yao, PhD",title:"Principal investigator",sum:"Hill Professor in UIC’s Department of Biomedical Engineering and co-inventor of the trans-pars-planar illumination patent."},
 {name:"R. V. Paul Chan, MD",title:"Principal investigator",sum:"Ophthalmologist at UIC Ophthalmology and Visual Sciences, a principal investigator on the PedCam awards."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2026","National Eye Institute awards $906,443 Direct-to-Phase II SBIR grant: “A Low-Cost, Ultra-Widefield, Nonmydriatic Retinal Imager for Pediatric Eye Care and ROP Screening”","NIH RePORTER",RP1],
 ["October 26, 2021","US Patent 11,154,193, “Fundus imaging apparatus with trans-pars-planar illumination,” issues to Biolight Engineering","Google Patents",PAT],
 ["September 2020","New SBIR Phase II grant from the National Eye Institute for a portable ultra-widefield fundus camera, led with UIC","UIC Bioengineering",UIC],
 ["October 2019","Trans-pars-planar illumination enables 200° ultra-wide field pediatric fundus photography","arXiv",PAPER]];
var SHEETS=[];
