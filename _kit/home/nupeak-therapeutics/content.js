var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','700 1em "Manrope"','800 1em "Manrope"'];
var MAIL="mjholtzman@gmail.com";
var LI="https://www.linkedin.com/company/nupeak-therapeutics-inc/";
var RP="https://reporter.nih.gov/project-details/";
var PM="https://pubmed.ncbi.nlm.nih.gov/";
/* programmes: every line from nupeak-therapeutics.com (home, Fig. 4) and NIH RePORTER abstracts. [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["NuP-4B dpi","Asthma","Inhaled · dry powder","Advanced development","The lead product: a MAPK13 inhibitor formulated for dry powder inhalation, finance-ready for IND approval and first clinical trials in asthma, with defined value-adds and exits for investor partners.","https://nupeak-therapeutics.com/","NuPeak"],
 ["NuP-4A","Asthma and COPD","Intravenous dosing","NIH STTR Phase II","Final non-GLP and GLP pharmacology and toxicology for IND approval, dosing and biomarkers to refine trial design, and CMC transfer to a commercial facility. NHLBI award 5R42HL149523.",RP+"11193773","NIH RePORTER"],
 ["MAPK13 inhibitors","Breast, liver and brain cancers","Discovery","Research","Proprietary lead compounds designed to correct the related pathways found in breast, liver and brain cancers. NCI award 1R41CA235943, “A New Small-Molecule Kinase Inhibitor for Breast Cancer”.",RP+"9679382","NIH RePORTER"]];
/* the evidence behind the target and the lead: NIH RePORTER abstract 11193773 and NuPeak's product summary */
var EVID=[
 ["The target","MAPK13 drives the key features of respiratory airway disease in human cell and animal models"],
 ["In patients’ tissue","Critical components of the pathway were validated in asthma, COPD and long-term Covid-19"],
 ["At the root","The lead corrects the basal-epithelial stem cell activation that drives the key disease phenotypes, a benefit equivalent to Mapk13 deficiency"],
 ["After treatment","Airway inflammation and mucus production were blocked, reversed, and did not recur after treatment stopped"]];
/* the site's team page is a 404; people named on the home page and in NIH RePORTER only. Text-only masthead (CL). */
var TEAM=[
 {g:"Leadership",name:"Michael J. Holtzman, MD",title:"Founder & President",sum:"Started the MAPK13 drug discovery programme at Washington University in 2009 and founded NuPeak in 2012 to carry it into drug development."},
 {g:"Leadership",name:"Kay O. Broschat",title:"Principal Investigator, NIH STTR",sum:"Contact principal investigator on NuPeak’s NHLBI STTR Phase II award, “A New Small-Molecule Kinase Inhibitor for Airway Disease”."}];
/* publications: from nupeak-therapeutics.com/publications, each linking to PubMed or PMC. [year, title, journal, url] */
var NEWS=[
 ["2024","MAPK13 controls structural remodeling and disease after epithelial injury","bioRxiv",PM+"38895360/"],
 ["2024","A correctable immune niche for basal-epithelial stem cell reprogramming and post-viral lung diseases","J Clin Invest","https://pmc.ncbi.nlm.nih.gov/articles/PMC11405052/"],
 ["2024","The post-viral GPNMB+ immune niche persists in long-term Covid, asthma, and COPD","medRxiv",PM+"39252892/"],
 ["2023","A potent MAPK13-14 inhibitor prevents airway inflammation and mucus production","Am J Physiol Lung",PM+"37292761/"],
 ["2021","Basal-epithelial stem cells cross an alarmin checkpoint for post-viral lung disease","J Clin Invest",PM+"34343135/"],
 ["2012","IL-13–induced airway mucus production is attenuated by MAPK13 inhibition","J Clin Invest",PM+"23187130/"]];
var SHEETS=[];
