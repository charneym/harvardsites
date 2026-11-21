var FONTS=['300 1em "Newsreader"','400 1em "Newsreader"','italic 300 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"'];
/* sources: arphion.com (Google Sites: Home, About Us, Product Pipeline, Management Team, Milestones, Contact; read 2026-11-21),
   NIH RePORTER (1R41CA302214-01A1, budget start 2026-09-08), UIC Today (2024-01-17), Google Patents US11639528B2. See _kit/dossiers/arphion.md */
var OLD="https://sites.google.com/view/arphion/";
var MAIL="joschwar@uic.edu"; /* Dr. Joel Schwartz's published UIC College of Dentistry address; Arphion publishes no company email */
var R_STTR="https://reporter.nih.gov/project-details/11314925";
var N_UIC="https://today.uic.edu/brush-biopsy-enables-early-detection-of-oral-cancer-without-surgery/";
var N_PAT="https://patents.google.com/patent/US11639528B2/en";
var N_CAM="https://pmc.ncbi.nlm.nih.gov/articles/PMC5275769/";
/* [name, indication, stage, detail, link, link label] */
var PROG=[
 ["OSCC test","Oral squamous cell carcinoma","Flagship · In development","A diagnostic test for the early detection of OSCC, one of the most devastating forms of oral cancer and readily curable if diagnosed early. A simple, non-invasive and inexpensive method designed to match or better the accuracy of surgical biopsy. The initial gene classifiers have been developed and are being improved.",OLD+"product-pipeline","Current site"],
 ["OLP test","Oral lichen planus","First product · Prototype","Oral lichen planus is the most common benign white oral lesion. It is readily treated with steroids, but can be hard to tell from certain forms of cancer, so it is usually left untreated. Arphion's test will distinguish OLP from cancer and other benign lesions; it is in the final stages of prototype development and testing.",OLD+"product-pipeline","Current site"],
 ["OSCC or leukoplakia","Cancer versus benign leukoplakia","NCI STTR Phase I · 2026","OSCC is often mistaken for benign leukoplakia, and the reverse sends patients to needless surgery. Using a set of 208 brush biopsy samples, machine learning and, as needed, neural networks and deep learning, Arphion is refining a miRNA classifier to tell the two apart.",R_STTR,"NIH RePORTER"],
 ["Follow-on tests","Other oral diseases","Pipeline · Planned","Tests for other oral diseases, for dental offices, clinics, hospitals, public health organisations and distributors in the United States and internationally.",OLD+"product-pipeline","Current site"]];
/* people: Management Team page; portraits from the same page */
var TEAM=[
 ["Dr. Joel Schwartz","President, Founder","A licensed dentist, oral pathologist and tumour immunologist, and Professor at the University of Illinois Chicago College of Dentistry. Doctor of Medical Science from Harvard, trained at the Dana-Farber Cancer Institute.","schwartz.webp"],
 ["Dr. Guy Adami","Chief Scientific Officer, Founder","Ph.D. in molecular biology; at the UIC College of Dentistry since 1994. Showed the value of RNA from brush cytology to identify OSCC, with a five-gene classifier and distinct miRNA groups for OLP and OSCC.","adami.webp"],
 ["Dr. David Demirjian","Business Manager","President and founder of zuChem, and formerly President and co-founder of ThermoGen, acquired by MediChem Life Sciences in 2000. A winner of the SBA's Tibbetts Award for commercialising SBIR technology.","demirjian.webp"]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 8, 2026","National Cancer Institute awards Arphion an STTR Phase I grant to build a miRNA classifier with neural networks and deep learning","NIH RePORTER",R_STTR],
 ["January 17, 2024","Brush biopsy enables early detection of oral cancer without surgery","UIC Today",N_UIC],
 ["May 2, 2023","US patent 11,639,528 granted: process for the identification of patients at risk for OSCC","Google Patents",N_PAT],
 ["December 2016","microRNA from brush biopsy to characterize oral squamous cell carcinoma epithelium","Cancer Medicine",N_CAM]];
var SHEETS=[];
