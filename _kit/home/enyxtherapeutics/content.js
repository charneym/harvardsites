var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Inter Tight"','500 1em "Inter Tight"','600 1em "Inter Tight"'];
var MAIL="rgcryst@med.cornell.edu";
var RP="https://reporter.nih.gov/project-details/";
var STTR2=RP+"11256090";
/* pipeline: every programme, vector, indication and stage from the NIH RePORTER abstracts of Enyx Therapeutics, LLC's own
   STTR awards. [programme, indication, stage label, detail, link, link label] */
var PIPE=[
 ["ENX03 · AAVrh.10hALDH2","Osteoporosis of ALDH2 deficiency in post-menopausal East Asian women","STTR Phase II · IND-enabling","A one-time intravenous AAVrh.10 vector carrying the normal human ALDH2 coding sequence. The Phase II award funds a pre-IND meeting with the FDA, clinical-grade manufacture, a safety and toxicology study, and an IND application for a first trial.",STTR2,"2R42AA028465"],
 ["ENX05 · AAVrh.10hC1EI","Hereditary angioedema","STTR Phase I · Safety","A single administration of an AAVrh.10 vector expressing human C1 esterase inhibitor. In a murine model of C1EI deficiency it gave sustained plasma C1EI activity, enough to prevent angioedema episodes.",RP+"10818251","1R41AI181097"],
 ["ENX02 · Ad5VEGF-All6A+","Survival of transplanted autologous fat","STTR Phase I · Preclinical","An adenovirus vector coding for all three major isoforms of human VEGF, applied to the fat graft before transplantation to stimulate the blood supply the graft needs to survive.",RP+"10912162","1R41HL170928"]];
/* ENX03 preclinical findings: every line from the NIH RePORTER abstract of 2R42AA028465-02A1 */
var EVID=[
 ["The disorder","ALDH2 deficiency is hereditary, affects 8% of the world population and 35–45% of people of East Asian background"],
 ["The mechanism","ALDH2 clears the toxic acetaldehyde made from ethanol; with the mutation it accumulates, suppressing early osteoblast progenitors and bone formation"],
 ["Prevention","In two mouse models of ALDH2 deficiency given chronic ethanol, pretreatment with intravenous ENX03 markedly prevented the bone abnormalities seen on micro-CT and histology"],
 ["Reversal","In alcohol-consuming mice with pre-existing osteopenia, ENX03 increased cortical bone thickness, i.e. it both prevents and reverses the loss"]];
/* the contact PI on every Enyx award (NIH RePORTER) and his titles from his Weill Cornell department page. No portraits are
   published, so the masthead list (CI/CL). */
var TEAM=[
 {g:"Scientific leadership",name:"Ronald G. Crystal, M.D.",title:"Contact Principal Investigator",sum:"Chair of Genetic Medicine at Weill Cornell Medicine. In 1993 his laboratory was the first to use a recombinant virus to transfer genes to humans."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","NIAAA continues the ENX03 STTR Phase II award with $791,929 for the 2026 fiscal year","NIH RePORTER",RP+"11402253"],
 ["August 2025","NIAAA awards Enyx a $1,253,597 STTR Phase II grant to take ENX03 toward an IND","NIH RePORTER",STTR2],
 ["April 2024","NHLBI STTR award to develop ENX02, gene therapy-mediated angiogenesis for transplanted fat","NIH RePORTER",RP+"10912162"],
 ["March 2024","NIAID STTR award for the safety of ENX05, AAV-mediated C1 esterase inhibitor gene therapy for hereditary angioedema","NIH RePORTER",RP+"10818251"]];
var SHEETS=[];
