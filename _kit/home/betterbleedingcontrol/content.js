var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Inter Tight"','500 1em "Inter Tight"','600 1em "Inter Tight"'];
var WEB="https://betterbleedingcontrol.com/";
var RPT="https://reporter.nih.gov/project-details/11314013";
/* facts: NIH RePORTER 1R41EB038879-01 (abstract, narrative, award, org: Better Bleeding Control LLC, Houston TX 77008);
   Georgia Tech BME Capstone Design Garden, project N.5 (2025-01-05); MUSC news 2024-07-31; TTUHSC story 2022-08-09.
   All fetched 2026-11-20. betterbleedingcontrol.com shows only a Hostinger default page. */
var AIMS=[
 ["Calibrated pressure sensors","Pressure sensors calibrated to detect subtle force variations, with detection within ±5% of applied force and at least 85% accuracy of the integrated sensors.","Aim 1","Accurate real-time feedback",1,RPT],
 ["A self-contained reservoir","A fluid reservoir within the manikin torso sustains physiologic bleeding without frequent refilling, for continuous training sessions of at least 60 minutes.","Aim 1","Uninterrupted sessions",1,RPT],
 ["Force detection in the wound bed","Sensor placement optimised for at least 90% force detection coverage inside the wound, with accuracy validated within ±15%.","Aim 2","Assessing the intervention",2,RPT],
 ["Clearer biofeedback","Visual and auditory indicators improved so that a change in flow rate is recognised within 0.5 seconds of an intervention.","Aim 2","Feedback a trainee can act on",2,RPT]];
var NEWS=[
 ["Sep 2026","NIH NIBIB awards Better Bleeding Control an STTR Phase I grant for advanced biofeedback mechanisms for realistic hemorrhage control training ($320,217)","NIH RePORTER",RPT],
 ["Jan 2025","Georgia Tech biomedical engineering capstone teams take on improvements to Better Bleeding Control’s trauma bleeding control simulator-trainer","Georgia Tech BME","https://designgarden.bme.gatech.edu/2025/01/05/n-5-trauma-bleeding-control-simulator-trainer-improvement"],
 ["Jul 2024","Dr. Brittany Bankhead joins MUSC Surgery, with a commercialisation focus that includes military biofeedback hemorrhage control training","MUSC","https://www.musc.edu/content-hub/news/2024/07/31/dr-bankhead"],
 ["Aug 2022","The Stop the Bleed team, led by Dr. Bankhead, receives a $50,000 NSF grant for the National I-Corps program to develop its bleeding control trainer","TTUHSC","https://www.ttuhsc.edu/stories/ttuhsc-excels-national-nsf-innovation-corps-teams"]];
var SHEETS=[];
