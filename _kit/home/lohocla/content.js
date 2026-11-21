var FONTS=['300 1em "Josefin Sans"','italic 300 1em "Josefin Sans"','400 1em "Josefin Sans"','italic 400 1em "Josefin Sans"','600 1em "Josefin Sans"','400 1em "Lato"','700 1em "Lato"'];
var MAIL="inquiry@lohocla.com";
var TEL="+1 (303) 645-3788";
var RP="https://reporter.nih.gov/project-details/";
var PR="https://lohocla.com/media/pdf/";
/* the pipeline: every line from lohocla.com (/research, /research/pipeline), their press releases and NIH RePORTER.
   [indication, programme, area, stage, detail, link, link label] */
var PIPE=[
 ["Chronic pain","Kindolor®","Non-opiate analgesic","Phase 1","A non-opiate, non-addicting molecule designed to calm the over-active peripheral sensory pathway behind chronic pain. It does not act in the central nervous system, controls hyperalgesia without removing normal, protective pain, and reversed chronic pain in six preclinical models. IND cleared by the FDA in October 2023; first-in-human trials began in May 2024, funded by NIDA and the NIH HEAL Initiative.",PR+"LohoclaResearch_Kindolor_Phase1-trials_PRESS_RELEASE.pdf","Press release"],
 ["Alcohol use disorder","Nezavist®","Craving and relapse","IND cleared","A non-addicting medication that reduces the increased drinking that accompanies withdrawal in alcohol-dependent individuals, and the hyperexcitability, anxiety, depression and craving that come with abstinence. IND cleared by the FDA in March 2024 for Phase 1 and 2 trials; supported by NIAAA SBIR Phase II funding, continued in 2025.",RP+"11124195","NIH RePORTER"],
 ["Lohocla platform","LOH100","Next molecule","Preclinical","The next molecule from the same multi-target design platform, in preclinical efficacy studies on Lohocla’s development pipeline.","https://lohocla.com/research/pipeline","Pipeline"]];
/* lohocla.com/people. Text-only masthead; summaries condensed from their biosketches. */
var TEAM=[
 {g:"Corporate officers",name:"Boris Tabakoff, PhD",title:"Founder, CEO & Chief Scientific Officer",sum:"Pharmacist and molecular pharmacologist; former Scientific Director of NIAAA’s Intramural Research Program and Chair of Pharmacology at the University of Colorado. Over 300 publications."},
 {g:"Corporate officers",name:"Paula Hoffman, PhD",title:"Vice President, Research & Development",sum:"Molecular mechanisms of alcohol and drug tolerance and dependence; more than 200 papers. Jellinek Memorial Award and RSA Distinguished Researcher Award."},
 {g:"Corporate officers",name:"Jim Finster, MPA",title:"Chief Operations Officer",sum:"Joined in 2019 to lead finance, administration and technology; builds the company’s data systems and software."},
 {g:"Research advisory board",name:"Uwe Christians, MD, PhD",title:"Pharmacokinetics · iC42",sum:"Founder and Laboratory Director of iC42 Clinical Research and Development, University of Colorado."},
 {g:"Research advisory board",name:"Leigh Ann Burns Naas, PhD",title:"Toxicology · Magnolia Toxicology",sum:"Nonclinical safety strategy; formerly Head of Nonclinical Safety & Pathobiology at Gilead Sciences."},
 {g:"Research advisory board",name:"Barbara J. Mason, PhD",title:"Clinical trials · Scripps Research",sum:"Director of the Laboratory of Clinical Psychopharmacology; led the first US study of acamprosate for alcohol dependence."},
 {g:"Research advisory board",name:"Steven Pikulin, PhD",title:"CMC · TechReg Services",sum:"Author of well over 100 new drug, biologic and generic CMC submissions."},
 {g:"Research advisory board",name:"Janet Ransom, PhD",title:"Regulatory affairs · Fast-Track Drugs and Biologics",sum:"Over 25 years in biomedical research, from product inception to clinical trials and licensure."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2025","NIAAA continues SBIR Phase II funding for Nezavist, a novel molecule for treatment of alcohol use disorder","NIH RePORTER",RP+"11124195"],
 ["October 2024","Lohocla Research recognised as a leader in innovation with a 2024 Colorado Inno Award from the Denver Business Journal","Press release",PR+"LohoclaResearch_2024_CO_Innov_Award_PRESS_RELEASE.pdf"],
 ["May 2024","Lohocla Research embarks upon Phase 1 human trials of Kindolor, its first-in-class medication for chronic pain","Press release",PR+"LohoclaResearch_Kindolor_Phase1-trials_PRESS_RELEASE.pdf"],
 ["March 2024","FDA clears the Investigational New Drug application for Nezavist, for treating addiction and craving","Press release",PR+"LohoclaResearch_Nezavist_IND_approval_PRESS_RELEASE.pdf"],
 ["October 2023","FDA clears the Investigational New Drug application for Kindolor, for treating chronic pain","Press release",PR+"LohoclaResearch_Kindolor_IND_approval_PRESS_RELEASE.pdf"],
 ["July 2021","NIH funds first-in-human trials of Kindolor, an opiate-sparing drug for chronic pain","Press release",PR+"NIDA_U-phase_award_PRESS_RELEASE.pdf"]];
var SHEETS=[];
