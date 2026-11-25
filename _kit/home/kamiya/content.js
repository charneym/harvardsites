var FONTS=['400 1em "Archivo"','600 1em "Archivo"','700 1em "Archivo"','800 1em "Archivo"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var WEB="https://k-assay.com/";
var MAIL="info@k-assay.com";
var TEL="+1 206 575 8068";
/* K-ASSAY reagents for automated chemistry analyzers, as published on k-assay.com (home page and the Immunoassay Reagents page):
   [assay, tag, note]. RUO = "In the U.S., this assay is for research use only." */
var DX=[["RF (Ver.2)","New","Latex-enhanced rheumatoid factor; LoQ 6.65 IU/mL, range to 600 IU/mL"],
 ["β-2 Microglobulin","","Serum 0.2–80 mg/L, urine 0.03–8 mg/L, no sample dilution"],
 ["KL-6","RUO","Monoclonal antibody specific to KL-6; 70–10,000 U/mL"],
 ["Microtransferrin","RUO","Urine, 5–800 µg/dL"],
 ["RLP-C","RUO","Remnant lipoprotein cholesterol, 1–80 mg/dL"],
 ["Vitamin C","","Results in 10 minutes; r = 0.996 against HPLC"],
 ["CRP · D-Dimer · Ferritin","","Monitor important patient attributes on any chemistry analyzer"],
 ["IgA · IgG · IgM · Total IgE","","Serum protein assays"],
 ["Insulin · Factor XIII · FDP","","Plasma FDP and serum/urine FDP"]];
/* the life-science product lines (home page tiles): [line, count, note, url] */
var LS=[["Research ELISAs","Thousands","Kits for research testing of human samples, including many esoteric and difficult-to-find tests","04LifeScienceResearchProducts/04_Research_ELISAs_Home.php?language=english"],
 ["Animal / Preclinical ELISAs","Thousands","Assay and species combinations that often cannot be found anywhere else","04LifeScienceResearchProducts/04_Preclinical_ELISAs_Home.php?language=english"],
 ["Antibodies","1,300+","Monoclonal and polyclonal; mouse, rabbit, rat, sheep, hamster, guinea pig, goat and chicken hosts","04LifeScienceResearchProducts/04_Antibodies_Home.php?language=english"],
 ["Biochemicals","200+","Recombinants, substrates, inhibitors, polymerases and inducers","04LifeScienceResearchProducts/04_Biochemicals_Home.php?language=english"],
 ["Other research products","~300","Colorimetric and fluorescent assays, cell culture and cryopreservation kits","04LifeScienceResearchProducts/04_Other_Research_Products_Home.php?language=english"]];
/* quality and reach (home page and About page) */
var APPS=[["ISO 13485:2016","Our immunoassay reagents for chemistry analyzers are made under a certified ISO 13485:2016 quality system, and carry the CE mark."],
 ["Almost any analyzer","Liquid, ready-to-use reagents with application parameters for most chemistry analyzers: no mixing, dissolving or dilution of reagent or sample."],
 ["Animal diagnostics","A dog C-reactive protein reagent for chemistry analyzers, with dog and cat assays under development."]];
/* history (About page) */
var MFG=[["1983","Founded by Kohji Kamiya","In Thousand Oaks, California. Our first products were the protein kinase inhibitors staurosporine and its analog K252a: the first commercially available staurosporine."],
 ["1996","Seattle","We relocated to Seattle, Washington, and grew into one of the largest selections of ELISA kits in the world."],
 ["1997","K-ASSAY®","A full line of clinical diagnostic and research immunoassays based on immunoturbidimetric technology, for use on standard chemistry analyzers."],
 ["Today","The broadest line in the U.S.","Of liquid serum protein immunoassay reagents, supplied to hospitals, reference labs, research facilities, distributors and instrument companies worldwide."]];
/* news: only items that link out. [date, headline, source, url] */
var NEWS=[
 ["November 2026","Kamiya Biomedical Company exhibits at MEDICA 2026 in Düsseldorf, Hall 1 / D08, with its immunoassay reagents for chemistry analyzers","MEDICA exhibitor directory","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3074425"],
 ["New reagent","Introducing K-ASSAY® RF (Ver.2): a highly sensitive, latex-enhanced, quantitative assay for rheumatoid factor, standardised to the NIBSC 64/002 reference serum","Product flyer (PDF)",WEB+"pdf/flyer/KAMIYA_RF(Ver2)_Flyer.pdf"],
 ["Now available","Anti-Thymine Dimer mAb, clone KTM53: a purified monoclonal antibody that reacts specifically with thymine dimers, for IHC, ELISA, blotting and immunofluorescence","Data sheet (PDF)",WEB+"pdf/MC-062.pdf"]];
