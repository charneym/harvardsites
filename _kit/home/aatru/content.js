/* Aatru Medical: facts from aatru.com (Home, Company, Leadership Team, Board of Directors, Medical Board, Surgical Incision
   Management, npSIMS, Product Value, Background Information, Resources, News, Contact) and the company's press releases
   (14 Jul 2020, 18 Aug 2020, 24 Aug 2021, 20 Oct 2021, 3 Jun 2024, 4 Aug 2025; press contact Tom Lash, COO).
   Real characters only, never HTML entities (DU).
   Rows: [area, status, title, sub, detail, dim, tag, link, linklabel] */
var EVID=[
 ["Clinical","Published 2025","First-in-human clinical study","Cureus, open access in PubMed Central","npSIMS was applied across spine, shoulder and plastic surgery incisions in New Zealand. It generated and maintained negative pressure and managed exudate for a mean of 6.3 days; clinicians found it easy to apply, silent and airtight.",0,"",PMC,"Read the study"],
 ["Award","SAWC Spring 2024","1st place, Oral Abstracts","Symposium on Advanced Wound Care","Aatru Medical’s abstract took first place in the Oral Abstracts category at the Symposium on Advanced Wound Care, Spring 2024.",0,"",UP+"2024/06/Aatru_Medical_Press_Release_060324.pdf","Press release"],
 ["Regulatory","FDA cleared 2021","Cleared and commercially launched","Class II, 510(k)","Categorized by the US Food and Drug Administration as the first-in-class chemical pump-based NPWT device. Clearance and commercial launch were announced in August 2021.",0,"",UP+"2022/08/Aatru-PressRelease-Aug-FDA-AUG20212446.pdf","Press release"],
 ["Preclinical","In vivo","Incisional porcine wound model","University of Miami, Miller School of Medicine","An animal study at the Wound Healing Research Laboratory validated the oxygen-scavenger mode of action, testing pressure maintenance, bacterial counts, exudate quantity and observational data.",0,"",UP+"2022/08/SAWC_Aatru_iNPWT_Abstract_Final_27_Nov.pdf","Abstract"],
 ["Usability","Human factors","Usability validation","Summative evaluation","Usability and human factors validation tests assessed npSIMS against its design specification, from observations of users working with the device.",1,"Completed","",""]];
var TEAM=[
 {g:"Leadership",name:"Timothy Wojciechowski",title:"Chief Executive Officer and Co-Inventor",sum:"Twenty years of start-up and technology development in NPWT and LCD optical films; co-inventor on more than 15 patents."},
 {g:"Leadership",name:"Thomas Lash",title:"Chief Operating Officer and Co-Inventor",sum:"Over 30 years of technology sales and marketing; formerly CEO of Micros Chip and COO of Trivium Technologies."},
 {g:"Leadership",name:"Russ Donda",title:"Interim President",sum:"Founding CEO of ViewRay; over 25 years leading very early stage companies."},
 {g:"Leadership",name:"Jeff Ustin, M.D.",title:"Chief Medical Officer",sum:"Practicing trauma surgeon in Cleveland with almost 20 years in medical device design."},
 {g:"Leadership",name:"Richard Middaugh, Ph.D.",title:"Chief Scientific Officer and Co-Inventor",sum:"Twenty-six years of scientific leadership at Energizer Battery; formerly Associate Professor of Chemistry."},
 {g:"Leadership",name:"William Evo, J.D.",title:"Chief Strategy Officer and General Counsel",sum:"Over 35 years as a business and transaction attorney; formerly President of the Detroit Red Wings."},
 {g:"Board of Directors",name:"Timothy Wojciechowski",title:"Chairman",sum:""},
 {g:"Board of Directors",name:"James Hindman",title:"Director",sum:"Former Executive Vice President and Chief Financial Officer of Allergan."},
 {g:"Board of Directors",name:"Thomas Hall",title:"Director",sum:"Founding partner, Hall Matson Garver Thomas Law, East Lansing."},
 {g:"Board of Directors",name:"David Berry",title:"Director",sum:"Former CFO of Union Home Mortgage; one of Aatru’s largest investors."},
 {g:"Board of Directors",name:"J. Burner Crew",title:"Director",sum:"Asset manager and Registered Investment Advisor in Ohio."},
 {g:"Board of Directors",name:"Stefan Whitwell",title:"Director",sum:"Founder and Chief Investment Officer, Whitwell & Co."},
 {g:"Medical and scientific advisors",name:"Robin Martin, Ph.D.",title:"Senior Scientific Consultant",sum:"Fifteen years in senior clinical science roles at Smith & Nephew Advanced Wound Management."},
 {g:"Medical and scientific advisors",name:"Michael Schenden, M.D.",title:"Medical Board",sum:"Beaumont Hospitals."},
 {g:"Medical and scientific advisors",name:"Arlette Palo",title:"Medical Board",sum:"Formerly Estée Lauder."}];
var NEWS=[
 ["4 Aug 2025","Clinical study results published in PubMed Central / Cureus",UP+"2025/08/Aatru-Press-Release-8-4-25.pdf","Press release"],
 ["3 Jun 2024","Aatru Medical awarded 1st place in Oral Abstracts at SAWC Spring 2024",UP+"2024/06/Aatru_Medical_Press_Release_060324.pdf","Press release"],
 ["20 Oct 2021","Clinical study and interim analysis of the npSIMS system announced",UP+"2022/08/Aatru-PressRelease-Oct-20-2021.pdf","Press release"],
 ["24 Aug 2021","FDA clearance and commercial launch of npSIMS",UP+"2022/08/Aatru-PressRelease-Aug-FDA-AUG20212446.pdf","Press release"],
 ["14 Jul 2020","npSIMS submitted to the FDA for Class II clearance; Series C funding completed",UP+"2022/08/AATRU_07-14-2020-PressRelease.pdf","Press release"]];
var SURG=["Abdominal","Cardiothoracic","Colorectal","Obstetric","Orthopedic","Pediatric","Plastic / breast","Trauma","Vascular"];
var SHEETS=[];
