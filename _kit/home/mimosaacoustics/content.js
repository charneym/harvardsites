var FONTS=['300 1em "Lato"','400 1em "Lato"','700 1em "Lato"','400 1em "Source Sans 3"','500 1em "Source Sans 3"','600 1em "Source Sans 3"'];
var MAIL="info@mimosaacoustics.com";
var RP="https://reporter.nih.gov/project-details/";
/* The systems, from mimosaacoustics.com (Home, Products, OtoStat monaural, OtoStat binaural, HearID, Support).
   [system, use, title, status, detail, dim] */
var PIPE=[
 ["OtoStat® 3.3","Monaural · clinical and research","Middle- and inner-ear tests from one portable USB unit","FDA 510(k) for MEPA and DPOAE","A lightweight Audio Processing Unit with a low-noise, high-sensitivity ear probe and the OtoStation® patient-management and testing software. Clinical protocols compatible with insurance codes; print and export to Hi*Track, OZ and Excel. Research users add TEOAE, SFOAE, ipsilateral MEMR, swept DPOAE and swept SFOAE.",0],
 ["OtoStat® 3.3","Binaural · research","Two probes, true binaural tests","Research use","Both probes are set once, then the Sequencer tests each ear in turn across multiple protocols. Adds contralateral MOCR, ipsilateral, contralateral and binaural MEMR with wideband immittance, Type IV pure-tone audiometry, and two GPIO lines for laboratory equipment.",0],
 ["HearID® 5.1","Monaural · clinical and research","The original MEPA system","FDA 510(k)","Portable hardware and an integrated interface with instant access to patient records and measurement modules: MEPA3 wideband acoustic immittance, DPOAE (500 to 16,000 Hz) and TEOAE, with SFOAE and MOCR for research users.",0],
 ["Development Kit","Pre-order · research","Your own stimuli, on OtoStat hardware","Pre-order","Output custom stimuli and design your own tests in monaural or binaural mode, with in situ SPL or forward-pressure-level calibration.",1]];
/* Clinician's guides and the measurement facts, from mimosaacoustics.com (Clinicians, MEPA, DPOAE). */
var EVID=[
 ["Adults","Using MEPA for the differential diagnosis of conductive hearing loss with an intact eardrum and aerated middle ear"],
 ["Children","Using MEPA to identify middle-ear effusion"],
 ["Infants","Using MEPA to identify conductive hearing loss"],
 ["Newborns","Using MEPA in newborn and infant hearing-screening programmes"]];
/* Text-only masthead (CI/CL). Only what the public record states: Research Park profile, NIH RePORTER, PubMed. */
var TEAM=[
 {g:"Founder",name:"Patricia Jeng",title:"Founder, 1994",sum:"Started Mimosa Acoustics in 1994 and has been principal investigator on its NIH SBIR awards since 1996, from acoustical power flow as an audiological tool to wideband middle-ear reflex testing."},
 {g:"Research",name:"Judi A. Lapsley Miller",title:"Mimosa Acoustics, Champaign",sum:"First author of the company's Ear and Hearing papers on forward-pressure-level calibration for audiometry (2018) and DPOAEs (2026), and on a clinically viable MOCR assay (2024)."}];
/* Research: peer-reviewed papers and awards, each with a working link. [date, headline, source, url] */
var NEWS=[
 ["December 2025","Improving distortion-product otoacoustic emission test-retest reliability with forward-pressure level calibration on clinical equipment","Ear and Hearing","https://pubmed.ncbi.nlm.nih.gov/41449584/"],
 ["July 2023","A clinically viable medial olivocochlear reflex assay using transient-evoked otoacoustic emissions","Ear and Hearing","https://pubmed.ncbi.nlm.nih.gov/37475147/"],
 ["August 2021","NIDCD continues Phase II SBIR support for middle-ear reflex testing using wideband acoustic immittance","NIH RePORTER",RP+"10260596"],
 ["September 2018","Pure-tone audiometry with forward pressure level calibration leads to clinically-relevant improvements in test-retest reliability","Ear and Hearing","https://pubmed.ncbi.nlm.nih.gov/29470259/"],
 ["2016","Middle-ear reflectance: concepts and clinical applications, in Scientific Foundations of Audiology","Plural Publishing","https://www.pluralpublishing.com/publications/scientific-foundations-of-audiology-perspectives-from-physics-biology-modeling-and-medicine"]];
var SHEETS=[];
