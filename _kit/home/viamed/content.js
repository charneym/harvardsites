var FONTS=['400 1em "Sora"','600 1em "Sora"','700 1em "Sora"','400 1em "DM Sans"','500 1em "DM Sans"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var WEB="https://www.viamed.online/";
var MAIL="info@viamed.co.uk";
var TEL="+44 (0)1535 634542";
/* the product range as published on viamed.online (Medical menu and collection pages): [range, what it covers] */
var RANGE=[
 ["Pulse oximetry","The VM-2160 SMARTsat handheld oximeter, finger oximeters, 4000 Series, reusable and disposable SpO2 sensors and adapter cables."],
 ["Oxygen sensors and monitoring","Medical oxygen sensors, oxygen monitors and analysers, accessories, and a gas sensor disposal service."],
 ["Temperature probes","Reusable, disposable and 400-AC autoclavable probes, with adapter cables, for neonatal, paediatric and adult patients."],
 ["Capnography","EtCO2 sensors, mainstream, sidestream and multigas accessories, water traps and VersaStream gas sampling lines."],
 ["ECG and EEG","Leadwires, patient cables, electrodes and limb clamps, and single-use EEG sensors for use with BIS monitors."],
 ["Blood pressure","NIBP cuffs, hoses and connectors, and invasive blood pressure cables."],
 ["Infant resuscitation","Air–oxygen blenders, the NeoPEEP resuscitation circuit, Ceratherm radiant warmers and phototherapy eye masks."],
 ["Foetal monitoring","Ultrasound foetal transducers, marking and legplate cables, and TOF 3D neuromuscular monitoring."]];
/* markets, from the main menu */
var MKT=["Medical","Emergency services","Veterinary","Automotive","Industrial","OEM"];
/* 400-AC Series (product update, 8 July 2025) */
var AC=[["Sterilisation","Steam autoclavable at 134°C"],["Patients","Neonatal, paediatric and adult"],["Compatible with","YSI 400, Hewlett-Packard / Philips, Siemens, Dräger"],["Materials","Latex-free and biocompatible"]];
/* OEM (viamed.online/pages/oem and the SMARTsat OEM page) */
var OEM=[["SMARTsat pulse oximetry boards","OEM I, II and III boards, the EB board and development kits. Developed with research institutions and university hospitals, with extremely low power consumption and sensors calibrated across 60–100% SpO2."],
 ["Flow and temperature boards","OEM boards for flow and temperature measurement, to build into your own equipment."],
 ["Ultra Fast Oxygen Sensor","Viamed’s fast-response oxygen sensor, offered to OEM customers."]];
var SVC=["Servicing and spare parts","Online cross references","Gas sensor disposal","Stock availability"];
/* news: only items that link out. [date, headline, source, url] */
var NEWS=[
 ["November 2026","Viamed exhibits at MEDICA 2026 in Düsseldorf, Hall 16, Stand H06‑01, in the UK Pavilion with Medilink","MEDICA exhibitor directory","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3084186"],
 ["June 2027","Viamed will exhibit at the EBME Expo at the Coventry Building Society Arena, Stand L18","Viamed exhibitions",WEB+"pages/exhibitions"],
 ["July 2025","The 400-AC Series: temperature probes for every patient group, made for the steam autoclave","Viamed product updates",WEB+"blogs/product-updates/400-ac-series-autoclavable-temperature-probes"],
 ["June 2025","VersaStream gas sampling lines, for capnographs and monitors with Oridion connectors","Viamed product updates",WEB+"blogs/product-updates/introducing-versastream-gas-sampling-lines-for-use-with-capnographs-and-patient-monitors-with-oridion-covidien-nellcor-medtronics-philips-masimo-mindray-zoll-nihon-kohden-connectors-from-viamed"]];
var SHEETS=[];
