var FONTS=['300 1em "Inter Tight"','400 1em "Inter Tight"','500 1em "Inter Tight"','600 1em "Inter Tight"','400 1em "Open Sans"','600 1em "Open Sans"'];
var MAIL="mailto:contact@dembiopharma.com";
var ASCO="https://meetings.asco.org/meetings/2026-asco-gastrointestinal-cancers-symposium/333/16879?presentation=255271";
/* Programs, from dembiopharma.com (Pipeline, News) and the company's January 6, 2026 press release.
   Stage words only as the company states them. [program, area, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["DEM301","Colorectal and GI cancers","Anti-DEM-TXX antibody-drug conjugate","Pre-IND · Phase 1a/1b planned for 2H 2026","A first-in-class bifunctional ADC: an afucosylated monoclonal antibody against DEM-TXX, conjugated to a clinically validated linker-payload. Preclinical pharmacology and toxicology studies and CMC process development are under way.",0,"Lead program",ASCO,"ASCO GI 2026"],
 ["Discovery","Solid tumors","Further DEM and EM signals","Discovery","Our CRISPR-based functional genomic screens in tumor cells and human myeloid phagocytes continue to surface new &#8220;don&#8217;t eat me&#8221; and &#8220;eat me&#8221; signals as candidate targets.",1,"Platform","",""]];
/* DEM301 at ASCO GI 2026 (press release, January 6, 2026). */
var EVID=[
 ["Poster","DEM301, a novel anti-DEM-TXX antibody-drug conjugate with potent anti-tumor activity for the treatment of gastrointestinal tumors"],
 ["Session","Poster Session C: Cancers of the Colon, Rectum, and Anus · Abstract 159"],
 ["Data","Potent, durable single-agent anti-tumor efficacy in preclinical models of colorectal and other GI tumors"],
 ["Safety","A favorable safety profile in a humanized DEM-TXX mouse model, supporting advancement toward the clinic"]];
