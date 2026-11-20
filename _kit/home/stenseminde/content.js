var FONTS=['400 1em "Libre Caslon Text"','italic 400 1em "Libre Caslon Text"','700 1em "Libre Caslon Text"','400 1em "Public Sans"','500 1em "Public Sans"','600 1em "Public Sans"'];
var CVR="27082874";
var CVRU="https://datacvr.virk.dk/enhed/virksomhed/27082874";
var PR="https://via.ritzau.dk/pressemeddelelse/14739177/kapitalstaerk-pumpemand-kober-sig-ind-i-nordjysk-satelliteventyr?publisherId=10609237&lang=da";
/* what Stenseminde looks for, in its own words (its boilerplate and Henrik Sørensen's statement in the press release of 5 January 2026) */
var CRIT=[["Ejerform","Et nordjysk, familieejet investeringsselskab. Vi investerer som familiekontor, med egen kapital."],
 ["Rolle","Enten som aktiv minoritetsejer eller som majoritetsejer, med plads i bestyrelsen."],
 ["Virksomheder","Sunde værdier og højt vækstpotentiale, hvor vi kan bidrage."],
 ["Tidshorisont","Langsigtede og værdibårne investeringer med klare ambitioner om fremtidig lønsom vækst."],
 ["Det vi bidrager med","Mange års erfaring med globalisering, internationalt salg og leverancer til både civile og forsvarsmæssige kunder."],
 ["Ambition","At udvikle stærke, nordjyske og danske erhvervsfyrtårne."]];
/* holdings, from the press release, the registers (CVR) and Mariendal El-Teknik's annual report for 2025 */
var PF=[
 ["Space Inventor","Satellitproducent i Aalborg, grundlagt i 2015: geostationære kommunikationssatellitter, Danmarks første månemission Máni og komponenter til andre satellitproducenter. Stenseminde Holding ejer 25,2 % og har plads i bestyrelsen (januar 2026).","Rumfart og forsvar","https://space-inventor.com/"],
 ["Mariendal El-Teknik","En af Danmarks ældste installationsvirksomheder: el, energioptimering, sikring, it og industriautomation, landsdækkende med omkring 250 medarbejdere. Stenseminde Holding blev hovedaktionær ved en kapitalforhøjelse i december 2025 og har i 2026 overtaget det fulde ejerskab.","Installation","https://mariendal.dk/"],
 ["Dansk Marine Center","Bådsalg i Aarhus, reparationsværft i Aalborg (Aalborg Yacht Værft) og butik med bådudstyr; importør af Hallberg-Rassy i Danmark. Ejet af Stenseminde Holding.","Maritim","https://danskmarinecenter.dk/"],
 ["DESMI","Pumpevirksomheden i Nørresundby, som Henrik Sørensen stod i spidsen for i 26 år. Han solgte en stor del af sine aktier i 2022; familien er fortsat medejer.","Rødderne","https://www.desmi.com/"]];
var NEWS=[
 {d:"2026-06-22",s:"Mariendal El-Teknik",t:"Årsrapport 2025: Stenseminde Holding hovedaktionær efter kapitalforhøjelse, fuldt ejerskab i 2026",u:"https://via.ritzau.dk/files/13566731/15011369/437889/da"},
 {d:"2026-01-14",s:"M&A Insights",t:"Stenseminde Holding overtager majoriteten i el-installatøren Mariendal El-Teknik",u:"https://www.mainsights.io/ma-news/private-investment-firm-stensminde-holding-acquires-majority-stake-in-danish-electrical-firm-mariendal-el-teknik"},
 {d:"2026-01-05",s:"Via Ritzau",t:"Kapitalstærk pumpemand køber sig ind i nordjysk satelliteventyr",u:PR}];
var SHEETS=[];
