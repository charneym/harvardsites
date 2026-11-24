/* Quality Electrodynamics (QED): facts from qedinnovations.com (Welcome, CEO, Products & Manuals, Patents, News, Contact),
   FDA 510(k) records K244054, K242006, K233656, K233652 and K223429, NIH RePORTER (EB007094; contracts 268201300034C and
   268201500002C) and Siemens Healthineers product pages. Real characters only, never HTML entities (DU).
   Product rows: [name, status, title, sub, detail, dim, tag, link, linklabel] */
var FDA="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=";
var PROD=[
 ["SureWave™","FDA 510(k) · 2025","SureWave™ Elastography","MR elastography for multiple scanners","A portable elastography device built around a novel, patented gravitational-based (non-pneumatic) patient transducer, so it can move between MR scanners. Pioneered at King’s College London with INSERM LVTS, Paris, under an EU Horizon 2020 project.",0,"",FDA+"K242006","FDA K242006"],
 ["Flex SPEEDER","FDA 510(k) · 2025","16-channel flexible body arrays","Medium and Large, 1.5 T","Receive-only 16-channel flexible coils in two sizes, cleared by the FDA in February 2025 for use with Canon MR systems.",0,"",FDA+"K244054","FDA K244054"],
 ["Contour","FDA 510(k) · 2023–2024","Knee, shoulder and hand/wrist","Articulating g-ZERO elements","The Contour family wraps coil elements close to the anatomy. Contour Shoulder and Contour Hand/Wrist were cleared in February 2024, Contour Knee in January 2023.",0,"",FDA+"K233656","FDA K233656"],
 ["7 T","Ultra-high field","Knee and hand-wrist at 7 tesla","Up to 8 transmit and 30 receive channels","QED builds transmit-receive arrays for ultra-high-field research and clinical systems, among them the 7T 8Tx30Rx Knee and the 7T 8pTx/24Rx Hand-Wrist.",1,"Siemens Healthineers","https://www.siemens-healthineers.com/en-us/magnetic-resonance-imaging/options-and-upgrades/coils/qed-knee-coil","Product page"]];
/* quality and research credentials, from qedinnovations.com */
var EVID=[
 ["Quality system","ISO 13485:2016 certified by BSI (FM 702781), with an MDSAP certificate (683565), both renewed in 2025"],
 ["Manufacturing","A 77,000-square-foot innovation and manufacturing center at 6655 Beta Drive, Mayfield Village"],
 ["Research","The QED Research Center, opened in 2017, for collaborative work with the clinical and scientific community"],
 ["Ownership","A consolidated subsidiary of Canon Inc. since 2019, keeping its name, identity and home in Mayfield Village"]];
var TEAM=[
 {g:"Leadership",name:"Hiroyuki Fujita, PhD",title:"Founder and CEO",sum:"A research physicist who founded QED in 2006 after a career in MRI RF coil research and product development for the major MRI makers. Author of 17 patents and more than 40 papers and abstracts, a Senior Fellow of the ISMRM and adjunct professor of physics and radiology at Case Western Reserve University. Also Chief Technology Officer of Canon Medical Systems’ CT-MR Division, Chairman of Canon Healthcare USA and Honorary Consul of Japan in Cleveland."}];
var VALUES=["Purpose","Integrity","Attitude","Accountability","Harmony","Innovation"];
var NEWS=[
 ["28 Feb 2025","FDA clears the 16-channel Flex SPEEDER Medium and Large coils at 1.5 T","U.S. FDA",FDA+"K244054"],
 ["12 Feb 2025","FDA clears SureWave™ Elastography","U.S. FDA",FDA+"K242006"],
 ["7 Aug 2024","QED announces its 510(k) submission for SureWave™ Elastography for MR systems","QED","https://qedinnovations.com/qed-surewave-elastography-for-magnetic-resonance-systems-fda-submission-announcementland-clinic-foundation/"],
 ["31 Oct 2019","Canon Inc. acquires a 70% interest in QED, which keeps its name and home in Mayfield Village","QED","https://qedinnovations.com/canon-inc-acquires-qed-majority-interest/"],
 ["23 May 2019","QED receives the President’s “E Star” Award for excellence in exporting","QED","https://qedinnovations.com/qed-receives-presidents-e-star-award-excellence-exporting/"]];
var SHEETS=[];
