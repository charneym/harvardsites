var FONTS=['400 1em "Barlow Condensed"','500 1em "Barlow Condensed"','600 1em "Barlow Condensed"','400 1em "Barlow"','500 1em "Barlow"','400 1em "Source Serif 4"'];
var MAIL="mailto:info@gilatherapeutics.com";
var CT="https://clinicaltrials.gov/study/";
/* Programs, from gilatherapeutics.com (Home, Technology, About) and ClinicalTrials.gov (NCT03490786, NCT07728383).
   Stage words only as the company or the public record state them. [program, area, title, stage, detail, dim, tag, link] */
var PIPE=[
 ["Topical Lingual PYY","Obesity","Micro-dose PYY on the tongue","Phase I complete","Gila&#8217;s first program. A micro-dose of the natural satiety hormone PYY in an oral dissolving tablet that melts on the tongue in under three seconds. Phase I showed strong efficacy with zero treatment-related adverse events.",0,"Clinical","NCT03490786"],
 ["T-L Semaglutide","Obesity","Topical-lingual GLP-1 receptor agonist","Proof-of-concept study recruiting","A randomized, double-blind, placebo-controlled study of topical-lingual semaglutide in adults with obesity, under way in Minneapolis since June 2026, as a proof of concept for topical lingual delivery of metabolic hormones.",0,"Clinical","NCT07728383"],
 ["Further hormones","Cardiometabolic","GLP-1, amylin, leptin and others","In development","Multiple topical lingual hormone targets are under development for obesity, type 2 diabetes and associated metabolic disorders.",1,"Next",""]];
/* Topical Lingual PYY's profile, as the company describes it. */
var EVID=[
 ["Under three seconds","The Catalent Zydis tablet dissolves on the tongue, evenly dispersing the peptide in saliva"],
 ["No systemic exposure","The hormone does not enter the bloodstream, so other regions of the body and brain are not exposed"],
 ["Zero emesis","No side effects in extensive toxicology and preclinical studies, most notably in dogs and Asian musk shrews"],
 ["Phase I","A successful Phase I with zero treatment-related adverse events or serious adverse events"]];
/* gilatherapeutics.com (About). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Richard G. Horan",title:"Acting CEO & Director",sum:"Managing Partner at Biograph Venture. Formerly CEO of Medical Media Systems, SEQ/Praelux and Immunicon; A.B. and MBA, Dartmouth."},
 {g:"Leadership",name:"Thomas Vasicek, PhD",title:"Chief Scientific Officer & Director",sum:"Expert in targeted drug delivery and metabolic hormones, from Medtronic, Millennium, Corning, Lynx/Solexa and Roche. PhD in Genetics, Harvard."},
 {g:"Leadership",name:"Donald R. Johns, MD",title:"Chief Medical Officer",sum:"Clinical neuroscientist and drug developer: Novartis, Biogen; 27 proof-of-concept studies and 4 successful NDAs. Formerly at Johns Hopkins and Harvard Medical Schools."},
 {g:"Leadership",name:"Jon Freeman, MBA, CFM",title:"Chief Financial Officer",sum:"25 years of finance, operations and management experience, from public multinationals to emerging private companies."},
 {g:"Board of directors",name:"Tim Barberich",title:"Director",sum:"Founder and CEO of Sepracor, sold to Dainippon for $2.6B; director roles at Verastem, Frequency Therapeutics and TScan Therapeutics."},
 {g:"Board of directors",name:"Praveen Tyle, PhD",title:"Director",sum:"39+ years at Pharmacia, Bausch + Lomb, Novartis OTC, Osmotica, Lexicon and Invectys; founder of Potens Pharmaceuticals."},
 {g:"Scientific advisors",name:"David E. Cummings, MD",title:"Endocrinology",sum:"Professor of Medicine, University of Washington; international authority on treating obesity, with 30+ years of NIH-funded research."},
 {g:"Scientific advisors",name:"Judith Korner, MD, PhD",title:"Endocrinology",sum:"Professor of Medicine, Columbia University Irving Medical Center; founder of its Metabolic and Weight Control Center."},
 {g:"Scientific advisors",name:"Carel le Roux, MBChB, PhD",title:"Endocrinology",sum:"University College Dublin School of Medicine; head of a metabolic medicine and obesity complications clinic, with 340+ publications."},
 {g:"Scientific advisors",name:"Donna Ryan, MD",title:"Endocrinology",sum:"Professor Emerita, Pennington Biomedical Research Center; President of the World Obesity Federation."},
 {g:"Scientific advisors",name:"Allon Friedman, MD",title:"Nephrology",sum:"Professor of Medicine, Indiana University School of Medicine; authority on obesity-related kidney disease."},
 {g:"Scientific advisors",name:"Michael Cowley",title:"Neuroscience",sum:"Head of Physiology, Monash University; founder of Orexigen Therapeutics and the Monash Obesity & Diabetes Institute."},
 {g:"Scientific advisors",name:"Matthew Hayes, PhD",title:"Neuroscience",sum:"Albert J. Stunkard Professor in Psychiatry, University of Pennsylvania; studies the neural pathways that control food intake."},
 {g:"Scientific advisors",name:"Harvey Grill, PhD",title:"Neuroscience",sum:"Director of the Obesity Unit, Institute of Diabetes, Obesity, and Metabolism, University of Pennsylvania; 40+ years of NIH funding."},
 {g:"Scientific advisors",name:"Alan C. Spector, PhD",title:"Neuroscience",sum:"Distinguished Research Professor, Florida State University; expert on the neural basis of taste and ingestive behavior."}];
var NEWS=[];
var SHEETS=[];
