var FONTS=['300 1em "Source Sans 3"','400 1em "Source Sans 3"','600 1em "Source Sans 3"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="info@btbtherapeutics.com";
var BT="https://www.btbtherapeutics.com/en/";
/* The pipeline, from btbtherapeutics.com (Pipeline page and its pipeline chart; News). The stage named is the column
   the company's own chart bar reaches. [programme, indication, title, note, detail, dim, stage] */
var PIPE=[
 ["BTB-101","ENDOPIN · nonopioid analgesic","Post-surgical pain","Investigator-initiated trial, Kyoto University Hospital","The world's first small molecule discovered through transcriptome analysis that inhibits the α2B adrenergic receptor. In preclinical animal data it gives a strong analgesic effect similar to that of opioids, without side effects or dependence in the therapeutic range. The Phase II part of an investigator-initiated trial began in 2024.",0,"Phase 2"],
 ["BTB-101","ENDOPIN · nonopioid analgesic","Cancer pain and pruritus","Second indication","The same compound, BTB-101, in development for cancer pain and for pruritus (itch).",0,"ADMET"],
 ["BTB-1XX","Backup compound","Pain","Nonopioid analgesic programme","A backup analgesic compound behind BTB-101.",1,"Lead identification"],
 ["BTB-201 / 202","RNA splicing regulators","Cardiac Fabry disease and long QT syndrome","Rare genetic diseases","Oral small molecules that correct abnormal RNA splicing: of the GLA gene in cardiac Fabry disease, today treated with an expensive and only moderately effective enzyme replacement therapy; and of cardiac ion channels, the most common cause of long QT syndrome, a major cause of sudden death in young people.",1,"ADMET"],
 ["BTB-301","RNA splicing regulator","Cancer neoantigen induction","Enhancing cancer immunotherapy","A small molecule that enhances the expression of cancer-specific spliced neoantigens, and in preclinical studies has enhanced the effect of immune checkpoint inhibitors.",1,"ADMET"]];
/* btbtherapeutics.com (About: Management Team, Advisor). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Management and board",name:"Takashi Kiyoizumi, MD, PhD, MBA",title:"CEO and Director of the Board",sum:"More than 40 years in the life sciences. Founder and CEO of MediciNova (NASDAQ: MNOV), and earlier CEO of Tanabe Research Laboratories USA. MD and PhD from Keio, MBA from MIT Sloan."},
 {g:"Management and board",name:"Masatoshi Hagiwara, MD, PhD",title:"Founder, Chief Scientific Officer and Director",sum:"Professor and Chair of Drug Discovery Medicine at Kyoto University Graduate School of Medicine, where he developed transcriptome drug discovery. Former President of the International Society for Chemical Biology."},
 {g:"Management and board",name:"Kenneth W. Locke, PhD",title:"Chief Development Officer",sum:"Pharmacologist with more than 40 years of drug development, including pain, at Interneuron, Tanabe Research Laboratories USA, MediciNova, Neothetics and Halozyme."},
 {g:"Management and board",name:"David R. Snyder, Esq.",title:"Director of the Board",sum:"Vice Chairman and Lead Independent Director of PriceSmart; more than 30 years in corporate finance and M&A at Pillsbury Winthrop Shaw Pittman, retired as partner in 2025."},
 {g:"Management and board",name:"Nobuhiro Yagi, PhD",title:"Director of the Board",sum:"Executive Officer at Kyoto University Innovation Capital (Kyoto iCAP); 18 years in biopharmaceutical R&D and business development at Kyowa Hakko Kirin."},
 {g:"Advisors",name:"J. Silvio Gutkind, PhD",title:"Pharmacology advisor: ENDOPIN, RECTAS and immuno-oncology",sum:"Distinguished Professor and Chair of Pharmacology, UC San Diego, and Associate Director for Basic Science at Moores Cancer Center. Member of the National Academy of Medicine."},
 {g:"Advisors",name:"Mariano A. Garcia-Blanco, MD, PhD",title:"RNA medicine advisor: RECTAS",sum:"Chair of Microbiology, Immunology and Cancer Biology at the University of Virginia; an expert in RNA biology, elected to the National Academy of Sciences in 2025."},
 {g:"Advisors",name:"Thomas Forest Farb-Horch",title:"Business advisor",sum:"CEO and co-founder of Thrive Bioscience; founder of 17 companies, among them Cytyc and Exact Sciences."},
 {g:"Advisors",name:"Akihisa Mori, PhD",title:"Development advisor",sum:"Former Fellow of Kyowa Kirin, where he led istradefylline, a first-in-class treatment for Parkinson's disease, from exploratory research to approval in Japan and the US."}];
/* News: only items with a working link (btbtherapeutics.com News, Business Wire, PNAS). [date, headline, source, url] */
var NEWS=[
 ["22 August 2025","Discovery and development of an oral analgesic targeting the α2B adrenoceptor: BTB-101 in PNAS","PNAS","https://www.pnas.org/doi/10.1073/pnas.2500006122"],
 ["15 June 2025","BTB Therapeutics pitches at the Innovator's Pitch Challenge, RESI Boston 2025","BTB Therapeutics",BT+"pitching-at-the-resi-boston-2025/"],
 ["16 May 2025","Advisor Mariano A. Garcia-Blanco elected to the National Academy of Sciences","BTB Therapeutics",BT+"mariano-a-garcia-blanco-elected-to-the-national-academy-of-sciences/"],
 ["24 February 2025","Industry veteran and VC investor strengthen the BTB Therapeutics board","Business Wire","https://www.businesswire.com/news/home/20250224868759/en/Industry-Veteran-and-VC-Investor-Strengthen-the-BTB-Therapeutics-Board"],
 ["30 April 2024","Kyoto University Hospital starts the Phase II part of an investigator-initiated trial of the new analgesic","BTB Therapeutics",BT+"2024-04-30/"]];
var SHEETS=[];
