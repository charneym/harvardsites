var FONTS=['400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"','700 1em "Barlow"','300 1em "Roboto Condensed"','700 1em "Roboto Condensed"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var WEB="https://www.smdsensors.com/";
var MAIL="sales@smdsensors.co.uk";/* as published on fluidswitch.com, SMD's own fluid-controls site */
var TEL_US="(203) 294-5800",TEL_UK="+44 (0)1284 852 000";
/* the product families on smdsensors.com (home page, "Our Products"): [group, name, description] */
var PROD=[
 ["Force","Micro load cells and force sensors","Advanced thin-film load cells: compression and tension, beam and button style."],
 ["Force","Pressure sensors","High-temperature, high-pressure capability, with high-accuracy thin-film strain measurement."],
 ["Force","Scales","High-accuracy, overload-protected thin-film scales for medical, semiconductor and other applications."],
 ["Force","Signal conditioning","4–20 mA, 0–5 VDC and I²C outputs, with USB and Bluetooth wireless communications."],
 ["Fluid","Bubble sensors","Ultrasonic technology for accurate, no-contact air-in-line detection."],
 ["Fluid","Float switches and liquid level sensors","Multi-directional, standard or fully custom, from SMD Fluid Controls."],
 ["Fluid","Optical liquid level sensors","Point-level sensing of water and other liquids."],
 ["Fluid","Capacitive level sensors","Non-invasive, continuous level sensing."],
 ["Custom","Custom solutions","Engineered for nearly any sensing application, across every product line."]];
/* figures from smdsensors.com/about-us/custom-engineering-design and /investment-and-growth: [figure, unit, title, text] */
var CAPS=[["0.1","µL","Bubble sensors","Standard bubble sensors detect bubbles as small as 0.1 microliters."],
 ["5000","kg","Load cells","Capacity ranges from milligrams up to 5000 kg."],
 ["1–2","%","Inline flow meters","Noninvasive inline flow meters with accuracy within 1% to 2%."],
 ["<5","ppm","Thin-film gauges","Ultra-low temperature coefficients of resistance, under 5 ppm."]];
/* markets, from their home page and custom engineering page */
var APPS=[["Medical","Critical fluid management, occlusion detection and air-in-line sensors, and toco-dynamometer sensors, of which SMD is one of the world’s largest suppliers."],
 ["Laboratory","Instrument sensing subassemblies, and diagnostic scales for medical and reagent weighing."],
 ["Industrial and aerospace","Rugged pressure sensors for oil and gas exploration, and miniature load cells for aerospace."]];
/* the two sites (smdsensors.com/about-us/our-facitlities) and certifications (/approvals-certifications) */
var SITES=[["Wallingford, Connecticut","Headquarters","Built as a role model for eco-friendly construction, with one of Connecticut’s largest industrial geothermal heating and cooling systems, and sunlight and a natural view from every workspace. The site’s wetland and pond treat its own storm water."],
 ["Chedburgh, Suffolk","Thin-film facility","SMD Ltd was set up in 1979 to research and develop sputtered thin-film force sensors. Today its thin-film processing facility, on a former 1942 airfield near Bury St Edmunds, makes a wide array of force and pressure sensors."]];
var CERTS=[["ISO 9001","USA and UK"],["ISO 13485","USA, medical devices"],["IPC-620","USA, trained and certified workforce"]];
/* news: only items that link out. [date, headline, source, url] */
var NEWS=[
 ["November 2026","SMD Sensors exhibits at MEDICA 2026, the world medical trade fair in Düsseldorf","MEDICA exhibitor directory","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3083902"],
 ["August 2022","What is a load cell? Clarifying the terminology around measuring force","SMD blog",WEB+"what-is-a-load-cell-clarifying-the-terminology-around-measuring-force/"],
 ["July 2019","Understanding strain gauges in load cells: thin film vs. bonded foil vs. silicon","SMD blog",WEB+"blog-understanding-strain-gauges-in-load-cells-thin-film-vs-bonded-foil-vs-silicon/"],
 ["September 2018","Noninvasive pressure measurements using thin-film sensors","SMD blog",WEB+"blog-noninvasive-pressure-measurements-with-thin-film-sensors/"]];
var SHEETS=[];
