var FONTS=['300 1em "Josefin Sans"','400 1em "Josefin Sans"','600 1em "Josefin Sans"','400 1em "Roboto"','500 1em "Roboto"'];
var WEB="https://www.thirdfloormaterials.com/";
var MAIL="info@thirdfloormaterials.com";
var RPT="https://reporter.nih.gov/project-details/11407063";
var NSF="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2014798";
/* facts: thirdfloormaterials.com (home, research-development, services, about-modified, contact-2), NIH RePORTER 1R43GM165166-01,
   NSF award 2014798 (abstract and project outcomes report); all fetched 2026-11-20 */
var SYS=[["Materials","Light–matter interaction in the infrared","An enabling material discovered in Edward Sachet’s PhD thesis at NC State, with an unprecedented combination of electrical and optical properties."],
 ["Filter arrays","A filter on every pixel","Thin-film plasmonic filters with well-characterised, uncorrelated transmission functions, bonded directly to the imaging sensor."],
 ["Algorithms","Hardware tasks done in software","Compressive sensing and machine learning recover the spectrum from a few filtered intensity measurements, with no moving parts."]];
var PRODUCTS=[
 ["Microscopy","Snapshot hyperspectral imager for fluorescence microscopy","A drop-in replacement for standard scientific cameras: plasmonic filter arrays on backside-illuminated CMOS sensors record a full emission spectrum at every pixel, to unmix many fluorophores in one exposure. NIH NIGMS SBIR Phase I, 2026.",RPT],
 ["Imaging","Snapshot hyperspectral imaging (sHSI)","With NC State, a thin-film plasmonic filter array bonded to the sensor makes an extremely compact imager that collects the complete hyperspectral image cube in a single snapshot.",WEB+"research-development/"],
 ["Spectroscopy","Algorithmic infrared spectroscopy","Machine learning turns low-cost non-dispersive infrared sensors into true spectroscopic instruments. With Vanderbilt, an NSF-funded prototype recovered the CO₂ spectrum algorithmically.",NSF],
 ["Optical components","Infrared optical limiters","Epsilon-near-zero materials and optical antennas for filters that cut transmission or reflection by over an order of magnitude as incident energy rises, at mid-IR energies.",WEB+"research-development/"],
 ["Services","Thin-film deposition","Over 50 years of combined experience building deposition tools: sputtering, molecular beam and pulsed laser deposition, evaporation, MOVPE. Custom coatings in small prototype batches.",WEB+"services/"],
 ["Services","Photonic simulation","Custom simulation methods for plasmonic systems and photonic crystals, with an emphasis on infrared wavelengths, for photonic design, concepts and feasibility studies.",WEB+"services/"]];
var TEAM=[
 {g:"Founders",name:"Edward Sachet, PhD",title:"President and Principal Scientist",sum:"Led the fundamental infrared plasmonics research behind the company; named inventor on all of its patents, 22 publications."},
 {g:"Founders",name:"Christopher T. Shelton, PhD",title:"Chief Financial Officer, Senior Scientist",sum:"Process development, device fabrication and characterisation; MEMS and logic microfabrication at Intel and Hewlett-Packard."},
 {g:"Founders",name:"Jon-Paul Maria",title:"Co-founder",sum:"Professor of Materials Science and Engineering; oxide electronics and thin films, with over 240 publications."}];
var NEWS=[
 ["Sep 2026","NIH NIGMS awards Third Floor Materials an SBIR Phase I grant for a high-throughput snapshot hyperspectral imager for multiplexed fluorescence microscopy","NIH RePORTER",RPT],
 ["Jun 2020","NSF STTR Phase I: an algorithmic mid-infrared spectroscope built on narrow-band, epsilon-near-zero thermal emitters, with Vanderbilt University","NSF",NSF]];
var SHEETS=[];
