var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Assistant"','500 1em "Assistant"','600 1em "Assistant"'];
var WEB="https://morninglily.com/";
var ADDR="Sherwood Park, Alberta T8B 1M4, Canada";
var MAP="https://www.google.com/maps/search/?api=1&query=Sherwood+Park+Alberta+T8B+1M4";
/* sources: Government of Canada grants records (NRC IRAP agreements 1034006 and 1023364) and the Health Innovation Hub
   member list (Applied Pharmaceutical Innovation / University of Alberta). No email address is published. */
var G25="https://search.open.canada.ca/grants/record/nrc-cnrc%2C172-2025-2026-Q2-1034006%2Ccurrent";
var G24="https://search.open.canada.ca/grants/record/nrc-cnrc%2C172-2024-2025-Q3-1023364%2Ccurrent";
var HIH="https://appliedpharma.ca/initiatives/hih/hih-member-companies/";
/* the programme, as the IRAP records describe it. [stage, title, sub, detail, link, link label] */
var PROG=[
 ["Developed","Daisy Hernia System","Nitinol-based implantable device · inguinal hernia","Morning Lily has engineered a nitinol-based device for hernia repair: a novel mesh implantation device designed for inguinal hernias.",HIH,"HIH listing"],
 ["2024–2025","Biomechanical and preclinical testing","NRC IRAP · Youth Employment Program","A $30,000 IRAP contribution to test the device for safety and efficacy, through biomechanical tests and preclinical animal trials, on the way toward human trials.",G24,"Grant record"],
 ["Under way","Manufacturing validation","NRC IRAP · 2025–2027","An established nitinol medical device manufacturer is to produce commercial-grade prototype units, validating the manufacturing approach of the current prototype.",G25,"Grant record"],
 ["Next","Preclinical studies and a regulatory submission","Safety and efficacy","The commercial-grade units will be used in preclinical animal studies, and the manufacturing data will support investment and the preparation of a regulatory submission.",G25,"Grant record"]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 1, 2025","NRC IRAP awards $64,000 to advance a novel mesh implantation device for inguinal hernia repair","Government of Canada · Grants and Contributions",G25],
 ["October 1, 2024","NRC IRAP Youth Employment Program supports biomechanical and pre-clinical testing of a nitinol implantation device","Government of Canada · Grants and Contributions",G24],
 ["Member company","Morning Lily is a member company of the Health Innovation Hub at the University of Alberta, managed by Applied Pharmaceutical Innovation","Health Innovation Hub",HIH]];
var SHEETS=[];
