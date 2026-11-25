var FONTS=['300 1em "Barlow Semi Condensed"','400 1em "Barlow Semi Condensed"','500 1em "Barlow Semi Condensed"','400 1em "Barlow"','500 1em "Barlow"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var MAIL="mailto:info@divbio.com";
var DB="https://www.divbio.com/";
/* Product lines, from divbio.com (About us, the product menu and the Planet-Safe® catalogue). [line, kind, name, range, detail, link, link label] */
var PROD=[
 ["Planet-Safe®","Cell culture","Plant-based labware","Dishes, microplates, weigh boats, spoons","100 mm and 150 mm cell culture dishes (also with grid), 96-well F- and U-bottom and 6-well microplates, weigh boats and sampling spoons, made from sugarcane PLA.",DB+"planet-safe/","Planet-Safe® range"],
 ["Labels","Cryogenic and freezer","Cryo-Tags® and Tough-Tags®","Cryo-Babies®, Tough-Spots®, Cryo-Clear™","Cryogenic and freezer labels for long-term storage of vials, microtubes and freezer boxes, including laser-printable Cryo-Tag® sheets and application-specific labels.",DB+"labels/","Labels"],
 ["Label accessories","Print and apply","Label LIVE and the Tough-Tag® Station","Software, printers, writers and pens","Label LIVE label design software for Windows and Mac with templates, plus printers, the Tough-Tag® Station, TubePopper and write-protect labels.",DB+"label-accessories/","Label accessories"],
 ["Sample cooling","Benchtop","CoolSafe and the Benchtop Cryo-Station","Thermal Microbeads, Glacierbrand™ ice pans","Cooling chambers and systems, Thermal Microbeads, ice pans, buckets and reservoir coolers that keep samples cold at the bench.",DB+"sample-cooling/","Sample cooling"],
 ["Liquid handling","Microplate and pipetting","Bio-Pure reagent reservoirs","Pipetting aids, well orienters, plate stands","Reagent reservoirs and pipetting aids, well orienters, well pads and well plate stands for microplate work.",DB+"liquid-handling/","Liquid handling"],
 ["Tissue culture","Sealing and storage","PetriSeal™ and Breathable Petri Strips","PetriStickers, sealing films, tube racks","Petri dish and container seals, breathable strips and microplate sealing films, alongside tube racks, freezer boxes and dividers.",DB+"tissue-culture/","Tissue culture"]];
/* recognition, set as one credit line (CJ) */
var CREDITS=["My Green Lab ACT® label","USDA BioPreferred®, rated 98%","Bonsucro-certified sugarcane","ASTM D6400 compostable","ASTM D6002 non-phytotoxic","Biotech Week Boston Sustainability Initiative Award 2024"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["March 2026","Planet-Safe® plant-based labware at analytica 2026 in Munich, hall A3, stand 242","analytica","https://exhibitors.analytica.de/ausstellerportal/2026/aussteller/ausstellerdetails/planet-safe-diversified-biotech/?elb=279.1100.5030.1.111"],
 ["June 2025","Greg Kwak on the Science and Healthcare Sustainability Podcast: plant-based cell culture consumables and single-use plastic waste","Diversified Biotech",DB+"planet-safe-science-and-healthcare-sustainability-podcast"],
 ["October 2024","Planet-Safe® wins the Biotech Week Boston Sustainability Initiative Award","Diversified Biotech",DB+"planet-safe-biotech-week-boston"],
 ["May 2024","Planet-Safe® culture dishes and microplates receive My Green Lab ACT® labels, the first 100% plant-based ACT-labelled cell cultureware","Diversified Biotech",DB+"planet-safe-act-label"],
 ["February 2024","Planet-Safe® becomes the first laboratory consumable with USDA BioPreferred® status, rated 98%","Planet-Safe®","https://www.planetsafe.com/sustainability"]];
var TEAM=[];
var SHEETS=[];
