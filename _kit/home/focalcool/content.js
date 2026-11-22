var FONTS=['300 1em "Archivo"','400 1em "Archivo"','italic 400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','400 1em "Archivo Black"','400 1em "Open Sans"','500 1em "Open Sans"','600 1em "Open Sans"'];
var MAIL="tlmerrill@focalcool.com";
var RP="https://reporter.nih.gov/project-details/";
var PAPER="https://doi.org/10.1177/15910199241266010";
/* programmes: focalcool.com (Our Technology, Pre-Clinical Results, Collaborators, News) and King et al., Interv Neuroradiol 2026.
   [area, programme, stage, partner, detail, link, link label] */
var PIPE=[
 ["Brain","Selective brain cooling in ischemic stroke","Pre-clinical","UMass Chan Medical School","The Khione insulative guiding catheter infuses chilled saline through the internal carotid artery, starting minutes before a blocked artery is reopened. In a canine large-vessel-occlusion model, cooled animals’ infarcts grew far more slowly after recanalization.",PAPER,"Paper"],
 ["Heart","Rapid localized heart cooling at reperfusion","Pre-clinical","University of Pennsylvania","Cooled blood delivered to at-risk heart tissue lowered its temperature by about 3°C in 5 minutes, and infarct size relative to the area at risk was significantly smaller than in normothermic controls.","https://www.ncbi.nlm.nih.gov/pubmed/23047283","Earlier work"],
 ["Cancer and tissue repair","Temperature-sensitive polymer delivery","Research","Pancreatic cancer experts","Coupled with endoscopic ultrasound, CoolGuide technology can deliver temperature-sensitive polymers deep inside the body, as reservoirs for drugs that fight cancer or as a substrate for healing and regeneration.","https://www.focalcool.com/focalcool-technology.html","Overview"]];
/* team: focalcool.com/team.html; Interv Neuroradiol 2026 competing-interests statement (TLM, SH and JM: employees of FocalCool) */
var TEAM=[
 {g:"Leadership",name:"Tom Merrill, PhD",title:"Co-Founder & Chief Executive Officer",sum:"Research and development in heat transfer, biomedical devices and biotechnology at Carrier, the University of Pittsburgh Medical School, Abiomed, Pfizer, MicroDose Therapeutx and Rowan University. BS Bucknell; MS and PhD, University of Michigan and Penn State."},
 {g:"Leadership",name:"Jennifer Mitchell, MS",title:"Co-Founder & Technical Advisor",sum:"R&D Director from 2008 to 2018, coordinating in vitro and animal testing and leading grant development and clinical, academic and industrial collaborations. BS Rowan University; MS in Mechanical Engineering, University of Delaware."},
 {g:"Engineering",name:"Shannon Hornibrook, MS",title:"Senior R&D Engineer",sum:"Plans and runs the in vitro testing that characterises the thermal performance of FocalCool prototype catheters, contributes to the Khione infusion console, and built the company’s quality management system for design and document control."}];
/* publications and grants: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","Selective brain cooling with a novel catheter reduces infarct growth after recanalization in a canine large vessel occlusion model","Interventional Neuroradiology",PAPER],
 ["2020","NIH continues Phase II SBIR support for rapid, localized neurovascular cooling with the Khione insulative catheter","NIH RePORTER",RP+"10020807"],
 ["2020","Focal cooling of brain parenchyma in a transient large vessel occlusion model: proof-of-concept","J. NeuroInterventional Surgery","https://doi.org/10.1136/neurintsurg-2019-015179"],
 ["2019","NIH awards FocalCool a Phase II SBIR to carry the Khione catheter towards commercialisation","NIH RePORTER",RP+"9908759"],
 ["2016","Heat transfer analysis of catheters used for localized tissue cooling to attenuate reperfusion injury","Medical Engineering & Physics","http://www.medengphys.com/article/S1350-4533(16)30102-3/fulltext"]];
var SHEETS=[];
