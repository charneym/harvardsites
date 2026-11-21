var FONTS=['300 1em "Literata"','italic 300 1em "Literata"','400 1em "Literata"','italic 400 1em "Literata"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','700 1em "Figtree"','italic 700 1em "Figtree"'];
var MAIL="contact@evergladesbiopharma.com";
var RP="https://reporter.nih.gov/project-details/";
var PM="https://pubmed.ncbi.nlm.nih.gov/";
/* Programmes: every line from the NIH RePORTER records of Everglades Biopharma, LLC (Houston, TX), from
   evergladesbiopharma.com and from the company's peer-reviewed papers. [platform, programme, route, status, detail, link, link label] */
var PIPE=[
 ["Anti-Scg3 humanized antibody","Diabetic retinopathy","Intravitreal","SBIR Phase II · NEI · 2025","A humanized antibody against secretogranin III that targets diseased but not healthy vessels and alleviates diabetic retinal leakage in diabetic mice. The Phase II award completes the preclinical package for an IND: pharmacokinetics, formulation and bioanalytical assays, a Pre-IND submission to the FDA, and IND-enabling toxicology.",RP+"11141172","NIH RePORTER"],
 ["Anti-Scg3 + anti-VEGF","Combination therapy for diabetic retinopathy","Intravitreal","SBIR Phase I · NEI","Secretogranin III works through a receptor pathway independent of VEGF, so the two can be blocked together. This award engineered dual inhibitors that neutralise both at once, and combination therapy against the two factors synergistically improved the reduction of diabetic retinal leakage.",RP+"10255782","NIH RePORTER"],
 ["Anti-Scg3 humanized antibody","Wet age-related macular degeneration","Intravitreal","Preclinical","In laser-induced choroidal neovascularisation, secretogranin III bound the diseased vessels of young and aged mice alike. The humanized antibody alleviated the lesions in both age groups, whereas the anti-VEGF drug aflibercept was effective only in young mice.",PM+"40518488/","GeroScience, 2026"],
 ["AAV · anti-Scg3 Fab","Wet AMD, as a one-time gene therapy","Single intravitreal dose","SBIR Phase I · NEI","An AAV vector that makes the eye express an anti-Scg3 antibody fragment itself, aimed at reducing the need for monthly intravitreal injections. AAV delivery of a novel anti-Scg3 antibody suppressed choroidal neovascularisation in mice.",PM+"39333408/","Gene Therapy, 2024"],
 ["Anti-Scg3 humanized antibody","Corneal neovascularisation after chemical injury","Subconjunctival","Preclinical · 2026","With Baylor College of Medicine: in a mouse alkali-burn model, early subconjunctival anti-Scg3 reduced new blood and lymphatic vessels and corneal opacity; aflibercept reduced blood vessels to a similar extent but not lymphatic ones.",PM+"42992962/","IOVS, 2026"]];
/* The 2024 International Journal of Molecular Sciences study that chose the lead (PMID 39273454). */
var EVID=[
 ["Four candidates","Two mouse monoclonal antibodies, ML49.3 and mT4, and the humanized Fab fragments made from them, EBP2 and EBP3"],
 ["Binding","Affinity for secretogranin III improved from 35 nM for ML49.3 to 0.116 nM for EBP3"],
 ["Against aflibercept","In paired assays in diabetic mice, intravitreal EBP3 was 10.3% more effective than aflibercept at reducing retinal leakage"],
 ["The choice","EBP3 was identified as the preferred antibody to develop for anti-Scg3 therapy"]];
/* evergladesbiopharma.com, the J Exp Med 2017 disclosure and NIH RePORTER. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founders",name:"Hong Tian",title:"CEO & Co-Founder",sum:"Contact PI on Everglades' National Eye Institute SBIR awards since 2017, and a co-author of the company's secretogranin III papers."},
 {g:"Founders",name:"Wei Li",title:"Co-Founder",sum:"Ophthalmology, Cullen Eye Institute, Baylor College of Medicine; senior author of the 2017 J Exp Med paper on secretogranin III."},
 {g:"Research",name:"Keith A. Webster",title:"Co-Investigator",sum:"Co-investigator on the 2020 NEI award for anti-Scg3 gene therapy; co-author of the 2024 study that selected EBP3."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","Subconjunctival injection of anti-secretogranin III mitigates corneal damage in an alkali burn injury model","Investigative Ophthalmology & Visual Science",PM+"42992962/"],
 ["February 2026","Age-independent anti-angiogenic therapy for choroidal neovascularization by targeting secretogranin III","GeroScience",PM+"40518488/"],
 ["August 2025","The National Eye Institute continues Everglades' SBIR Phase II award to take its diabetic retinopathy therapy to an IND ($981,661)","NIH RePORTER",RP+"11141172"],
 ["January 2025","Feasibility of ex vivo ligandomics","Biomolecules",PM+"39858539/"],
 ["September 2024","Optimal humanized Scg3-neutralizing antibodies for anti-angiogenic therapy of diabetic retinopathy","International Journal of Molecular Sciences",PM+"39273454/"],
 ["July 2024","NEI awards Everglades an SBIR Phase II grant, “Developing a novel therapy for diabetic retinopathy” ($981,868)","NIH RePORTER",RP+"10922002"],
 ["April 2017","Secretogranin III as a disease‑associated ligand for antiangiogenic therapy of diabetic retinopathy","Journal of Experimental Medicine",PM+"28330905/"]];
var SHEETS=[];
