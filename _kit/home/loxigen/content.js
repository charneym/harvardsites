var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Poppins"','500 1em "Poppins"','600 1em "Poppins"','700 1em "Poppins"'];
var MAIL="manager@loxigen.com";
var LI="https://www.linkedin.com/company/loxigen";
var RP="https://reporter.nih.gov/project-details/";
var PAPER="https://www.cell.com/cell-chemical-biology/fulltext/S2451-9456(24)00273-3";
/* programmes: every line from loxigen.com (/pipeline, /cancer, /fibrosis, /cardiac-diseases, /therapeutic-areas) and
   NIH RePORTER (R42CA275622). [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["LXG6403 · lead","Chemotherapy-resistant triple-negative breast cancer","Oncology","Lead optimisation toward IND","An orally bioavailable LOX inhibitor that overcomes chemotherapy resistance in chemoresistant in vitro, organoid and in vivo models of TNBC. Funded by an NCI Fast-Track STTR, now in Phase II.",RP+"11178114","NIH RePORTER"],
 ["LOX inhibitors","Desmoplastic solid tumours","Oncology","Preclinical","Breaking down the stiff, crosslinked stroma around tumours such as breast and pancreatic cancer, so standard-of-care therapy penetrates better and metastatic growth is blocked.",PAPER,"Cell Chem. Biol."],
 ["Lysyl oxidase family","Pulmonary fibrosis","Fibrosis","Therapeutic area","LoxiGen’s analyses found 70–75% of lung fibrosis patients are high LOX-expressing compared with normal lung; inhibiting lysyl oxidases reduces fibrillar collagen crosslinking.","https://loxigen.com/fibrosis/","LoxiGen"],
 ["Lysyl oxidase family","Cardiac fibrosis and remodelling","Cardiac disease","Therapeutic area","LOX overexpression drives cardiac hypertrophy and fibrotic remodelling; lysyl oxidase inhibition reduces collagen crosslinking and has ameliorated cardiac dysfunction in published models.","https://loxigen.com/cardiac-diseases/","LoxiGen"]];
/* loxigen.com/founder-and-members-2 and /advisory-team. Text-only masthead; summaries condensed from their bios. */
var TEAM=[
 {g:"Leadership",name:"Ozgur Sahin, PhD",title:"Founder & President",sum:"Professor and Endowed Chair of Biochemistry & Molecular Biology at MUSC and co-leader of the Breast Transdisciplinary Cancer Team at Hollings Cancer Center. Over 80 papers on drug-resistant and metastatic cancer."},
 {g:"Leadership",name:"Dr. HM Lee",title:"Director of Research",sum:"Joined LoxiGen in September 2024 to optimise the current lead toward an IND application."},
 {g:"Advisory team",name:"Igor Roninson, PhD",title:"University of South Carolina",sum:"Endowed Chair in Translational Cancer Therapeutics; discovered the MDR1 multidrug resistance gene and developed the first selective CDK8/19 inhibitors to enter clinical trials."},
 {g:"Advisory team",name:"Campbell McInnes, PhD",title:"University of South Carolina",sum:"Professor of Medicinal Chemistry; 30 years in synthetic, structural and computational chemistry, formerly head of structure-guided medicinal chemistry at Cyclacel."},
 {g:"Advisory team",name:"Tyler Tatum",title:"Ripple Technology",sum:"Over 25 years in technology startups; has helped clients raise over $30M in SBIR/STTR funding and mentored five NSF I-Corps teams."},
 {g:"Advisory team",name:"Kyle Salazar, MPA",title:"Ripple Technology · USC",sum:"Associate Director of Technology Commercialization at the University of South Carolina, where he has moved more than 60 technologies to industry."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2025","The NCI funds year three of LoxiGen’s Fast-Track STTR to develop novel LOX inhibitors for chemotherapy-resistant TNBC ($1.06M)","NIH RePORTER",RP+"11178114"],
 ["August 2024","LoxiGen completes Phase I of its Fast-Track STTR, nearly $2.5M in NIH funding, and moves to Phase II","NIH RePORTER",RP+"11116003"],
 ["July 2024","The paper describing lead compound LXG6403, a highly potent bi-thiazole LOX inhibitor, is published in Cell Chemical Biology","Cell Chem. Biol.",PAPER],
 ["June 2023","The National Cancer Institute awards LoxiGen a three-year Fast-Track STTR, in collaboration with scientists at MUSC and USC","NIH RePORTER",RP+"10696810"]];
var SHEETS=[];
