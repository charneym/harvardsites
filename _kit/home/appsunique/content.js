var FONTS=['300 1em "Jost"','400 1em "Jost"','500 1em "Jost"','600 1em "Jost"','400 1em "Inter Tight"','500 1em "Inter Tight"','300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','700 1em "Montserrat"'];
var WEB="https://www.appsunique.com/";
var MAIL="doug.bailey@appsunique.com";
/* products: from appsunique.com (sensing technologies, analytical modules and their news posts). [name, kind, text, url, link label] */
var PROD=[
 ["Heatwave™ PID","Moisture-tolerant PID sensor","Patented Heatwave™ technology keeps ambient moisture from condensing inside the sensor, the failure that kept ordinary PID sensors out of ambient TVOC monitoring. Produced in Taiwan.",WEB+"products/sensing-technologies/","Sensors & detectors"],
 ["Full Range PID","Dual range, dual output","Sensitivity down to very low concentrations while reading very high concentrations at the same time, in one affordable sensor. Made by Senqi in Changsha and shipped worldwide.",WEB+"full-range-sensor-released/","Full Range"],
 ["Arc-Light PID","Ceramic VUV lamp","The first PID sensor with an ultra-long-life ceramic VUV lamp, with Heatwave™ on board, for longer life and higher stability in conditions where other sensors fail.",WEB+"arc-light-sensor-released/","Arc-Light"],
 ["Rainbow 2 PID","For harsh environments","Wider electrode spacing with an air dielectric tolerates particulates and chemical contaminants, with ELT lamp coating and Heatwave™. Wide availability expected in Q1 2027.",WEB+"rainbow-2-announcement/","Rainbow 2"],
 ["Fireworks II™ FID","Smart flame ionization sensor","For GCs, total hydrocarbon analyzers or standalone use: 24-bit A/D, I²C or UART, a rich command set and fuel-control safety features, at up to 200 °C.",WEB+"products/analytical-modules/","Analytical modules"],
 ["Truculence™ AM II","TNMHC module for OEMs","Dual Fireworks FIDs give real-time total non-methane hydrocarbon readings, with an integrated sample filter and all flow control, from 105 °C to 200 °C.",WEB+"products/instruments/","The Truculence™ platform"]];
/* core technologies: as listed on appsunique.com/core-technologies. [column title, items] */
var TECH=[
 ["Sensors & detectors",["Flame ionization","Photoionization","Thermal conductivity","Flame photometric","Chemiluminescence","MOS and EC sensors"]],
 ["Methods",["Continuous THA / TVOC","Total C (THA + C)","TNMHC","Gas and liquid chromatography","Colorimetric","Hybrid methods"]],
 ["Selectivity",["Chromatographic separation","Selective membrane","Selective reduction","Selective oxidation","Adsorption and filtration","Hybrid approaches"]],
 ["Sample types",["Ambient, online or grab","Continuous emissions","Fence line","Indoor air quality","Process","Micro-environments"]]];
/* services: appsunique.com/services. [name, kind, text] */
var SVC=[
 ["Instrumentation","Design and integration","Decades of experience in the design of chemical analytical instruments, systems integration and deployment for indoor, outdoor and process monitoring."],
 ["Analytical modules","Building blocks for OEMs","Customised analytical modules and sensor components for your own instruments, designed, produced and supported through integration."],
 ["Sample handling","Heated and ambient sampling","Analytics designed around the sample: heated sampling systems and ambient samplers, extractive or in situ."],
 ["Sensing technology","Custom detectors","FID, PID, thermal conductivity, electron capture and conductivity detectors, optimised for range, sensitivity or adverse environments."],
 ["Technical training","Hands-on, for clients and partners","Sessions on regulatory issues, instrument types, monitoring approaches and analytical methods, and the advantages of each."]];
/* news: only items that link out. [date, headline, source, url] */
var NEWS=[
 ["2026","Applications Uniques exhibits at SENSOR+TEST 2026 in Nuremberg, Hall 1, booth 1-327","SENSOR+TEST","https://www.sensor-test.de/en/visitors/search/exhibitor/1778"],
 ["May 2026","Truculence™, an all-new instrumentation platform, goes to its first beta testers","Applications Uniques",WEB+"truculence-beta-testing/"],
 ["May 2026","Rainbow 2: the long-life PID sensor for harsh environments","Applications Uniques",WEB+"rainbow-2-announcement/"],
 ["April 2026","Arc Light: the first PID sensor with a ceramic VUV lamp","Applications Uniques",WEB+"arc-light-sensor-released/"],
 ["November 2025","US patent granted for Heatwave™ moisture-stop technology","Applications Uniques",WEB+"heatwave-patent-issued/"]];
var SHEETS=[];
