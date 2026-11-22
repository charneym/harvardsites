var FONTS=['300 1em "Montserrat"','500 1em "Montserrat"','400 1em "Montserrat"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="info@progentec.com";
var RP="https://reporter.nih.gov/project-details/";
/* the pipeline, from progentec.com (Product Pipeline, Technology, News). Status words only where the company states them:
   the two aiSLE DX tests are "available through Mayo Clinic Laboratories" (home page, 2025 CMS release); the rest are listed on
   the pipeline and described as in development / being validated. [name, area, title, status, detail, dim] */
var PIPE=[
 ["aiSLE® DX","Lupus (SLE)","Flare Risk Index","Available through Mayo Clinic Laboratories","Powered by LiquidFlareRisk™ technology. Informs the risk of a person with SLE developing a disease-related flare within 12 weeks of being tested. PLA code 0446U.",0],
 ["aiSLE® DX","Lupus (SLE)","Disease Activity Index","Available through Mayo Clinic Laboratories","Powered by LiquidDiseaseActivity™ technology. An objective, blood-based measure of the level of lupus disease activity today. PLA code 0447U.",0],
 ["aiSLE® DX","Lupus risk","Classification","In development","A novel immune-based index that may identify people at risk of developing SLE (Lupus Science & Medicine, 2026), supported by an OCAST Industry Innovation Grant.",0],
 ["aiSLE® DX","Lupus (SLE)","Digital Biomarker","In development","Patient-reported outcomes and smartphone and wearable signals, including heart rate variability, from the fully remote OASIS study.",0],
 ["aiMS™ DX","MS and NMO","Relapse prediction, disease activity, interferon response, NMO distinction","In development","Assay-based laboratory tests for the prediction and measurement of multiple sclerosis, MS relapses and MS classification, with remotely administered cognitive tests as a digital biomarker. Technology licensed from Stanford and OMRF.",0],
 ["Next","Sjögren’s · Crohn’s · UC","Digital and biologic biomarkers","On the pipeline","Sjögren’s syndrome, and digital and biologic biomarkers for Crohn’s disease and ulcerative colitis.",1]];
/* the lab (progentec.com, About our Laboratory) */
var EVID=[
 ["CLIA and CAP","A CLIA-certified, CAP-accredited laboratory at the University of Oklahoma Biomedical Research Park"],
 ["Multi-analyte","Tests run on microfluidic cartridges in a temperature-controlled analyzer, with no chance of cross-reactivity between analytes"],
 ["Reproducible","Antibody pairs made in large, sequestered lots; master calibrators lyophilized and stored for years"],
 ["Reimbursed","Medicare pays $840.65 per test, when covered, for both aiSLE DX tests (CMS final determination, effective January 1, 2025)"]];
/* progentec.com (Team; Board of Directors). Text-only masthead (CI/CL). Summaries are only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Mohan Purushothaman, PhD",title:"President, Chairman and CEO",sum:"Co-founder. Formerly at Roche and Global Practice Lead for Pricing and Market Access at Alliance Life Sciences; PhD, Johns Hopkins University."},
 {g:"Leadership",name:"Melissa E. Munroe, MD, PhD",title:"Chief Scientific Officer and Principal Investigator",sum:"Immunologist whose research led to novel strategies for measuring autoimmune disease activity; PI on Progentec’s NIH awards."},
 {g:"Leadership",name:"Bernard R. Rubin, DO, MPH",title:"Chief Medical Officer",sum:"Former Chief of Rheumatology at UNT Health Science Center for over 20 years, then GSK medical affairs in SLE."},
 {g:"Leadership",name:"Eldon Jupe, PhD",title:"Chief Research and Laboratory Officer",sum:"Clinical laboratory director; co-founded InterGenetics and led the team that developed the OncoVue® breast cancer test."},
 {g:"Leadership",name:"James Wilcox, Esq.",title:"Chief Counsel and Corporate Secretary",sum:"Three decades in corporate, intellectual property and licensing law for diagnostics and life-science companies."},
 {g:"Leadership",name:"Sneha Nair",title:"Senior Manager, Operations",sum:""},
 {g:"Leadership",name:"Rou Sore, MPH",title:"Manager, Real-World Evidence Studies",sum:""},
 {g:"Leadership",name:"Daniele DeFreese",title:"Laboratory Technician and Manager",sum:""},
 {g:"Board of directors",name:"Hakan Sakul, PhD",title:"President, Precision Dx Strategies",sum:"Founded Pfizer’s Diagnostics group in 2007."},
 {g:"Board of directors",name:"Bob Saunders",title:"General Partner, OCA Ventures",sum:""},
 {g:"Board of directors",name:"Mike Rohleder",title:"Portfolio Manager, Plains Ventures",sum:""},
 {g:"Board of directors",name:"Mary Jo Williamson",title:"Chief Administrative Officer, Mayo Collaborative Services",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2026","NIAID continues Progentec’s commercialization-readiness award for immune mediator blood tests in lupus","NIH RePORTER",RP+"11325429"],
 ["April 2026","Progentec advances the ability to determine lupus risk with new research and an OCAST grant","PR Newswire","https://www.prnewswire.com/news-releases/progentec-diagnostics-advances-ability-to-determine-lupus-risk-with-new-research-and-ocast-grant-302738235.html"],
 ["May 2024","Mayo Clinic Laboratories and Progentec launch lupus advanced biomarker testing services","Newswise","https://www.newswise.com/articles/mayo-clinic-laboratories-and-progentec-diagnostics-launch-lupus-advanced-biomarker-testing-services"],
 ["November 2023","Mayo Clinic Laboratories and Progentec collaborate on advanced biomarker testing for autoimmune diseases","Mayo Clinic Laboratories","https://news.mayocliniclabs.com/2023/11/07/mayo-clinic-laboratories-and-progentec-collaborate-to-bring-advanced-biomarker-testing-services-to-patients-with-autoimmune-diseases/"],
 ["June 2021","Progentec announces a research collaboration with GSK on proteomics and digital health tools for lupus care","PR Newswire","https://www.prnewswire.com/news-releases/progentec-announces-research-collaboration-with-gsk-to-assess-proteomics-and-digital-health-tools-for-lupus-sle-care-301307152.html"],
 ["July 2020","Progentec licenses multiple sclerosis technology from Stanford and OMRF","PR Newswire","https://www.prnewswire.com/news-releases/progentec-announces-licensing-agreement-for-multiple-sclerosis-ms-technology-with-stanford-omrf-establishes-scientific-advisory-board-301090125.html"]];
var SHEETS=[];
