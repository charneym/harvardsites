var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Raleway"','500 1em "Raleway"','600 1em "Raleway"','700 1em "Raleway"'];
var MAIL="Info@PharmaCatlyst.com";
var RP="https://reporter.nih.gov/project-details/";
var PL="https://serentrix.com/pipeline/";
/* programmes: every line from serentrix.com (/science, /pipeline) and the NIH RePORTER abstracts.
   [compound, indication, route/area, status, detail, link, link label] */
var PIPE=[
 ["SER114 · topical","Burn pain","Cutaneous pain receptors","NIH SBIR Phase I","A first-in-class, non-opioid topical formulation that blocks TRPV1 on the skin, where burn pain starts. No treatment for burn pain acts on specific pain receptors and can be applied topically. NIGMS award R43GM150295.",RP+"10821060","NIH RePORTER"],
 ["SER-014","Endometriosis pain","Women’s health","NIH STTR Phase I","Testing SER-014 in a validated mouse model of endometriosis with Dr. Michael Rogers (Boston Children’s Hospital, Harvard Medical School) and Dr. Megan Falsetta (University of Rochester Medical Center). NICHD award R41HD115418.",RP+"10916997","NIH RePORTER"],
 ["Ser-014","Neuropathic pain","Human health","Phase 1","The lead compound, formerly PHE377, acquired from PharmEste. Tested in Phase 1 studies in 35 healthy subjects with no increase in body temperature.",PL,"Serentrix"],
 ["Ser-114","Dry eye, pain and inflammation","Ophthalmology","Preclinical","A topical treatment for dry eye that relieves pain, reduces ocular inflammation and prevents corneal scarring without delaying wound healing. No drug today controls eye pain safely without those risks.",PL,"Serentrix"]];
var MORE=[["Ser-224","Irritable bowel diseases"],["Ser-334","Acute pancreatitis"],["Ser-444","Vulvodynia"],["Ser-777","Uveitis in horses · animal health"]];
/* serentrix.com/the-team. Text-only masthead (CI/CL); summaries condensed from their bios. */
var TEAM=[
 {g:"Leadership",name:"Kumaril Bhargava, PhD, MBA, RPh",title:"Founder & CEO",sum:"Twenty years at Abbott, Wyeth/Pfizer, Johnson & Johnson and Merck, including external R&D innovation at Merck and Pfizer."},
 {g:"Leadership",name:"Peter Sol Reinach, PhD",title:"Chief Scientific Officer",sum:"168 peer-reviewed papers on the roles of TRP channels in ocular health and disease; more than 30 years of National Eye Institute funding."},
 {g:"Leadership",name:"Glen Frick, MD, PhD",title:"Chief Development Officer",sum:"25+ years of drug development, with several first-in-human studies in pain, neuroscience and respiratory medicine."},
 {g:"Leadership",name:"Shashwat Sharad, PhD",title:"VP, R&D and Project Management",sum:"Translational biomedical scientist with 20+ years in research; PhD work on the mu-opioid receptor gene and opiate addiction."},
 {g:"Advisors",name:"Vijay Tammara, PhD",title:"Consultant, Regulatory Affairs",sum:"About 29 years in regulatory science: 9 marketing authorisations, 12 orphan drug designations and over 45 INDs."},
 {g:"Advisors",name:"Anupam Dokeniya, MBA",title:"Consultant, Finance",sum:"CFO for multiple biotech companies, with M&A, fundraising and licensing; earlier at Santander Investments and The World Bank."}];
/* news: NIH awards, each linking to its RePORTER record. [date, headline, source, url] */
var NEWS=[
 ["September 2025","NIGMS supplements the burn pain SBIR to support commercialisation of the topical TRPV1 treatment","NIH RePORTER",RP+"11329917"],
 ["August 2024","NICHD STTR award: “Validating SER-014, a TRPV1 antagonist, to treat endometriosis”","NIH RePORTER",RP+"10916997"],
 ["July 2024","NIGMS SBIR award: “Topical treatment for burn pain by blocking cutaneous pain receptors”","NIH RePORTER",RP+"10821060"]];
var SHEETS=[];
