var FONTS=['300 1em "Archivo"','400 1em "Archivo"','italic 400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','400 1em "Archivo Black"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="info@neurotargetingsystems.com";
var NTS="https://neurotargetingsystems.com/";
var RP="https://reporter.nih.gov/project-details/";
var PAPER="https://doi.org/10.1016/j.mex.2026.104004";
/* products: every line from neurotargetingsystems.com/products and /documentation.
   [family, product, category, note, detail, link, link label] */
var PIPE=[
 ["EEG / EMG","Needle implants","Implants","Configurations 1–4","Thin needle electrodes on a multipin connector, pressed into the skull at preset coordinates from bregma. No drilling and no screws; the implant is glued in place with light-curable composite.",NTS+"products?q=Implants","Catalogue"],
 ["Fixation","Hooks","Implants","Stainless steel","Hook-shaped stainless steel needles positioned along the side of the skull to fasten the implant on the mouse head.",NTS+"products?q=Implants","Catalogue"],
 ["Tether-free connection","Container-cable assembly","Animal connections","Electrical","A container for a telemetry transmitter or any other device connected with the animal, on a cable that slides and rotates along the cage rail, so no commutator or swivel is needed.",NTS+"products?q=Electrical","Catalogue"],
 ["Drug delivery","Container-cable assembly with infusion","Animal connections","Fluid","A thin infusion tubing runs inside the metallic spring of the cable, adding infusion capabilities to the same connection.",NTS+"products?q=Fluid","Catalogue"],
 ["Many channels","Container-cable assembly, multichannel","Animal connections","Multiple connections","Multiple thin wires inside the metallic spring provide multichannel capabilities.",NTS+"products?q=Multiple%20Connections","Catalogue"],
 ["Optogenetics","Optical fiber","Animal connections","Optical","The optical fiber cable passes through the hole in the bearing at the top of the cage and connects to the mouse, without a fiber optic rotary joint.",NTS+"products?q=Optical","Catalogue"],
 ["Cage hardware","Cage insert and slip ring cable","Accessories","System components","A perforated aluminium plate supporting an aluminium rail on a bearing; the slip ring cable powers the device in the container from outside the cage.",NTS+"products?q=System%20Components","Catalogue"],
 ["Real-time EEG","Closed-loop stimulation software","Software","Sleep staging","EEG/EMG acquisition, automated threshold calculation for real-time determination of sleep stages, sleep staging and EEG power-spectrum analysis. An analog signal generator produces EEG signals for testing.",NTS+"products?q=Closed-loop%20Stimulation","Catalogue"]];
/* team: neurotargetingsystems.com/company-profile; MethodsX 2026 competing-interests statement */
var TEAM=[
 {g:"Founder",name:"Dr. Ludmila Gerashchenko",title:"Founder & Chief Executive Officer",sum:"Founded Neurotargeting Systems in 2012 and leads its SBIR research. She holds the patent for the production and use of the company’s needle electrodes and hook-shaped needles, and is named on its patent application for a system that interfaces with a laboratory animal."}];
/* publications and grants: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2026","“Simplified method for EEG recordings in mice”: needle electrodes placed in under 15 minutes record EEG no worse than screw electrodes","MethodsX",PAPER],
 ["August 2023","The National Institute of Mental Health funds an SBIR for a novel system and procedure for non-surgical placement of EEG electrodes in mice","NIH RePORTER",RP+"10694319"],
 ["August 2022","Optimization of real-time analysis of the sleep-wake cycle in mice","MethodsX","https://www.sciencedirect.com/science/article/pii/S2215016122001911"],
 ["July 2022","Low-frequency visual stimulation enhances slow-wave activity without disrupting the sleep pattern in mice","Scientific Reports","https://www.nature.com/articles/s41598-022-16478-8"],
 ["2013","A novel telemetric system to measure polysomnographic biopotentials in freely moving animals","J. Neurosci. Methods","https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3679249"]];
var SHEETS=[];
