var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Open Sans"','500 1em "Open Sans"','600 1em "Open Sans"','italic 700 1em "Open Sans"'];
var WEB="https://abilitypharmaceuticals.com/";
var MAIL="contact@abilitypharma.com";
var PR="https://abilitypharmaceuticals.com/en/main-menu/media-center-2/press-release/";
var U_ASCO=PR+"abilitypharma-presents-results-at-asco-2026-of-the-phase-iib-panc-asap-study-with-ibrilatazar-(abtl0812)";
var U_PHX=PR+"new-european-project-phoenix-launches-to-develop-safer-treatments-for-children-with-high-risk-cancer";
var U_LUNG=PR+"abilitypharma-s-ibrilatazar-(abtl0812)-doubles-overall-survival-in-patients-with-squamous-non-small-cell-lung-cancer";
var U_ENDO=PR+"ibrilatazar-(abtl0812)-from-abilitypharma-increases-chemotherapy-effectiveness-by-40-in-patients-with-endometrial-cancer";
var U_INN=PR+"abilitypharma-receives-who-approval-for-its-abtl0812-anticancer-drug-to-be-named-ibrilatazar";
var U_AGC=PR+"agc-pharma-chemicals-and-abilitypharma-work-together-to-produce-innovative-treatment-for-pancreatic-cancer";
var U_7M=PR+"abilitypharma-announces-%E2%82%AC-7-million-financing-round-to-advance-development-of-its-clinical-phase-2b-autophagy-inducer-abtl0812-in-metastatic-pancreatic-cancer";
var U_CORDIS="https://cordis.europa.eu/project/id/101289276";
var U_JCO="https://ascopubs.org/doi/10.1200/JCO.2026.44.16_suppl.4218";
/* programmes: from abilitypharmaceuticals.com (R&D, ABTL0812) and the company's press releases of 2024-2026.
   [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["Ibrilatazar + FOLFIRINOX","Metastatic pancreatic cancer, first line","Phase 2b · completed","PanC-ASAP: a randomised, double-blind, placebo-controlled trial in 140 patients at 23 sites in the United States, Spain, France and Israel, presented at ASCO 2026. The primary endpoint was not met overall; in patients with ECOG performance status 0, median overall survival was 19.3 months against 12.0 on placebo.",U_ASCO,"ASCO 2026"],
 ["Ibrilatazar + paclitaxel / carboplatin","Squamous non-small cell lung cancer, first line","Phase 1/2a · completed","In the ENDOLUNG trial, median overall survival reached 22.5 months against 11.3 months in historical controls, with an overall response rate of 52%.",U_LUNG,"Results, 2025"],
 ["Ibrilatazar + paclitaxel / carboplatin","Advanced or recurrent endometrial cancer, first line","Phase 1/2a · completed","Overall response rate of 65.8% and median progression-free survival of 9.8 months, a 40% increase over historical controls, with ibrilatazar continued as maintenance after chemotherapy.",U_ENDO,"Results, 2024"],
 ["Ibrilatazar, alone and in combination","Relapsed or refractory neuroblastoma and paediatric solid tumours","Phase 1/2 · PHOENIX","The first study of ibrilatazar in children, run by 13 organisations from six countries and coordinated by the Vall d’Hebron Research Institute, with €8.5 million from the EU Cancer Mission under Horizon Europe.",U_PHX,"PHOENIX"]];
/* people: management team as listed on abilitypharmaceuticals.com (Our team > Management Team); headshots there are 150 px, so text rows */
var TEAM=[
 ["Carles Domènech, PhD","Executive Chairman, CEO and co-founder","A cell biologist (CSIC, Memorial Sloan-Kettering) who led business development and licensing at Almirall and Lacer before co-founding the company."],
 ["Héctor Pérez-Montoyo, PhD","Chief Operating Officer and Head of R&D","Joined in 2015 as Director of Biological Research, after a decade of in vivo cancer and autoimmunity research at UT Southwestern, IDIBELL and the Príncipe Felipe Research Center."],
 ["David Saxner","Chief Business Officer","A chemical engineer from Shire, Longfellow Associates and AptaTargets, who joined in July 2024 to lead partnering."],
 ["Petr Vinduška","Chief Financial Officer","A finance graduate of the Prague University of Economics and Business, formerly finance director and managing director at companies in the Czech Republic."],
 ["Vanessa Ruz","Vice-President, Administration and Accounting","An economist from Pompeu Fabra University in Barcelona, specialised in business administration."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 23, 2026","New European project PHOENIX launches to develop safer treatments for children with high-risk cancer","AbilityPharma",U_PHX],
 ["May 30, 2026","AbilityPharma presents results of the phase 2b PanC-ASAP study with ibrilatazar at ASCO 2026","AbilityPharma",U_ASCO],
 ["June 5, 2025","Ibrilatazar (ABTL0812) doubles overall survival in patients with squamous non-small cell lung cancer","AbilityPharma",U_LUNG],
 ["September 9, 2024","Ibrilatazar increases chemotherapy effectiveness by 40% in patients with endometrial cancer","AbilityPharma",U_ENDO],
 ["July 30, 2024","AbilityPharma receives WHO approval for ABTL0812 to be named ibrilatazar","AbilityPharma",U_INN],
 ["March 11, 2024","AbilityPharma announces a €7 million financing round to advance ABTL0812 in metastatic pancreatic cancer","AbilityPharma",U_7M]];
var SHEETS=[];
