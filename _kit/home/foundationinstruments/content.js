/* Facts only. Sources: foundationinstruments.com (home, About, Products, THM-Meter, THM-RR, HAA-RR, Services and
   Contact pages) and the NIH RePORTER records for 1R43ES031465, 2R44ES031465, 5R44ES031465 and 1R43ES037584
   (NIEHS; Foundation Instruments, Inc., Collierville TN). Nothing here is invented.
   [product, kind, title, spec line, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["THM-Meter","Total THMs · grab sample","Affordable onsite total THM monitoring","10 to 200 ppb · under an hour","Fill a vial with the water sample, touch start and wait for the result. A self-contained analyser the size of a small cash register, built with advances in electronics, 3D printing and fluid control to keep costs down.",0,"",FI+"thm-meter","Product page"],
 ["THM-RR","THM4 species · online","Online monitoring of THM species, around the clock","0.12 to 240 µg/L · under $1 a test","Runs continuously, online or from a grab sample, and reports the individual THM4 species plus the total, with sub-µg/L detection limits. Consumables are nitrogen gas and DI water.",0,"",FI+"thm-rr","Product page"],
 ["HAA-RR","HAA5 and HAA9 · online","Automated haloacetic acid measurement, onsite","Under 5 to 240 µg/L · 80 minutes","A standalone analyser that measures the individual HAA5 and HAA9 species directly, at the plant or out in the distribution system, with little user intervention.",0,"",FI+"haa-rr","Product page"],
 ["EZ-AutoTitrator","Hardness · alkalinity · pH","Automated titrations with a colour-sensing endpoint","Lab, shop or office","Fully automated colorimetric and pH titrations for hardness and alkalinity. An integrated multiwavelength colorimetric sensor recognises the colour endpoint, minimising analyst-to-analyst variability.",0,"",FI+"ez-titrator","Product page"],
 ["HAA-Meter","In development · NIH SBIR Phase I","Affordable onsite HAA monitoring, read by machine learning","Feasibility study, 2025 to 2026","An onsite HAA analyser with an integrated machine-learning model that interprets the chromatograms, checks data quality and reports total HAAs to the operator with no user intervention.",1,"",NIH+"11185774","NIH RePORTER"]];
/* At a glance, exactly as the product pages and the NIH records state it. */
var EVID=[
 ["No specialised skills","The THM-Meter is designed with the operator in mind: a large touch screen, a filled vial and one button to start the run"],
 ["THM4 speciation","The THM-RR reports each of the four regulated trihalomethanes as well as the total, with an accuracy of 0.3 ppb or ±5%"],
 ["Direct HAA measurement","The HAA-RR measures HAA5 and HAA9 species directly, at under $3 a test, online or from a grab sample"],
 ["Built on 20+ years of research","Developed from more than two decades of academic research in disinfection by-product testing and evaluation"]];
/* Only people named in a primary source: the NIH RePORTER records for 5R44ES031465 and 1R43ES037584 and the company's Contact page. */
var TEAM=[
 {g:"Leadership",name:"Paul Brister",title:"CEO and Research Scientist",sum:"Contact principal investigator on the company's NIEHS SBIR awards, from the TotalTHM-NOW and THM-Meter Phase II to the HAA-Meter Phase I that began in 2025."},
 {g:"Leadership",name:"Michael Brown",title:"Director of Technical Services",sum:"Principal investigator on the 2019 NIEHS SBIR Phase I that proved the TotalTHM-NOW and THM-Meter technically feasible."}];
var NEWS=[
 ["28 August 2025","NIH SBIR Phase I awarded: an affordable HAA-Meter, read by machine learning","NIH RePORTER",NIH+"11185774"],
 ["4 July 2022","SBIR Phase II continues: taking the TotalTHM-NOW and THM-Meter through nationwide beta tests","NIH RePORTER",NIH+"10424559"],
 ["8 June 2021","NIH SBIR Phase II awarded for the TotalTHM-NOW and THM-Meter","NIH RePORTER",NIH+"10258378"],
 ["3 September 2019","NIH SBIR Phase I awarded: on-site THM monitoring for drinking water treatment plants","NIH RePORTER",NIH+"9909948"]];
var SHEETS=[];
