var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"','700 1em "Inter"'];
/* the corresponding-author address ExesaLibero publishes (Pharmacol Res Perspect 2024, PMC11212004); the site lists only a phone */
var MAIL="johnb@exesalibero-pharma.com";
var TEL="412-296-3200";
var LI="https://www.linkedin.com/company/exesalibero-pharma/";
var XS="https://exesalibero.com";
var RP="https://reporter.nih.gov/project-details/";
var SCI="https://doi.org/10.1126/sciadv.abm9843",PRP="https://doi.org/10.1002/prp2.1230";
/* programmes: every line from exesalibero.com (Company, Product & Technology), NIH RePORTER and their two papers.
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["ELP-004","Rheumatoid arthritis","Inflammatory bone erosion","Preclinical","ELP-004 strongly suppresses bone erosion in two mouse models of arthritis, even after symptoms of arthritis were measurable. Developed with NIAMS STTR Phase I and II awards (R42AR074812).",SCI,"Science Advances"],
 ["ELP-004","Multiple myeloma","Cancer-induced bone lesions","Preclinical","In mice, ELP-004 prevents the painful bone lesions that develop with multiple myeloma, where the cancer drives overproduction of the cell that normally controls bone development.",XS+"/","ExesaLibero"],
 ["ELP-004","Osteogenesis imperfecta","Rare genetic bone fragility","NIH SBIR Phase I","A 2026 NIAMS award evaluates ELP-004 against type III OI symptoms in the oim mouse: an orphan disease of fragile bones and repeated fractures, often treated today with bisphosphonates.",RP+"11310891","NIH RePORTER"],
 ["ELP-004","Toward the clinic","Toxicology and pharmacokinetics","IND-enabling","The mission: complete the preclinical toxicology and efficacy studies that will form the basis of an Investigational New Drug application to the FDA, and then begin clinical trials.",PRP,"PRP 2024"]];
/* preclinical evaluation of ELP-004 in mice (Pharmacol Res Perspect 2024), the site, and the TRPC paper (Science Advances 2025) */
var EVID=[
 ["Absorption","Rapidly absorbed and distributed when given intravenously, orally or subcutaneously"],
 ["Genotoxicity","Non-mutagenic, with no induced chromosome aberrations"],
 ["Safety","Non-cardiotoxic, with minimal off-target effects and minimal toxicity to the immune system"],
 ["Selectivity","Potently blocks osteoclast maturation driven by TNFα or LTB4, while minimally affecting normal RANKL-driven maturation"]];
/* exesalibero.com, Company. Text-only masthead; summaries are their own lines, condensed. */
var TEAM=[
 {g:"Management",name:"John Barnett, PhD",title:"President & Chief Scientific Officer",sum:"Emeritus Professor and Chair of Microbiology, Immunology & Cell Biology, West Virginia University School of Medicine."},
 {g:"Management",name:"Jamie McCall, PhD",title:"Chief Scientist",sum:"Adjunct Research Assistant Professor, West Virginia University. Molecular biology, cancer cell biology and immunobiology."},
 {g:"Management",name:"Cecilia Barnett, MSN",title:"Vice President, Director of Human Resources",sum:""},
 {g:"Board of directors",name:"Allie Karshenas, PhD",title:"Board Chair",sum:"WVU Associate VP of Clinical Operations & Institutional Advancement and of Global Engagement; Associate Professor, School of Pharmacy."},
 {g:"Board of directors",name:"Richard Goldberg, MD",title:"Director",sum:"WVU Cancer Institute Director (Emeritus); Professor Emeritus, Department of Medicine, WVU School of Medicine."},
 {g:"Board of directors",name:"Erik L. Hewlett, MD",title:"Director",sum:"Professor Emeritus of Medicine and of Microbiology, Immunology and Cancer Biology, University of Virginia School of Medicine."},
 {g:"Board of directors",name:"Paul Lockman, PhD",title:"Director",sum:"WVU Assistant VP of Experimental Therapeutics; Professor, Benedum Fellow and Mylan Endowed Chair, School of Pharmacy."},
 {g:"Board of directors",name:"Colleen Watkins, MD",title:"Director",sum:"Associate Professor, Department of Orthopaedics; board certified in internal medicine and rheumatology."},
 {g:"Scientific advisory board",name:"Harry Blair, MD",title:"University of Pittsburgh",sum:"Founding member. Professor of Pathology, board certified in anatomic and clinical pathology; bone biology."},
 {g:"Scientific advisory board",name:"Jonathan Soboloff, PhD",title:"University of Kansas Medical Center",sum:"Founding member. Professor and Associate Director, Division of Genetic, Environmental and Inhalational Disease."},
 {g:"Scientific advisory board",name:"Matthew Dietz, MD",title:"West Virginia University",sum:"Professor and Chair of Orthopaedics; implant-associated, prosthetic joint and open fracture infections."},
 {g:"Scientific advisory board",name:"Mariette Barbier, PhD",title:"West Virginia University",sum:"Associate Professor and Chair, Department of Microbiology, Immunology and Cell Biology."},
 {g:"Scientific advisory board",name:"Werner Geldenhuys, PhD",title:"West Virginia University",sum:"Professor, School of Pharmacy; pharmacotherapeutics."},
 {g:"Scientific advisory board",name:"Bjorn Söderberg, PhD",title:"West Virginia University",sum:"Professor Emeritus, Department of Chemistry; synthesis of biologically active products."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","NIAMS awards ExesaLibero an SBIR Phase I grant to develop ELP-004 for osteogenesis imperfecta","NIH RePORTER",RP+"11310891"],
 ["January 2025","Targeting TRPC channels for control of arthritis-induced bone erosion","Science Advances",SCI],
 ["October 2024","With Redwire Space, the precursors of ELP-004 fly to the International Space Station aboard SpX-31","ExesaLibero",XS+"/news/exesalibero-pharma-in-partnership-with-redwire-space-launched-the-precursors-of-elp-004-to-the-international-space-station"],
 ["September 2024","ExesaLibero presents data at the ASBMR Annual Meeting in Toronto","ExesaLibero",XS+"/news/exesalibero-pharma-presented-data-at-the-annual-meeting-of-the-american-society-for-bone-and-mineral-research-in-toronto-on"],
 ["August 2024","Preclinical evaluation of ELP-004 in mice","PRP",PRP],
 ["June 2022","ExesaLibero receives an Innovation Award at TechConnect 2022 in Washington, DC","ExesaLibero",XS+"/news/exesalibero-pharma-receives-innovation-award-at-the-2022-techconnect-conference"]];
var SHEETS=[];
