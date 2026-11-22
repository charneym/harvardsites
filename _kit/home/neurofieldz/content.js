var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Inter Tight"','500 1em "Inter Tight"','600 1em "Inter Tight"','italic 700 1em "Montserrat"'];
var MAIL="s.sridhar@neu.edu";
var NF="https://neurofieldz.com/";
var RP="https://reporter.nih.gov/project-details/";
/* applications: the disorders NeuroVEP is designed to test, from neurofieldz.com (home "Objective testing for many ophthalmic
   disorders"); the funded programmes from NIH RePORTER (R43EY036767, R41/R44AG057250, R41EY028466) and the company's news.
   [indication, group, programme line, text, status, link or ""] */
var APPS=[
 ["Macular degeneration","Retina","NIH NIA STTR Phase I and Phase II · Neuro-Optical Diagnostic System for Macular Degeneration","A $2M Phase II award took the portable system into the clinic; it has been used to test more than 150 patients with macular degeneration. Published in Eye and Brain, 2021.","NIH-funded","https://pubmed.ncbi.nlm.nih.gov/33953628/"],
 ["Optic neuropathies","Optic nerve","NIH NEI SBIR Phase I, 2025 · Objective mobile diagnostics for optic neuropathies","Awarded in September 2025 by the National Eye Institute, the newest program extends NeuroVEP’s objective testing to diseases of the optic nerve.","NIH-funded",RP+"11185520"],
 ["Amblyopia","Pediatric","NIH SBIR Phase I · Theranostic Virtual Reality Headset for Amblyopia","Because NeuroVEP can present separate stimuli to each eye, it can test, and potentially help treat, the ‘lazy eye’ of childhood.","NIH-funded",NF+"neurofieldz-winsnih-phase-i-sbir-grant-on-amblyopia/"],
 ["Glaucoma and visual field defects","Optic nerve","Potential application","Objective visual field testing that does not depend on the patient pressing a button.","In development",""],
 ["Multiple sclerosis and optic neuritis","Neurology","Potential application","VEP is an established neuromonitoring measure of the visual pathway, here in a headset under two pounds.","In development",""],
 ["Traumatic brain injury","Emergency and field","Potential application","Portable to the ER and the field, with dry electrodes that set up in under a minute.","In development",""]];
/* neurofieldz.com (Team). Text-only masthead. Summaries only restate the site. */
var TEAM=[
 {g:"Team",name:"Srinivas Sridhar, PhD",title:"Founder",sum:"University Distinguished Professor of Physics, Bioengineering and Chemical Engineering at Northeastern; Lecturer on Radiation Oncology, Harvard Medical School. A key developer of EFEG and the NeuroDot sensor."},
 {g:"Team",name:"Craig Versek, PhD",title:"Principal Scientist",sum:"Primary architect of the NeuroVEP mobile neurovisual evaluation platform and a key developer of its data processing pipeline and machine learning tools."},
 {g:"Team",name:"Ali Banijamali, PhD",title:"Principal Data Engineer",sum:"Developed NeuroVEP’s AI-powered data analysis; a key developer of the DAVEP, ffVEP and mfVEP applications."},
 {g:"Consultants and advisors",name:"Kam Lashkari, MD",title:"Consultant Collaborator",sum:"Ophthalmologist at Advanced Eye Centers, Dartmouth MA; formerly Assistant Professor of Ophthalmology, Harvard Medical School, and Schepens Eye Research Institute."},
 {g:"Consultants and advisors",name:"Eric Gaier, MD",title:"Consultant Collaborator",sum:"Pediatric Ophthalmology and Strabismus Service, specialising in neuro-ophthalmology: neurologic conditions in children that affect vision."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2025","Mobile objective diagnostics of macular degeneration using dark\u2011adapted visual evoked potentials","medRxiv preprint","https://pubmed.ncbi.nlm.nih.gov/41282676/"],
 ["September 2025","NIH National Eye Institute SBIR award: Objective mobile diagnostics for optic neuropathies","NIH RePORTER",RP+"11185520"],
 ["August 2023","NeuroFieldz team awarded US Patent 11,701,046 for a portable brain and vision diagnostic and therapeutic system","NeuroFieldz",NF+"neurofieldz-team-awarded-us-patent/"],
 ["March 2023","Founder Srinivas Sridhar elected a Fellow of the American Institute for Medical and Biological Engineering","NeuroFieldz",NF+"neurofieldz-founder-srinivas-sridhar-honored-as-aimbe-fellow/"],
 ["April 2021","Portable diagnostic system for age-related macular degeneration screening using visual evoked potentials","Eye and Brain","https://pubmed.ncbi.nlm.nih.gov/33953628/"]];
var SHEETS=[];
