var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','italic 600 1em "Newsreader"','400 1em "Jost"','500 1em "Jost"','600 1em "Jost"'];
var WEB="https://www.manzanitapharmaceuticals.com/";
var MAIL="contact@manzanitapharmaceuticals.com";
var RP25="https://reporter.nih.gov/project-details/11187227";
var RP24="https://reporter.nih.gov/project-details/11006190";
var RP17="https://reporter.nih.gov/project-details/9345832";
var PUB24="https://www.manzanitapharmaceuticals.com/_files/ugd/285cbd_96736aa8d96b434cbefd5f1791e1d137.pdf";
var PUB20="https://www.manzanitapharmaceuticals.com/_files/ugd/285cbd_c23a5030c9d6415a9af72f581ce948fe.pdf";
var PUB19="https://www.manzanitapharmaceuticals.com/_files/ugd/285cbd_93015f3f4c484cfab5539d78233253de.pdf";
var PUB18="https://www.manzanitapharmaceuticals.com/_files/ugd/285cbd_55aa140332444df090efb22c2f2574c7.pdf";
/* programmes: from manzanitapharmaceuticals.com (Home, Product Pipeline, News & Publications) and NIH RePORTER 5R44CA295214-02.
   [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["NerveLight (800-rhNGF)","Intra-operative imaging of the cavernous nerves in radical prostatectomy","IND-enabling · NCI SBIR Phase II","An 800 nm near-infrared dye attached directly to recombinant human NGF, applied once to the wound bed at the start of surgery. GLP toxicology and safety pharmacology in rat and dog are under way; on completion of an IND, three single ascending doses are planned in a Phase 1 study in men undergoing radical prostatectomy.",RP25,"NIH RePORTER"],
 ["Targeted glucocorticoids","Localized, chronic pain: a non-opioid approach","Preclinical · Department of Defense","A neurotrophin-targeted glucocorticoid conjugate: in vivo studies in the Dalziel lab showed the analgesic activity of the injected conjugate. Preclinical feasibility was presented with the Walters lab, University of Texas Health Science Center Houston, at MHSRS 2018.",PUB18,"MHSRS 2018 poster"],
 ["BDNF-targeted anti-inflammatories","Blast-induced traumatic optic neuropathy","Research","Brain-derived neurotrophic factor as a platform to deliver small molecule anti-inflammatory drugs to the optic nerve, presented with Absorption Systems, San Diego, at MHSRS 2019.",PUB19,"MHSRS 2019 poster"]];
/* people: as named on manzanitapharmaceuticals.com (About Us); no portraits are published */
var TEAM=[
 ["Constance McKee, MBA","Co-founder, President and CEO","Founded Manzanita in 2007 and is a named co-inventor on its patents. She graduated with honors from Stanford, earned an MBA at Yale and was Chief Executive of Cambridge Quantum Fund I, a seed fund at Cambridge University. She has raised $3.3M in nondilutive funding for Manzanita and about $750K from angel investors."],
 ["Stephen B. Kahl, PhD","Chief Scientific Officer, Vice President and Principal Scientist","Principal investigator on Manzanita’s NCI SBIR grants and its DoD grant, and an inventor on its patents. Retired Vice Chair of the Department of Pharmaceutical Chemistry at UCSF, where he took a compound from first synthesis into Phase 1 trials for photodynamic therapy of malignant glioma."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 20, 2025","NCI SBIR Phase II, year two ($1,090,970): toxicology (IND-enabling) studies for a novel nerve imaging agent for prostate cancer","NIH RePORTER",RP25],
 ["September 6, 2024","NCI awards the first year ($905,526) of the IND-enabling toxicology programme for NerveLight","NIH RePORTER",RP24],
 ["2024","Kahl, Burton, Hill and McKee: an historical review of exogenous Nerve Growth Factor: selective binding, endocytosis and axonal transport","Publication (PDF)",PUB24],
 ["February 2, 2020","Novel intra-operative peripheral nerve agent for fluorescence guided imaging, SPIE BiOS poster with the Mohs lab, University of Nebraska Medical Center","Poster (PDF)",PUB20]];
var SHEETS=[];
