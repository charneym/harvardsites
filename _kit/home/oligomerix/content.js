var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Jost"','500 1em "Jost"','600 1em "Jost"'];
var MAIL="jpasini@oligomerix.com";
var BW="https://www.businesswire.com/news/home/";
/* the pipeline, from oligomerix.com (Pipeline, Therapeutic Areas, News: "Oligomerix Completes Ph 1a Clinical Study on OLX-07010", May 2026):
   [programme, sub, indication, stage label, progress 0..4 (done), progress incl. in-progress, detail, dim] */
var PIPE=[
 ["OLX-07010","Lead compound","Alzheimer’s disease","Phase 1a completed · preparing Phase 1b",2.75,3.15,"An oral tau self-association inhibitor. The Phase 1a study in 76 healthy younger and older volunteers (single and multiple doses, 25 to 200 mg) is complete; while it is still blinded, preliminary results show a favourable safety profile and pharmacokinetics in line with modelled predictions.",0,"Clinical"],
 ["OLX-07010","Rare tauopathies","Progressive supranuclear palsy (PSP) and frontotemporal dementia (FTD)","Preclinical proof of concept",2,2.5,"Inhibited tau aggregation in P301L tau mice modelling inherited forms of PSP and FTD (PLoS One, 2023). Rare tauopathies start earlier and progress faster than Alzheimer’s disease, allowing early signals of target engagement and potentially faster regulatory review.",0,"Rare disease"],
 ["2nd generation","Series","Neurodegenerative tauopathies","Characterisation",1,1.4,"Oligomerix has begun to characterise a second generation series of small molecule tau aggregation inhibitors.",1,"Discovery"]];
/* preclinical evidence: oligomerix.com (Pipeline > OLX07010 Alzheimer’s; News & Publications) */
var EVID=[
 ["htau mice","Treating young human-tau mice inhibited the formation of tau aggregates (J Alzheimers Dis, 2020)"],
 ["P301L mice","Effective in mice modelling inherited PSP and FTD, where mutated tau is more prone to misfold and aggregate (PLoS One, 2023)"],
 ["Aged mice","Therapeutic treatment of aged mice that had already developed tau aggregates inhibited their progression and ameliorated motor deficits (Patel DR et al., 2024)"],
 ["Tau and amyloid","Also inhibited tau aggregation in mice that develop both tau and amyloid beta aggregates, the two hallmarks of Alzheimer’s disease (2024)"]];
/* oligomerix.com (About > Management, Board of Directors) and the company’s August 2026 release. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Cara Cassino, MD",title:"Interim President and Chief Executive Officer",sum:"About 25 years in clinical development, at Boehringer Ingelheim, Pfizer, Forest Laboratories and ContraFect."},
 {g:"Leadership",name:"James Moe, PhD, MBA",title:"Co-founder; Head of Discovery and Strategy; Director",sum:"Thirty years in diagnostics and biopharmaceutical product development; PhD from Wesleyan University, MBA from Boston University."},
 {g:"Leadership",name:"Eliot J. Davidowitz, PhD",title:"Chief Scientific Officer; Co-founder",sum:"Assay development for drug discovery targeting tau; NIH postdoctoral fellow at Albert Einstein College of Medicine."},
 {g:"Leadership",name:"Jack Pasini, MBA",title:"Director; Chief Commercial Officer",sum:""},
 {g:"Leadership",name:"Robert Foerster, MBA",title:"Director; Chief Financial Officer and Chief Operating Officer",sum:""},
 {g:"Leadership",name:"Edward Cheesman, PhD",title:"Senior Director, Chemistry",sum:""},
 {g:"Board of directors",name:"F. William (Bill) Caple",title:"Chairman",sum:"Corporate strategist and international investment banker; founder of Caple Advisory."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","Oligomerix appoints biopharmaceutical industry veteran Cara Cassino, M.D. as Interim President and Chief Executive Officer","Business Wire",BW+"20260831070861/en/Oligomerix-Appoints-Biopharmaceutical-Industry-Veteran-Cara-Cassino-M.D.-as-Interim-President-and-Chief-Executive-Officer"],
 ["June 2026","Oligomerix awarded $1.9M NIH Phase II SBIR Fast-Track grant for the safety studies required for clinical studies of OLX-07010 in Alzheimer’s patients","Business Wire",BW+"20260616023639/en/Oligomerix-Awarded-%241.9-M-NIH-Phase-II-SBIR-Fast-Track-Grant-to-Conduct-Safety-Studies-Required-for-Clinical-Studies-of-OLX-07010-in-Alzheimers-Patients"],
 ["May 2026","Oligomerix completes its Phase 1a clinical study of OLX-07010","Business Wire",BW+"20260519090230/en/Oligomerix-Completes-Ph-1a-Clinical-Study-on-OLX-07010"],
 ["November 2025","Oligomerix awarded a $0.5M Phase I NIH SBIR Fast-Track grant for safety studies supporting clinical studies of OLX-07010","Business Wire",BW+"20251118029300/en/Oligomerix-Awarded-%240.5-M-phase-I-NIH-SBIR-Fast-Track-Grant-to-Conduct-Safety-Studies-that-will-Support-Clinical-Studies-of-OLX-07010-for-Alzheimers-Patients"],
 ["September 2025","Oligomerix elects William Caple chairman of its board of directors","Business Wire",BW+"20250903627948/en/Oligomerix-Elects-New-Chairman-William-Caple-to-Board-of-Directors"],
 ["August 2023","Small molecule inhibitor of tau self-association in a mouse model of tauopathy: a preventive study in P301L tau JNPL3 mice","PLoS One","https://doi.org/10.1371/journal.pone.0286523"]];
var SHEETS=[];
