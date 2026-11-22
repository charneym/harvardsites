var FONTS=['300 1em "Figtree"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','italic 300 1em "Crimson Pro"','italic 400 1em "Crimson Pro"'];
var MAIL="rboyce@plakoustherapeutics.com";
var RP="https://reporter.nih.gov/project-details/";
var UP="https://www.plakoustherapeutics.com/wp-content/uploads/";
/* the programmes, from plakoustherapeutics.com (Behind Our Science, Value of HPE, Future Clinical Targets) and the 2025 NIH
   renewal release: [programme, sub, indication, stage label, progress 0..4 (done), progress incl. in-progress, detail, dim] */
var PIPE=[
 ["Protego-PD™","Human placental extract","Prevention of necrotizing enterocolitis (NEC) in premature infants","IND-enabling studies",2,2.7,"Orphan drug and rare pediatric disease designations. Pre-IND interactions with the FDA; NIH-funded GMP manufacturing scale-up and large-animal safety studies toward an IND and a Phase 1b/2a trial in at-risk preemies.",0],
 ["HPE","Initial clinical target","Pediatric malabsorption in extreme prematurity","Preclinical",1.6,1.6,"In preclinical models of extreme prematurity, HPE increased weight recovery and overall weight gain, supporting faster gut development and the potential for fewer days to full feeds and in the NICU.",0],
 ["HPE","Future clinical targets","Neurodevelopmental injury, bronchopulmonary dysplasia and ARDS","Future target",.6,.6,"Inflammation-driven complications of prematurity and acute lung injury, the next areas where Plakous aims to reduce inflammation with birth tissue biotherapeutics.",1],
 ["HPE","Future clinical targets","Neurodegeneration and osteoarthritis","Preclinical research",1,1,"HPE has induced oligodendrocyte proliferation in vitro, and showed highly significant protection of joint cartilage in preclinical models of joint destabilization.",1]];
var PHS=["Discovery","Preclinical","IND-enabling","Clinical"];
/* the value of HPE, from plakoustherapeutics.com/value-of-hpe */
var EVID=[
 ["Preclinical efficacy","Pre-treatment reduced NEC disease severity and the number of affected regions of the gut in a preclinical model of NEC"],
 ["Mimicking nature","High-yield, consistent concentrations of the proliferative, maturation and anti-inflammatory factors that drive gut development"],
 ["Safety","A compilation of proteins that exist naturally during normal development in utero, with no safety or tolerability incidents in preclinical evaluation"],
 ["Lower hospital costs","Less time in the NICU, fewer surgeries and lower long-term care costs for affected newborns, in a cost analysis of NICU care"]];
/* plakoustherapeutics.com (Leadership; Board of Directors). Text-only masthead (CI/CL). Summaries only restate the site. */
var TEAM=[
 {g:"Leadership",name:"Robert Boyce",title:"Chief Executive Officer",sum:"Healthcare and life sciences throughout his career; formerly at Imago Systems and Johnson & Johnson, and a naval flight officer."},
 {g:"Leadership",name:"Scott Washburn, MD",title:"Founder, President and Chief Medical Officer",sum:"Obstetrician-gynecologist with over 36 years in birth tissue physiology, tissue donation and neonatal care; founded a birth-tissue bank."},
 {g:"Leadership",name:"Michael Berger, PhD",title:"Vice President of Engineering",sum:"Biomedical engineer (VCU); heads the R&D lab in Winston-Salem and is principal investigator on the NIH SBIR."},
 {g:"Leadership",name:"Jenna Hojnacki, BS",title:"Research Associate",sum:"Tissue processing and process optimization since 2020, through the SBIR Phase II Fast Track."},
 {g:"Board of directors",name:"Allison London Brown, MS",title:"Director",sum:""},
 {g:"Board of directors",name:"Peter C. Johnson, MD",title:"Director",sum:""},
 {g:"Board of directors",name:"James Kalinovich",title:"Director",sum:"Thirty years in corporate finance, M&A and several successful IPOs."},
 {g:"Board of directors",name:"Robert Boyce",title:"Chief Executive Officer",sum:""},
 {g:"Board of directors",name:"Scott Washburn, MD",title:"Co-founder, Director",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2026","NIH continues the SBIR Phase IIB award for IND-enabling studies and manufacturing scale-up of HPE","NIH RePORTER",RP+"11352492"],
 ["2025","Journal article on necrotizing enterocolitis published, volume 20, issue 1","CMGH journal","https://www.cmghjournal.org/article/S2352-345X(25)00160-2/fulltext"],
 ["July 2025","NIH renews year 2 of the $2.9 million SBIR Phase IIB grant for IND-enabling studies","Press release",UP+"2025/10/2025-10-24-Phase-IIB-Renewal-final.pdf"],
 ["May 2023","James Kalinovich joins the Plakous board of directors","Press release",UP+"2023/11/2023-05-15-James-Kalinovich-joins-Plakous-Therapeutics-BOD1.pdf"],
 ["July 2022","More than $300,000 from the North Carolina Biotechnology Center, and the BIONEER Venture Challenge","Press release",UP+"2023/02/Plakous-Therapeutics-NCBC-Funding-Release.pdf"],
 ["August 2020","Know-how license agreement with Mayo Clinic","Press release",UP+"2023/02/Plakous-Therapeutics-Mayo-Clinic-Press-Release-2020-08-25.pdf"],
 ["June 2020","FDA grants orphan drug and rare pediatric disease designations for Protego-PD™","Press release",UP+"2023/11/Press-Release-Plakous-Therapeutics-Rare-Pediatric-Disease-and-Orphan-Drug-Designations-20200618.pdf"]];
var SHEETS=[];
