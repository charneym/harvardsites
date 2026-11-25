var FONTS=['400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"','700 1em "Barlow"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var WEB="https://www.biomed-jena.de/";
var MAIL="info@biomed-jena.de";/* biomed-jena.de/de/impressum-de.html */
var TEL="+49 3641 356900";var TELH="tel:+493641356900";
/* product lines, from biomed-jena.de/en/vesti-overview-en.html, /audio-overview-en.html and each product page: [group, name, description] */
var PROD=[
 ["Bal","eHIT USB","Video head impulse test (vHIT): an objective examination of all six semicircular canals through the vestibulo-ocular reflex."],
 ["Bal","eVNG USB","Videonystagmography with a stable binocular mask and built-in motion sensors, for caloric, positional, spontaneous and optokinetic tests."],
 ["Bal","eFRENZEL USB","Video Frenzel goggles for fixation-free observation and recording of eye movements, and of the manoeuvre itself."],
 ["Bal","eDVA USB","Dynamic visual acuity: a character appears only while the head moves fast enough that the VOR alone keeps it sharp."],
 ["Bal","eVEMP USB","Vestibular evoked myogenic potentials, with both cVEMP and oVEMP from one device."],
 ["Bal","ePOSTURO","Posturography: position sensors record weight shifts and sway as indicators of balance, stability and symmetry."],
 ["Bal","KALORIstar CT","An air irrigator with active cooling, down to 7 K below room temperature, remote controlled from the eVNG USB."],
 ["Aud","eOAE","Portable otoacoustic emissions, for newborn hearing screening and the diagnosis of hearing loss in adults."],
 ["Aud","eAUDIO USB","A 2-channel PC audiometer for pure tone and speech audiometry, with three passive loudspeaker outputs."],
 ["Aud","eABR USB","Brainstem evoked response audiometry (BERA): early acoustically evoked potentials under 10 ms."],
 ["Aud","eTYMP USB","Impedance audiometry with a robust, exact and fast pumping system that makes tympanometry simple."],
 ["Aud","AudioBox and AudioControl","A 4 to 6 channel free-field amplifier, and an audiometry keyboard with cap-sense keys for silent operation."]];
/* figures from the product pages and datasheets: [figure, unit, title, text] */
var CAPS=[["800","Hz","Motion sensing","The inertial sensor in the eHIT USB mask measures head position 800 times a second."],
 ["200","fps","Eye cameras","Infrared cameras at 1280×1024 pixels record both eyes at up to 200 frames a second."],
 ["7","K","Active cooling","KALORIstar CT blows air up to 7 K below room temperature, for 24 °C cold and 50 °C warm stimuli."],
 ["1","mask","Every balance test","vHIT, VNG, SVV and posturography from a single mask on a single USB connector."]];
/* how they work, from the home page and the audio overview */
var APPS=[["Lifelong free updates","All products are constantly improved and expanded, and every update is free for our customers, installed from within the software."],
 ["One software, one database","All auditory devices run in one software with one database, for private practice, hospitals and research."],
 ["Developed and built in Jena","Every device has been developed by us and is produced in Jena, Germany."]];
/* the three fields of work (biomed-jena.de home page) */
var SITES=[["ENT systems","Since 1997","Diagnostics for balance and hearing, as a developer, as an OEM supplier and under our own BioMed label. Our products carry a small “e” at the start of the name."],
 ["Magnetic systems","Since 2007","Analog and digital sensor systems for very weak magnetic fields, down to the picotesla range, a field of growing interest in medicine."],
 ["Custom development","For customers","No resources to develop a new product? For more than 20 years we have developed devices and algorithms on behalf of our customers."]];
var CERTS=[["EN 13485","Certified quality management"],["March 1997","Founded in Jena"],["Since 2004","Own brand, the small “e”"]];
/* news: only items that link out. [date, headline, source, url] */
var NEWS=[
 ["November 2026","At MEDICA 2026 in Düsseldorf","MEDICA exhibitor directory","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3087422"],
 ["November 2026","A patch for the Windows driver change of 10 November","BioMed Jena",WEB+"en/296/patch-2.html"],
 ["February 2026","WHX 2026 in Dubai, on the Thuringian joint stand S11.A99","BioMed Jena",WEB+"en/296/whx-2026-dubai-2.html"],
 ["January 2025","Arab Health 2025 in Dubai, Hall Z6, booth F78","BioMed Jena",WEB+"en/296/arab-health-2025-in-dubai-2.html"]];
var SHEETS=[];
