var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Ubuntu"','500 1em "Ubuntu"','800 1em "Montserrat"'];
var MAIL="mailto:info@capiobiosciences.com";
var NB="https://www.capiobiosciences.com/";
/* clinical studies with the CapioCyte approach (capiobiosciences.com, News & Publications: Featured Publications; PubMed).
   [setting, capture targets, finding, journal, url] */
var STUDY=[
 ["Oligometastatic disease","EpCAM · HER2 · EGFR","Radiation therapy","43 patients followed for up to two years after definitive-intent radiation. A CTC level above 15 per mL was associated with progression within the next six months (odds ratio 3.31), and in 26% of patients who progressed it came before radiographic or clinical progression.","JCO Precision Oncology, 2023","https://doi.org/10.1200/PO.23.00303"],
 ["Head and neck cancer","HNSCC","Chemoradiation · cetuximab","Elevated CTC counts in 13 of 14 intermediate-risk HPV-positive patients at screening (median 17 CTC/mL), and significant declines during cetuximab treatment in HPV-negative patients.","Cancer Letters, 2023","https://doi.org/10.1016/j.canlet.2023.216187"],
 ["Gastrointestinal cancer","Machine learning","Radiotherapy · chemotherapy","A median of 50 CTC per mL of whole blood captured; CTC counts drawn three months after treatment were predictive of disease progression.","Biosensors and Bioelectronics, 2023","https://doi.org/10.1016/j.bios.2023.115117"],
 ["Immunotherapy response","PD-L1 exosomes","Checkpoint inhibitors","Generation-7 dendrimer–peptide conjugates bound PD-L1 with about 2.5-fold higher avidity than an antibody, and the exosomes they captured predicted treatment response better than tissue PD-L1 scoring.","Advanced Science, 2025","https://doi.org/10.1002/advs.202509270"]];
/* capiobiosciences.com, Our Team. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founders and team",name:"Seungpyo Hong, PhD",title:"Co-Founder",sum:"Milton J. Henrichs Chair and Professor, Division of Pharmaceutical Sciences, University of Wisconsin–Madison."},
 {g:"Founders and team",name:"Andrew Wang, MD",title:"Co-Founder",sum:"Professor and Associate Vice Chair for Research, Department of Radiation Oncology, UT Southwestern Medical Center."},
 {g:"Founders and team",name:"Chang-Woo Lee, PhD",title:"Chief Technology Officer",sum:""},
 {g:"Founders and team",name:"Michael Poellmann, PhD",title:"Senior Scientist",sum:""},
 {g:"Founders and team",name:"Ju-Heon Lim, PhD",title:"Senior Researcher",sum:""},
 {g:"Board of directors",name:"David Chen",title:"Chairman",sum:"Scion Medical Technologies."},
 {g:"Board of directors",name:"Li Mao, MD",title:"Director",sum:"Betta Pharmaceuticals."},
 {g:"Scientific advisory board",name:"Robert S. Langer, ScD",title:"Scientific Advisor",sum:"David H. Koch Institute Professor, Massachusetts Institute of Technology."},
 {g:"Scientific advisory board",name:"Pasi A. Jänne, MD, PhD",title:"Scientific Advisor",sum:"Professor of Medicine, Harvard Medical School; Director, Lowe Center for Thoracic Oncology, Dana-Farber."},
 {g:"Scientific advisory board",name:"Daniel George, MD",title:"Scientific Advisor",sum:"Professor of Medical Oncology and Urology; Director, GU Oncology, Duke Cancer Center."},
 {g:"Scientific advisory board",name:"Howard H. Bailey, MD",title:"Scientific Advisor",sum:"Director, UW Carbone Cancer Center, University of Wisconsin–Madison."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2025","Avidity-based capture of PD-L1-expressing exosomes with dendrimer–peptide conjugates","Advanced Science","https://doi.org/10.1002/advs.202509270"],
 ["November 2023","Our work is highlighted in Inside Precision Medicine","Capio news","https://www.capiobiosciences.com/post/our-work-has-been-highlighted-in-inside-precision-medicine"],
 ["April 2023","Capio Biosciences Korea will expand to Gangwon Technopark","Capio news","https://www.capiobiosciences.com/post/capio-biosciences-korea-will-expand-to-gangwon-technopark"],
 ["January 2023","KORIL Foundation funding for a $2.18M head and neck cancer liquid biopsy project with BioView","Capio news","https://www.capiobiosciences.com/post/capio-recieves-funding-from-the-koril-foundation-launches-new-study"],
 ["August 2021","Capio’s liquid biopsy work featured in the Wisconsin State Journal","Capio news","https://www.capiobiosciences.com/post/capio-biosciences-was-highlighted-in-the-wisconsin-state-journal"],
 ["November 2018","NIH SBIR grant awarded, effective August 1, 2018","Capio news","https://www.capiobiosciences.com/post/capio-biosciences-awarded-an-nih-sbir-grant-effective-august-1-2018"]];
var SHEETS=[];
