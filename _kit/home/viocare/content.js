var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"'];
var WEB="https://viocare.com/";
var MAIL="Info@viocare.com";
var NEWSPG="https://viocare.com/news--events.html";
var RP="https://reporter.nih.gov/project-details/11173904";
/* products: from viocare.com (VioScreen Research, VioScreen Clinical, ProNutra, Custom Solutions). [name, for, tag, detail, link, label] */
var PROD=[
 ["VioScreen Research","For academic and industry nutrition researchers","Web FFQ · research","A graphical, self-administered food frequency questionnaire with branching logic, analysed against the University of Minnesota NCC Food and Nutrient Database. Define organizations and protocols, assign roles, and export results for analytical software.",WEB+"vioscreen-research.html","VioScreen Research"],
 ["VioScreen Clinical","For dietitians, clinicians and wellness programmes","Assessment · clinical","A complete diet history and nutrition analysis in about 20 minutes, compared with dietary guidelines for the patient’s age and sex, with the Healthy Eating Index and reports that point to concrete changes.",WEB+"vioscreen-clinical.html","VioScreen Clinical"],
 ["ProNutra","For clinical research centres running feeding studies","Feeding studies","Plan, manage and analyse food and nutrient intake and build research menus on the USDA databases. Used by more than 50 facilities, including research centres at Rockefeller, Yale, Ohio State and Wake Forest.",WEB+"pronutra.html","ProNutra"],
 ["Custom solutions","For hospital groups, disease management and wellness partners","White label · engines","The nutrition analytics engine and data collection as components or white-label products, with add-on lifestyle assessments such as the validated IPAQ, disease-specific questionnaires and tailored reporting.",WEB+"custom-solutions.html","Custom solutions"]];
/* research: NIH RePORTER (Viocare, Inc., Princeton) and viocare.com Research Initiatives / News. [title, funder, status, detail, link, label] */
var RES=[
 ["P-FITS: the Pediatric Food Intake Technology System","NICHD SBIR Phase II · 5R44HD103531","Active · 2025–2027","VioScreen technology combined with mobile, targeted 24-hour food-group screeners to estimate the usual dietary intake of U.S. children aged 8 to 13, who today rely mostly on a caregiver’s report.",RP,"NIH RePORTER"],
 ["Food security with Lambent Data","New Jersey CSIT · Food and Agriculture R&D pilot grant","Awarded 2023","Updating Viocare’s Living Well Navigator, adding assessments of the social drivers of health, and joining Lambent’s OurREACH platform to help low-income families and the practitioners who support them.",NEWSPG,"Viocare news"],
 ["mDGS: a mobile dietary guidance system","NIDDK SBIR Phase I · 1R43DK121665","2019–2021","Continuous glucose monitoring data combined with a mobile diet tracker to predict diet-related hyperglycemia and guide people with type 2 diabetes on what to eat.","https://reporter.nih.gov/project-details/9777515","NIH RePORTER"],
 ["FIVR: food intake by image and voice","NHLBI-funded research","Research initiative","Image and speech recognition so that people can track the foods, calories and nutrients they eat with a mobile phone.",WEB+"research-initiatives.html","Research initiatives"]];
/* people: viocare.com/about.html; no portraits are published */
var TEAM=[
 ["Rick Weiss","President and Founder","Founded Viocare in 1993. Principal investigator on more than 25 NIH awards; earlier an applied researcher at Bell Labs and the lead on Squibb’s first worldwide email platform. BS, Carnegie Mellon; MS, Princeton."],
 ["John Ducharme","Chief Executive Officer","More than 30 years of healthcare leadership, from strategy at Baxter to CEO of a USDA/FDA-licensed food manufacturer, and first employee and senior executive at Fandango and R1 RCM. BS, Rice; MBA, Harvard Business School."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 5, 2025","NICHD continues SBIR Phase II support for P-FITS, the Pediatric Food Intake Technology System ($472,510)","NIH RePORTER",RP],
 ["December 18, 2023","Viocare and Lambent Data announce a partnership and a New Jersey CSIT grant to improve food security","Viocare news",NEWSPG],
 ["September 21, 2022","VioScreen named a UCSF Health Hub Digital Health Awards finalist, Consumer Prevention, for a second year","Viocare news",NEWSPG],
 ["January 31, 2022","Panaceutics and Viocare partner on a personalized nutrition platform","Viocare news",NEWSPG]];
var SHEETS=[];
