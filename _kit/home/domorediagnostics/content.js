var FONTS=['300 1em "Archivo"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','700 1em "Archivo"','400 1em "DM Mono"','500 1em "DM Mono"'];
var WEB="https://www.domorediagnostics.com/";
var MAIL="torbjorn.furuseth@domorediagnostics.com";
/* key features of Histotype Px Colorectal, as listed on domorediagnostics.com/products. [feature, short, detail] */
var PROPS=[
 ["Digital biomarker","From a routine H&E slide","A deep neural network determines recurrence and survival prognosis from routine H&E-stained histology slides."],
 ["Accurate risk stratification","Low, intermediate, high","Separates stage II and III patients into distinct low, intermediate and high-risk groups to guide adjuvant chemotherapy decisions."],
 ["Robust by design","4,500 patients · 90M tiles","Trained and tested on 4,500 patient samples and 90 million image tiles, from slides prepared at several sites and scanned with two different scanners."],
 ["Rapid turnaround","Fully automated","Fully automated histotyping provides objective and precise prognostic information about patient outcomes."],
 ["Seamless workflow integration","No formal training required","Runs on leading digital pathology platforms, with a fast, intuitive user experience inside the pathologist’s existing workflow."],
 ["Complements ctDNA","Fewer false negatives","Pilot data suggest Histotype Px can improve the accuracy of post-surgery ctDNA tests and reduce false negatives."]];
/* product facts, from domorediagnostics.com/products and the company's press releases */
var PROG=[
 ["Histotype Px® Colorectal","CE-IVDD marked","An outcome prediction marker for stage II and III colorectal adenocarcinoma that informs whether to give adjuvant chemotherapy after surgical resection of the tumour.",WEB+"products"],
 ["Clinical evidence","The Lancet Oncology, 2022","In the QUASAR 2 trial, Histotype Px significantly improved prognostic accuracy when combined with TNM staging: a hazard ratio of 9.47 between high and low risk.",WEB+"products"],
 ["Clinical validation","Europe, USA and Japan","Studies with leading cancer centres explore validation across diverse populations and treatment regimens, the combination with ctDNA, and decision support in ambiguous cases.",WEB+"partners"],
 ["Intellectual property","A global, exclusive licence","Patents and applications owned by Oslo University Hospital cover Histotype Px and its machine-learning methods; granted in the US, Japan, Korea, Australia and Singapore.",WEB+"products"]];
var PLATF=["Sectra Amplifier Marketplace","PathAI AISight™","Proscia Concentriq® Dx"];
var COLLAB=["The Ohio State University Comprehensive Cancer Center","University Medical Center Utrecht","Aarhus University Hospital","FFCD and CHU Dijon","IFOM, Milan"];
/* people: as published on domorediagnostics.com/company */
var TEAM=[
 ["Torbjørn Furuseth, MD","CEO and Co-founder","Physician, then McKinsey & Company; EVP Innovation at Aker BioMarine, CFO at Targovax and Lytix Biopharma. MD, NTNU."],
 ["Sepp De Raedt, PhD","CTO and Co-founder","Central to developing the technology at Oslo University Hospital, work published in The Lancet. PhD, Aarhus University."],
 ["Lao Saal, MD, PhD","Medical Director","Associate Professor and Head of Translational Oncogenomics at Lund University; founder of SAGA Diagnostics. MD and PhD, Columbia University."],
 ["Andreas Berg Storsve, PhD","VP Operations","R&D Director at Aker BioMarine, VP Business Development at Circio (formerly Targovax). PhD, University of Oslo."],
 ["Elisabeth M.J. Klaussen, MSc","Head of Quality and Regulatory","Quality assurance, risk management and regulatory at GE Healthcare, Life Technologies and Medistim. Cand. Scient., University of Oslo."]];
var BOARD=["Tomas Nordheim Alme, MD · Chairman","Øyvind Grotmol, MSc","Yngve Tvedt, MBA","Prof. Knut Liestøl","Ketil F. Widerberg, MBA","Anders Tuv, MBE"];
var SAB=["Dr. John L. Marshall","Dr. Jeanine Roodhart","Dr. Takayuki Yoshino","Dr. Frank A. Sinicrope","Prof. Marc Peeters","Prof. Marco Novelli","Prof. Hans-Joachim Schmoll"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["10 November 2026","Patents covering Histotype Px® granted in Australia and Singapore, the company’s first in these territories","DoMore news",WEB+"news/patents-granted-australia-singapore"],
 ["22 October 2026","Clinical validation of Histotype Px® Colorectal in a nationwide Dutch study selected for poster presentation at ESMO 2026, Madrid","DoMore news",WEB+"news/domore-esmo26"],
 ["10 August 2026","Liquid biopsy meets digital pathology: a clinical validation study with IFOM, Milan, in early-stage colorectal cancer","DoMore news",WEB+"news/domore-diagnostics-ifom-collaboration"],
 ["7 January 2026","Clinical data with The Ohio State University on predicting adjuvant chemotherapy benefit in stage II/III colon cancer, at ASCO GI 2026","DoMore news",WEB+"news/domore-diagnostics-asco-gi-2026"]];
var SHEETS=[];
