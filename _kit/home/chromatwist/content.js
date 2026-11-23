var FONTS=['300 1em "Jost"','italic 300 1em "Jost"','400 1em "Jost"','italic 400 1em "Jost"','500 1em "Jost"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
var MAIL="info@chromatwist.com";
var CT="https://chromatwist.com/";
/* products and applications: every line from chromatwist.com (/flow-cytometry, /technology, /multiphoton-microscopy,
   /potential-applications, /products, the June 2026 posts) and the University of Birmingham's Nov 2024 release.
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["CT_UV series","UV dyes for flow cytometry","355 nm and 320 nm excitation","Evaluated on PBMCs","Molecular, non-polymer, non-tandem dyes as an alternative to BUV fluorophores, emitting from the UV to the red. CT Blue on anti-CD4 gave staining indices comparable to leading UV dyes; six more colours are in manufacture.",CT+"2026/06/02/chromatwist-uv-dyes-in-multicolour-panel-on-pbmcs/","The June 2026 data"],
 ["CT_V series","Violet dyes for flow cytometry","405 nm excitation","In development","A second donor core for the violet laser, to be introduced as an alternative to BV fluorophores, extending the same emission range to more instruments.",CT+"flow-cytometry/","Flow cytometry"],
 ["Reagent dyes","Dyes for your own conjugates","Active esters and click handles","Available on request","Dyes carrying -CO₂H, -N₃, -NH₂, -SH, alkene, -Br or active ester groups, for plug-and-play conjugation to antibodies and other biomolecules.",CT+"technology/","Technology"],
 ["Imaging","Fluorophores for multiphoton microscopy","Bio-imaging","Research","Bright, photostable large Stokes shift probes for deep-tissue imaging, where the same chemistry shows promise beyond the cytometer.",CT+"multiphoton-microscopy/","Microscopy"],
 ["Chemical precursors","Triphenylene building blocks","TpNH₂, TpOEtNH₂, TpOMeNO₂ and more","Available to order","Precursors and materials from ChromaTwist’s own synthesis, for chemical synthesis and materials science, supplied in 0.3 g lots with quotes on request.",CT+"products/","Products"]];
/* key properties of the dye platform (chromatwist.com/technology) */
var EVID=[
 ["Absorption","Molar extinction coefficients of about 100,000 M⁻¹ cm⁻¹, and about 30,000 M⁻¹ cm⁻¹ at 355 nm"],
 ["Brightness","Fluorescence quantum yields of 30–70%, with the fluorophore detectable at about 10⁻⁹ M"],
 ["Stability","Stable in solution for long periods; most solid dyes are thermally stable above 250 °C"],
 ["Processability","Spin-coated, melted or 3D printed into polymer matrices, keeping their fluorescence"]];
/* chromatwist.com/about, the University of Birmingham releases (2022, 2024) and the Oct 2024 board announcement.
   Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founders",name:"Prof. Jon Preece",title:"Co-founder & CEO",sum:"Professor of Nanoscale Chemistry at the University of Birmingham, where he co-led the research that discovered the dyes."},
 {g:"Founders",name:"Prof. Alex Robinson",title:"Co-founder",sum:"Professor in the University of Birmingham’s School of Chemical Engineering and co-discoverer of the ChromaTwist fluorophores."},
 {g:"Founders",name:"Mark Shepherd",title:"Co-founder",sum:"Entrepreneur with extensive experience in licensing and spin-out companies, and ChromaTwist’s chairman through its early funding rounds."},
 {g:"Board",name:"Will Truman",title:"Non-Executive Director & Chairman",sum:"Joined in October 2024 after a decade at KPMG and CEO and CFO roles at private equity companies."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2026","Molecular (deep) UV-excitable dyes with UV to red tunable emission: multicolour panel evaluation on PBMCs","ChromaTwist",CT+"2026/06/02/chromatwist-uv-dyes-in-multicolour-panel-on-pbmcs/"],
 ["June 2026","Molecular (deep) UV-excitable dyes: BUV duplex staining evaluation on PBMCs","ChromaTwist",CT+"2026/06/02/uv-excitable-dye-duplex-staining-on-pbmc/"],
 ["March 2026","Attending the Midlands Innovation Flow Cytometry Meeting at the University of Birmingham","ChromaTwist",CT+"2026/03/03/attending-midlands-innovation-flow-cytometry-meeting-warwick-uk/"],
 ["November 2024","ChromaTwist wins an Innovate UK Smart award for a £0.5M project on UV-excitable dyes that fluoresce blue through red","University of Birmingham","https://www.birmingham.ac.uk/news/2024/chromatwist-wins-innovate-uk-smart-grant-for-0.5m-project"],
 ["October 2024","Will Truman joins ChromaTwist as Non-Executive Director and Chairman","ChromaTwist",CT+"2024/10/01/will-truman-joins-chromatwist-a-ned-and-chairman/"],
 ["December 2023","ChromaTwist UV-excitable molecular dye antibody conjugates for flow cytometry","ChromaTwist",CT+"2023/12/08/chromatwist-uv-excitable-molecular-dye-antibody-conjugates-for-flow-cytometry/"]];
var SHEETS=[];
