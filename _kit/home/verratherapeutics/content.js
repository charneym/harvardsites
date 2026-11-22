var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','700 1em "Montserrat"'];
/* Verra publishes no email address (verratherapeutics.com has a contact form only), so the CTA links to that form; never invent one */
var WEB="https://verratherapeutics.com/";
var RP="https://reporter.nih.gov/project-details/";
var PAPER="https://pubmed.ncbi.nlm.nih.gov/41063509/";
/* programmes: every line from verratherapeutics.com (About, Pipeline), NIH RePORTER (HL149580) and the 2026 Br J Pharmacol
   paper on VTH144. [candidate, indication, organ, status, detail, link, link label] */
var PIPE=[
 ["VTH144","Recovery after a heart attack and heart failure prevention","Heart","Preclinical","A modified native peptide inhibitor, fully and uniquely selective for ADAM10, a target up-regulated in the heart muscle of heart-attack patients. In preclinical studies it cut heart-function losses by 75% relative to controls and interstitial fibrosis by 70%.",PAPER,"Br J Pharmacol"],
 ["VTH245","COPD: chronic bronchitis, emphysema and small airway narrowing","Lung","Preclinical","A best-in-class inhibitor of a protease linked with COPD’s three most important phenotypes. In six-month gold-standard mouse studies it substantially reduced abnormal mucus production, emphysema and elastin degradation, and was very well tolerated.",RP+"10754961","NIH RePORTER"],
 ["Verra platform","Kidney injury","Kidney","Preclinical","Verra’s preclinical candidates address acute, sub-acute and chronic disease and span organ and injury types, including kidney injury.",WEB,"Verra"]];
/* verratherapeutics.com Leadership. Text-only masthead; summaries condensed from their bios. */
var TEAM=[
 {g:"Leadership",name:"Christopher Prince, PhD",title:"Co-founder & President",sum:"Decades of senior leadership managing technology companies, with biotech and pharmaceutical development experience at founder, executive and board level: Phyton Inc./Phyton Biotech, CellFor Inc., Annikki GmbH and Verra."},
 {g:"Leadership",name:"Marcia Moss, PhD",title:"Chief Scientist",sum:"Former Oncology Project Lead at GlaxoSmithKline, with a comprehensive background in drug discovery and development; a thought leader on proteases as disease targets."},
 {g:"Leadership",name:"Jeffrey Calkins, MBA",title:"Interim CFO",sum:"Three decades of operations and finance experience at COO, CFO and CEO level in public and private companies; a serial entrepreneur from start-up through growth and IPO."},
 {g:"Advisors",name:"Jeanine D’Armiento, MD, PhD",title:"Respiratory · Columbia",sum:"Professor of Medicine, Columbia Medical School. Her lab studies metalloproteases in lung injury and repair, and their inhibition in destructive lung diseases."},
 {g:"Advisors",name:"Prof. Dr. med. Ali El-Armouche",title:"Heart attack & heart failure · TU Dresden",sum:"Professor and Director, Institute for Pharmacology & Toxicology, TU Dresden; molecular mechanisms in arrhythmogenesis and heart-failure progression."},
 {g:"Advisors",name:"Yohannes Tesfaigzi, PhD",title:"Chronic bronchitis · Brigham and Women’s",sum:"Professor of Medicine, Brigham and Women’s Hospital and Harvard Medical School; formerly Director of the COPD Program at Lovelace Biomedical."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["March 2026","The VTH144 heart-attack study, “Leveraging the ADAM10 prodomain for selective inhibition to enhance recovery after myocardial infarction”, appears in the British Journal of Pharmacology","PubMed",PAPER],
 ["November 2023","The NHLBI funds the second year of Verra’s Phase II SBIR for a disease-modifying protein therapeutic for COPD ($635K)","NIH RePORTER",RP+"10754961"],
 ["December 2022","The National Heart, Lung, and Blood Institute awards Verra a Phase II SBIR to advance its COPD protein therapeutic ($1.36M)","NIH RePORTER",RP+"10602047"],
 ["September 2019","Verra wins a Phase I SBIR from the NHLBI for a disease-modifying protein therapeutic for COPD","NIH RePORTER",RP+"9847210"]];
var SHEETS=[];
