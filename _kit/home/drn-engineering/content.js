var FONTS=['300 1em "Roboto Slab"','400 1em "Roboto Slab"','500 1em "Roboto Slab"','400 1em "Work Sans"','500 1em "Work Sans"','600 1em "Work Sans"'];
/* contact: drn.co.uk header, footer and Contact page (Trojan Court, Laporte Way, Luton LU4 8RN); Companies House 01672231 */
var TEL="+441582451111",TELT="+44 (0)1582 451111",MAIL="sales@drn.co.uk";
var DP="https://drn.co.uk/";
/* the turning and milling plant, as drn.co.uk > Plant List (issue 8/1/2026) lists it. [machines, model, capability, capacity] */
var PLANT=[
 ["Sliding head","Star SR20 · four machines","Sub-spindle and driven tools, FMB magazine bar loading. Two SR20 R111 and two SR20 RIV, Type-A and Type-B.","20 mm bar"],
 ["Sliding head","Star SP23","CNC turn and mill with sub-spindle and driven tools, FMB magazine bar loading. New in 2025.","25.4 mm bar"],
 ["Fixed head","Citizen Miyano BNE 65 MYY","Nine axes and sub-spindle, Iemca Kid 80 magazine bar loading. Cuts with three tools at once. Installed in November 2025.","65 mm bar"],
 ["Fixed head","Miyano BNJ, BNA and BND · seven machines","Four to seven axes with sub-spindle, FMB and Iemca magazine bar loading.","42 to 51 mm bar"],
 ["Chucking","Doosan Puma GT2100","Two-axis turning centre with a multifeed bar magazine and a 7 inch chuck.","65 to 178 mm"],
 ["Milling","Haas VF1, DM1 and two Super Mini Mills","CNC vertical machining centres, BT 40 taper, for hexagons, slots and flats as a second operation.","tables to 660 mm"]];
/* materials machined (drn.co.uk > Services; FAQs) */
var MATS=["Stainless steel 303, 304, 316, 316L, 416, 431","Mild and alloy steels EN1A, EN1APb, 080A15, EN24T","Aluminium 6082T6, 2011T3, 2014T6, 6063T6","Brass CZ121, CZ131, CZ114","Bronze PB102","Nylon, Acetal, PTFE, PEEK, polycarbonate, ABS","Aerospace L111, S145, S154, AMS5639"];
/* directors, as registered at Companies House (01672231); roles from the Southern Manufacturing exhibitor profile. Text-only masthead. */
var TEAM=[
 {name:"Barbara Newport",title:"Director",sum:"Director since before 1991. The company was registered by Don Newport in October 1982."},
 {name:"Paul Newport",title:"Director",sum:"Joined DRN in 1985 and built up the customer base through annual exhibitions."},
 {name:"Gary Oakley",title:"Director",sum:"On board from day one as Works Manager. Director since 2008."},
 {name:"Calvin Newport",title:"Director",sum:"Director since 2020."}];
/* news: each row links out to its source. [date, title, source, url] */
var NEWS=[
 ["2–4 Feb 2027","Southern Manufacturing & Electronics 2027, Farnborough: DRN Engineering on Stand A220","Southern Manufacturing · Exhibitors","https://www.southern-manufacturing-electronics.com/exhibitors/drn-engineering-ltd-239365/"],
 ["Mar 2026","DRN Engineering invests in a new Citizen Miyano BNE 65 MYY 9 axis lathe with sub-spindle","DRN · News",DP+"drn-engineering-invests-in-a-new-citizen-miyano-bne-65-myy-9-axis/"],
 ["Jan 2026","Plant list, issue 8: fourteen CNC lathes and four vertical machining centres","DRN · Plant list",DP+"plant-list/"],
 ["Jun 2025","New machine investment: a Star SP23 CNC turn and mill machine with magazine bar loading","DRN · News",DP+"new-machine-investment/"]];
var SHEETS=[];
