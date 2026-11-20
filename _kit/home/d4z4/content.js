var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Roboto"','500 1em "Roboto"','700 1em "Roboto"'];
var FORM="https://www.d4z4.com/contact";
var AWARD="https://reporter.nih.gov/project-details/11067939";
/* programmes: every line from the NIH NCATS STTR Phase I award 1R41TR005388-01 (abstract and narrative, NIH RePORTER).
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["Molecular diagnostic","Facioscapulohumeral muscular dystrophy (FSHD)","Long-read sequencing assay","NIH STTR Phase I","A molecular diagnostic assay for FSHD, a disease that does not have an effective diagnostic tool. The assay is being standardised and validated, including with clinical samples.",AWARD,"NIH RePORTER"],
 ["Data analysis","D4Z4 repeat analysis pipeline","Bioinformatics and interface","NIH STTR Phase I","An optimised bioinformatics pipeline for long-read data that contains D4Z4 repeat sequences, with a user-friendly interface for fast and accurate diagnostic report generation.",AWARD,"NIH RePORTER"],
 ["Platform","Additional genes and diseases","Structural variation and methylation","Next","The assay and the analysis tool are designed to expand beyond FSHD: additional target regions, then additional genes and diseases with complex genetic and epigenetic alterations.",AWARD,"NIH RePORTER"]];
/* the contact principal investigator on the company's NIH award (NIH RePORTER); no company title is published, so none is given */
var TEAM=[
 {g:"Principal investigator",name:"Yi-Wen Chen, DVM, PhD",title:"Contact PI, NIH NCATS STTR award",sum:"Associate Professor of Pediatrics at the George Washington University and Children’s National Hospital; research on skeletal muscle regeneration and disease, including FSHD."}];
var NEWS=[];
var SHEETS=[];
