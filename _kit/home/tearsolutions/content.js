var FONTS=['300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:aasrani@tearsolutions.com";
var UP="https://tearsolutions.com/wp-content/uploads/";
var PR26=UP+"2026/06/TearSolutions_PressRelease_June2026_FINAL-1.pdf";
var CORNEA=UP+"2022/09/Tauber.et_.al_.Cornea.22.pdf";
/* Programs, from tearsolutions.com (home page, clinical trials) and the 2 June 2026 release.
   Stage words only as the company states them. [program, area, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["Lacripep","Neurotrophic keratitis","Topical peptide for a rare corneal disease","Phase 2, first patients dosed","A multicenter, randomized, vehicle-controlled study of safety and efficacy in about 54 subjects in the United States (NCT07568730). Lacripep holds FDA Orphan Drug and Fast Track designations in NK.",0,"Clinical",PR26,"June 2026 release"],
 ["Lacripep","Sjögren’s syndrome","First-in-human Phase I/II trial","Completed","Tested whether Lacripep restores health to the eyes of patients with primary Sj&#246;gren&#8217;s syndrome (NCT03226444) at about 35 clinics in 17 states. Statistically significant improvement in sign and symptom at two weeks.",0,"Completed",CORNEA,"Published in Cornea"],
 ["Lacripep","Dry eye disease","Phase IIb in moderate to severe dry eye","Planned","A trial to optimize Lacripep&#8217;s efficacy in patients with moderate to severe general dry eye, at an expected 10 to 12 private and academic clinics.",1,"Planned","",""]];
/* Milestones, as the company and its releases state them (tearsolutions.com, releases of 21 Nov 2024 and 2 June 2026). */
var EVID=[
 ["Orphan Drug and Fast Track","FDA designations for Lacripep in neurotrophic keratitis, announced in June 2026 with the first patients dosed in a Phase 2 trial"],
 ["Published in Cornea","Results of the first-in-human trial in primary Sj&#246;gren&#8217;s syndrome, with improvement in corneal health as quickly as two weeks"],
 ["$3M Series B","Closed in November 2024 to advance programs for rare corneal diseases at both preclinical and clinical stages"],
 ["Licensed from UVA","The intellectual property is exclusively licensed to TearSolutions from the University of Virginia Licensing and Ventures Group"]];
/* tearsolutions.com (Leadership Team). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Anil C. Asrani",title:"President & CEO",sum:"Joined in 2020 after more than nine years at Medtronic in marketing, investor relations, business development and strategy; earlier worked in Dr. Laurie’s UVA laboratory."},
 {g:"Leadership",name:"Gordon W. Laurie, PhD, FARVO",title:"Chief Scientific Officer & Co-founder",sum:"Professor of Cell Biology, Biomedical Engineering and Ophthalmology at the University of Virginia, whose lab discovered and named lacritin."},
 {g:"Leadership",name:"James N. Cook",title:"Chief Development Officer",sum:"More than 30 years developing eye care products; formerly Head of R&D for Consumer Eye Health at Abbott Medical Optics."},
 {g:"Leadership",name:"Colin M. Rolph",title:"Chief Financial Officer",sum:"A serial early-stage CFO for more than 20 years, angel investor and manager of a venture fund in medical devices, biotechnology and IT."},
 {g:"Leadership",name:"Marc G. Odrich, MD",title:"Chief Medical Officer",sum:"Associate Professor of Ophthalmology at UVA; former Medical Director for Visx; has authored and run over 25 clinical trials for industry."},
 {g:"Leadership",name:"Michelle A. Carpenter, JD, RAC",title:"Chief Regulatory Officer",sum:"More than 25 years gaining global approvals for drugs and biologics, including multiple dry eye programs."},
 {g:"Board of directors",name:"Mark Logan",title:"Co-founder & Director",sum:"Co-founded the company with Dr. Laurie in 2013; formerly President, CEO and Chairman of VISX, Inc."},
 {g:"Board of directors",name:"Dr. Amir Shojaei, PharmD, PhD",title:"Preferred A Director",sum:"Led the development and approval of Xiidra as Therapeutic Area Head of Ophthalmology at Shire/Takeda."},
 {g:"Board of directors",name:"James Ramey",title:"Preferred B Director",sum:"Managing Director and Fund Manager at Middleland Capital, where he manages VTC Ventures."},
 {g:"Board of directors",name:"Dr. Louis M. Alpern, MD, MPH, FACS, FICS",title:"Independent Director",sum:"More than four decades of ophthalmology practice; Principal Investigator in over 100 ophthalmology clinical trials."},
 {g:"Board of directors",name:"Jens Biertumpel",title:"Independent Director",sum:"Responsible Officer and Head of the Investment Committee of Helios Asset Management."},
 {g:"Medical advisory board",name:"Dr. Kelly Nichols",title:"Medical Advisor",sum:"Dean of the University of Alabama at Birmingham School of Optometry."},
 {g:"Medical advisory board",name:"Dr. Deepinder Dhaliwal",title:"Medical Advisor",sum:"Professor of Ophthalmology, University of Pittsburgh School of Medicine."},
 {g:"Medical advisory board",name:"Dr. John Sheppard",title:"Medical Advisor",sum:"Founder of Virginia Eye Consultants; Professor of Ophthalmology at Eastern Virginia Medical School."},
 {g:"Medical advisory board",name:"Dr. Nancy McNamara",title:"Medical Advisor",sum:"Associate Dean for Academic Affairs, UC Berkeley Herbert Wertheim School of Optometry and Vision Science."}];
var NEWS=[
 ["2 June 2026","TearSolutions receives FDA Orphan Drug and Fast Track designations for Lacripep in neurotrophic keratitis and initiates Phase 2 trial with first patients dosed","tearsolutions.com",PR26],
 ["21 November 2024","TearSolutions, Inc. secures $3M Series B funding","tearsolutions.com",UP+"2024/11/TearSolutions-release-announcing-Series-B_FINAL.pdf"],
 ["28 September 2022","TearSolutions announces results from first-in-human clinical trial published in Cornea","tearsolutions.com",UP+"2022/11/TearSolutions-release-announcing-Cornea-article-draft-9-26-2290.pdf"],
 ["24 November 2020","TearSolutions, Inc. appoints Leonard Borrmann to its Board of Directors","tearsolutions.com",UP+"2021/03/TS-Borrmann-Press-Release-11-24-2020.pdf"]];
var SHEETS=[];
