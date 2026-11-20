var FONTS=['300 1em "Cormorant Garamond"','italic 300 1em "Cormorant Garamond"','400 1em "Cormorant Garamond"','italic 400 1em "Cormorant Garamond"','500 1em "Cormorant Garamond"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"','500 1em "Cinzel"','600 1em "Cinzel"'];
var WEB="https://www.olmedabio.com/";
var ADDR="3210 Merryfield Row, San Diego, CA 92121";
var MAP="https://www.google.com/maps/search/?api=1&query=3210+Merryfield+Row+San+Diego+CA+92121";
var RP_UM="https://reporter.nih.gov/project-details/11312222";
var RP_RB="https://reporter.nih.gov/project-details/11406648";
/* programs: from the NIH RePORTER abstracts of 2R42CA291243-02 and 1R42CA314557-01 (NCI STTR).
   [program, indication, stage label, detail, link, link label] */
var PROG=[
 ["Uveal melanoma risk assay","Metastatic risk in uveal melanoma, the most common primary intraocular cancer","STTR Phase II · CLIA-LDT","A 21-protein aqueous humor panel, measured by proximity extension assay with qPCR readout, to classify metastatic risk without a tumor biopsy. Phase II covers CLIA analytical validation on 100 biobanked samples and multi-center clinical validation on 50 prospective samples.",RP_UM,"NIH RePORTER"],
 ["Aqueous humor genome test","Retinoblastoma and other intraocular cancers that cannot be biopsied safely","STTR Phase I · 2026","Ultra-low-input, capture-free whole-genome sequencing of tumor cfDNA in a single tube, reporting genome-wide copy number changes, SNVs and indels, as a CLIA laboratory-developed test run at CHLA’s Center for Personalized Medicine.",RP_RB,"NIH RePORTER"]];
/* partners named in the award abstracts: type only (BW/CJ) */
var PARTNERS=["Children’s Hospital Los Angeles","University of Southern California","USC/CHLA Ophthalmology","CHLA Center for Personalized Medicine","LuminoDx","National Cancer Institute"];
/* people: the only person named on the company's public record (contact PI on all four NCI awards); no portrait is published */
var TEAM=[
 {g:"Principal investigator",name:"Liya Xu, Ph.D.",title:"Principal investigator, NCI STTR awards",sum:"Assistant Professor of Research Ophthalmology at the Keck School of Medicine of USC and the Vision Center at Children’s Hospital Los Angeles. Her lab develops aqueous humor as a liquid biopsy platform for ocular cancers, especially retinoblastoma."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 8, 2026","NCI awards a $1,028,948 STTR Phase II grant to take the uveal melanoma assay to a CLIA-validated test","NIH RePORTER",RP_UM],
 ["September 7, 2026","NCI funds an STTR Phase I project ($398,880) for whole-genome sequencing of aqueous humor cfDNA","NIH RePORTER",RP_RB],
 ["May 23, 2025","NCI awards a $55,000 supplement to the uveal melanoma Phase I project","NIH RePORTER","https://reporter.nih.gov/project-details/11264264"],
 ["September 13, 2024","NCI awards the first STTR Phase I grant ($396,161) for an aqueous humor multiplex assay","NIH RePORTER","https://reporter.nih.gov/project-details/11006367"]];
var SHEETS=[];
