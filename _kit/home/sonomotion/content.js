var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','400 1em "Manrope"','500 1em "Manrope"'];
var WEB="https://www.sonomotion.com/";
var MAIL="info@sonomotion.com";
var PUBS="https://www.sonomotion.com/publications/";
/* evidence and milestones: sonomotion.com News and Publications pages, and the PR Newswire releases they link. [name, line, tag, detail, link, label] */
var EVD=[
 ["S.O.U.N.D. pivotal trial","Co-primary endpoints met, May 2026","Clinical","Break Wave met its co-primary efficacy and safety endpoints. Results were presented by Dr. Ben Chew in a plenary session at the 2026 AUA annual meeting, in its program for practice-changing trials.","https://www.prnewswire.com/news-releases/sonomotion-break-wave-lithotripsy-device-meets-pivotal-trial-primary-endpoints-302771526.html","PR Newswire"],
 ["Break Wave™","FDA 510(k) clearance, January 2026","Regulatory","Cleared for the noninvasive, anesthesia-free treatment of kidney stones. A next-generation device, with therapy probes 31% smaller and lighter, was cleared on May 1, 2026.","https://www.prnewswire.com/news-releases/sonomotion-announces-fda-clearance-for-its-break-wave-lithotripsy-device-for-treatment-of-kidney-stones-302666229.html","PR Newswire"],
 ["Stone Clear™","FDA De Novo clearance, 2024","Regulatory","Ultrasound repositions residual fragments after lithotripsy, so patients can pass them naturally. Together with Break Wave it forms an anesthesia-free treatment pathway.","https://www.prnewswire.com/news-releases/sonomotion-announces-fda-de-novo-clearance-for-its-stone-clear-device-302303764.html","PR Newswire"],
 ["First-in-human trial","Journal of Urology cover, October 2024","Publication","Break Wave Lithotripsy for Urolithiasis: results of the first-in-human international multi-institutional clinical trial. Chew BH, Harper JD, Sur RL, et al. J Urol. 2024;212(4):580–589.","https://www.sonomotion.com/publications/","Publications"]];
/* team: sonomotion.com Team page. [name, role, one-line summary] */
var TEAM=[
 ["Oren Levy, PhD","Chief Executive Officer, Co-Founder","Co-founded SonoMotion in 2014 and has raised over $38 million, including $8 million in NIH and NASA grants. PhD in Biophysics, UC Berkeley."],
 ["Doug Corl, PhD","Chief Technology Officer","Ultrasound device engineer for more than 35 years, with 62 issued patents; previously at Philips, Volcano and Cardiometrics. PhD, Stanford."],
 ["Emily Hergenreter","VP of Clinical Affairs","Over 20 years of clinical research in Class II and III devices at J&J, Abbott and NeoTract, acquired by Teleflex."]];
var MDADV=[["James Lingeman, MD","Indiana University"],["Mathew Sorensen, MD, MS","University of Washington"],["Ben Chew, MD","University of British Columbia"]];
var TECHADV=[["Michael Bailey, PhD"],["Barbrina Dunmire, MS"],["Adam Maxwell, PhD"]];
/* news: sonomotion.com News page; every item links to the source. [date, headline, source, url] */
var NEWS=[
 ["May 2026","Break Wave meets its pivotal trial primary endpoints; next-generation device cleared by the FDA","PR Newswire","https://www.prnewswire.com/news-releases/sonomotion-break-wave-lithotripsy-device-meets-pivotal-trial-primary-endpoints-302771526.html"],
 ["Jan 2026","SonoMotion receives FDA 510(k) clearance for the Break Wave lithotripsy device","PR Newswire","https://www.prnewswire.com/news-releases/sonomotion-announces-fda-clearance-for-its-break-wave-lithotripsy-device-for-treatment-of-kidney-stones-302666229.html"],
 ["Apr 2025","Enrollment complete in the pivotal Break Wave trial, and a $2.2M NIH SBIR Fast-Track grant","PR Newswire","https://www.prnewswire.com/news-releases/sonomotion-completes-enrollment-in-pivotal-clinical-trial-for-break-wave-system-and-secures-2-2-million-nih-grant-302436634.html"],
 ["Nov 2024","FDA De Novo clearance for the Stone Clear device","PR Newswire","https://www.prnewswire.com/news-releases/sonomotion-announces-fda-de-novo-clearance-for-its-stone-clear-device-302303764.html"],
 ["2024","A first of its kind: Hermes, a harbor seal with kidney stones, treated with SonoMotion and Vancouver Aquarium","Vancouver Aquarium","https://www.vanaqua.org/media/press-room/hermes-procedure/"]];
