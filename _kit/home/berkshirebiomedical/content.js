var FONTS=['400 1em "Sorts Mill Goudy"','italic 400 1em "Sorts Mill Goudy"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"'];
var WEB="https://www.berkshirebiomedical.com/";
var NP=WEB+"news.php?p=";
var MAIL="generalinfo@berkbiomed.com";
var BD="BD@berkbiomed.com";
var INV="investors@berkbiomed.com";
/* programs: berkshirebiomedical.com press releases and NIH RePORTER (Berkshire Biomedical, Dallas). [title, detail line, tag, text, link, label] */
var PROG=[
 ["COPA™ De Novo submission","FDA Division of Health Technology 3C","Under FDA review","Accepted for review in July 2025. The indications sought are methadone HCl oral solution for opioid use disorder and moderate to severe pain, oxycodone HCl oral solution for moderate to severe pain, and fluoxetine HCl oral solution for depression, anxiety and other CNS disorders.",NP+"51","Announcement"],
 ["Take-home methadone clinical program","NIDA SBIR · 1R44DA061908","Awarded 2025","A clinical study program to evaluate patient retention and other benefits of COPA for take-home methadone, where daily travel to an opioid treatment program clinic can reduce retention and deter patients from starting treatment.","https://reporter.nih.gov/project-details/11168127","NIH RePORTER"],
 ["COPA for at-home methadone administration","NIDA Fast-Track SBIR · R44DA057185","2022–2025","Just over $2.0 million across both phases to support the non-clinical development of COPA for automated, at-home methadone administration as part of opioid use disorder treatment.","https://reporter.nih.gov/project-details/10706739","NIH RePORTER"],
 ["Patient perspectives on take-home dosing","Innovations in Clinical Neuroscience","Published 2025","Qualitative interviews with adults treated with methadone at an opioid treatment program, on the challenges of daily dosing and their willingness to adopt COPA for secure, convenient take-home doses.",NP+"48","Announcement"]];
/* people: berkshirebiomedical.com/about (Leadership Team). Text-only rows. [name, role, summary] */
var TEAM=[
 ["John Timberlake","President, CEO and Board Member","More than 30 years bringing drugs, devices and drug-device combinations to market; former CEO of Valeritas, which he took public and sold to Zealand Pharma."],
 ["Thomas M. Rouse","Board Chair and Co-Founder","Founded Berkshire Biomedical in Dallas in 2016. Earlier co-founded ACS and founded TransFirst, where he was Chairman and CEO."],
 ["Susan Owen","Board Member and Co-Founder","Co-founded the company in 2016 and serves as Vice Chairman; President and COO of The Point Group."],
 ["Christy Corey","Head of Operations","Has managed the progression of the COPA product set since 2017, after 15 years as a divisional president at TransFirst."],
 ["John Kirkpatrick","Head of Information Technology","Over 35 years in IT, including CIO of TransFirst and global roles at Sunrise Medical and Baxter Healthcare."],
 ["Geoff Jenkins","R&D and Manufacturing Advisor","Thirty-five years taking medical devices from concept to high-volume production, at Inverness Medical, MediSense and others."],
 ["Tom Knox","Market Access and Government Affairs","President of Fathom Healthcare Solutions; formerly Vice President, Managed Markets, Health Policy and Government Affairs at Allergan."],
 ["Melissa Olivadoti, PhD","Medical Affairs","Fifteen years leading medical affairs in pharmaceutical and device companies, including Verrica, Pfizer, Vanda and Allergan."],
 ["John Tattory","Financial and Accounting Consultant","Over 25 years of financial leadership in biotechnology, including CFO of Cerapedics and Windtree Therapeutics."]];
/* news: berkshirebiomedical.com/news, each item links to its release. [date, headline, source, url] */
var NEWS=[
 ["July 7, 2025","COPA™ De Novo application accepted for review by the FDA","Press release",NP+"51"],
 ["June 2, 2025","NIH grant awarded for a clinical study program on take-home methadone with COPA","Press release",NP+"50"],
 ["January 16, 2025","Patient study published in Innovations in Clinical Neuroscience","Press release",NP+"48"],
 ["June 20, 2023","Two COPA posters presented at the CPDD 85th Annual Scientific Meeting","Press release",NP+"47"],
 ["December 7, 2022","Phase II funding awarded for the NIDA Fast-Track SBIR grant","Press release",NP+"42"]];
var SHEETS=[];
