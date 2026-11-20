var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','800 1em "Archivo"'];
var MAIL="emmyon@emmyon.com";
var LI="https://www.linkedin.com/company/emmyon-inc./";
var RP="https://reporter.nih.gov/project-details/";
/* programmes and commercial applications: every line from emmyon.com (/novel-compounds, /natural-compounds,
   /commercial-applications/*, /news) and NIH RePORTER. [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["Novel compounds","Obesity and type 2 diabetes","Pharmaceuticals","NIH SBIR Phase II","Novel small molecules that increase skeletal muscle and, with it, reduce body fat and blood glucose in preclinical models. NIDDK award 1R44DK142200, “Development of novel therapeutics for obesity and type 2 diabetes”.",RP+"11060822","NIH RePORTER"],
 ["Novel compounds","Cancer-induced muscle wasting","Pharmaceuticals","NIH SBIR Phase II","Medicines for cancer cachexia, developed with Andrew and Sarah Judge at the University of Florida. NCI award 1R44CA277853, “Development of novel therapeutics for cancer cachexia”.",RP+"10692001","NIH RePORTER"],
 ["Ursolic acid","Feline and canine muscle health","Companion animals","On the market","URSOLYX™ Soft Chews, developed with Virbac, launched for dogs in January 2025 and for cats in January 2026: the first step in translating Emmyon technology to animal health.","https://vet-us.virbac.com/home/products/Mobility/ursolyxTM-soft-chews%20(cat).html","Virbac"],
 ["Ursolic acid · tomatidine","Healthy aging, illness and rehabilitation","Human nutrition","Open to licensing","Natural dietary compounds from apples and tomatoes, as supplements and functional food ingredients that help maintain normal muscle mass, strength and exercise capacity.","https://www.emmyon.com/commercial-applications/human-nutrition/","Emmyon"],
 ["Natural compounds","Swine, poultry, cattle and aquaculture","Production animals","Open to partnership","A new generation of feed additives that promote muscle growth and feed conversion by mechanisms entirely different from beta agonists and antibiotics.","https://www.emmyon.com/commercial-applications/production-animal-nutrition/","Emmyon"]];
/* the June 2026 cancer cachexia study (American Journal of Physiology–Cell Physiology), every line from Emmyon's release */
var EVID=[
 ["Five cancer models","Dietary ursolic acid preserved muscle mass in all five mouse models of cachexia, driven by pancreatic, colon and lung cancer cells of mouse and human origin"],
 ["Strength","Larger muscle fibres led to significant improvements in grip strength and muscle tetanic force"],
 ["With chemotherapy","The effects persisted in the presence of chemotherapy, with no discernible change in food intake or tumour growth"],
 ["At the gene level","Ursolic acid acted directly on muscle cells and inhibited more than 90% of the cancer-induced changes in muscle mRNA expression"]];
/* emmyon.com/overview/people. Text-only masthead (CI/CL); the summaries are condensed from their bios. */
var TEAM=[
 {g:"Leadership",name:"Christopher M. Adams, MD, PhD",title:"Founder, President & CEO",sum:"Lead inventor on over 40 granted patents. Endicott Professor of Medicine at Mayo Clinic, where he sees patients in the Diabetes Clinic."},
 {g:"Leadership",name:"John J. Talley, PhD",title:"Partner & VP, Chemistry",sum:"Inventor on more than 200 US patents and lead inventor of 8 FDA-approved drugs, including Celebrex®. Leads Emmyon’s medicinal chemistry."},
 {g:"Leadership",name:"Scott M. Ebert, PhD",title:"Vice President, Biology",sum:"Skeletal muscle biologist at Mayo Clinic and lead principal investigator on Emmyon’s NIH SBIR and STTR awards."},
 {g:"Scientific advisors",name:"Andrew R. Judge, PhD",title:"University of Florida",sum:"Professor of Physical Therapy; President of the Cancer Cachexia Society (2023–2025)."},
 {g:"Scientific advisors",name:"Sarah M. Judge, PhD",title:"University of Florida",sum:"Research Assistant Professor studying cancer-induced skeletal muscle atrophy and weakness."},
 {g:"Scientific advisors",name:"Adrian Vella, MD",title:"Mayo Clinic",sum:"McDonough Professor of Medicine; patient-oriented research in prediabetes, diabetes and obesity."},
 {g:"Scientific advisors",name:"Aleksey V. Matveyenko, PhD",title:"Mayo Clinic",sum:"Kieckhefer Professor of Regenerative Medicine; insulin secretion and circadian control of metabolism."},
 {g:"Scientific advisors",name:"Blake B. Rasmussen, PhD",title:"UT Health San Antonio",sum:"Chair of Cellular & Integrative Physiology; how exercise and nutrition regulate muscle growth."},
 {g:"Scientific advisors",name:"K. Sreekumaran Nair, MD, PhD",title:"Mayo Clinic",sum:"Emslander Professor of Endocrinology and Nutrition Research; diabetes and skeletal muscle atrophy."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2026","Emmyon scientists identify a new potential nutritional approach for protecting muscle mass and strength in patients with cancer","AJP–Cell Physiology","https://journals.physiology.org/doi/full/10.1152/ajpcell.00159.2026"],
 ["January 2026","Virbac launches URSOLYX™ Soft Chews for Cats, based on Emmyon’s ursolic acid technology","Virbac","https://vet-us.virbac.com/home/products/Mobility/ursolyxTM-soft-chews%20(cat).html"],
 ["August 2025","Emmyon receives a Phase II SBIR award from the NIDDK to develop novel therapeutics for obesity and type 2 diabetes","NIH RePORTER",RP+"11060822"],
 ["January 2025","Virbac introduces URSOLYX™ Soft Chews, an innovation in canine muscle health","PR Newswire","https://www.prnewswire.com/news-releases/virbac-introduces-ursolyx-soft-chews-innovation-in-canine-muscle-health-302344758.html"],
 ["January 2024","Emmyon and Virbac identify a new nutritional approach that helps maintain healthy skeletal muscle and activity in dogs","Animals","https://www.mdpi.com/2076-2615/14/2/186"],
 ["March 2023","Emmyon receives a Phase II SBIR award from the National Cancer Institute for cancer-induced muscle wasting","NIH RePORTER",RP+"10692001"]];
var SHEETS=[];
