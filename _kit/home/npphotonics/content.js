var FONTS=['300 1em "Sora"','400 1em "Sora"','500 1em "Sora"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:info@npphotonics.com";
var PW26="https://www.npphotonics.com/_files/ugd/210cd7_d510872e59a748aaa36d16c877326b02.pdf";
/* Products, from npphotonics.com (home page product panels). [family, band, name, line, detail, dim, tag, link, linklabel] */
var PROD=[
 ["ROCK","1 µm · 1.5 µm","Single-frequency fiber lasers","25 mW to 30 W output","λc 1030–1075 nm and 1530–1565 nm. Narrow-linewidth, low phase-noise lasers in OEM and bench-top formats, designed for operation in industrial environments.",0,"OEM &amp; bench-top","",""],
 ["Amplifiers","1 µm · 1.5 µm","Short-length fiber amplifiers","20 dB gain in 10 cm","Up to 100 W average output power and ≥500 kW peak power, from centimetres of NP’s high-gain phosphate fiber.",0,"Gain blocks","",""],
 ["METEOR","1 µm · 1.5 µm","High-energy fiber lasers","100 µJ to 1.3 mJ per pulse","λc 1018–1080 nm and 1528–1575 nm. Up to 25 W output power, M² ≤ 1.5 (≤ 1.3 typical).",0,"Pulsed","",""],
 ["Multi-laser","1 µm · 1.5 µm","Multi-laser systems","Up to five line-cards","λc 1030–1075 nm and 1530–1565 nm, 25 mW to 125 mW output powers, with linewidths of 1 kHz and &lt;5 kHz.",0,"Systems","",""],
 ["Mid-IR","Visible to mid-IR","MIR transport fiber","Tellurite glass, 2 to 5 µm","Low-loss (&lt;0.2 dB/m) tellurite fibers and cables with AR coating options and a high damage threshold, unaffected by atmospheric water.",0,"Fibers","",""]];
/* Capabilities, as npphotonics.com and the January 2026 releases state them. */
var EVID=[
 ["ISO 9001:2015 and ITAR","An ISO 9001:2015 certified, ITAR-compliant manufacturer, able to develop and build customized laser and amplifier solutions"],
 ["Glass made in-house","Proprietary phosphate, germanate and tellurite glasses, drawn into our own fibers in Tucson, Arizona"],
 ["Space-qualified","Our fiber lasers have passed rigorous space-qualification tests with NASA, and one has flown on a mission to the International Space Station"],
 ["Patents filed December 2025","Two new U.S. applications: MWIR fiber couplers and combiners, and low-OH holmium-doped germanate glasses for 2 µm lasers"]];
/* npphotonics.com (Leadership). Text-only masthead; summaries state only published facts. */
var TEAM=[
 {g:"Leadership",name:"Naser Partovi",title:"Chief Executive Officer",sum:"Leads NP Photonics, the Tucson-based maker of specialty fiber lasers, fiber amplifiers and transport fibers."},
 {g:"Leadership",name:"Arturo Chavez-Pirson",title:"Chief Technology Officer",sum:"Company contact for the December 2025 patent filings and the Photonics West 2026 technical papers."},
 {g:"Leadership",name:"Jie Zong",title:"VP of Engineering",sum:"Heads engineering for the company’s fiber laser and amplifier products."},
 {g:"Board of Directors",name:"Nasser Peyghambarian",title:"Chairman of the Board",sum:"Led NP Photonics as chief executive from its founding in 1998; now Chairman of the Board."}];
var NEWS=[
 ["12 January 2026","NP Photonics showcases OEM‑proven fiber lasers and amplifiers at SPIE Photonics West 2026","Press release",PW26],
 ["12 January 2026","NP Photonics showcases advances in high-power fiber lasers and amplifiers, with three technical papers at Photonics West 2026","Press release","https://www.npphotonics.com/_files/ugd/210cd7_080a352d2d6447cea2d1f0b756ffc920.pdf"],
 ["12 January 2026","NP Photonics files U.S. patents on advanced glass and fiber materials for next-generation fiber lasers and amplifiers","Press release","https://www.npphotonics.com/_files/ugd/210cd7_1d0427f1cb514b639f367941b86e0b10.pdf"],
 ["24 September 2024","NP Photonics and the University of Arizona demonstrate a compact and portable optical clock","Optica","https://www.optica.org/about/newsroom/news_releases/2024/september/researchers_simplify_design_of_optical_atomic_clocks_without_compromising_performance/"],
 ["24 January 2024","NP Photonics highlights its OEM‑winning fiber lasers and amplifiers at SPIE Photonics West 2024","Business Wire","https://www.businesswire.com/news/home/20240124606461/en/NP-Photonics-Highlights-its-OEM-Winning-Fiber-Lasers-and-Amplifiers-at-SPIE-PHOTONICS-WEST-2024"]];
var SHEETS=[];
