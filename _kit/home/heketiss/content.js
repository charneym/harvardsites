var FONTS=['300 1em "Manrope"','400 1em "Manrope"','600 1em "Manrope"','400 1em "Nunito Sans"','600 1em "Nunito Sans"'];
var WEB="https://www.heketiss.ch/";
var MAIL="contact@heketiss.ch";
/* facts: heketiss.ch (Home, Overview, Board of Directors, The unmet medical need, Our solution, News, Awards), ClinicalTrials.gov
   NCT07048054 (RESCUE-PATCH, sponsor University Hospital Geneva, 18 participants planned); all fetched 2026-11-23 */
var CAPS=[
 ["Off-the-shelf","An allogeneic patch: the cells come from the fat tissue of healthy donors, so it is ready when the patient is."],
 ["Living cells","Adipose-derived stem cells naturally secrete angiogenic and regenerative growth factors."],
 ["Active matrix","The cells are embedded within an active supporting matrix, a gelatin sponge laid on the wound."],
 ["Enhanced activity","With HekeTiss’ proprietary technology, the cells acquire enhanced angiogenic and regenerative activity."],
 ["Patented in Europe","Core patent EP4031201, “Cellular Substitutes and Methods of Preparation Thereof”, in force in the EU, Switzerland and the UK."],
 ["Made to GMP","Produced in the GMP facility of the Geneva University Hospitals (HUG)."]];
var PROG=[
 ["Nov 2024","First GMP production","First GMP-compliant production of TrophiPatch completed."],
 ["May 2025","Trial authorized","Swissmedic authorization and approval by the Geneva cantonal research ethics commission (CCER) for the Phase I/IIa RESCUE-PATCH trial."],
 ["Nov 2025","First patient treated","First-in-human treatment in RESCUE-PATCH, in patients with venous leg ulcers, diabetic foot ulcers and mixed-etiology wounds refractory to standard of care."],
 ["2026","50% recruited","RESCUE-PATCH reaches half of its planned patient recruitment; clinical follow-up is ongoing at the HUG."]];
var TEAM=[
 {g:"Founders",name:"Dr Nicolò Costantino Brembilla",title:"CEO, co-founder, board member",sum:"Privat Docent at the HUG and UNIGE; founded and directed the Dermatology Research Laboratory at UNIGE; expert on IL-17 in inflammatory skin disease; formerly Merck Serono; EPFL MBA."},
 {g:"Founders",name:"Dr Olivier Preynat-Seauve",title:"CSO, co-founder, board member",sum:"PharmD, PhD and Privat Docent at the HUG and UNIGE Faculty of Medicine; over 20 years at the interface of stem cells, regeneration and immunity."},
 {g:"Founders",name:"Prof Karl-Heinz Krause",title:"Co-founder, board member",sum:"Full professor, Department of Pathology and Immunology, Geneva Medical Faculty, with a joint appointment at the Geneva University Hospitals."},
 {g:"Independent directors",name:"Pascal Pincemin",title:"President, independent board member",sum:"Managing Partner and Executive Committee member of Deloitte until 2018; over 35 years in consulting, audit and corporate finance."},
 {g:"Independent directors",name:"Bernardin Assiene",title:"Independent board member",sum:"Director of Oversight (Inspector General) of a United Nations specialized agency; formerly at the Global Fund and the UN World Food Program."}];
var NEWS=[
 ["2026","RESCUE-PATCH clinical trial reaches 50% recruitment milestone","heketiss.ch","https://www.heketiss.ch/news-87-rescue-patch-clinical-trial-reaches-50-recruitment-milestone-see-2026.php"],
 ["Jun 2026","HUG highlights the TrophiPatch clinical trial in a new communication campaign","heketiss.ch","https://www.heketiss.ch/news-83-hug-highlights-trophipatchtm-clinical-trial-in-new-communication-campaign-01-jun-2026.php"],
 ["Nov 2025","First patient treated in the RESCUE-PATCH clinical trial","heketiss.ch","https://www.heketiss.ch/news-59-first-patient-treated-in-rescue-patch-clinical-trial-5-nov-2025.php"],
 ["Sep 2025","Core TrophiPatch patent granted in Europe","heketiss.ch","https://www.heketiss.ch/news-60-core-trophipatch-patent-granted-in-europe-17-sept-2025.php"],
 ["May 2025","Authorization obtained for the Phase I/IIa RESCUE-PATCH trial","heketiss.ch","https://www.heketiss.ch/news-58-authorization-obtained-for-phase-i-iia-rescue-patch-trial-14-may-2025.php"]];
var SHEETS=[];
