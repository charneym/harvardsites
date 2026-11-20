var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Manrope"','500 1em "Manrope"','500 1em "JetBrains Mono"'];
var MAIL="milton@vivreonbiosciences.com";
var MAP="https://www.google.com/maps/search/?api=1&query=4940+Carroll+Canyon+Rd+Suite+110+San+Diego+CA+92121";
var RPT="https://reporter.nih.gov/project-details/";
/* programmes: from Vivreon's NIH SBIR project summaries (NIH RePORTER), latest award per indication */
var PROGS=[
 ["Alzheimer’s disease","Microglia · NIA","CRAC channel modulators that restore the balance of reparative versus damaging, neurotoxic microglial responses, a pathway backed by genetic evidence (TREM2, PLCγ2), funded through NIA’s late-stage development award.","11370083"],
 ["Opioid use disorder","Microglia · NIDA Fast Track","A non-opioid new chemical entity to prevent opioid dependence in hospitalised patients, by blocking the inflammatory microgliosis that opioid exposure drives.","11135560"],
 ["Ulcerative colitis","VV8220 · NIAID","An oral, gut-selective CRAC blocker with strong potency and limited systemic exposure, with Phase II funding for IND-enabling GLP toxicology and safety studies.","11159849"],
 ["Checkpoint-inhibitor colitis","VV2003 · NCI","An oral candidate to block the enterocolitis caused by cancer immunotherapy without systemic immunosuppression, so patients can stay on treatment.","10631213"],
 ["Severe asthma","Intranasal · NHLBI","A sub-nanomolar CRAC modulator delivered to the airways, to reduce smooth-muscle remodelling as well as local inflammation.","10603554"],
 ["Osteoarthritis","VV8321 · NIAMS","A lead CRAC blocker suited to injection into the joint, to calm the destructive macrophage activity of synovitis while sparing repair.","10383630"],
 ["Primary hyperhidrosis","Topical · NIAMS","Sweat release depends on CRAC channels in the eccrine gland; a topical formulation of a potent CRAC modulator.","10546998"],
 ["Duchenne muscular dystrophy","Orai1 · NIAMS","An oral Orai1 modulator to limit calcium overload and secondary inflammation in dystrophic muscle, and delay progressive weakening.","10921411"]];
/* news: NIH award notices, each linking to its NIH RePORTER record */
var NEWS=[
 ["12 May 2026","Year two of the NIA late-stage Alzheimer’s award: $1,948,898","NIH RePORTER",RPT+"11370083"],
 ["30 Jul 2025","NIAID SBIR Phase II, year three: VV8220 for ulcerative colitis","NIH RePORTER",RPT+"11159849"],
 ["8 Jul 2025","NIDA Fast Track, year three: opioid use disorder, $1,097,854","NIH RePORTER",RPT+"11135560"],
 ["20 Jun 2025","NIA late-stage award for Alzheimer’s CRAC inhibitors: $1,996,385","NIH RePORTER",RPT+"11068859"],
 ["28 Aug 2024","NIAMS SBIR Phase I: a calcium channel therapeutic for Duchenne","NIH RePORTER",RPT+"10921411"]];
var TEAM=[{g:"Leadership",name:"Milton L. Greenberg, PhD",title:"President",sum:"PhD and postdoctoral training in physiology and biophysics, University of California, Irvine."}];
var SHEETS=[];
