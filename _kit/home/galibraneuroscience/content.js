var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','800 1em "Archivo"'];
var MAIL="Henry.Lee@galibraneuroscience.com";
var MAIL2="Alexander.Rotenberg@galibraneuroscience.com";
var SITEURL="https://galibraneuroscience.com/";
/* The pipeline exactly as Galibra publishes it on their own home-page chart: two groups, six programmes, the stage each
   bar reaches (Discovery / Preclinical / First-in-human / Pivotal / Post-approval) and the activity printed beside it. */
var PIPE=[
 ["GAL005","SSADH deficiency","Monogenic rare disorders","Preclinical","AAV gene replacement for succinic semialdehyde dehydrogenase deficiency, caused by pathologic variants in ALDH5A1. The lead programme, in AAV toxicology studies, and the holder of FDA Orphan Drug and Rare Pediatric Disease Designations.","https://reporter.nih.gov/project-details/11256082","NIH STTR 1R41NS145933"],
 ["GAL101","SLC6A1-related disorders","Monogenic rare disorders","Preclinical","AAV gene supplement therapy for SLC6A1-related disorders, under an option licence agreement from Boston Children's Hospital. In AAV efficacy testing in vivo.","https://slc6a1connect.org/","SLC6A1 Connect"],
 ["GAL201","GABA-A variants","Monogenic rare disorders","Discovery","A programme for GABA-A receptor variants, at construct validation.","https://curegabaa.org/","Cure GABA-A Variants"],
 ["GAL301","GABA-T deficiency","Monogenic rare disorders","Discovery","A programme for GABA transaminase deficiency, at mouse model validation; construction of an inducible GABA-T mouse model began in 2024.","https://galibraneuroscience.com/news/","Company news"],
 ["GAL401","Drug-resistant epilepsy","Prevalent neurologic conditions","Discovery","A gene therapy strategy for drug-resistant epilepsy at proof-of-concept in vivo; pilot data were presented at the ASGCT Annual Meeting in May 2026.","https://galibraneuroscience.com/news/","Company news"],
 ["GAL501","Undisclosed neurologic condition","Prevalent neurologic conditions","Discovery","A second programme in a prevalent neurologic condition, at concept validation.","https://galibraneuroscience.com/","Pipeline chart"]];
/* Peer-reviewed and preprint work from the Galibra founders and advisors, as listed on galibraneuroscience.com/resources.
   Each line is the paper's own subject, taken from its title; no result is characterised beyond what the title states. */
var EVID=[
 ["March 2026 · preprint","Postnatal gene restoration in SSADH deficiency reveals phenotype reversibility — Lee, Rotenberg, Pearl, Gao and colleagues, bioRxiv, not yet peer reviewed"],
 ["July 2025","Central dysmyelination in SSADH-deficient humans and mice — Annals of Clinical and Translational Neurology"],
 ["April 2024","Gene replacement therapies for inherited disorders of neurotransmission: current progress in SSADH deficiency — JIMD"],
 ["April 2024","Clinical and molecular outcomes from the five-year natural history study of SSADH deficiency — Journal of Neurodevelopmental Disorders"]];
/* galibraneuroscience.com/team, verbatim in substance: name, title and the published description of each person. */
var TEAM=[
 {g:"Founders",name:"Alexander Rotenberg, MD, PhD",title:"Co-Founder",sum:"Joseph J. Volpe Chair and Professor of Neurology at Harvard Medical School and Boston Children's Hospital, where he directs the Epilepsy Monitoring Unit and the Neuromodulation Program. Provides scientific leadership for Galibra's therapeutic strategy."},
 {g:"Founders",name:"Henry Lee, MPhil, PhD",title:"Co-Founder",sum:"Neuroscientist at Harvard Medical School and Boston Children's Hospital specialising in inhibitory neurotransmission. Leads preclinical development of Galibra's gene therapy programmes targeting disorders of GABA metabolism."},
 {g:"Leadership",name:"Amber Freed, MAcc",title:"Chief Development Officer",sum:"Founder and CEO of SLC6A1 Connect, a global nonprofit advancing research for SLC6A1-related disorders, and a rare disease parent. Formerly an equity research analyst at Janus Henderson Investors. Leads development strategy and patient engagement."},
 {g:"Leadership",name:"Brad Hoffman, MBA",title:"Chief Financial Officer",sum:"Founder and President of the SSADH Association, former President and CEO of Arandell Corporation, and a rare disease parent. More than 30 years of executive leadership; leads business development and strategic partnerships."},
 {g:"Advisors",name:"Phillip Pearl, MD",title:"Clinical Study Advisor",sum:"William G. Lennox Chair and Professor of Neurology at Harvard Medical School and Boston Children's Hospital, and Director of Epilepsy and Clinical Neurophysiology. International expert in paediatric epilepsy and metabolic neurological disorders."},
 {g:"Advisors",name:"Guangping Gao, PhD",title:"AAV Manufacturing Advisor",sum:"Penelope Booth Rockwell Professor at UMass Chan Medical School and Director of the Horae Gene Therapy Center. Pioneer in AAV gene therapy and the discovery of viral vector serotypes used across the field."}];
/* News and milestones from galibraneuroscience.com/news; only items with a working external record are listed. */
var NEWS=[
 ["August 2026","FDA grants Orphan Drug and Rare Pediatric Disease Designations for Galibra's SSADH deficiency gene therapy","PR Newswire","https://www.prnewswire.com/news-releases/galibra-neuroscience-receives-fda-orphan-drug-and-rare-pediatric-disease-designations-for-ssadh-deficiency-gene-therapy-302844393.html"],
 ["March 2026","Postnatal gene restoration in succinic semialdehyde dehydrogenase deficiency reveals phenotype reversibility","bioRxiv preprint","https://doi.org/10.64898/2026.03.24.713250"],
 ["December 2025","Amber Freed on her quest to create a treatment for her son, in an exclusive interview","People","https://people.com/8-year-old-has-disease-so-rare-doesnt-have-name-first-receive-treatment-exclusive-11848935"],
 ["August 2025","NIH STTR award: Developing Brain Penetrable AAV Gene Therapy for Succinic Semialdehyde Dehydrogenase Deficiency","NIH RePORTER","https://reporter.nih.gov/project-details/11256082"],
 ["June 2025","Alexander Rotenberg named a 2025 Harrington Scholar-Innovator for gene therapy in SSADH deficiency","Harrington Discovery Institute","https://www.harringtondiscovery.org/news-media/2025/06/03/harrington-discovery-institute-announces-2025-scholar-innovator-award-recipients"],
 ["July 2025","Central dysmyelination in SSADH-deficient humans and mice","Annals of Clinical and Translational Neurology","https://doi.org/10.1002/acn3.70148"]];
var SHEETS=[];
