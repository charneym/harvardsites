var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var WEB="https://syracusebiolabs.com/";
/* no company email is published (syracusebiolabs.com is a Squarespace placeholder); this is the published address of the
   award's principal investigator at Syracuse University (FNSSI bioforensics lab page, fnssi-bioforensics.syr.edu) */
var MAIL="mamarcia@syr.edu";
var ADDR="Camillus, New York";
var MAP="https://www.google.com/maps/search/?api=1&query=Camillus+NY";
var RP3="https://reporter.nih.gov/project-details/11369597";
var RP2="https://reporter.nih.gov/project-details/11065351";
var RP1="https://reporter.nih.gov/project-details/10324639";
var PAT="https://patents.google.com/patent/US12344834B2/en";
/* program: NIH RePORTER (NIGMS STTR 1R41GM140530-01A1, 2R42GM140530-02, 5R42GM140530-03) and US 12,344,834 B2.
   [stage, title, detail line, text, link, link label] */
var PROG=[
 ["Phase I · 2021–2023","Proof of concept","NIGMS STTR · $218,846","A novel method for improved separation of metagenomic samples for preservation and identification. Phase I demonstrated that the Syracuse Method outperformed currently available commercial purification kits.",RP1,"NIH RePORTER"],
 ["Phase II · 2025–2027","Toward a commercial kit","NIGMS STTR · $1,045,140 to date","Commercialization of the phylogenetic cell separation method for downstream purification of nucleic acids, with five aims directed toward fieldable cell and DNA purification modules for metagenomic samples.",RP3,"NIH RePORTER"],
 ["Granted · July 1, 2025","US 12,344,834 B2","Syracuse University · priority 2019","Phylogenetic-based differential cell separation and DNA extraction: size-exclusion filtration and differential cell lysis that keep bacterial, plant and animal cells in separate fractions. Inventors Michael Marciano and Molly Dunegan.",PAT,"Google Patents"]];
/* applications named in the Phase II abstract */
var APPS=["Human microbiome research","Healthcare","Microbial research","Forensic identification","DNA-based ecological research","Plant and microbial geosourcing"];
/* people: as named on the NIH awards and the patent; no portraits are published */
var TEAM=[
 ["Mark P. McPike, Ph.D.","Contact principal investigator","Leads the Phase II STTR award for Syracuse BioLabs. A chemist, he earned his Ph.D. at Syracuse University in 2001."],
 ["Michael A. Marciano, Ph.D.","Principal investigator, Syracuse University","Director of Research at Syracuse University’s Forensic and National Security Sciences Institute and Professor of Practice. Principal investigator of the Phase I award and co-inventor of the method."],
 ["Molly Dunegan","Co-inventor","Co-inventor, with Michael Marciano, of the phylogenetic-based differential cell separation and DNA extraction method patented by Syracuse University."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 30, 2026","NIGMS continues the Phase II STTR award ($534,278) to commercialize the phylogenetic cell separation method","NIH RePORTER",RP3],
 ["July 9, 2025","Phase II STTR awarded ($510,862): commercialization of a phylogenetic cell separation method for purifying nucleic acids","NIH RePORTER",RP2],
 ["July 1, 2025","US Patent 12,344,834 granted for phylogenetic-based differential cell separation and DNA extraction","Google Patents",PAT],
 ["September 13, 2021","Phase I STTR awarded ($218,846) for a novel method to separate metagenomic samples for preservation and identification","NIH RePORTER",RP1]];
var SHEETS=[];
