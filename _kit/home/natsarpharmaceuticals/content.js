var FONTS=['300 1em "Raleway"','400 1em "Raleway"','500 1em "Raleway"','400 1em "Lato"','700 1em "Lato"'];
var MAIL="vraman@natsarpharmaceuticals.com";
var INV="investors@natsarpharma.com";
var CDN="https://cdn.prod.website-files.com/5fee4d603d8f86745bf69089/";
/* The programme, from natsarpharmaceuticals.com (The Technology, Results, Clinical Development), the September 2026 IND
   release, the January 2026 Cancer Letters release, and NIH RePORTER. Status words only where the company states them.
   [programme, area, title, status, detail, dim] */
var PIPE=[
 ["NSF-1 · Phase 1A","Solid tumours","RK-33 I.V. formulation, dose escalation","IND in effect, September 2026","A Phase 1 dose-escalation study evaluating safety and the maximum tolerated dose of NSF-1, the intravenous formulation of RK-33 designed for hospital and infusion-centre settings, in patients with solid tumours.",0],
 ["NSF-1 · Phase 1B","Sarcoma","Expansion arm","Planned after Phase 1A","Followed immediately by a Phase 1B expansion in sarcoma, the tumour type in which the RNA helicase DDX3 was shown to matter for Ewing sarcoma.",0],
 ["RK-33 + radiation","Lung · brain · breast","Radiosensitiser","Preclinical","RK-33 blocks non-homologous end-joining, the main DNA repair pathway in somatic cells, and has shown synergistic cell death with radiation in vitro and in multiple preclinical models, with durable responses.",0],
 ["RK-33 + 5-FU","Pancreatic ductal adenocarcinoma","Targeting the DDX3/PAF1 axis","Preclinical, published 2026","Effective alone and with 5-fluorouracil in KRAS-driven pancreatic cancer, reducing tumour growth and increasing apoptosis in orthotopic and organoid models (Cancer Letters, 2026).",0],
 ["RK-33","Breast cancer · bone metastasis","Breast cancer development","NCI SBIR Phase II, through 2027","Late preclinical and regulatory work funded by the National Cancer Institute under award R44CA295155, following a 2024 study showing DDX3 is a relevant clinical target in breast cancer bone metastasis.",0],
 ["Next","Further oncology indications","Single agent and with radiation","If Phase 1 succeeds","Natsar envisions RK-33 studied in additional tumour types, both as a single agent and in combination with radiation therapy.",1]];
/* Results, from natsarpharmaceuticals.com (Results) and the 2025-26 releases. */
var EVID=[
 ["70 cell lines","Anti-tumour activity as a single agent across 70 human cancer cell lines, independently confirmed by the National Cancer Institute"],
 ["G1 arrest, apoptosis","Inhibiting DDX3 stops tumour cells in the G1 phase of the cell cycle and activates cell-death pathways"],
 ["Wnt pathway","RK-33 inhibits Wnt/β-catenin signalling, which DDX3 activates and which predicts poorer survival in lung cancer"],
 ["Durable responses","In preclinical in vivo models, efficacy both as monotherapy and with radiation, with durable responses observed"]];
/* natsarpharmaceuticals.com (Leadership; Scientific Advisory Board) and NIH RePORTER. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Venu Raman, PhD",title:"Co-founder, Director and Chief Scientific Officer",sum:"Professor in the Johns Hopkins Departments of Radiology and Radiological Science and of Oncology, and Director of Molecular Therapeutics in the Division of Cancer Imaging. His laboratory deciphered the role of DDX3 in breast, lung, sarcoma, colorectal and prostate cancer, and designed RK-33."},
 {g:"Leadership",name:"David Loeb, MD, PhD",title:"Acting Chief Clinical Officer",sum:"Professor and Chair of Pediatrics, Division of Pediatric Hematology and Oncology, Albert Einstein College of Medicine; formerly Director of the Musculoskeletal Tumor Program at Johns Hopkins. His work showed the importance of DDX3 in Ewing sarcoma."},
 {g:"Leadership",name:"Farhad Vesuna",title:"Principal investigator, NCI SBIR award R44CA295155",sum:"Leads the National Cancer Institute-funded drug development of RK-33 for breast cancer treatment."},
 {g:"Scientific Advisory Board",name:"Phuoc Tran, MD, PhD",title:"Radiation oncology",sum:"Clinical Director of Radiation Oncology and Professor of Radiation Oncology and Molecular Radiation Sciences at the Johns Hopkins Sidney Kimmel Comprehensive Cancer Center."},
 {g:"Scientific Advisory Board",name:"Paul J. van Diest, MD, PhD",title:"Pathology",sum:"Head of the Department of Pathology at the University Medical Center Utrecht and Adjunct Professor of Oncology at Johns Hopkins; more than 600 peer-reviewed papers."},
 {g:"Scientific Advisory Board",name:"Vered Stearns, MD",title:"Breast medical oncology",sum:"Co-Director of the Breast and Ovarian Cancer Program at the Johns Hopkins Kimmel Cancer Center."},
 {g:"Scientific Advisory Board",name:"Yoon-Jae Cho, MD",title:"Paediatric neuro-oncology",sum:"Chief of Pediatric Neurology at Oregon Health & Science University; his laboratory discovered the high prevalence of DDX3 mutations in medulloblastoma."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","Natsar announces IND submission and authorization to proceed with Phase 1 clinical investigation of NSF-1","Natsar Pharmaceuticals",CDN+"6aa30e1a07c0a9e72242d400_Natsar%20IND%20Clearance%20-%20Final.pdf"],
 ["September 2026","NCI continues the Phase II award for drug development of RK-33 in breast cancer","NIH RePORTER","https://reporter.nih.gov/project-details/11419762"],
 ["January 2026","RK-33 shows effectiveness as a monotherapy and boosts chemotherapy in non-clinical pancreatic cancer models","Natsar Pharmaceuticals",CDN+"697ce97bcef5709a2cb6c955_PR%20Pancreatic%20Paper%202026.pdf"],
 ["January 2026","Natsar presents at Biotech Showcase 2026 during J.P. Morgan Healthcare Week","Natsar Pharmaceuticals",CDN+"695ff6aa3a824187c609b2b8_Natsar%20Pharmaceuticals_Biotech%20Showcase%20Press%20Release_January%202026.pdf"],
 ["September 2025","Natsar awarded a $2.25 million NIH SBIR Direct-to-Phase II grant to advance RK-33 in solid tumours","Natsar Pharmaceuticals",CDN+"68d27efe026daf1a28969473_SBIR%20Grant%202025%20-%20Final%20PR.pdf"],
 ["December 2024","Johns Hopkins Medicine profiles RK-33 as an exciting breakthrough in cancer research","Johns Hopkins Medicine","https://www.hopkinsmedicine.org/news/articles/2024/11/exciting-breakthroughs-in-cancer-research"]];
var SHEETS=[];
