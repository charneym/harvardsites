var FONTS=['300 1em "Sora"','400 1em "Sora"','italic 300 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Public Sans"','500 1em "Public Sans"','600 1em "Public Sans"','400 1em "Krona One"'];
var WEB="https://artiambio.net/";
var MAIL="contact@artiambio.net";
var R_SSC="https://reporter.nih.gov/project-details/11419003";
var R_SSC1="https://reporter.nih.gov/project-details/11185620";
var R_AUD="https://reporter.nih.gov/project-details/10820349";
var R_CUD="https://reporter.nih.gov/project-details/10546566";
var R_NASH="https://reporter.nih.gov/project-details/10323904";
/* programmes: artiambio.net (Indications, Targeted Solutions) and NIH RePORTER (1R41DK130765-01, 1R43DA057168-01,
   1R41AA031392-01, 1R41AG090138-01A1 / 5R41AG090138-02). [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["Neutral CB1 antagonist","Non-alcoholic steatohepatitis (NASH)","NIDDK STTR Phase I · 2021","A peripherally selective neutral antagonist of the CB1 receptor, with limited brain penetration and no suppression of the receptor’s basal activity. Targeting hepatic CB1 receptors decreases de novo lipogenesis and increases fatty acid oxidation, and reversing fatty liver is a route to resolving NASH.",R_NASH,"NIH RePORTER"],
 ["CB1 partial inverse agonist","Cannabis use disorder (CUD)","NIDA SBIR Phase I · 2022","An orally active, potent and selective partial inverse agonist with limited brain penetration. In rodent studies it is functionally as efficacious as rimonabant but produces no dysphoria or anhedonia. There is no FDA-approved medication for CUD.",R_CUD,"NIH RePORTER"],
 ["Lead compound and backup","Alcohol use disorder (AUD)","NIAAA STTR Phase I · 2023","High-affinity, low-intrinsic-efficacy partial inverse agonists that preserve the basal activity of the CB1 receptor. Efficacy studies in a rat model of alcohol consumption and relapse, with the University of North Carolina’s Bowles Alcohol Research Center.",R_AUD,"NIH RePORTER"],
 ["Lead compound","Prader-Willi syndrome (PWS)","Orphan indication · preclinical","PWS is the most common genetic cause of serious childhood obesity, with no FDA-approved therapy. In preclinical studies Artiam’s lead compound produces potent weight-loss and hunger-satiety effects while eliminating adverse effects.",WEB+"targeted-solutions-cb1-receptor-antagonists/","Artiam Bio"],
 ["APT101 · apelin receptor agonist","Systemic sclerosis-associated interstitial lung disease","NIA STTR Phase I · 2025–26","Validation of APT101 in an aging mouse model of pulmonary fibrosis, testing whether selective agonism of the apelin receptor (APJ) promotes vascular repair and limits fibrosis. Principal investigator Robert Willette, with Rachel Knipe. The project narrative names APIE Therapeutics as the developer of APT101.",R_SSC,"NIH RePORTER"]];
var FUNDERS=["National Institute of Diabetes and Digestive and Kidney Diseases","National Institute on Drug Abuse","National Institute on Alcohol Abuse and Alcoholism","National Institute on Aging"];
/* people: artiambio.net/about-artiam-bio (Management Team, Key Members, Scientific Advisors), set in views.js TEAMG */
/* news: NIH RePORTER award records only (every item links out). [date, headline, source, url] */
var NEWS=[
 ["June 19, 2026","NIA renews Artiam Bio’s STTR award for the validation of APT101 in SSc-associated interstitial lung disease","NIH RePORTER",R_SSC],
 ["September 19, 2025","NIA STTR Phase I award: APT101 in an aging model of pulmonary fibrosis","NIH RePORTER",R_SSC1],
 ["September 20, 2023","NIAAA STTR Phase I award: a CB1 therapy for alcohol use disorder","NIH RePORTER",R_AUD],
 ["August 1, 2022","NIDA SBIR Phase I award: a treatment for cannabis use disorder","NIH RePORTER",R_CUD]];
var SHEETS=[];
