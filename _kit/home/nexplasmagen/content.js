var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Red Hat Display"','500 1em "Red Hat Display"','600 1em "Red Hat Display"','400 1em "Questrial"'];
var MAIL="valerie.leveille@nexplasmagen.com";
var NB="https://nexplasmagen.com/";
/* progress, from nexplasmagen.com (Technology, "Our progress"; About, "Where we are today / going") and the NRC IRAP
   contribution record (open.canada.ca, 2025-05-26). [stage, years, title, status, done 0..4, incl. in-progress, detail, dim] */
var PIPE=[
 ["Stage 1","2016–2018","Prototypes and cell lines","Completed",1,1,"A commercial unit built and 12 breast cancer cell lines treated with the CPJ. Successful in vitro tests have also been done on sarcoma cells.",0],
 ["Stage 2","2019–2021","3D tumour model and small animals","Completed",2,2,"The CPJ treated breast cancer cells in a 3D tumour model and in vivo, killing residual breast cancer cells in the tumour bed after the tumour was removed in a mouse model.",0],
 ["Stage 3","From 2025","Pre-production applicator","Under way",2,2.7,"Design of the pre-production applicator and its in vitro testing for breast cancer, then the pre-production control unit, supported by a CAD 197,000 contribution from the National Research Council of Canada (NRC IRAP).",0],
 ["Stage 4","Next","First-in-human trials","In preparation",2,2,"Trials to show the CPJ can kill residual breast cancer cells in the tumour bed after the tumour is removed, beginning with breast-conserving surgery.",1]];
/* peer-reviewed work with the CPJ technology and its predecessors (nexplasmagen.com, Facts) */
var EVID=[
 ["Cancers, 2020","Synergy between non-thermal plasma with radiation therapy and olaparib in a panel of breast cancer cell lines","https://doi.org/10.3390/cancers12020348"],
 ["IEEE TRPMS, 2020","Comparison of three radio-frequency discharge modes on the treatment of breast cancer cells in vitro",""],
 ["Plasma Proc. Polym., 2010","Effect of non-thermal plasmas on DNA and mammalian cells",""],
 ["New J. Phys., 2009","Cell permeabilization using a non-thermal plasma",""]];
/* nexplasmagen.com (Home: Team, Board, Scientific and Business advisory committees). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Team",name:"Valérie Léveillé, PhD",title:"Founder and CEO",sum:"16 years in technology R&D, design and commercialization; co-inventor of NexPlasmaGen’s technology."},
 {g:"Team",name:"Audrey Glory, PhD",title:"Preclinical trials leader",sum:"Conducts preclinical trials for breast and other cancers, at NexPlasmaGen and the CR-CHUM."},
 {g:"Team",name:"Julie Lafontaine, PhD",title:"Laboratory supervisor, CR-CHUM",sum:"Supervises Dr. Wong’s laboratory and plays a crucial role in NexPlasmaGen’s preclinical trials."},
 {g:"Board of directors",name:"Valérie Léveillé, PhD",title:"Board member and CEO",sum:""},
 {g:"Board of directors",name:"David Uffer, MA, MBA",title:"Managing Director MedTech, Trinity Life Sciences",sum:"30 years commercializing medical devices, including at Covidien, Hologic, Boston Scientific and Bovie Medical."},
 {g:"Board of directors",name:"Suman Mallick, MBA, MFA",title:"Managing Director, Keystone National Group",sum:"Angel investor with the Southwest Angel Network."},
 {g:"Scientific advisory committee",name:"Philip Wong, MDCM, FRCPC",title:"Radiation Oncology, University of Toronto",sum:"Clinician-investigator at Princess Margaret Cancer Centre; leads NexPlasmaGen’s clinical program and is co-inventor of its technology."},
 {g:"Scientific advisory committee",name:"Erica Patocskai, MD, FRCSC",title:"Chief, Surgical Oncology Service, CHUM",sum:"Associate clinical professor of surgery, Université de Montréal."},
 {g:"Scientific advisory committee",name:"Jean-François Lapointe, PhD",title:"Regulatory and clinical affairs",sum:"Consultant, Lok North America."},
 {g:"Business advisory committee",name:"Sohaib Siddiqui, MD, FRCSI",title:"Managing Partner, Kettlebeck Ventures",sum:"Entrepreneur in residence at TIAP and the Faculty of Medicine; Innovation Fellow at Women’s College."},
 {g:"Business advisory committee",name:"Edward J. Dougherty, MS",title:"Principal, dougherty.consulting",sum:"30 years in regulatory and reimbursement for medical devices."},
 {g:"Business advisory committee",name:"Samuel Ohayon, MS",title:"Entrepreneur in Residence, CTS",sum:"Venture partner for health tech funds; trained as a molecular pathologist."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","First place at the FemTechBreakfastClub Montréal 2026 pitch competition","NexPlasmaGen",NB+"1st-place-at-femtechbreakfastclub-montreal2026-pitch-competition/"],
 ["June 2026","NexPlasmaGen named a finalist of the FemTechBreakfastClub 2026 program","NexPlasmaGen",NB+"nexplasmagen-finalist-of-the-femtechbreakfastclub-2026-program/"],
 ["June 2026","NexPlasmaGen featured in Profit Tribune magazine","NexPlasmaGen",NB+"nexplasmagen-featured-in-the-profit-tribune-magazine/"],
 ["June 2026","Presenting at the Global Innovation in Women’s Health Pitch Showcase","NexPlasmaGen",NB+"presenting-at-global-innovation-in-womens-health-pitch-showcase/"],
 ["May 2026","Winner of the TiEQuest 2026 Medtech track pitch competition","NexPlasmaGen",NB+"nexplasmagen-winner-of-tiequest-2026-medtech-track/"],
 ["May 2025","NRC IRAP contribution for a pre-production applicator and in vitro testing","Government of Canada","https://search.open.canada.ca/grants/record/nrc-cnrc,172-2025-2026-Q2-1034054,current"]];
var SHEETS=[];
