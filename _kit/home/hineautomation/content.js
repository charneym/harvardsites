var FONTS=['500 1em "Archivo"','600 1em "Archivo"','700 1em "Archivo"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','500 1em "IBM Plex Mono"'];
var MAIL="mailto:sales@hineautomation.com";
var PW="https://hineautomation.com";
/* Hine Automation LLC: facts from hineautomation.com (Home, About, Contact, product pages, services pages, Event Calendar).
   Real characters only, never HTML entities (DU). */
/* integrated wafer handling systems: [tag, title, sub, detail, url] */
var SYS=[
 ["Load locks","SL-200, SL-300 and SL-450 Star Systems","Automated vacuum load locks","Single-substrate vacuum transfer systems that spare the OEM’s process chamber from venting and evacuating before every cycle. Telescoping, multi-wafer, glove box and high-load configurations.",PW+"/products/automated-load-lock-systems/"],
 ["Load locks","SL-1200, SL-1300 and SL-200/300C","Custom load locks","Cassette load locks for substrates up to 200 or 300 mm, through a standard Ø320 mm or a pendulum vacuum gate valve; the SL-200/300C combines a cassette load port and a load lock.",PW+"/products/custom-load-locks/"],
 ["Vacuum","Constellation Systems","Cassette-to-cassette vacuum transfer","Hine vacuum robotics integrated into a small-footprint cluster: four to eight sides, wafers up to 450 mm, below 5 × 10⁻⁷ Torr base pressure, with wafer mapping and cross-slot detection.",PW+"/products/vacuum-transfer-systems-integrated/"],
 ["Atmospheric","DLP-300 EFEM","Equipment front end module","Moves silicon wafers or quartz photomasks between clean carriers and the tool: up to two load ports and two load locks, an atmospheric robot, an aligner and a fan filter unit.",PW+"/products/efem-systems/"]];
/* robotic components: [title, label, detail, svg] */
var COMP=[
 ["Robots","Vacuum and atmospheric","The HA-5.0 vacuum robotic arm is the central handler of the Constellation Systems: R, θ and Z motion, ±0.05 mm repeatability, payloads up to 4.5 kg.",
  '<circle cx="18" cy="38" r="7"/><path class="a" d="M18 38L32 24L46 30"/><circle class="f" cx="32" cy="24" r="2.4"/><path d="M42 26h10v8H42z"/>'],
 ["Aligners","Fiducial and centring","Fiducial and centring alignment (Delta Pick) for translucent or opaque wafers from 75 to 300 mm, high-vacuum compatible, above 3 million MCBF.",
  '<circle cx="28" cy="28" r="17"/><path class="a" d="M28 11v5"/><circle class="f" cx="28" cy="28" r="2.4"/><path d="M28 28L40 16"/>'],
 ["Elevators","Random-access, vacuum","The HA-50V vacuum elevator lifts payloads up to 34 kg on stainless steel bellows and a brushless DC motor, for any cassette load port or process module.",
  '<path d="M18 10h20v36H18z"/><path class="a" d="M22 18h12M22 24h12M22 30h12M22 36h12"/><path d="M28 46v6"/>'],
 ["Cassette load ports","25 and 50 wafers","Vacuum cassette-to-cassette load ports for 25 and 50 wafer cassettes, mini load ports for single wafers up to four-wafer cassettes, and atmospheric ports to 200 mm.",
  '<path d="M14 14h28v30H14z"/><path class="a" d="M18 22h20M18 29h20M18 36h20"/><circle class="f" cx="42" cy="22" r="2.4"/>']];
/* services: [title, detail] */
var SERV=[
 ["Custom design","Mechanical, electrical and software engineering for semiconductor equipment, by engineers and designers who work as part of the customer’s team from day one."],
 ["Contract manufacturing","Systems modelled in 3D CAD, assembled and integrated in a temperature- and humidity-controlled cleanroom, programmed by Hine’s controls engineers, then tested and debugged."],
 ["Rebuild and repair","Comprehensive rebuilds with a one-year warranty and targeted repairs with a 90-day warranty, each starting from a complimentary diagnosis and trouble failure report."],
 ["Robotic replacement","The HA-5.0V arm and HA-50V elevator replace legacy Hine Design and Asyst robotics, with a command set fully compatible with the controllers already in use."]];
/* executive team (hineautomation.com > About > Meet the Team); text-only masthead */
var TEAM=[
 ["Scott Craver","CEO","Joined Hine Automation as General Manager in 2013, with 20+ years in semiconductor equipment manufacturing, business development and operations."],
 ["Luis Gomez","Director of Sales","10+ years in automation, product development and business management, including as a Business Manager for Plasma-Therm’s Rev-Tech Manufacturing Solutions."],
 ["Tom Bouillon","Technical Sales Manager","30+ years in semiconductor equipment manufacturing, sales, procurement, supplier qualification and customer service."],
 ["Jackie Von Hahmann","Operations Manager","10+ years of mechanical engineering, operations and management experience, previously as an applications engineer."],
 ["Debra McNulty","Documentation Manager","25+ years in software development, project management, training and documentation, turning engineering-speak into clear work instructions."],
 ["Grant Wachtel","Regional Account Manager","Account manager for the Eastern region of North America, with a BS in Electrical Engineering from the University of Central Florida."]];
/* news that links out to hineautomation.com */
var NEWS=[
 ["Oct 2026","SEMICON West 2026: Hine Automation at Booth #564, Moscone Center, San Francisco","Event calendar",PW+"/event-calendar/"],
 ["Aug 2023","Case study: the vertically mounted SL-300T load lock","Case study",PW+"/case-study-vertically-mounted-ll-sl-300t/"],
 ["Aug 2023","Case study: lower-cost batch processing with a cassette load port system","Case study",PW+"/case-study-lower-cost-automation-batch-processing-of-a-cassette-load-port-system/"],
 ["Jan 2023","Hine Automation delivers the DLP-300 EFEM: more throughput, less downtime","Case study",PW+"/hine-automation-delivers-dlp-300-efem-increases-throughput-capacity-minimizes-downtime/"]];
var SHEETS=[];
