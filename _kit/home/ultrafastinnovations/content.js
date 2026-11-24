var FONTS=['300 1em "Sora"','400 1em "Sora"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','500 1em "IBM Plex Mono"'];
var WEB="https://www.ultrafast-innovations.com/";
var TEL="+49 89 36039-437",TELH="tel:+498936039437";
var MAIL="info@ultrafast-innovations.com";
var MAP="https://www.google.com/maps/search/?api=1&query=Dieselstr.+5+85748+Garching";
/* product lines, from the firm's Our Products, Customized Solutions and Optics Manufacturing pages */
var LINES=[
 ["Optical components","Mirrors · beamsplitters · filters","Chirped and dispersive mirrors, laser mirrors, beamsplitters, filters and anti-reflection coatings, from the IR to the XUV/soft X-ray, standard or tailor-made.","https://www.ultrafast-innovations.com/our-products/optical-components.html"],
 ["Instruments","Generation · characterisation","Laboratory devices for generating, characterising and manipulating ultrafast light, and for the quality control of optical components.","https://www.ultrafast-innovations.com/our-products/instruments.html"],
 ["Customized solutions","Attosecond / XUV beamlines","Customer-oriented systems for attosecond physics, such as vacuum beamlines and HHG lines, with consultation in the design phase and reliable, expedient construction.","https://www.ultrafast-innovations.com/our-products/customized-solutions.html"],
 ["Optics manufacturing","Coating · cleanroom · metrology","Three coating facilities, a Class 100 (ISO 4) cleanroom, and characterisation of reflectivity, dispersion, surface quality and damage threshold.","https://www.ultrafast-innovations.com/optics-manufacturing.html"]];
/* spectral ranges of the optics catalogue (Optical Components page) */
var BANDS=[["XUV","< 220 nm"],["UV","220–400 nm"],["VIS","360–750 nm"],["Ti:Sapphire","700–900 nm"],["1030 nm","1000–1070 nm"],["1550 nm","1300–1750 nm"],["2 µm","1600–2800 nm"],["IR","> 2800 nm"]];
/* instruments, from the Instruments page */
var INST=[["AURORA","XUV phase retarder"],["CALDERA","Enhancement cavity"],["CAPELLA","Light field synthesizer"],["EVEREST","Soft X-ray / XUV / VUV spectrograph"],
 ["GLACIER®","Cavity-ringdown reflectometer and loss meter"],["GLACIER®-C","Supercontinuum cavity-ringdown reflectometer"],["GLACIER®–123","1064 nm harmonics reflectometer and loss meter"],["GOBI®","White light interferometer"],
 ["K2","XUV / IR pulse delay unit"],["KAUAI","vis-nIR phase retarder",1],["KILIMANJARO","Multipass cell",1],["NEPAL","Coherent ultrabroadband XUV light source"],
 ["SAVANNA","Hollow-core fiber compressor"],["SAVANNA-HP","High-power stretched flexible hollow-core fiber compressor"],["TUNDRA®","Ultra-high contrast third-order autocorrelator"]];
var TEAM=[
 {g:"Leadership",name:"Dr. Alexander Guggenmos",title:"CEO, Managing Director",sum:"Leads UltraFast Innovations from Garching; announced the 2025 technology cooperation with Alio Labs."},
 {g:"Scientific roots",name:"Prof. Ferenc Krausz",title:"Scientific Co-Founder",sum:"Pioneered chirped mirror technology and attosecond pulse generation; 2023 Nobel Prize in Physics."},
 {g:"Scientific roots",name:"Prof. Ulf Kleineberg",title:"LMU Munich",sum:"UFI was founded in 2009 from the groups of Professors Krausz and Kleineberg at LMU and MPQ."},
 {g:"Distribution",name:"Edmund Optics",title:"Global optics distributor",sum:"The exclusive global distributor of UFI optics to the industrial market."},
 {g:"Distribution",name:"WaveQuanta",title:"Distributor for China",sum:"Beijing Wavequanta Technology, the exclusive distributor to the Chinese market."}];
/* news: only items with a working link */
var NEWS=[
 ["1 Jul 2026","Our new webshop is live: the UFI club is now one click away","UltraFast Innovations","https://www.ultrafast-innovations.com/news/article/our-new-webshop-is-live.html"],
 ["29 Jun 2026","UFI at AttoFEL in London and METAmeet in Umeå","UltraFast Innovations","https://www.ultrafast-innovations.com/news/article/ufi-at-attofel-and-metameet-2026.html"],
 ["7 Jan 2026","Start 2026 with us at SPIE Photonics West, San Francisco","UltraFast Innovations","https://www.ultrafast-innovations.com/news/article/start-2026-with-us-at-spie-photonics-west.html"],
 ["8 Dec 2025","Alio Labs and UltraFast Innovations announce a technology cooperation partnership","UltraFast Innovations","https://www.ultrafast-innovations.com/news/article/new-partnership-with-alio-labs-inc.html"],
 ["14 Aug 2025","Breaking new ground in UV coating: the HD2510UV dispersive mirror","UltraFast Innovations","https://www.ultrafast-innovations.com/news/article/breaking-new-ground-in-uv-coating-technology.html"]];
var SHEETS=[];
