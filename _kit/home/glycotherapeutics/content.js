var FONTS=['400 1em "Ubuntu"','500 1em "Ubuntu"','400 1em "Roboto"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var MAIL="mailto:johan.pijnenborg@glycotherapeutics.eu";
var LI="https://www.linkedin.com/";
/* Development path, as GlycoTherapeutics and Radboudumc describe it (glycotherapeutics.eu; radboudumc.nl news, 26 Apr 2023).
   [stage, area, title, detail, dim, status] */
var PIPE=[
 ["Step 1","Preclinical","Proof of concept","Preclinical research aimed first at showing the safety and activity of the drug: whether it inhibits cancer growth, and does so safely.",0,"First step"],
 ["Step 2","Combination","Alongside immunotherapy","The company expects its drugs to be combined with existing immunotherapies, to give more patients a durable response.",1,"Planned"],
 ["Step 2","Combination","Alongside chemotherapy","Combination with chemotherapy, the other regular treatment the company names, will be investigated in the same way.",1,"Planned"]];
/* glycotherapeutics.eu, Founding team. Names and titles only, as the site gives them, each linking to their public profile. */
var TEAM=[
 {g:"Founding team",name:"Dr. Johan Pijnenborg",title:"Co-founder & CEO",url:LI+"in/johan-pijnenborg-76b08b106/"},
 {g:"Founding team",name:"Emiel Rossing",title:"Head of Preclinical Development",url:LI+"in/emiel-rossing-27b7a371/"},
 {g:"Founding team",name:"Nienke Eerden",title:"Project Leader Medicinal Chemistry",url:LI+"in/nienke-eerden-787244118/"},
 {g:"Founding team",name:"Dr. Leendert van den Bos",title:"Head of Business Development",url:LI+"in/leendert-van-den-bos-b2412731/"},
 {g:"Scientific advisors",name:"Dr. Thomas Boltje",title:"Scientific Advisor",url:"https://www.boltje-research-group.nl/people-2/test/"},
 {g:"Scientific advisors",name:"Dr. Christian Büll",title:"Scientific Advisor",url:LI+"in/christian-b%C3%BCll-9699243a/"}];
/* glycotherapeutics.eu, News: each item is the company's own LinkedIn post (or the Radboudumc article) */
var NEWS=[
 ["27 Aug 2026","Follow-on financing from Oost NL, a private investor and the founders",LI+"feed/update/urn:li:share:7498695832448172032/","LinkedIn"],
 ["10 Jul 2025","GlycoTherapeutics awarded NWO Take-off Phase 2 financing",LI+"feed/update/urn:li:activity:7349052210313383936/","LinkedIn"],
 ["28 Mar 2024","Finalist in the Global Investor Forum Pitch Contest",LI+"feed/update/urn:li:share:7179030928508243969/","LinkedIn"],
 ["7 Sep 2023","Interview in C2W magazine",LI+"feed/update/urn:li:share:7114984128462118913/","LinkedIn"],
 ["26 Apr 2023","Vroegefasefinanciering Gelderland awarded to GlycoTherapeutics","https://www.radboudumc.nl/en/news-items/2023/nieuwe-aanpak-van-glycotherapeutics","Radboudumc"]];
var SHEETS=[];
