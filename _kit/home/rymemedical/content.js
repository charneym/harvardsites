var FONTS=['400 1em "Jost"','500 1em "Jost"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:info@rymemedical.com";
var CT1="https://clinicaltrials.gov/study/NCT07361653",CT0="https://clinicaltrials.gov/study/NCT05967091";
/* Clinical programme, from ClinicalTrials.gov (NCT07361653, NCT05967091) and the HRA research summary (REC 24/SC/0123).
   [study, kind, title, design, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["REVIVE","Pivotal study","The REVIVE Pivotal Study","Randomized · double blind · sham controlled","A prospective, global, multicenter study of the safety and effectiveness of the Ryme Medical TLD Catheter in patients with moderate and severe symptomatic COPD, with an estimated 300 participants.",0,"Pivotal",CT1,"NCT07361653"],
 ["Pilot","First in human","Ryme Medical TLD Pilot Study","Prospective · multicenter · non-randomized","The first study of the Ryme Medical Lung Denervation System in patients with COPD, evaluating safety and performance at sites in Australia, Austria, Denmark, Georgia, the Netherlands and the United Kingdom.",1,"Pilot",CT0,"NCT05967091"]];
var EVID=[
 ["Bench and animal testing","The Ryme Medical Lung Denervation System has undergone extensive bench-top testing and has been used in animal models with lung structures similar to humans"],
 ["First in human, 2024","The pilot study began in March 2024 and evaluates safety and performance in patients with COPD"],
 ["Pivotal study registered","REVIVE was first posted on ClinicalTrials.gov in January 2026 and compares TLD with a sham procedure"],
 ["Investigational device","Limited by Federal (or United States) law to investigational use"]];
/* rymemedical.com (Team). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Paul Andreotti",title:"President & CEO",sum:"A 30-year career bringing life-saving products to patients, including more than 20 years in leadership roles at Medtronic in product development, operations and business integration."},
 {g:"Leadership",name:"Katie Miyashiro",title:"Vice President of R&D",sum:"Nearly two decades of design, rapid program management and clinical support across orthopedic, neurovascular and cardiovascular therapies."},
 {g:"Leadership",name:"Jay Donosky",title:"Senior Director of Clinical Affairs",sum:"Has run first-in-man, early feasibility, pivotal and post-market studies across Class III medical devices and biopharma, including at W.L. Gore and Edwards Lifesciences."},
 {g:"R&D and quality",name:"Emily Schoenhoff",title:"Principal R&D Engineer",sum:"Ryme&#8217;s technology lead, with a decade across every phase of medical device design, including several commercialized catheter-based therapies."},
 {g:"R&D and quality",name:"Nrupen Zaver",title:"Senior R&D Engineer",sum:"Product, process and test method development, with prior roles focused on catheter-based therapies."},
 {g:"R&D and quality",name:"Austin Haynes",title:"Senior R&D Engineer",sum:"Design, prototyping, testing and optimization for manufacturing of the therapeutic system; previously in orthopedics and catheter-based heart valves."},
 {g:"R&D and quality",name:"Haydee Martinez",title:"Principal Quality Technician",sum:"Almost 20 years in medical device design and manufacture: inspection, test method development and document control."}];
/* rymemedical.com (Partners) */
var PARTNERS=[
 ["Santé Ventures","Investor","Austin, TX · Boston, MA","A specialized healthcare and life sciences investment firm, founded in 2006, investing in early-stage medical technologies, biotechnologies and digitally enabled healthcare services.","https://www.sante.com","sante.com"],
 ["Seroba","Investor","Dublin · Paris · Milan","A European life sciences venture capital firm backing biotech and medtech innovation that addresses unmet medical needs.","https://www.serobavc.com","serobavc.com"],
 ["Epidarex","Investor","Transatlantic","A venture capital firm known for building breakthrough life sciences companies in emerging hubs.","https://www.epidarex.com","epidarex.com"],
 ["Fogarty Innovation","Advisor","Silicon Valley","The leading MedTech educational incubator, led by entrepreneurs and executives with decades of experience bringing new technologies to market.","https://www.fogartyinnovation.org","fogartyinnovation.org"]];
var SHEETS=[];
