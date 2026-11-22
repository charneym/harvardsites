var FONTS=['300 1em "Archivo"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="info@kineolabs.com";
var RP="https://reporter.nih.gov/project-details/";
/* Systems, from kineolabs.com (Home, OCT Systems, Spectroscopy Systems, OEM Solutions) and NIH RePORTER.
   Status words only where the company or the public record states them. [family, area, title, status, detail, dim] */
var PIPE=[
 ["Ophthalmic OCT","Retina · anterior segment","Line-scan swept-source OCT","In development · NIH SBIR","A compact, portable OCT engine for clinical-grade retinal imaging, small enough for hand-held use or mounting on a slit lamp in the exam room. Retinal imaging development is supported by NEI under SBIR grant 1R43EY036763-01A1. Not available for sale; not reviewed or authorised by the FDA.",0],
 ["Industrial OCT","Inline inspection · metrology","Line-field and full-field OCT engines","Supports industrial use cases today","Non-destructive, high-resolution imaging of coatings, adhesives and semiconductor structures, layer-thickness mapping in flexible electronics, microfluidic cell monitoring and 3D scanning of medical devices, at high speed on moving parts.",0],
 ["Spectroscopy","Biogas · bioreactors · sterilisation","Swept-source spectroscopy systems","OEM spectrometer, built for demonstration","Turnkey, real-time systems for trace-gas detection and process monitoring: hydrocarbons in biogas, nutrient depletion and oxygenation in fermentation, and hydrogen peroxide, ozone or formaldehyde vapour in sterilisation.",0],
 ["Laser engines","OEM integration","Swept-source laser engines","For OEM partners","High-power engines from the visible to the mid-infrared, with drive electronics and synchronisation outputs, free-space or fibre-coupled output, and custom wavelength, tuning range and line width.",0]];
/* OEM Solutions page, laser-engine and system figures as stated by KineoLabs. */
var EVID=[
 [">30 mW","Output power from the swept-source laser engines, spanning the visible through the mid-infrared"],
 ["<10 Hz – 200 kHz","Sweep rates, from kHz-class single-mode to GHz-class broadband operation in an external cavity"],
 ["<20 µAU","Noise floor of the spectroscopy systems, measuring through more than 5 OD of absorption"],
 [">100 dB","System sensitivity of the line-field OCT engines, at ~5 µm axial resolution in tissue"]];
/* kineolabs.com (About). Portraits from the company's own site. */
var TEAM=[
 {name:"Grant Houston",title:"Founder & CEO",sum:"Execution-focused CEO with more than 30 years of experience in photonics and patent law.",img:"p-houston.webp"},
 {name:"Walid Atia",title:"Founder & CTO",sum:"A leading designer of tunable laser systems.",img:"p-atia.webp"},
 {name:"Dale Flanders",title:"Founder & Chairman",sum:"Serial entrepreneur and technology domain expert.",img:"p-flanders.webp"}];
var NEWS=[];
var SHEETS=[];
