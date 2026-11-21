var FONTS=['400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Manrope"','500 1em "Manrope"','700 1em "Manrope"'];
var WEB="https://tele-stethoscope.com/";
var FORM="https://tele-stethoscope.com/contact-tsi";
var ADDR="Louisville, Kentucky";
var MAP="https://www.google.com/maps/search/?api=1&query=Louisville+KY+40207";
var RP26="https://reporter.nih.gov/project-details/11349166";
var RP24="https://reporter.nih.gov/project-details/10821706";
var RP23="https://reporter.nih.gov/project-details/10760409";
/* clinical programmes: from tele-stethoscope.com/clinical-studies (study list, Nov 2026) and the NIH RePORTER records.
   [area, what it detects, ground truth · n · site, status, link, link label] */
var PROG=[
 ["Heart","Ejection fraction, diastolic function (E/A, E/e′) and aortic stenosis","Against echocardiography · 1,000+ patients across University of Louisville, LVHN and MaineHealth","Completed",
  "https://doi.org/10.3389/fcvm.2026.1768473","Frontiers in Cardiovascular Medicine, 2026"],
 ["Lungs","COPD: FEV1/FVC and FEV1 % predicted","Against spirometry · 100 patients · University of Louisville · NIH-funded","Completed",
  "https://doi.org/10.3390/diagnostics15121550","Diagnostics, 2025"],
 ["Respiratory illness","Pneumonia, bronchitis and influenza A","Against physician diagnosis and rapid tests · 300 patients · University of Louisville · BARDA-funded","Completed",
  "https://doi.org/10.1186/s12890-026-04135-z","BMC Pulmonary Medicine, 2026"],
 ["Vascular and brain","Carotid stenosis and cerebral ischemia","Against CT angiography and MRI · University of Louisville","Completed",
  "https://doi.org/10.1016/j.ajem.2026.02.004","Am. J. Emergency Medicine, 2026"],
 ["Pregnancy","Pre-eclampsia, low birth weight and maternal cardiac dynamics","150 patients · University of Louisville · NIH-funded","Completed",
  RP24,"NIH SBIR award"],
 ["Chronic disease at home","One app for FEV1 % predicted, low EF, E/A and E/e′","Against PFT and echocardiography · 650 echo and 240 PFT patients · MaineHealth · NIH-funded","Recruiting fall 2026",
  RP26,"NIH SBIR award, 2026"]];
var PARTNERS=["University of Louisville","MaineHealth","Lehigh Valley Health Network","National Institutes of Health (NHLBI)","BARDA"];
/* people: as named on tele-stethoscope.com/about and on the NIH RePORTER award records; no portraits are published */
var TEAM=[
 ["David Wolfson","Chief Executive Officer","Combines a mechanical engineering background with an MBA to lead TSI’s operations, working in close partnership with Fleming Scientific."],
 ["Fleming Scientific","Core analytics and technology","Adapted its computational nonlinear dynamics software to mobile phone auscultation in 2019, and provides the analytical expertise behind TSI."],
 ["Martin R. Huecker","Investigator, NIH SBIR awards","Investigator on TSI’s NHLBI awards for COPD and pre-eclampsia detection, and author on most of its peer-reviewed papers."],
 ["Ryan M. Close","Investigator, NIH SBIR award (2026)","Investigator on the 2026 NHLBI award for remote and rural chronic disease detection, and first author of the aortic stenosis study."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2026","NHLBI awards TSI a $406,367 SBIR grant for mHealth AI in remote and rural chronic disease detection","NIH RePORTER",RP26],
 ["2026","Mobile phone auscultation to diagnose influenza A in patients at three emergency departments","Journal of Emergency Medicine","https://doi.org/10.1016/j.jemermed.2026.05.016"],
 ["2026","Feasibility of detecting aortic stenosis with mobile phone auscultation data: a pilot study","Frontiers in Cardiovascular Medicine","https://doi.org/10.3389/fcvm.2026.1768473"],
 ["2026","Mobile phone auscultation to detect carotid stenosis and cerebral ischemia","American Journal of Emergency Medicine","https://doi.org/10.1016/j.ajem.2026.02.004"],
 ["2025","Mobile phone auscultation accurately diagnoses COPD using nonlinear respiratory biofluid dynamics","Diagnostics","https://doi.org/10.3390/diagnostics15121550"],
 ["2024","Accurate modeling of ejection fraction and stroke volume with mobile phone auscultation","JMIR Cardio","https://doi.org/10.2196/57111"]];
var SHEETS=[];
