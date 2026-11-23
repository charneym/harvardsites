var FONTS=['300 1em "Figtree"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"'];
var MAIL="mailto:info@cristcot.com";
var NB="https://cristcot.com/news/";
var NDA=NB+"cristcot-announces-fda-acceptance-of-nda-for-next-generation-hydrocortisone-acetate-nghca-for-treatment-of-ulcerative-colitis-uc-of-the-rectum";
var P3=NB+"9-january-2025-cristcot-announces-positive-phase-3-results-for-novel-hydrocortisone-acetate-suppository-administered-for-the-treatment-of-ulcerative-colitis";
/* Programs, from cristcot.com (Science: Pipeline, and its pipeline chart) and the 21 April 2026 NDA release.
   Stage words only as the company states them. [program, area, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["ngHCA","Lead program","Ulcerative colitis of the rectum","NDA accepted by the FDA · PDUFA target date October 2026","Hydrocortisone acetate 90 mg suppository given with the patented Sephure&#174; suppository applicator, for acute flares. The pivotal Phase 3 cessa trial met its primary endpoint of clinical remission by Day 29.",0,"NDA",NDA,"NDA release"],
 ["Next generation","In development","Hemorrhoid disease","Investigational","An investigational program built on Cristcot&#8217;s patented delivery and formulation technologies.",1,"Development","",""],
 ["Next generation","Discovery","Ulcerative colitis","Investigational","A further ulcerative colitis program, to expand treatment options and improve patient outcomes.",1,"Discovery","",""],
 ["Next generation","Discovery","Acute pancreatitis","Investigational","An investigational program in acute pancreatitis, named in Cristcot&#8217;s diversified pipeline.",1,"Discovery","",""],
 ["Next generation","Discovery","Other inflammatory GI indications","Investigational","Additional products in development and evaluation for inflammatory gastrointestinal disease.",1,"Discovery","",""]];
/* Milestones, as Cristcot's releases (9 January 2025, 21 April 2026) and its Science page state them. */
var EVID=[
 ["Phase 3 met its primary endpoint","Clinical remission by Day 29 in 20.2% of patients on active treatment, against 2.1% on placebo, in the randomized, double-blind cessa trial"],
 ["NDA accepted","The FDA accepted Cristcot&#8217;s 505(b)(2) New Drug Application in April 2026 and set a PDUFA target date in October 2026"],
 ["97% compliance","On the once-daily regimen in the Phase 3 trial, with side effects generally mild and consistent with corticosteroid use"],
 ["Protected to late 2036","Composition of matter and utility patents cover the formulation, devices, manufacturing processes and drug testing assay methods"]];
/* cristcot.com (Our Team). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Jennifer J. Davagian",title:"Founder, Chair & Chief Executive Officer",sum:"Founded Cristcot in 2008 and is the named inventor of all its patented technologies; directs operations from finance to manufacturing, clinical research and FDA interactions."},
 {g:"Leadership",name:"Mark C. Ensign",title:"Founder, Chief Operating Officer & Chief Scientific Officer",sum:"Joined in 2014; guides scientific strategy, product development and manufacturing, with expertise in device engineering and suppository formulation."},
 {g:"Leadership",name:"Mark A. Parent",title:"Chief Financial Officer",sum:"Joined in 2015, bringing more than 25 years in financial operations, strategic planning and capital management; formerly President of MAP Advisors."},
 {g:"Leadership",name:"Jenny Gizzi",title:"Chief Administration Officer",sum:"More than 20 years of leadership across major pharmaceutical and biotechnology organizations; leads administrative, IT and operational infrastructure."},
 {g:"Leadership",name:"Rayna Sethi Herman",title:"President & Chief Commercial Officer, Hydrocortisone Acetate Division",sum:"More than 30 years leading commercialization, with over 20 product launches; previously Chief Commercial Officer at Shorla Oncology."},
 {g:"Leadership",name:"Dr. William Gannon",title:"Chief Medical Officer",sum:"Extensive experience in clinical development, trial execution and global regulatory strategy."},
 {g:"Board",name:"Henry Kay",title:"Director",sum:"Private investor, formerly of Allergan and Boston Scientific."},
 {g:"Board",name:"Marc Keller",title:"Director",sum:"Private investor; senior executive at CIBC Private Wealth."},
 {g:"Board",name:"Ernest H. Pomerantz",title:"Director",sum:"Private investor, formerly of Warburg Pincus."},
 {g:"Board",name:"David Shepherd",title:"Director",sum:"Private investor; principal at Shepherd Kaplan Krochuk, LLC."},
 {g:"Board",name:"Richard Warburg",title:"Director",sum:"Patent attorney and executive experienced in FDA approvals for pharmaceuticals and devices."}];
var NEWS=[
 ["27 July 2026","Cristcot presents a poster and select oral presentation at ENDO 2026","cristcot.com",NB+"cristcot-presents-poster-and-select-oral-presentation-for-implementing-endocrine-principles-to-assess-safety-and-compliance-within-a-clinical-trial-at-endo-2026"],
 ["6 May 2026","Cristcot appoints Rayna Herman as President of its Hydrocortisone Acetate Commercial Division","cristcot.com",NB+"cristcot-appoints-rayna-sethi-herman-as-president-of-its-hydrocortisone-acetate-commercial-division"],
 ["29 April 2026","Cristcot to present an oral abstract at Digestive Disease Week 2026","cristcot.com",NB+"cristcot-to-present-oral-abstract-at-2026-digestive-disease-week-ddw"],
 ["21 April 2026","FDA accepts Cristcot&#8217;s NDA for next-generation hydrocortisone acetate (ngHCA) for ulcerative colitis of the rectum","cristcot.com",NDA],
 ["9 January 2025","Positive Phase 3 results for Cristcot&#8217;s hydrocortisone acetate suppository in ulcerative colitis","cristcot.com",P3]];
var SHEETS=[];
