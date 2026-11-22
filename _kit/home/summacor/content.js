var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','300 1em "Fira Sans"','400 1em "Fira Sans"','500 1em "Fira Sans"'];
var CONTACT="https://summacorforlife.com/contact";
var NB="https://summacorforlife.com/";
/* potential clinical indications (summacorforlife.com/solution: "LCAPP - Potential Clinical Indications").
   [area, indication, why the LCAPP fits (from their own solution page), status] */
var PIPE=[
 ["Interventional cardiology","High-risk percutaneous coronary intervention","Support during high-risk PCI: a positive-displacement pulsatile pump that reduces afterload and increases cardiac output, deployed or reconstrained in under two minutes.","In development"],
 ["Acute heart failure","Cardiogenic shock","Up to 3.5–7.0 litres per minute of ECG-gated pulsatile output, to reduce afterload and increase organ perfusion while the heart is given time to recover.","In development"],
 ["Heart failure","Heart failure with cardio-renal syndrome","Placed in the descending aorta, its power stroke drives flow toward the renal arteries; in vivo it increased organ perfusion and cardiac output.","In development"],
 ["Structural heart","Patients with a prosthetic aortic valve","The LCAPP does not cross the aortic valve, so it remains an option for patients with a prosthetic aortic valve replacement.","In development"]];
/* SummaCor Intellectual Property (summacorforlife.com/solution). [patent no., title, country, status] */
var IP=[
 ["US 11,839,708","Linear Cardiac Assist Pulsatile Pump","United States","Issued · 96 claims"],
 ["US 12,017,055","Linear Cardiac Assist Pulsatile Pump","United States","Issued · 30 claims"],
 ["US 12,485,267","Linear Cardiac Assist Pulsatile Pump","United States","Issued · 20 claims"],
 ["US 11,617,875","Positive Displacement Shuttle Pump Heart and VAD","United States","Issued · 28 claims"],
 ["JP 7549384","Linear Cardiac Assist Pulsatile Pump","Japan","Issued · 30 claims"]];
/* summacorforlife.com/team. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Manish Wadhwa, MD, FHRS, FACC",title:"Chief Executive Officer",sum:"Board-certified cardiologist and electrophysiologist; co-founder and CMO of Geneva Health Solutions (acquired by BioTelemetry); CMO, Philips Ambulatory Monitoring & Diagnostics."},
 {g:"Leadership",name:"Jeremy Martinson, MBA",title:"Chief Operating Officer and CFO",sum:"20+ years as CFO/COO of start-ups and small businesses, including Geneva Health Solutions ($65M exit, 2019)."},
 {g:"Leadership",name:"Mark Glindmeyer",title:"Chief Technology Officer",sum:"Mechanical engineer (Stevens Institute of Technology) leading the mechanical design of the LCAPP and SummaCor’s other technologies."},
 {g:"Leadership",name:"David Cline",title:"Founder and Technical Expert",sum:"Inventor and entrepreneur, former U.S. Army officer, holder of more than 30 patents across several industries."},
 {g:"Key medical advisors",name:"Manesh Patel, MD",title:"Chief of Cardiology, Duke University",sum:""},
 {g:"Key medical advisors",name:"Barry Greenberg, MD",title:"Director, Advanced Heart Failure Treatment Program, UCSD",sum:""},
 {g:"Key medical advisors",name:"Marat Fudim, MD",title:"Associate Professor of Medicine, Duke University",sum:""},
 {g:"Key medical advisors",name:"Jeffrey Teuteberg, MD",title:"Chief of Heart Failure, Stanford University",sum:""},
 {g:"Key medical advisors",name:"Morton Kern, MD",title:"Professor, UC Irvine; Chief of Medicine, Long Beach VA",sum:""}];
/* news: only items with a working link (summacorforlife.com/news). [date, headline, source, url] */
var NEWS=[
 ["June 2025","SummaCor selected for the MedTech Innovator 2025 accelerator cohort","MedTech Innovator","https://medtechinnovator.org/medtech-innovator-unveils-65-breakthrough-medtech-startups-in-its-2025-cohort/"],
 ["January 2025","JACC: Basic to Translational Science coverage after the THT 2025 Shark Tank, Boston","JACC: BTS","https://www.jacc.org/doi/10.1016/j.jacbts.2025.01.012"],
 ["October 2024","LCAPP presented at TCT 2024: a novel transaortic pulsatile pump to unload the left ventricle","TCTMD","https://www.tctmd.com/slide/linear-cardiac-assist-pulsatile-pump-lcapp-noveltransaortic-pulsatile-pump-unload-left"],
 ["September 2024","LCAPP poster prepared for HFSA 2024, Atlanta","SummaCor","https://media.summacorforlife.com/hfsaposter.png"]];
var SHEETS=[];
