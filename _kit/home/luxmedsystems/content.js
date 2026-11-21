var FONTS=['300 1em "Sora"','400 1em "Sora"','600 1em "Sora"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"'];
var WEB="https://luxmedsystems.com/";
var MAIL="info@luxmedsystems.com";
var TEL="+1-617-306-1061";
/* facts: luxmedsystems.com (About, Technology, Progress, Published Data, Team, Contact), NIH RePORTER R44HL120511
   (LuxMed Systems, Inc., Weston MA 02493; awards of 2023-03-14, 2024-02-14 and 2025-08-13); all fetched 2026-11-21 */
var CAPS=[
 ["Gap detection","Finds the gaps between lesions, even where the tissue is electrically stunned."],
 ["Lesion progression","Follows each lesion as it forms, during the ablation itself."],
 ["Catheter-tissue contact","Shows whether the tip is truly on the tissue before energy is delivered."],
 ["Contact stability","Confirms the contact holds steady through the beating of the heart."],
 ["Catheter movement","Registers when the catheter slips or moves off its target."],
 ["Tissue composition","Tells active, viable heart muscle from fibrotic scar tissue."]];
var PROG=[
 ["Clinical","Clinically validated","Optically enabled RF catheter used to successfully ablate 11 patients with cardiac arrhythmias, including atrial fibrillation."],
 ["Preclinical","Extensive PFA data","Core capabilities demonstrated in animal model studies across both radiofrequency and pulsed field ablation."],
 ["Intellectual property","Robust IP portfolio","61 issued patents, with more than 20 pending."],
 ["Commercial path","RF first, then PFA","Optically enabled RF diagnostic catheters first, built to fit existing mapping and ablation workflows, then pulsed field ablation."]];
var TEAM=[
 {g:"Founders",name:"Omar Amirana, MD",title:"Co-Founder, President & CEO, Board Director",sum:"25+ years in electrophysiology; co-founded Cardima and held senior roles at EP Technologies, St. Jude Medical and Oxford Bioscience Partners."},
 {g:"Founders",name:"Terry Ransbury",title:"Co-Founder, CTO, Board Director",sum:"35+ years in electrophysiology and cardiac rhythm management; 40+ patents and 600+ ablation procedures; led R&D at InnerPulse."},
 {g:"Founders",name:"Arun Jaganathan",title:"Co-Founder, VP Strategy & Marketing, Board Observer",sum:"20 years across venture investing, corporate strategy and device operations, at Allied Minds, Boston Scientific and Fletcher Spaght."},
 {g:"Independent directors",name:"R. John Fletcher",title:"Independent Board Director",sum:"Founder and CEO of Fletcher Spaght; chaired Spectranetics through its $2.2B acquisition by Philips; NACD Director of the Year."},
 {g:"Independent directors",name:"Rick Randall",title:"Independent Board Director",sum:"40+ years in medical devices, with CEO roles at OMNIlife Science, Innovasive Devices and Target Therapeutics."},
 {g:"Independent directors",name:"Reggie Groves",title:"Independent Board Director",sum:"Former CEO of REVA Medical; Head of AF Solutions in Medtronic’s Cardiac Rhythm and Heart Failure division."},
 {g:"Clinical and scientific contributors",name:"Jeremy Ruskin, MD",title:"Massachusetts General Hospital",sum:"Founder and Director Emeritus of the MGH Cardiac Arrhythmia Service; Professor of Medicine, Harvard Medical School."},
 {g:"Clinical and scientific contributors",name:"Jonathan P. Piccini, MD",title:"Duke University",sum:"Professor of Medicine and Director of Electrophysiology at the Duke Heart Center; 600+ publications."},
 {g:"Clinical and scientific contributors",name:"Timothy Maher, MD",title:"Beth Israel Deaconess Medical Center",sum:"Director of the EP Lab and Co-Director of the Ventricular Tachycardia Center; Instructor in Medicine, Harvard Medical School."},
 {g:"Clinical and scientific contributors",name:"Andrea Natale, MD",title:"Texas Cardiac Arrhythmia Institute",sum:"Executive Medical Director; a pioneer of catheter ablation techniques for complex atrial fibrillation used worldwide."},
 {g:"Clinical and scientific contributors",name:"Vivek Y. Reddy, MD",title:"Mount Sinai",sum:"Director of Cardiac Arrhythmia Services and Professor of Medicine; leads multinational trials of novel cardiac technologies."},
 {g:"Clinical and scientific contributors",name:"Narine Sarvazyan, PhD",title:"George Washington University",sum:"Professor with 30+ years in cardiac physiology research, across arrhythmias, ablation imaging and tissue engineering."}];
var NEWS=[
 ["Aug 2025","NIH’s heart institute continues LuxMed’s SBIR Phase II award, “New generation of catheters for treatment of atrial fibrillation”, with $998,310","NIH RePORTER","https://reporter.nih.gov/project-details/11035151"],
 ["Feb 2024","NHLBI renews the Phase II award for a second year, with $998,658 for the optically enabled ablation catheter","NIH RePORTER","https://reporter.nih.gov/project-details/10808934"],
 ["Mar 2023","LuxMed Systems wins a competing NIH SBIR Phase II award for a new generation of atrial fibrillation catheters, $998,976","NIH RePORTER","https://reporter.nih.gov/project-details/10581410"]];
var SHEETS=[];
