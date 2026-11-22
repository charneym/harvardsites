var FONTS=['300 1em "Poppins"','400 1em "Poppins"','500 1em "Poppins"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var FORM="https://www.glimpsediagnostics.com/contact-us";
var LI="https://www.linkedin.com/company/glimpse-diagnostics/";
var RP="https://reporter.nih.gov/project-details/";
/* Programmes, from glimpsediagnostics.com (Home, Health Providers & Systems, Health Plans, footer regulatory note) and the
   public NIH RePORTER record (R44EB036883, R43DC023832). Status words only where the company or the record states them.
   [programme, area, title, status, detail, dim, tag] */
var PIPE=[
 ["OtoDL™ AI","Pediatric ear disease","Deep learning image classification of the eardrum","NIBIB SBIR Phase II, from August 2025","Validating an AI algorithm, trained on eardrum images taken with equipment parents can buy over the counter, on images of children who have ear pain, and showing that healthcare providers can use and understand its outputs: the data needed for FDA clearance. Phase II awards of $1,535,084 (2025) and $610,664 (2026).",0,"Phase II"],
 ["Glimpse Ear Platform","Telehealth · in-clinic","Pediatric otoscope speculum and smartphone kit","In development, working towards FDA clearance","A proprietary pediatric otoscope speculum used with the family's phone to capture an eardrum image for a telemedicine visit, with OtoDL classification in a minute or less. Providers will also be able to use the platform for imaging and interpretation in clinic.",0,"Device"],
 ["Eustachian tube treatment","Otitis media with effusion","Closed-loop control for adaptive Eustachian tube treatment","NIDCD SBIR Phase I, from June 2026","Control algorithms for a point-of-care Eustachian tube dysfunction device that uses masseter reflex stimulation to open the tube: safe Bayesian optimisation, informed by fluid-dynamics models of effusions from thin fluid to glue ear, with real-time tympanometry feedback converging on a treatment within three attempts.",1,"Phase I"]];
/* glimpsediagnostics.com and the NIH abstracts. */
var EVID=[
 ["Trained for home images","The algorithm is trained with eardrum images taken on equipment available to parents over the counter, so it applies to images families can take at home"],
 ["92.5% accuracy","Image classification accuracy reported by Glimpse for its AI, with results in a minute or less"],
 ["Provider in the loop","The AI result is sent to a healthcare professional, who makes the diagnosis and the treatment recommendation"],
 ["Toward FDA clearance","Glimpse's hardware and software are medical devices; until OtoDL™ receives FDA clearance it is not available for purchase"]];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2026","NIDCD awards Glimpse an SBIR Phase I grant for closed-loop control algorithms for adaptive Eustachian tube treatment","NIH RePORTER",RP+"11408841"],
 ["August 2025","NIBIB awards Glimpse an SBIR Phase II grant for its deep learning image classification model for pediatric ear disease","NIH RePORTER",RP+"11185784"],
 ["2023","Glimpse Diagnostics named an MN Cup division winner, in a Twin Cities Business feature on Dr. Courtney Hill","Twin Cities Business","https://www.pageturnpro.com/Twin-Cities-Business/110279-MNCup-2023/sdefault.html#page/11"],
 ["Grant","Diversified Plastics, Inc. awards Glimpse Diagnostics an Acceleration Station™ service grant","Medical Alley","https://medicalalley.org/diversified-plastics-inc-awards-glimpse-diagnostics-with-an-acceleration-station-service-grant/"],
 ["2021","P&G Ventures announces its 2021 CES Innovation Challenge finalists, including Glimpse Diagnostics","Markets Insider","https://markets.businessinsider.com/news/stocks/p-g-ventures-announces-2021-ces-innovation-challenge-finalists-1029899469"]];
var SHEETS=[];