/* dembiopharma.com (About) and the company's press releases. Text-only masthead; summaries state only what they state. */
var TEAM=[
 {g:"Management",name:"Nenad Grmusa",title:"Chief Executive Officer & Director",sum:"Joined in September 2022 from Takeda, where he led R&D Strategy and External Innovation; earlier, ten years at Millennium Pharmaceuticals."},
 {g:"Management",name:"Loise Francisco, PhD",title:"Chief Scientific Officer",sum:"A pioneer in T cell immune checkpoints and dendritic cell biology; formerly at Evelo Biosciences and GSK, and in Arlene Sharpe&#8217;s lab at Harvard Medical School."},
 {g:"Management",name:"Humphrey Gardner, MD",title:"Chief Medical Officer",sum:"More than 30 years in discovery and clinical development, including CMO roles at Harbour BioMed, Stingthera and Silicon Therapeutics, and AstraZeneca, Novartis and Biogen."},
 {g:"Management",name:"John McCabe, MBA",title:"CFO / COO (consultant)",sum:"Formerly Chief Financial Officer of Oncorus and Chief Accounting Officer of ARIAD Pharmaceuticals."},
 {g:"Management",name:"Jorg Thommes, PhD",title:"Pharmaceutical Science & Technical Operations (consultant)",sum:"More than 30 years of experience in biomanufacturing in academia, industry and the not-for-profit sector."},
 {g:"Board of directors",name:"Jan Skvarka, PhD, MBA",title:"Executive Chairman",sum:"Formerly CEO of Trillium Therapeutics; on the boards of Zentalis Pharmaceuticals and Monte Rosa Therapeutics."},
 {g:"Board of directors",name:"Christoph Westphal, MD, PhD",title:"Founding CEO & Director",sum:"Co-founder and General Partner of Longwood Fund, DEM&#8217;s founding investor."},
 {g:"Board of directors",name:"Dan Janney, MBA",title:"Director",sum:"Managing Partner of Alta Partners, which he joined at its founding in 1996."},
 {g:"Board of directors",name:"Dylan Morris",title:"Director",sum:"Managing Director at Insight Partners."},
 {g:"Board of directors",name:"Marie-Claire Peakman, MRPharmS, PhD",title:"Director",sum:"Partner at Pfizer Ventures and an Executive Director in Emerging Science & Innovation."},
 {g:"Board of directors",name:"Satoshi Konagai, MBA",title:"Director",sum:"President and Investment Lead, Astellas Venture Management."},
 {g:"Scientific co-founders",name:"Jonathan Weissman, PhD",title:"Co-founder · SAB Co-Chair",sum:"Professor of Biology at MIT and Howard Hughes Medical Institute investigator; a world leader in genome-wide CRISPR screens."},
 {g:"Scientific co-founders",name:"Michael Bassik, PhD",title:"Co-founder · SAB Co-Chair",sum:"Associate Professor of Genetics at Stanford University; cancer, phagocytes and CRISPR screening."},
 {g:"Scientific co-founders",name:"Kipp Weiskopf, MD, PhD",title:"Co-founder · SAB Co-Chair",sum:"Valhalla Fellow at the Whitehead Institute and a pioneer of macrophage-directed therapies, with a clinical appointment at Dana-Farber Cancer Institute."},
 {g:"Scientific co-founders",name:"Roarke Kamber, PhD",title:"Co-founder",sum:"Postdoctoral fellow in Michael Bassik&#8217;s laboratory in the Department of Genetics at Stanford University."},
 {g:"Scientific co-founders",name:"Dian Yang, PhD",title:"Co-founder",sum:"Damon Runyon Postdoctoral Fellow in Jonathan Weissman&#8217;s lab; PhD at Stanford on the mechanisms of cancer metastasis."},
 {g:"Scientific advisors",name:"Kai Wucherpfennig, MD, PhD",title:"Scientific Advisor",sum:"Professor and Chair, Department of Cancer Immunology and Virology, Dana-Farber Cancer Institute."},
 {g:"Scientific advisors",name:"Dane Wittrup, PhD",title:"Scientific Advisor",sum:"Carbon P. Dubbs Professor of Chemical Engineering and Biological Engineering, MIT."},
 {g:"Scientific advisors",name:"John Lambert, PhD",title:"Scientific Advisor",sum:"Former CSO of ImmunoGen and one of the leading experts in antibody-drug conjugates."},
 {g:"Scientific advisors",name:"Wendy Young, PhD",title:"Scientific Advisor",sum:"Former SVP of Small Molecule Drug Discovery at Genentech; advisor to Google Ventures."},
 {g:"Scientific advisors",name:"Robert Uger, PhD",title:"Scientific Advisor",sum:"More than 20 years developing novel agents that target the immune system; former CSO of Trillium Therapeutics."}];
var NEWS=[
 ["Jan 6, 2026","DEM BioPharma announces a poster presentation featuring DEM301 at the 2026 ASCO Gastrointestinal Cancers Symposium","BioSpace","https://www.biospace.com/press-releases/dem-biopharma-announces-poster-presentation-featuring-dem301-at-the-2026-asco-gastrointestinal-cancers-symposium"],
 ["Jun 13, 2023","DEM BioPharma appoints Wendy Young, Ph.D., to its Scientific Advisory Board","DEM BioPharma","https://dembiopharma.com/news.html"],
 ["Sep 27, 2022","DEM BioPharma establishes its leadership team with the appointment of Nenad Grmusa as CEO","DEM BioPharma","https://dembiopharma.com/news.html"],
 ["Jun 23, 2022","DEM BioPharma launches with $70 million financing","DEM BioPharma","https://dembiopharma.com/news.html"]];
var BACK=["Longwood Fund","Alta Partners","Insight Partners","Pfizer Ventures","Astellas Venture Management","Emerson Collective","UTokyo Innovation Platform","Alexandria Venture Investments"];
var SHEETS=[];
