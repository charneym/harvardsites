var FONTS=['300 1em "Rubik"','400 1em "Rubik"','500 1em "Rubik"','600 1em "Rubik"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"','600 1em "IBM Plex Mono"'];
var WEB="https://www.melioratherapeutics.com/";
var MAIL="david@melioratherapeutics.com";
var BW="https://www.businesswire.com/news/home/";
var PAPER="https://doi.org/10.1038/s41467-026-78814-0";
/* the platform, as described in Meliora's press releases (Business Wire, Sept 2022 and Feb 2024). [feature, short, detail] */
var PROPS=[
 ["AnchorOmics","Proprietary machine-learning platform","A multimodal, mechanism-of-action machine-learning algorithm, built to discover and develop small-molecule oncology therapies for high-value cancer targets."],
 ["Molecular fingerprints","Tens of thousands of compounds","Meliora has developed molecular fingerprints for tens of thousands of compounds, the data that the platform learns from."],
 ["An inference engine","Small molecule to target","From those fingerprints, an inference engine identifies small-molecule and target mechanism-of-action pairs."],
 ["An atlas of mechanisms","Drugs and cancer biology","The goal: the industry’s first atlas of drug mechanisms and their impact on cancer biology."]];
/* research, as published: the Nature Communications paper (19 Oct 2026, PMID 43045713) and the CDK11 patent (BioWorld, May 2024) */
var PROG=[
 ["CDK11","A core cancer dependency","With Yale, Stanford and Cold Spring Harbor Laboratory, the team showed that CDK11 is a critical regulator of cancer cell survival, required for RNA splicing and the expression of homologous recombination genes.",PAPER],
 ["Biomarker","Chromosome 1p36 deletion","Heterozygous deletions of chromosome 1p36, which encompasses CDK11 and its activating cyclin CCNL2, were identified as a recurrent, predictive biomarker of sensitivity to CDK11 inhibition.",PAPER],
 ["Efficacy vs. toxicity","A genetic platform in vivo","A genetically engineered mouse model separates the on-target from the off-target effects of CDK11 inhibitors, a generalisable strategy for novel oncology targets.",PAPER],
 ["MEL-495R","Oral CDK11 inhibitor","Studied in that model, the orally bioavailable inhibitor revealed on-target toxicity and a narrow therapeutic index, findings the paper reports in full.",PAPER]];
var INVEST=["HOF Capital","ZhenFund","Obvious Ventures","Village Global","American Cancer Society BrightEdge","Pebblebed","Axial","Olive Capital"];
/* people: as named in Meliora's press releases (Business Wire 2022, 2023, 2024) */
var TEAM=[
 ["David Li","Co-founder and CEO","Co-founded Meliora in 2021 with Jason Sheltzer and Joan Smith."],
 ["Claudio Chuaqui, PhD","Chief Scientific Officer","Over 20 years in oncology drug discovery at Syros, AstraZeneca, Celgene and Biogen, including work that led to the approval of osimertinib. A computational chemist: BSc, University of Manitoba; PhD, University of Waterloo."],
 ["Anand Selvaraj, PhD","VP and Head of Cancer Biology","Previously a Director in Novartis’s Precision Oncology group, leading drug discovery teams, and earlier at H3 Biomedicine."],
 ["Jason Sheltzer, PhD","Scientific Co-founder","Cancer biologist whose paper in Science Translational Medicine showed how often cancer drugs’ mechanisms of action are mischaracterised."],
 ["Joan Smith","Technical Co-founder","Co-founded Meliora in 2021."]];
var BOARD=["Dieter Weinand · Chairman, former Chairman and CEO of Bayer Pharmaceuticals","Jean-Jacques Bienaimé · former Chairman and CEO of BioMarin"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["19 October 2026","A genetic platform to deconvolve efficacy and toxicity reveals the on-target effects of CDK11 inhibition in vivo","Nature Communications",PAPER],
 ["17 July 2024","Dieter Weinand, former Chairman and CEO of Bayer Pharmaceuticals, and Jean-Jacques Bienaimé, former Chairman and CEO of BioMarin, join the board","Business Wire",BW+"20240716836603/en/Meliora-Therapeutics-Announces-Appointment-of-Biopharma-Luminaries-to-Board-of-Directors"],
 ["12 February 2024","Claudio Chuaqui, PhD, promoted to Chief Scientific Officer; Anand Selvaraj, PhD, joins as VP and Head of Cancer Biology","Business Wire",BW+"20240212823415/en/Meliora-Therapeutics-Establishes-Leadership-Team-with-Key-Promotion-and-New-Addition"],
 ["29 September 2022","Meliora raises an $11M seed financing, led by HOF Capital and ZhenFund, to build the first mechanism-of-action atlas in oncology","Business Wire",BW+"20220929005036/en/Meliora-Therapeutics-Raises-11M-Seed-Financing-to-Develop-First-Mechanism-Of-Action-Atlas-in-Oncology"]];
var SHEETS=[];
