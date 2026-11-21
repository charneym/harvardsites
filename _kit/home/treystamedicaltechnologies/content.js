var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','800 1em "Archivo"'];
var MAIL="NZarnstorff@treystamedicaltechnologies.com";
var NSF="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2528240";
/* programmes: every line from treystamedicaltechnologies.com (home, /investors "Cesarean Delivery", /blank "Serious Burn")
   and the NSF award abstract. [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["TreystaCare – Acute™","Scarring after cesarean delivery","Near-term focus","In development","An ointment that interrupts the scarring cascade, used for the first week of recovery after a cesarean delivery and folded into existing dressing-change and wound-care protocols. With just under 1.2 million procedures a year, cesarean delivery is the most common surgery in the US.","https://www.treystamedicaltechnologies.com/investors","Treysta"],
 ["TreystaCare™ System","Serious second- and third-degree burns","Long-term vision","NSF SBIR Phase I","A three-part sequence of topical anti-scarring therapeutics with a purpose-built dressing, for use from the emergency setting through the first two to four weeks of treatment, to reduce scarring, fibrosis and contracture. The Phase I project closes with a porcine study of the complete technology.",NSF,"NSF award 2528240"],
 ["TreystaCare","Other post-surgical and traumatic scarring","Further indications","Opportunity","Mastectomy, brachioplasty, craniotomy and perineal tearing in childbirth: wherever a scar costs patients movement, comfort or confidence years after the wound has closed.","https://www.treystamedicaltechnologies.com/","Treysta"]];
/* the cost of scarring, as cited on treystamedicaltechnologies.com (each with the study it names) */
var NEED=[
 ["30–50%","of survivors have lasting shoulder mobility loss as a result of fibrosis after a mastectomy","Chrischilles et al. 2019","https://pmc.ncbi.nlm.nih.gov/articles/PMC6534523/"],
 ["4 in 10","patients undergoing brachioplasty experienced hypertrophic scarring, in a 2015 study of 66 patients","de Runz et al. 2015","https://journals.lww.com/plasreconsurg/pages/articleviewer.aspx?year=2015&issue=01000&article=00019&type=Fulltext"],
 ["Up to 18%","of craniotomy patients developed scar-site alopecia (hair loss), in a Tokyo study","Okochi et al. 2022","https://www.thieme-connect.de/products/ejournals/abstract/10.1055/s-0042-1756286"],
 ["1 in 4","women report dyspareunia (pain during intimacy) after first-degree perineal tearing in childbirth","Gommesen et al. 2019","https://pubmed.ncbi.nlm.nih.gov/31848167/"]];
/* treystamedicaltechnologies.com/team. Text-only masthead; advisors listed with the affiliation the site gives them where it is unambiguous. */
var TEAM=[
 {g:"Leadership",name:"Nathan Zarnstorff",title:"Co-Founder & CEO",sum:"Serial entrepreneur and quality engineer: 12 years in medtech quality, sterility assurance and operations, with expertise in design control, cGMP, quality systems and risk management."},
 {g:"Leadership",name:"Marcelo Buzzi, PhD",title:"Co-Founder & CSO",sum:"Serial entrepreneur and medical technology inventor with numerous international patents; PhD in molecular and biological sciences and 15+ years in regenerative medicine entrepreneurship."},
 {g:"Leadership",name:"Hector Leiva, MS, MBA",title:"Head of Engineering",sum:"MS in industrial and systems engineering, University of Florida; MBA, Southern Cross University. Cross-functional engineering across highly regulated medical manufacturing."},
 {g:"Strategic advisors",name:"Joshua Carson, MD",title:"Burn care",sum:"Director of Loyola Medical Center’s Burn Center and CMO of the Illinois State Burn Coordinating Center. No endorsement by either is implied."},
 {g:"Strategic advisors",name:"Brandon Allen, MD",title:"Dermatology",sum:"MD, PhD in molecular cell biology and pathobiology; double board-certified in dermatology and micrographic dermatologic surgery; experienced clinical trial PI."},
 {g:"Strategic advisors",name:"Eduardo Magallanes, MBA",title:"Strategic Advisor",sum:""},
 {g:"Strategic advisors",name:"Christopher Crosby, MD, PhD",title:"Strategic Advisor",sum:""},
 {g:"Strategic advisors",name:"Daniel Barousse",title:"Strategic Advisor",sum:""}];
var SHEETS=[];
