var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','700 1em "Figtree"'];
var WEB="https://www.turnerscientific.com/";
var MAIL="info@turnerscientific.com";
var TEL="1-217-602-0306";
var ADDR="1275 Sandusky Rd, Jacksonville, IL 62650";
var RP="https://reporter.nih.gov/project-details/11145919";
/* services: wording from the live site's Pre-Clinical Research pages. [service, what it measures, detail, link] */
var SERV=[
 ["Audiometric testing","ABR and DPOAE","The auditory brainstem response and distortion product otoacoustic emissions, the same measures used in newborn hearing screening, so preclinical findings translate to the clinic.",WEB+"audiometric-testing/"],
 ["Behavioral testing","Hearing thresholds and tinnitus","Automated, reflex-based testing built on each animal’s startle reflex: the gold standard for hearing loss and tinnitus, run high-throughput with no extensive training.",WEB+"behavioral-testing/"],
 ["Cytocochleograms","Hair cells and ribbon synapses","Immunohistochemistry to count the hair cells that survive, die or sicken after noise, chemical or drug exposure, and the synapses between inner hair cells and the auditory nerve.",WEB+"cytocochleogram/"],
 ["Drug pharmacokinetics","Systemic and local delivery","PK for drugs given orally or intravenously, or applied to the ear by intratympanic delivery or directly into perilymph, with FluidSim modeling by Dr. Alec Salt.",WEB+"drug-pharmacokinetics/"],
 ["Ototoxicity","Hearing and balance safety","Hair cells are especially sensitive to toxins, so the ear is an early sentinel of general drug toxicity. GLP and non-GLP assessment for any pipeline compound.",WEB+"ototoxicity/"],
 ["Explants and histopathology","Ex vivo screening to slides","Cochlear explant cultures to screen many formulations fast, and otic histopathology of the external, middle and inner ear in support of toxicology studies.",WEB+"otic-histopathology/"]];
/* study designs: as listed on the live site */
var ROUTES=["Oral","Intraperitoneal","Subcutaneous","Intravenous","Transtympanic","Intracochlear","Transbulla","Osmotic mini-pump"];
var MODELS=["Mice","Rats","Guinea pigs","Chinchillas","Minipigs"];
var NOISE=["Anesthetized or unanesthetized","Prolonged or sustained","Blast and impact","Noise and drug combinations"];
/* Sensory Sentinel: what it measures (live site) */
var SENSE=[["Temperature","Cage and room"],["Humidity","Relative humidity, %RH"],["Light","Light-cycle and lux integrity"],["Sound","Audible to ultrasonic noise"],["Vibration","3-axis, cage and building"],["Activity","Room and personnel events"]];
/* people: as published on the live site's Our Team page (portraits there are 214px, too small for a portrait grid, so the masthead list) */
var TEAM=[
 ["Jeremy Turner, PhD","Chief Executive Officer","Founder of Turner Scientific; author of the white paper on noise and vibration in the vivarium."],
 ["Annette Turner","President",""],
 ["Amanda Henton, PhD","Chief Scientific Officer",""],
 ["Jennifer Artis, DVM","Director of Veterinary Medicine",""],
 ["Cindy Buckmaster, PhD","Chief Operations Officer, Monitoring",""],
 ["Alec Salt, PhD","Director of Cochlear Pharmacokinetics","A world leader in cochlear fluid dynamics and drug delivery, formerly at Washington University; author of FluidSim."],
 ["Elena Chrysostomou, PhD","Senior Study Director",""],
 ["JR Manker","Director of Monitoring Services",""],
 ["Jeff Lichtenhan, PhD","VP of Business and Grants Development","Joined in January 2026, bringing his laboratory and deep experience in auditory physiology."],
 ["Teresa Neubauer","Accounts Manager, Monitoring",""],
 ["Mackenzie Whalen","Director of Human Resources",""]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","Turner Scientific is seeking a surgical research technician with rodent or large-animal microsurgical experience","Turner news",WEB+"2026/10/turner-scientific-seeking-surgical-research-technician/"],
 ["February 2026","Patrick Johnson of PCS Europe now represents Turner Scientific Monitoring across the UK","Turner news",WEB+"2026/02/patrick-johnson-is-now-representing-turner-scientific-monitoring/"],
 ["January 2026","Dr. Jeff Lichtenhan appointed Vice President of Business and Grants Development","Turner news",WEB+"2026/01/turner-scientific-appoints-dr-jeff-lichtenhan-as-vice-president-of-business-and-grants-development/"],
 ["July 2025","A $707,131 NIH SBIR award for Minipig Model Validation for Hearing Research and Drug and Device Development","NIH RePORTER",RP]];
var SHEETS=[];
