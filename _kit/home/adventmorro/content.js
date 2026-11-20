var FONTS=['400 1em "Playfair Display"','500 1em "Playfair Display"','italic 500 1em "Playfair Display"','400 1em "Lato"','700 1em "Lato"'];
var WEB="https://www.adventmorro.com/";
var TEL="+1 (787) 725-5285",TELH="tel:+17877255285";
var ADV="https://adviserinfo.sec.gov/firm/summary/162930";
var MAP="https://www.google.com/maps/search/?api=1&query=206+Calle+Tetu%C3%A1n+San+Juan+PR+00902";
var SECT=[["Healthcare","Clinics, surgical instruments, med-ID systems, biotech and pharmaceuticals"],
 ["Services","Hospitality, education, media, consumer finance, music, water and entertainment"],
 ["Technology","E-commerce, telecommunications and online translation"],
 ["Other","Food distribution, steel manufacturing, plastics technology and shipping"]];
var CRIT=[["Revenue","$5M – $20M","Companies in growing industries"],
 ["Operating cash flow","$1M – $5M",""],
 ["Equity investment","$5M – $10M","Preferred size; larger deals as a co-investor"],
 ["Partnership","3 – 7 years","Exit to financial or strategic buyers"]];
var DEALS=["Growth capital for management teams accelerating growth, organically and/or through acquisitions.",
 "Experienced management teams in de-novo companies entering established industries through market consolidation.",
 "Later-stage leveraged buyouts where returns can grow beyond leverage reduction, through moderate growth.",
 "Co-investments in substantially larger transactions, as the minority local institutional partner."];
var GEO=["Companies operating in Puerto Rico.",
 "Puerto Rican companies expanding into the U.S. and Latin America.",
 "Established mainland companies whose products or services are aimed at the U.S. Hispanic market."];
var ACTIVE=[
 ["Olé Life","Insurance","A fully digital term life insurer operating from Puerto Rico and selling policies across Latin America."],
 ["Puerto Rico A.S.C. Holding Co.","Healthcare · 2008","Builds, owns and operates ambulatory surgical centres in Puerto Rico, including the island’s largest ophthalmic ASC."],
 ["Hotel El Convento & Hotel Provincial","Hospitality · Old San Juan","Puerto Rico Hospitality Group: a 1646 monastery opposite the San Juan Cathedral, and the 43-room Hotel Provincial next door, in a building raised in 1849–51 for the Spanish Crown’s appointed senators, opened January 2021."],
 ["Vigilant Shipping Holding","Logistics · 2019","Stevenson Formel Freight Services, a San Juan family company operating in the region since the early 1970s."],
 ["Holberton Puerto Rico","Education","Code Puerto Rico LLC, a two-year software development school that trains students to become programmers."],
 ["Universal Protection and Maintenance","Services","Services, installs and maintains the control networks that govern the performance of mechanical equipment."],
 ["LendingPoint","Fintech · 2019","A fintech balance-sheet lender."],
 ["Kiwi Financial","Fintech · 2022","Microlending and credit-builder platform helping unbanked and low-credit-score Hispanic clients improve their credit."],
 ["Switch BTC","Technology · 2021","Business consulting that designs solutions on the Salesforce platform to optimise clients’ processes."],
 ["Toteat","Software","A restaurant-management software suite that lets owners monitor their business in real time."],
 ["Miramar Brewing","Consumer · 2020–21","Craft beer brewing, a beer pub and craft beer distribution in Puerto Rico."],
 ["Van del Sol","Travel","Rents customised Class B camper vans for overnight and travel use, initially within Puerto Rico."]];
var MORE=["Andeno","Hyperion"];
var PARTIAL=["ICPR Junior College","Medical Card System","Trexel"];
var EXITED=["AquaVenture Holdings (Seven Seas Water & Quench)","Centennial Communications","Charlotte Russe","Código Entertainment (Fania)","Datek Online","Dollar Express","FFI Holdings (La Familia)","Infinity Laser Centers","Infopáginas","Integration Technologies","International Meal Company","Islanet Communications","Abaco PR","Next Level Learning","Packers Provision","Patheon","QMC Media","Quench USA","QWS Holding","Venture Steel","Windstream"];
var TEAM=[
 ["Management team",[{name:"Cyril Meduña",title:"Managing Partner / President"},{name:"Allison Kern",title:"Principal"},{name:"José Tomás Echeverría",title:"Senior Associate"},{name:"Edwin Gandía",title:"Analyst"},{name:"Brian Aquino",title:"Analyst"},{name:"Amarilys Rosa",title:"Controller"}]],
 ["Board of Directors",[{name:"Eitel Gómez",title:"President",sum:"Former owner, Ochoa Industrial"},{name:"Francisco Marrero",title:"Vice President",sum:"General Manager, V. Suárez Real Estate Group"},{name:"Alberto Paracchini",title:"Director",sum:"Retired Chairman of BanPonce Corporation and Banco Popular de Puerto Rico"}]],
 ["Advisory Committee",[{name:"Carlos Nido",title:"Advisory Committee",sum:"President, Green Isle Capital LLC"},{name:"Jaime Fortuño",title:"Advisory Committee",sum:"Entrepreneur; Partner, Gourmand and 360 Reserva"},{name:"Guillermo Martínez",title:"Advisory Committee",sum:"CEO, GM Holdings"},{name:"José Carrión",title:"Advisory Committee",sum:"Entrepreneur, private investor and former Chairman of the Puerto Rico Fiscal Board"},{name:"Ralph Christiansen",title:"Advisory Committee",sum:"Senior Executive Vice President, HUB International"}]],
 ["Investment Committee",[{name:"John F. Brooke",title:"Investment Committee",sum:"Senior Partner, Brooke Private Equity Associates"},{name:"Peter A. Brooke",title:"In memoriam, 1929–2020",sum:"Chairman, Advent International Corporation"}]]];
var NEWS=[
 {d:"2021-05-13",s:"Exit",t:"Culligan completes acquisition of AquaVenture and divestiture of Seven Seas Water",u:WEB+"culligan-completes-acquisition-of-aquaventure-and-divestiture-of-seven-seas-water/"},
 {d:"2021-01-25",s:"Portfolio",t:"Inaugura Hotel Palacio Provincial en el Viejo San Juan",u:WEB+"inaugura-hotel-palacio-provincial-en-el-viejo-san-juan/"},
 {d:"2020-12-02",s:"Portfolio",t:"Holberton Puerto Rico opens scholarship fund at Puerto Rico Community Foundation",u:WEB+"holberton-puerto-rico-opens-scholarship-fund-at-puerto-rico-community-foundation/"},
 {d:"2020-04-27",s:"Exit",t:"Integration Technologies partners RIB Software to expand global footprint",u:WEB+"integration-technologies-partners-rib-software-to-expand-global-footprint/"},
 {d:"2019-07-31",s:"Portfolio",t:"Invierten $16 millones en un nuevo centro de cirugía ambulatoria en Caguas",u:WEB+"invierten-16-millones-en-un-nuevo-centro-de-cirguia-ambulatoria-en-caguas/"}];
var SHEETS=[];
