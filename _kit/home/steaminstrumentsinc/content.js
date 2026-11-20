var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','500 1em "IBM Plex Mono"','600 1em "Josefin Sans"'];
var WEB="https://steaminstrumentsinc.com/";
var TEL="608-960-9000",TELH="tel:+16089609000";
var MAIL="thomas.kelly@steaminstruments.com";
var MAP="https://www.google.com/maps/search/?api=1&query=931+E+Main+St+Madison+WI+53703";
/* where the technology pushes boundaries: the key areas listed on steaminstrumentsinc.com, each glossed from the company's
   own federal award abstracts (NSF 2450656, NIST CHIPS 70NANB24H277, NIH 1R43GM135959) and its public company profile */
var APPS=[
 ["Direct-from-tissue mapping","Life sciences","Biomolecule mapping and quantification straight from tissue. The long-term goal of the company’s NIH-funded work: to enable identification and mapping of every molecule in a cell."],
 ["Ultra-high-mass biomolecules","Life sciences","A quantum ion detector with near-complete detection efficiency for almost any mass ion or biomolecule, developed with NIH support as a new superconducting detector technology for large biomolecules."],
 ["Hydrogen and lithium, sub-micron","Energy materials","Mapping the low-Z elements that electron microscopy struggles to measure, to investigate the role of hydrogen and lithium in energy materials."],
 ["Semiconductor dopants","CHIPS Metrology","Rapid, accurate, high-resolution ion microscopy on a prototype instrument, for dopant concentration and positioning and compositional identification in semiconductor materials."]];
/* federal awards, from NSF Award Search, NIH RePORTER and NIST CHIPS */
var AWARDS=[
 ["2025","NSF SBIR Phase II","Ion Optics Optimized for Nanoscale Stigmatic Imaging","$1,249,623"],
 ["2024","NIST CHIPS Metrology SBIR","Rapid and Accurate High-Resolution Ion Microscopy for Semiconductor Metrology","$289,529"],
 ["2022","NSF SBIR Phase I","Optimized Extraction and Projection Optics for Ion Point Sources","$255,261"],
 ["2020","NIH NIGMS SBIR Phase I","A New Superconducting Detector Technology for Mass Spectrometry of Large Biomolecules","$221,263"]];
var TEAM=[
 {g:"Founders",name:"Thomas F. Kelly, PhD",title:"Founder, President and CEO",sum:"PhD in materials science and engineering, MIT. Professor at UW–Madison from 1983 to 2002; founded Imago Scientific Instruments in 1999, where he created the Local Electrode Atom Probe."},
 {g:"Founders",name:"John A. Hunt",title:"Founder, Chairman and CTO",sum:""},
 {g:"Founders",name:"Igor Veryovkin",title:"Founder and Director of Research",sum:"Principal investigator on the company’s DOE SBIR work in laser ion imaging mass spectrometry."}];
/* news: only items with a working link */
var NEWS=[
 ["7 Jul 2025","NSF SBIR Phase II award: ion optics optimized for nanoscale stigmatic imaging","NSF","https://www.nsf.gov/awardsearch/show-award?AWD_ID=2450656"],
 ["2024","CHIPS Metrology SBIR award: rapid and accurate high-resolution ion microscopy for semiconductor metrology","NIST","https://www.nist.gov/chips/steam-instruments-inc-madison"],
 ["8 Sep 2022","NSF SBIR Phase I award: optimized extraction and projection optics for ion point sources","NSF","https://www.nsf.gov/awardsearch/show-award?AWD_ID=2136792"],
 ["15 Feb 2020","NIH SBIR award: a new superconducting detector technology for mass spectrometry of large biomolecules","NIH RePORTER","https://reporter.nih.gov/project-details/9907501"]];
var SHEETS=[];
