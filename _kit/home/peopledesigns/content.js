var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Raleway"','500 1em "Raleway"','600 1em "Raleway"','700 1em "Raleway"'];
var MAIL="inquiry@peopledesigns.com";
var RP="https://reporter.nih.gov/project-details/";
var PM="https://pubmed.ncbi.nlm.nih.gov/";
/* impact: every claim from peopledesigns.com (#impact), each paired with a public record of that line of work
   (NIH RePORTER for People Designs, Inc., PI David Farrell; PubMed). [area, title, sub, detail, link, link label] */
var IMPACT=[
 ["Advance care planning","Preparing for the end of life on one’s own terms","NIA SBIR, 2022","People Designs has helped hundreds of thousands of people prepare for the end of life on their own terms, and is developing a delivery system to help healthcare organisations adopt PREPARE for Your Care.",RP+"10546110","NIH RePORTER"],
 ["Dementia","Financial and legal planning with caregivers","NIA SBIR Phase II, 2021–2025","Thousands of people and their caregivers have prepared for the financial and legal needs of dementia and other life-changing events through an eHealth platform People Designs built and studied.",RP+"10690701","NIH RePORTER"],
 ["Cancer survivorship","Lifestyle change after cancer","J Med Internet Res, 2026","Thousands of cancer survivors have improved their wellbeing after cancer through lifestyle changes; a 2026 analysis of a randomised trial linked website use with behaviour change and weight loss.",PM+"41617212/","PubMed"],
 ["Chronic conditions","Managing pain, diabetes and more","Contemp Clin Trials, 2025","Thousands of patients with diabetes, pain and other chronic conditions manage their health; a randomised trial of web-based pain coping skills training for breast cancer survivors is under way.",PM+"39706331/","PubMed"],
 ["Clinician communication","Better conversations in the clinic","NICHD SBIR, 2013","Hundreds of doctors, physician assistants, midwives and other clinicians have improved their patient communication skills, for example in a tailored internet program on smoking cessation counselling.",RP+"8589514","NIH RePORTER"]];
/* peopledesigns.com #staff; portraits are theirs. Summaries condensed from their bios. */
var TEAM=[
 {name:"David Farrell, MPH",title:"Founder & President",img:"team-farrell.webp",sum:"Intervention design, health communication content, UX and UI design, dissemination planning and business operations. PI on multiple SBIR research grants."},
 {name:"Jonathan Wall, MM",title:"Senior Software Developer",img:"team-wall.webp",sum:"Lead developer of multiple health communication web and mobile applications, with expertise in open-source technology, security and privacy."},
 {name:"Veronica Correa, BA",title:"Project Manager",img:"team-correa.webp",sum:"Translator, healthcare interpreter and Spanish language educator who manages day-to-day projects and oversees cultural and linguistic adaptation."},
 {name:"Irene Tessaro, DrPH",title:"Research Director",img:"team-tessaro.webp",sum:"Researcher in quantitative and qualitative study design, a former nurse practitioner, who oversees human subjects research, focus groups and analysis."}];
/* research: recent peer-reviewed papers with People Designs affiliation (PubMed). [date, title, journal, url] */
var NEWS=[
 ["January 2026","Website use and associations with behaviour change and weight loss in cancer survivors and their partners: secondary analysis of a randomised controlled trial","J Med Internet Res",PM+"41617212/"],
 ["October 2025","Development and validation of a simulation model-based tool to support individualised physical activity discussions and prescriptions for breast cancer survivors","JCO Clin Cancer Inform",PM+"41105911/"],
 ["February 2025","Web-based pain coping skills training for managing aromatase inhibitor-associated arthralgia in breast cancer survivors: randomised controlled trial protocol","Contemp Clin Trials",PM+"39706331/"],
 ["December 2024","Development of an online tool to support financial and legal planning in dementia","PEC Innovation",PM+"39035235/"]];
var CLIENTS=["Dana-Farber Cancer Institute","Duke University Comprehensive Cancer Center","MD Anderson Cancer Center","National Cancer Institute","National Institute on Aging","National Human Genome Research Institute","Susan G. Komen Foundation","University of California San Francisco","University of North Carolina","University of Pennsylvania","Washington University School of Medicine","Veterans Administration Medical Centers","World Health Organization"];
var SHEETS=[];
