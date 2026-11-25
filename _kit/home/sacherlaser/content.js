var FONTS=['300 1em "Hanken Grotesk"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','400 1em "Source Sans 3"','italic 400 1em "Source Sans 3"','600 1em "Source Sans 3"','700 1em "Source Sans 3"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
/* contact: sacher-laser.com Impressum and "Person in charge" (Global Contact) */
var TEL="+4964213050",TELT="+49 6421 305-0",MAIL="contact@sacher-laser.com";
var USTEL="+17146707605",USTELT="+1 714 670-7605",USTOLL="+18003523639",USTOLLT="+1 800 352 3639";
var ADDR="Hedwig-Jahnow-Str. 12, 35037 Marburg, Germany";
var B="https://www.sacher-laser.com";
/* lasers: product lines as listed on sacher-laser.com (Scientific Lasers, Laser Diodes, Electronic Systems), with their published
   headline specs. [group, title, detail, url] */
var LASERS=[
 ["Tunable diode lasers","LION series, Littman/Metcalf","397 to 2,450 nm, up to 100 mW, manual or motorized tuning. Patented technology.",B+"/home/scientific-lasers/tunable_lasers.html"],
 ["Tunable diode lasers","LYNX series, Littrow","370 to 1,770 nm, up to 300 mW, manual tuning. Patented technology.",B+"/home/scientific-lasers/tunable_lasers.html"],
 ["Amplified lasers","SERVAL PLUS, MOPA amplified tunable laser","633 to 1,180 nm, up to 3,000 mW, a tunable laser seeding a tapered amplifier.",B+"/home/scientific-lasers/tapered_amplifiers.html"],
 ["Tapered amplifiers","MicroTA","Fiber-seeded tapered amplifiers in a butterfly package, from 690 to 1,550 nm. The new 690 nm model gives more than 500 mW from 685 to 698 nm, for strontium optical clocks.",B+"/press/area/product_news/index/690nm_microta"],
 ["Laser diodes","Micron laser, micro external cavity","Ultra stable, 630 to 2,050 nm, 10 to 500 mW, kHz and sub-kHz instantaneous linewidth, mode-hop free tuning and no moving parts.",B+"/home/laser-diodes/micoxcavitylaser/micron_laser/micron_laser_vbg.html"],
 ["Laser diodes","AR coated laser diodes","Antireflection coated diode lasers with a reflectivity below 5×10⁻⁵, for OEM and industrial customers. US Patents 6,297,066 and 6,869,483.",B+"/home/laser-diodes/ar_coated_laser_diodes.html"],
 ["Electronic systems","Pilot laser controllers and locking electronics","Low noise benchtop diode laser controllers and external cavity laser controllers, with laser locking electronics.",B+"/home/electronic-systems.html"]];
/* applications, as grouped on the sacher-laser.com home page */
var APPS=["Absorption spectroscopy","Raman spectroscopy","Metrology","Fluorescence spectroscopy","Caesium D2","Rubidium D1 and D2","Potassium D1","Helium 1083 nm","Indium","Methane"];
/* collaborative research projects (Corporate News, sacher-laser.com) */
var PROJ=[
 ["MEMPAD","Photoacoustic imaging","A highly stable, narrow-linewidth laser near 780 nm to read out an array of optical microresonators, built around a photonic integrated circuit with two coupled ring resonators. With Ruhr University Bochum and Cyberdyne.","Funding ref. 13N17990",B+"/press/area/corporate_news/index/mempad.html"],
 ["KOALA","Nerve stimulation and microablation","A laser tool tunable from 1,010 to 1,085 nm, with peak powers above three watts and dynamic focusing in three dimensions. With inomed Medizintechnik, University Medical Center Freiburg and Fraunhofer IMM.","Funding ref. 13N17779",B+"/press/area/corporate_news/index/koala.html"],
 ["CASABLANCA","Blue and deep-UV light","Tunable sources, crystal resonators and coatings to frequency-double light in metal-organic crystals, from 923 nm to 461 nm and on toward 230 nm. With TU Berlin and MAQI, Chile.","ZIM · KK6065102",B+"/press/area/corporate_news/index/casablanca.html"]];
/* team: "Person in charge" page, sacher-laser.com. Text-only masthead. */
var TEAM=[
 {g:"Marburg, Germany",name:"Dr. Joachim R. Sacher",title:"Founder, CEO and managing partner"},
 {g:"Marburg, Germany",name:"Rico Felder",title:"Product Manager, Tunable Diode Lasers"},
 {g:"Marburg, Germany",name:"Ilka Herbener",title:"Sales Assistant"},
 {g:"Marburg, Germany",name:"Lidiia Avotina",title:"Sales Assistant"},
 {g:"Buena Park, California",name:"Yvonne K. Adams",title:"Sales Manager, West Coast"},
 {g:"Buena Park, California",name:"Stacey Espinoza",title:"Sales Assistant"}];
/* news: sacher-laser.com press area, each linked to its item. [date, headline, kind, url] */
var NEWS=[
 ["24–27 June 2025","Laser World of Photonics 2025, Munich, booth B2/235","Exhibition",B+"/press/area/exhibitions_and_conferences/index/laser_world_of_photonics_2025_booth_b2-235"],
 ["18 June 2025","690 nm MicroTA: a high power tapered amplifier for strontium clocks","Product news",B+"/press/area/product_news/index/690nm_microta"],
 ["11 November 2022","Sacher Lasertechnik celebrates its 30th anniversary","Corporate news",B+"/press/area/corporate_news/index/sacher_lasertechnik_celebrates_30th_anniversary.html"],
 ["May 2021","Sacher Lasertechnik moves into new facilities of more than 1,200 m², with clean room production","Corporate news",B+"/press/area/corporate_news/index/sacher_lasertechnik_expands_into_new_facilities.html"]];
var SHEETS=[];
