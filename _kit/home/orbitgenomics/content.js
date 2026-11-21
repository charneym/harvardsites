var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Jost"','500 1em "Jost"'];
var WEB="https://orbitgenomics.com/";
var MAIL="info@orbitgenomics.com";
var TEL="+1 720.515.0395";
var RP="https://reporter.nih.gov/project-details/11194291";
var PP="https://orbitgenomics.com/product-pipeline/";
var POST="https://orbitgenomics.com/2026/05/13/orbit-genomics-presents-ai-enabled-blood-test-for-lung-cancer-diagnosis-and-subtyping/";
/* programmes: from orbitgenomics.com Product Pipeline (2026), the May 2026 Labroots poster news item and NIH RePORTER
   5R44CA291262-02. [programme, area, stage label, detail, link, link label] */
var PROG=[
 ["OrbiSeq-L™","Diagnosis · indeterminate pulmonary nodules","Lead product · advancing toward commercialization","A blood test for the roughly 2 million Americans a year whose low-dose CT finds a nodule it cannot diagnose. OrbiSeq-L is the first blood test to achieve diagnostic-level accuracy in patients with IPNs, as an alternative to biopsy or a year of imaging surveillance.",PP,"Product pipeline"],
 ["OrbiSeq-L™ subtyping","Diagnosis · lung cancer subtypes","NCI Direct-to-Phase II SBIR","The next generation of OrbiSeq-L adds subtyping. In preliminary experiments the models classified adenocarcinoma, carcinoma/squamous and small cell lung cancer with 87% PPV and 92% NPV; training and validation continue with clinical collaborators.",RP,"NIH RePORTER"],
 ["LDCT screening selection","Diagnosis · who should be screened","Future indication","Some 18 to 20 million Americans are eligible for annual low-dose CT, yet screening rates stay below 10%. Built on OrbiSeq-L, a future test will identify the individuals who should receive it.",PP,"Product pipeline"],
 ["OrbiSeq-C","Prevention · multi-cancer risk","In development","A single blood test for increased risk of multiple cancers. Pilot studies covered medulloblastoma, breast and lung cancers, with markers identified for glioblastoma, melanoma, ovarian, pancreatic and prostate cancers.",PP,"Product pipeline"],
 ["Companion diagnostics","Treatment · CDx and therapeutic targets","Proof of concept","OrbiSeq can identify the patients most likely to benefit from a specific treatment; proof of concept in atrial fibrillation was published in a peer-reviewed journal. It can also be used to identify therapeutic targets.",PP,"Product pipeline"]];
/* people: orbitgenomics.com Leadership Team (portraits are theirs) and Advisors. [name, role, portrait] */
var TEAM=[
 ["Dede Willis","President & CEO, Director, Founder","t_dede_willis.webp"],
 ["Harold “Skip” Garner","Chief Scientific Officer, Director, Founder","t_skip.webp"],
 ["Randy Berholtz","General Counsel, VP Business Development, Founder","t_randy_berholtz.webp"],
 ["Mikael Ørum","Chair, Founder","t_mikael_oerum.webp"],
 ["Cathy Luo","Chief Financial Officer","t_cathy_luo.webp"],
 ["Julie Silber","Director","t_julie_silber.webp"],
 ["Patricia Tate","Director of Human Resources","t_patty_tate.webp"],
 ["Angie Purvis","Laboratory Director","t_angie_purvis.webp"],
 ["Sarah Urfer","Director of Laboratory Operations","t_sarah_urfer.webp"],
 ["Kyle Caltrider","Director of IT & Bioinformatics","t_kyle_caltrider.webp"]];
var ADV=[["George Church","Harvard Medical School & MIT"],["Francois Ferré","ALMA LifeSciences"],["John Minna","UT Southwestern Medical Center"],["Vern Norviel","Wilson Sonsini"]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 25, 2026","CEO Dede Willis on a BIO Convention patents panel","Orbit Genomics","https://orbitgenomics.com/2026/06/25/orbit-genomics-at-bio-international-convention/"],
 ["May 13, 2026","New data: an AI-enabled blood test for lung cancer","Orbit Genomics",POST],
 ["August 25, 2025","Grand prize, Startup Prize Focus on Health 2025","Orbit Genomics","https://orbitgenomics.com/2025/08/25/orbit-genomics-wins-startup-prize-focus-on-health-non-fda-track/"],
 ["2025","NCI SBIR Phase II award for lung cancer subtyping","NIH RePORTER",RP]];
var SHEETS=[];
