var FONTS=['500 1em "Saira"','600 1em "Saira"','400 1em "Inter"','500 1em "Inter"'];
var WEB="https://dms-service.com/";
var MAIL="mailto:sales@dms-service.com";
var EMAIL="sales@dms-service.com";
var TEL="tel:+18554072824";
var TEL2="tel:+15402127000";
var LI="https://www.linkedin.com/company/dms-service-llc";
var YT="https://www.youtube.com/channel/UCr28lK4lCZCoipJHRG3xZ8g/featured";
var ADDR="11845 W. Olympic Blvd, Ste 880W, Los Angeles, CA 90064";
var MAP="https://www.google.com/maps/search/?api=1&query=11845+W+Olympic+Blvd+Los+Angeles+CA+90064";
var FDA="https://www.accessdata.fda.gov/cdrh_docs/pdf16/K163535.pdf";
var MED="https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3084048";
var ABOUT="https://dms-service.com/about/";
/* services: dms-service.com (Holter Scanning Service, Cardiac Event Service, Sales, contact page).
   [label, name, sub, detail, link, link label] */
var SERV=[
 ["Since 1995","Holter scanning service","24-hour to 14-day monitors","Professionally scanned, colour-coded full-disclosure Holter reports, printed in your office the same day, posted to CMSAccess or sent overnight by FedEx. Equipment and supplies are provided free of charge, with no contract to sign.",WEB+"holter-scanning-service/","Scanning service"],
 ["24 / 365","Cardiac event monitoring","Wear time up to 30 days","Certified cardiac technicians on a toll-free line around the clock, every day of the year, at no charge to the physician. If an ECG is abnormal, the ordering physician is notified immediately.",WEB+"cardiac-event-service/","Event service"],
 ["2-year warranty","Holter recorders","myPatch®sl · myPatch® · VX3+","Recorders for purchase, led by the myPatch®sl patch Holter. Each new recorder carries a two-year warranty and works with most major Holter analysis systems.",WEB+"sales/","Recorders"],
 ["Repairs","Recorder service","DMS 300-3, 300-3M, 300-7, VX3+","Repair service for DMS 300-series and VX3+ Holter recorders, with live remote assistance for technical problems on your analysis workstation.",WEB+"contact/","Support"]];
/* reports offered by the scanning service (Holter Scanning Service page) */
var REPORTS=["Holter report","Signal-averaged ECG","ST segment monitoring","QT and QTc","Heart rate variability","Sleep apnea screening"];
/* electrodes: dms-service.com/electrodes (sizes, channels, design patents) and its four-size product photograph */
var ELEC=[
 ["Neonate","img/el-neonate.jpg","2 channels","Designed for the smallest of patients.","US design patent D821588"],
 ["Pediatric","img/el-pediatric.jpg","2 or 3 channels","Between the neonate and adult sizes; a single snap-on lead wire at V5 adds a third channel.","US design patent D821587"],
 ["Adult","img/el-adult.jpg","2 or 3 channels","Light adhesive for 24 to 72 hours of wear, standard adhesive for longer-term wear beyond 72 hours.","US design patent D775361"],
 ["T Electrode","img/el-t.jpg","3 channels","Records L1, V1 and V2 without an additional lead wire; a good fit for large-breasted women.","Australia 201915749 · EU 006934733-0001"]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","DMS-Service exhibits the myPatch®sl at MEDICA 2026 in Düsseldorf, Hall 16, stand E17-4","MEDICA 2026",MED],
 ["February 22, 2017","FDA clears the myPatch®sl ambulatory ECG recorder through 510(k) K163535","U.S. FDA",FDA],
 ["2014 and 2017","DMS-Service certified as a Women’s Business Enterprise and Woman-Owned Small Business by WBENC","DMS-Service",ABOUT]];
var SHEETS=[];
