var FONTS=['300 1em "Archivo"','400 1em "Archivo"','500 1em "Archivo"','400 1em "Inter"','500 1em "Inter"','500 1em "IBM Plex Mono"','italic 400 1em "Source Serif 4"'];
var WEB="https://www.interpower.com/ic/";
var MAIL="info@interpower.com";
/* facts: interpower.com/ic (home, aboutus, missionstatement, history, iso9000, corporateculture, contactus, hospitalgrade,
   valueadded, news/Press-Releases, news/trade-show-schedule), all fetched 2026-11-26; KBOE Radio, "Interpower Celebrates 50th
   Anniversary", 15 Jul 2025; MD&M West 2026 exhibitor directory */
var PRODUCTS=[
 ["Cords","North American power cords and cord sets","Made in Iowa","Power cords and cord sets for the North American market, manufactured by Interpower in Iowa and 100% tested.",WEB+"NAcords.html"],
 ["Cords","International power cords and cord sets","Country-specific","Cords and cord sets for global use, so the end user always has the correct means of connecting to the local mains supply.",WEB+"international-power-cords.html"],
 ["Components","IEC 60320 connectors and inlets","C13 · C19 · Sheet E","Appliance and interconnection couplers, including Interpower’s own molded C13 and C19 connectors and its rewirable Sheet E plug connector.",WEB+"IEC60320.html"],
 ["Components","Power entry modules","Two to five functions","Modules that simplify the power entry element of a product, for medical, testing, computer and industrial equipment.",WEB+"modules.html"],
 ["Components","Plugs, sockets and connectors","NEMA and international","North American NEMA configurations, international plugs and sockets, and their accessories.",WEB+"plugs-sockets-connectors.html"],
 ["Cable","North American and international cable","Cut to length","Cable extruded by Interpower, cut in continuous or discrete lengths, stripped and terminated to order.",WEB+"cable.html"],
 ["Distribution","Accessory power and socket strips","Country-specific","Accessory power distribution units and socket strips for worldwide markets.",WEB+"aps.html"]];
var REGIONS=["North America","Japan","Denmark","Australia"];
var HISTORY=[
 ["1975","Founded in Berkeley, California, by Bob Wersen, as Panel Components Corporation."],
 ["1993","The 1,800-mile move to Oskaloosa, Iowa, and a European subsidiary opens in the United Kingdom."],
 ["1996","Interpower’s North American power cords are produced in Oskaloosa for the first time."],
 ["2000","A manufacturing facility opens in Lamoni, Iowa, for molded cord sets."],
 ["2004","Interpower Corporation becomes the official company name."],
 ["2008","A one-week U.S. manufacturing lead time is achieved."],
 ["2013","Cable is extruded on Interpower’s own production line for the first time."],
 ["2025","Fifty years of power cord and component manufacturing."]];
var NEWS=[
 ["InfoPower blog","Prevent power cords from acute bend radius with dome and flex strain reliefs","https://blog.interpower.com/infopower/bend-radius-and-strain-reliefs/cable-glands"],
 ["Trade show · Feb 2026","Interpower exhibits at MD&M West 2026 in Anaheim","https://mdmwest26.mapyourshow.com/8_0/exhibitor/exhibitor-details.cfm?exhid=32118"],
 ["KBOE Radio · Jul 2025","Interpower celebrates its 50th anniversary","https://kboeradio.com/interpower-celebrates-50th-anniversary/"],
 ["Press · Jun 2025","Interpower launches the IEC 60320 rewirable Sheet E angled plug connector in black",WEB+"news/Interpower-launches-iec-60320-rewirable-sheet-e-angled-plug-connector.html"],
 ["Press · Feb 2024","Interpower launches production of a newly designed Japanese 12A/125VAC medical plug",WEB+"news/Interpower-Launches-Production-of-Newly-Designed-Japanese-12A-125VAC-Medical-Plug.html"],
 ["Press · Dec 2023","Face and plug seal kits for IEC 60320 C14 inlets with an IP54 rating",WEB+"news/Interpower-Announces-Face-and-Plug-Seal-Kits-for-IEC-60320-C14-Inlets-with-IP54-Rating.html"]];
var SHEETS=[];
