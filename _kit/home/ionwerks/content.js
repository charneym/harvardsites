var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','500 1em "Cinzel"','400 1em "Inter Tight"','500 1em "Inter Tight"','500 1em "JetBrains Mono"'];
var WEB="https://www.ionwerks.com/";
var TEL="(832) 758-1834",TELH="tel:+18327581834";
var MAIL="al@ionwerks.com";
/* product lines, from ionwerks.com/products and the company page; NanoRBS from the NIH SBIR abstract (R44GM106507) */
var LINES=[
 ["Complete MSRI detector system","Mass spectroscopy of recoiled ions","A pulsed alkali beam line and a custom reflectron detector for isotopic detection of ions, with ion optics adjusted to each application and simulated for each end user during the design phase.","https://www.ionwerks.com/products/complete.html"],
 ["Compact ortho-TOF system","Bio-mass analysis","A compact orthogonal time-of-flight mass spectrum analyzer, modified to meet the end user’s application, with power supplies, cables, TDCx8 electronics and a standard software package.","https://www.ionwerks.com/products/ortho.html"],
 ["TDCx8 time-to-digital converter","Eight channels · multistop","Measures multiple stops in each channel against a common start, and streams to the host over a high-speed serial link at about 33 MB/s. For time-of-flight mass spectroscopy and LIDAR.","https://www.ionwerks.com/products/eight.html"],
 ["Pulsed alkali ion beam lines","Na⁺ · K⁺ · Cs⁺ · to 10 keV","Three-stage optical beam lines on our standard ¼″ alkali source, custom designed and simulated for anything from UHV surface analysis to low-vacuum film growth.","https://www.ionwerks.com/products/pulsed.html"],
 ["Detectors and NanoRBS","Microchannel-plate research","Nanoparticulate thin films that raise the gain and lifetime of microchannel-plate ion detectors, and the Ionwerks NanoRBS spectrometer for nanoscale Rutherford backscattering in a helium ion microscope.","https://reporter.nih.gov/project-details/10486065"]];
/* milestones, from the company and news pages (patents as listed there), NIH RePORTER and PubMed */
var FIRSTS=[["1986","Founded by Dr. J. Albert Schultz as a provider of surface analysis systems and equipment"],
 ["1992","US 5,087,815: high-resolution mass spectrometry of recoiled ions for isotopic and trace elemental analysis"],
 ["1997","R&D 100 Award, with Argonne National Laboratory, for the MSRI analyzer"],
 ["1999","US 6,008,491: a time-of-flight SIMS/MSRI reflectron mass analyzer"],
 ["2003","US 6,646,252: a multi-anode detector with increased dynamic range for counting time-of-flight"],
 ["2021","NIH SBIR Phase II: nanoparticulate coatings that enhance ion detection"],
 ["2024","Ion count-aided microscopy, with Boston University and Rutgers, in PNAS"]];
/* systems delivered and integrated, from the company page */
var SITES=["NIH","Argonne National Laboratory","Los Alamos National Laboratory","Texas A&M University","Battelle","University of Virginia","UNC Chapel Hill","Wright-Patterson Air Force Base","IBM Yorktown","Naval Research Laboratory","Oxxel (Bremen)","JEOL (Tokyo)"];
/* news: only items with a working link */
var NEWS=[
 ["4 Mar 2026","In memory of Dr. Amina S. Woods: visionary mass spectrometrist, trailblazer in molecular neurobiology, and devoted mentor","J. Am. Soc. Mass Spectrom.","https://doi.org/10.1021/jasms.5c00379"],
 ["30 Jul 2024","Shot noise-mitigated secondary electron imaging with ion count-aided microscopy","PNAS","https://doi.org/10.1073/pnas.2401246121"],
 ["2023","NIH equipment supplement to the detector programme, for picosecond timing measurements of coated microchannel plates","NIH RePORTER","https://reporter.nih.gov/project-details/10883978"],
 ["2021","NIH SBIR Phase II award: nanoparticulate coatings enhance ion detection","NIH RePORTER","https://reporter.nih.gov/project-details/10259237"]];
var SHEETS=[];
