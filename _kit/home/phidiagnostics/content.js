var FONTS=['300 1em "Barlow Semi Condensed"','italic 300 1em "Barlow Semi Condensed"','400 1em "Barlow Semi Condensed"','italic 400 1em "Barlow Semi Condensed"','500 1em "Barlow Semi Condensed"','400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"'];
var MAIL="connect@phi-dx.com";
var NW="https://phi-dx.com/news/";
var CORDIS="https://cordis.europa.eu/project/id/101213445";
var DTU="https://dtusciencepark.dk/case/et-gennembrud-i-kampen-mod-kraeft-startup-vinder-jyske-banks-startup-award-for-livsreddende-teknologi/";
/* programmes: from phi-dx.com (home, about), the CORDIS record of EIC project 101213445 and DTU Science Park (Apr 2025).
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["Plasma · circular DNA","Pancreatic cancer screening","Lead programme","Validation","A blood test for early detection of pancreatic ductal adenocarcinoma (PDAC) from maps of circular DNA in plasma, read by a machine-learning classifier. The EIC Transition project matures and validates the technology to TRL5 on samples from around 1,000 individuals.",CORDIS,"CORDIS"],
 ["Tumour · circular DNA","Pancreatic cancer prognosis","Prognostic solution","Validation","The same circular DNA technology applied to tumour tissue, to inform prognosis after a PDAC diagnosis, validated alongside the screening test in the EIC Transition project.",CORDIS,"CORDIS"],
 ["Plasma · circular DNA","Other hard-to-detect cancers","Future indications","Next","The technology also has the potential to screen for lung, liver, uterine and bladder cancer, building toward a test that can address suspicion of a range of cancers.",DTU,"DTU Science Park"]];
/* history, from phi-dx.com/about */
var EVID=[
 ["2017","The Regenberg Lab at the University of Copenhagen discovers that human DNA exists as circular DNA in our cells and our blood"],
 ["2019 – 2024","The Innovation Fund project CARE-DNA, with Herlev and Gentofte Hospital, and the EU project CIRCULAR VISION develop the detection technology"],
 ["2024 – 2025","CARE-DNA IP is formed, wins the Danish Tech Challenge and, with the University of Copenhagen, an 18 million DKK EIC Transition grant"],
 ["2026","CARE-DNA IP becomes Phi Diagnostics and completes the Bio Innovation Institute incubator programme"]];
/* phi-dx.com/team and /about, DTU Science Park (Apr 2025). Text-only masthead. */
var TEAM=[
 {g:"Founders",name:"Kenneth Graabek Johansen",title:"Co-founder & CEO",sum:"Co-founder of CARE-DNA IP, formed in December 2024 to acquire CARE-DNA; leads Phi Diagnostics as chief executive."},
 {g:"Founders",name:"Birgitte Regenberg",title:"Co-founder & CSO",sum:"Professor at the University of Copenhagen, where her lab discovered circular DNA in human cells and blood; co-founded CARE-DNA ApS in 2023."},
 {g:"Founders",name:"Roald Forsberg",title:"Co-founder & CTO",sum:"Co-founder of CARE-DNA IP in December 2024; leads the technology as chief technology officer."},
 {g:"Founders",name:"Sefa Alizadeh",title:"Co-founder & COO",sum:"Co-founded CARE-DNA ApS with Birgitte Regenberg in 2023, the first company affiliated with the University of Copenhagen."},
 {g:"Team",name:"Pilar Aarøe Andersen",title:"Senior human biologist",sum:""},
 {g:"Team",name:"Egija Zole",title:"Senior molecular biologist",sum:""},
 {g:"Team",name:"Martin Simonsen",title:"Senior programmer",sum:""},
 {g:"Team",name:"Daniel Arthur Blears",title:"Business developer",sum:""},
 {g:"Team",name:"Paul Christian Bartling",title:"IT administration",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","Phi Diagnostics is among the eight spinouts supported by the University of Copenhagen so far in 2026","University of Copenhagen","https://innovation.ku.dk/nyheder/2026/otte-nye-ku-spinouts-bringer-excellent-forskning-taettere-paa-nye-loesninger-til-gavn-for-samfundet/"],
 ["November 2025","CSO Birgitte Regenberg presents at the annual research symposium of the Centre of Diagnostic Investigation at Rigshospitalet","Phi Diagnostics",NW+"our-cso-birgitte-regenberg-pitches-at-the-annual-research-symposium-at-the-centre-of-diagnostic-investigation"],
 ["August 2025","CARE-DNA IP joins the BII Venture Lab with a 4,000,000 DKK convertible loan","Phi Diagnostics",NW+"care-dna-ip-joins-bii-venture-lab"],
 ["April 2025","CARE-DNA IP receives an 18,000,000 DKK EIC Transition grant with the University of Copenhagen","Phi Diagnostics",NW+"care-dna-ip-recieves-eic-transition-grant"],
 ["April 2025","CARE-DNA wins the Danish Tech Challenge and Jyske Bank’s Startup Award of 500,000 DKK","DTU Science Park",DTU]];
var SHEETS=[];
