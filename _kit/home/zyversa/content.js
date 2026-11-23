var FONTS=['400 1em "Titillium Web"','600 1em "Titillium Web"','300 1em "Titillium Web"','400 1em "Open Sans"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var MAIL="mailto:kcashmere@zyversa.com";
/* Programmes, from zyversa.com (About, Pipeline, Inflammasomes, Renal Lipids) and the company's releases of 31 Mar 2026
   and 13 May 2026. Stage words only as the company states them. [indication, area, title, stage, detail, dim, tag] */
var PIPE=[
 ["Obesity-related cardiometabolic disease","Inflammasome","IC 100","Preclinical · IND planned Q4 2026","A humanized IgG4 monoclonal antibody against inflammasome adaptor ASC. Its lead indication is cardiometabolic conditions associated with obesity, with a diet-induced obesity mouse study planned.",0,"Lead indication"],
 ["CNS and peripheral inflammation","Inflammasome","IC 100","Preclinical","Preclinical data point to CNS conditions such as Parkinson&#8217;s and Alzheimer&#8217;s disease, and non-CNS conditions such as atherosclerosis.",1,"Expansion potential"],
 ["Focal segmental glomerulosclerosis","Renal · orphan","VAR 200","Phase 2a planned","The lead renal indication. VAR 200 is expected to be added to standard-of-care RAS inhibitors and immunosuppressants to better control proteinuria and slow progression.",0,"Lead renal indication"],
 ["Alport syndrome","Renal · orphan","VAR 200","Phase 2a planned","An inherited disease of the kidney&#8217;s filter. The planned Phase 2a enrols patients with FSGS and Alport syndrome.",0,"Orphan indication"],
 ["Diabetic kidney disease","Renal","VAR 200","Expansion","In preclinical studies, 2-hydroxypropyl-beta-cyclodextrin protected podocytes in diabetic kidney disease.",1,"Expansion potential"]];
var TEAM=[
 {g:"Management",name:"Stephen C. Glover",title:"Co-founder, Chairman, CEO and President",sum:"Formerly a co-founder of Coherus Biosciences, and President of Insmed Therapeutic Proteins and Chief Business Officer of Insmed, where he built the biosimilar unit and led its divestiture to Merck."},
 {g:"Management",name:"Karen Cashmere",title:"Chief Commercial Officer",sum:"More than 25 years in biopharmaceutical and device commercialisation; led marketing communications at Mako Surgical through its $1.65 billion acquisition by Stryker, and new product marketing at Auxilium."},
 {g:"Management",name:"Peter Wolfe",title:"Chief Financial Officer and Secretary",sum:"A career in financial roles across financial services, specialty finance and the pharmaceutical and healthcare industries, building financial frameworks for start-up healthcare businesses."},
 {g:"Board of directors",name:"Gregory G. Freitag, JD, CPA",title:"Director",sum:"Principal of FreiMc; a director of PDS Biotechnology, and from 2011 to 2024 a director of Axogen."},
 {g:"Board of directors",name:"James Sapirstein",title:"Director",sum:"Chairman and CEO of 8 Prime Biosciences; formerly CEO of Entero Therapeutics and of Contravir Pharmaceuticals, and CEO of three Nasdaq-listed companies."}];
/* company news releases, each linking out to the published release */
var NEWS=[
 ["13 May 2026","First quarter 2026 financial results and business update","https://investors.zyversa.com/news-releases/news-release-details/zyversa-therapeutics-reports-first-quarter-2026-financial","Investor site"],
 ["31 Mar 2026","Full year 2025 financial results and business update","https://www.biospace.com/press-releases/zyversa-therapeutics-reports-full-year-2025-financial-results-and-provides-business-update","BioSpace"],
 ["21 Jul 2025","CEO mid-year shareholder letter on corporate developments and R&D progress","https://www.globenewswire.com/de/news-release/2025/07/21/3118650/0/en/ZyVersa-Therapeutics-CEO-Issues-Mid-year-Shareholder-Letter-Highlighting-Recent-Corporate-Developments-and-R-D-Progress.html","GlobeNewswire"]];
var SHEETS=[];
