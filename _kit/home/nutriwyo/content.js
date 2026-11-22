var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Inter Tight"','500 1em "Inter Tight"','600 1em "Inter Tight"','italic 900 1em "Archivo"'];
var MAIL="info@nutriwyo.com";
/* programs, from nutriwyo.com (Area 1, Area 2), NIH RePORTER 1R41DK125213-01A1 and Chenchar et al., ACS Pharmacol Transl Sci 2025.
   [programme, sub, indication, detail line, progress 0..4, progress incl. in-progress, text, dim] */
var PIPE=[
 ["Cathepsin K inhibition","Therapeutics","Diabetic foot ulcers","Non-healing diabetic wounds · intradermal injection",2,2.5,"A potent, selective cathepsin K inhibitor that has been through clinical trials for another use. In diabetic pigs, odanacatib accelerated wound closure; NIH-NIDDK STTR Phase I.",0],
 ["Research services","Preclinical & clinical CRO","Structure–function claims","Nutraceuticals · supplements · functional foods · devices",0,0,"Nutriwyo validates structure–function claims for nutraceuticals, natural products, dietary supplements, sports nutrients, functional foods, wellness products and medical devices.",1]];
/* nutriwyo.com (Meet our team). Text-only masthead (CI/CL). Summaries only restate the site. */
var TEAM=[
 {g:"Founders",name:"Rama “Rema” Nair, PharmD",title:"Founder and CEO",sum:"PharmD, University of Florida; Board Certified Geriatric Pharmacist. Founded Nutriwyo in 2014 to bring innovative care to older adults."},
 {g:"Founders",name:"Sreejayan “Sree” Nair",title:"Co-Founder",sum:"Professor of Pharmacology, University of Wyoming. Diabetes and cardiovascular research; over 90 international publications."},
 {g:"Collaborators and consultants",name:"Dr. Kenneth Liechty",title:"Advisor",sum:"Professor of Surgery, University of Colorado Anschutz. A leading expert in diabetic wound healing and regenerative medicine."},
 {g:"Collaborators and consultants",name:"Dr. Carlos Zgheib",title:"Consultant",sum:"Assistant Professor of Surgery, University of Colorado. Biomaterials and nanotechnology for wound healing; 2021 Corius Innovations Award."},
 {g:"Collaborators and consultants",name:"Dr. Brenda Alexander",title:"Collaborator",sum:"Professor of Reproductive Biology, University of Wyoming. Expertise in large-animal research and porcine models of diabetic wounds."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2025","Targeting cathepsin K to accelerate diabetic wound healing: the first study to show that inhibiting cathepsin K improves diabetic wound healing","ACS Pharmacology & Translational Science","https://pubmed.ncbi.nlm.nih.gov/40799384/"],
 ["September 2020","NIH-NIDDK awards Nutriwyo a Phase I STTR grant: Development of a New Treatment for Diabetic Wounds","NIH RePORTER","https://reporter.nih.gov/project-details/10081437"],
 ["2014","Dr. Rama Nair founds Nutriwyo in Laramie, Wyoming, with the mission to change people’s lives","nutriwyo.com","https://nutriwyo.com/"]];
var SHEETS=[];
