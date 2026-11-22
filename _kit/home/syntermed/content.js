var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Public Sans"','500 1em "Public Sans"','600 1em "Public Sans"','700 1em "Public Sans"'];
var MAIL="info@syntermed.com";
var SM="https://syntermed.com/";
var REL="https://static.showit.co/file/SJgWvtjN5oGOgOiopDmFoA/110494/syntermed_emory_toolbox_acquisition_release_9-4-25_1.pdf";
var K510="https://static.showit.co/file/YS5aTDsVSDS3PMbNGv9QBA/110494/ectb_4_3_510k_press_release.pdf";
/* the four product lines: every line from syntermed.com (home, /cardiac-toolbox, /neuroq, /pylarify-ai, /syntermed-live, /about)
   and the acquisition release of 4 Sep 2025. [area, product, sub, status, detail, link, label] */
var PIPE=[
 ["Cardiology","Cardiac Toolbox","eCTB, built on the Emory Cardiac Toolbox","510(k) · CE","Comprehensive quantification for SPECT and PET myocardial perfusion studies, now with Automated Clinical Intelligence: hundreds of evidence-based clinical rules applied to every study, the integrated Vall d’Hebron Risk Score and one-click clinical justification.",SM+"cardiac-toolbox","Cardiac Toolbox"],
 ["Neuroradiology","NeuroQ 4","Trusted quantitative neuroimaging","510(k) · CE","Brain imaging analysis for FDG, Amyloid (with Centiloids), SPECT/DaTscan and Epilepsy. Metabolic levels in more than 240 pre-defined regions of the brain are compared with a normal database and quantified.",SM+"neuroq","NeuroQ"],
 ["Oncology","aPROMISE","PSMA PET/CT assessment","FDA-cleared","A deep learning application for accurate, efficient and reproducible quantification of PSMA PET/CT scans, for standardized reporting in prostate cancer.",SM+"pylarify-ai","aPROMISE"],
 ["Remote reading","Syntermed Live","Cloud reading and reporting","Since 2007","An interactive, HIPAA-compliant remote reading system that now hosts almost a million studies: physicians read and report from anywhere, at any time, on ordinary high-speed internet.",SM+"syntermed-live","Syntermed Live"]];
/* Cardiac Toolbox modules, as listed on syntermed.com/cardiac-toolbox */
var EVID=[
 ["SPECT / PET","Comprehensive quantification for SPECT and PET studies"],
 ["FlowTool","Absolute blood flow and myocardial flow reserve"],
 ["Coronary Flow Capacity","Integrated assessment of stress flow and flow reserve"],
 ["Flyrcado (F 18)","PET myocardial perfusion and flow imaging"],
 ["Myocardial strain","Myocardial deformation, beyond LVEF"],
 ["SyncTool","LV dyssynchrony and cardiac resynchronization therapy"],
 ["Amyloidosis","Quantitative analysis to support the diagnosis of cardiac amyloidosis"],
 ["CT calcium scoring","Integrated coronary artery calcium scoring"]];
/* the team: syntermed.com/about. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Michael Lee",title:"Chairman and CEO",sum:"Oversees product and business strategy and daily operations. Over 40 years in technology and leadership, including at Georgia Tech."},
 {g:"Leadership",name:"Ken Van Train",title:"President",sum:""},
 {g:"Leadership",name:"Ernest V. Garcia, PhD",title:"Chief Scientific Advisor",sum:"Developed the Emory Cardiac Toolbox as its principal investigator at Emory University School of Medicine."},
 {g:"Clinical, technology and regulatory",name:"Kelly Champagne, PhD",title:"Director of Contracts and Grants",sum:"Assistant Regulatory Officer; applications testing."},
 {g:"Clinical, technology and regulatory",name:"C. David Cooke",title:"Director of Clinical Applications",sum:""},
 {g:"Clinical, technology and regulatory",name:"Richard Eppes",title:"Director of Technology",sum:""},
 {g:"Applications and support",name:"Paulo Cardona",title:"Senior Software Applications Engineer",sum:""},
 {g:"Applications and support",name:"Jennifer Miller",title:"Senior Applications and Business Development Manager",sum:""},
 {g:"Applications and support",name:"Ron Fuller",title:"Senior Application Support Manager",sum:""},
 {g:"Applications and support",name:"Jackson Kallen",title:"Junior Software Engineer",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","Syntermed at EANM 2026 in Vienna, Austria, 17 to 21 October, booth 311","EANM","https://eanm26.eanm.org/"],
 ["September 2025","Syntermed acquires the Emory Cardiac Toolbox and rebrands it as Cardiac Toolbox (eCTB)","Press release",REL],
 ["June 2023","Syntermed awarded 510(k) clearance for calcium scoring and strain analysis in the Emory Cardiac Toolbox","Press release",K510]];
var SHEETS=[];
