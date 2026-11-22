var FONTS=['300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','700 1em "Montserrat"'];
var MAIL="info@eascrabiotech.com";
var UP="https://eascrabiotech.com/wp-content/uploads/";
/* product areas, from eascrabiotech.com (home: "Our Product Areas Include") and the 2026-08-27 releases.
   [name, kind, headline, applications, detail] */
var PROD=[
 ["JBNp™","Delivery platform","A delivery platform for mRNA therapeutics and gene editing","siRNA · mRNA · Cas9 · proteins · peptides","Passes through “difficult-to-infiltrate” tissue barriers such as articular cartilage, kidneys and ECM-rich solid tumors, and is room-temperature stable, with no cold chain."],
 ["JBNm™","Injectable scaffold","A cell-free injectable scaffold for cartilage repair","Orthopedics · cartilage regeneration","A cell-free, injectable matrix for orthopedic applications involving cartilage repair and regeneration."],
 ["JBNm-Tissue Chip™","Research tool","Knee joints, simulated on a microchip","Biomedical research · drug testing","Simulates the knee joint on a microchip, for accelerated biomedical research and drug testing."]];
/* eascrabiotech.com (About Us) and the 2026-08-27 CSO release. Text-only masthead (CI/CL). Summaries only restate those sources. */
var TEAM=[
 {g:"Leadership",name:"Mari Anne Snow",title:"Co-Founder and Chief Executive Officer",sum:"Panelist on funding for microgravity R&D at TechConnect’s 2026 Biotech in Space Symposium."},
 {g:"Leadership",name:"Andrew Goodearl, Ph.D.",title:"Chief Scientific Officer",sum:"Three decades in biopharma; formerly at AbbVie, Abbott and Millennium Pharmaceuticals."},
 {g:"Leadership",name:"Yupeng Chen, Ph.D.",title:"Co-Founder and Science Advisor",sum:"Inventor of the JBNp platform; associate professor of Biomedical Engineering, UConn."},
 {g:"Leadership",name:"Gary du Moulin, Ph.D.",title:"Executive Director, Product Development, Quality and Regulatory Affairs",sum:""},
 {g:"Leadership",name:"Cristina Torres Cabán, Ph.D.",title:"Executive Operations Manager",sum:""},
 {g:"Research",name:"Ian Sands, Ph.D.",title:"Life Science Research Scientist",sum:"First place, TechConnect Bio in Space Innovation Challenge, March 2026."},
 {g:"Research",name:"Anne Yau, Ph.D.",title:"Life Science Research Scientist",sum:""},
 {g:"Research",name:"Sarah Potts",title:"Life Science Research Scientist II",sum:""},
 {g:"Research",name:"Jillian Johnson",title:"Research Associate, Laboratory Operations",sum:""},
 {g:"Board of directors",name:"Mari Anne Snow",title:"Co-Founder and CEO",sum:""},
 {g:"Board of directors",name:"Yupeng Chen, Ph.D.",title:"Co-Founder and Science Advisor",sum:""},
 {g:"Board of directors",name:"Adam Milne",title:"Director",sum:""},
 {g:"Advisory board",name:"Arthur Mercurio",title:"Advisor",sum:""},
 {g:"Advisory board",name:"Kevin O’Connell",title:"Advisor",sum:""},
 {g:"Advisory board",name:"Oliver Betz",title:"Advisor",sum:""},
 {g:"Advisory board",name:"Holger Kunst",title:"Advisor",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","Eascra Biotech awarded a $7.96 million NASA InSPA Phase 2 contract to advance space-manufactured nanomedicine","Press release",UP+"2026/08/Eascra-InSPA-Award-VF.pdf"],
 ["August 2026","Eascra Biotech appoints Dr. Andrew Goodearl as Chief Scientific Officer to lead its commercialization push","Press release",UP+"2026/08/Dr.-Goodearl-Press-Release-vf.pdf"],
 ["March 2026","Eascra Biotech takes first place at the TechConnect Bio in Space Innovation Challenge","BioSpace","https://www.biospace.com/press-releases/eascra-biotech-takes-first-place-at-techconnect-bio-in-space-innovation-challenge"],
 ["December 2025","Mass. biotech industry pushes for reinstatement of federal SBIR funding","Boston Business Journal","https://www.bizjournals.com/boston/news/2025/12/22/sbir-sttr-funding-mass-biotechs.html"],
 ["October 2025","Named to Fast Company’s Next Big Things in Tech 2025, in space and telecom","Fast Company","https://www.fastcompany.com/91410998/space-telecom-next-big-things-in-tech-2025"],
 ["September 2025","In-space manufacturing on the ISS National Lab podcast, “Between a Rocket & Hard Space”","ISS National Lab","https://issnationallab.org/space-news/in-space-manufacturing-on-the-latest-iss-national-lab-podcast-episode/"]];
var SHEETS=[];
