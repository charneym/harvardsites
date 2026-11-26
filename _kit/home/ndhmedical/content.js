var FONTS=['300 1em "Archivo"','400 1em "Archivo"','500 1em "Archivo"','400 1em "Inter"','500 1em "Inter"','500 1em "IBM Plex Mono"','500 1em "Cinzel"','italic 400 1em "Libre Baskerville"'];
var WEB="http://www.ndhmedical.com/";
var MAIL="info@ndhmedical.com";
/* facts: ndhmedical.com (default, company, extrusion, materials_processed, quality_policy, value_statement, contact_information,
   trade_shows, news), all fetched 2026-11-25; NDH's own trade-show booth photo (images/booth.jpg) for the service and product
   panels (contract packaging, injection molding up to 150 ton, catheter manufacturing, tubing types). */
var PLAT=[["Extrusion","Custom medical tubing","Single-lumen, multi-lumen, paratubing and coextruded tubing, from research and development trials through high-volume production."],
 ["Molding and assembly","Parts and finished devices","Insert molding and injection molding on machines up to 150 ton, pad printing, tip forming, bonding and assembly."],
 ["Packaging and logistics","Through to the shipper","Pouching, tray sealing, UDI labeling and bar coding, sterilization management, warehousing and order fulfillment."]];
var TUBES=[
 ["Extrusion","Single-lumen tubing","One lumen, extruded in the materials of your choice for research trials or high-volume production."],
 ["Extrusion","Multi-lumen tubing","Several lumens in one extrusion, each shaped by a die designed and built in NDH’s own tool room."],
 ["Extrusion","Paratubing","Paired tubing extruded side by side as one profile."],
 ["Coextrusion","Striped and layered","Two materials in a single pass: a stripe along the wall, or one layer over another."],
 ["Extrusion","Taper (bump) tubing","Tubing whose diameter changes along its length, in a single continuous extrusion."],
 ["Reinforced","Braid and spiral reinforced","Braid-reinforced tubing with a variable pitch, and spiral-reinforced tubing."],
 ["Jacketing","Wire and coil jacketing","Polymer extruded over wire and coil."],
 ["Catheters","Catheter manufacturing","Tip forming, pad printing, balloons and insert molding, through to the assembled device."]];
var MATS=[["Thermoplastic polyurethane (TPU)","Neuthane · Pellethane · Texin · Tecoflex · Tecothane"],
 ["Polyether block amide","Pebax"],["Polyamide (nylon 11, nylon 12)","Rilsan · Grilamid"],["Polyetherester block copolymer","Hytrel"],
 ["Polycarbonate","Makrolon · Calibre · Lexan"],["Styrene-ethylene-butylene-styrene","Kraton · Medalist"],["Polypropylene","Pro-fax"],
 ["Polyethylene (LDPE, HDPE)","Affinity · Engage · Alathon"],["Polyetherimide","ULTEM"],["Cellulose acetate propionate","Tenite"],["Copolyester","Eastar · Tritan"]];
var VALUES=[["Our customers","for they are our reason to exist","Value for your money, and goods and services, delivered in a timely fashion, that meet or exceed every expectation of quality."],
 ["Our employees","for they make possible all of our accomplishments","Fair treatment, a safe work environment, a full part in the company’s operations, and the chance to grow."],
 ["Our community","for it provides us a place to work and live","To be a good citizen and neighbor, to follow every law that applies to our operations, and to protect and preserve the environment."]];
var SHOWS=[
 ["Feb 9–11, 2027","MD&M West, booth 2251","Anaheim Convention Center, Anaheim, California",WEB+"html/trade_shows.htm"],
 ["Nov 18–19, 2026","MEDevice Silicon Valley, booth 729","Santa Clara Convention Center, Santa Clara, California",WEB+"html/trade_shows.htm"],
 ["Oct 7–8, 2026","MPO Summit","The Grand America Hotel, Salt Lake City, Utah",WEB+"html/trade_shows.htm"],
 ["Apr 22–23, 2026","MD&M South, booth 3122","Charlotte, North Carolina: extrusion and contract manufacturing on show",WEB+"html/news.htm"]];
var SHEETS=[];
