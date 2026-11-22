var FONTS=['400 1em "Cormorant Garamond"','italic 400 1em "Cormorant Garamond"','500 1em "Cormorant Garamond"','italic 500 1em "Cormorant Garamond"','400 1em "Poppins"','500 1em "Poppins"','600 1em "Poppins"'];
var MAIL="info@potentiometricprobes.com";
var LI="https://www.linkedin.com/company/potentiometricprobes/";
var STORE="https://potentiometricprobes.com/store";
var RP="https://reporter.nih.gov/project-details/";
/* dye families: every line from potentiometricprobes.com (home, /product-overview, /how-vsds-work, /cardiac, /store).
   [family, title, dyes, note, detail, link, link label] */
var PIPE=[
 ["Classic dyes","The ANEP family","Di-4-ANEPPS · Di-8-ANEPPS · Di-1/Di-2-ANEPEQ · Di-3/Di-4-ANEPPDHQ","Excitation 510–540 nm","Fast-response voltage-sensitive dyes used for cardiac and neuronal recordings for decades. Their signal change is modest, but bright, highly stable fluorescence still gives excellent signal-to-noise.",STORE,"Store"],
 ["ElectroFluor™","Fluorinated dyes","ElectroFluor530 · ElectroFluor530s · ElectroFluor550","Excitation 530–550 nm · 2P at 1060 nm","Fluorination improves photostability, allowing stronger excitation with less photobleaching, and fine-tunes the spectra so the dyes sit alongside other fluorescent labels. ElectroFluor550 is compatible with ratiometric imaging.","https://potentiometricprobes.com/product-overview","Product overview"],
 ["ElectroFluor™","Long-wavelength dyes","ElectroFluor630 · ElectroFluor630p · ElectroFluor640","Excitation 610–650 nm","Red-shifted dyes for deeper imaging in cardiac tissue and whole hearts, compatible with ratiometric imaging. ElectroFluor630 records optical action potentials in beating human stem cell-derived cardiomyocytes.","https://potentiometricprobes.com/cardiac","Cardiac research"],
 ["New · chromene","Far-red voltage imaging","ElectroFluor730p","Excitation 730 nm","Built on the novel chromene electron donor described in the company’s 2023 PNAS paper: far-red spectra, ratiometric use to remove motion artifacts, and full compatibility with optogenetic stimulation.","https://doi.org/10.1073/pnas.2305093120","PNAS 2023"],
 ["Specialty","Long-wavelength and other probes","RH1691 · JPW1132 · CytoVolt1 · CytoVolt2 · TMRE · TMRM","Pre-aliquoted, pre-dried","Long-wavelength and specialty probes, and the rhodamine dyes TMRE and TMRM. Every dye ships pre-aliquoted and pre-dried in amounts suited to typical assays, so no stock solutions to prepare.",STORE,"Store"]];
/* potentiometricprobes.com/about (co-founders), PubMed and NIH RePORTER. Text-only masthead. */
var TEAM=[
 {g:"Co-founders",name:"Leslie Loew, PhD",title:"Co-founder · Professor, UConn Health",sum:"Every dye in the Potentiometric Probes catalogue was originally designed and synthesised in his lab at UConn Health, which supplied them to researchers for many years before the company launched in 2017."},
 {g:"Co-founders",name:"Corey Acker, PhD",title:"Co-founder · Assistant Professor, UConn Health",sum:"Principal investigator on the company’s NIH SBIR awards, including its first Phase II; has presented voltage-sensitive dye technology at the NOtiCE cardiac optics workshop in Florence."},
 {g:"Co-founders",name:"Ping Yan, PhD",title:"Co-founder · Assistant Professor, UConn Health",sum:"First author of the 2023 PNAS paper introducing new long-wavelength VSDs for deeper imaging in hearts and compatibility with optogenetics."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["February 2026","Multimodal optical imaging combining ElectroFluor630 with genetically encoded calcium, glutamate or voltage indicators, with UConn Health and Stanford","Neurophotonics","https://pubmed.ncbi.nlm.nih.gov/42245433/"],
 ["January 2024","The NHLBI funds an SBIR to build a palette of near-infrared voltage sensors for cardiac research and safety pharmacology","NIH RePORTER",RP+"10822619"],
 ["October 2023","Potentiometric Probes receives its first Phase II SBIR from the NIH, for optimised ratiometric voltage-sensitive dyes","NIH RePORTER",RP+"10699121"],
 ["September 2023","Jack Rogers’ group at the University of Alabama publishes optical mapping of cardiac electromechanics in beating in vivo hearts","Biophysical Journal","https://www.cell.com/biophysj/fulltext/S0006-3495(23)00620-3"],
 ["August 2023","New long-wavelength VSDs for better imaging depth in cardiac tissue and whole hearts, compatible with optogenetics (Yan et al.)","PNAS","https://doi.org/10.1073/pnas.2305093120"]];
var SHEETS=[];
