var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Nunito Sans"','600 1em "Nunito Sans"','700 1em "Nunito Sans"','500 1em "Jost"'];
var MAIL="info@perceptivemedical.com";
/* the inventors' randomized trials, as listed on perceptivemedical.com/clinical-studies (performed and published by the UC Irvine
   inventors and their collaborators). [year, journal, title, finding, url] */
var TRIALS=[
 ["2023","Journal of Clinical Monitoring and Computing","Tight control of mean arterial pressure after high-risk abdominal surgery","In ICU patients after high-risk abdominal surgery, closed-loop control of norepinephrine better held a MAP target of 80 to 90 mmHg and significantly reduced postoperative hypotension compared with manual titration.","https://link.springer.com/article/10.1007/s10877-023-01104-3"],
 ["2022","Anesthesia & Analgesia","Postoperative hypotension after cardiac surgery","In a randomized trial of patients after cardiac surgery, closed-loop vasopressor titration reduced time in hypotension (MAP below 65 mmHg) by 90% compared with the standard of care.","https://journals.lww.com/anesthesia-analgesia/Fulltext/2022/05000/Control_of_Postoperative_Hypotension_Using_a.14.aspx"],
 ["2021","Anesthesiology","Individualized hemodynamic management in high-risk surgery","With the prototype closed-loop vasopressor system alongside goal-directed fluid therapy, time in hypotension fell by 95% compared with the typical standard of care, with higher cardiac output and less vasopressor overall.","https://pubs.asahq.org/anesthesiology/article/135/2/258/115736/Computer-assisted-Individualized-Hemodynamic"],
 ["2021","British Journal of Anaesthesia","Automated versus manual norepinephrine in abdominal surgery","The first randomized controlled trial of the prototype in moderate- to high-risk surgery: 90% less time in hypotension relative to the patient’s baseline, and 95% less time with a MAP below 65 mmHg.","https://www.bjanaesthesia.org/article/S0007-0912(20)30753-4/fulltext"]];
/* UCI Beall Applied Innovation (2023): founders; Cove Fund one-page brief (2021): roles. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founders",name:"Joseph Rinehart, MD",title:"Co-founder and CEO",sum:"Anesthesiologist; associate professor of anesthesiology and vice chair for research at the UC Irvine School of Medicine. Previously CEO of Sironis, which exited to Edwards Lifesciences in 2014."},
 {g:"Founders",name:"Maxime Cannesson, MD, PhD",title:"Co-founder and Chief Medical Officer",sum:"Anesthesiologist and physician-scientist, internationally recognised for his work in hemodynamic monitoring and machine learning."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2026","Perceptive Medical selected as a finalist for the 2026 UC Regents Innovation Awards, Best Startup","Perceptive Medical","https://www.perceptivemedical.com/post/perceptive-medical-selected-as-finalist-for-2026-uc-regents-innovation-awards"],
 ["June 2026","Closed-loop nitroglycerine and esmolol abstract nominated for Best Abstracts at the 2026 ASA Annual Meeting","Perceptive Medical","https://www.perceptivemedical.com/post/closed-loop-nitroglycerine-esmolol-abstract-nominated-for-best-abstracts-at-2026-american-societ"],
 ["May 2026","Dr. Rinehart presents at UCLA’s LABEST conference on the role of faculty-founders","Perceptive Medical","https://www.perceptivemedical.com/post/dr-rinehart-presents-at-ucla-s-labest-conference-highlighting-the-role-of-faculty-founders"],
 ["August 2023","How might automation assist surgical outcomes? Perceptive Medical profiled","UCI Beall Applied Innovation","https://innovation.uci.edu/news/perceptive-medical/"],
 ["May 2023","FDA Breakthrough Device Designation received","Perceptive Medical","https://www.perceptivemedical.com/post/perceptive-medical-receives-fda-breakthrough-device-designation"]];
var SHEETS=[];
