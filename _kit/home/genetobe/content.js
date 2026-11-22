var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','800 1em "Archivo"'];
var MAIL="rgarcia@genetobe.com";
var SITEURL="https://www.genetobe.com/";
/* Pipeline exactly as GeneToBe publishes it (genetobe.com/pipeline-programs): five programmes, two modalities, and the
   stage each bar reaches on their own chart (Early discovery / Late discovery / IND-enabling / Development). */
var PIPE=[
 ["siRNA gene silencing","MASH","Liver","IND-enabling","Metabolic dysfunction-associated steatohepatitis: a liver-selective small interfering RNA against a genetically-defined driver of the disease, and the lead programme of GeneToBe's gene silencing platform.","https://www.genetobe.com/pipeline-programs","Pipeline"],
 ["siRNA gene silencing","Alcoholic liver disease","Liver","IND-enabling","A second liver-directed siRNA programme advancing alongside MASH, built on the same bias-targeting design and delivery.","https://www.genetobe.com/pipeline-programs","Pipeline"],
 ["MiCas9 gene editing","Usher syndrome","Eye and ear","Late discovery","In vivo correction of USH2A mutations, supported by the gene-edited rabbit model of Usher syndrome GeneToBe's scientists created, which shows progressive retinal degeneration and hearing loss.","https://pubmed.ncbi.nlm.nih.gov/36790823/","Trans Vis Sci Technol"],
 ["MiCas9 gene editing","Cystic fibrosis","Lung","Late discovery","Correction of CFTR mutations with the MiCas9 platform, characterised in CFTR-ΔF508 and CFTR-knockout rabbit models developed at the University of Michigan.","https://pubmed.ncbi.nlm.nih.gov/33427752/","JCI Insight"],
 ["Undisclosed modality","Cystic fibrosis","Lung","Early discovery","A second, undisclosed cystic fibrosis approach in early discovery: on GeneToBe's chart, an opportunity for indication expansion.","https://www.genetobe.com/pipeline-programs","Pipeline"]];
/* The November 2026 Molecular Therapy paper with GeneToBe authors (PMID 42995496): every line from its abstract. */
var EVID=[
 ["The target","C-to-G base editors can address about 11% of pathogenic single-nucleotide variants, but APOBEC-based editors carry high indel rates and off-target activity"],
 ["zCGBE","A TadA-based variant that matches APOBEC-based editors for efficiency while keeping Cas-independent off-target activity low"],
 ["Mi-zCGBE","Fusing Brex27, the 36-amino-acid RAD51-recruiting peptide behind MiCas9, further cut on-target indels and guide-RNA-dependent off-target edits"],
 ["In patient cells","Correcting CFTR-N1303K in patient-derived bronchial epithelial cells restored CFTR protein expression and chloride channel function"]];
/* genetobe.com/leadership and /contact-us, plus the July 2025 CEO announcement. Text-only masthead. */
var TEAM=[
 {g:"Leadership",name:"Ricardo Garcia, PhD",title:"Executive Head and Chief Executive Officer",sum:"Appointed CEO in 2025 after joining GeneToBe as Vice President of Translational Sciences in 2024."},
 {g:"Leadership",name:"Michael Iannuzzi, MD, MBA",title:"Chief Medical Officer",sum:"Joined GeneToBe in 2021; pulmonary physician-scientist and co-author on the company's Usher syndrome and base editing work."},
 {g:"Leadership",name:"Jessica Reed, PhD",title:"Vice President of Development",sum:"Leads development across the siRNA and gene editing programmes."},
 {g:"Leadership",name:"David Lowenschuss, JD",title:"Chief Legal Officer",sum:"Legal lead for the company; Francis J. Tinney, PhD, JD, serves as Senior Patent Counsel."},
 {g:"Founders and board",name:"Charles Bisgaier, PhD",title:"Co-Founder, Chairman of the Board",sum:"Led GeneToBe as CEO from its founding in 2020 until 2025, and now chairs the board full time."},
 {g:"Founders and board",name:"Y. Eugene Chen, MD, PhD",title:"Co-Founder and Board Director",sum:"University of Michigan cardiovascular scientist; senior author on the MiCas9 and gene-edited rabbit model papers."},
 {g:"Science",name:"Jie Xu, PhD · Jifeng Zhang, PhD",title:"Disease Area Program Leads",sum:"Michigan Center for Advanced Models and Translational Sciences; lead authors on the CF and base editing papers."},
 {g:"Science",name:"Dongshan Yang, PhD · Wanqing Liu, PhD",title:"Disease Area Program Leads",sum:"Gene editing and liver disease programme leads; Dr. Yang is first author on the 2020 MiCas9 paper."},
 {g:"Science",name:"James Hamby, PhD",title:"Senior Scientific Advisor, CMC and Integrated Sciences",sum:"Advises on chemistry, manufacturing and controls as the liver programmes approach IND-enabling work."},
 {g:"Scientific advisory board",name:"Arun J. Sanyal, MD",title:"Virginia Commonwealth University",sum:"Director of the Stravitz-Sanyal Institute for Liver Disease and Metabolic Health."},
 {g:"Scientific advisory board",name:"Suthat Liangpunsakul, MD, MPH",title:"Indiana University",sum:"Professor of Medicine and of Biochemistry & Molecular Biology; alcohol-associated liver disease."},
 {g:"Scientific advisory board",name:"Stephen H. Tsang, MD, PhD",title:"Columbia University",sum:"Laszlo Z. Bito Professor of Ophthalmology and Professor of Pathology and Cell Biology."}];
/* News and publications with a working link (genetobe.com/news-more). */
var NEWS=[
 ["November 2026","Development of an efficient and precise TadA-based C-to-G base editor Mi-zCGBE","Molecular Therapy","https://pubmed.ncbi.nlm.nih.gov/42995496/"],
 ["July 2025","GeneToBe, Inc. appoints new CEO amid strategic leadership changes and adds key consultants to advance gene therapy pipeline","BioSpace","https://www.biospace.com/press-releases/genetobe-inc-appoints-new-ceo-amid-strategic-leadership-changes-and-adds-key-consultants-to-advance-gene-therapy-pipeline"],
 ["February 2023","USH2A gene mutations in rabbits lead to progressive retinal degeneration and hearing loss","Translational Vision Science & Technology","https://pubmed.ncbi.nlm.nih.gov/36790823/"],
 ["November 2021","The sodium/glucose cotransporters as potential therapeutic targets for CF lung diseases revealed by human lung organoid swelling assay","Molecular Therapy — Methods & Clinical Development","https://pubmed.ncbi.nlm.nih.gov/34977269/"],
 ["January 2021","Phenotypes of CF rabbits generated by CRISPR/Cas9-mediated disruption of the CFTR gene","JCI Insight","https://pubmed.ncbi.nlm.nih.gov/33427752/"],
 ["November 2020","MiCas9 increases large size gene knock-in rates and reduces undesirable on-target and off-target indel edits","Nature Communications","https://pubmed.ncbi.nlm.nih.gov/33247135/"]];
var SHEETS=[];
