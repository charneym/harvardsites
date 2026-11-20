var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"','500 1em "Montserrat"','600 1em "Montserrat"'];
var WEB="https://magellanbiomedical.com/";
var MAIL="info@magellanbiomedical.com";
var TEL="647 241 0540",TELH="tel:+16472410540";
var IRAP="https://search.open.canada.ca/grants/record/nrc-cnrc%2C172-2025-2026-Q2-1034384%2Ccurrent";
var TMU="https://www.torontomu.ca/research/news-events/2024/10/tmu-professor-steers-a-novel-cardiovascular-device-to-market";
var TBME="https://doi.org/10.1109/TBME.2023.3276199";
var CDL="https://creativedestructionlab.com/companies/magellan-biomedical/";
/* applications, from Creative Destruction Lab's company page and TMU (first clinical use: peripheral arterial angioplasty). [tag, title, line, detail] */
var PROG=[
 ["First indication","Peripheral angioplasty","Peripheral artery disease and critical limb ischemia","The first planned clinical use: crossing blocked arteries in the leg, to help save the limbs of patients with critical limb ischemia."],
 ["Coronary","Cardiac angioplasty","Coronary interventions","The same tip control and 3D tracking apply to catheter procedures in the arteries of the heart."],
 ["Aorta","Endovascular aneurysm repair","EVAR","Positioning a flexible device precisely relative to the anatomy during aneurysm repair."],
 ["Imaging","Endovascular and intracardiac imaging","Steering an imaging catheter","Holding and aiming the tip of a catheter that carries an imaging probe, inside a vessel or a chamber of the heart."],
 ["Rhythm","Cardiac ablation","Correcting heart rhythm problems","Ablation depends on placing the catheter tip precisely on the target tissue."]];
/* preclinical results: Zhou et al., IEEE Transactions on Biomedical Engineering 70(11):3116-3125, 2023 */
var EVID=[
 ["Phantom","100%","of targets reached in a tortuous vessel model, against 69% for a steerable catheter and 31% for a non-steerable one, with a larger reachable workspace."],
 ["Force","Up to 4×","the guidewire force delivery and pushability of conventional catheters."],
 ["Ex vivo","83% · 100%","crossing of chronic total occlusion samples, fresh and fixed lesions, higher than conventional catheters."],
 ["In vivo","Safe","full function in a porcine aorta, with no signs of coagulation or vessel wall damage."]];
/* people: magellanbiomedical.com/team. [name, role, one-line summary] */
var LEAD=[
 ["Ali Tavallaei, PhD, PEng","President, Co-founder and Director","Canada Research Chair in Systems and Devices for Cardiovascular Interventions."],
 ["Andrew Dueck, MD","Officer, Co-founder and Director","Head of Vascular Surgery at Sunnybrook; Professor of Surgery, University of Toronto."],
 ["James Zhou, MSc","Co-founder, Engineering Lead","Former R&D engineer in Medtronic’s aortic division; 7+ years of cardiovascular R&D."]];
var ADV=[
 ["Graham Wright, PhD","Co-founder, Director and Scientific Advisor","Canada Research Chair in Imaging for Cardiovascular Therapeutics; Sunnybrook."],
 ["Trisha Roy, MD, PhD","Co-founder, Director and Clinical Advisor","Vascular surgeon and scientist at Houston Methodist, focused on peripheral artery disease."],
 ["Daniel Hawkins","Business Advisor","Co-founder and CEO of Shockwave Medical and Calibra Medical; 140+ patents."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 1, 2025","NRC IRAP contribution of $74,984 for design revisions for the manufacturing of CathPilot","Government of Canada",IRAP],
 ["October 1, 2024","TMU professor steers a novel cardiovascular device to market, with a CIHR Project Grant and Magellan Biomedical as industry partner","Toronto Metropolitan University",TMU],
 ["November 2023","The CathPilot: performance validation and preclinical safety and feasibility assessment","IEEE Trans. Biomed. Eng.",TBME]];
var SHEETS=[];
