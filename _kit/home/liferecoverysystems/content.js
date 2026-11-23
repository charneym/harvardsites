var FONTS=['500 1em "Sofia Sans"','600 1em "Sofia Sans"','700 1em "Sofia Sans"','400 1em "Source Sans 3"','400 1em "Red Hat Mono"','500 1em "Red Hat Mono"'];
var MAIL="mailto:info@life-recovery.com";
/* Clinical programmes, from life-recovery.com (Clinical, Heatstroke, News) and the company's PR Newswire release of
   2 March 2026. Stage words only as the company states them. [indication, area, title, stage, detail, dim, tag] */
var PIPE=[
 ["Acute ischemic stroke","Investigational","Pivotal trial, ThermoSuit cooling in stroke","IDE approved by FDA · March 2026","FDA&#8217;s IDE approves up to 160 patients in up to 8 hospitals, randomised to standard care with or without cooling to 32 &#177; 1&#176;C. The primary endpoint is post-stroke cognitive impairment; secondary outputs include neurological recovery and mortality.",0,"Pivotal"],
 ["Acute ischemic stroke","Investigational","SISCO pilot study","Complete · published Nov 2025","The pilot concluded the ThermoSuit was feasible to use, cooled rapidly and had acceptable safety, with trends toward improved recovery. Published in Frontiers in Neurology.",0,"Published"],
 ["Hyperthermia and heatstroke","FDA 510(k) cleared","Temperature reduction","Cleared indication","Temperature reduction in patients where clinically indicated, e.g. in hyperthermic patients, and monitoring of patient temperature. The only medical device that uses iced water immersion to cool patients in a controlled environment.",0,"Cleared"],
 ["Rapid hypothermia induction","Clinical study","Multicentre clinical evaluation","Published · Resuscitation, 2010","A multicentre study of rapid induction of therapeutic hypothermia with convective-immersion surface cooling reported the ThermoSuit&#8217;s safety, efficacy and outcomes. Against a separate study of gel pads and blankets, it reached target far sooner.",1,"Published"]];
/* Cooling performance, as the company reports it (life-recovery.com, Cooling Performance and FAQ). */
var EVID=[
 ["37 minutes","Median time to the 34°C target with the ThermoSuit in a multicentre study"],
 ["27 minutes","Median cooling time in the subset of patients sedated with propofol"],
 ["100% vs 71% and 50%","Patients at target within four hours: ThermoSuit, against gel pads and cooling blankets"],
 ["81 minutes","The slowest ThermoSuit cooling time recorded; gel pads and blankets typically took three to four hours"]];
/* life-recovery.com (About, Management Team). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Management team",name:"Matt Center",title:"Chief Executive Officer",sum:"More than 25 years of leadership in the medical industry; a business development and growth specialist who leads operations, strategy, capital raising and corporate partnerships."},
 {g:"Management team",name:"Robert J. Freedman, Jr., MD, FACC",title:"Chairman, Chief Medical and Strategy Officer",sum:"Co-founder. Interventional cardiologist, founder of Freedman Memorial Cardiology in Alexandria, LA, clinical assistant professor at Tulane and a former U.S. Air Force flight surgeon."},
 {g:"Management team",name:"Robert B. Schock, PhD",title:"Co-founder, VP Research and Development",sum:"Co-inventor of the ThermoSuit System. PhD in Biomedical Engineering (RPI); formerly Director of Advanced Research, Cardiac Assist, at Datascope; author of over twenty U.S. patents."},
 {g:"Management team",name:"Coan I. Knight, CPA, MBA",title:"Chief Financial Officer",sum:"Over 45 years in public accounting; co-founder of Knight Masden CPAs in Alexandria, LA, and a U.S. Army veteran."}];
/* news and publications that link out to the source */
var NEWS=[
 ["2 Mar 2026","LRS secures IDE to study the ThermoSuit in a pivotal trial of ischemic stroke patients","PR Newswire","https://www.prnewswire.com/news-releases/lrs-secures-ide-to-study-its-thermosuit-cooling-device-in-a-pivotal-trial-of-ischemic-stroke-patients-302701125.html"],
 ["7 Nov 2025","SISCO pilot study published: rapid thin liquid convection cooling is safe and feasible in acute ischemic stroke","Frontiers in Neurology","https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2025.1611794/full"],
 ["30 Sep 2024","&#8220;Therapeutic hypothermia is not dead, but hibernating!&#8221;","Clin Exp Emerg Med","https://doi.org/10.15441/ceem.24.291"],
 ["Feb 2024","SISCO pilot results presented at the International Stroke Conference, Phoenix","Stroke","https://doi.org/10.1161/str.55.suppl_1.WP30"],
 ["12 Jun 2023","LRS and FDA agree to conclude the pilot stroke cooling study and move to a randomised trial","life-recovery.com","https://www.life-recovery.com/site/life-recovery-systems-and-fda-agree-to-conclude-pilot-stroke-cooling-study-and-move-forward-to-randomized-trial"]];
var SHEETS=[];
