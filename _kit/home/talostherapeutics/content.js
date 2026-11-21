var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','600 1em "Source Serif 4"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="";
var FORM="https://talostherapeutics.com/contact.html";
var RP="https://reporter.nih.gov/project-details/";
var AWARD=RP+"11312459";
var PREPRINT="https://doi.org/10.1101/2025.08.05.668554";
/* Every fact below comes from talostherapeutics.com (tagline, contact page) and from the NIH RePORTER record of
   Talos Therapeutics, Inc. (San Diego, CA 92126): 1R43AG099398-01, NIA SBIR Phase I, $497,554, project start
   23 September 2026, contact PI Jordi Serrats; its project summary and narrative supply the science. */
/* Development path: stages named in the award's project summary. [stage, state, detail] */
var PATH=[
 ["Design","Done","A brain-permeable CK2 inhibitor designed by Talos."],
 ["In vivo proof of concept","Done","Well tolerated, with efficacy in an Alzheimer's mouse model after three weeks of daily treatment."],
 ["Lead optimisation","Now · SBIR Phase I","Brain exposure, ADME and toxicology, selectivity and preliminary safety pharmacology of new lead compounds."],
 ["Late-stage ADME and toxicology","Next","Studies on the selected orally bioavailable, brain-penetrant lead."]];
/* Programmes. [modality, programme, route, status, detail, link, link label] */
var PIPE=[
 ["Small molecule · CK2","Alzheimer's disease","Oral (goal)","SBIR Phase I · NIA · 2026","Brain-permeable inhibitors of the kinase CK2, designed to block inflammation in glia and boost mitochondrial function in neurons. Phase I builds on the in vivo proof of concept to select a lead compound with improved oral bioavailability.",AWARD,"NIH RePORTER"]];
/* Aims of the Phase I award, from its project summary. */
var EVID=[
 ["Aim","Characterise brain exposure and the ADME and toxicology profile of novel lead compounds"],
 ["Aim","Assess their selectivity and preliminary safety pharmacology"],
 ["Outcome","Select an orally bioavailable, brain-penetrant lead compound"],
 ["Then","Late-stage ADME and toxicological studies on the feasibility of a CK2-targeted approach to Alzheimer's disease"]];
/* Team: the contact PI on the NIH award (text-only masthead, CI/CL). No title is published, so none is given. */
var TEAM=[
 {g:"Principal investigator",name:"Jordi Serrats",title:"Contact PI, NIH SBIR award 1R43AG099398",sum:"Neuroscientist whose published work spans immune-to-brain signalling, including the role of perivascular macrophages (Neuron, 2010)."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","The National Institute on Aging awards Talos an SBIR Phase I grant to optimise brain-permeable CK2 inhibitors for neuroinflammation and metabolic dysfunction in Alzheimer's disease ($497,554)","NIH RePORTER",AWARD]];
var SHEETS=[];
