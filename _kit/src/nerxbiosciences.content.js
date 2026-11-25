var FONTS=['400 1em "Playfair Display"','500 1em "Playfair Display"','600 1em "Playfair Display"','400 1em "Open Sans"','500 1em "Open Sans"','600 1em "Open Sans"','700 1em "Open Sans"'];
var WEB="https://www.nerxbiosciences.com/";
var MAIL="info@nerxbiosciences.com";
/* science tiles: [big word, small unit, title, one line]. From nerxbiosciences.com (Research & Development, NĒRx-329,
   NĒRx-3392, Additional Targets, the pipeline chart, About Us) */
var PROPS=[
 ["RPA","","Replication Protein A","A DNA damage sensor that binds exposed single-stranded DNA. NĒRx-329 is a competitive inhibitor of its DNA binding."],
 ["Ku","","Ku and DNA-PK","Ku binds the ends of broken DNA to activate DNA-PK. NĒRx-3392 blocks the interaction between Ku and DNA."],
 ["FEN1","","A third program","In discovery for solid tumors, with further undisclosed DDR targets behind it."],
 ["Standalone","","Single-agent activity","NĒRx-329 shows significant anti-cancer activity as a standalone treatment across multiple cancer models in vivo."],
 ["Combined","","Built for combinations","Designed to work with DNA-damaging agents and DDR-targeted therapies; NĒRx-3392 with radiation in lung cancer models."],
 ["Licensed","","Exclusive license","To current and future discoveries from the Turchi lab at Indiana University School of Medicine."]];
/* pipeline, from their chart "Updated-Pipeline": [name, target, indications, bar end as a share of Discovery / Lead
   optimization / IND-enabling, next milestone, one line, link, link label] */
var PROG=[
 ["NĒRx-329","RPA","Lung, ovarian",.86,"IND ready · Q3 2026","Lead candidate: a competitive inhibitor of DNA binding with excellent solubility and stability, supported by the National Cancer Institute.","https://reporter.nih.gov/project-details/11159677","NIH RePORTER"],
 ["NĒRx-3392","Ku / DNA-PK","Esophageal, head and neck, lung",.68,"IND ready · Q1 2027","Inhibits Ku binding to DNA, a novel way to inhibit DNA-PK; efficacy with radiation in NSCLC xenograft models.",WEB+"research-development/ku-dbis/","NĒRx-3392"],
 ["FEN1 program","FEN1","Solid tumors",.36,"DC nomination · Q1 2027","Discovery-stage program toward a development candidate.",WEB+"research-development/additional-targets/","Additional targets"],
 ["Undisclosed","DDR sensor","Solid tumors",.22,"Hit-to-lead · Q1 2027","A rapidly expanding pipeline of novel therapeutics targeting the DDR sensors.",WEB+"research-development/additional-targets/","Additional targets"]];
var STAGES=["Discovery","Lead optimization","IND-enabling"];
var GRANTS=["National Cancer Institute (NIH)","SBIR and STTR awards since 2012","Phase II SBIR for NĒRx-329, 2024–2025"];
var INVEST=["Elevate Ventures","Indiana Biosciences Research Institute","Roche","Indiana University","Angel investors"];
/* people, as published on nerxbiosciences.com/about-us (photos theirs); Carrier as Chair per their Elevate Ventures executive summary */
var TEAM=[
 ["John Turchi, PhD","Co-founder, President and CSO","Professor, Indiana University School of Medicine; more than 90 publications on DNA repair and cancer.","team-turchi.webp"],
 ["Katie Pawelczak, PhD","Chief Operating Officer, Director","Principal investigator on numerous NIH-NCI SBIR awards; over 15 papers on the DNA damage response.","team-pawelczak.webp"],
 ["Trent Carrier, PhD","Chair, Board of Directors","Former CEO of CytoSen Therapeutics and Senior VP at Kiadis Pharmaceuticals.","team-carrier.webp"],
 ["Katherine Moynihan, PhD","Director","Former EIR and Associate VP at IU Ventures; strong IP and contract experience.","team-moynihan.webp"]];
var ADV=["Shadia Jalal, Chair","Lawrence Einhorn","Bert O’Neil","Jeanne Schilder","Karen Reckamp"];
var LEGAL=["Timothy J. Capen, Ice Miller, Indianapolis"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2025","A second year of NIH Phase II SBIR funding, $921,320, for targeting the DNA damage sensor Replication Protein A in first-in-class cancer therapy","NIH RePORTER","https://reporter.nih.gov/project-details/11159677"],
 ["August 2024","A $2 million NIH grant to develop first-in-class cancer therapeutics for lung and ovarian cancer","NĒRx news",WEB+"2-million-dollar-grant-to-develop-first-in-class-cancer-therapeutics/"],
 ["January 2024","NĒRx wins the inaugural Quantum Leap Award from IBRI and Roche Diagnostics and moves into the IBRI labs","IBRI","https://www.indianabiosciences.org/news/ibri-and-roche-diagnostics-announce-winner-of-the-inaugural-quantum-leap-award/"]];
var SHEETS=[];
