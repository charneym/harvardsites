var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
var WEB="https://armormedical.us/";
var TEL="+1 (314) 530-9239",TELH="tel:+13145309239";
var MAIL="support@armormedical.us";
/* Maternal aRMOR, from the firm's Solution page and its own product slide */
var TECH=[["Wrist-worn","A noninvasive sensor that healthcare providers place on the patient’s wrist."],
 ["Real-time","Objective, quantitative insight into hemorrhage risk, monitored continuously."],
 ["Hidden bleeding","Early detection and treatment monitoring, even when blood loss is internal."],
 ["Every skin tone","Reads the subtle nuances of peripheral blood flow, independent of skin pigmentation."],
 ["Automated QBL","Automated quantified blood loss, in place of visual estimates and weighed pads."],
 ["Compensation alerts","Personalized alerts as the body begins to compensate for blood loss."]];
/* programmes: the firm says Maternal aRMOR is the first in a pipeline of women's health technologies */
var PROG=[["Maternal aRMOR","Wearable early warning system for obstetric hemorrhage: an objective, real-time measure of hemorrhage risk for care teams.","Lead programme","Being brought to market as the company’s first commercial product"],
 ["Women’s health pipeline","Further devices that protect and empower women’s health at every stage of life, built with the same research and person-centred design.","Pipeline","Following Maternal aRMOR"]];
/* non-dilutive awards and funding, each linked to its public record */
var FUND=[["SBIR Phase II","“Early Alerts, Safer Births: A Wearable Device for Real-time Maternal Hemorrhage Monitoring” · $1,223,371","2026","https://reporter.nih.gov/project-details/11186460"],
 ["MedTech Innovator","2025 Early-Stage Grand Prize, a $350,000 non-dilutive award, won in San Diego","2025","https://engineering.washu.edu/news/2025/Armor-Medical-wins-MedTech-Innovator-Grand-Prize.html"],
 ["Pre-seed","About $700,000 raised from angels, the Laerdal Million Lives Foundation and Catalyst by Wellstar","2024–25","https://engineering.washu.edu/news/2025/Armor-Medical-wins-MedTech-Innovator-Grand-Prize.html"],
 ["NIH RADx Tech","Maternal Health Challenge, phase three: a cumulative $415,000 prize","2023–24","https://engineering.washu.edu/news/2023/OBrien-team-wins-NIH-prize-to-further-develop-maternal-health-device.html"],
 ["SBIR Phase I","Development of a wearable light-based remote monitoring system for early hemorrhage detection · $295,892","2023","https://reporter.nih.gov/project-details/10821955"],
 ["Global Impact Award","Skandalaris Center for Interdisciplinary Innovation and Entrepreneurship, Washington University in St. Louis · $25,000","2023","https://engineering.washu.edu/news/2023/OBrien-and-team-win-Global-Impact-Award.html"]];
var CREDIT=["MedTech Innovator","Femovate","Catalyst by Wellstar","Hewlett Packard Enterprise","Equalize","SBIR","Skandalaris Center"];
var TEAM=[
 {g:"Co-founders",name:"Kelsey Mayo, PhD",title:"Co-Founder and CEO",sum:"PhD in materials science, Vanderbilt University"},
 {g:"Co-founders",name:"Christine O’Brien, PhD",title:"Co-Founder and CSO",sum:"Assistant professor of biomedical engineering, WashU McKelvey School of Engineering"},
 {g:"Co-founders",name:"Leo Shmuylovich, MD PhD",title:"Co-Founder and CTO",sum:"Assistant professor of dermatology, WashU School of Medicine"},
 {g:"Team",name:"Matt Keller, PhD",title:"Head of Product",sum:""},
 {g:"Team",name:"Amiee Smith, MPA",title:"Head, Commercial",sum:""},
 {g:"Advisors",name:"Keisha Callins, MD MPH",title:"Clinical Advisor",sum:""},
 {g:"Advisors",name:"Ross McQuivey, MD",title:"Clinical Advisor",sum:""},
 {g:"Advisors",name:"Rebekah Griensenhaur, PhD",title:"Technical Advisor",sum:""},
 {g:"Advisors",name:"Theresa Neil",title:"Product Advisor",sum:""},
 {g:"Advisors",name:"Chuck Adams, FACHE",title:"Business Advisor",sum:""},
 {g:"Advisors",name:"Jennifer Burdman, J.D.",title:"IP Strategy Advisor",sum:""}];
var NEWS=[
 ["2026","SBIR Phase II award: Early Alerts, Safer Births, a wearable device for real-time maternal hemorrhage monitoring","NIH RePORTER","https://reporter.nih.gov/project-details/11186460"],
 ["23 Oct 2025","Hemorrhage can be a serious problem after pregnancy. Here’s how one medtech founder is tackling it","MedTech Dive","https://www.medtechdive.com/news/kelsey-mayo-armor-medical-hemorrhage/803589/"],
 ["21 Oct 2025","Armor Medical wins MedTech Innovator Grand Prize","WashU Engineering","https://engineering.washu.edu/news/2025/Armor-Medical-wins-MedTech-Innovator-Grand-Prize.html"],
 ["16 May 2023","O’Brien and team win Global Impact Award","WashU Engineering","https://engineering.washu.edu/news/2023/OBrien-and-team-win-Global-Impact-Award.html"],
 ["18 Jan 2023","O’Brien team wins NIH prize to further develop maternal health device","WashU Engineering","https://engineering.washu.edu/news/2023/OBrien-team-wins-NIH-prize-to-further-develop-maternal-health-device.html"]];
var SHEETS=[];
