var FONTS=['400 1em "Raleway"','500 1em "Raleway"','600 1em "Raleway"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"'];
var WEB="https://insightsurgicaltechnologies.com/";
var MAIL="info@insightsurgicaltechnologies.com";
var MAP="https://www.google.com/maps/search/?api=1&query=Lebanon+NH+03766";
var RP="https://reporter.nih.gov/project-details/11410095";
var DART="https://engineering.dartmouth.edu/news/startup-wins-phase-2-sbir-grant-to-develop-next-generation-surgical-navigation-systems";
var MTO="https://www.medicaltechoutlook.com/insight-surgical-technologies-2026";
var JNS25="https://doi.org/10.3171/2025.4.JNS242786";
/* products: from insightsurgicaltechnologies.com (home, /i2-update/, /qf-image/). [kind, name, one line, detail, link, link label]
   Every figure is from an institutional IRB-approved study of a research prototype, as the company states; nothing is FDA cleared. */
var PROG=[
 ["Image updating","I²UPDATE™","Keeps navigation accurate as the brain shifts","Stereovision cameras on the surgical microscope capture sparse data that drive a 3D computational model, updating the MRI throughout surgery: automated, on demand, without intraoperative CT, MR or ultrasound, and designed to integrate with any image-guidance system.","https://pubmed.ncbi.nlm.nih.gov/27611206/","J Neurosurg 2017"],
 ["Wide-field fluorescence","qF-IMAGE™","Maps fluorescence the eye cannot see","An augmented-reality system that overlays absolute ALA-induced PpIX concentration maps on the surgical field through the microscope’s heads-up display. The research prototype has been used in over 150 glioma, meningioma and metastasis cases.","https://pubmed.ncbi.nlm.nih.gov/23152935/","Sci Rep 2012"],
 ["Point spectroscopy","qF-PROBE™","Confirms tumor at the probe tip","Touched to tissue, the probe reads the spectral signature of PpIX, corrected for tissue optics. In clinical studies a research prototype was up to 100 times more sensitive than visual fluorescence, across more than 200 patients.","https://pubmed.ncbi.nlm.nih.gov/21529179/","J Neurosurg 2011"]];
/* people: the management team on insightsurgicaltechnologies.com/about-us. Headshots there are 180px wide (too small for a portrait
   grid, BV/CI), so the masthead list, not clickable. */
var TEAM=[
 {name:"Keith D. Paulsen, PhD",title:"Co-Founder, Director, President & CEO",sum:"Professor of Biomedical Engineering, Radiology and Surgery at Dartmouth; inventor on 40+ patents and patents pending."},
 {name:"David W. Roberts, MD",title:"Co-Founder, Director & Chief Medical Officer",sum:"Professor of Surgery (Neurosurgery), Active Emeritus, at Geisel; an early patent in frameless stereotaxy, the root of neuro-navigation."},
 {name:"Brian Wilson, PhD",title:"Co-Founder, Director & Chief Scientific Officer",sum:"Senior Scientist at University Health Network and Professor of Medical Biophysics, University of Toronto."},
 {name:"Bernard E. Lyons, PhD",title:"Executive Chairman & Director",sum:"Over 35 years in medical devices; former President and CEO of Direct Flow Medical, Vasca and CardioClasp."}];
var TEAM2=[
 {name:"John Sullivan",title:"VP, Research & Development",sum:"More than 20 years developing medical devices; formerly VP of Quality and Engineering at TransMedics."},
 {name:"Marybeth Gamber",title:"Acting Head of Regulatory Affairs & QA",sum:"Leads regulatory and clinical strategy; previously at Boston Scientific and Boston Biomedical Associates."},
 {name:"Joseph Doyle",title:"Strategic Advisor",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 31, 2026","Named MedTech Outlook’s “Top Emerging Autonomous Surgical Navigation Systems 2026”","MedTech Outlook",MTO],
 ["September 17, 2026","NCI awards SBIR Phase II grant: “Advanced Surgical Guidance with Image Updating”","NIH RePORTER",RP],
 ["July 25, 2026","Dartmouth startup wins $2 million Phase II SBIR grant to develop next-generation surgical navigation","Dartmouth Engineering",DART],
 ["2025","“Fully automated image updating for brain shift compensation after dural opening”","J Neurosurg",JNS25]];
var SHEETS=[];
