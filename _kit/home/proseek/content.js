var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Roboto"','500 1em "Roboto"','700 1em "Roboto"'];
var MAIL="privacy@proseek.bio";
/* programmes (proseek.bio Investor, Our technology, Clinical laboratory pages). [name, area, detail, status] */
var PROG=[
 ["OC-Triage","Suspicious ovarian masses","A glycoproteomic blood test that reads protein and glycan signatures from a standard blood draw and gives a clear high or low likelihood result, to help clinicians decide whether surgery is truly needed. Seed funding supports the move toward clinical lab deployment and validation.","Lead test"],
 ["Women’s health","Further diagnostics","The same modular platform is designed to extend into other women’s health diagnostics, addressing unmet needs where diagnosis takes too long.","Pipeline"],
 ["Companion diagnostics","Glycosylation changes linked to disease and drugs","Quantitative glycoproteomics to help partners stratify patients and enrich clinical trials.","Pipeline"],
 ["Esophageal adenocarcinoma","Proof of concept","Glycoform biomarkers from the same discovery pipeline were licensed to Proteomics International in June 2022.","Licensed"]];
/* feature publications (proseek.bio home and Our technology) */
var EVID=[
 ["Proteomics Clinical Applications, 2023","Discovery and validation of serum glycoprotein biomarkers for high grade serous ovarian cancer","https://onlinelibrary.wiley.com/doi/full/10.1002/prca.202200114"],
 ["Serum/Plasma Proteomics, 2023","Semi-automated lectin magnetic bead array (LeMBA) for translational serum glycoprotein biomarker discovery and validation","https://link.springer.com/protocol/10.1007/978-1-0716-2978-9_25"],
 ["Electrophoresis, 2011","High-throughput lectin magnetic bead array-coupled tandem mass spectrometry for glycoprotein biomarker discovery","https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/abs/10.1002/elps.201100341"]];
/* proseek.bio About us. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Assoc. Prof. Michelle Hill",title:"Founder and CEO",sum:"Founder and inventor of the technology; 25+ years in cancer biomarker research and clinical translation."},
 {g:"Leadership",name:"Dr Leo Bolero",title:"Co-Founder and Chief Commercial Officer",sum:"Biotech commercialisation and regulatory strategy, with a background in AI-driven medical informatics."},
 {g:"Leadership",name:"Dr Idris Mohd Najib",title:"Product Development Lead Scientist",sum:"Biomedical scientist specialising in translational research and diagnostic product development."},
 {g:"Leadership",name:"Dr Jessica Desport",title:"Operations and Quality Manager",sum:"Analytical chemist with 10 years in mass spectrometry; operations and translational R&D."},
 {g:"Board of directors",name:"Kirsty Garrett",title:"Chair, Non-Executive Director",sum:"35+ years in technology and healthtech leadership, scaling high-growth businesses."},
 {g:"Board of directors",name:"Peter Bradley",title:"Non-Executive Director",sum:"Diagnostics industry veteran: IVD commercialisation, regulatory strategy and pathway to market."},
 {g:"Board of directors",name:"Michael Junger",title:"Non-Executive Director",sum:"Medtech start-up specialist across technology development, fundraising and manufacturing."},
 {g:"Clinical advisor",name:"Dr David Herold, MD, PhD",title:"Clinical Advisor",sum:"Decades of expertise in clinical pathology and mass spectrometry."}];
/* news: Proseek posts, each links out. [date, headline, source, url] */
var NB="https://www.proseek.bio/post/";
var NEWS=[
 ["October 2026","Kirsty Garrett joins Proseek Bio as Board Chair","Proseek Bio",NB+"kirsty-garrett-joining-as-board-chair"],
 ["September 2026","Why ovarian cancer still takes too long to diagnose, and why that has to change","Proseek Bio",NB+"why-ovarian-cancer-still-takes-too-long-to-diagnose-and-why-that-has-to-change"],
 ["September 2026","Dr David Herold joins as our first Clinical Advisor","Proseek Bio",NB+"welcome-to-the-team-dr-david-herold"],
 ["July 2026","Peter Bradley joins the Board as Non-Executive Director","Proseek Bio",NB+"proseek-bio-welcomes-peter-bradley-to-its-board-as-non-executive-director"],
 ["June 2026","Selected for the BioTools Innovator 2026 cohort, one of 30 from nearly 550 applicants","Proseek Bio",NB+"proseek-bio-selected-for-biotools-innovator-2026-cohort"],
 ["April 2026","Oversubscribed A$1.5M seed round closed to advance OC-Triage","Proseek Bio",NB+"proseek-bio-raises-a-1-5m-to-advance-ovarian-cancer-diagnostics"]];
var SHEETS=[];
