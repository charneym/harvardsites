var FONTS=['300 1em "Sora"','400 1em "Sora"','500 1em "Sora"','600 1em "Sora"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var WEB="https://www.petcoil.com/";
var MAIL="info@petcoil.com";
var ADDR="1257 Oakmead Parkway, Suite B, Sunnyvale, CA 94085";
var MAP="https://www.google.com/maps/search/?api=1&query=1257+Oakmead+Parkway+Sunnyvale+CA+94085";
var RP_CRP="https://reporter.nih.gov/project-details/11300982";
var RP_HEAD="https://reporter.nih.gov/project-details/11253404";
/* systems: from petcoil.com/petcoil-system and the NIH RePORTER abstracts of 1SB1MH139143 (NIMH CRP) and 1R43DE035410 (NIDCR).
   [system, use, stage label, detail, link, link label] */
var PROG=[
 ["Brain PETcoil","Simultaneous TOF-PET and MR imaging of the brain, inside an existing MRI scanner","NIMH SBIR · Commercialization readiness","A portable, brain-dedicated time-of-flight PET insert built on a functional Phase II prototype. The current programme finalises the industrial design for production, verifies and validates the production unit with Stanford University, and prepares the FDA submission.",RP_CRP,"NIH RePORTER"],
 ["Head PETcoil","High-resolution TOF-PET of the brain, head and neck","NIDCR SBIR Phase I · 2026","Designed for nearly six times finer spatial resolution and three times the photon sensitivity of conventional PET, to find small lymph node metastases in head and neck cancer. Phase I builds real-time motion correction for head movement during the scan.",RP_HEAD,"NIH RePORTER"]];
/* collaborators and funders named on the award record and the company site: type only (BW/CJ) */
var PARTNERS=["Stanford University","National Institute of Mental Health","National Institute of Dental and Craniofacial Research"];
/* team: petcoil.com/meet-the-team (no sheets: every row carries all that is published) */
var TEAM=[
 ["Founders",[
  ["Chenming Chang, PhD","Co-Founder","PhD in Applied Physics, Stanford University; 9+ years in PET scanner design, development, characterization and translation."],
  ["Craig Levin, PhD","Co-Founder","Professor of Radiology, Physics, Electrical Engineering and Bioengineering at Stanford; 25+ years developing PET instrumentation."]]],
 ["Engineering",[
  ["Laurent Lussier","Senior Software Engineer","Over 25 years of software development for medical imaging systems, in startups and at GE Medical Systems."],
  ["Sayed Elgendy","FPGA Engineer","M.Sc. in ECE, The Ohio State University; FPGA work from architecture to RTL, including AFRL- and SRC-funded projects."],
  ["Sanaz Nazari Farsani, PhD","Senior Image Processing Software Engineer","PhD in computational imaging and machine learning (University of Turku); four years of postdoctoral research at Stanford."]]],
 ["Advisors",[
  ["Ajit Singh, PhD","Advisor","Managing Director, Artiman Ventures; former CEO of Siemens’ medical imaging global business and of BioImagene (acquired by Roche)."],
  ["Ron Ho","Advisor","Former CEO of U-Systems (acquired by GE) and VP of Ultrasound at Siemens; first PMA approval for automated breast ultrasound screening."],
  ["Kuang-Han Ke","Advisor","Founder and Chairman of Gran System; co-founder and former Chairman of EpiSonica (MRI-guided focused ultrasound)."]]]];
/* publications: petcoil.com/publications, each linked to PubMed. [year, title, journal, url] */
var PM="https://pubmed.ncbi.nlm.nih.gov/";
var PUBS=[
 ["2023","The PETcoil project: PET performance evaluation of two detector modules for a second-generation RF-penetrable TOF-PET brain insert","Physics in Medicine & Biology",PM+"36913739/"],
 ["2023","Compatibility between a 3T MR system and detector modules for a second-generation RF-penetrable TOF-PET insert","Medical Physics",PM+"36912373/"],
 ["2019","Performance of RF coils integrated with an RF-penetrable PET insert for simultaneous PET/MRI","Magnetic Resonance in Medicine",PM+"30260501/"],
 ["2018","MR performance in the presence of a radio-frequency-penetrable PET insert for simultaneous PET/MRI","IEEE Transactions on Medical Imaging",PM+"29993864/"],
 ["2018","Performance study of a radio-frequency field-penetrable PET insert for simultaneous PET/MRI","IEEE Trans. Radiation and Plasma Medical Sciences",PM+"30911706/"],
 ["2017","Simultaneous PET/MR imaging with a radio-frequency-penetrable PET insert","Medical Physics",PM+"28102949/"]];
var SHEETS=[];
