/* CardioMech: facts from cardiomech.com (home text, Leadership Team, Board of Directors, Partners, contact block),
   CardioMech press releases (PR Newswire 2024-01-02 "$13M in heavily oversubscribed round", total $42M; 2026-06-24
   "Shareholders appoint Ramin Mousavi as Chairman of the Board", Fridley, Minn./Minneapolis; Business Wire 2018-11-05
   Nehm appointment), Atrium Health (first-in-human, Sanger Heart & Vascular Institute, Sept 2021) and ClinicalTrials.gov
   NCT04820764 (EFS of the CardioMech MVRS; start 2021-07-27; active, not recruiting; 35 estimated; 12 US sites; record
   updated 2026-09-25). Real characters only, never HTML entities (DU).
   Clinical rows: [area, status, title, sub, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["Early feasibility study","Active, not recruiting","EFS of the CardioMech MVRS","NCT04820764 · 12 US sites","A US early feasibility study of the transcatheter MVRS in patients with degenerative mitral regurgitation, started in July 2021, with an estimated enrolment of 35 patients.",0,"",CTG,"ClinicalTrials.gov"],
 ["First-in-human","September 2021","The first procedure","Atrium Health Sanger Heart & Vascular Institute","A patient with severe, symptomatic degenerative mitral regurgitation was treated: the leak was reduced from severe to mild, and the patient went home the next day.",0,"","https://atriumhealth.org/dailydose/2021/12/01/First-in-World-Procedure-Repairs-Leaky-Heart-Valve","Atrium Health"],
 ["Regulatory","Investigational","Not available for sale","Investigational use only","The CardioMech MVRS is an investigational device, limited by law to investigational use, and is not available for sale in any geography.",1,"Caution","",""]];
var SITES=["Mayo Clinic","Cleveland Clinic","Northwestern University","NYU Langone","Intermountain Medical Center","The Christ Hospital","Atrium Health Sanger Heart and Vascular Institute","Baylor Scott & White, The Heart Hospital","Ascension St. Thomas West","Ascension St. Francis via Christi","CentraCare Heart & Vascular Center","Los Robles Health System"];
var TEAM=[
 {g:"Leadership",name:"Rick Nehm",title:"President & CEO",sum:"27 years of structural heart leadership, with roles at Boston Scientific, Tendyne (Abbott) and ATS Medical (Medtronic)."},
 {g:"Leadership",name:"Jacob Bergsland, MD",title:"Founder & CMO",sum:"Cardiac surgeon; more than ten years at the Intervention Centre of Oslo University Hospital."},
 {g:"Leadership",name:"Nikolai Hiorth",title:"Founder & CTO",sum:"Award-winning mechanical engineer and co-inventor of DIGNUM, a CE-approved device for people with paralysis."},
 {g:"Leadership",name:"John Blix",title:"Chief Operating Officer",sum:"Over 20 years developing Class II and III implants, catheters and systems for interventional cardiology."},
 {g:"Leadership",name:"Daniele Salamone",title:"CFO",sum:"Corporate development and M&A strategist with structural heart experience, formerly at The Boston Consulting Group."},
 {g:"Leadership",name:"Hans Hiorth",title:"Senior Development Engineer",sum:"Built the first CardioMech devices in a garage, laying the foundation for today’s technology."},
 {g:"Board of directors",name:"Ramin Mousavi",title:"Chairman of the Board",sum:"Appointed in June 2026; former President and CEO of CathWorks, with senior roles at Baxter and Edwards Lifesciences."},
 {g:"Board of directors",name:"Ingrid Teigland Akay",title:"Director",sum:"Medical doctor; founder and managing partner of the European venture firm Hadean Ventures."},
 {g:"Board of directors",name:"Vic Bertrand",title:"Director",sum:"Entrepreneur and investor with over 30 years of experience; President of Strainn Inc."}];
var NEWS=[
 ["June 2026","CardioMech shareholders appoint Ramin Mousavi as Chairman of the Board","Press release","https://www.medtechdive.com/press-release/20260624-cardiomech-shareholders-appoint-ramin-mousavi-as-chairman-of-the-board-1/"],
 ["January 2024","CardioMech raises $13M in a heavily oversubscribed round for its transcatheter mitral chordal repair technology","PR Newswire","https://www.prnewswire.com/news-releases/cardiomech-raises-13m-in-heavily-oversubscribed-round-for-its-transcatheter-mitral-chordal-repair-technology-302024277.html"],
 ["December 2021","First-in-world procedure repairs a leaky heart valve","Atrium Health","https://atriumhealth.org/dailydose/2021/12/01/First-in-World-Procedure-Repairs-Leaky-Heart-Valve"],
 ["November 2018","CardioMech appoints Richard Nehm as President and CEO","Business Wire","https://www.businesswire.com/news/home/20181105005603/en/CardioMech-Appoints-Richard-Nehm-as-President-and-CEO-and-Mark-Novotny-as-Chairman"]];
var SHEETS=[];
