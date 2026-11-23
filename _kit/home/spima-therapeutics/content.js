var FONTS=['300 1em "Public Sans"','400 1em "Public Sans"','500 1em "Public Sans"','600 1em "Public Sans"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var MAILA="haitham.ayad@spima-therapeutics.com";
var MAIL="mailto:"+MAILA;
var LI="https://www.linkedin.com/company/spima-therapeutics";
/* Programmes, from spima-therapeutics.com (Our Technology: pipeline table), the launch release (PR Newswire, 30 Sep 2024)
   and IBMM (27 Jan 2026). The site shows no stage progress, so none is claimed. [code, modality, title, target, detail, dim, tag] */
var PIPE=[
 ["SPM001","Stapled peptide","Inflammatory disorders","Target · Myddosome complex (MyD88)","SPIMA&#8217;s lead, licensed worldwide and exclusively from SATT AxLR: a selective inhibitor of myddosome assembly, a key protein complex in immune signalling. First indication: acute pancreatitis. Its potential extends to aggressive cancers driven by MyD88 mutations.",0,"Lead programme"],
 ["SPM002","Peptide PROTAC","Undisclosed","Target · Undisclosed","A second modality: a peptide warhead that binds the protein of interest, joined by a linker to an E3-recruiting element, so that the target is marked for degradation.",1,"Undisclosed"]];
/* spima-therapeutics.com (About Us). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Executive team",name:"Zaki Sellam, PhD",title:"Co-founder & Executive Chairman",sum:"Two decades in cancer and immunology drug discovery and development; CEO of Landmark BioVentures AG and Executive Chairman of each LBV Nexus company; founder and former CEO of Avicenna Oncology."},
 {g:"Executive team",name:"Hadrien Lanvin",title:"Chief Business & Investment Officer",sum:"Leads fundraising, business development and non-dilutive financing; founder and CEO of Evora Biosciences, which develops anti-inflammatory peptides; HEC Paris."},
 {g:"Co-founders and advisors",name:"Mohamed Haitham Ayad, RPh, PhD",title:"Co-founder & Board Member",sum:"More than 20 years of international experience in pharma; an expert in early drug development, formulation and CMC, and commercial-scale production."},
 {g:"Co-founders and advisors",name:"Prof. Christian Jorgensen, MD, PhD",title:"Director, IRMB",sum:"Leads the clinical immunology service for biotherapy in rheumatoid arthritis and other autoimmune diseases at Montpellier CHRU; over 250 publications."},
 {g:"Co-founders and advisors",name:"Prof. Jean Martinez, PhD",title:"Professor Emeritus, Université de Montpellier",sum:"Founded the Institut des Biomolécules Max Mousseron (IBMM) in 2007; a pioneer of peptide synthesis with over 900 papers and 50 patents; past President of the European Peptide Society."},
 {g:"Co-founders and advisors",name:"Dr. Florence Apparailly",title:"Research Director, INSERM",sum:"Leads an INSERM team of 30 at IRMB on the pathophysiology and immunotherapy of inflammatory disorders."},
 {g:"Co-founders and advisors",name:"Dr. Muriel Amblard",title:"CNRS Research Director, IBMM",sum:"Designs stapled peptides, cell-penetrating compounds and inhibitors of protein–protein interactions, and develops selective protein degraders with PROTAC technology."}];
var SHEETS=[];
