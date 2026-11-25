var FONTS=['300 1em "Archivo"','400 1em "Archivo"','500 1em "Archivo"','400 1em "Inter"','500 1em "Inter"','500 1em "IBM Plex Mono"'];
var WEB="https://isomet.com/";
var MAIL="isomet@isomet.com";
var MAILUK="sales-uk@isomet.com";
/* facts: isomet.com (home, acousto_optics, acousto_optic_drivers, acousto_optics_applications_home, Quantum, contactamericas,
   contacteurope, invest), all fetched 2026-11-25; LASER World of Photonics 2025 exhibitor directory (Isomet UK Ltd) */
var PLAT=[["Acousto-optics","Modulators to tuneable filters","Modulators, frequency shifters, deflectors, tuneable filters, Q-switches and fiber-coupled devices, with special-function designs and standard AR coatings."],
 ["Electronics","Drivers, synthesizers, amplifiers","Frequency sources, RF drivers, power amplifiers and control electronics, from fixed-frequency AOM drivers to high-speed digital synthesizers."],
 ["Optical materials","Crystal, grown and processed","Isomet began in 1956 growing and processing exotic crystal materials, the foundation of every device it makes today."]];
var DS="https://isomet.com/";
var DEVICES=[
 ["XY deflector","ODXY1441","A compact XY deflector: two acousto-optic axes in one package, for scanning a beam in both directions.",DS+"PDF%20acousto-optics_deflectors/Data%20sheets%20-%20defbluered/ODXY1441-T100S-3.pdf"],
 ["Tuneable filter","AOTF1110-VB","A variable-bandwidth acousto-optic tuneable filter, selecting the wavelength it passes by the RF frequency it is driven at.",DS+"PDF%20acousto_optics%20aotf/data%20sheets%20-%20filtbluered/AOTF1110-VB.pdf"],
 ["CO₂ modulator","D1419-G50","A dual-beam, high-power modulator for CO₂ lasers, in the mid-infrared.",DS+"PDF%20acousto-optics_deflectors/Data%20sheets%20-%20defmidir/D1419-G50L-7-8-9.pdf"],
 ["Frequency shifter","OAM1059-T10S","An acousto-optic frequency shifter with simultaneous up- and down-shifted outputs.",DS+"PDF%20acousto_optics_frequency_shifters/OAM1059B-T10S-1p5.pdf"],
 ["Integrated modulator","IMAD-P80","A compact, single-package acousto-optic modulator with its RF driver built in.",DS+"PDF%20acousto-optics_modulators/datasheets-modint/IMAD-P80L-1p5.pdf"],
 ["Quantum","M1440 · M1451","AO modulators optimised for quantum computing, in TeO₂ and quartz, for UV, visible and near-infrared light; custom designs on request.",DS+"Quantum.html"]];
var ELEC=[["Modulator drivers","Fixed- and variable-frequency RF drivers for AO modulators."],
 ["Deflector drivers","RF sources that set the angle of a deflected beam."],
 ["AOTF drivers","Drive electronics for acousto-optic tuneable filters."],
 ["Q-switch drivers","RF drivers for acousto-optic Q-switches."],
 ["Synthesizers and amplifiers","Including the new-generation iCS4 programmable synthesizer and the high-contrast, dual-modulation 555F series."],
 ["Custom electronics","Custom designs are Isomet’s speciality, matched to the device and the system."]];
var APPS=[["Plate and roller engraving","10.6 µm · 1 µm","M1396, M700, M1312, M1135"],
 ["Via-hole drilling and trepanning","9.4 µm · 355 nm · 515 nm","D600, D1435, D1384"],
 ["Wafer inspection","VIS · NIR","D1445"],
 ["High-speed perforation","9.4 µm","D1011"],
 ["Metrology","VIS · NIR","FS1118, FS1446"],
 ["Laser marking and trimming","1 µm","Q1420, M1377"],
 ["Stereolithography","355 nm","M1136"],
 ["Pulse compression","Mid-IR","D1109"],
 ["Spectroscopy","VIS · NIR","AOTF1427, AOTF1082"],
 ["Quantum computing","VIS · NIR","M1440, M1451"],
 ["High-speed shutter","VIS","IMDD"]];
var SHEETS=[];
