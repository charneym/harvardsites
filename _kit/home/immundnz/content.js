var FONTS=['400 1em "Alegreya"','italic 400 1em "Alegreya"','500 1em "Alegreya"','italic 500 1em "Alegreya"','400 1em "Alegreya Sans"','500 1em "Alegreya Sans"','700 1em "Alegreya Sans"'];
var WEB="https://immundnz.com/";
var MAIL="info@immundnz.com";
var CAL="https://calendly.com/immundnz/30min";
var CORDIS="https://cordis.europa.eu/project/id/101236487";
/* solutions: immundnz.com Solutions menu; detail from each area's case study on immundnz.com/insights. [name, for, tag, detail, link, label] */
var SOL=[
 ["Immune modelling & experimental design","When no single standard assay answers the question","Modelling","Designing, developing and running pre-clinical models (in vitro, ex vivo and in vivo) for complex immune pathways, weighing the signalling cascade, cell–cell interactions and the immunogenic or tolerogenic response.",WEB+"service-template/immune-modelling-experimental-design/","Read more"],
 ["Immune risk assessment","Safety, efficacy and immunogenicity","Risk · safety","Could a compound, or proteins released from a vaccine, trigger a serious adverse immune response such as a cytokine storm? Studies built to answer that question before the clinic.",WEB+"service-template/immune-risk-assessment/","Read more"],
 ["Immuno-oncology & immunotoxicity","Anti-cancer drugs and the immune cells around a tumour","Oncology","For example, testing the effect of an anti-cancer drug on M1 macrophage polarisation and on macrophage viability.",WEB+"service-template/immuno-oncology-and-immunotoxicity/","Read more"],
 ["Inflammatory & systemic conditions","Cardiovascular, respiratory, metabolic and autoimmune disease","Inflammation","For example, testing several formulations, dose by dose, for inhibition of a human Th17 response, measured as IL-17 and IL-22 by flow cytometry.",WEB+"service-template/inflammatory-systemic-conditions/","Read more"],
 ["Tissue damage & cytotoxicity","Drug-induced damage, and whether it is immunogenic","Toxicity","Human cell-based models of the tissue damage caused by commonly used drugs, and of the immune response that damage can set off.",WEB+"service-template/tissue-damage-cytotoxicity/","Read more"],
 ["Signalling pathways","Mode of action, inside the cell","Mechanism","For example, testing whether a modified macrophage medium induces the differentiation of anti-tumour macrophages for cancer therapy.",WEB+"service-template/signalling-pathways/","Read more"],
 ["Vaccines, drug delivery & transfection","Getting a payload into immune cells","Delivery","For example, a cell line-based dendritic cell model receiving mRNA in a nanoparticle carrier, with protein translation read out by flow cytometry.",WEB+"service-template/vaccines-drug-delivery-transfection/","Read more"]];
/* assays: immundnz.com/assays/ pages. [name, for, tag, detail, link, label] */
var ASY=[
 ["Macrophage M1/M2 polarisation","PBMC-derived or cell line macrophages","Macrophages","Macrophages expressing CD14, CD11c, HLA-DR, CD80, CD86 and SIRPα, turned into inflammatory (M1) or regulatory (M2) types in mono or co-culture, characterised by flow cytometry, immunohistochemistry and microscopy.",WEB+"assays/assay-m1-m2-polarisation/","Details"],
 ["Antibody-dependent cellular phagocytosis","ADCP, for antibody-based drugs","Phagocytosis","Target cells co-cultured with macrophages: microscopy shows target and phagocyte co-localising, and flow cytometry quantifies the phagocytosed against the non-phagocytosed population.",WEB+"assays/assay-adcp/","Details"],
 ["Cytokine release assay","PBMC-based, or Immundnz’s own cell line-based CRA","Cytokines","Risk of significant cytokine release from immune cells. The cell line-based CRA gives data comparable to PBMCs while being consistent, reproducible, more cost-effective and suited to screening.",WEB+"assays/cytokine-release-assay-cra/","Details"],
 ["Dendritic cell maturation","From a monocytic cell line or primary cells","Dendritic cells","DCs expressing CD11c, HLA-DR, CD80, CD86 and SIRPα, used to study drug effects on maturation, with a T cell line for functional studies.",WEB+"assays/assay-dendritic-cell-maturation/","Details"],
 ["Th17 differentiation","Human T cells, in 96-well plates","T cells","Th17 cells from PBMCs or TALL-1 cells; IL-17 and IL-22 quantified by intracellular flow cytometry or ELISA to test compounds for inhibition and for Th17 viability.",WEB+"assays/assay-th17/","Details"],
 ["Immune & protein-based assays","Whatever the study needs","Protein biology","The immunologic and protein-based assays a research or drug development programme calls for, built on in-depth knowledge of protein biology.",WEB+"assays/assay-immune-protein-based/","Details"]];
/* people: immundnz.com "Our Story"; no portraits are used */
var TEAM=[
 ["Dr. Ir. Robert-Jan Lamers","Founder and Company Director","Over 20 years of non-clinical and preclinical research for drug discovery and development. Founded the analytical partner Abundnz in 2011."],
 ["Dr. Masih Alam","Co-Founder","Over 20 years in immunology and cell biology, in academic and business settings. Founded ImmunoSYS, a biological consultancy."],
 ["Dr. Rawshan Choudhury","Principal Scientist","Over 20 years in cell biology and protein research across human and other mammalian tissue systems and many therapeutic areas."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["22 July 2025","Immundnz joins TUMORGPLAT, an EU Horizon Europe MSCA staff exchange to make patient-derived tumour organoids a reliable cancer therapy testing platform","CORDIS",CORDIS],
 ["18 July 2024","Flow cytometry in preclinical drug discovery","Immundnz insights",WEB+"2024/07/18/flow-cytometry-in-preclinical-drug-discovery/"],
 ["7 June 2024","ADCP assays in drug discovery","Immundnz insights",WEB+"2024/06/07/adcp-assays-in-drug-discovery/"],
 ["2 April 2024","Macrophage polarisation assays in immuno-oncology","Immundnz insights",WEB+"2024/04/02/macrophage-polarisation-assays-in-immuno-oncology/"]];
var SHEETS=[];
