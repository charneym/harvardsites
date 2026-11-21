var FONTS=['400 1em "Playfair Display"','italic 400 1em "Playfair Display"','500 1em "Playfair Display"','italic 500 1em "Playfair Display"','400 1em "Instrument Sans"','500 1em "Instrument Sans"','600 1em "Instrument Sans"'];
var WEB="https://www.proteincapturescience.com/";
var MAIL="contact@proteincapturescience.com";
var SUPPORT="support@proteincapturescience.com";
var TEL="+18557278247";
var ADDR="1275 Kinnear Road, Suite 264, Columbus, OH 43212";
var MAP="https://www.google.com/maps/search/?api=1&query=1275+Kinnear+Road+Columbus+OH+43212";
var STORE="https://www.proteincapturescience.com/products";
var UPD="https://www.proteincapturescience.com/updates";
/* products: from the company's online store (proteincapturescience.com/products, November 2026). [name, format, detail, price] */
var PRODS=[
 ["iCapTag column, 1 mL","FPLC column","A prepacked column for single-step capture of a tagged target and release of the tagless protein with a small pH shift.","$245"],
 ["iCapTag columns, 5 mL","FPLC column · 16 × 26 mm or 8 × 100 mm","Two prepacked 5 mL column formats on the same chemistry.","from $895"],
 ["iCapTag high-throughput sets","8 gravity columns · 200 µL or 600 µL","High-throughput sets of eight small gravity columns, for many purifications side by side.","from $583"],
 ["iCapTag bulk resin","1.5 mL, 10 mL or 25 mL","Resin to pack your own columns, at the volume your process needs; custom volumes on request.","from $293.14"],
 ["iCapMag magnetic beads","100 µL","The first magnetic beads designed for tagless protein purification, powered by the same self-removing tag.","$114.99"],
 ["iCapTag Troubleshooting Kit","Kit","A kit for troubleshooting a purification on the iCapTag platform.","$808"]];
/* team: the management team as published on the company's About page; no portraits are published there */
var TEAM=[
 ["Izabela Gierach, Ph.D., MBA","Co-founder and Chief Executive Officer","More than 17 years of scientific research, business and management consulting experience; she worked on intein technologies at Princeton University."],
 ["David W. Wood, Ph.D.","Co-founder and Chief Scientific Officer","Professor of Chemical and Biomolecular Engineering at The Ohio State University, with more than 25 years developing intein-based biotechnologies and bioprocess experience at Amgen and BMS."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 24–26, 2025","At NIIMBL in Washington, DC: “A Self-Removing Tandem Affinity Tag for Improved Purity of Microbially Expressed Recombinant Proteins”, with iCapMag introduced","Company updates",UPD],
 ["October 30, 2024","“Self-Removing Affinity Tags to Streamline Preclinical and Clinical Manufacturing Under a Single Purification Platform”, AIChE Annual Meeting","AIChE","https://aiche.confex.com/aiche/2024/meetingapp.cgi/Paper/695070"],
 ["October 2023","“A Convenient Self-Removing Affinity Tag Method for the Simple Purification of Tagless Recombinant Proteins”","Current Protocols","https://currentprotocols.onlinelibrary.wiley.com/doi/full/10.1002/cpz1.901"],
 ["2022","Protein Capture Science accelerates medical therapies","Rev1 Ventures","https://www.rev1ventures.com/blog/protein-science-capture-accelerates-medical-therapies/"],
 ["August 25, 2021","The iCapTag protein purification platform: bridging research and manufacturing","BioProcess International","https://bioprocessintl.com/sponsored-content/the-icaptag-protein-purification-platform-bridging-research-and-manufacturing/"],
 ["February 21, 2020","Professor’s startup tackles biopharmaceutical manufacturing problem","Ohio State Engineering","https://engineering.osu.edu/news/2020/02/professors-startup-tackles-biopharmaceutical-manufacturing-problem"]];
var SHEETS=[];
