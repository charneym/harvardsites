var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','400 1em "Montserrat"','500 1em "Montserrat"'];
var MAIL="info@senphonix.com";
/* funded programmes (senphonix.com Partners; PR Newswire 2026-09-10 and 2026-10-13; NIH RePORTER 1R43HL184398-01; Healthcare IT Today 2025-12-02). [who, what, detail, label, url] */
var PROG=[
 ["NSF · STTR Phase I","Wireless and radio-frequency systems","National Science Foundation award 2537968, with the University of Arizona: strengthening SleeveSense’s wireless and radio-frequency systems and moving the device from prototype toward manufacturing at scale.","PR Newswire","https://www.prnewswire.com/news-releases/senphonix-receives-national-science-foundation-grant-to-advance-sleevesense-a-continuous-long-term-vitals-monitoring-platform-302874427.html"],
 ["NIH · NHLBI · SBIR Phase I","Clinical testing of the software platform","National Heart, Lung, and Blood Institute award R43HL184398: testing the software stack in a clinical environment, scaling the cloud and database, and cybersecurity work toward SOC 2 Type II readiness.","NIH RePORTER","https://reporter.nih.gov/project-details/11312080"],
 ["Arizona Commerce Authority","WearTech Applied Research Center","Matching grant funding through Arizona’s Partnership for Economic Innovation backed earlier design work and supports Arizona-based development of the platform.","Healthcare IT Today","https://www.healthcareittoday.com/2025/12/02/senphonix-receives-200k-katalyst-co-raises-10m-honey-health-raises-7-8m/"]];
/* path to market (PR Newswire 2026-09-10 and 2026-10-13; senphonix.com) */
var PATH=[
 ["Status","Investigational device. SleeveSense is not FDA-cleared or approved and is not available for sale"],
 ["Clinical study","Expected to begin in late 2026 or early 2027"],
 ["Regulatory","FDA 510(k) clearance to be sought in early to mid-2027"],
 ["Model","A fixed per-patient subscription with no capital outlay, billed only once a sleeve is assigned to a patient"]];
/* senphonix.com Team; PR Newswire 2026-09-10 and 2026-10-13. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founders",name:"Mike Haldane",title:"Co-Founder and Co-CEO",sum:"Co-founded Senphonix with John Grant after years of working together at 3M. Principal investigator on the company’s NIH award."},
 {g:"Founders",name:"John Grant, PhD",title:"Co-Founder and Co-CEO",sum:"Co-founded Senphonix with Mike Haldane after years of working together at 3M."},
 {g:"Engineering and operations",name:"Dr. Philipp Gutruf",title:"Biomedical engineering",sum:"Associate Professor of Biomedical Engineering at the University of Arizona. The Gutruf Lab invented the core technology and brings its expertise in biosymbiotic electronics."},
 {g:"Engineering and operations",name:"Wayne Metcalfe",title:"Supply chain and manufacturing",sum:"Leads supply chain and the scale-up of manufacturing."},
 {g:"Advisors",name:"Mark Koppel, MD",title:"Advisor, founding member",sum:"Advises on driving adoption in clinical environments."},
 {g:"Advisors",name:"Scott Kulstad",title:"Advisor",sum:"Health system executive. Advises on healthcare policy and regulatory relations."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","Senphonix receives National Institutes of Health grant to advance SleeveSense","PR Newswire","https://www.prnewswire.com/news-releases/senphonix-receives-national-institutes-of-health-grant-to-advance-sleevesense-a-continuous-long-term-vitals-monitoring-platform-302906600.html"],
 ["2026","Senphonix receives NIH grant to advance SleeveSense continuous vitals monitoring platform","BioSpace","https://www.biospace.com/press-releases/senphonix-receives-national-institutes-of-health-grant-to-advance-sleevesense-a-continuous-long-term-vitals-monitoring-platform"],
 ["September 2026","Senphonix receives National Science Foundation grant to advance SleeveSense","PR Newswire","https://www.prnewswire.com/news-releases/senphonix-receives-national-science-foundation-grant-to-advance-sleevesense-a-continuous-long-term-vitals-monitoring-platform-302874427.html"],
 ["2026","Senphonix secures NSF grant for SleeveSense wearable development","Medical Device Network","https://www.medicaldevice-network.com/news/senphonix-nsf-grant-sleevesense-wearable/"],
 ["December 2025","Senphonix receives $200k funding through WearTech Applied Research Center","Healthcare IT Today","https://www.healthcareittoday.com/2025/12/02/senphonix-receives-200k-katalyst-co-raises-10m-honey-health-raises-7-8m/"]];
var SHEETS=[];
