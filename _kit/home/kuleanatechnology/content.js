var FONTS=['300 1em "Poppins"','italic 300 1em "Poppins"','400 1em "Poppins"','italic 400 1em "Poppins"','500 1em "Poppins"','600 1em "Poppins"'];
var LI="https://www.linkedin.com/company/kuleana-technology/";
var RP="https://reporter.nih.gov/project-details/";
/* programmes: every line from kuleanatechnology.com (home, news), the KidneyX prize page and NIH RePORTER
   (R41/R44 DK137677). [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["AKTIV HD","Portable hemodialysis","Ambulatory Kidney to Improve Vitality","In development","A suitcase-sized hemodialysis machine that runs untethered from a water source, so patients can dialyze whenever and wherever they want, and dialyze for longer.","https://www.kidneyx.org/prize-winners/aktiv-kidney/","KidneyX"],
 ["POUR","Photo-Oxidation Urea Removal","Dialysate regeneration","NIH SBIR Phase II","A light-activated TiO₂ catalyst breaks urea down to CO₂ and N₂ with 99% efficiency, so a small, closed loop of dialysate is refreshed continuously instead of being thrown away.",RP+"11415788","NIH RePORTER"],
 ["Catalyst","Plasma-made TiO₂ surfaces","Scalable manufacturing","NIH SBIR Phase II","An ionized-gas plasma process to make the catalyst reproducibly at scale, replacing a high-temperature, high-pressure autoclave, with doping studies for durability and activity.",RP+"11415788","NIH RePORTER"],
 ["Access","Needleless vascular access","Connecting without needles","In development","A vascular access technology that lets patients connect safely and effectively several times a day, without painful and disfiguring needle sticks.","https://kuleanatechnology.com/","Kuleana"]];
/* kuleanatechnology.com/team. Text-only masthead (CI/CL); the summaries are condensed from their bios. */
var TEAM=[
 {g:"Leadership",name:"Jonathan Himmelfarb, MD",title:"President & CEO",sum:"Co-founder of the UW Center for Dialysis Innovation and past President of the American Society of Nephrology; more than 400 peer-reviewed publications."},
 {g:"Leadership",name:"Barry N. Fulkerson",title:"COO",sum:"Medical device R&D executive in extracorporeal systems: Fresenius Medical Care North America, Xcorporeal, NxStage Medical and Gambro."},
 {g:"Leadership",name:"Buddy Ratner, PhD",title:"CTO",sum:"Professor of Bioengineering and Chemical Engineering at UW; member of the National Academy of Engineering and past President of AIMBE."},
 {g:"Leadership",name:"Jeremy Barribeau, MDes",title:"Director of Product Design",sum:"Industrial and interaction designer with patents and Red Dot and iF design awards; associated faculty at the University of Washington."},
 {g:"Leadership",name:"Anna Galperin, PhD, PMP",title:"Sr. Director of Program Management",sum:"Nearly twenty years in organic, medicinal and polymer chemistry, bioengineering and medical devices; certified in biomedical regulatory affairs."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","NIDDK renews Kuleana’s SBIR Phase II award for light-driven dialysate regeneration","NIH RePORTER",RP+"11415788"],
 ["September 2025","Kuleana receives an SBIR Phase II award from the NIDDK to scale up its urea-removal catalyst","NIH RePORTER",RP+"11256206"],
 ["September 2023","NIDDK STTR Phase I award, with the UW Center for Dialysis Innovation, for the POUR urea-removal system","NIH RePORTER",RP+"10761594"],
 ["June 2023","Seattle researchers developing a portable artificial kidney with Kuleana Technology","KING 5","https://www.king5.com/article/news/health/seattle-university-researcher-artificial-kidney-healthlink/281-30b3cc84-3588-4a2e-a882-92d6b5ba8f25"],
 ["April 2022","Kuleana Technology receives the National Kidney Foundation Innovation Fund’s first dialysis investment","PR Newswire","https://prnewswire.com/news-releases/kuleana-technology-receives-the-nkf-innovation-funds-first-dialysis-investment-301522539.html"]];
var SHEETS=[];
var FORM="https://kuleanatechnology.com/";
