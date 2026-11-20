var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Marcellus"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"'];
var MAIL="info@zywiebio.com";
var TEL="609.924.2575";
var RP="https://reporter.nih.gov/project-details/";
/* pipeline: every line from zywiebio.com (/drug-development/*) and the NIH RePORTER abstract of 1R43AG097283-01.
   [area, programme, indication, status, detail, link, link label] */
var PIPE=[
 ["ZW-002 · ZW-010","Alzheimer’s disease and related dementias","Ambroxol analogs","NIH SBIR Phase I","Two analogs engineered for markedly improved metabolic stability that keep ambroxol’s lysosomal-enhancing capacity. The Phase I work scales up manufacture, runs short-term toxicology and tests efficacy in the 3xTg Alzheimer’s model, in prevention and treatment paradigms.",RP+"11256934","NIH RePORTER"],
 ["Ambroxol","Parkinson’s, Lewy body and related diseases","Lysosomal clearance","Opportunity","The mechanism of clearing misfolded proteins applies across a wide range of neurological diseases. In Parkinson’s, ambroxol acts primarily as a pharmacological chaperone.","https://clinicaltrials.gov/study/NCT02914366","ClinicalTrials.gov"],
 ["Ambroxol","Gaucher disease, Type 3 and Type 1","Lysosomal storage disease","Opportunity","Where Zywie began: Type 3 as an orphan indication and Type 1 as a larger market. In Gaucher disease ambroxol acts as a chaperone that helps the misfolded enzyme fold and route correctly.","https://zywiebio.com/drug-development/drug-development-overview/","Zywie"]];
/* clinical evidence for ambroxol itself, from zywiebio.com/drug-development/clinical-status */
var EVID=[
 ["Phase 1 and 2","Ambroxol was studied in Parkinson’s disease in Professor Schapira’s laboratory in London (Mullin et al., JAMA Neurology, 2020)"],
 ["Dementia trial","Dr. Stephen Pasternak led a Phase II trial of ambroxol in Parkinson’s disease dementia at Western University (NCT02914366)"],
 ["Into the brain","Ambroxol crosses the blood–brain barrier and has a 20-year history of safety, including use in pregnancy"],
 ["Elsewhere","Additional studies of ambroxol are ongoing in Canada and Norway"]];
/* zywiebio.com/about-us/management and /scientific-advisory-board. Text-only masthead (CL); summaries condensed from their bios. */
var TEAM=[
 {g:"Management",name:"Robert F. Johnston",title:"Chairman of the Board & CEO",sum:"Founded Johnston Associates in 1968; founder of companies including Sepracor, Cytogen and i-STAT."},
 {g:"Management",name:"Stephen Anderson, PhD",title:"Biological Consultant",sum:"Associate Professor at Rutgers and formerly at Genentech; protein folding in Parkinson’s and Alzheimer’s."},
 {g:"Management",name:"Joey Broussard, PhD",title:"Scientific Strategy",sum:"Neuroscientist at Princeton University who builds tools for monitoring brain activity in living animals; Warren Alpert and NARSAD awardee."},
 {g:"Management",name:"Stephen Pasternak, MD, PhD",title:"Western University",sum:"Directs an Alzheimer’s research centre at Parkwood Institute; studies lysosomal trafficking in neurodegeneration."},
 {g:"Scientific advisors",name:"Don Mahuran, PhD",title:"Hospital for Sick Children, Toronto",sum:"Forty years of research that made new therapeutic approaches possible for several lysosomal storage diseases."},
 {g:"Scientific advisors",name:"Coleen T. Murphy, PhD",title:"Princeton University",sum:"Director of LSI Genomics; genetic pathways of cognitive and reproductive aging, from worms to mice."},
 {g:"Scientific advisors",name:"Samuel S.-H. Wang, PhD",title:"Princeton University",sum:"Professor of neuroscience; how brains learn from sensory experience, with relevance for autism."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2025","Zywie receives an NIH SBIR Phase I award from the National Institute on Aging to develop novel ambroxol analogs as disease-modifying therapies for Alzheimer’s disease","NIH RePORTER",RP+"11256934"],
 ["April 2020","Ambroxol for the treatment of patients with Parkinson disease with and without glucocerebrosidase gene mutations","JAMA Neurology","https://doi.org/10.1001/jamaneurol.2019.4611"],
 ["Since 2015","Ambroxol as a treatment for Parkinson’s disease dementia: the Phase II trial led by Dr. Stephen Pasternak","ClinicalTrials.gov","https://clinicaltrials.gov/study/NCT02914366"]];
var SHEETS=[];
