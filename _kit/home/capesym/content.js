var FONTS=['400 1em "Cormorant Garamond"','italic 400 1em "Cormorant Garamond"','500 1em "Cormorant Garamond"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','500 1em "IBM Plex Mono"','700 1em "Big Shoulders Display"'];
var WEB="https://capesym.com/";
var TEL="+1 (508) 653-7100",TELH="tel:+15086537100";
var MAIL="info@capesym.com";
var MAP="https://www.google.com/maps/search/?api=1&query=6+Huron+Drive+Natick+MA+01760";
/* research programmes, from the firm's Research Portfolio and New Developments pages and NIH RePORTER */
var PROGS=[
 ["Medical imaging","NIH NIBIB · SBIR Phase II","High-resolution, direct-conversion flat-panel X-ray imagers built on perovskite sensor films: sharper images at a lower dose, for mammography, general radiography and tomosynthesis.","https://reporter.nih.gov/project-details/11395276","Award"],
 ["Very large crystals","4 in × 12 in today","Manufacturing technology for very large high-energy-resolution and dual gamma-neutron scintillators, with essentially no loss of performance against smaller crystals. The roadmap scales to 6 inches in diameter.","",""],
 ["New scintillators","Energy resolution · timing","Pushing the energy resolution and timing of scintillators with new materials such as cesium zinc chloride and cesium copper iodide, and gallium oxide for ultrafast, radiation-hard detection.","https://pubs.aip.org/aip/jap/article/136/6/064503/3307501/Gallium-oxide-semiconductor-based-large-volume","Paper"],
 ["Directional detectors","For mobile platforms","Detector modules based on high-energy-resolution SrI₂ crystals that give accurate direction to a radioactive source, to steer a mobile host such as a drone towards it.","",""],
 ["Detectors for satellites","Small and large","Modular radiation detectors that assemble to a wide range of frontal areas, with radiation-hard electronics designed for very high failure redundancy, for low-cost deployment in space.","",""]];
/* ScintiClear product lines, from the Products page */
var PRODS=["SiPM detectors","Standard PMT detectors","Compact PMT detectors","Compact spectrometer","Developer kit","Sensors"];
/* capabilities, from the Capabilities page */
var CAPS=[
 ["Materials processing","Reactive-atmosphere purification stations and tens of crystal-growth furnaces: Bridgman, Czochralski, float zone and travelling heater method. Thin- and thick-film semiconductor and scintillator coatings for X-ray, neutron and multi-modal imaging plates."],
 ["Simulation","Decades of high-fidelity thermo-fluid transport models used to design purification and crystal-growth equipment, and Geant4 Monte Carlo simulation of particles passing through matter to optimise detector modules."],
 ["Test and characterisation","X-ray diffraction for crystal orientation, I-V, C-V and Hall measurement, DLTS and PICTS, FTIR and UV-VIS spectroscopy, full radiation-detector characterisation, and Xtalscope wafer-scale defect mapping."]];
var TEAM=[
 {g:"Leadership and research",name:"Shariar Motakef",title:"Founder and President",sum:"Founded the company as Cape Simulations in 1992; co-author of CapeSym’s detector papers."},
 {g:"Leadership and research",name:"Amlan Datta",title:"Principal investigator, NIH SBIR",sum:"Leads the perovskite X-ray detector programme; lead author of CapeSym’s detector papers."}];
/* news and publications: only items with a working link */
var NEWS=[
 ["10 Sep 2026","Year two of the NIH NIBIB SBIR Phase II award for high-resolution direct-conversion X-ray detectors for low-dose imaging","NIH RePORTER","https://reporter.nih.gov/project-details/11395276"],
 ["18 Aug 2025","NIH NIBIB SBIR Phase II award ($925,411): High-Resolution Direct-Conversion X-ray Detectors for Low-Dose Imaging","NIH RePORTER","https://reporter.nih.gov/project-details/11253149"],
 ["2024","Gallium oxide semiconductor-based large-volume ultrafast radiation-hard spectroscopic scintillators","J. Appl. Phys.","https://pubs.aip.org/aip/jap/article/136/6/064503/3307501/Gallium-oxide-semiconductor-based-large-volume"],
 ["2022","Cesium lead bromide semiconductor radiation detectors: crystal growth, detector performance and polarization","J. Mater. Chem. C","https://pubs.rsc.org/en/content/articlelanding/2022/tc/d2tc01679f"],
 ["2021","2D perovskite-based high spatial resolution X-ray detectors","Scientific Reports","https://www.nature.com/articles/s41598-021-02378-w"]];
var SHEETS=[];
