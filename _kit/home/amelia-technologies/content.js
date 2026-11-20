var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"'];
var WEB="https://amelia-technologies.com/";
var MAIL="info@ameliatechnologies.com";
var TEL="202-803-2614",TELH="tel:+12028032614";
var MAP="https://www.google.com/maps/search/?api=1&query=1121+5th+St+NW+Washington+DC+20001";
var RP="https://reporter.nih.gov/project-details/";
/* programs: NIH RePORTER records for Amelia Technologies LLC (titles, mechanisms, amounts and dates from the award records and abstracts).
   [name, stage, award line, what it is, appl id] */
var PROG=[
 ["EcoWell","SBIR Phase II · NIEHS · 2026","$1,037,876 · June 2026 to May 2028","A bench-top unit that turns a standard six-well plate into six programmable micro-incubators, each controlling temperature, ultraviolet light and CO₂, with NGSS-aligned kits that let students measure how pollutants and UV affect living things.","11315145"],
 ["SphereDNA","SBIR Phase I · NIEHS · 2025","$303,165 · August 2025 to July 2026","Label-free, high-throughput genotoxicity screening: cells are set in 50 µm agarose microspheres, and DNA damage is read as a change in electrical impedance as damaged DNA migrates, aimed at nanomaterials such as titanium dioxide and zinc oxide under UV.","11248550"],
 ["UValidate","STTR Phase II · NIEHS","Through August 2025","Screens sunscreen active ingredients, alone and in combination, on donor-derived keratinocytes, melanocytes and fibroblasts under UVB and UVA, measuring reactive oxygen species, DNA lesions and micronuclei rather than UV blocked alone.","10707098"],
 ["Immuno-CometChip","STTR Phase II · NIEHS","Through April 2021","An automated comet assay that isolates basal keratinocytes from reconstructed human epidermis, confirms their origin by β1-integrin staining and quantifies their DNA damage, to reduce animal use in screening skin genotoxins.","9698357"]];
/* people, as listed on amelia-technologies.com/meet-our-team (titles verbatim); summaries from NIH RePORTER and the publications listed on their site */
var TEAM=[
 {g:"Leadership",name:"Mark Chirikjian",title:"CEO",sum:""},
 {g:"Leadership",name:"Dr. Peter Sykora",title:"CSO",sum:"Principal investigator on the EcoWell, SphereDNA and UValidate awards."},
 {g:"Leadership",name:"Lucia Dussan",title:"COO",sum:"Co-author of the 2024 studies of UV nail dryers and of Klotho and UVA damage."},
 {g:"Science and education",name:"Brian Ell",title:"Education consultant",sum:"A principal investigator on EcoWell; co-author of the 2023 Skin Immuno-CometChip study."},
 {g:"Science and education",name:"Jia Fu",title:"Scientist",sum:""}];
/* news and publications: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2026","NIH NIEHS awards a $1.04M SBIR Phase II grant for EcoWell, smart incubation technology for environmental science labs","NIH RePORTER",RP+"11315145"],
 ["August 2025","SBIR Phase I award for SphereDNA, the electrochemical measurement of genotoxicity in agarose microspheres","NIH RePORTER",RP+"11248550"],
 ["August 2024","Temperature is a key factor governing the toxic impact of UV-emitting nail dryers on human skin cells","Int. J. Toxicology","https://doi.org/10.1177/10915818241268617"],
 ["June 2024","Klotho-containing serum protects from ultraviolet A induced damage in vitro","Medical Research Archives","https://doi.org/10.18103/mra.v12i6.5519"],
 ["March 2023","Skin Immuno-CometChip in 3D vs. 2D cultures to screen topical toxins and skin-specific cytochrome inducers","Genes (Basel)","https://doi.org/10.3390/genes14030630"]];
var SHEETS=[];
