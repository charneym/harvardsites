var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Public Sans"','500 1em "Public Sans"','600 1em "Public Sans"'];
/* the contact Parion names on its press releases (Lancet Respiratory Medicine release, 8 Sep 2023) */
var MAIL="pboucher@parion.com";
var RP="https://reporter.nih.gov/project-details/";
var PN="https://www.parion.com/news-and-events/";
/* the pipeline: parion.com (Pipeline; News and Events) and NIH RePORTER 4R44HL174235-02.
   [programme, sub, indication, stage label, progress 0..4 (done), progress incl. in-progress, detail, dim, link label] */
var PIPE=[
 ["Idrevloride","P-1037 · Lead","Primary ciliary dyskinesia (PCD), inhaled in hypertonic saline","Phase 2 complete · further studies planned",3,3.35,"Positive Phase 2 CLEAN-PCD results, published in The Lancet Respiratory Medicine (2023). FDA orphan drug, fast track and rare pediatric disease designations; EU orphan designation; positive EMA paediatric committee opinion on its investigation plan.",0,"Lead program"],
 ["P-1155","Next generation","Muco-obstructive lung diseases such as COPD and asthma, as an ENaC blocker/osmolyte inhalation solution","IND-enabling studies",.7,.95,"Built on the P-1037 experience and modified for a faster onset of action while preserving its safety attributes, for stable and exacerbating COPD or asthma. Supported by an NHLBI SBIR award through 2027.",0,"NIH-funded"],
 ["P-321","Ophthalmology","Dry eye disease, as a topical ENaC blocker","Phase 2",2,2.5,"A topical ENaC blocker for the tear film. Parion regained exclusive worldwide development and commercial rights for all indications in 2019.",0,"Rights held"],
 ["Mucolytics","Research","Novel mucolytic agents for muco-obstructive lung disease","Preclinical",.35,.55,"Mucolytic agents in preclinical research, a program first supported by the NIH.",1,"Research"]];
/* Phase 2 evidence: Parion release of 8 September 2023 (CLEAN-PCD, The Lancet Respiratory Medicine) and the 2020 designation releases */
var EVID=[
 ["CLEAN-PCD","A multinational, randomized, double-blind, placebo-controlled crossover Phase 2 trial in adults and adolescents with PCD aged 12 and over"],
 ["Result","Idrevloride in hypertonic saline was safe and associated with significant improvement in lung function over 28 days, compared with hypertonic saline alone"],
 ["Published","The Lancet Respiratory Medicine, September 2023, and presented at the 2023 European Respiratory Society Congress ALERT session"],
 ["Designations","FDA orphan drug, fast track and rare pediatric disease designations (2020); orphan designation by the European Commission (2020)"]];
/* parion.com (Management Team, Board of Directors); Karl Donn's title from the 2023 release. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Senior management",name:"Paul Boucher, MBA",title:"President and CEO",sum:"Joined Parion in 2006 and led business development, operations, finance and alliance management before becoming CEO."},
 {g:"Senior management",name:"Karl Donn, PhD",title:"SVP, Drug Development",sum:"Led the discovery program that selected P-1037 and leads its clinical development; formerly VP, Global Project and Portfolio Management at GlaxoSmithKline."},
 {g:"Senior management",name:"Brian Bray, PhD",title:"VP, Chemistry, Manufacturing and Controls",sum:"More than 25 years in pharmaceutical development; responsible for drug substance, drug product and their regulatory documentation."},
 {g:"Board of directors",name:"Richard C. Boucher, MD",title:"Co-Chairman and Founder",sum:"Director of the Marsico Lung Institute and the UNC CF Center at the University of North Carolina at Chapel Hill."},
 {g:"Board of directors",name:"Robert Wills, PhD",title:"Director",sum:"More than three decades in the pharmaceutical industry, including over 25 years at Johnson & Johnson."},
 {g:"Board of directors",name:"Paul Boucher, MBA",title:"President and CEO",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2025","NHLBI continues Parion’s SBIR award for P-1155, a novel ENaC blocker/osmolyte inhalation solution for muco-obstructive lung diseases","NIH RePORTER",RP+"11175129"],
 ["April 2024","NHLBI awards Parion an SBIR to take P-1155 toward IND status","NIH RePORTER",RP+"10918480"],
 ["September 2023","Phase 2 CLEAN-PCD study of idrevloride published in The Lancet Respiratory Medicine","Parion",PN+"parion-sciences-announces-publication-of-phase-2-clean-pcd-study-in-the-lancet-respiratory-medicine/"],
 ["April 2023","Positive EMA paediatric committee opinion on the investigation plan for idrevloride in PCD","Parion",PN+"parion-sciences-receives-positive-opinion-from-ema-paediatric-committee-on-the-paediatric-investigation-plan-for-idrevloride-inhalation-solution-for-treatment-of-primary-ciliary-dyskinesia/"],
 ["November 2020","European Commission grants orphan designation to P-1037 Inhalation Solution for PCD","Parion",PN+"parion-sciences-p%e2%80%901037-inhalation-solution-receives-orphan-drug-designation-from-the-ema-for-the-treatment-of-primary-ciliary-dyskinesia/"],
 ["July 2020","FDA grants orphan drug, fast track and rare pediatric disease designations to P-1037 for PCD","Parion",PN+"fda-grants-orphan-drug-designation-fast-track-designation-and-rare-pediatric-disease-designation-to-parion-sciences-p-1037-inhalation-solution-for-the-treatment-of-primary-ciliary-dyskinesia-2/"],
 ["January 2020","Parion reacquires the pulmonary rights to its ENaC inhibitors from Vertex","Parion",PN+"parion-sciences-reacquires-rights-epithelial-sodium-channel-inhibitors/"]];
var SHEETS=[];
