var FONTS=['400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','700 1em "Archivo"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"','400 1em "Belleza"'];
var MAILA="info@nkabio.com";
var MAIL="mailto:"+MAILA;
var LI="https://www.linkedin.com/company/nkabio";
/* Pipeline, from nkabio.com (Pipeline table and Solution). Stages as the table draws them. [code, stage, indication, partner, detail, dim, tag] */
var PIPE=[
 ["NKA01","Preclinical","Trauma resuscitation","Partner · US Air Force (SBIR support)","The lead programme: an antibody in a prefilled syringe for injection by EMS at the point of injury, to stabilise the patient for transport. Proof of concept in vivo with a prototype; lead candidate selected.",0,"Lead programme"],
 ["NKA02","Preclinical","Sepsis","Partner · US Air Force (customer memorandum in place)","The second programme in NKA Bio&#8217;s shock pipeline.",1,"Shock pipeline"],
 ["NKA03","In silico","ALI / ARDS","Acute lung injury and acute respiratory distress syndrome","An early programme in the shock pipeline.",1,"Shock pipeline"],
 ["NKA04","In silico","Heart attack resuscitation","Early programme","An early programme in the shock pipeline.",1,"Shock pipeline"]];
/* nkabio.com (Team). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Founders",name:"Lewis C. Hibbs III",title:"Co-Founder & CEO",sum:"Developed NKA Bio’s Smol mAb Platform, which fuels its antibody discovery; leads R&D and runs the company day to day; PI on more than $1.3M in DoD contracts advancing the pipeline."},
 {g:"Founders",name:"Susan Gann Hibbs",title:"Co-Founder & Executive Chair",sum:"Leads the vision of the company as Chairwoman; works with key advisors to guide pipeline strategy, and supports finance and human resources day to day."},
 {g:"Founders",name:"Donald S. Gann, MD (1932–2020)",title:"Scientific Founder",sum:"First Director of Emergency Medicine at Johns Hopkins and first Chair of Biomedical Engineering at Case Western Reserve; 18th President of the American Association for the Surgery of Trauma; more than 250 peer-reviewed papers, the work behind NKA Bio’s shock pipeline."},
 {g:"Research",name:"Elizabeth Zuerblis, MSE",title:"Research Associate",sum:"Bioengineering."},
 {g:"Research",name:"Michael Sweet, MSE",title:"Research Associate",sum:"Process engineering."},
 {g:"Clinical advisors",name:"Ernest E. Moore, MD",title:"Trauma & Clinical Trials",sum:"Clinical advisor for trauma and clinical trials."},
 {g:"Clinical advisors",name:"Jack Ingari, MD",title:"Military Medicine",sum:"Clinical advisor for military medicine."}];
/* nkabio.com (News & Media); each links to the original. [outlet, title, kind, url] */
var NEWS=[
 ["EIN Presswire · Nov 2025","NKA Bio awarded a $1.25M Air Force SBIR contract to advance a lifesaving treatment for hemorrhagic shock","Release","https://www.einpresswire.com/article/868019497/nka-bio-inc-is-awarded-1-25m-afwerx-sbir-phase-ii-contract"],
 ["Big Ideas Welcome","Podcast: Lewis Hibbs of NKA Bio","Listen","https://knoxec.com/big-ideas-welcome-podcast/"],
 ["Teknovation","NKA Bio has a treatment that it says can press pause on death","Read","https://www.teknovation.biz/nka-bio-has-a-treatment-that-it-says-can-press-pause-on-death/"],
 ["Teknovation","Techstars Industries of the Future Demo Day, in pictures","Read","https://www.teknovation.biz/techstars-industries-of-the-future-demo-day-in-pictures/"],
 ["Techstars","Techstars Industries of the Future Accelerator announces its class of 2024","Read","https://www.techstars.com/newsroom/techstars-industries-of-the-future-accelerator-announces-class-of-2024"]];
var SHEETS=[];
