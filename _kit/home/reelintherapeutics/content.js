var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','700 1em "Montserrat"'];
var RP="https://reporter.nih.gov/project-details/";
var LAB="https://labs.utsouthwestern.edu/calvier-lab/partner";
/* programmes: indications from reelintherapeutics.com (home page) and the company's NIH SBIR/STTR awards (NIH RePORTER).
   [area, indication, approach, funding, detail, link, link label] */
var PIPE=[
 ["Neuroinflammation","Alzheimer’s disease","Anti-Reelin","NIH NIA SBIR","Chronic inflammation is increasingly recognised as a key contributor to Alzheimer’s progression. NIA award R43AG084450 tests an anti-Reelin antibody against the chronic inflammatory milieu in a Down syndrome mouse model, and identifies high-affinity Reelin antibodies for development.",RP+"10760161","NIH RePORTER"],
 ["Neuroinflammation","Alzheimer’s disease","γ-secretase modulators","NIH NIA STTR","Next-generation γ-secretase modulators that lower Aβ42, the main component of amyloid plaques, while sparing Notch. NIA award R41AG094356 runs medicinal chemistry and in vitro and in vivo optimisation toward a preclinical candidate; second-year funding August 2026.",RP+"11252380","NIH RePORTER"],
 ["Autoimmune · CNS","Multiple sclerosis","Anti-Reelin","Science Translational Medicine","In a mouse model of MS, antibodies that inactivate Reelin prevented paralysis and helped animals that already had symptoms recover. In patients, blood Reelin was higher during relapse than in remission.","https://www.science.org/doi/10.1126/scitranslmed.aay7675","Sci Transl Med 2020"],
 ["Autoimmune","Rheumatoid arthritis","Anti-Reelin","NIH NIAMS SBIR","Persistent synovial inflammation and immune-cell infiltration drive joint damage in RA. NIAMS award R43AR081762 identifies high-affinity Reelin antibodies and tests them in an RA mouse model; see also the 2025 PNAS study.",RP+"10545705","NIH RePORTER"],
 ["Autoimmune · Gut","Inflammatory bowel disease","Anti-Reelin","NIH NIDDK STTR","Crohn’s disease and ulcerative colitis flare and remit, and flares can cause irreversible damage. NIDDK award R41DK126520 tests Reelin deletion and an anti-Reelin antibody in colitis, as proof of principle for targeting Reelin/ApoER2.",RP+"10079713","NIH RePORTER"]];
/* the evidence (peer-reviewed, founders and Reelin Therapeutics co-authors) */
var EVID=[
 ["Multiple sclerosis","Reelin depletion protects against autoimmune encephalomyelitis by decreasing vascular adhesion of leukocytes (Science Translational Medicine, 2020)"],
 ["Atherosclerosis","Reelin depletion protects against atherosclerosis by decreasing vascular adhesion of leukocytes (Arteriosclerosis, Thrombosis, and Vascular Biology, 2021)"],
 ["Safety","Safety of anti-Reelin therapeutic approaches for chronic inflammatory diseases (Cells, 2024)"],
 ["Inflammatory arthritis","Genetic or therapeutic disruption of the Reelin/Apoer2 signaling pathway improves inflammatory arthritis outcomes (PNAS, 2025)"]];
/* reelintherapeutics.com, "Meet the Team". Text-only masthead; summaries condensed from their bios. */
var TEAM=[
 {g:"Founders",name:"Maria Kounnas, PhD",title:"Chief Executive Officer, Founder",sum:"Three decades of small-biotech experience leading multidisciplinary teams in drug discovery, preclinical and clinical development for Alzheimer’s disease, nausea and neuroinflammation."},
 {g:"Founders",name:"Joachim Herz, MD",title:"Founder · Professor, UT Southwestern",sum:"Discovered the Reelin receptors and the role of Reelin as an inflammatory modulator in the circulation, establishing it as a target for multiple inflammatory diseases."},
 {g:"Founders",name:"Laurent Calvier, PhD",title:"Founder · Assistant Professor, UT Southwestern",sum:"Vascular biologist studying how Reelin regulates cellular and systemic inflammation across cardiovascular, autoimmune and neuroinflammatory disease."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","NIA funds the second year of Reelin Therapeutics’ STTR project on next-generation γ-secretase modulators for Alzheimer’s disease","NIH RePORTER",RP+"11418428"],
 ["September 2025","Reelin Therapeutics receives an NIH STTR award to identify next-generation γ-secretase modulators for Alzheimer’s disease","NIH RePORTER",RP+"11252380"],
 ["March 2025","Genetic or therapeutic disruption of the Reelin/Apoer2 pathway improves inflammatory arthritis outcomes","PNAS","https://doi.org/10.1073/pnas.2418642122"],
 ["March 2024","Safety of anti-Reelin therapeutic approaches for chronic inflammatory diseases","Cells","https://doi.org/10.3390/cells13070583"],
 ["July 2023","NIA SBIR award to study Reelin in Alzheimer’s disease and Down syndrome","NIH RePORTER",RP+"10760161"],
 ["August 2020","“Reelin” in a new treatment for multiple sclerosis","UT Southwestern","https://www.utsouthwestern.edu/newsroom/articles/year-2020/new-treatment-ms.html"]];
var SHEETS=[];
