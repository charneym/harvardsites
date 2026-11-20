var FONTS=['300 1em "Figtree"','400 1em "Figtree"','500 1em "Figtree"','italic 300 1em "Figtree"','italic 400 1em "Figtree"'];
var WEB="https://imcarebiotech.com/";
var MAIL="info@imcarebiotech.com";
var RPT="https://reporter.nih.gov/project-details/11181451";
/* facts: imcarebiotech.com (home, /about-us, /imcare-team, /research, /news-events and the posts linked below);
   NIH RePORTER 1R43CA302053-01 (notice 2025-06-20) and R44CA165314; all fetched 2026-11-20 */
var SYS=[["Diagnostics","Seravue® LC-SPIK","A blood test built on LC-SPIK, a liver cancer-specific protein. Compared with AFP, the existing marker, Seravue® has shown superior accuracy and broader applicability."],
 ["Algorithms","Seravue AI","LC-SPIK combined with the established markers AFP and DCP through an AI algorithm, from one simple blood sample, for highly sensitive and specific HCC detection."],
 ["Therapeutics","SPIK inhibitors","Small molecules that block SPIK, so the immune system can again clear cancer cells. IMB101 and IMB102 inhibit SPIK in vitro at an IC50 of about 1 µM."]];
var PIPE=[
 ["Diagnostic · HCC and ICC","Seravue® LC-SPIK","Quantitative LC-SPIK test for the early detection of hepatocellular carcinoma and intrahepatic cholangiocarcinoma. FDA Breakthrough Device Designation; available today as a research use only (RUO) kit.","https://imcarebiotech.com/research/"],
 ["Diagnostic · HCC","Seravue AI","Multi-analyte algorithmic assay: LC-SPIK, AFP and DCP, measured by ImCare’s own ELISA assays and combined with clinical information. Supported by an NCI SBIR award (2025).",RPT],
 ["Therapeutic · HCC","IMB101 and IMB102","Compounds found by high-throughput screening that inhibit SPIK, aiming to restore immune killing of cancer cells. In vitro IC50 of about 1 µM; CC50 above 100 µM.","https://imcarebiotech.com/research/"]];
var TEAM=[
 {g:"Leadership",name:"Aaron Yefei Lu",title:"Chief Executive Officer",sum:"Former McKinsey consultant, then public and private equity investing in diagnostic-assay med-tech. MBA, London Business School; BA, Stanford."},
 {g:"Leadership",name:"Xuanyong Lu, PhD",title:"President and Co-Founder",sum:"Founded ImCare in 2011; formerly a professor at Drexel’s Institute for Biotechnology and Virology. Inventor of the technologies behind Seravue®."},
 {g:"Leadership",name:"Karteek Kadimisetty, PhD",title:"Chief Science Officer",sum:"Over a decade in product development, biomarker assay design and drug discovery; leads the multi-analyte HCC assay platform. PhD, UConn."},
 {g:"Leadership",name:"Matthew Lee",title:"Chief Operating Officer",sum:"Twenty years in global finance, a decade of it at Goldman Sachs. Contributed to early research on ImCare’s core technology."},
 {g:"Leadership",name:"Bobby Biswal",title:"VP of Engineering",sum:"Leads ImCare’s software and AI programmes, after engineering and product roles at Cisco, Ooma and Amazon Alexa AI. BS EE, Stanford; MS, USC."}];
var NEWS=[
 ["May 2026","ImCare showcases LC-SPIK and its multi-analyte strategy at the CVC HCC Biomarker Symposium in Dallas, with data from over 1,200 patients","ImCare Biotech","https://imcarebiotech.com/imcare-biotech-showcases-lc-spik-a-novel-liver-cancer-biomarker-with-distinct-biology-to-enhance-early-hcc-detection-at-the-cvc-hcc-biomarker-symposium/"],
 ["Sep 2025","Liver cancer: why early diagnosis matters","ImCare Biotech","https://imcarebiotech.com/liver-cancer-early-diagnostics/"],
 ["Jun 2025","NCI awards ImCare an SBIR grant for Seravue AI, a multi-analyte algorithmic assay for HCC","NIH RePORTER",RPT],
 ["Apr 2024","The three-dimensional structure of LC-SPIK and its performance in HCC diagnosis, published in Diagnostics","Diagnostics","https://doi.org/10.3390/diagnostics14070725"],
 ["Aug 2022","Independent University of Turin study: high sensitivity and specificity for Seravue® in NAFLD-related cirrhosis","ImCare Biotech","https://imcarebiotech.com/august-2022-independent-clinical-study-shows-that-seravue-has-high-sensitivity-and-specificity-for-the-detection-of-liver-cancer-in-nafld-and-related-cirrhotic-patients/"]];
var SHEETS=[];
