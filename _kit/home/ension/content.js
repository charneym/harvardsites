var FONTS=['300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','400 1em "Figtree"','500 1em "Figtree"'];
var WEB="https://ension.com/";
var RPT="https://reporter.nih.gov/project-details/11261620";
/* facts: ension.com (home, fetched 2026-11-21); NIH RePORTER (5R44HL178134, 1R44HL178134, R42HL134455, R44HL131338, R44HL117480,
   R43HD085600, R44HL083563, contract N01HV48189 and the PumpKIN contract 268201000012C); Gartner et al., NHLBI Pediatric Circulatory
   Support Program summary (PMC3066431); Cahalan et al. J Biomed Mater Res B 2023 (10.1002/jbm.b.35130), Front Cardiovasc Med 2025
   (10.3389/fcvm.2025.1578538), Biomater Adv 2022 (10.1016/j.bioadv.2022.213014). */
var CAPS=[["Design and development","From concept to clinic","Product design and development with particular expertise in the clinical translation of medical technologies."],
 ["Quality","Design controls, built in","Strict compliance with the requirements of the FDA design controls and ISO standards, with a risk-based design history file."],
 ["Blood and surfaces","Blood compatibility","Testing that looks at all five ISO 10993-4 categories of the blood response, and bioactive surfaces for blood-contacting devices."]];
var PROGRAMS=[
 ["Pediatric life support","pCAS","A bearingless pediatric cardiopulmonary assist system: a single-use pump, with an oxygenator or an integrated pump-oxygenator added as the therapy requires, on a reusable stator and touchscreen controller that runs on AC or internal batteries.","https://reporter.nih.gov/project-details/11261620"],
 ["Motor","Bearingless flux reversal motor","A magnetically levitated motor topology, patent pending, that moves the costly rare-earth magnets out of the disposable and into the reusable stator. NIH SBIR Phase II, now extending its range to neonates and infants of 5 to 15 kg.","https://reporter.nih.gov/project-details/11261620"],
 ["Testing","Ension Triad System","A bench-top human blood circulation loop and test protocols that address all five ISO 10993-4 categories and control each Virchow variable (flow, the blood, the surface), developed for FDA’s Medical Device Development Tool program.","https://onlinelibrary.wiley.com/doi/10.1002/jbm.b.35130"],
 ["Surfaces","Bioactive surfaces","Coatings for blood- and tissue-contacting devices: blood-compatible surfaces for pediatric oxygenators, infection-resistant drivelines for ventricular assist devices, bioactive surfaces for pediatric hemodialysis catheters.","https://reporter.nih.gov/project-details/8453138"]];
var TEAM=[
 {g:"Leadership",name:"Mark J. Gartner, PhD",title:"President",sum:"Principal investigator for Ension in the NHLBI Pediatric Circulatory Support and PumpKIN programmes, which developed the pCAS system."},
 {g:"Research",name:"Patrick Cahalan",title:"Principal investigator",sum:"Principal investigator on the NIH-funded bearingless motor and blood compatibility programmes."},
 {g:"Research",name:"Linda Cahalan",title:"Research",sum:"Co-author of Ension’s studies of plasma protein adsorption on heparin-coated and uncoated surfaces under flow."}];
var NEWS=[
 ["May 2026","NIH NHLBI continues SBIR Phase II funding for the bearingless flux reversal motor for neonatal and pediatric life support, with $1.03M for 2026","NIH RePORTER",RPT],
 ["2025","Flow rate- and material-dependent human plasma protein adsorption, measured in Ension’s blood loop","Frontiers in Cardiovascular Medicine","https://doi.org/10.3389/fcvm.2025.1578538"],
 ["Jan 2025","NIH NHLBI awards Ension a direct-to-Phase II SBIR for the final phase of development of the bearingless pCAS system","NIH RePORTER","https://reporter.nih.gov/project-details/11069156"],
 ["2023","A low-background-noise blood loop model for testing blood-contacting biomaterials and devices in fresh human blood","J Biomed Mater Res B","https://doi.org/10.1002/jbm.b.35130"]];
var SHEETS=[];
