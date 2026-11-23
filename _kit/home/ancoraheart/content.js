var FONTS=['300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','400 1em "Lato"','700 1em "Lato"'];
var WEB="https://www.ancoraheart.com/";
var MAIL="info@ancoraheart.com";
var TEL="408-727-1105";
/* the AccuCinch System goals, from ancoraheart.com/physicians. [goal, figure, detail] */
var GOALS=[
 ["Reduce the size of the left ventricle","And reduce wall stress","The AccuCinch Implant is cinched and secured with a nitinol lock to reduce the size of the enlarged left ventricle (LV)."],
 ["Support the ventricle wall","Strength from within","A series of anchors, each separated by a spacer to distribute force, is placed into the LV wall over a single cable."],
 ["Initiate reverse remodeling","Improve contractility","Designed to start a biological process of reverse remodeling that improves myocardial contractility and overall cardiac function."],
 ["Completely transcatheter","Through the aortic valve","The LV is reached through the aortic valve with the AccuCinch Guide catheter: a minimally invasive procedure, designed to augment the care cardiologists already provide."]];
/* clinical programme: ancoraheart.com/clinical-studies and company press releases. [name, status, detail, url] */
var PROG=[
 ["CORCINCH-HF","Pivotal trial · enrolling · NCT04331769","A prospective, randomized, open-label, multicenter, international study of the AccuCinch System plus guideline-directed medical therapy (GDMT) versus GDMT alone: 400 randomized patients at up to 80 centers worldwide.","https://clinicaltrials.gov/study/NCT04331769"],
 ["First enrollment milestone","250 patients randomized","Reached in June 2025. Six-month data from these first 250 patients is designed to support a PMA submission to the FDA, with a second analysis once the full cohort reaches 12 months.","https://www.businesswire.com/news/home/20250623231815/en"],
 ["Two-year results","Published in Structural Heart","Patients treated in early studies showed sustained reverse remodeling through two years, with improvements in heart function and quality of life, and fewer heart failure hospitalizations.","https://www.businesswire.com/news/home/20251027204437/en"],
 ["Early feasibility","J Card Fail 2023;29:1046–1055","Early feasibility data showed the potential to improve quality of life and functional capacity and to initiate reverse remodeling in patients with heart failure with reduced ejection fraction (HFrEF).",""],
 ["Further studies","US and European Union","CORCINCH-EU, CORCINCH-FMR, CORCINCH-HFrEF and CORCINCH-PMVI: the AccuCinch System has been studied in multiple trials in the United States and the European Union.",""]];
/* team: ancoraheart.com/about-us. [name, role, one-sentence summary] */
var LEAD=[
 ["Jeffrey M. Closs","President and CEO","Founded Benu, helped drive the Perclose IPO and led at Fox Hollow, Edwards and Guidant; adjunct professor at Stanford’s Center for Health Policy."],
 ["Russel Sampson","Chief Technical Officer","Inventor on more than 80 patents; leads core technology, intellectual property and product development."],
 ["Mark Miles","Chief Commercial Officer","25 years scaling medical technology companies, most recently as CCO of Terumo Aortic in Glasgow."],
 ["Christine Tjossem","VP, Biostatistics and Clinical Data Management","A 35-year record in biostatistics and data management at Medtronic, Boston Scientific, St. Jude and Berlin Heart."],
 ["Michael Zapien","VP and GM, Int’l Clinical, Regulatory and Therapy Development","Leads clinical research, after moving devices from development to market at Elixir, Nanostim, CardioDx and Abbott Vascular."],
 ["Linda Phan Lu","VP, Finance, Human Resources and Administrative Services","Over 15 years in corporate finance at Logitech, Gilead Sciences and Xlumena."],
 ["Bart Beasley","VP, Strategic Initiatives","More than 25 years introducing ground-breaking therapies to physicians, at Avinger, Transcend Medical, Fox Hollow and Perclose."],
 ["Michael Fritz","VP, Regulatory Affairs and Quality Assurance","Decades of class III implantable and minimally invasive device experience at Medtronic, Boston Scientific and Guidant."]];
var BOARD=[
 ["Robert Croce","Chairman","Retired as Company Group Chairman after a 36-year career at Johnson & Johnson, including Worldwide President of Ethicon Endo-Surgery."],
 ["Andrew Midler","Savitr Capital","Founder of Savitr Capital and, before it, Standard Pacific Capital."],
 ["Lew Pell","Director","Lead investor and co-founder of 24 medical device companies since 1975."],
 ["Beverly Huss","Director","Medical device entrepreneur, Executive Chair of Madorra and former CEO of Qool Therapeutics."],
 ["Jeffrey M. Closs","President and CEO","Director and chief executive of Ancora Heart."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2025","Two-year results show sustained benefits of the AccuCinch System in heart failure patients","Business Wire","https://www.businesswire.com/news/home/20251027204437/en"],
 ["June 2025","First enrollment milestone reached in the CORCINCH-HF heart failure pivotal trial","Business Wire","https://www.businesswire.com/news/home/20250623231815/en"],
 ["July 2021","$80 million financing to support the CORCINCH-HF pivotal study; Beverly Huss joins the board","Business Wire","https://www.businesswire.com/news/home/20210719005211/en"]];
var SHEETS=[];
