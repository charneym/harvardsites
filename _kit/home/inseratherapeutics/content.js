var FONTS=['300 1em "Archivo"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','400 1em "Arimo"','700 1em "Arimo"','italic 400 1em "Source Serif 4"'];
var MAIL="info@inseratherapeutics.com";
var PR26="https://www.biospace.com/press-releases/insera-therapeutics-inc-receives-u-s-fda-510k-clearance-for-the-clear-aspiration-system-featuring-cyclical-aspiration";
var FDA="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K253404";
/* technology: cyclical aspiration, from the company's press releases (2019 CE Mark and first-patient releases; September 2026 510(k) release). [feature, figure, detail, url] */
var TECH=[
 ["Cyclical aspiration","Varied pressure and intervals","Rather than holding one static vacuum, the CLEAR pump varies its suction pressures and intervals within a safe range, with the explicit goal of increasing first-pass recanalization.","https://www.biospace.com/insera-earns-ce-mark-approval-for-cyclical-suction-stroke-thrombectomy-platform-the-clear-aspiration-system"],
 ["Three modes","Cyclical · uniform · blood saver","One digital platform delivers cyclical, uniform or blood saver aspiration; blood saver is itself a form of cyclical vacuum aspiration.",PR26],
 ["Deep vacuum","Up to −98.2 kPa (−29 inHg)","The digital vacuum aspiration system can deliver uniform or cyclical suction at pressures up to −98.2 kPa.","https://www.biospace.com/insera-announces-first-two-stroke-patients-treated-with-its-cyclical-aspiration-system-clear"],
 ["Whole-clot ingestion","Published, 2019","A study cited by the company (Arslanian et al., Journal of NeuroInterventional Surgery, 2019) found that complete clot ingestion with cyclical aspiration increased first-pass recanalization and reduced clot fragmentation, compared with static aspiration.","https://www.biospace.com/insera-earns-ce-mark-approval-for-cyclical-suction-stroke-thrombectomy-platform-the-clear-aspiration-system"],
 ["Patent estate","108 filings · 100 issued or allowed","Patents on cyclical aspiration, with priority claimed back to 2013, including U.S. Patent No. 12,478,390 and European Patent No. 3,620,203.",PR26]];
/* the CLEAR Aspiration System as cleared (510(k) K253404). [component, kind, detail] */
var SYS=[
 ["CLEAR™ Aspiration Pump","Reusable","The digital pump at the heart of the platform: it delivers cyclical, uniform and blood saver aspiration."],
 ["INSERA™ Catheter","Single use","The aspiration catheter, used with cyclical aspiration on the CLEAR pump."],
 ["INSERA™ Aspiration Tubing","Single use","Connects the catheter to the pump."],
 ["INSERA™ Canister","Single use","The collection canister for aspirated material, supplied with non-sterile tubing."]];
/* regulatory and clinical milestones. [title, date, detail, url] */
var MIL=[
 ["U.S. FDA 510(k) clearance","June 2026 · K253404","Cleared for the removal of fresh, soft emboli and thrombi from vessels of the peripheral arterial and venous systems, supported by design verification, usability, electrical safety, EMC, software, sterilization, packaging, biocompatibility and GLP in vivo studies.",FDA],
 ["First pulmonary embolism patient","December 2019","The first patient with acute pulmonary embolism was treated with CLEAR at Sisters of Charity Hospital in Zagreb, Croatia, where blood-thinning treatments were contraindicated.","https://evtoday.com/news/first-patient-with-pulmonary-embolism-treated-with-inseras-clear-aspiration-system"],
 ["First stroke patients","October 2019","The first two ischemic stroke patients were treated with CLEAR in Zagreb; in the first, cyclical aspiration as the primary therapy achieved first-pass eTICI 3 within six minutes.","https://www.biospace.com/insera-announces-first-two-stroke-patients-treated-with-its-cyclical-aspiration-system-clear"],
 ["CE Mark","March 2019","Approval in the European Union for the CLEAR Aspiration System, a cyclical-suction thrombectomy platform.","https://www.biospace.com/insera-earns-ce-mark-approval-for-cyclical-suction-stroke-thrombectomy-platform-the-clear-aspiration-system"],
 ["National Science Foundation SBIR grant","October 2018 · $221,700","Awarded for research and development on Insera’s stroke solution, including the CLEAR Aspiration System.","https://www.biospace.com/insera-therapeutics-awarded-competitive-grant-from-the-national-science-foundation"]];
var LEAD=["Vikram Janardhan · Chief Executive Officer","Vallabh Janardhan, MD, FAHA · Chief Medical Officer"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","Insera’s CLEAR aspiration system cleared by FDA","Endovascular Today","https://evtoday.com/news/inseras-clear-aspiration-system-cleared-by-fda"],
 ["September 2026","Insera Therapeutics receives U.S. FDA 510(k) clearance for the CLEAR™ Aspiration System featuring cyclical aspiration","BioSpace","https://www.biospace.com/press-releases/insera-therapeutics-inc-receives-u-s-fda-510k-clearance-for-the-clear-aspiration-system-featuring-cyclical-aspiration"],
 ["December 2019","First patient with pulmonary embolism treated with Insera’s CLEAR aspiration system","Endovascular Today","https://evtoday.com/news/first-patient-with-pulmonary-embolism-treated-with-inseras-clear-aspiration-system"],
 ["October 2019","First two stroke patients treated with the cyclical aspiration system, CLEAR","BioSpace","https://www.biospace.com/insera-announces-first-two-stroke-patients-treated-with-its-cyclical-aspiration-system-clear"],
 ["April 2019","CE Mark approval for the cyclical-suction stroke thrombectomy platform, the CLEAR Aspiration System","BioSpace","https://www.biospace.com/insera-earns-ce-mark-approval-for-cyclical-suction-stroke-thrombectomy-platform-the-clear-aspiration-system"]];
var SHEETS=[];
