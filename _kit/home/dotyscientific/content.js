var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','500 1em "IBM Plex Mono"'];
var WEB="https://dotynmr.com/";
var TEL="803-788-6497",TELH="tel:+18037886497";
var TELS="803-738-6832",TELSH="tel:+18037386832";
var MAIL="sales@dotynmr.com",INFO="info@dotynmr.com",SVC="service@dotynmr.com";
var MAP="https://www.google.com/maps/search/?api=1&query=700+Clemson+Rd+Columbia+SC+29229";
/* product lines, from the firm's Products, THz and mmw and Achievements pages */
var LINES=[
 ["Solids NMR probes","MAS · wideline · HR-MAS","Narrow- and wide-bore H/X, H/X/Y and H/F/X/Y magic-angle-spinning probes up to 1200 MHz, for solids, semi-solids, tissues and lossy liquids, with No-E coils for ultra-low electric fields and low decoupler heating.","https://dotynmr.com/products/solids-nmr-probes/"],
 ["Ultra-low-temperature probes","ULT · with or without DNP","High-efficiency H/X or H/X/Y RF up to 1100 MHz and a high-efficiency microwave cavity, with no special cryo-cooling system: they work with standard liquid-helium recycling.","https://dotynmr.com/products/solids-nmr-probes/wb-ultra-range-mas-dnp-probe/"],
 ["MRI RF coils","3 T to 15.2 T · pre-clinical","Single-frequency and dual-tuned H/X and H/F volume coils, surface and curved surface coils, and larger coils for primates, knees and extremities, built on Litz-foil designs that outperform the birdcage.","https://dotynmr.com/products/high-field-mri-coils/"],
 ["PFG and diffusion probes","Z-gradient · to 300 °C","Pulsed-field-gradient probes that measure the lowest diffusion coefficients over the largest sample region with 1% gradient uniformity, and high-resolution liquids probes to 300 °C.","https://dotynmr.com/products/diffusion-pfg-probes/"],
 ["THz and mmw components","70 GHz to 1.5 THz","Laminate-lined waveguides (US patent 11,978,943), HE11 launchers, ultra-low-loss miter bends and bidirectional couplers: passive components for overmoded HE11 transmission.","https://dotynmr.com/thz-and-mmw/"]];
/* milestones, from the Achievements page */
var FIRSTS=[["1982","A 7 mm MAS probe spinning 5 kHz, so stable it could be turned upside down while spinning"],
 ["1984","The first multinuclear ¹H/X probes"],["1987","The first actively shielded gradient probes"],
 ["1997","The first Low-E two-coil liquids/solids MAS probe"],["2017","Quad-MAS: four channels, H/X/Y/Z"],
 ["2024","A 15.2 T ¹H–¹⁹F/X mouse imaging coil"],["2026","An H/F/X/Y probe for high resolution up to 1200 MHz"]];
var TEAM=[
 {g:"Leadership",name:"F. David Doty, PhD",title:"Founder, President, CEO, Chief Scientist, Chairman",sum:"PhD in physics, University of South Carolina. More than 30 patents in NMR, RF, turbomachinery and heat transfer."},
 {g:"Leadership",name:"Judy M. Doty",title:"Co-Founder, Operations Manager, Board",sum:"Part of day-to-day operations since the company began; runs operations, marketing and human resources."},
 {g:"Leadership",name:"David McCree, MS",title:"Secretary/Treasurer, Business Manager, Board",sum:"Joined in 1996 and an officer since 2000. MS in physics, University of South Carolina."},
 {g:"Science and engineering",name:"Paul Ellis, PhD",title:"Senior Scientist, Chemist",sum:"A leader in NMR with 188 publications; formerly a PNNL Fellow, and adjunct professor at the University of South Carolina."},
 {g:"Science and engineering",name:"Laura L. Holte, PhD",title:"Sales Manager, Biochemist",sum:"PhD in analytical chemistry, Montana State University; an NIH post-doctoral fellow before joining in 1998."},
 {g:"Science and engineering",name:"Glenn Doty",title:"Simulations, noble-metal plating",sum:"With the company since 1990, from MRI gradient-coil simulations to COMSOL and CST modelling today."},
 {g:"Science and engineering",name:"JB Spitzmesser",title:"Co-Founder, Senior Manufacturing Engineer",sum:"A founding member, expert in every method of manual machining; formerly Vice President and a board member."}];
/* news: only items with a working link */
var NEWS=[
 ["7 Sep 2026","NIH NIGMS SBIR Phase II award: low-loss bidirectional THz couplers to enable affordable MAS-DNP-NMR","NIH RePORTER","https://reporter.nih.gov/project-details/11409429"],
 ["22 May 2026","With the Weizmann Institute: ultra-high-field dual-frequency Litz-foil RF coils for multinuclear pre-clinical MRI","J. Magn. Reson. Open","https://doi.org/10.1016/j.jmro.2026.100221"],
 ["5 Apr 2026","The new H/F/X/Y ultra-high-field, narrow-bore, No-E two-coil NMR probe","Doty Scientific","https://dotynmr.com/the-new-h-f-x-y-ultra-high-field-nb-no-e-two-coil-nmr-probe/"],
 ["1 Aug 2025","Ever higher: 15.2 T MRI, ¹H and ²H imaging","Doty Scientific","https://dotynmr.com/ever-higher-15-2-t-mri-1h-and-2h-imaging/"]];
var SHEETS=[];
