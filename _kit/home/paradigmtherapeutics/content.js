var FONTS=['400 1em "Crimson Pro"','500 1em "Crimson Pro"','400 1em "Lato"','700 1em "Lato"'];
var MAIL="mailto:rryan@paradigmtherapeutics.com";
var TRIAL="mailto:cure@kapadi.com";
var CT="https://clinicaltrials.gov/study/";
/* The SD-101 programme, from paradigmtherapeutics.com (Zorblesia, Patients & Families, News) and the 25 Oct 2026 PR Newswire
   release on the first patient in SD-007. [study, who, title, status, detail, dim, tag, link] */
var PIPE=[
 ["Phase II and III","All major subtypes","SD-101 cream, whole body","Completed","217 children and adults with Simplex, Recessive Dystrophic or Junctional EB, some as young as 21 days, applied SD-101 over the entire body daily for three months. Outcomes: target wound closure, and the body surface area covered by blisters and wounds.",0,"Completed",""],
 ["SD-007 · Phase 3","Ages 28 days to 12 years","Randomized, double-blind, placebo-controlled","First patient enrolled, October 2026","About 80 children with Simplex, Recessive Dystrophic or Junctional EB, at 17 sites in 14 countries, apply SD-101 or a comparator daily over the whole body for two months. It measures target wound closure, the body surface area of wounds and lesions, and itch.",0,"Enrolling","NCT07482787"],
 ["SD-008","Continuation","Continued treatment after SD-007","Follows SD-007","Patients who complete the SD-007 trial can go on to SD-008, so their treatment can continue.",1,"Next",""]];
/* Zorblesia: what the active moiety does (paradigmtherapeutics.com, Zorblesia). */
var EVID=[
 ["Wound healing","Accelerates wound healing by promoting the formation of epithelial and granulation tissue"],
 ["The wound environment","Bacteriostatic and bactericidal, and effective in removing necrotic tissue"],
 ["The skin","Keratolytic effects"],
 ["Inflammation","Anti-inflammatory effects"]];
/* paradigmtherapeutics.com (About Us). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Robert Ryan, PhD",title:"Founder & Chief Executive Officer",sum:"Previously CEO and co-founder of Scioderm, which developed a topical therapy for EB. 30+ years from preclinical to Phase IV; directly involved in the approval of more than 20 drug candidates."},
 {g:"Leadership",name:"Lisa Zimmerman",title:"EVP, Regulatory Affairs, Compliance & Quality",sum:"35+ years in clinical operations, regulatory affairs, quality assurance and compliance, delivering programmes from IND to NDA or BLA."},
 {g:"Leadership",name:"Ron Nardi, PhD",title:"Executive VP, Development",sum:"35+ years from target identification to global regulatory affairs; senior roles at Scioderm, the International Partnership for Microbicides and Ferring. PhD in pharmacology and toxicology."},
 {g:"Leadership",name:"Michael Zimmer, MBA",title:"Chief Financial Officer",sum:"30 years across finance, operations and supply chain; past CFO and President/CEO of ARIES ALLIANCE, and earlier with Price Waterhouse Coopers."},
 {g:"Leadership",name:"Willistine Lenon",title:"Executive VP, Clinical Operations",sum:"34+ years running clinical trials in the US, Canada, Latin America, Europe, Australia and Pan-Asia, including dermatology."},
 {g:"Leadership",name:"Christopher Ryan, MBA",title:"Executive Director, Regulatory Affairs & Operations",sum:"10+ years of regulatory and supply chain work on global clinical trials, including rare diseases, from Pre-IND through Phase 3."},
 {g:"Leadership",name:"Steve Cole",title:"Head of Business Development",sum:"Management roles at Abbott Laboratories, G.D. Searle and A.H. Robins; former head of the PMA&#8217;s Far Eastern section, with numerous licensing and acquisition deals."},
 {g:"Strategic advisor",name:"Dr. Fred Eshelman",title:"Founder, Eshelman Ventures",sum:"Investor in Paradigm and its strategic advisor since May 2025."}];
/* News that links out (paradigmtherapeutics.com/news and PR Newswire). [date, title, source, url] */
var NEWS=[
 ["Oct 25, 2026","First patient enrolled in the SD-007 Phase 3 trial of SD-101 (Zorblesia)","PR Newswire","https://kyodonewsprwire.jp/release/202610258655"],
 ["Aug 17, 2026","Paradigm named a finalist for the 2026 Prix Galien USA Award, Best Startup","Paradigm news","https://www.paradigmtherapeutics.com/news/prix-galien-2026-nominees-official-selection-announced/"],
 ["Jun 18, 2025","An additional $12.6 million from Eshelman Ventures, bringing 2025 investment to $25.1 million","Paradigm news","https://www.paradigmtherapeutics.com/news/paradigm-eshelman-investment-sd101-eb-treatment/"],
 ["Jun 20, 2025","The Post and Courier on Dr. Robert Ryan and the journey behind SD-101","Paradigm news","https://www.paradigmtherapeutics.com/news/post-and-courier-highlights-work-of-rafi-ryan-and-paradigm-therapeutics/"],
 ["Aug 22, 2023","Paradigm acquires the worldwide rights to SD-101 from Amicus Therapeutics","Paradigm news","https://www.paradigmtherapeutics.com/news/paradigm-acquires-eb-therapy/"]];
var SHEETS=[];
