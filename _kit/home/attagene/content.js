var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','400 1em "Figtree"','500 1em "Figtree"'];
var WEB="https://www.attagene.com/";
var TEL="(919) 313-0167",TELH="tel:+19193130167",TFREE="(888) 721-2121",TFREEH="tel:+18887212121";
var MAIL="info@attagene.com";
var MAP="https://www.google.com/maps/search/?api=1&query=7020+Kit+Creek+Road+Suite+260+Morrisville+NC+27560";
var SHEETS=[];
/* the FACTORIAL assay family, from attagene.com Home, Technology and Services */
var ASSAYS=[
 ["cis-FACTORIAL™","Transcription factor families","90+","Reports the effects of compounds on the activities of over 90 transcription factor families in toxicologically relevant human and animal cell lines and primary cells. Offered as cis-FACTORIAL™-1 and cis-FACTORIAL™-2."],
 ["trans-FACTORIAL™","Human nuclear receptors","48","Evaluates the agonist and antagonist properties of compounds against all 48 human nuclear receptors, using one-hybrid GAL4–NR reporter constructs."],
 ["Multireporter Mouse™","Transcription factor families in vivo","48","An in vivo embodiment of the TF FACTORIAL™ that profiles the activities of multiple transcription factors in the mouse liver."],
 ["Ecotox FACTORIAL®","Vertebrate classes","5","Detects endocrine and metabolic disrupting activity across the estrogen, androgen, thyroid and PPAR receptors of mammals, fishes, birds, amphibians and reptiles, in a single assay."]
];
/* the screening service workflow (Services page) */
var FLOW=[
 ["Study design","Selecting a FACTORIAL™ assay and the screening conditions: cell type, compound concentrations, timetable and number of replicates."],
 ["Execution","Running the assay: transfecting cells with a FACTORIAL™ system and exposing them to the compounds."],
 ["Detection","Isolating and processing RNA from the exposed cells to obtain the raw assay data."],
 ["Analysis","Quality control, induction profiles (the compound’s signature) and statistics, formatted in Excel and as a radial ATTAGRAPH™."],
 ["Data mining","Classifying compounds by comparing their signatures with those of over 2,000 reference compounds in Attagene’s database."]
];
/* milestones (attagene.com Milestones page and NIH RePORTER) */
var MILE=[
 ["2025","NIH NIEHS awards a $999,999 SBIR Phase II grant for WASANET, a two-tier effect-based water bioactivity surveillance system."],
 ["2023","NIH NCI SBIR Phase II grant to assign mode of action to phenotypically discovered anticancer leads."],
 ["2020","Attagene unveils the Ecotox FACTORIAL®, screening chemicals for hazards to humans and wildlife."],
 ["2018","Science Advances publishes Attagene and EPA research on invariant signatures of bioactivity."],
 ["2017","Attagene receives the SBA Tibbetts Award at a White House ceremony."],
 ["2015","FACTORIAL is named among the ten most innovative technologies by the Society for Laboratory Automation and Screening."],
 ["2012","A contract extending Attagene’s collaboration with the EPA ToxCast™ program: up to $53.4 million over five years."],
 ["2010","Called on by the EPA to test the oil dispersants used after the Deepwater Horizon spill. U.S. patent 7,700,284 for the FACTORIAL™ reporter system."],
 ["2008","Nature Methods publishes the FACTORIAL™ platform."],
 ["2007","Selected by the U.S. EPA as an assay provider for ToxCast™."],
 ["2001","Attagene is founded in Research Triangle Park, North Carolina."]
];
var TEAM=[
 {name:"Sergei S. Makarov, Ph.D.",title:"President and Chief Executive Officer",note:"Contact principal investigator on Attagene’s NIH SBIR awards, and senior author of the 2018 Science Advances study on invariant signatures of bioactivity."},
 {name:"Alexander Medvedev, Ph.D.",title:"Director of Research and Development",note:"First author of the 2018 Science Advances study; introduced the multi-species Ecotox FACTORIAL® assay at its launch in 2020."}
];
var NEWS=[
 ["August 2025","Grant","NIH NIEHS SBIR Phase II: a two-tier effect-based water bioactivity surveillance system","https://reporter.nih.gov/project-details/11261701"],
 ["October 21, 2020","Paper","Attagene unveils technology to screen for chemical hazards to humans and wildlife","https://pubs.acs.org/doi/10.1021/acs.est.0c03375"],
 ["September 26, 2018","Paper","Attagene researchers publish invariant signatures of bioactivity in Science Advances","https://www.science.org/doi/10.1126/sciadv.aar4666"],
 ["January 16, 2017","Award","Attagene receives the Tibbetts Award at a White House ceremony","https://www.prweb.com/releases/2017/01/prweb13981488.htm"]
];
