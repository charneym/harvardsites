var FONTS=['300 1em "Jost"','400 1em "Jost"','500 1em "Jost"','600 1em "Jost"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','400 1em "Questrial"'];
var WEB="https://www.aptagen.com/";
var MAIL="mailbox@aptagen.com";
/* targets: the target types of their R&D Contract Service (aptagen.com/rd-contract-service), as [headline, unit, type, line] */
var TARGETS=[
 ["< 2,000","Da","Small organics","Custom aptamers against targets or antigens under 2,000 daltons."],
 ["Peptides","","Peptides","Custom aptamers developed against peptide targets."],
 ["Proteins","","Proteins","Against small to large proteins, including protein biomarkers."],
 ["Cells","","Eukaryotic cells","Against transfected cell lines, for surface binding or internal targeting."],
 ["Tissues","","Tissues","Custom aptamers developed against a range of tissues."],
 ["In vivo","","Whole animal","Targeting organs and tissues in vivo for drug delivery or imaging."]];
/* services and technologies: [name, kind, description, url, link label] from their technology, service and kit pages */
var SVC=[
 ["R&D Contract Service","Custom aptamer development","Aptagen develops aptamers to your milestones: high affinity and specificity, a wide dynamic range, enzyme activation or inhibition, biomarker discovery, or cell and tissue targeting.",WEB+"rd-contract-service/","Request a quote"],
 ["Apta-Beacons™ & Apta-Sensors","“No capturing. No washing. Just read.”","A diagnostic platform that detects targets from small molecules to protein biomarkers and cells in a variety of sample matrices, without the capture and wash steps of ELISA.",WEB+"aptamer-technologies/apta-beacons-and-apta-sensors/","Apta-Beacons"],
 ["Aptabodies™","NextGEN aptamers","A supramolecular aptamer that holds amino acids, fatty acids, carbohydrates, small molecules or metals in place in 3‑D space, for affinity, specificity and drug-like properties beyond a “naked” aptamer.",WEB+"aptamer-technologies/aptabodies-nextgen-aptamers/","Aptabodies"],
 ["Peptimers™","Peptide aptamers","High-affinity ligands built from amino acids instead of nucleic acid bases, discovered by mRNA display, a process similar to aptamer SELEX.",WEB+"aptamer-technologies/peptimers-apta-peptides/","Peptimers"],
 ["Apta-Index™","The aptamer database","A searchable database of aptamers from the published literature, filterable by target type, affinity and chemistry.",WEB+"apta-index/","Search the index"],
 ["Demo & Discovery Kits","Aptamers on your own bench","Two Apta-Beacon demo kits, and a DIY Aptamer Discovery Kit built on Melting Off SELEX for structure-switching aptamers.",WEB+"product-kits/","See the kits"]];
/* people: as published on aptagen.com/company-profile */
var TEAM=[
 ["G. Thomas Caltagirone, PhD","President & CEO","Founded Aptagen; PhD in Neuroscience from Drexel, with thesis work at Yale on proton-sensitive ribozyme switches."],
 ["Albert M. Liao, BS","Lab Director","Biomedical engineer from Johns Hopkins; came through the Aptagen internship programme to lead aptamer R&D and oligo synthesis."],
 ["Michelle L. Young","Administrative Assistant","Runs the office, with more than ten years of experience in an office setting."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","Aptagen exhibits at MEDICA 2026 in Düsseldorf, Hall 3, stand H40","MEDICA","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3087178"],
 ["Summer 2026","The AptaReport™ newsletter, Summer 2026 edition","AptaReport",WEB+"wp-content/uploads/2026-Q3-Summer-AptaReport-Newsletter-062026.pdf"],
 ["Spring 2026","“Big Science in a Small-Town Lab”: a feature on Aptagen in YoCo Connect","YoCo Connect",WEB+"wp-content/uploads/Aptagen-Feature-Big-Science-in-a-Small-Town-Lab-YoCo-Connect-Spring-2026.pdf"],
 ["2024","Named Aptamer Development Company of the Year by Life Sciences Review","Life Sciences Review",WEB+"wp-content/uploads/LifeSciencesReview-AptamerDevelopmentCompanyoftheYear2024.pdf"],
 ["2018","“A simple colorimetric system for detecting target antigens by a three-stage signal transformation–amplification strategy,” Biochemistry 57 (34)","Biochemistry",WEB+"wp-content/uploads/A-simple-colorimetric-system-for-detecting-target-antigens.pdf"]];
var SHEETS=[];
