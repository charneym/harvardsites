/* RDC Clinical: facts from rdcclinical.com.au (Home, About, FAQ, Trials and each study page, Previous Research, Contact)
   and ClinicalTrials.gov. Real characters only, never HTML entities (DU).
   Trial rows: [code, status, title, where, detail, dim, tag, link, linklabel] */
var T=RDC+"trials/";
var PIPE=[
 ["MUH","Recruiting · 12 weeks","Male Urinary Health Study","Australia-wide, completed at home","A placebo-controlled study of a novel maca supplement for lower urinary tract symptoms in men over 40. There are no clinic visits, so men can take part from anywhere in Australia.",0,"",T+"muh-study/","Study page"],
 ["IMPTRP","Recruiting · 8 weeks","Gut Microbiome and Metabolic Health Study","Fortitude Valley, Brisbane","How OEA (oleoylethanolamide), a compound the body makes itself, affects the gut microbiome and metabolic health markers, compared to a placebo, over three short clinic visits.",0,"",T+"imptrp/","Study page"],
 ["EVESLE","Recruiting · 8 weeks","Sleep and Stress Study","Brisbane","The effects of three different supplements compared to placebo in adults experiencing stress and poor sleep.",0,"",T+"evesle/","Study page"],
 ["NUELEV","Recruiting · 12 weeks","Diabetic Peripheral Neuropathy Study","Remote, near an ACL Pathology clinic","For people aged 18–75 with diabetes who are experiencing symptoms of peripheral neuropathy.",0,"",T+"nuelev-diabetic-peripheral-neuropathy/","Study page"],
 ["OATHEE","Recruiting","ARA Omega-6 Study, Part 1","Brisbane","Researching omega-6 in the form of arachidonic acid (ARA), with adults aged 18 and over.",0,"",T+"oatheept1/","Study page"],
 ["GOBO","Recruiting","Omega-3 Study","Brisbane","For adults aged 18–64 who would like to know their own omega-3 levels and help research omega-3 supplements.",0,"",T+"gobo-omega-3-study/","Study page"],
 ["PK","Year-round","Bio-availability Studies","Fortitude Valley, Brisbane","Day studies of how quickly vitamins and nutrients such as vitamin C, CoQ10, resveratrol and fish oil enter and leave the bloodstream, with small blood samples through a cannula and no overnight stays.",0,"",T+"bioavailability/","Study page"]];
/* Taking part, from the FAQ and study pages */
var EVID=[
 ["No overnight stays","Every study runs in an outpatient model; many can be completed from home, anywhere in Australia"],
 ["Tests paid for","Blood tests and body scans are paid for by RDC, and participants can take their results to their own health professional"],
 ["Active product after","Where possible, participants who were on the placebo can receive the active product free for one to four months"],
 ["Ethics approved","Every trial is approved by a Human Research Ethics Committee before it begins"]];
var PUBS=[
 ["2025","Palmitoylethanolamide (Levagen+) for acute menstrual pain: a randomized, crossover, double-blind, placebo-controlled trial","Women & Health"],
 ["2024","Effect of palmitoylethanolamide compared to a placebo on the gut microbiome and biochemistry in an overweight adult population","Biomedicines"],
 ["2021","The effect of an orally-dosed Caralluma fimbriata extract on appetite control and body composition in overweight adults","Scientific Reports"],
 ["2020","A self-emulsifying omega-3 ethyl ester formulation (AquaCelle) significantly improves EPA and DHA bioavailability in healthy adults","European Journal of Nutrition"],
 ["2020","Omega-3 EPA-rich extract from the microalga Nannochloropsis decreases cholesterol in healthy individuals","Nutrients"],
 ["2017","affron®, a novel saffron extract, improves mood and sleep quality in healthy adults over 4 weeks","Complementary Therapies in Medicine"]];
var TEAM=[
 {g:"Clinical trial team",name:"Dr Amanda Rao",title:"Founder & Director, Principal Investigator",sum:"PhD (Medicine). Leads RDC’s clinical trial team and is an author on its published studies."},
 {g:"Clinical trial team",name:"Dr David Briskey",title:"Chief Scientific Officer",sum:"PhD, MAppSci; Research Fellow at The University of Queensland."}];
var NEWS=[];
var SHEETS=[];
