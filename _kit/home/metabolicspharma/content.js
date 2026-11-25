var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','400 1em "Saira"','500 1em "Saira"'];
var MAIL="info@metabolicspharma.com";
var TW="https://metabolicspharma.com";
/* the pipeline: every line from metabolicspharma.com (/pipeline chart of 12 March 2026, /ent03, /ent-21, /ent-ad) and the
   releases of 25 and 27 June 2025. [indication, candidate, target · delivery, stage, detail, link, link label] */
var PIPE=[
 ["Obesity and type 2 diabetes","ENT-03","PTP1B · weekly subcutaneous injection","Phase 1","Phase 1a completed in 2025: safe and well tolerated at every dose in obese and obese, diabetic subjects, with trends toward weight loss and better insulin sensitivity. Phase 1b starting in 2026.",TW+"/ent03/","Programme"],
 ["Obesity and type 2 diabetes","ENT-21","PTP1B · oral, daily","Preclinical","An orally available pro-drug, rapidly converted to ENT-03 in the bloodstream. In animal studies it produced significant weight loss over 28 days of daily oral dosing.",TW+"/ent-21/","Programme"],
 ["Alzheimer’s disease","ENT-AD","PTP1B · injectable or oral","Preclinical","Inhibits PTP1B in microglia, the brain’s immune cells. In an Alzheimer’s mouse model it increased lifespan and markedly improved function.",TW+"/ent-ad/","Programme"]];
/* the Phase 1a trial, release of 25 June 2025 (posted on metabolicspharma.com) */
var EVID=[
 ["Design","Randomised, double-blind, single ascending dose study in seven cohorts of healthy obese subjects and obese subjects with type 2 diabetes"],
 ["Safety","ENT-03 was safe and well tolerated at all doses evaluated, the trial’s primary endpoint"],
 ["Efficacy signals","Trends toward weight loss at higher doses in both groups, along with improved insulin sensitivity"],
 ["Presented","At the American Diabetes Association 85th Scientific Sessions, 22 June 2025"]];
/* board, management and advisors, from metabolicspharma.com /about/board-of-directors and /about/advisors. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Richard Larson, MD, PhD",title:"Chairman, Chief Executive Officer & Chief Medical Officer",sum:"Founder and Director of the Clinical and Translational Science Center in New Mexico, which runs 60–250 clinical trials a year. Former professor and vice chancellor for research."},
 {g:"Leadership",name:"John Dessouki",title:"Board Member & Chief Financial Officer",sum:"Over 20 years of venture capital and finance experience, including Scientia Ventures, Route 66 Ventures, JMP Securities, Hovde Capital and Standard & Poor’s."},
 {g:"Board",name:"Mark Finn",title:"Board Member",sum:"49 years of investment experience; joined the predecessor to the Vantage Consulting Group in 1975 and was elected its Chairman."},
 {g:"Board",name:"Jay Brammer",title:"Board Member",sum:"Chairman of the Board at Enterin; 40 years as an executive, board member and investor."},
 {g:"Board",name:"Barry Miller",title:"Board Member",sum:"An entrepreneurial executive who has built new enterprises within large companies and as independent start-ups."},
 {g:"Board",name:"Mark Kamp",title:"Board Member",sum:"Over 20 years of corporate legal experience in private equity, mergers and acquisitions, hedge funds and technology transactions."},
 {g:"Board",name:"David P. Lewis",title:"Board Member",sum:"President & CEO of the Indy Championships Fund; retired Vice President, Global Taxes & Assistant Treasurer of Eli Lilly and Company."},
 {g:"Board",name:"Richard D. Propper, MD",title:"Board Member",sum:"Venture capitalist, merchant banker and financial strategist; MD from Stanford, former Research Fellow in Pediatrics at Harvard Medical School."},
 {g:"Advisors",name:"Alan Moses, MD, FACP",title:"Advisory Board",sum:"Former CMO of Novo Nordisk, including GLP-1 development; former CMO at Joslin Diabetes Center and Professor of Medicine at Harvard Medical School."},
 {g:"Advisors",name:"Michael Zemel, PhD",title:"Advisory Board",sum:"Former Professor of Medicine, Nutrition and Metabolism at the University of Tennessee; leads research on energy sensing."},
 {g:"Advisors",name:"Alexander Fleming, MD",title:"Advisory Board",sum:"Former Senior Medical Officer, Division of Metabolic and Endocrine Drug Products, FDA."}];
/* news: only items with a working link (metabolicspharma.com/news). [date, headline, source, url] */
var NEWS=[
 ["June 2025","ENT-03 generates sustained weight loss and liver pathology improvements in an animal model for obesity","Metabolics Pharma",TW+"/june-27-2025-metabolics-pharma-announces-ent-03-generates-sustained-weight-loss-and-liver-pathology-improvements-in-an-animal-model-for-obesity/"],
 ["June 2025","Positive top-line results from the Phase 1a trial of ENT-03 in obese and diabetic subjects","Metabolics Pharma",TW+"/june-25-2025-metabolics-pharma-announces-positive-top-line-results-from-phase-1a-clinical-trial-of-ent-03-in-obese-and-diabetic-subjects/"],
 ["June 2023","ENT-03 shows strong benefit on body weight, adiposity and blood glucose versus semaglutide in obese mice","Enterin",TW+"/june-24-2023-enterin-presents-data-demonstrating-strong-benefit-of-ent-03-on-body-weight-adiposity-and-blood-glucose-vs-semaglutide-in-a-diet-induced-obesity-mouse-model/"],
 ["June 2023","First-in-human study of ENT-03 in obesity and type 2 diabetes begins","Enterin",TW+"/june-5-2023-enterin-announces-the-start-of-a-first-in-human-study-of-ent-03-in-obesity-and-type-2-diabetes/"],
 ["February 2023","ENT-03 shows benefit in MASH, fatty liver disease, in preclinical studies","Enterin",TW+"/feb-1-23-enterin-announces-ent-03-benefit-in-mash/"]];
var SHEETS=[];
