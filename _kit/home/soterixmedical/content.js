var FONTS=['300 1em "Inter Tight"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:contact@soterixmedical.com";
var PR="https://soterixmedical.com/newsroom/press/";
var SPRY=PR+"2026/03/soterix-medical-announces-clearance-of-spry-transcranial/49";
/* Systems, from soterixmedical.com and its press releases. Regulatory status only as the company states it.
   [system, area, title, status, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["SPRY TMS","Clinical · Depression","Transcranial magnetic stimulation therapy","FDA cleared, March 2026","For adults with major depressive disorder who have not improved enough on prior antidepressant medication in the current episode. Compact and portable, with rapid liquid cooling for continuous operation, an on-device touchscreen and interchangeable coils.",0,"Clinical",SPRY,"Release"],
 ["MEGA-IOM","Clinical · Surgery","Intraoperative neuromonitoring system","FDA 510(k) cleared, July 2024","Integrated control of central and peripheral nervous systems during surgery, with preset MEP, SSEP, EEG and direct stimulation modalities. Cart-based or portable; manufactured in the U.S.",0,"Clinical",PR+"2024/07/soterix-medical-announces-fda-510k-clearance-of/48","Release"],
 ["tDCS-LTE","Clinical · Depression","Limited Total Energy tDCS","FDA IDE for a home-based trial","The only tDCS platform optimized for robust low-energy stimulation, through proprietary adaptive limiting of voltage and power. Depression-LTE is approved by ANVISA in Brazil; in the U.S. it is investigational, and the FDA granted an IDE for a home-based depression trial.",1,"Clinical",PR+"2020/07/fda-grants-soterix-medical-ide-approval-for-home-based/35","IDE release"],
 ["MxN-GO EEG","Research","Wire-free HD-tES and EEG","Launched April 2024","Combined High-Definition transcranial electrical stimulation and EEG in an untethered design: 33 stimulation channels and 32 recording channels, built with mBrainTrain for mobile and natural environments.",1,"Research",PR+"2024/04/soterix-medical-launches-mxn-go-eeg-system-for-wire-free/47","Release"],
 ["REMOTE-tDCS","Research · Home use","Remotely supervised tDCS at home","In the NIH RECOVER-NEURO trial","tDCS-LTE hardware, unique accessories and telemedicine, customized for each clinical indication. Chosen for RECOVER-NEURO, a Phase 2 trial for cognitive symptoms of long COVID run through NYU Langone Health.",1,"Research",PR+"2023/08/soterix-medical-announces-phase-2-trial-to-test-at-home/46","Release"]];
/* Milestones, from Soterix Medical press releases. */
var EVID=[
 ["Founded 2008","To develop HD-tES, the first transcranial system capable of brain targeting with weak electrical stimulation"],
 ["1,200+ centers","Medical centers in the U.S. and worldwide work with Soterix Medical on non-invasive neuromodulation"],
 ["Approvals worldwide","EU CE mark, Health Canada, ANVISA in Brazil and the TGA in Australia, among others"],
 ["Funded research","NIH, DARPA and NASA awards, including an NIH Fast Track grant for parcel-guided rTMS software"]];
/* People named in Soterix Medical press releases (2023 to 2026), with the titles those releases give. */
var TEAM=[
 {g:"Leadership",name:"Abhishek Datta, PhD",title:"Chief Executive Officer, Co-Founder",sum:"Co-inventor of HD-tDCS. Previously the company's Chief Technology Officer."},
 {g:"Leadership",name:"Kamran Nazim",title:"Chief Product Officer",sum:"Speaks for the product line in the SPRY TMS (2026) and MEGA-IOM (2024) releases."},
 {g:"Leadership",name:"Gina Polack",title:"VP of Regulatory Affairs",sum:"Speaks for the 2026 FDA clearance of SPRY TMS Therapy for major depression."}];
var NEWS=[
 ["5 March 2026","Soterix Medical announces clearance of SPRY Transcranial Magnetic Stimulation (TMS) Therapy for the treatment of major depression","Press release",SPRY],
 ["24 July 2024","Soterix Medical announces FDA 510(k) clearance of MEGA-IOM intraoperative neuromonitoring system","Press release",PR+"2024/07/soterix-medical-announces-fda-510k-clearance-of/48"],
 ["30 April 2024","Soterix Medical launches MxN-GO EEG system for wire-free HD-tES and EEG","Press release",PR+"2024/04/soterix-medical-launches-mxn-go-eeg-system-for-wire-free/47"],
 ["28 August 2023","Phase 2 trial to test at-home tDCS paired with cognitive training as a therapeutic option for long COVID","Press release",PR+"2023/08/soterix-medical-announces-phase-2-trial-to-test-at-home/46"],
 ["8 May 2023","Soterix Medical announces patient recruitment for parcel-guided rTMS depression trial","Press release",PR+"2023/05/soterix-medical-announces-patient-recruitment-for/45"]];
var SHEETS=[];
