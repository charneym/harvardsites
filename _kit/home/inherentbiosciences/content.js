var FONTS=['300 1em "Raleway"','italic 300 1em "Raleway"','400 1em "Raleway"','500 1em "Raleway"','500 1em "JetBrains Mono"'];
var MAIL="hello@pathfertility.com";
var TEL="(801) 477-7284",TELH="+18014777284";
var RPT="https://reporter.nih.gov/project-details/";
/* tests and programmes: Path Fertility (pathfertility.com, launch release 18 Oct 2021) and Inherent's NICHD SBIR project summaries (NIH RePORTER) */
var PROGS=[
 ["SpermQT, the epigenetic sperm quality test","Commercial · Path Fertility","Measures DNA methylation on genes tied to sperm production, sperm maturation and embryo development, to show whether sperm can do what they need to do, and to inform a couple’s choice of treatment, such as IUI or IVF.","https://pathfertility.com","Path Fertility"],
 ["NOA-guide, for non-obstructive azoospermia","NICHD SBIR Fast-Track · In development","One semen test that looks for sperm-derived cell-free DNA to predict whether surgical sperm retrieval (mTESE) will succeed, and identifies Y-chromosome microdeletion subtypes and Klinefelter syndrome. Developed with the Jenkins and Hill laboratories at Brigham Young University.",RPT+"11026097","NIH RePORTER"],
 ["MSH5 epimutations and cancer risk","NICHD SBIR Direct to Phase II · 2026","A semen-based test for epimutations in MSH5, a DNA repair gene, found in up to 19% of men with NOA in work with Dr. Dolores Lamb’s laboratory. The study also screens 500 colorectal cancer patients, and the assay is to be validated in a CLIA-certified laboratory.",RPT+"11314862","NIH RePORTER"],
 ["Beyond fertility","Platform research","Epigenetic profiles correlate with important biological functions of sperm. The platform detects dysregulation across multiple genes and pathways, with implications for sperm age, embryo quality and reproductive cancers.","",""]];
/* news: releases, coverage and award notices, each linking to its source */
var NEWS=[
 ["26 Oct 2026","Path Fertility awarded a $2 million NIH grant to develop an epigenetic test for azoospermia and its cancer risk","Newswire","https://www.newswire.com/news/path-fertility-awarded-2-million-nih-grant-to-develop-epigenetic-test-22877418"],
 ["21 Aug 2026","NICHD Direct to Phase II SBIR: an epigenetic diagnostic for severe spermatogenic failure and associated malignancy risks","NIH RePORTER",RPT+"11314862"],
 ["12 Feb 2026","Inherent Biosciences eyes further growth in Spokane","Spokane Journal","https://www.spokanejournal.com/articles/17960-test-inherent-biosciences"],
 ["2026","Peer-reviewed study on epigenetic sperm assessment, Brogaard et al.","J Assist Reprod Genet","https://doi.org/10.1007/s10815-025-03791-0"],
 ["31 Jan 2024","Commercial partnership with Genomic Prediction adds SpermQT to its clinical test suite","Newswire","https://www.newswire.com/news/inherent-biosciences-and-genomic-prediction-announce-commercial-22231407"],
 ["10 Jan 2023","Partnership with Posterity Health pairs SpermQT with telehealth fertility care for men","Newswire","https://www.newswire.com/news/inherent-biosciences-partners-with-posterity-health-to-accelerate-the-21924629"],
 ["6 Sep 2022","Series A led by Propel Bio Partners, with Portfolia’s FemTech II Fund and Alliance of Angels","Utah Business","https://www.utahbusiness.com/press-releases/2022/09/06/male-reproductive-health-in-utah-inherent-bio/"]];
var TEAM=[
 {g:"Founders",name:"Andy Olson",title:"Co-founder, Chief Executive Officer",sum:"Co-founded Inherent Biosciences in 2019 and leads the company and its Path Fertility division."},
 {g:"Founders",name:"Kristin Brogaard, PhD",title:"Co-founder, Chief Scientific Officer",sum:"Principal investigator on the company’s NIH NICHD SBIR awards, from Phase I in 2022 to Phase II in 2026."},
 {g:"Research collaborators",name:"Dolores Lamb, PhD",title:"MSH5 epimutation research",sum:"Her laboratory, with Inherent’s support, identified MSH5 epimutations in men with azoospermia."},
 {g:"Research collaborators",name:"Jenkins and Hill Laboratories",title:"Brigham Young University",sum:"Co-developing NOA-guide under the company’s NIH SBIR Fast-Track award."}];
var SHEETS=[];
