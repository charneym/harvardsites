var FONTS=['300 1em "Manrope"','400 1em "Manrope"','500 1em "Manrope"','400 1em "Inter"','500 1em "Inter"','500 1em "IBM Plex Mono"','700 1em "Arimo"'];
var WEB="https://www.bandwidth10.com/";
var MAIL="us.sales@bandwidth10.com";
/* facts: bandwidth10.com (home, company, locationsandcontactus, product family pages and each portfolio-item page with its
   datasheet, news/papers, news/events), all fetched 2026-11-25; LASER World of PHOTONICS 2025 exhibitor directory */
var UP=WEB+"wp-content/uploads/";
var PLAT=[["Tunable VCSEL design","A grating for a mirror","The High Contrast Grating VCSEL, developed by the company’s founders at the University of California, Berkeley."],
 ["Optoelectronic packaging","TO, TOSA, pigtailed TO","Each laser co-packaged with a thermo-electric cooler for temperature and wavelength stabilization."],
 ["Control electronics","Up to the OEM engine","Driving electronics, A-scan trigger and k-clock, built into complete swept sources."]];
var PRODUCTS=[
 ["1060 nm","Tunable VCSEL pigtail TO with isolator","BW10-1060-T-PxFA","Seven-pin TO with permanently attached fiber and FC/APC connector. Wavelength tuning faster than 200 kHz, over a range of more than 40 nm.",UP+"2025/05/BW10-1060-T-PxFA-yy-V1.8.pdf"],
 ["1550 nm","Tunable VCSEL in TO56 or TOSA, with TEC","BW10-1550-Txx-TO · T7","Modulation up to 10 Gbps and a typical tuning range of 10 nm, available for several bands through the C- and L-band.",UP+"2025/05/BW10-1550-Txx-TO-V3.5.pdf"],
 ["1550 nm","PM tunable VCSEL pigtail TO with isolator","BW10-1550-Txx-PxFA","Polarization-maintaining fiber pigtail with FC/APC connector; fast tuning over more than 10 nm.",UP+"2026/02/BW10-1550-Txx-PxFA-V2.4.pdf"],
 ["1654 nm","Tunable VCSEL, open-cap TO or pigtail TO","BW10-1654-T-TO · PS","Seven-pin open-cap TO, or fiber-pigtailed with isolator. Tuning faster than 200 kHz over 4 nm.",UP+"2023/02/BW10-1654-T-TO-V1.2.pdf"],
 ["Swept source","1060 nm VCSEL swept source (OEM)","BW10-907B","A single-mode tunable 1060 nm VCSEL with a semiconductor optical amplifier, driving electronics, A-scan trigger and k-clock module.",UP+"2026/07/BW10-907B-TR-PW-SR-KC-KCD-OP-rev1.1.pdf"],
 ["Swept source","1550 nm VCSEL swept source (OEM)","BW10-908B","The same architecture around a single-mode tunable 1550 nm VCSEL: SOA, driving electronics, A-scan trigger and k-clock.",UP+"2026/07/BW10-908B-TR-PW-SR-KC-KCD-OP-rev1.2.pdf"]];
var APPS=["Industrial and medical OCT","FBG sensing","Gas sensing","Biosensing","2D and 3D imaging","LIDAR"];
var TEAM=[["Phil Worland","Founder, President and CEO"],["Chris Chase","Founder, Vice President Engineering","PhD"],["Dennis Hsieh","Director of Product Engineering"],["Carlos Mateus","Director, Research and Development","PhD"],
 ["Thomas Käßemodel","Director of Quality"],["Murat Serbay","Director, Application Engineering","PhD"],["Dalila Ellafi","Product Line Manager","PhD"],["Neelanjan Bandyopadhyay","Product Line Manager","PhD"],
 ["Selina Liu","Senior Application Engineer","PhD"],["Stefano Prandoni","Director Sales and Marketing, Europe and Japan"],["Michael Cheng","Director of Sales, Asia"],["Stuart Fowler","Director of Sales, North America"]];
var PAPERS=[
 ["Device","HCG MEMS tunable VCSEL with intracavity integrated detector",WEB+"hcg-mems-tunable-vcsel-with-intracavity-integrated-detector/"],
 ["OCT","High-speed optical coherence tomography imaging with a tunable HCG-VCSEL light source at the 1060 nm wavelength window",WEB+"high-speed-optical-coherence-tomography-imaging-with-a-tunable-hcg-vcsel-light-source-at-the-1060nm-wavelength-window/"],
 ["Sensing","MEMS-HCG VCSELs for emerging sensing and datacoms applications",WEB+"mems-hcg-vcsels-for-emerging-sensing-and-datacoms-applications/"],
 ["OCT","Electrically-pumped 1050 nm MEMS tunable VCSELs: wide tuning range for OCT applications",WEB+"electrically-pumped-1050-nm-mems-tunable-vcsels-wide-tuning-range-for-oct-applications/"],
 ["Networks","10 Gbps tunable VCSEL-based SFP+ with integrated G.METRO functionality for fronthaul access networks",WEB+"10-gbps-tunable-vcsel-based-sfp-with-integrated-g-metro-functionality-for-fronthaul-access-networks/"],
 ["Origins","A surface-emitting laser incorporating a high-index-contrast subwavelength grating",WEB+"a-surface-emitting-laser-incorporating-a-high-index-contrast-subwavelength-grating/"]];
var SHEETS=[];