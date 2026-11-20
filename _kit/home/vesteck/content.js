var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"'];
var WEB="https://www.vesteck.com/";
var MAIL="kenneth.stalker@vesteck.com";
var LI="https://www.linkedin.com/company/vesteck-inc/";
/* the system, from vesteck.com/the-product */
var SYS=[["The delivery system","Physician designed","The Suture-Tight™ catheter was conceived by physicians to fit effortlessly into the current workflow, and delivers pre-loaded sutures at the initial implant or at a repair procedure."],
 ["The implant","Designed to suture","The Suture-Tight™ suture is made from nitinol to behave like a surgeon’s suture, each endosuture working as a pair of surgical sutures."],
 ["The procedure","Fast, precise, repositionable","Sutures deploy precisely and rapidly, and can be retracted and repositioned if necessary. A single insertion can implant up to four sutures."]];
/* the clinical path, from vesteck.com/about, /news and the company's releases */
var PATH=[
 ["Oct 2021","R&D and manufacturing","Vesteck opens its R&D and manufacturing facility in Carlsbad, California.",""],
 ["2022","Pre-clinical programme","The first pre-clinical study with Suture-Tight™ in February; the fifteenth completed in December.",""],
 ["Feb 2023","First in human","First-in-human use of Suture-Tight™ in Latvia, EU.","https://evtoday.com/news/vestecks-suture-tight-catheter-for-evar-used-in-first-in-human-procedures"],
 ["Feb 2024","Fourteen clinical cases","Cases completed in Canada, Latvia and Australia.",""],
 ["Sep 2025","NIH Direct to Phase II SBIR","The NHLBI awards a $1.98M grant over two years (R44HL178318) for pre-market development and clinical validation.","https://reporter.nih.gov/project-details/11185822"],
 ["Feb 2026","Two-year results","Two-year follow-up of the 14 first-in-human patients: no graft migration, no suture fractures, no evidence of endoleaks.","https://www.vesteck.com/_files/ugd/544b7a_6465713ee0374de2949d59c894b1caa9.pdf"],
 ["Next","IDE and pivotal trial","The SBIR funding supports obtaining FDA approval of an Investigational Device Exemption and conducting a pre-market pivotal trial, to clinically validate Suture-Tight™ for FDA 510(k) clearance.",""]];
var TEAM=[
 {g:"Leadership",name:"Joseph W. Rafferty",title:"Chief Executive Officer",sum:""},
 {g:"Leadership",name:"Kent Stalker",title:"COO, VP R&D",sum:"Principal Investigator on the NIH SBIR award"},
 {g:"Leadership",name:"Ted Wulfman",title:"Chief Technology Officer",sum:""},
 {g:"Leadership",name:"Terrie Heidemann",title:"Senior Director",sum:"Regulatory Affairs and Quality Assurance"},
 {g:"Founders",name:"Dr. John Edoga",title:"General Surgeon",sum:"42 patents"},
 {g:"Founders",name:"Dr. Thierry Richard",title:"CT Surgeon",sum:"Red Cross Hospital, Paris, France"},
 {g:"Board",name:"Steve O’Hara",title:"Chairman of the Board",sum:""}];
/* global scientific advisory board, as listed on vesteck.com/the-team */
var SAB=[["Dr. Sean Lyden","Chief Medical Consultant; Chair of Department, Vascular Surgery, Cleveland Clinic"],
 ["Dr. Venkatesh Ramaiah","Chief/Network Director, Complex Vascular Services, Honor Health"],
 ["Dr. Daniel Clair","Vanderbilt University"],
 ["Dr. Dai Yamanouchi","Fujita University Hospitals"],
 ["Dr. Andrew Holden","Director of Northern Region, Interventional Radiology Service, New Zealand"],
 ["Prof. Dainis Krievins","Professor, Director, Institute of Research, P. Stradins University Hospital, Latvia"],
 ["Dr. William Gray","System Chief, Division of Cardiovascular Health, Main Line Health"],
 ["Dr. Bao Bui","Endovascular Intervention, University of Sherbrooke, Quebec"],
 ["Dr. Sukgu Han","Chief of the Division, USC"],
 ["Prof. Michel Reijnen","Endovascular Imaging and Innovation, University of Twente, Netherlands"],
 ["Prof. Ramon Varcoe","Director of Surgery, Anesthetics and Perioperative Medicine, Sydney"]];
var NEWS=[
 ["19 Feb 2026","Vesteck announces the collection of two-year first-in-human results for the Suture-Tight™ endovascular repair catheter","Press release","https://www.vesteck.com/_files/ugd/544b7a_6465713ee0374de2949d59c894b1caa9.pdf"],
 ["23 Sep 2025","Vesteck receives a Direct to Phase II SBIR grant from the National Institutes of Health","Press release","https://www.vesteck.com/_files/ugd/544b7a_67c5298a9e21419fb9f7994bbc044e72.pdf"],
 ["27 Jun 2025","Vesteck aims to turn aneurysm surgery into a one-and-done procedure","Technical.ly","https://technical.ly/startups/vesteck-aortic-repair-innovation-medtech/"],
 ["14 Sep 2024","The Memo: Vesteck revolutionizing endovascular aortic repair","LSI","https://www.lifesciencemarketresearch.com/insights/the-memo-vesteck-revolutionizing-endovascular-aortic-repair"],
 ["20 Mar 2023","Vesteck’s Suture-Tight™ catheter for EVAR used in first-in-human procedures","Endovascular Today","https://evtoday.com/news/vestecks-suture-tight-catheter-for-evar-used-in-first-in-human-procedures"]];
var SHEETS=[];
