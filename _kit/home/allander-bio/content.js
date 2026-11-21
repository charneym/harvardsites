var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Jost"','500 1em "Jost"','600 1em "Jost"','400 1em "Josefin Sans"'];
var TEL="+17202667063",TELT="720 266 7063";
var RP="https://reporter.nih.gov/project-details/";
var AB="https://allanderbiotech.com/f/";
/* programmes: every line from allanderbiotech.com (home, /the-science, news) and NIH RePORTER.
   [area, indication, sub, status, detail, link, link label] */
var PIPE=[
 ["Oral gel","Radiation-induced oral mucositis","Cancer patients","First-in-human trial","A topical oral gel of Allander’s Smad7 biologic. IND-enabling GLP toxicology studies were funded by an NIH SBIR-CRP award (2023); a $2.4 million NCI SBIR Phase II award (2025) funds the first-in-human clinical trial, and a 2026 NIDCR award the cGMP manufacture of the clinical batch.",RP+"11322800","NIH RePORTER"],
 ["Topical","Radiation dermatitis","Cancer patients","Preclinical","A proprietary biologic for skin injured by radiotherapy, developed with a $1.68 million NIH SBIR Phase II award (2020). Tested in canine and mouse models of radiodermatitis, published in 2025.",AB+"new-pub-on-smad7-therapy-for-radiodermatitis-in-two-animal-models","Allander news"],
 ["Topical","Chronic and diabetic wounds","Wound healing","Preclinical","Proprietary biologics for chronic wounds, including diabetic wounds, developed with a $1.5 million NIH SBIR Phase II award (2018). In 2026 the topical biologic accelerated healing of diabetic wounds in mice and pigs.",AB+"new-pub-on-smad7-for-diabetic-wounds-in-murine-and-pig-models","Allander news"],
 ["Topical","Atopic dermatitis and psoriasis","Inflammatory skin disease","Research","Efficacy studies in mouse models of dermatitis and psoriasis identified IL22RA2 as a Smad7 target that mediates the relief of both (J Invest Dermatol, 2023).","https://doi.org/10.1016/j.jid.2023.04.029","JID 2023"]];
/* allanderbiotech.com/the-team and /advisors, with the role titles from each person's own biography page.
   Text-only masthead (CI/CL); summaries condensed from those biographies. */
var TEAM=[
 {g:"Leadership",name:"Xiao-Jing Wang, MD, PhD",title:"Founder & President",sum:"Expert in skin biology and oral cancer who has studied Smad proteins for over 15 years; William Montagna Award, Society for Investigative Dermatology."},
 {g:"Leadership",name:"Christian Young, PhD",title:"Chief Scientific Officer",sum:"Designs and runs the bioassays behind Allander’s biologics; PhD in cancer biology, CU Anschutz, postdoctoral training at Vanderbilt."},
 {g:"Leadership",name:"Donna Wang, BS",title:"Chief Operating Officer",sum:"Lab manager in Dr. Wang’s laboratory for over ten years, then a senior technician at the NIH; testing of biologics in cell and animal models."},
 {g:"Leadership",name:"Pamela Garl, MS, MBA",title:"Program Manager",sum:"Has managed all of Allander’s SBIR grants and Colorado state funding since 2017, and organises its meetings with investors, CROs and CMOs."},
 {g:"Advisors",name:"Christina Vessely, PhD",title:"Regulatory Advisor",sum:"Analytical and formulation scientist: assay validation, GMP drug products for clinical studies and CMC modules for the IND."},
 {g:"Advisors",name:"Barry Holwerda, PhD",title:"Product Development Advisor",sum:"Protein drug development and manufacturing; founder of the CRO Molecular Throughput, formerly Head and Director of Molecular Biology at Pfizer."},
 {g:"Advisors",name:"Dennis Roop, PhD",title:"Scientific Advisor",sum:"Professor of dermatology and John S. Gates Endowed Chair in Stem Cell Biology at CU Anschutz; former President of the Society for Investigative Dermatology."},
 {g:"Advisors",name:"Paul Attar, PhD, MBA",title:"Pre-Clinical Advisor",sum:"Co-founder and President of Bridge PTS, a CRO for preclinical testing of skin and wound-healing products."},
 {g:"Advisors",name:"David Raben, MD",title:"Clinical Advisor",sum:"Board-certified radiation oncologist with 20 years’ expertise in head and neck cancer; first to introduce IMRT for head and neck cancer."},
 {g:"Advisors",name:"Eric Simpson, MD",title:"Clinical Advisor",sum:"Chair of dermatology at OHSU; lead international investigator of the Phase 2b and Phase 3 dupilumab trials in atopic dermatitis."}];
/* news: Allander's own posts (allanderbiotech.com/f/...) and NIH RePORTER. [date, headline, source, url] */
var NEWS=[
 ["September 2026","NIDCR SBIR award to manufacture the clinical batch of Allander’s oral gel for oral mucositis under cGMP","NIH RePORTER",RP+"11321353"],
 ["March 2026","New publication: a Smad7-based biologic promotes healing of diabetic wounds in mouse and pig models","Allander",AB+"new-pub-on-smad7-for-diabetic-wounds-in-murine-and-pig-models"],
 ["October 2025","A $2.4 million NCI SBIR Phase II award for the first-in-human clinical trial of the oral gel for radiation-induced oral mucositis","Allander",AB+"nci-sbir-phase-ii-award"],
 ["July 2025","New publication on Smad7 therapy for radiodermatitis in canine and mouse models","Allander",AB+"new-pub-on-smad7-therapy-for-radiodermatitis-in-two-animal-models"],
 ["October 2023","A $2.48 million NIH SBIR-CRP award for IND-enabling, GLP-compliant toxicology studies","Allander",AB+"nih-sbir-crp-funding"],
 ["October 2023","Allander Biotechnologies converts from a Colorado LLC to a Delaware C-corporation","Allander",AB+"allander-biotechnologies-llc-is-converted-to-a-delaware-corp"]];
/* selected publications, from allanderbiotech.com/the-science. [year, title, journal, url] */
var PUBS=[
 ["2023","IL22RA2 is a Smad7 target mediating alleviation of dermatitis and psoriatic phenotypes in mice","J Invest Dermatol","https://doi.org/10.1016/j.jid.2023.04.029"],
 ["2021","Therapeutic intervention using a Smad7-based Tat protein to treat radiation-induced oral mucositis","Int J Radiat Oncol Biol Phys","https://doi.org/10.1016/j.ijrobp.2021.09.039"],
 ["2018","Smad7 promotes healing of radiotherapy-induced oral mucositis without compromising oral cancer therapy","Clin Cancer Res","https://doi.org/10.1158/1078-0432.CCR-18-1081"],
 ["2013","Preventive and therapeutic effects of Smad7 on radiation-induced oral mucositis","Nature Medicine","https://www.nature.com/articles/nm.3118"]];
var SHEETS=[];
