var FONTS=['300 1em "Red Hat Display"','400 1em "Red Hat Display"','500 1em "Red Hat Display"','italic 300 1em "Red Hat Display"','italic 400 1em "Red Hat Display"','400 1em "Red Hat Text"','500 1em "Red Hat Text"'];
var WEB="https://owictechnologies.com/";
var MAIL="info@owictech.com";
var RPT="https://reporter.nih.gov/project-details/11381154";
/* facts: owictechnologies.com (home, SENSE, SPECS, microlinks, Engr, Team), NIH RePORTER 1R44GM161182 / 4R44GM161182,
   Cornell Chronicle 2025-01-09 and 2026-02-16; all fetched 2026-11-20 */
var SYS=[["Optics","Power and communication","Light powers each device and carries its signal, so there are no wires to connect and no racks of electronics."],
 ["Electronics","Intelligence, sensing, control","Integrated circuits give every device its intelligence, sensing and control, in silicon from a commercial CMOS foundry."],
 ["Integration","The size of a grain of sand","Heterogeneous integration of microscale optics, electronics and MEMS packs the whole system into a sand-grain-sized package."]];
var PRODUCTS=[
 ["Drug discovery","SPECS™","Small Photoelectronic Electro-Chemical Synthesizers: light-powered chips that turn a standard well plate into an electrosynthesis laboratory, for hundreds of reactions in parallel. For 1 mL inserts and 4 mL vials.","https://owictechnologies.com/specs"],
 ["Reaction telemetry","SENSE","Live calorimetry in every vial: a sensor under each well reads its temperature through the base, at 20 mK sensitivity, in 4, 24 and 96-well formats on the SLAS footprint. Early access.","https://owictechnologies.com/sense"],
 ["Smart products","Microlinks","The world’s smallest smart ID tags: photovoltaics, an integrated circuit and a laser in a package the size of a grain of sand, read with a standard iPhone.","https://owictechnologies.com/microlinks"],
 ["Engineering","Heterogeneous integration","Services that help companies miniaturise their products, with X-FAB, X-Celeprint, Dallas Quantum Devices and the Cornell NanoScale Facility.","https://owictechnologies.com/engr"]];
var TEAM=[
 {g:"Founders",name:"Alejandro Cortese, PhD",title:"Co-Founder, CEO",sum:"Co-inventor of OWiCs, with ten years in nanotech, device fabrication and engineering; designed the first OWiCs."},
 {g:"Founders",name:"Paul McEuen, PhD",title:"Co-Founder, CTO",sum:"John A. Newman Professor emeritus at Cornell; member of the National Academy of Sciences, more than 200 publications and patents."},
 {g:"Founders",name:"Alyosha Molnar, PhD",title:"Co-Founder, IC Design",sum:"Ida and Charles Lee Professor at Cornell; created the first low-power radio for “Smart Dust” and holds 20+ patents."},
 {g:"Engineering",name:"Michael Reynolds, PhD",title:"Lead Engineer",sum:"A decade of nanofabrication, microrobotics and device physics; designed and built the world’s first smart microscopic robots."},
 {g:"Engineering",name:"Kevin Sun",title:"Principal Product Engineer",sum:"Hardware and software engineer and designer with ten years in industry, bringing new technologies to market."},
 {g:"Scientific advisor",name:"Song Lin, PhD",title:"Scientific Advisor",sum:"Co-developer of SPECS and a leader in electrochemistry; Tisch University Professor at Cornell, Sloan Fellow."}];
var NEWS=[
 ["Aug 2026","NIH NIGMS continues the SBIR Fast Track award for high-throughput electrosynthesis with SPECS, with $1.23M for Phase II","NIH RePORTER",RPT],
 ["Feb 2026","OWiC Technologies uses a NY THRIVE Innovation Voucher to scale manufacturing of SPECS","Cornell Chronicle","https://news.cornell.edu/stories/2026/02/cornell-partnerships-propel-semiconductor-innovation-through-ny-thrive-vouchers"],
 ["Jul 2025","NIH NIGMS awards OWiC Technologies an SBIR Fast Track grant for light-powered smart microelectronics in drug discovery","NIH RePORTER","https://reporter.nih.gov/project-details/11254075"],
 ["Jan 2025","Light-activated micro device expands ‘green’ electrochemistry: SPECS published in Nature, to be commercialised by OWiC","Cornell Chronicle","https://news.cornell.edu/stories/2025/01/light-activated-micro-device-expands-green-electrochemistry"]];
var SHEETS=[];
