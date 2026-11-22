var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Open Sans"','500 1em "Open Sans"','600 1em "Open Sans"'];
var MAIL="privacy@mitopower.com";
var RP="https://reporter.nih.gov/project-details/";
/* the programmes: mitopower.com (Pipeline) and NIH RePORTER 5U44AA029833 (Fast Track plan: IND-enabling studies, then Phase 1).
   [programme, sub, indication, stage label, progress 0..4 (done), progress incl. planned, detail, dim] */
var PIPE=[
 ["MP-04","Lead candidate","Alcoholic liver disease-associated hepatorenal syndrome (HRS-AKI)","IND-enabling studies, then Phase 1",2.5,3.5,"Proprietary intravenous formulation of NRH, a highly potent NAD+ precursor. NIH Fast Track funding covers IND-enabling studies and a first-in-human Phase 1 trial of safety and tolerability, run with the Institute of Human Virology, University of Maryland School of Medicine.",0],
 ["MP-04","Initial indication","Liver failure, including acute on chronic liver failure (ACLF)","Preclinical",2,2,"MP-04 has shown promising results in improving cellular metabolism and reversing organ dysfunction in preclinical studies, and will initially be indicated for patients with liver failure.",0]];
/* from MitoPower's NIH project abstract (5U44AA029833) */
var EVID=[
 ["NAD+","NRH consistently raises intracellular NAD+ in liver and kidney, to a greater extent than nicotinamide riboside"],
 ["Stability","NRH is stable in serum"],
 ["Inflammation","NRH acts as a highly potent immune modulator, dampening the systemic inflammatory state"],
 ["Mitochondria","NAD+ supplementation reverses alcohol-induced changes, enhancing mitochondrial oxidation and biogenesis"]];
/* mitopower.com (About Us, team biographies). Text-only masthead (CI/CL). Summaries are only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Mani Subramanian, MD, PhD",title:"Founder and CEO",sum:"Former senior vice president and therapeutic area head of liver diseases at Gilead Sciences; over 160 publications."},
 {g:"Leadership",name:"Manoj Desai, PhD",title:"Co-founder, Scientific Advisor",sum:"Former head of medicinal chemistry at Gilead Sciences; inventor of ledipasvir and discoverer of cobicistat."},
 {g:"Leadership",name:"Steve Weng, MBA",title:"VP, Product Development and Program Management",sum:"Over 20 years in drug development, including leading liver disease project management at Gilead."},
 {g:"Leadership",name:"Gautham Pranesh, MD",title:"Assay Development and Non-Clinical Studies",sum:"Leads MitoPower’s assay development and non-clinical studies; formerly at Clinigene International (Syngene)."},
 {g:"Clinical partner",name:"Shyam Kottilil, MBBS, PhD",title:"Institute of Human Virology, University of Maryland School of Medicine",sum:"Co-principal investigator on the NIH award; his clinical care and research division runs the first-in-human studies."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2025","NIAAA continues MitoPower’s Fast Track award for a novel therapy for alcoholic liver disease-associated hepatorenal syndrome","NIH RePORTER",RP+"11161451"],
 ["August 2024","NIAAA continues the MP-04 award into its fourth year","NIH RePORTER",RP+"10920469"],
 ["September 2023","NIAAA continues MitoPower’s MP-04 award into its third year","NIH RePORTER",RP+"10875889"],
 ["November 2021","$6.5M SBIR grant awarded to IHV and MitoPower for a novel treatment of alcoholic liver disease-associated kidney dysfunction","Press release","https://mitopower.com/wp-content/uploads/2021/11/PRESS-RELEASE-MitoPower-and-UM-IHV-11.5.2021.pdf"],
 ["September 2021","NIAAA awards MitoPower an SBIR Fast Track grant for MP-04","NIH RePORTER",RP+"10378282"]];
var SHEETS=[];
