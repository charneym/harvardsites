var FONTS=['400 1em "Cormorant Garamond"','italic 400 1em "Cormorant Garamond"','500 1em "Cormorant Garamond"','italic 500 1em "Cormorant Garamond"','400 1em "Raleway"','500 1em "Raleway"','600 1em "Raleway"','400 1em "Cinzel"'];
var MAIL="info@intrinsiclifesciences.com";
var ILS="https://www.intrinsiclifesciences.com/";
/* the research kits, from intrinsiclifesciences.com (Intrinsic Products, Product Catalog; read 2026-11-22).
   [kit, analyte, species, SKU, range, sensitivity, url] */
var KITS=[
 ["Intrinsic Hepcidin IDx™ ELISA Kit","Hepcidin","Human","ICE-007","10–500 ng/ml","8 ng/ml",ILS+"hepcidin-kits-human/"],
 ["Hepcidin Murine-Compete™ ELISA Kit","Hepcidin","Mouse","HMC-001","0.5–333 ng/ml","0.18 ng/ml",ILS+"hepcidin-kits-mouse/"],
 ["Primate-Hepcidin Compete™ ELISA Kit","Hepcidin","Primate","PHC-001","1–250 ng/ml","0.5 ng/ml",ILS+"hepcidin-kits-primate/"],
 ["Rat Hepcidin Compete™ ELISA Kit","Hepcidin","Rat","RHC-007","1.37–330 ng/ml","0.86 ng/ml",ILS+"product/intrinsic-rat-hepcidin-tm-elisa-kit/"],
 ["Intrinsic Erythroferrone IE™ ELISA Kit","Erythroferrone","Human","ERF-001","0.16–10 ng/ml","0.02 ng/ml",ILS+"erfe-kits-human/"],
 ["Intrinsic Mouse Erythroferrone™ ELISA Kit","Erythroferrone","Mouse","ERF-200","0.06–4 ng/ml","0.014 ng/ml",ILS+"erfe-kits-mouse/"]];
/* serum hepcidin in disease (Hepcidin – Utility/Function, adapted there from Ganz and Nemeth, Ann Rev Med 2011) */
var DIS=[
 ["Iron deficiency","Low or undetectable"],
 ["Iron-refractory iron deficiency anemia","High normal to high"],
 ["Hereditary hemochromatosis","Undetectable, low, or low for the iron load"],
 ["Infections, rheumatologic disease, IBD, cancer","High, driven by inflammation"],
 ["Chronic kidney disease","High, with decreased clearance"],
 ["β-thalassemia intermedia","Low, with a high erythropoietic drive"]];
/* the RUO assay menu (Pharma & Clinical Research Services) */
var MENU=["Hepcidin-25 · human, primate, mouse","Erythroferrone · human, mouse","Soluble transferrin receptor","Erythropoietin","Ferritin","GDF-8, -11, -15","C-reactive protein","Serum and plasma iron","Non-transferrin-bound iron","Creatinine"];
/* intrinsiclifesciences.com (Eileen Westerman; Management). Text-only masthead (CI/CL). Summaries only restate the site. */
var TEAM=[
 {g:"Leadership",name:"Eileen Westerman",title:"Chief Executive Officer, Manager of the Board",sum:"CEO since 2017 and with Intrinsic since 2011, first in regulatory affairs; before that a researcher in immunology and neurobiology laboratories at the Howard Hughes Medical Institute."},
 {g:"Leadership",name:"Vaughn Ostland, Ph.D.",title:"Chief Operations Officer",sum:"A founding member of Intrinsic and co-inventor of the hepcidin patents; COO since 2009, responsible for a wide range of management and R&D duties."},
 {g:"Leadership",name:"James Westerman, CPA",title:"Chief Financial Officer",sum:"Degrees in economics and finance from Texas A&M University; began his career in the oilfield services industry."},
 {g:"Leadership",name:"Gordana Olbina, Ph.D.",title:"Laboratory Director",sum:"Ph.D. in molecular biology and physiology from the University of Belgrade, with post-doctoral research in molecular and cell biology."},
 {g:"Scientific co-founders",name:"Tomas Ganz, Ph.D., M.D.",title:"Co-founder, Chief Medical Officer",sum:"Professor at the David Geffen School of Medicine, UCLA, who discovered hepcidin in humans. Ph.D. in applied physics from Caltech, M.D. from UCLA."},
 {g:"Scientific co-founders",name:"Elizabeta Nemeth, Ph.D.",title:"Co-founder, Chief Scientific Officer",sum:"Professor at the David Geffen School of Medicine, UCLA, where she joined in 2002. Ph.D. in molecular, cellular and neurosciences, University of Hawaii."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2026","A competitive ELISA to quantify hepcidin in horse serum, with North Carolina State University","J Equine Vet Sci","https://pubmed.ncbi.nlm.nih.gov/41951114/"],
 ["September 2022","NIH SBIR award for a point-of-care urinary hepcidin device to detect iron deficiency in children","NIH RePORTER","https://reporter.nih.gov/project-details/10597914"],
 ["May 2021","The hepcidin regulator erythroferrone is a new member of the erythropoiesis-iron-bone circuitry","eLife","https://pubmed.ncbi.nlm.nih.gov/34002695/"],
 ["September 2020","Clinical immunoassay for human hepcidin predicts iron deficiency in first-time blood donors","J Appl Lab Med","https://pubmed.ncbi.nlm.nih.gov/32674118/"],
 ["June 2020","Underlying causes of anemia revealed with a new test: an NIH small-business success story","NIH SEED","https://seed.nih.gov/sites/default/files/2024-06/Intrinsic-Lifesciences-NIH-success-story-20240628.pdf"]];
var SHEETS=[];
