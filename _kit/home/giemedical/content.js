var FONTS=['500 1em "Jost"','600 1em "Jost"','400 1em "Nunito Sans"','600 1em "Nunito Sans"'];
var WEB="https://www.giemedical.com/";
var MAIL="clinicalstudy@giemedical.com";
/* facts: giemedical.com (home, leadership, news, careers, contact) and its news posts of 2022-12-13 (PATENT-E and PATENT-B
   launched), 2023-06-06 (FDA Breakthrough Device Designation), 2023-12-08 (PATENT-E first patient), 2023-12-19 (iGIE, INGEST
   study), 2024-04-18 (PATENT-B first patient); FDA 510(k) K253987 (BARE wireguided balloon dilation catheter, decision
   2026-03-13). Fetched 2026-11-23. */
var LEAD=[
 {name:"Lixiao Wang, PhD",title:"Founder & Chief Executive Officer"},
 {name:"Ian Schorn",title:"Chief Operating Officer"},
 {name:"James Ness",title:"Chief Financial Officer"}];
var VPS=[
 {name:"Harrison Malinoff",title:"VP of Operations and Quality"},
 {name:"Dave Hendrickson",title:"VP of Research & Development"},
 {name:"Drew McClure",title:"VP of Market Development"}];
var TRIALS=[
 ["Esophagus","PATENT-E","Randomized against standard endoscopic dilation in benign esophageal strictures. It compares patients with improved swallowing and no clinically driven repeat intervention at 6 months, and major adverse events through 30 days.","First patient enrolled December 2023"],
 ["Bowel","PATENT-B","Randomized against standard endoscopic dilation in benign strictures of the small intestine, colon and rectum. It compares anatomic success at 6 months: a pediatric colonoscope passing through the treated area without significant resistance.","First patient enrolled April 2024"],
 ["Esophagus","INGEST","The development of the ProTractX3 DCB and its initial clinical experience in benign, difficult esophageal strictures, published in iGIE.","iGIE, December 2023"],
 ["Dilation","BARE balloon dilation catheter","A wireguided balloon dilation catheter, cleared by the FDA through 510(k) K253987.","FDA decision March 2026"]];
var NEWS=[
 ["18 Apr 2024","First patient enrolled in the PATENT-B benign bowel stricture treatment study","news/gie-medical-announces-first-patient-enrolled-in-patent-b-benign-bowel-stricture-treatment-study"],
 ["19 Dec 2023","From iGIE: GIE Medical’s drug-coated balloon for esophageal strictures shows promising results","news/from-igie---gie-medical%27s-drug-coated-balloon-for-esophageal-strictures-shows-promising-results"],
 ["8 Dec 2023","First patient enrolled in the PATENT-E benign esophageal stricture treatment study","news/gie-medical-announces-first-patient-enrolled-in-patent-e-benign-esophageal-stricture-treatment-study"],
 ["6 Jun 2023","FDA Breakthrough Device Designation for the multi-stage drug-coated balloon in esophageal strictures","news/gie-medical-granted-fda%27s-breakthrough-device-designation-for-multi-stage-drug-coated-balloon-to-treat-esophageal-strictures"],
 ["13 Dec 2022","Two clinical trials launched for the multi-stage drug-coated balloon in esophageal and bowel strictures","news/gie-medical-launches-two-clinical-trials-to-investigate-use-of-a-multi-stage-drug-coated-balloon-in-esophageal-and-bowel-strictures"]];
var SHEETS=[];
