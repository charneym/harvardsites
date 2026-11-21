var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','700 1em "Montserrat"'];
var MAIL="info@modulationtherapeutics.com";
var RP="https://reporter.nih.gov/project-details/";
var CT="https://clinicaltrials.gov/study/";
/* Programmes: every line from modulationtherapeutics.com (Pipeline, Partnering and News pages) and the NIH RePORTER
   records of Modulation Therapeutics, Inc. (Morgantown, WV). [indications, programme, status, modality, detail, link, link label] */
var PIPE=[
 ["Advanced solid tumours: breast, liver, gastrointestinal and genitourinary cancers","MTI-301","Phase 1","Small molecule · SCD1","An orally administered first-in-class inhibitor of stearoyl CoA desaturase 1, the enzyme that makes the monounsaturated fatty acids aggressive cancers depend on. A first-in-human dose-regimen-finding study is now open (NCT06911008), supported in part by the NCI Fast-Track SBIR award R44CA272064.",CT+"NCT06911008","ClinicalTrials.gov"],
 ["Metastatic uveal melanoma; cutaneous melanoma","MTI-201","Phase I","Alpha therapy · MC1R · FDA Orphan Drug, Fast Track","An actinium-225 radiopharmaceutical that finds melanoma cells through the MC1R receptor on their surface. Its Phase I dose-escalation study in metastatic uveal melanoma treats patients at the Moffitt Cancer Center in Tampa, and a companion diagnostic imaging agent is in development.",RP+"9576556","NIH RePORTER"],
 ["Non-alcoholic steatohepatitis (NASH) and fatty liver disease (NAFLD)","MTI-301 in liver disease","Preclinical","Small molecule · SCD1 · NIDDK STTR","The same oral SCD1 inhibitor as a single agent in diet-induced models of fatty liver disease, where pilot data showed it attenuated liver steatosis and improved liver function, and in combination with the anti-diabetic drug pioglitazone.",RP+"10693638","NIH RePORTER"],
 ["Relapsed multiple myeloma; castrate-resistant prostate cancer; lung cancer","MTI-101","Preclinical","Cyclic peptide","A cyclic peptide with several solid tumour indications. NCI SBIR awards have funded a PEGylated form for relapsed myeloma and the mechanism behind its synergy with dexamethasone.",RP+"9775135","NIH RePORTER"]];
/* The NCI Fast-Track SBIR abstract (R44CA272064, NIH RePORTER) on how MTI-301 works. */
var EVID=[
 ["The target","SCD1 turns saturated fatty acids into monounsaturated ones, and it is upregulated across aggressive cancers"],
 ["In the tumour cell","Deprived of monounsaturated fatty acids, addicted cancer cells undergo ER stress and apoptotic cell death"],
 ["In the immune system","Through the calreticulin/PERK arm of ER stress, MTI-301 activates the adaptive immune response and draws activated T cells into the tumour"],
 ["With checkpoint inhibitors","Combined with an anti-PD1 antibody, MTI-301 sensitised tumours to immune checkpoint blockade in mouse triple-negative and HER2 breast cancer models"]];
/* modulationtherapeutics.com, About Us page. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Operational team",name:"Lori Hazlehurst, PhD",title:"Chief Executive Officer, Co-Founder",sum:"Professor of Pharmaceutical Sciences at West Virginia University, formerly on the faculty of the Moffitt Cancer Center."},
 {g:"Operational team",name:"Mark McLaughlin, PhD",title:"Executive Vice President, Co-Founder",sum:"Professor of Medicinal Chemistry at West Virginia University; inventor or co-inventor on 15 patents."},
 {g:"Operational team",name:"Tim Hazlehurst, BS",title:"Chief Operations Officer",sum:"More than 30 years in start-ups and company leadership; business development and fundraising since 2017."},
 {g:"Operational team",name:"Karen Hayes, PhD",title:"Senior Scientist and Project Manager, Biology",sum:"Leads in vitro and in vivo efficacy and toxicity work; a certified human clinical trial monitor."},
 {g:"Operational team",name:"Sridhar Reddy Kaulagari, PhD",title:"Senior Scientist and Project Manager, Chemistry",sum:"Nineteen years of synthetic and medicinal chemistry, from early discovery to GLP and cGMP manufacture."},
 {g:"Board of directors",name:"William S. Dalton, PhD, MD",title:"Board Member",sum:"Past President, CEO and Center Director of the Moffitt Cancer Center; founder of M2Gen."},
 {g:"Board of directors",name:"Anne Cress, PhD",title:"Board Member",sum:"Professor of Cellular and Molecular Medicine, University of Arizona; co-inventor of HYD1, part of Modulation's core IP."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["December 2025","Phase 1 clinical trial of MTI-301 activated in patients with advanced solid tumour malignancy","ClinicalTrials.gov",CT+"NCT06911008"],
 ["August 2025","NCI supplements the MTI-301 SBIR, “Modulation of cancer induced immune suppression via inhibition of SCD1” ($217,685)","NIH RePORTER",RP+"11328609"],
 ["August 2024","NCI continues the MTI-301 Fast-Track SBIR into its third year ($670,441)","NIH RePORTER",RP+"10913640"],
 ["April 2023","NIDDK awards an STTR for MTI-301, an SCD1 inhibitor, in the treatment of NASH ($344,919)","NIH RePORTER",RP+"10693638"],
 ["February 2023","Peer-reviewed NCI Fast-Track SBIR for MTI-301: up to $2.4M for preclinical work and a first-in-human trial","NIH RePORTER",RP+"10546697"]];
var SHEETS=[];
