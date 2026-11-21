var FONTS=['300 1em "Manrope"','400 1em "Manrope"','italic 300 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Instrument Sans"','500 1em "Instrument Sans"','600 1em "Instrument Sans"'];
var MAIL="info@stemsynergy.com";
var TEL="(305) 600-1048";
var RP26="https://reporter.nih.gov/project-details/11409930";
var RP24="https://reporter.nih.gov/project-details/10933575";
var EAP="https://stemsynergy.com/stemsynergy-therapeutics-inc-now-accepting-applications-for-expanded-access-protocols-eaps-in-upcoming-clinical-trial/";
var BW21="https://www.businesswire.com/news/home/20210414005898/en/";
var EU16="http://eurekalert.org/pub_releases/2016-06/uomm-ssp061516.php";
/* programmes: stemsynergy.com Pipeline chart (2024-05), Science pages (Wnt, Notch, FAP) and NIH RePORTER.
   [lead series, mechanism, pathway, indication, stage (where the chart's bar ends), note] */
var PROG=[
 ["SST-1034","CK1α activators","Wnt","Colorectal and other WNT-driven cancers","IND-enabling","A novel class of CK1α activators that cut Wnt signalling at two nodes, lowering β-catenin and the nuclear regulator Pygopus2, with minimal on-target toxicity in the gut, in contrast to tankyrase inhibitors."],
 ["SST-024","CK1α activator","Wnt","Familial adenomatous polyposis","IND-enabling","Pyrvinium, an off-patent FDA-approved pinworm drug, repurposed as a Wnt inhibitor. FDA Orphan Drug Designation for FAP."],
 ["SSTB-178","β-catenin transcriptional complex inhibitors","Wnt","WNT-driven cancers","Lead optimization","Breaks the binding between β-catenin and BCL9. The subject of the NCI SBIR Phase I award of September 2026."],
 ["SSTN-302","Notch1 ternary complex inhibitors, type I","Notch","Notch-driven cancers","IND-enabling","Specifically disrupts Notch1-mediated assembly of the Notch transcription complex. Exclusively licensed from the University of Miami."],
 ["SSTN-465","Notch1 ternary complex inhibitors, type II","Notch","Notch-driven cancers","Clinical candidate",""],
 ["SSTK-214","NACK inhibitors","Notch","Notch-driven cancers","Clinical candidate","Small-molecule inhibitors of Notch Activation Complex Kinase. Exclusively licensed from the University of Miami."],
 ["SSTA-152","Myc degraders","Myc","c-Myc- and N-Myc-driven cancers","Clinical candidate","Small-molecule MYC degraders, developed with NCI SBIR Phase II support."]];
/* people: stemsynergy.com Leadership (Founders, Scientific Team) and NIH RePORTER */
var TEAM=[
 ["Anthony J. Capobianco, Ph.D.","President and co-founder","Professor and Director of the Molecular Oncology Program in the DeWitt Daughtry Department of Surgery at the University of Miami Miller School of Medicine. His lab was among the first to characterize the role of Notch signaling in cancer."],
 ["Dennis Fei, Ph.D.","Director of Drug Discovery and Development","Contact principal investigator on the NCI awards for SSTI’s Wnt, Notch and Myc programmes, including September 2026’s. Ph.D. in pharmacology and toxicology from Dartmouth; postdoctoral training with Dr. Harold Varmus at NHGRI and Weill Cornell Medicine. Joined StemSynergy in 2018."],
 ["Ethan Lee, M.D., Ph.D.","Co-founder","Professor in Cell and Developmental Biology, Cancer Biology and Pharmacology at Vanderbilt University. His lab studies the mechanisms of Wnt signaling and new ways to target the pathway."],
 ["David J. Robbins, Ph.D.","Co-founder","Professor and Endowed Chair in Experimental Therapeutics at Georgetown University, studying the roles of Wnt and Sonic hedgehog signaling in cancers such as colorectal cancer and medulloblastoma."],
 ["William A. Weiss, M.D., Ph.D.","Co-founder","Professor of Neurology, Pediatrics and Neurological Surgery at UCSF, an expert on developmental therapeutics focused on Myc, kinase biology and in vivo models of cancer."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2, 2026","NCI awards an SBIR Phase I grant: Development of novel WNT inhibitors to treat colorectal cancers","NIH RePORTER",RP26],
 ["March 19, 2025","Now accepting applications for Expanded Access Protocols in an upcoming clinical trial","StemSynergy",EAP],
 ["July 19, 2024","Small-molecule MYC degraders as novel cancer therapeutic agents: NCI SBIR Phase II, year three","NIH RePORTER",RP24],
 ["April 14, 2021","Notch1-selective small-molecule inhibitor prevents tumor growth by ablation of cancer stem cells","Business Wire",BW21],
 ["June 2016","Proof of concept for a potential new class of cancer drugs","EurekAlert!",EU16]];
var SHEETS=[];
