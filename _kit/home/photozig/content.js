var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','700 1em "Figtree"'];
var MAIL="info@photozig.com";
var RP="https://reporter.nih.gov/project-details/";
/* programs: every line from photozig.com (home, health_products, mobile_apps, research) and NIH RePORTER.
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["Generative AI","CaringGPT","For dementia caregivers","NIA SBIR · 2025","A Generative AI app that answers caregivers’ questions in a short conversation, with curated, evidence-based materials from proven interventions and a personalized plan for each user. Award 1R44AG094463.",RP+"11256494","NIH RePORTER"],
 ["Behavioral therapy","Recharge","Mobile app","NIA SBIR Phase II","Recharge Behavioral Therapy combines Behavioral Activation, an evidence-based treatment for depression, with the Coping With Caregiving program, to help caregivers look after their own well-being. Award R44AG084419.",RP+"11184498","NIH RePORTER"],
 ["Coping skills","Caring Light","iOS and Android","Available now","A self-paced program for caregivers of people with Alzheimer’s disease and related dementia to learn coping skills and alleviate stress, with calming mindfulness practices.","https://apps.apple.com/us/app/caring-light-for-caregivers/id1281831712","App Store"],
 ["Difficult behaviors","Caring Response","iOS and Android","Available now","Helps caregivers understand and deal with the difficult behaviors of a person with dementia by learning about them and practicing responses, with relaxation exercises.","https://apps.apple.com/us/app/caring-response-for-caregivers/id1314737683","App Store"],
 ["Latino caregivers","Mira Mirela","Spanish-language webnovela","Research program","An educational telenovela for Latino family caregivers, in Spanish, with caregiving training embedded in the story and materials culturally tailored to the audience.","http://www.miramirela.com/","miramirela.com"],
 ["Stress management","iCare","Online training, DVD and workbook","NIA-funded study","iCareFamily, a stress management skills training program for caregivers of individuals with Alzheimer’s disease, other dementia and memory problems, studied with Stanford University and the Alzheimer’s Association.","http://www.icarefamily.com/","icarefamily.com"]];
/* selected publications by the research team, as listed on photozig.com/research.html */
var PUBS=[
 ["2018","Enhancing psychoeducation to cope with dementia caregiving, reduce depressive symptoms, and alleviate stress with an online video program: a randomized clinical trial","Alzheimer’s & Dementia"],
 ["2017","Helping Hispanic dementia caregivers cope with stress using technology-based resources","Clinical Gerontologist"],
 ["2013","Exploring the effectiveness of an internet-based program for reducing caregiver distress using the iCare Stress Management e-Training Program","Aging & Mental Health"],
 ["2007","Improving the quality of life for caregivers and care recipients with personalized video channels","Clinical Gerontologist"]];
/* RePORTER lists Bruno Kajiyama, CEO, as principal investigator on every Photozig award. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Bruno Kajiyama",title:"Chief Executive Officer",sum:"Principal investigator on Photozig’s NIH SBIR awards since 2004, from LifeZig to CaringGPT, and first author of the team’s 2018 randomized clinical trial in Alzheimer’s & Dementia."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2025","Photozig receives an NIA SBIR award to develop CaringGPT, a Generative AI assistant for dementia caregivers","NIH RePORTER",RP+"11256494"],
 ["September 2023","NIA funds Recharge Behavioral Therapy for caregivers of individuals with Alzheimer’s disease","NIH RePORTER",RP+"10761621"],
 ["2021","Phase II award for a mindfulness-based cognitive coping mobile app for dementia caregivers","NIH RePORTER",RP+"10322963"],
 ["2018","NIA funds a mobile self-compassion intervention for Hispanic dementia caregivers","NIH RePORTER",RP+"9534449"]];
var SHEETS=[];
