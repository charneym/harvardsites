var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"'];
var WEB="https://cloverleafbio.com/";
var MAIL="contact@cloverleafbio.com";
var ADDR="101 College Street, Suite 210, New Haven, CT 06510";
var MAP="https://www.google.com/maps/search/?api=1&query=101+College+Street+New+Haven+CT+06510";
var PR="https://www.globenewswire.com/news-release/2026/09/08/3357463/0/en/cloverleaf-bio-raises-33-million-seed-financing-to-advance-novel-rna-based-cancer-therapeutics.html";
var YV="https://ventures.yale.edu/news/yale-spinout-cloverleaf-bio-raises-33m-seed-financing-advance-novel-rna-based-cancer";
var RP_HCC="https://reporter.nih.gov/project-details/11175149";
var RP_RCC="https://reporter.nih.gov/project-details/11415846";
var JOBS="https://cloverleaf-bio.breezy.hr/";
/* pipeline: from the 2026-09-08 seed financing release and the NIH RePORTER abstracts (1R42CA290914-01A1; 75N91025C00020).
   [programme, indication, stage label, detail, link, link label] */
var PROG=[
 ["CLB-001 · inhibitory tRNA","Hepatocellular carcinoma, which accounts for over 90% of liver cancer cases","Toward early clinical testing","An engineered tRNA carrying 5-fluorouracil that inhibits several tRNA-modifying enzymes at once. In preclinical studies it showed a nanomolar IC50 in HCC cells and outperformed the standard of care, sorafenib, in vivo.",RP_HCC,"NCI STTR award"],
 ["Antibody-tRNA conjugate","Colorectal cancer","Preclinical development","An inhibitory tRNA used as the payload of a tumor-targeting antibody. CLB-001 stayed active in colorectal cancer cell lines resistant to frontline chemotherapy and current ADC payloads.",PR,"Seed release"],
 ["Engineered tRNAs for ccRCC","Clear cell renal cell carcinoma, over 75% of kidney cancer cases","NCI SBIR concept award","Optimal tRNA sequences for ccRCC, tested in a panel of ccRCC cell lines and in a mouse model of the disease.",RP_RCC,"NIH RePORTER"]];
/* investors named in the seed release (type only, BW/CJ) */
var PARTNERS=["4BIO Capital","AbbVie Ventures","Eli Lilly and Company","Boehringer Ingelheim Venture Fund","Draper Associates","Mission BioCapital","American Cancer Society BrightEdge"];
/* people: founders and advisors as named in the seed release; no portraits are published */
var TEAM=[
 ["Austin Draycott, Ph.D.","Co-founder and Chief Executive Officer","Did his doctoral work on RNA modifications in Wendy Gilbert’s lab at Yale, developing tools to map dihydrouridine across the mammalian transcriptome."],
 ["Cole Lewis, Ph.D.","Co-founder and Chief Scientific Officer","Did his doctoral research on RNA modifications and tRNA-modifying enzymes in the Gilbert lab at Yale."],
 ["Wendy Gilbert, Ph.D.","Co-founder and Chair, Scientific Advisory Board","Maxine F. Singer ’57 PhD Professor of Molecular Biophysics and Biochemistry at Yale University."]];
var ADVISORS=["Albert Lai, Ph.D., AbbVie Ventures","Luisa Escobar-Hoyos, Ph.D., Yale","Michael McCaman, Ph.D., former head of CMC at Intellia"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 8, 2026","Cloverleaf Bio raises a $33 million seed financing to advance novel RNA-based cancer therapeutics","GlobeNewswire",PR],
 ["September 8, 2026","Yale spinout Cloverleaf Bio raises $33M seed financing","Yale Ventures",YV],
 ["September 15, 2025","NCI SBIR concept award ($355,000) for engineered tRNA therapeutics in clear cell renal cell carcinoma","NIH RePORTER",RP_RCC],
 ["June 23, 2025","NCI awards a $399,966 STTR grant to develop engineered inhibitors of tRNA-modifying enzymes","NIH RePORTER",RP_HCC]];
var SHEETS=[];
