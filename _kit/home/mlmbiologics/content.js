var FONTS=['300 1em "Barlow"','400 1em "Barlow"','500 1em "Barlow"','400 1em "Roboto"','500 1em "Roboto"'];
var MAIL="mailto:customerservice@mlmbiologics.com";
var K14="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K140456";
var K26="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K260530";
/* Products, from mlmbiologics.com (bio-ConneKt, Developments) and the FDA 510(k) database.
   [name, area, title, status, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["bio-ConneKt<sup>&#174;</sup>","Wound Matrix","Stabilized Type I collagen wound dressing","FDA 510(k) cleared, 2014","For the local management of moderately to heavily exuding wounds, wherever there is a breach of the skin. Sterile, pyrogen-free, stored dry at room temperature with a 6-year shelf life, and assigned CMS HCPCS code Q4161.",0,"On the market",K14,"FDA K140456"],
 ["epi-ConneKt&#8482;","Wound Matrix","Collagen wound dressing","FDA 510(k) cleared, October 2026","Found substantially equivalent by the U.S. FDA on 15 October 2026, as a collagen wound dressing (product code KGN).",0,"Cleared",K26,"FDA K260530"],
 ["In development","Wound care and beyond","Next-generation biologic matrices","Development","Anti-microbial dressings, bio-active matrices for inflammatory and infectious wounds, soft and hard tissue repair, adhesion barriers, and the delivery of autologous and allogeneic growth factors.",1,"Development","",""],
 ["Veterinary","Other markets","Collagen matrices for animal care","Expanding","MLM is also expanding its product line to include veterinary applications.",1,"Veterinary","",""]];
/* For clinicians, as the company states it (bio-ConneKt, Why bio-ConneKt). */
var EVID=[
 ["Broad indications","Acute, chronic, trauma, surgical and burn wounds: full and partial thickness, draining and tunneling wounds, pressure, venous, vascular and diabetic ulcers, skin tears, donor sites and dehisced incisions"],
 ["Simple at the point of use","Stored dry at room temperature, a 6-year shelf life and minimal preparation time, and compatible with combination treatments"],
 ["Reimbursed","CMS HCPCS code Q4161, assigned to the CMS high-cost reimbursement group effective 1 April 2017"],
 ["Sold in the U.S. by BioWound Solutions","Exclusive U.S. sales and marketing rights since December 2023"]];
/* mlmbiologics.com (About us). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Chandra Nataraj, PhD",title:"CEO and CTO",sum:"25 years of translational research, nearly 20 in medical devices; academic appointments at Duke and the University of Nevada School of Medicine, then senior roles at Regeneration Technologies and Pegasus Biologics."},
 {g:"Leadership",name:"Ken Harvey",title:"President",sum:"More than 30 years as a senior medical device sales and marketing executive, with global launches in orthopedic, biologic and small joint devices."},
 {g:"Leadership",name:"Richard Robinson, MS, MBA",title:"Vice President",sum:"More than 30 years in medical device development and manufacturing; helped design and manages MLM’s ISO 13485-certified modular manufacturing facility."},
 {g:"Leadership",name:"Deep Patel",title:"Manager",sum:"Biomedical engineer (UF, 2017); manufacturing, quality control and assurance, document control and supply chain, central to MLM’s ISO and FDA audits."}];
var NEWS=[
 ["15 October 2026","FDA clears epi-ConneKt&#8482; Wound Matrix (510(k) K260530)","U.S. FDA",K26],
 ["1 December 2023","BioWound Solutions acquires exclusive sales and marketing rights to bio-ConneKt<sup>&#174;</sup> Wound Matrix in the United States","BioWound Solutions","https://newsroom.biowound.com/biowound-solutions-acquires-exclusive-license-to-sell-and-market-bio-connekt-from-mlm-biologics"],
 ["4 April 2023","MLM Biologics awarded almost $1.5 million by the U.S. Army Medical Research and Development Command to develop a device to prevent infection in battlefield wounds","Business Wire","https://www.businesswire.com/news/home/20230404005056/en/"],
 ["29 May 2019","MLM Biologics graduates from Sid Martin Biotech","The Gainesville Sun","https://www.gainesville.com/news/20190529/mlm-biologics-graduates-from-sid-martin"]];
var SHEETS=[];
