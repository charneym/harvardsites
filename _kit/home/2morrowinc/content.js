var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','600 1em "Barlow Semi Condensed"'];
var MAIL="info@2morrowinc.com";
var NU="https://www.2morrowinc.com/news/";
/* the three bundles, from 2morrowinc.com/products (2Morrow Health). [name, subtitle, text, programmes, support] */
var BUND=[
 ["Wellbeing Bundle","Healthy mind and body","A whole-person approach to healthy living that combines seven digital programs supporting personal growth. Participants take one or more, based on their own goals.","Valued Goals · Stress · Weight · Sleep · Change · Chronic Pain · Tobacco","Coaches they connect with on their terms"],
 ["Resolve Bundle","Coping and self-care","Behavioral health strategies for coping with life’s challenges: making room for unhelpful thoughts and feelings while doing more of the things that matter.","Valued Goals · Stress · Sleep · Change","Coaching when, and if, participants want it"],
 ["Breathe Bundle","Living tobacco free","A holistic approach to the urge to smoke or use tobacco, treating each participant as a whole person, with healthy-living programs that reinforce the same coping skills.","Tobacco · Stress · Weight","Coaches, education and nicotine replacement therapy for those who qualify"]];
/* research programmes, from 2morrowinc.com/insights (Research, Evidence & Insights, reviewed August 2026). [area, tag, title, partners, detail, link label, url] */
var RES=[
 ["Tobacco cessation","Phase III RCT","The iCanQuit trial","Fred Hutchinson Cancer Center · JAMA Internal Medicine, 2020","An ACT-based smoking cessation app compared with the National Cancer Institute’s QuitGuide in 2,415 adults, with follow-up at 3, 6 and 12 months. 2Morrow holds an exclusive license to commercialize the technology developed through the Fred Hutch research.","The study","https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2770816"],
 ["Chronic pain","NIH HEAL · SBIR","Salty for Chronic Pain","University of Washington School of Medicine · JMIR Human Factors, 2026","A $1.9 million NIH Small Business Innovation Research grant through the NIH HEAL Initiative funds the program’s development and study. A 2026 feasibility study examined engagement and perceived usefulness; it was not designed to establish clinical efficacy.","The paper","https://humanfactors.jmir.org/2026/1/e88122"]];
/* the Phase III trial at a glance (2morrowinc.com/insights) */
var EVID=[
 ["Primary outcome","30-day abstinence at 12 months: 28.2% with the ACT-based app, against 21.1% with QuitGuide"],
 ["Odds of quitting","1.49 times the odds of 30-day abstinence at 12 months with the ACT-based app"],
 ["Seven-day abstinence","34.2% at 12 months for participants using the ACT-based app"],
 ["Retention","87.2% of participants retained through the 12-month follow-up"]];
/* 2morrowinc.com/team. Text-only masthead (CI/CL). Summaries only restate the site. */
var TEAM=[
 {g:"Leadership",name:"Jo Masterson, RN, MBA",title:"CEO and Co-founder",sum:"Began her career as an RN; serial entrepreneur, named a “40 under 40” by the Puget Sound Business Journal. Principal investigator of the NIH-funded chronic pain study."},
 {g:"Leadership",name:"Brandon Masterson",title:"Founder, COO and CTO",sum:"The original founder and CEO, mobilizing behavior change before the term “digital health” existed; drives operations and scalability."},
 {g:"Leadership",name:"Deanna Waters, LMHC",title:"VP of Participant Success",sum:"Leads coaching, support and program teams. Licensed mental health counselor trained in ACT and a Mayo Clinic Certified Tobacco Treatment Specialist."},
 {g:"Leadership",name:"Ryan Shanahan",title:"Chief Information Security Officer",sum:"Leads the strategy that safeguards organizational data and ensures compliance. CISSP, CISM, GCIH, GWAPT, GISP."},
 {g:"Board of directors",name:"Eric Larsen",title:"Investor Director",sum:"Led technology at Quellos through its growth and sale to BlackRock, where he was a Managing Director until 2016. CFA."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","2Morrow named one of TIME and Statista’s World’s Top HealthTech Companies of 2026, in the Prevention category","2Morrow news",NU+"2morrow-time-top-healthtech-companies-2026"],
 ["September 2026","2Morrow included in StartupBlink’s 2026 ranking of top healthtech startups in Kirkland","2Morrow news",NU+"2morrow-startupblink-kirkland-healthtech-2026"],
 ["June 2026","A new NIH-funded study finds adults with chronic pain kept coming back to Salty, without a single reminder","2Morrow news",NU+"nih-funded-chronic-pain-study"],
 ["July 2025","Named one of PharmaShots’ 20 Innovative Digital Therapeutics Companies of 2025","PharmaShots","https://pharmashots.com/25788/20-innovative-digital-therapeutics-companies-of-2025/"],
 ["June 2025","2Morrow awarded the DiMe Seal for excellence in digital behavior change","2Morrow news",NU+"2morrow-awarded-dime-seal-recognized-for-excellence-in-digital-behavior-change"],
 ["February 2025","Jo Masterson speaks on digital programs for pain at ICIMH 2025 in Seattle","2Morrow news",NU+"jo-masterson-to-speak-at-icimh-2025"]];
var SHEETS=[];
