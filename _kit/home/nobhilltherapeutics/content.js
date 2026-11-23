var FONTS=['300 1em "Outfit"','400 1em "Outfit"','500 1em "Outfit"','400 1em "Roboto"','500 1em "Roboto"'];
/* the address on nobhilltherapeutics.com (Contact) */
var MAIL="info@nobhilltherapeutics.com";
var RP="https://reporter.nih.gov/project-details/";
/* programs: nobhilltherapeutics.com (Technology, Applications), ClinicalTrials.gov NCT07864584 (first posted 8 Oct 2026),
   NIH RePORTER 5R44CA281538-02 (NCI) and 5R44HL147749-03 (NHLBI). Stage words only as those records state them.
   [program, sub, indication, stage label, progress 0..4 (done), progress incl. in-progress, detail, dim, tag] */
var PIPE=[
 ["NHT102","5-AZA dry powder · DryNeb","Advanced non-small cell lung cancer confined to the lung and chest","Phase 1/2 study registered · NCT07864584",1,1.3,"A stable dry powder of azacitidine (5-AZA), an FDA-approved epigenetic drug, inhaled through the DryNeb. In a rat lung tumor model, tidally inhaled 5-AZA dry powder reduced tumor burden by 70–95%, against 32% for injected 5-AZA. Supported by an NCI SBIR Phase II award.",0,"Lead program"],
 ["NH101","Amphotericin B · DryNeb","Allergic bronchopulmonary aspergillosis in cystic fibrosis and asthma","Clinic-ready development",.75,.95,"A pure (neat) dry powder of the antifungal amphotericin B for simple, efficient outpatient treatment at the site of lung infection, including drug-resistant aspergillus. Supported by NHLBI SBIR Phase I and II awards.",0,"NIH-funded"],
 ["DryNeb","Platform","Cystic fibrosis, pulmonary fibrosis, lower respiratory tract infections, RSV and non-respiratory diseases","Platform applications",.3,.5,"Traditional small molecules and newer technologies such as biologics and vaccines, delivered to the lungs to minimize side effects and toxicities while keeping drug concentrations high at the site of disease.",1,"Platform"]];
/* milestones: nobhilltherapeutics.com (Technology; News), ClinicalTrials.gov, PR Newswire 18 Jun 2025 */
var EVID=[
 ["FDA","Formulation development, proof-of-concept and preclinical animal studies, multiple SBIR grants and a first pre-IND meeting with the FDA"],
 ["Phase 1/2","NCT07864584 will study NHT102 in three parts (dose escalation, dose optimization and dose expansion) in patients with advanced NSCLC"],
 ["Series A","A $3 million first close in August 2024, led by Tramway Venture Partners with TCA Venture Group and VIC Technology Venture Development"],
 ["Advisors","In June 2025 the Strategic Advisory Board added Mark Parry-Billings, PhD, formerly Global Head of Drug Development at Chiesi, and Scott L. Shofer, MD, PhD, of Duke"]];
/* nobhilltherapeutics.com (Team). Text-only masthead (CI/CL): names and titles exactly as the site lists them. */
var TEAM=[
 {g:"Executive team",name:"Noel Greenberger",title:"Chief Executive Officer",sum:""},
 {g:"Executive team",name:"Paul Atkins, PhD",title:"Executive Chairman",sum:""},
 {g:"Executive team",name:"Craig Davies-Cutting, PhD",title:"Head of R&D",sum:""},
 {g:"Executive team",name:"Matt Reed",title:"Chief Scientific Officer",sum:""},
 {g:"Executive team",name:"Hugh Smyth",title:"Chief Technology Officer",sum:""},
 {g:"Board of directors",name:"Paul Atkins, PhD",title:"Executive Chairman",sum:""},
 {g:"Board of directors",name:"Calvin Goforth, PhD",title:"Director",sum:""},
 {g:"Board of directors",name:"Sima Ghafari",title:"Director",sum:""},
 {g:"Board of directors",name:"Noel Greenberger",title:"Director",sum:""},
 {g:"Board of directors",name:"Chris Japp",title:"Director",sum:""},
 {g:"Strategic Advisory Board",name:"John Pritchard, PhD",title:"Chairman",sum:""},
 {g:"Strategic Advisory Board",name:"Caroline Baxter, MD",title:"Advisor",sum:""},
 {g:"Strategic Advisory Board",name:"Charles Daley, MD",title:"Advisor",sum:""},
 {g:"Strategic Advisory Board",name:"Mark Parry-Billings, PhD",title:"Advisor",sum:""},
 {g:"Strategic Advisory Board",name:"Scott Shofer, MD, PhD",title:"Advisor",sum:""},
 {g:"Special advisors",name:"Plamena Entcheva-Dimitrov",title:"Special Advisor",sum:""},
 {g:"Special advisors",name:"Peter Carbone",title:"Special Advisor",sum:""}];
var NEWS=[
 ["October 2026","Phase 1/2 study of NHT102, inhaled 5-AZA dry powder with the DryNeb, registered for advanced non-small cell lung cancer","ClinicalTrials.gov","https://clinicaltrials.gov/study/NCT07864584"],
 ["June 2025","Nob Hill expands its Strategic Advisory Board with two leaders in respiratory drug development and pulmonary medicine","PR Newswire","https://www.prnewswire.com/news-releases/nob-hill-therapeutics-expands-strategic-advisory-board-with-two-distinguished-leaders-in-respiratory-drug-development-and-pulmonary-medicine-302484586.html"],
 ["August 2024","Nob Hill secures Series A funding to advance its respiratory technologies","PRWeb","https://www.prweb.com/releases/nob-hill-therapeutics-secures-series-a-funding-to-advance-breakthrough-respiratory-technologies-302213983.html"],
 ["October 2023","HHS Phase II grant to develop an inhaled therapy for lung cancer","PRWeb","https://www.prweb.com/releases/nob-hill-therapeutics-awarded-hhs-phase-ii-grant-for-lung-cancer-therapy-301945351.html"],
 ["May 2023","Selected for a featured poster at the ATS 2023 Respiratory Innovation Summit","VIC Tech","https://blog.victech.com/nob-hill-therapeutics-selected-for-featured-poster-presentation-at-respiratory-innovation-summit"]];
var SHEETS=[];
