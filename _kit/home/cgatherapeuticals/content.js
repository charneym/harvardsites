var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Fira Sans"','500 1em "Fira Sans"','600 1em "Fira Sans"','700 1em "Fira Sans"'];
var MAIL="smahata@cgatherapeuticals.com";
var TEL="(858) 204-2924";
var RP="https://reporter.nih.gov/project-details/";
var PM="https://pubmed.ncbi.nlm.nih.gov/";
/* the development pipeline: every line from cgatherapeuticals.com (/pipeline, /therapeutic-application, /federal-research-support,
   /publications) and NIH RePORTER. [area, programme, stage, support, detail, link, link label] */
var PIPE=[
 ["Gastrointestinal","Gastroparesis and GI dysmotility","SBIR Phase I","NIH/NIDDK, 2026–2027","CST and next-generation CST-based peptidomimetics, advancing through preclinical efficacy, pharmacology, pharmacokinetic and therapeutic-development studies. Award 1R43DK148298-01, “Peptide and Peptidomimetic Therapy for Gastroparesis”.",RP+"11410020","NIH RePORTER"],
 ["Neurodegeneration","Alzheimer’s disease and related tauopathies","Preclinical","NIH/NIA-funded research","In experimental models CST reduces abnormal tau phosphorylation and aggregation, suppresses neuroinflammation, acts against amyloid pathology and improves cognitive and motor function.",PM+"42768750/","Molecular Therapy"],
 ["Metabolic disease","Diabetes, obesity and insulin resistance","Preclinical","US Patent 9,572,862","In models of obesity and diabetes CST improves glucose tolerance and insulin sensitivity, promotes lipid utilisation, reduces hepatic lipid accumulation and suppresses chronic inflammation.",PM+"29432123/","Diabetes"],
 ["Cardiovascular","Hypertension and cardiovascular dysfunction","Preclinical","","CST lowers elevated blood pressure, modulates adrenergic activity and protects cardiovascular function; in 2026 it was shown to restore cardiac metabolic flexibility and enhance mitochondrial function.",PM+"42177347/","Communications Biology"],
 ["Next generation","RI-CST, D-amino-acid CST and peptidomimetics","Lead optimisation","","Retro-inverso CST, a reversed sequence of D-amino acids, resists proteolytic degradation and has a substantially prolonged pharmacokinetic profile while retaining biological activity.","https://cgatherapeuticals.com/therapeutic-application","CgA Therapeuticals"]];
/* the licensed and owned patent families (cgatherapeuticals.com/patent-and-ip) */
var IP=[
 ["Cardiometabolic","US Patent 9,572,862 B2, issued February 2017: catestatin to promote lipolysis and fatty-acid oxidation in liver and adipose tissue"],
 ["Neurodegeneration","PCT/US2024/053684, filed October 2024: compositions and methods to treat neurodegeneration and cognitive decline"],
 ["Oncology","US provisional 63/751,092, filed January 2025: an endogenous peptide, its peptidomimetic and small-molecule mimetic as anticancer agents"],
 ["Computation","PCT/US2026/032192, filed June 2026: Boolean implication network systems and methods for detecting latent states"]];
/* cgatherapeuticals.com/leadership; portraits are theirs. Summaries condensed from their bios. */
var TEAM=[
 {name:"Sushil K. Mahata, Ph.D.",title:"Founder & President",img:"p-sushil.webp",sum:"Co-discoverer of catestatin, which he named in 1997. Professor of Medicine at UC San Diego and Research Physiologist at the VA San Diego Healthcare System."},
 {name:"Manjula Mahata, Ph.D.",title:"Chief Scientific Officer",img:"p-manjula.webp",sum:"Co-discoverer of catestatin; directs the CST pipeline and is contact principal investigator of the NIH/NIDDK SBIR award. More than 100 peer-reviewed articles."},
 {name:"Gautam K. Bandyopadhyay, Ph.D.",title:"Scientific Advisor",img:"p-gautam.webp",sum:"Metabolic scientist in insulin signalling and glucose and lipid metabolism; co-inventor of the catestatin lipolysis patent."},
 {name:"Subrata Das, Ph.D.",title:"Principal Consultant",img:"p-subrata.webp",sum:"CMC, formulation and sustained-release delivery for CST and RI-CST; formerly Senior Director at PYC Therapeutics."},
 {name:"Cristina Rodriguez Rios",title:"Attorney",img:"p-cristina.webp",sum:"Corporate counsel with over fifteen years in corporate law, finance and IP licensing; founder of Rodriguez & Rodriguez Law Firm P.C."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","Naturally occurring peptide may offer new approach to neurodegeneration","UC San Diego Today","https://today.ucsd.edu/story/naturally-occurring-peptide-may-offer-new-approach-to-neurodegeneration"],
 ["September 2026","CgA Therapeuticals receives an NIH/NIDDK SBIR Phase I award for peptide and peptidomimetic therapy for gastroparesis","NIH RePORTER",RP+"11410020"],
 ["September 2026","Catestatin peptide ameliorates tauopathy and amyloidogenesis via adrenergic inhibition","Molecular Therapy",PM+"42768750/"],
 ["May 2026","Catestatin restores cardiac metabolic flexibility and enhances mitochondrial function","Communications Biology",PM+"42177347/"],
 ["April 2026","Why some brains with Alzheimer’s stay sharp: AI-guided discovery of a murine model of asymptomatic Alzheimer’s disease","UC San Diego Today","https://today.ucsd.edu/story/why-some-brains-with-alzheimers-stay-sharp"]];
var SHEETS=[];
