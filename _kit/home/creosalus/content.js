var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','400 1em "Public Sans"','500 1em "Public Sans"','600 1em "Public Sans"'];
var WEB="https://creosalus.com/";
var MAIL="contact@creosalus.com";
/* facts: creosalus.com (home, About, Divisions, Occam Design, Thorn BioScience, Services, Aseptic Manufacturing, cGMP Contract
   Manufacturing, Research & Development, Contact), NIH RePORTER (1R41EB038861-01, R44CA295197, R44NS084701); all fetched 2026-11-21 */
var SYS=[["Aseptic manufacturing","Sterile fill and finish","Veterinary controlled-release injectable peptide delivery, aseptic fill and terminal sterilization, for clinical supplies through small-scale commercial batches."],
 ["cGMP custom peptides","Sequence to needle","Personalized peptides, process development, a high-throughput, on-time history, and IND and INAD clinical trial compliance."],
 ["Research and development","Discovery to method transfer","Custom peptide drug discovery, analytical method development, validation and transfer, run by cGMP-trained staff in a state-of-the-art laboratory."]];
var SERVICES=[
 ["Processes","Process development","Every aspect of process development for parenteral dosage forms: peptides, solutions, suspensions and lyophilized products. Mechanical and chemical engineers optimize each process to reduce line loss, increase efficiency and mitigate risk.","https://creosalus.com/services/"],
 ["Peptide API","cGMP peptide production","Multiple high-throughput cGMP peptide production lines and a fully equipped quality control lab, producing hundreds of API peptides monthly, as lyophilized powder or aseptically filled cryovials.","https://creosalus.com/cgmp-contract-manufacturing/"],
 ["Vial filling","Liquids, 2 to 100 mL","A Chase Logeman filling line in an ISO 5 enclosure, for clinical and commercial sterile liquid vial filling, with fill batches of up to 15,000 units, and glove-box hand fill for small-volume personalized medicine.","https://creosalus.com/aseptic-manufacturing/"],
 ["Sterilization","Terminal gamma sterilization","Twenty years of experience with suspension handling and gamma irradiation terminal sterilization, partnered with Steris Isomedics, for vials from 2 mL to 100 mL.","https://creosalus.com/services/"],
 ["Packaging","Labeling and packaging","Integrated labeling, packaging and distribution for clinical trials and the commercial market, with custom clinical-study packaging guided by project managers and quality and regulatory teams.","https://creosalus.com/services/"],
 ["Storage","Storage and shipping","GMP warehousing with validated temperature monitoring, from ambient and refrigerated to frozen and ultra-low (−70 °C to −90 °C), shipped domestically and internationally.","https://creosalus.com/services/"]];
var DIVS=[
 ["Division","CreoSalus","Contract development manufacturing and custom peptide synthesis: R&D and process development leading to cGMP manufacturing of peptide drug substances (API) and sterile injection drug products.","https://creosalus.com/"],
 ["Division","Thorn BioScience","Pharmaceutical drug developer, manufacturer and wholesaler: custom peptide manufacturing, sterile fill and clean room services, and veterinary drugs, from R&D and start-ups to commercial supply lots.","https://creosalus.com/divisions/thorn-bioscience/"],
 ["Division","Occam Design","ISO certified medical device R&D and manufacturing, with clean room manufacturing, device packaging and logistics: “simple solutions for complex problems.”","https://creosalus.com/divisions/occam-design/"],
 ["Occam Design","TETRAS® synthesizer","Developed and manufactured in Louisville: the peptide synthesizer capable of rapid multi-peptide synthesis, built to meet the demands of the neoantigen industry.","https://creosalus.com/divisions/occam-design/"],
 ["Occam Design","Devices in development","Developer of the Cobra Introducer, the Ouchless™ Needle and the MB Device.","https://creosalus.com/divisions/occam-design/"]];
var RESEARCH=[
 ["NIH NIBIB · STTR Phase I · 2026","Point-of-care differential scanning calorimetry","A portable, affordable DSC system to help tell Type 1 from Type 2 heart attacks, with the University of Louisville: microfabricated thermal sensors, a custom control platform and disposable sample chambers.","https://reporter.nih.gov/project-details/11316332"],
 ["NIH NCI · SBIR Direct to Phase II · 2024–2028","Convection-enhanced delivery in recurrent glioma","A first-in-human randomized study of the Porous Brain Infusion Catheter (PBIC) System for recurrent Grade 3–4 glioma; CreoSalus manufactures the PBIC.","https://reporter.nih.gov/project-details/11176927"],
 ["NIH NINDS · SBIR · 2014–2024","Catheter for large-volume brain therapies","An SBIR program to develop a catheter for large-volume intraparenchymal brain therapies.","https://reporter.nih.gov/project-details/10222787"]];
var HIST=[
 ["1983","Advanced ChemTech is founded: fine chemicals, amino acids, scale-up and custom peptide synthesis."],
 ["1998","Barry W. Simon, DVM, co-founds Thorn BioScience to develop peptide-based veterinary drugs for reproductive management, therapeutics and vaccines of domestic animals."],
 ["2005","Thorn BioScience acquires ACT Holdings and Thuramed Devices, and the parent company is renamed CreoSalus: from the Latin, “to create good health.”"],
 ["2009","Occam Design is founded, an outgrowth of the company’s work on the TETRAS® synthesizer, bringing its device expertise to the human medical device market."],
 ["2016","CreoSalus begins manufacturing personalized peptide cancer vaccines: thousands since, for multiple clinical trials."],
 ["2026","An NIH STTR award with the University of Louisville to build a point-of-care calorimetry system for heart attack diagnosis."]];
var SHEETS=[];
