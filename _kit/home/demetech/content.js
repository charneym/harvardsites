var FONTS=['400 1em "Archivo"','600 1em "Archivo"','700 1em "Archivo"','italic 800 1em "Archivo"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var WEB="https://www.demetech.us/";
var MAIL="info@demetech.us";
var TEL="+1 (305) 824 1048";
/* the suture catalogue as published on demetech.us (product menu): [brand, code, material]. Absorbable / nonabsorbable split
   by material. */
var ABS=[["DemeGUT","CC","Chromic catgut"],["DemeGUT PLAIN","CP","Plain catgut"],["DemeCRYL","G","Polyglactin 910"],["DemeCAPRONE","MO","Poliglecaprone 25"],
 ["DemeSORB","PGA","Polyglycolic acid"],["DemeQUICK","PGR","Rapid absorbable"],["DemeDIOX","PX","Polydioxanone"],["DemeDIOX Barbed","PXB","Polydioxanone, barbed"]];
var NON=[["DemeLENE","PM","Polypropylene"],["DemeLON","NL","Nylon monofilament"],["DemeLON MULTI","NM","Nylon multifilament"],["DemeBOND","PB","Polyester, braided"],
 ["DemeDAC","PT","Polyester, braided without covering"],["DemeSILK","SK","Silk"],["DemeSTEEL","SW","Surgical steel"],["PTFE","TE","Polytetrafluoroethylene"],["UHMWPE","FR","Ultra-high-molecular-weight polyethylene"]];
/* DemeLENE MESH technical details (demetech.us/product/specialty/Mesh): [name, use, thickness, pore size, burst strength, weight, code] */
var MESH=[["Regular","Open hernia repair","0.65–0.75 mm","0.6–0.7 mm","12 kg/cm²","105–115 g/m²","DPM"],
 ["Laparoscopic","Laparoscopic repair (TEP, TAPP)","0.42–0.48 mm","0.5–0.6 mm","10 kg/cm²","85–95 g/m²","DPLM"],
 ["Macropore","Open hernia repair","0.65–0.75 mm","2–3 mm","10 kg/cm²","55–60 g/m²","DPMM"],
 ["Soft","Inguinal hernia repair","0.30–0.38 mm","1–2 mm","6 kg/cm²","25–35 g/m²","DPULM"]];
/* applications, from their home page */
var APPS=[["Dental","Ultra-fine needle diameters provide a new concept for dental surgery."],
 ["Cardiology","The Cardio Line is made with an exclusive needle tip design, for better penetration and less tissue trauma."],
 ["Ophthalmology","A cross-section that reduces the angles of the cutting edges, for improved penetration and control."]];
/* contract manufacturing (demetech.us/manufacturing) */
var MFG=[["Start-ups","A complete one-stop shop for the development of new medical devices."],
 ["Research and development","Our R&D department designs, develops and prototypes medical device ideas, then takes them from proof of concept to production models that scale."],
 ["Flexible production","We manufacture your medical device in the US, to a high standard of quality."],
 ["Regulatory","Our regulatory team runs every validation your product needs and helps obtain FDA, CE and ISO approval."]];
/* news: only items that link out. [date, headline, source, url] */
var NEWS=[
 ["November 2026","DemeTECH exhibits at MEDICA 2026, the world medical trade fair in Düsseldorf","MEDICA exhibitor directory","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3074128"],
 ["February 2023","University of Michigan researchers help develop a machine for on-demand N95 mask manufacturing, in a new industry partnership","Michigan Engineering","https://news.engin.umich.edu/2023/02/u-m-researchers-helping-to-develop-a-machine-for-on-demand-n95-mask-manufacturing/"],
 ["January 2023","UR24Technology and DemeTECH forge a surgical product partnership","MPO","https://www.mpo-mag.com/contents/view_breaking-news/2023-01-11/ur24technology-demetech-forge-surgical-product-partnership/"],
 ["February 2021","DemeMASK: American-made surgical masks and N95 respirators, from the fabric to the packaging and the machinery","DemeTECH news",WEB+"blog-details/12"]];
var SHEETS=[];
