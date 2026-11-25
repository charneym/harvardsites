var FONTS=['500 1em "Exo 2"','600 1em "Exo 2"','400 1em "Lato"','700 1em "Lato"','600 1em "Titillium Web"'];
var WEB="https://www.fouriercmc.com/";
var MAIL="jason@fouriercmc.com";
/* technology tiles: [big word, small unit, title, one line]. From fouriercmc.com (About), the Activate and The Engine company
   profiles, and Ceramic Tech Today (1 Nov 2022) on Bice and Erb, "Thermoformable boron nitride based all-ceramics",
   Advanced Materials (DOI 10.1002/adma.202203939) */
var PROPS=[
 ["Formable","","Shaped after sintering","Fully sintered flat ceramic sheets are formed into 3D parts with heat and pressure, a process invented by our founder."],
 ["0.2","mm","Fine features","A minimum feature size of 0.2 mm, held within ±0.016 mm of the nominal dimension."],
 ["<0.25–3","mm","Thin, complex walls","Low-profile, thin-walled, topographically complex parts, where no other ceramic process has an advantage."],
 ["Conductive","","Heat moves out","High thermal conductivity through the plane and within it, to spread heat and carry it away."],
 ["Insulating","","A strong dielectric","Electrically insulating with low dielectric loss, and largely transparent to radio-frequency signals."],
 ["10×","","Against aluminum","In a single-board computer testbed, a thermoformed part cooled about ten times better than an aluminum heat sink, per unit of height."]];
var ALSO=["Chemical and humidity resistant","Radiation barrier","Thermal-shock resistant","Tough and vibration resistant"];
/* applications, from fouriercmc.com (About: length scales from mm to tens of cm, and to the meter in future) and IMS 2026
   (everythingRF): [name, scale, one line, status] */
var APPS=[
 ["RF and microwave packaging","Communications","Thermoformable ceramic matrix composites that pair high thermal conductivity with low dielectric loss, for RF packaging and thermal management.","Shown at IMS 2026"],
 ["Semiconductor packaging","Millimeter scale","Thin, conformal ceramic components for semiconductor packages, where heat must leave and current must not.","Footprints from millimeters"],
 ["Boards and enclosures","Tens of centimeters","Low-profile covers formed to the components of an electronic board, or to a whole device enclosure, for passive thermal management.","Footprints to tens of centimeters"],
 ["RF windows and structures","Meter scale","Larger formed parts for RF windows and structural solutions, toward the meter length scale.","Future development"]];
var MKTS=["Communication systems","Data centers","Aerospace","Electric vehicles","Energy"];
/* people, as published on fouriercmc.com (Fourier's Team) and the Activate fellow profile */
var LEAD=[
 ["Jason Hoffman-Bice, PhD","Founder and Chief Executive Officer","Inventor of thermoformable ceramics; PhD, Northeastern University; U.S. Army veteran."],
 ["Madison Morey","R&D Materials Engineer","Demonstrated the forming of a flat sheet over a circuit board at IMS 2026."]];
var ADV=[
 ["Randall Erb, PhD","Co-Founder and Scientific Advisor","Professor, Northeastern University; co-author of the founding Advanced Materials paper."]];
var BACK=["Activate Fellowship","The Engine","Northeastern University Center for Research Innovation"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["IMS 2026","Fourier at IMS 2026: thermoformable ceramic matrix composites for RF packaging and thermal management","everythingRF","https://www.everythingrf.com/news/details/22374-fourier-ims-2026-thermoformable-ceramic-matrix-composites-for-rf-packaging-and-thermal-management"],
 ["IMS 2026","Video: Fourier forms a flat ceramic sheet over a circuit board, live on the show floor","everythingRF","https://www.everythingrf.com/videos/details/6269-ims2026-spotlight-fourier-showcases-thermoformable-ceramic-matrix-composites-for-rf-electronics"],
 ["November 2022","Thermoformed boron-based ceramics may offer a new frontier in customized electronic components","Ceramic Tech Today","https://ceramics.org/ceramic-tech-today/thermoformed-boron-based-ceramics-may-offer-new-frontier-in-customized-electronic-components/"],
 ["October 2022","Will an unexpected Northeastern lab finding lead to ‘a new frontier’ for electronics design?","Northeastern Global News","https://news.northeastern.edu/2022/10/06/electronic-designs"]];
var SHEETS=[];
