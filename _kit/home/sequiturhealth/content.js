var FONTS=['300 1em "Jost"','400 1em "Jost"','500 1em "Jost"','italic 300 1em "Jost"','400 1em "Open Sans"','500 1em "Open Sans"','600 1em "Open Sans"'];
var WEB="https://sequiturhealth.com/";
var MAIL="purchasing@sequiturhealth.com";
var RPT="https://reporter.nih.gov/project-details/11415774";
/* facts: sequiturhealth.com (home mission, AMGO page), NIH RePORTER (SB1HD116629, R44HD112243, R44HD107897 abstracts and award
   amounts), NSF awards 1914240 and 2111884 (abstracts and project outcomes reports); all fetched 2026-11-21 */
var SYS=[["Whole blood","No centrifuge, no plasma","Measured directly in whole blood, at the point of care, instead of in plasma separated in a clinical laboratory."],
 ["Sensor materials","Specific and sensitive","Chemically modified sensing materials eliminate blood components that would confound the sensor, with more surface area for a faster response."],
 ["At home","Where crises begin","A home device lets patients and caregivers check the metabolite themselves and act early with their medical team."]];
var PRODUCTS=[
 ["NIH R44HD107897 · NSF","Whole-blood point-of-care measurement","A sensor and reader that measure the metabolite directly in a single drop of whole blood. With Arizona State University and Mayo Clinic, a process to mass-produce the sensors and validate them for FDA 510(k) clearance.","https://reporter.nih.gov/project-details/10691330"],
 ["NIH R44HD112243","Home monitoring of metabolic disorders","A clinical study of daily at-home measurement in participants at risk of elevated metabolite levels, recruited at Oregon Health & Science University: the first time the metabolite is measured at home in this population.","https://reporter.nih.gov/project-details/11182502"],
 ["NIH SB1HD116629","Commercialization readiness","A Commercialization Readiness Pilot for late-stage software, hardware manufacturing and regulatory work to bring the at-home in vitro diagnostic to market.",RPT],
 ["Research use only","AMGO™","Research-use-only measurement of ammonium in low-volume biological samples, for laboratories. Contact Sequitur for performance data or a quote.","https://sequiturhealth.com/amgo"]];
var TEAM=[
 {g:"Founders",name:"Marylaura Lind Thomas",title:"Co-Founder, COO",sum:"Principal investigator on Sequitur’s NIH and NSF awards; professor of chemical engineering at Arizona State University."},
 {g:"Founders",name:"Leslie Thomas",title:"Co-Founder, Chief Medical Officer",sum:"Co-founder of Sequitur Health and its Chief Medical Officer."}];
var NEWS=[
 ["Aug 2026","NIH NICHD continues the SBIR Commercialization Readiness Pilot for whole-blood point-of-care metabolic measurement, with $1,000,001 for the year","NIH RePORTER",RPT],
 ["May 2026","NSF Phase II outcomes: a design-locked instrument, built under a compliant quality system, passes safety and essential performance testing at an FDA ASCA-accredited laboratory","NSF","https://www.nsf.gov/awardsearch/show-award?AWD_ID=2111884"],
 ["Sep 2025","NIH continues the SBIR Phase II award for home monitoring of metabolic disorders, with $799,231","NIH RePORTER","https://reporter.nih.gov/project-details/11182502"],
 ["Sep 2024","NIH NICHD awards Sequitur Health a $1,000,000 Commercialization Readiness Pilot to bring the at-home device to market","NIH RePORTER","https://reporter.nih.gov/project-details/11008473"]];
var SHEETS=[];
