var FONTS=['500 1em "Barlow Semi Condensed"','600 1em "Barlow Semi Condensed"','400 1em "Inter"','500 1em "Inter"'];
var WEB="https://massbaytech.com/";
var MAIL="mailto:sales@massbaytech.com";
var EMAIL="sales@massbaytech.com";
var TEL="tel:+17813448809";
var ADDR="378 Page Street, Stoughton, MA 02072";
var MAP="https://www.google.com/maps/search/?api=1&query=378+Page+Street+Stoughton+MA+02072";
var ISO="https://massbaytech.com/s/20250807-Massachusetts-Bay-Single-Site-ISO-9001-2015-SM.pdf";
var MWJ="https://www.microwavejournal.com/ext/resources/pdf-downloads/Puzzler/May-2025-Fabs--Labs.pdf";
var ELE="https://exhibitors.electronica.de/ausstellerportal/2026/aussteller/ausstellerdetails/massachusetts-bay-technologies/?elb=809.1100.11686.1.111";
var CAT="https://massbaytech.com/s/MBT-Catalog-2022.pdf";
/* products: massbaytech.com (Products, RF/Microwave Diode Products, Passive Products, Single Layer Ceramic Capacitors, Thin Film Products),
   the 2022 RF/Microwave Semiconductors Product Guide and Microwave Journal "Fabs & Labs", May 2025. [label, name, sub, detail, link, link label] */
var PROD=[
 ["Diodes","RF/microwave diodes","Silicon and GaAs","Tuning varactors, multiplier and step recovery diodes, PIN, limiter and beam lead PIN diodes, Schottky mixer and detector diodes and phase detectors, current and obsolete.",WEB+"rf-microwave-diode-products2","Diodes"],
 ["Since 2016","Point contact diodes","Ka, X and S–X band","Mixer and detector diodes from the point-contact line MBT acquired from MACOM Technology Solutions in 2016, for commercial and mission-critical defence programmes.",CAT,"Product guide"],
 ["Since 2019","Single layer ceramic capacitors","MSA · MSM · MSB · MR/MM","Edge-to-edge, margin, dual-pad and row capacitors, in production since October 2019, with an online parallel-plate design tool for sizing them.",WEB+"single-layer-capacitor-products","Capacitors"],
 ["Since 2019","Thin film and passives","Standard and custom","Thin film resistor chips and attenuator pads, spiral inductors, and MIS, MIC mounting and binary chip capacitors. The thin film line launched in January 2019.",WEB+"thin-film-products-1","Thin film"]];
/* package styles: massbaytech.com/diode-package-styles-1 */
var PKG=["Diode chip","Beam lead","Ceramic pill","Ceramic surface mount","Glass axial lead"];
/* milestones: Microwave Journal, May 2025; ISO certificate (TÜV SÜD, valid from Aug 11, 2025) */
var MILE=[
 ["1999","Founded in Stoughton by Brian and Charlie Fallon, on a fabless model"],
 ["2010","Own wafer processing fab up and running, under two years after the 2008 decision"],
 ["2016","Point-contact diode line acquired from MACOM Technology Solutions"],
 ["2019","Thin film line launched in January; SLC capacitor production from October"],
 ["2025","ISO 9001:2015 certificate reissued by TÜV SÜD, valid to August 2028"]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","Massachusetts Bay Technologies exhibits at electronica 2026 in Munich","electronica 2026",ELE],
 ["August 2025","TÜV SÜD certifies MBT’s Stoughton site to ISO 9001:2015 for the manufacture and testing of microwave semiconductors","MBT",ISO],
 ["May 2025","Microwave Journal profiles MBT in “Fabs & Labs”: from fabless start-up to its own wafer fab","Microwave Journal",MWJ]];
var SHEETS=[];
