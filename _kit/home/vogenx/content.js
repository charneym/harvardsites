var FONTS=['300 1em "Inter Tight"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:info@vogenx.com";
var NW="https://www.newswire.com/news/vogenx-initiates-phase-2b-emerge-study-of-mizagliflozin-for-post-bariatric";
var VX="https://vogenx.com/";
/* Programs, from vogenx.com (Pipeline, Post Bariatric Hypoglycemia, Gastroparesis) and the 15 October 2026 release.
   Stage words only as the company states them. [program, area, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["Mizagliflozin","Post-bariatric hypoglycemia","Oral SGLT1 inhibitor","Phase 2b (EMERGE)","EMERGE (VGX-001-013; NCT07760961), initiated in October 2026: randomized, double-blind and placebo-controlled, in approximately 36 adults at about 10 U.S. sites, comparing 5 mg and 10 mg three times daily with placebo for 28 days.",0,"Clinical",NW,"Newswire"],
 ["Mizagliflozin","Gastroparesis","Oral SGLT1 inhibitor","IND planned, then Phase 2","Vogenx plans to submit an IND for gastroparesis in 2026, followed by a Phase 2 proof-of-concept trial in idiopathic gastroparesis, with change in gastric emptying as the expected primary endpoint.",1,"Planned","",""],
 ["Mizagliflozin","GIP-dependent Cushing&#8217;s syndrome","Oral SGLT1 inhibitor","Under evaluation","Vogenx is also evaluating mizagliflozin as a treatment for this rare metabolic disease.",1,"Evaluation","",""],
 ["VGX-2857","Metabolic disease","Investigational drug candidate","Under evaluation","Under evaluation for metabolic disease indications, including weight maintenance after substantial weight loss.",1,"Evaluation","",""]];
/* Results and milestones, as vogenx.com (Post Bariatric Hypoglycemia) and the 15 October 2026 release state them. */
var EVID=[
 ["+56% glucose nadir","In study VGX-001-012, mizagliflozin 5 mg and 10 mg TID combined raised the glucose nadir by 56% (+20 mg/dL; p=0.028) compared with placebo during the mixed-meal test, in the subgroup of patients who became hypoglycemic"],
 ["&#8722;64% insulin peak","In the same subgroup the insulin peak fell by 64% (p=0.03) and the glucose peak by 34% (p=0.031)"],
 ["500+ subjects","Mizagliflozin has been administered to more than 500 subjects in 10 clinical studies, well tolerated with no drug-related serious adverse events"],
 ["Nasdaq: VOGX","Vogenx, Inc. is listed on the Nasdaq Capital Market"]];
/* vogenx.com (Management Team, Board of Directors, Scientific Advisors). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Management",name:"James Green",title:"Chief Executive Officer & Chairman",sum:"Previously CEO of public and private clinical-stage drug development companies; earlier in licensing, acquisitions and investments at a global pharmaceutical company, and in banking."},
 {g:"Management",name:"William Wilkison, PhD",title:"Chief Scientific Officer",sum:"Chairs the Scientific Advisory Board. Founder and senior executive at drug development companies; metabolic disease research and business development at GlaxoSmithKline. PhD, Duke; postdoc, Harvard Medical School."},
 {g:"Management",name:"Steven Delmar",title:"Chief Financial Officer",sum:"Over two decades of public company CFO and executive experience in pharmaceuticals, telecommunications and software, including an IPO and several financings."},
 {g:"Management",name:"Bentley Cheatham, PhD",title:"Vice President, Research & Development",sum:"Formerly an Assistant Professor running his own laboratory at the Joslin Diabetes Center, Harvard Medical School; established numerous NIH-funded drug discovery programs."},
 {g:"Board of directors",name:"Tim Boris, Esq.",title:"Director",sum:"General Counsel and director of Elucida Oncology; director of Lipidio Pharmaceuticals. Joined the board in 2022."},
 {g:"Board of directors",name:"Peter Pieraccini",title:"Director",sum:"Retired President and CEO of ZenBio; founder or co-founder and chief executive of multiple companies. Joined the board in 2022."},
 {g:"Board of directors",name:"Ken Toombs",title:"Director",sum:"Former Global Head of Infosys Consulting and Deputy CEO of Capgemini Consulting; formerly a partner at PricewaterhouseCoopers."},
 {g:"Scientific advisors",name:"C. Ronald Kahn, MD",title:"Joslin Diabetes Center · Harvard Medical School",sum:"Section Head, Integrative Physiology and Metabolism; Mary K. Iacocca Professor of Medicine. SAB member."},
 {g:"Scientific advisors",name:"David A. D&#8217;Alessio, MD",title:"Duke University School of Medicine",sum:"James B. Wyngaarden Distinguished Professor of Medicine, Division of Endocrinology & Metabolism. SAB member."},
 {g:"Scientific advisors",name:"Michael Camilleri, MD, DSc",title:"Mayo Clinic",sum:"Division of Gastroenterology and Hepatology. SAB member."},
 {g:"Scientific advisors",name:"Marzieh Salehi, MD",title:"University of Texas, San Antonio",sum:"Professor of Medicine, Endocrinology. SAB member."},
 {g:"Scientific advisors",name:"Tracey McLaughlin, MD",title:"Stanford School of Medicine",sum:"Professor of Medicine, Endocrinology."},
 {g:"Scientific advisors",name:"Helen Lawler, MD",title:"University of Colorado Anschutz Medical Campus",sum:"Associate Professor of Medicine, Endocrinology & Metabolism."}];
var NEWS=[
 ["15 October 2026","Vogenx initiates Phase 2b EMERGE study of mizagliflozin for post-bariatric hypoglycemia","Newswire",NW],
 ["15 April 2025","Vogenx to present Phase 2 clinical data on mizagliflozin at the Endocrine Society (ENDO) 2025 annual conference","vogenx.com",VX+"vogenx-inc-to-present-phase-2-clinical-data-on-mizagliflozin-at-the-endocrine-society-endo-2025-annual-conference/"],
 ["26 June 2024","Vogenx announces positive results from second Phase 2 study of mizagliflozin in post-bariatric hypoglycemia","vogenx.com",VX+"vogenx-announces-positive-results-in-second-phase-2-study-of-mizagliflozin-in-post-bariatric-hypoglycemia/"],
 ["2 April 2024","Vogenx completes dosing of last patient in Phase 2 clinical study of mizagliflozin for post-bariatric hypoglycemia","vogenx.com",VX+"vogenx-completes-dosing-of-last-patient-in-phase-2-clinical-study-of-mizagliflozin-for-the-treatment-of-post-bariatric-hypoglycemia/"],
 ["15 February 2024","Vogenx completes enrollment of Phase 2 trial of mizagliflozin for post-bariatric hypoglycemia","vogenx.com",VX+"vogenx-completes-enrollment-of-phase-2-trial-of-mizagliflozin-for-post-bariatric-hypoglycemia/"]];
var SHEETS=[];
