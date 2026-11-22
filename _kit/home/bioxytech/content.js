var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Outfit"','500 1em "Outfit"','600 1em "Outfit"','700 1em "Outfit"'];
var MAIL="ali.basiri@bioxytech.com";
var NSF="https://www.nsf.gov/awardsearch/showAward?AWD_ID=";
var RP="https://reporter.nih.gov/project-details/10923617";
var OIS="https://ois.net/ois-retina-innovation-summit-presenting-companies-2026/";
var PAPER="https://pubmed.ncbi.nlm.nih.gov/41053667/";
/* indications: every line from the NSF SBIR Phase I/II award records (1647279, 1853245), the NIH R43MD019594 abstract and the
   OIS Retina presenting-company profile. [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["Initial indication","Diabetic retinopathy","Ophthalmology · diabetes","Early-stage clinical testing completed","Retinal venous oxygen saturation is a quantitative biomarker for staging diabetic retinopathy; Bioxytech’s platform has predicted its development 4–13 months before structural changes in the retina. An NIH-funded project adds a clinical evaluation study at two clinical sites.",RP,"NIH RePORTER"],
 ["Platform","Age-related macular degeneration","Ophthalmology","Platform indication","The same measurement detects early functional changes in retinal blood circulation associated with AMD, before structural damage becomes visible to conventional imaging.",OIS,"OIS Retina"],
 ["Platform","Neurodegenerative disorders","Neurology","Platform indication","Retinal metabolic and oxygenation-related changes associated with neurodegenerative disease, read non-invasively through the eye.",OIS,"OIS Retina"],
 ["Clinical use","Staging and treatment response","Clinical management","In development","Earlier diagnosis, better disease staging, patient risk stratification and objective monitoring of response to treatment: a shift from reactive detection to predictive, proactive retinal care.",OIS,"OIS Retina"]];
/* team: NSF/NIH award records (PI) and the October 2025 BMC Ophthalmology paper (author affiliation). Text-only masthead. */
var TEAM=[
 {g:"Leadership",name:"Ali Basiri, PhD",title:"Founder & CEO",sum:"Principal investigator on Bioxytech’s NSF SBIR Phase I and Phase II awards and its NIH SBIR award for AI-driven prediction of diabetic retinopathy."},
 {g:"Leadership",name:"Mohammad Shokoohi Yekta",title:"Head of AI",sum:"Leads the machine-learning work behind automated image analysis and disease classification; co-author of a 2025 BMC Ophthalmology review of deep learning in retinal diagnosis."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["2026","Bioxytech Retina is a presenting company at the OIS Retina Innovation Summit 2026, represented by CEO Ali Basiri","OIS",OIS],
 ["October 2025","Bioxytech’s Head of AI co-authors “A comprehensive overview: deep learning approaches to central serous chorioretinopathy diagnosis” in BMC Ophthalmology","PubMed",PAPER],
 ["August 2025","Topcon Healthcare makes a strategic investment in Bioxytech Retina to accelerate commercialisation of its health screening platform","CB Insights","https://www.cbinsights.com/company/bioxytech-retina"],
 ["August 2024","The NIH awards Bioxytech an SBIR grant ($406,500) to advance public eye health through AI-driven prediction of diabetic retinopathy","NIH RePORTER",RP],
 ["April 2024","Bioxytech reports its NSF SBIR Phase II outcomes: retinal oxygen measured within 2.5%, and diabetic retinopathy predicted 4–13 months early","NSF",NSF+"1853245"]];
var SHEETS=[];
