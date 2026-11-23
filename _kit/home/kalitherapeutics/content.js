var FONTS=['400 1em "Enriqueta"','500 1em "Enriqueta"','600 1em "Enriqueta"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:info@kalitherapeutics.com";
var KP="https://www.kalitherapeutics.com/post/";
var P_IND=KP+"kali-therapeutics-receives-u-s-fda-clearance-for-kt501-investigationalnew-drug-application";
var P_EULAR=KP+"kali-therapeutics-announces-oral-presentation-of-kt502-a-novel-cd19-x-cd3-t-cell-engager-at-the-eu";
var P_EHA=KP+"kali-therapeutics-announces-poster-presentation-of-kt209-a-novel-cd19-x-cd20-x-cd3-trispecific-anti";
var P_E11=KP+"kali-therapeutics-named-to-the-2026-endpoints-11-recognizing-biotech-39-s-mostpromising-startups";
/* Programs, from kalitherapeutics.com (Pipeline) and Kali's 2026 releases. Stage words only as the company states them.
   [program, targets, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["KT501","CD19 × BCMA × CD3","IgG-like tri-specific T-cell engager","Phase 1a · rheumatoid arthritis","Binds CD19 and BCMA to reach a wide spectrum of B-cell populations, including plasma cells, while engaging CD3 through a proprietary masking design. First patient dosed in March 2026; U.S. IND cleared in September 2026. Licensed worldwide to Sanofi.",0,"Clinical",P_IND,"FDA clearance"],
 ["KT502","CD19 × CD3","Bispecific T-cell engager, subcutaneous liquid formulation","Moving into the clinic","Designed for deep B-cell depletion in tissue and the periphery across B cell&#8211;mediated autoimmune diseases. In non-human primates it proved very potent in depleting B cells, with only low and transitory cytokine release (EULAR 2026, oral presentation).",0,"Clinical",P_EULAR,"EULAR 2026"],
 ["KT209","CD19 × CD20 × CD3","Tri-specific antibody for B-cell malignancies","IND-enabling · first-in-human planned 2H 2026","Dual-antigen coverage, designed to prevent escape by low or lost CD19/CD20 expression. In preclinical studies, 100- to 1,000-fold greater potency in killing B-cell lymphoma lines than approved CD20xCD3 or CD19xCD3 therapies (EHA 2026, poster).",1,"Preclinical",P_EHA,"EHA 2026"]];
/* Milestones, as Kali's releases (kalitherapeutics.com, May to September 2026) state them. */
var EVID=[
 ["Founded July 2024","Two molecules in the clinic in a little over two years"],
 ["Licensed to Sanofi","Worldwide exclusive license of KT501: $180 million upfront and near-term, up to $1.05 billion in potential milestones, plus tiered royalties"],
 ["FDA IND clearance","For KT501, supported by the first-in-human Phase 1a study in adults with rheumatoid arthritis in Australia (NCT07234773)"],
 ["2026 Endpoints 11","Named by Endpoints News among the 11 most promising private biotechnology companies"]];
/* kalitherapeutics.com (Team). Text-only masthead; names and titles only, as the site states them. */
var TEAM=[
 {g:"Founders",name:"Weihao Xu, PhD",title:"Founder, Chief Executive Officer",sum:""},
 {g:"Founders",name:"John Wang",title:"Chief Scientific Officer, Cofounder",sum:""},
 {g:"Founders",name:"Jay Zhao",title:"Chief Technology Officer, Cofounder",sum:""},
 {g:"Founders",name:"Min Bao, MD",title:"Chief Medical Officer, Cofounder",sum:""},
 {g:"Leadership",name:"Jeremy Lim",title:"Vice President, Clinical Development",sum:""},
 {g:"Leadership",name:"Shari Thomas",title:"VP, Head of Clinical Operations",sum:""},
 {g:"Leadership",name:"Hailey Yuan",title:"VP, Head of CMC Quality",sum:""},
 {g:"Leadership",name:"Kathryn Li",title:"VP, Head of Accounting and Admin",sum:""},
 {g:"Leadership",name:"Cheryl Madsen",title:"Global Regulatory Lead",sum:""},
 {g:"Leadership",name:"Lorin Roskos",title:"Head of Pharmacology & Translational",sum:""},
 {g:"Leadership",name:"Yefan Wang",title:"Head of Toxicology",sum:""},
 {g:"Leadership",name:"Xiang Guo",title:"Executive Director, Translational Medicine",sum:""},
 {g:"Leadership",name:"Paul Miller",title:"Senior Director of Clinical Development",sum:""},
 {g:"Leadership",name:"Lucas Muigai",title:"Senior Director of Clinical Operations",sum:""},
 {g:"Leadership",name:"Shirley Li",title:"Senior Director, Accounting",sum:""},
 {g:"Leadership",name:"Kit Wong",title:"Biomarker & Scientific Communication Director",sum:""}];
var NEWS=[
 ["25 September 2026","Kali Therapeutics named to the 2026 Endpoints 11, recognizing biotech&#8217;s most promising startups","kalitherapeutics.com",P_E11],
 ["2 September 2026","Kali Therapeutics receives U.S. FDA clearance for KT501 Investigational New Drug application","kalitherapeutics.com",P_IND],
 ["8 June 2026","Poster presentation of KT209, a novel CD19 x CD20 x CD3 trispecific antibody, at the EHA 2026 Annual Congress","kalitherapeutics.com",P_EHA],
 ["18 May 2026","Oral presentation of KT502, a novel CD19 x CD3 T-cell engager, at the EULAR 2026 Annual Congress","kalitherapeutics.com",P_EULAR]];
var SHEETS=[];
