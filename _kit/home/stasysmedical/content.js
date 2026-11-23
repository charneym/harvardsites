var FONTS=['400 1em "DM Serif Display"','400 1em "Open Sans"','600 1em "Open Sans"'];
var FORM="https://stasysmedical.com/invest";
/* How Stasys is helping trauma doctors, from stasysmedical.com (home, how-it-works and invest pages). [label, area, title, detail, tag] */
var USES=[
 ["Trauma","Bleeding risk","Platelet strength predicts bleeding risk","The Platelet Strength Test has been shown to independently predict coagulopathy and the need for blood transfusion in trauma patients, giving doctors faster, more accurate information for rapid clinical decisions.","Transfusion"],
 ["Therapy","Antiplatelet dosing","An individualised anti-clotting response","Measure the dose response to common platelet inhibitors and anticoagulants, including aspirin, heparin and Plavix (clopidogrel), and detect between varying doses of antiplatelet medication.","Dose response"],
 ["Point of care","Ease of use","A benchtop test with no activators to mix","The benchtop machine lets trauma doctors test blood at the point of care without mixing in activators: no pipettes, no offsite lab, and a result in under three minutes.","Bedside"]];
/* The system's outputs, as listed on stasysmedical.com/how-it-works */
var FEAT=["Rates of clot formation","Rates of clot aggregation","Platelet forces","Clotting behavior"];
/* News & Research, from stasysmedical.com/news-research (each links to the paper) */
var PUBS=[
 ["June 2026 · Scientific Reports","Utility of point-of-care platelet aggregation testing for transfusion prediction: a 482-patient trial at Vanderbilt University Medical Center","nature.com","https://www.nature.com/articles/s41598-026-51134-5"],
 ["January 2026 · Transfusion","A pilot trial of long-distance shipped, extended- and cold-stored platelets in 100% plasma for cardiothoracic surgical bleeding","wiley.com","https://onlinelibrary.wiley.com/doi/10.1111/trf.70076"],
 ["June 2025 · JCI","TNFα disrupts hemostasis through autophagy inhibition, with platelet function measured on the Stasys Atlas","jci.org","https://www.jci.org/articles/view/186065/pdf"],
 ["June 2024 · Trauma Surg Acute Care Open","Using microfluidic shear to assess transfusion requirements in trauma patients","ncbi.nlm.nih.gov","https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11227844/"],
 ["December 2022 · J Cardiothorac Vasc Anesth","In vitro treatment of ECMO coagulopathy with recombinant von Willebrand factor or lyophilized platelets","sciencedirect.com","https://www.sciencedirect.com/science/article/abs/pii/S1053077022009211"],
 ["March 2019 · Nature Communications","Contractile forces in platelet aggregates under microfluidic shear gradients reflect platelet inhibition and bleeding risk","nature.com","https://www.nature.com/articles/s41467-019-09150-9"]];
/* People, from stasysmedical.com/who-we-are */
var TEAM=[
 ["Leadership",[
  ["Ty Roy-Garland, MD","Chief Executive Officer","Joined as CEO in June 2020; vascular surgeon and Director of Vascular Surgery at Saint Joseph Hospital, Denver."],
  ["Bob Barry","Co-Founder, Chairman","Over 25 years in medical devices; co-founded Stasys in 2013 after founding Uptake Medical and co-founding CoAptus Medical."],
  ["Lucas Ting, PhD","Director of Research & Development","His doctoral work on platelet force sensing forms the core of Stasys’ technology."],
  ["Nate Sniadecki, PhD","Co-Founder & Acting CTO","Albert Kobayashi Professor of Mechanical Engineering, University of Washington; developed the microfluidic-micropost device."],
  ["Nathan White, MD","Co-Founder & Clinical Consultant","Emergency physician at Harborview Medical Center, researching hemostasis in critical illness and injury."]]],
 ["Clinical Advisory Board",[
  ["John Holcomb, MD","Trauma surgery","Former trauma surgeon at the Army’s Institute of Surgical Research; Chief of Acute Surgery at UT Health."],
  ["Pär Johansson, MD, DSc, MBA","Transfusion medicine","Director of Transfusion Medicine, Rigshospitalet, Denmark."],
  ["Karim Brohi, MD","Trauma sciences","Professor of Trauma Sciences at the London School of Medicine."],
  ["Marc Maegele, MD, PhD","Traumatology","Professor of Traumatology, Cologne-Merheim Medical Center."]]],
 ["Board & Advisors",[
  ["Lonnie Edelheit, PhD","Board & Advisors","Senior VP R&D, GE (retired)."],
  ["Chris Porter, PhD","Board & Advisors","Serial medical device entrepreneur."],
  ["Trevor Moody","Board & Advisors","President, TM Strategic Advisors."]]]];
var SHEETS=[];
