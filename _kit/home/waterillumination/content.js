/* Water Illumination Inc.: facts from waterillumination.com (home, What are PFAS?, Our Technology, Markets, Products,
   Services, Team, News) and the NSF award record 2538137. Real characters only, never HTML entities (DU).
   Product rows: [name, stage, title, sub, detail, dim, tag, link, linklabel] */
var WN="https://waterillumination.com/news/";
var PIPE=[
 ["GEN 1","Field-proven","40 gallons per day per unit","~$0.10 per gallon","Fully remote and automated, lightweight and easy to install. In a six-week municipal groundwater pilot with the Orange County Water District it degraded PFAS, including PFOA and PFOS, to non-detectable levels.",0,"",WN+"blog-post-title-one-lelbk","Pilot results"],
 ["GEN 2","Next generation","40,000 gallons per day per unit","~$0.0002 per gallon","An inline flow-through system engineered for higher throughput and enhanced automation, with a compact footprint for easy integration. Field demonstrations are planned for 2026.",0,"",NSF,"NSF Phase II"],
 ["Service","Sample testing","Treatability tests on your own water","Lab validation","An initial treatability test using your own water sample, giving you clear insight into how effectively our technology removes PFAS.",1,"On request","",""],
 ["Service","Pilot deployments","Modular pilot systems on site","Field-scale implementation","Deployment-ready for treatment plants, remediation sites and industrial facilities, integrated into your existing operations with no major infrastructure changes.",1,"On request","",""]];
/* who it serves, from waterillumination.com (Markets) */
var EVID=[
 ["Municipal utilities","Plug-and-play for existing infrastructure, as strict EPA limits demand destruction beyond filtration"],
 ["Industrial facilities","On-site destruction of PFAS in process water and discharge, from chemical plants to paper mills"],
 ["Airports, military and federal sites","Treatment of runoff and groundwater left by decades of firefighting foam (AFFF)"],
 ["Private wells and rural communities","Decentralised systems for safe, affordable cleanup near industrial or military sites"]];
var TEAM=[
 {name:"Dr. Xuejun Yu",title:"CEO & Founder",img:"t-yu.webp",sum:"Experienced entrepreneur with a track record in startup leadership, SBIR-funded commercialisation and M&A execution."},
 {name:"Dr. Haizhou Liu",title:"Co-Founder & CTO",img:"t-liu.webp",sum:"Licensed PE and UC Riverside professor with 15+ years of experience in water and wastewater treatment commercialisation."},
 {name:"Dr. Ted Mao",title:"Technical Advisor",img:"t-mao.webp",sum:"Former CTO of Trojan Technologies, the world’s largest UV water treatment company, with decades leading hundreds of global UV installations."},
 {name:"Neil Becker",title:"Advisor on board",img:"t-becker.webp",sum:"30+ years of executive and commercialisation leadership, taking startups from prototype to market and successful M&A in regulated industries."},
 {name:"Carolina Muñoz",title:"Environmental Engineer",img:"t-munoz.webp",sum:"Chemical Engineering B.S., Stanford University."},
 {name:"Jocelyne Ku",title:"Mechanical Engineer",img:"t-ku.webp",sum:"Mechanical Engineering B.S., University of California San Diego."}];
var NEWS=[
 ["Jul 2026","NSF SBIR Phase II award for a next-generation deep-ultraviolet photochemical reactor","NSF",NSF],
 ["Oct 2025","Groundwater pilot with the Orange County Water District reaches non-detectable PFAS levels","Water Illumination",WN+"blog-post-title-one-lelbk"],
 ["Jan 2025","Graduated from the UC Riverside incubator into a 1,500 sq ft facility in Lake Forest","Water Illumination",WN+"blog-post-title-one-lelbk-zanjg-zh3c5"],
 ["Nov 2024","$400,000 U.S. EPA SBIR Phase II award for rapid UV-based PFAS destruction in wastewater","Water Illumination",WN+"blog-post-title-one-lelbk-zanjg"],
 ["Aug 2024","USDA SBIR Phase I award to destroy PFAS in agricultural water","Water Illumination",WN+"blog-post-title-one-lelbk-zanjg-2a9wp"]];
var SHEETS=[];
