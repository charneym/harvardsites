var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','400 1em "Sora"','500 1em "Sora"'];
var WEB="https://www.dynocardia.care/";
var MAIL="admin@dynocardia.care";
var RP="https://reporter.nih.gov/project-details/";
var NSFA="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2423296";
var CTG="https://clinicaltrials.gov/study/NCT04835857";
var PR_NSF="https://www.prnewswire.com/news-releases/dynocardia-has-received-a-1-million-nsf-grant-to-enhance-their-unique-computer-vision-based-motion-correction-technology-and-expand-the-applications-of-its-vitrack-continuous-non-invasive-blood-pressure-cnibp-monitor-302328332.html";
var PR_NIH="https://www.prnewswire.com/news-releases/nih-grants-2-3m-to-evaluate-the-impact-of-vitrack-on-maternal-and-child-health-during-pregnancy-302065182.html";
/* applications: dynocardia.care Applications and Technology pages. [name, who, tag, detail, link, label] */
var APPS=[
 ["In-hospital monitoring","ICU, critical care, operating room, dialysis and EMS","Hospital","In the U.S., 35 million patients who undergo major non-cardiac surgery or need intensive care are at high risk of complications. Continuous cNIBP gives clinicians the insight to act early against heart attack, kidney failure and shock.",WEB+"home-2-2","Applications"],
 ["Remote patient monitoring","After discharge, in transport and on dialysis","Remote","Accurate, continuous BP and hemodynamic data relayed to care teams in real time for people at elevated risk: 20 million EMS patients a year, 6.5 million after hospital discharge and 540,000 on haemodialysis in the U.S.",WEB+"home-2-2","Applications"],
 ["Chronic disease management","Hypertension, heart failure, sleep apnea, preeclampsia","Outpatient","For the ~1.5 billion people living with hypertension, 24-hour BP, BP variability and night-time readings can cut the 30% misdiagnosis rate of single cuff readings and support better control.",WEB+"home-2-2","Applications"],
 ["Prevention, wellness and trials","Healthy individuals and clinical investigators","Prevention","Continuous BP where it was never possible before: Dynocardia is studying how BP variability in healthy people relates to dementia later in life, and ViTrack can give trial investigators safety data sooner.",WEB+"home-2-2","Applications"]];
/* clinical and research programme: NIH RePORTER, NSF Award Search, ClinicalTrials.gov, PR Newswire. [title, funder, status, detail, link, label] */
var PROG=[
 ["Hypertensive disorders of pregnancy","NHLBI SBIR · R44HL167356 · with NYC Health + Hospitals","2023–2024 · $2.3M","A perinatal study of at least 150 women who are pregnant or have recently given birth, testing ViTrack for accurate diagnosis of high blood pressure in pregnancy and early detection of preeclampsia.",PR_NIH,"Press release"],
 ["Motion-artifact correction","NSF SBIR Phase II · award 2423296","2024–2026 · $1M","Computer-vision and AI algorithms that keep continuous BP readings reliable through patient movement and vibration, such as an ambulance ride, building on an NSF Phase I project begun in 2021.",NSFA,"NSF award"],
 ["Design verification and validation","NHLBI · 1SB1HL176287","2024–2025","Verification and validation of ViTrack as an accurate, continuous, non-invasive blood pressure monitor.",RP+"11007868","NIH RePORTER"],
 ["Cuff-less wrist wearable, and dementia","NHLBI SBIR · R44HL158374 and supplement","2021–2023","Development of the cuff-less wrist-worn continuous BP monitor, with a supplement assessing continuous BP profiles in people with Alzheimer’s disease and related dementias.",RP+"10427458","NIH RePORTER"],
 ["Wrist wearable versus cuff devices","ClinicalTrials.gov · NCT04835857","Recruiting · Newton, MA","An ongoing study in Dynocardia’s own offices comparing the cuff-less wrist wearable with cuff-based blood pressure measuring devices.",CTG,"ClinicalTrials.gov"]];
/* people: dynocardia.care Team page */
var TEAM=[
 ["Mohan Thanikachalam, MD","Founder and CEO","Principal NIH investigator who led the development of ViTrack. A cardiovascular surgeon by training; part-time faculty at Tufts University School of Medicine and affiliate faculty at MIT."],
 ["Abhijit Biswas, PhD","Co-founder and CTO","Led the development of ViTrack hardware and software as a postdoctoral fellow at MIT. Expertise in haptics, biomedical instrumentation, embedded systems, signal processing and physiological modelling."],
 ["Edward Adelson, PhD","Co-founder, core technology team","John and Dorothy Wilson Professor of Vision Science at MIT (BCS and CSAIL); led the optical touch-sensing technology behind ViTrack. Member of the National Academy of Sciences."],
 ["José Wong, BS, MBA","Chief Product Officer","More than 25 years in medical devices, focused on patient monitoring, with roles at Johnson & Johnson, GE Healthcare, Farm (a Flex company) and McKinsey & Company."],
 ["Mike Sleva, PhD","VP, Marketing","Experience across medical device innovation, marketing, portfolio strategy and market development."],
 ["Mark Kotfila, MSECE","Lead, Strategic Partnerships","Led the design of patient monitoring solutions at Philips Healthcare, including the Smart-hopping Medical Telemetry system."],
 ["Gokul Rajamanickam, MS","Director of Systems","Over 12 years in medical devices across R&D, product development and operations; took a point-of-care diagnostic from feasibility to market. MS, MIT."],
 ["Ashutosh Mundkur, PhD","Lead, Manufacturing and Growth","Three decades across the medical device value chain, with depth in operational excellence and quality management systems."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 5, 2025","Cuff-less wrist wearable study versus cuff devices updated on ClinicalTrials.gov, still recruiting","ClinicalTrials.gov",CTG],
 ["December 11, 2024","NSF awards Dynocardia a $1 million follow-up grant for computer-vision motion correction in ViTrack","PR Newswire",PR_NSF],
 ["February 20, 2024","NIH grants $2.3M to evaluate ViTrack in maternal and child health with NYC Health + Hospitals","PR Newswire",PR_NIH]];
var SHEETS=[];
