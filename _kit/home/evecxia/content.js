var FONTS=['500 1em "Montserrat"','600 1em "Montserrat"','400 1em "Lato"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var MAIL="mailto:info@evecxia.com";
var BW="https://www.businesswire.com/news/home/";
/* Programmes, from evecxia.com (Pipeline, Serotonin Synthesis Amplification) and the company's releases of 15 Sep 2026,
   9 Feb 2026 and 22 Sep 2025. Stage words only as the company states them. [indication, area, title, stage, detail, dim, tag] */
var PIPE=[
 ["Obsessive-compulsive disorder","Psychiatry","EVX-101 in OCD","Phase 2 targeted for 1H 2027","Oral, twice-daily adjunctive (add-on) therapy for OCD responding inadequately to first-line SSRIs: a chronic, severe indication with no FDA-approved next-line drug, affecting an estimated 2 million U.S. patients.",0,"Lead indication"],
 ["Depression","Psychiatry","EVX-101 in depression","Phase 1 complete · pre-IND meeting held","Adjunctive therapy for depression responding inadequately to SSRI/SNRI antidepressants. Two Phase 1 trials completed; a pre-IND meeting with the FDA was completed successfully in October 2024.",0,"Adjunctive therapy"],
 ["Suicidal ideation crisis","Acute psychiatry","EVX-301 as rescue therapy","Phase 1 complete · Phase 1b positive","A proprietary intravenous infusion of 5-HTP, up to 24 hours, for patients hospitalised with acute suicidal ideation. In Phase 1b it elevated brain serotonin biomarkers beyond the SSRI/SNRI effect.",0,"Intravenous 5-HTP"]];
/* Phase 1b PK/PD target-engagement trial, as reported in the company's release of 15 September 2026. */
var EVID=[
 ["Enters the brain","5-HTP at target plasma exposure reached the cerebrospinal fluid"],
 ["Synthesis amplified","Biomarkers of serotonin synthesis rose in depression patients on SSRI/SNRI therapy"],
 ["Beyond the SSRI","Biomarkers of serotonin activity rose beyond the SSRI/SNRI effect"],
 ["~100 ng/mL","The 5-HTP plasma exposure target was corroborated for EVX-101 and EVX-301"]];
/* evecxia.com (About Us). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Jacob Jacobsen, PhD",title:"Co-Founder & Chief Executive Officer",sum:"Inventor of the Serotonin Synthesis Amplification concept. Formerly a scientist at Duke University and Duke-NUS, and eight years in drug discovery at NeuroSearch and Lundbeck; PhD in Neuropharmacology, University of Copenhagen."},
 {g:"Leadership",name:"Jennifer Hart, MS",title:"Executive Director, Operations",sum:"Formerly VP of the CRO Cohortias and Senior Director of Business Development for CNS at the Duke Clinical Research Institute; founder of Women in Science Tomorrow."},
 {g:"Board of directors",name:"C.R. Sincock II",title:"Board Member",sum:"Founder of Transhuman Capital, an early investor in Roivant Sciences and Kriya Therapeutics; Harvard College and Harvard Business School (Baker Scholar)."},
 {g:"Board of directors",name:"John Kaiser",title:"Board Member",sum:"Former Evecxia CEO; previously CEO and Chief Business Officer of Cerecor, and VP of Commercial and Business Development at ACADIA Pharmaceuticals."},
 {g:"Board of directors",name:"Allan L. Shaw",title:"Board Member",sum:"Over 20 years managing public companies; formerly CFO of Syndax Pharmaceuticals and Managing Director at Alvarez & Marsal; seven public boards."},
 {g:"Board of directors",name:"Elliot Ehrich, MD",title:"Board Member",sum:"R&D leader with eight FDA-approved medicines; EVP and CMO at LifeMine Therapeutics, formerly CMO and EVP R&D at Alkermes."},
 {g:"Scientific advisory board",name:"Maurizio Fava, MD",title:"Harvard Medical School · MGH",sum:"Slater Family Professor of Psychiatry; Executive Vice Chair, Department of Psychiatry, and Executive Director of the MGH Clinical Trials Network & Institute."},
 {g:"Scientific advisory board",name:"Andrew Krystal, MS, MD",title:"University of California San Francisco",sum:"Professor of Psychiatry; Director of the Dolby Family Center for Mood Disorders and of the UCSF Interventional Psychiatry Program."},
 {g:"Scientific advisory board",name:"John Rush, MD",title:"Duke-NUS",sum:"Professor Emeritus, Duke-NUS; Adjunct Professor, Duke University Medical School and Texas Tech University."},
 {g:"Scientific advisory board",name:"Richard Shelton, MD",title:"University of Alabama",sum:"Professor and Vice Chair for Research, Department of Psychiatry."}];
/* press releases (evecxia.com, News and Publications), each linking to the Business Wire release */
var NEWS=[
 ["15 Sep 2026","Positive clinical results from a Phase 1b target engagement trial","20260915660437/en/Evecxia-Therapeutics-Announces-Positive-Clinical-Results-From-a-Phase-1b-Target-Engagement-Trial"],
 ["28 May 2026","Article on 50 years of clinical evidence underpinning EVX-101","20260527557514/en/Evecxia-Therapeutics-Publishes-Article-on-50-Years-of-Clinical-Evidence-Underpinning-EVX-101-as-an-Adjunctive-Therapy-for-Psychiatric-Diseases"],
 ["9 Feb 2026","First patient dosed in the Phase 1b brain target engagement study","20260209575605/en/Evecxia-Doses-First-Patient-in-Phase-1b-Brain-Target-Engagement-Study-of-Serotonin-Synthesis-Amplification-Therapy"],
 ["22 Sep 2025","Financing and plans for a Phase 2 proof-of-concept study of EVX-101 in OCD","20250922665286/en/Evecxia-Provides-Financing-Corporate-Updates-Including-Plans-for-an-EVX-101-Proof-of-Concept-Phase-2-Clinical-Study-in-Obsessive-Compulsive-Disorder-OCD-Responding-Inadequately-to-First-line-Therapies"],
 ["10 Apr 2025","C.R. Sincock II appointed to the Board of Directors","20250410143951/en/Evecxia-Therapeutics-Announces-Appointment-Of-C.R.-Sincock-II-To-The-Board-Of-Directors"]];
var SHEETS=[];
