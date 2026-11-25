var FONTS=['300 1em "Montserrat"','italic 300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','400 1em "Open Sans"','500 1em "Open Sans"','600 1em "Open Sans"'];
var MAIL="r.elaiyan@sensomedical.com";
var CMAIL="m.farah@sensomedical.com";
var UMAIL="l.salah@sensomedical.com";
/* products: every line from sensomedical.com (/products, /tech-platforms, /implants, /electrode-development-solutions)
   and the FDA 510(k) summaries K253970 (Wovyn, 17 Apr 2026) and K213170 (SENSOSEEG, 18 Apr 2023).
   [status, product, kind, detail] */
var PROD=[
 ["FDA 510(k) · 2026","Wovyn Depth Electrode","SEEG · implantable · single use","4 to 16 platinum/iridium macro contacts, 1.5 to 3 mm long, on a TPU jacket 0.8 to 2.0 mm in diameter, supplied sterile with a stylet for placement. For recording, monitoring and stimulation below the surface of the brain, for up to 30 days."],
 ["FDA 510(k) · 2023","SENSOSEEG Depth Electrodes","SEEG · implantable","Standard configurations of 4, 8 and 16 contacts, 0.8 mm in diameter, with 2.4 mm contacts spaced 2.5 mm apart along a 400 mm electrode, for temporary recording, monitoring and stimulation."],
 ["Development kit","BIOPOT3 Development Kit","Wearable EEG","A programmable BIOPOT3 with a dry, wet or cup electrode cap, 8-channel sub-hairline adhesive electrodes, an adapter and a software development kit with an Android acquisition app: everything to start a proof of concept in a startup or lab."],
 ["Electrodes","EEG caps and sub-hairline electrodes","Wearable EEG","Dry caps with Ag/AgCl-coated conductive rubber electrodes for fast setup, a 32-position wet Ag/AgCl cap with a pouch for the BIOPOT3, and 8-channel adhesive electrodes that record from below the hairline."],
 ["Custom","Electrodes and active implants","Development to manufacturing","Chronic and acute, invasive and external electrodes, leads and catheter-based electrodes, and active implant systems: electronics, software, RF powering, charging, batteries, encapsulation and qualification."]];
/* applications from /electrode-development-solutions */
var APPS=["Neuromodulation and neurostimulation","EP and neurosurgery","EEG, EMG and ECG","Sensor-based microcatheters","Oncology","Neuro-monitoring"];
/* disciplines from /about ("Multi-Disciplinary Expertise") */
var DISC=["Biomedical engineering","Neurology","Neuroscience","Electrophysiology","Electrode design","Software","Electronics and mechanical design","Materials engineering","Electrochemistry"];
/* leadership: sensomedical.com /about and /electrode-development-solutions ("Meet Our Experts"). Text-only masthead. */
var TEAM=[
 {g:"Founder",name:"Maroun Farah",title:"CEO & Founder",sum:"Founded SensoMedical in 2014 after serving as R&D Manager and CTO of Alpha Omega, a neuroscience medical device company. More than 23 years in invasive and non-invasive medical devices, neurotechnology, electrophysiology and biochemical sensing."}];
var SHEETS=[];
