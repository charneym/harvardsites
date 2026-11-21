var FONTS=['300 1em "Sora"','400 1em "Sora"','500 1em "Sora"','600 1em "Sora"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"','700 1em "Inter"'];
var LI="https://www.linkedin.com/company/illexcor-therapeutics-llc/";
var RP="https://reporter.nih.gov/project-details/";
var ZY="https://www.vabio.org/zynext-ventures-invests-in-illexcor-therapeutics-to-advance-novel-oral-therapy-for-sickle-cell-disease";
var SCAN="https://sicklecellanemianews.com/news/new-investment-fueling-clinical-development-ilx002-scd/";
/* Programmes: from illexcor.com, the March 2025 Zynext Ventures release and the NIH RePORTER records of
   Illexcor Therapeutics, LLC (Richmond, VA). [modality, programme, route, status, detail, link, link label] */
var PIPE=[
 ["ILX002 · HbS polymerization inhibitor","Sickle cell disease","Oral","Preclinical · toxicology and safety","The lead drug and the first of its kind: it binds hemoglobin S and directly blocks polymerization and sickling. Illexcor describes it as the most potent HbS polymerization inhibitor discovered to date. Toxicology and safety studies are under way ahead of a first trial in people.",SCAN,"Sickle Cell Anemia News"],
 ["Polymer-destabilizing aromatic aldehydes","Sickle cell disease","Oral","SBIR Phase II · NHLBI","Two lead candidates, VZHE-059 and IEX-021, that act directly on the polymer-forming contacts of hemoglobin S on its αF-helix and keep their anti-sickling potency even in total anoxia. Studied in the Townes HbSS mouse for hemolysis, anemia, red-cell half-life and deformability, and vaso-occlusion.",RP+"11163531","NIH RePORTER"],
 ["VZHE-039 · allosteric hemoglobin modifier","Severe acute respiratory distress syndrome","Intravenous","SBIR Phase II · NHLBI","A water-soluble analog of vanillin that raises hemoglobin's affinity for oxygen within minutes, to widen the margin of safety in severe hypoxemia. In a Phase I study in pigs it produced reproducible, dose-dependent shifts in oxygen affinity.",RP+"11145630","NIH RePORTER"],
 ["5-HMF prodrugs and derivatives","Sickle cell disease","Oral","SBIR Phase I · NHLBI · 2020","Prodrugs and derivatives of hydroxymethylfurfural, the first natural aromatic aldehyde studied as an anti-sickling agent, designed for better oral bioavailability.",RP+"9906825","NIH RePORTER"]];
/* the preclinical results Illexcor reported for ILX002 (Sickle Cell Anemia News, 18 March 2025) */
var EVID=[
 ["Sickling","Kept red cells from sickling for more than two hours, including under oxygen-deprived conditions"],
 ["Hemoglobin","Restored normal hemoglobin levels in a mouse model of human sickle cell disease"],
 ["Hemolysis","Cut reticulocytes from 50% to under 20% and bilirubin by 60%; neutrophils fell by 85%"],
 ["Safety","A good safety profile at three times the expected therapeutic dose; toxicology continues"]];
/* Leadership: the Zynext release (CEO), NIH RePORTER (VP of R&D, contact PI) and the May 2026 Form D (directors). */
var TEAM=[
 {g:"Leadership",name:"Andrew Fleischman",title:"Chief Executive Officer",sum:"Leads Illexcor and its plan to take ILX002 into clinical trials."},
 {g:"Leadership",name:"David R. Light",title:"VP of Research & Development",sum:"Contact principal investigator on Illexcor's NHLBI SBIR Phase II awards."},
 {g:"Leadership",name:"Timothy E. Ladin",title:"Executive officer",sum:"Named as an executive officer in Illexcor's 2026 Form D filing."},
 {g:"Board of directors",name:"Andrew Fleischman",title:"Director",sum:"Chief Executive Officer."},
 {g:"Board of directors",name:"Ted Love",title:"Director",sum:"Named in the 2026 Form D filing."},
 {g:"Board of directors",name:"Giovanni Mariggi",title:"Director",sum:"Named in the 2026 Form D filing."},
 {g:"Board of directors",name:"Maneka Mirchandaney",title:"Director",sum:"Named in the 2026 Form D filing."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["May 2026","Illexcor Therapeutics reports $13 million sold in an equity offering of up to $69 million","SEC Form D","https://formds.com/issuers/illexcor-therapeutics-inc"],
 ["August 2025","NHLBI continues Illexcor's SBIR Phase II programme for polymer-destabilizing aromatic aldehydes in sickle cell disease ($529,259)","NIH RePORTER",RP+"11163531"],
 ["March 2025","Zynext Ventures, the venture arm of Zydus Lifesciences, invests in Illexcor to advance ILX002","VirginiaBio",ZY],
 ["March 2025","Clinical development of ILX002 for sickle cell disease now fueled by new investment","Sickle Cell Anemia News",SCAN]];
var SHEETS=[];
