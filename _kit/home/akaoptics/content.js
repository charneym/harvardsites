var FONTS=['800 1em "Archivo"','300 1em "Inter Tight"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Sans"','italic 400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"','500 1em "Dancing Script"'];
/* contact: akaoptics.com > Contact */
var TEL="+33491055086",TELT="+33 4 91 05 50 86",FAXT="+33 4 91 05 50 87",MAIL="contact@akaoptics.com";
var ADDR="2 rue Marc Donadille, 13013 Marseille, France";
var OG="https://akaoptics.com/";
/* the six product lines (akaoptics.com > Products). [line, product, detail, url] */
var PRODS=[
 ["Systems","Adaptive optics|closed loop systems","Our deformable mirrors, wavefront sensors and CL10 software, assembled into one loop for high power lasers, telescopes, synchrotron beams and microscopes.",OG+"aocls.php"],
 ["Mirrors","Bimorph|deformable mirrors","Piezoceramic disks with patterned electrodes glued to a thin glass sheet. 10 to 600 mm active diameter, up to 500 electrodes, water cooled for very high power.",OG+"bdm.php"],
 ["Mirrors","Stack actuator|deformable mirrors","Piezoceramic columns under a thin glass sheet, for high order correction: up to 512 actuators and up to 1 kHz, first resonance at 15 kHz.",OG+"sadm.php"],
 ["Mirrors","Very large|deformable mirrors","Bimorph, stack actuator and hybrid mirrors above 250 mm, such as a 410 × 460 mm hybrid mirror for FIREX in Japan.",OG+"verylarge.php"],
 ["Sensors","Shack-Hartmann|wavefront sensors","A lenslet array in front of a digital camera, with WFS7 software: sensitivity down to λ/150 rms, dynamic range up to 50 λ, up to 2 kHz.",OG+"ws.php"],
 ["Metrology","Hartmannometers","Surface flatness measured like a Fizeau interferometer, but live and insensitive to vibration. Accuracy λ/30 rms, any aperture with a beam expander.",OG+"hartmannometer.php"]];
/* management (akaoptics.com > Company > Management). Text-only masthead. */
var TEAM=[
 {g:"Management",name:"Prof. Alexis Kudryashov",title:"Founder and President, Dr. of Sc.",sum:"Began in adaptive optics as a PhD student at Lomonosov Moscow State University, then worked with the founders of the technology at the US Air Force and Imperial College. More than 300 peer reviewed papers; co-organiser of the AOIM workshop."}];
/* events: each item links out to its source (akaoptics.com home page, Meet AKA Optics; LASER World of PHOTONICS exhibitor directory) */
var NEWS=[
 ["Jan. 2027","Photonics West 2027, Moscone Center, San Francisco, 30 January to 4 February","spie.org","https://spie.org/conferences-and-exhibitions/photonics-west"],
 ["Jun. 2027","LASER World of PHOTONICS 2027, Munich, 22 to 25 June","world-of-photonics.com","https://world-of-photonics.com/en/"],
 ["Jun. 2026","XIV Workshop on Adaptive Optics for Industry and Medicine (AOIM), Gothenburg, 22 to 26 June","aoim2026.com","https://aoim2026.com/"],
 ["Aug. 2025","SPIE Optics + Photonics 2025, San Diego, 3 to 7 August","spie.org","http://spie.org/conferences-and-exhibitions/optics-and-photonics"],
 ["Jun. 2025","AKA Optics exhibited at LASER World of PHOTONICS 2025, Munich","world-of-photonics.com","https://exhibitors.world-of-photonics.com/ausstellerportal/2025/aussteller/ausstellerdetails/aka-optics/?elb=178.1100.5325.1.111"]];
var SHEETS=[];
