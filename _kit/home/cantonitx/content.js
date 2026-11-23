var FONTS=['500 1em "Barlow Semi Condensed"','600 1em "Barlow Semi Condensed"','400 1em "Inter"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var MAIL="mailto:info@cantonitx.nl";
var LI="https://www.linkedin.com/company/cantoni-therapeutics/";
/* Programme, from cantonitx.nl (About, Indications) and the media release of 16 Sep 2025. Stage words only as the company
   states them. [indication, area, title, stage, detail, dim, tag] */
var PIPE=[
 ["Obesity","Lead programme","Lead NNMT inhibitor","IND-enabling phase","Financing closed in September 2025 to advance Cantoni’s lead asset into IND-enabling studies for obesity and its comorbidities. In preclinical studies the NNMT inhibitors reduced fat mass without negatively impacting lean mass.",0,"Non-incretin"],
 ["Cardiometabolic comorbidities","Driven by obesity","Obesity’s complications","Target indications","Cardiovascular diseases, insulin resistance, high triglycerides and low HDL-cholesterol: the cardiometabolic complications that obesity drives, which Cantoni names as its target indications.",1,"Comorbidities"]];
/* cantonitx.nl, Indications: Global Obesity Prevalence (WHO and World Obesity Federation figures, as the site cites them) */
var EVID=[
 ["About 1 billion","People living with obesity worldwide, and a further 2.5 billion classified as overweight"],
 ["More than doubled","Global adult obesity prevalence since 1990; among children and adolescents it has quadrupled"],
 ["Over 4 billion","People projected to be overweight or obese by 2035 if current trends persist"],
 ["4.3 trillion USD","Estimated economic burden of obesity, every year"]];
/* cantonitx.nl, Team. Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Management team",name:"Annegret van der Aa, PhD",title:"CEO and Executive Director",sum:"Joined in July 2024 with over 20 years in drug discovery and development: CSO/CDO at Ermium Therapeutics, COO at OCTIMET Oncology, and at Galapagos from 2010 to 2018, where she was instrumental in the clinical development of filgotinib."},
 {g:"Management team",name:"Matthijs van Haren, PhD",title:"Chief Scientific Officer and Founder",sum:"Co-founded Cantoni in 2022. PhD in medicinal chemistry at Utrecht University on methyltransferase inhibitors; co-inventor on the patent underlying Cantoni’s assets."},
 {g:"Board of directors",name:"Rob Mayfield",title:"Non-Executive Director",sum:"Managing Director of Libertatis Ergo Holding, the Leiden University holding company that invests in spin-outs of Leiden University and the LUMC."},
 {g:"Board of directors",name:"Helmuth van Es, PhD",title:"Non-Executive Director",sum:"More than 30 years as scientist, inventor and entrepreneur; co-founder of Galapagos, Audion Therapeutics, Antabio and Citryll."},
 {g:"Scientific advisory board",name:"Nathaniel Martin, PhD",title:"Founder and Chair SAB",sum:"Chair of Biological Chemistry at Leiden University, whose group pioneered the first potent and selective small-molecule NNMT inhibitors."},
 {g:"Scientific advisory board",name:"Barbara Kahn, MD, MS",title:"Harvard Medical School",sum:"Endocrinologist and George Richards Minot Professor of Medicine; member of the National Academy of Sciences."},
 {g:"Scientific advisory board",name:"Roman Vangoitsenhoven, MD, PhD",title:"KU Leuven and UZ Leuven",sum:"Clinical endocrinologist with a special interest in obesity and type 2 diabetes."},
 {g:"Scientific advisory board",name:"Aimo Kannt, PhD",title:"Goethe University Frankfurt",sum:"Professor of Translational Drug Research; more than 20 years as a cardiometabolic drug hunter at Sanofi, with major programmes on NNMT inhibitors."},
 {g:"Scientific advisory board",name:"Bruno Guigas, PhD",title:"Leiden University Medical Center",sum:"Associate Professor of Immunometabolism, working on obesity, type 2 diabetes and MASLD/MASH."}];
/* cantonitx.nl, News & events: each row links to the company's own post */
var NEWS=[
 ["May 2026","Preclinical data on NNMT inhibition in obesity at the European Congress on Obesity, Istanbul","https://cantonitx.nl/cantoni-on-the-road-in-may/"],
 ["Nov 2025","On the road in November: BIO-Europe, Drug Discovery Strategic Summit and LSX Life Sciences Week","https://cantonitx.nl/cantoni-therapeutics-on-the-road-in-november/"],
 ["Oct 2025","Presenting at the Obesity Drug Development Summit Europe 2025 in Barcelona","https://cantonitx.nl/cantoni-at-obesity-drug-development-summit-europe-2025-in-barcelona/"],
 ["Sep 2025","Cantoni secures financing to take its non-incretin obesity drug into IND-enabling studies","https://cantonitx.nl/cantoni-therapeutics-secures-financing/"],
 ["May 2025","Formation of the Scientific Advisory Board","https://cantonitx.nl/announcement-formation-scientific-advisory-board/"]];
var SHEETS=[];
