var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','700 1em "League Spartan"'];
var MAIL="ronorlando@glycoscientific.com";
var GS="https://glycoscientific.com/";
/* product lines, from glycoscientific.com (home, collections and product pages). [line, name, detail, sub, url] */
var PROD=[
 ["Mass spectrometry","IgG isotope and glycoprotein quantitation standards","Monoclonal antibodies with a range of labelled moieties, added directly to the sample before processing, so the standard shares every step with its analyte. Includes iGlycoMab, an IgG2b whose glycans carry ¹⁵N.","Isotope light · amino-acid heavy · glycan heavy · both",GS+"pages/igg-glycoprotein-quantitation-standards"],
 ["Biotherapeutics","Recombinant human IgG standard proteins","Recombinant human IgG1, IgG2 and IgG4 standards for quantifying antibodies, Fc-fusion proteins and their glycans.","IgG1 · IgG2 · IgG4",GS+"pages/recombinant-igg-standard-proteins"],
 ["O-GlcNAc","Site-specific antibodies to O-GlcNAc","Antibodies that recognise a single β-N-acetylglucosamine on a defined serine or threonine, including sites on IRS2, HIPK1 and five sites on four histone proteins.","Histone reagents · H2A, H2B, H3, H4",GS+"pages/antibodies-to-o-glcnac"],
 ["O-Fucose","Antibodies to O-fucose","Pan antibodies to fucosylated serine (anti-FOS) and threonine (anti-FOT), and site-specific antibodies to O-fucosylated Notch1.","Pan fucose · Notch1",GS+"pages/fucose"],
 ["Immunology","Guinea pig and golden hamster reagents","Purified proteins, antibodies and ELISA sets for two important research animals, the guinea pig and the golden (Syrian) hamster.","Proteins · antibodies · ELISA sets",GS+"pages/guinea-pig-reagents"],
 ["Services","Custom antibodies and proteins","A full-service pipeline from antigen design and expression to antibody purification and characterization, plus custom mammalian protein production.","Monoclonal · polyclonal · mammalian expression",GS+"pages/custom-o-glcnac-antibodies"]];
/* Team: glycoscientific.com (About Us), the 2015 iGlycoMab release, UGA CCRC profile, NIH RePORTER. Text-only masthead. */
var TEAM=[
 {g:"Leadership and science",name:"Ron Orlando, PhD",title:"Founder",sum:"Professor of Biochemistry and Molecular Biology, and of Chemistry, at the University of Georgia’s Complex Carbohydrate Research Center; glycomics and glycoproteomics by mass spectrometry."},
 {g:"Leadership and science",name:"Marla Popov",title:"Principal investigator, NIH SBIR programmes",sum:"Leads GlycoScientific’s NIH-funded work on site-specific antibodies to O-GlcNAc and Arg-GlcNAc modified proteins."}];
/* publications with GlycoScientific authors or affiliation (PubMed). [date, title, journal, url] */
var NEWS=[
 ["September 2026","High resolution ion mobility enables the separation of α-galactose containing glycans from their non-α-galactose isomers","J Biomol Tech","https://pubmed.ncbi.nlm.nih.gov/42694862/"],
 ["September 2026","Absolute and relative quantification of glycation on biotherapeutic IgGs using heavy isotope-labeled proteins","J Biomol Tech","https://pubmed.ncbi.nlm.nih.gov/42694860/"],
 ["March 2026","Prediction and characterization of glycated peptides and proteins using hydrophilic interaction liquid chromatography","J Biomol Tech","https://pubmed.ncbi.nlm.nih.gov/41873327/"],
 ["March 2023","Do I need to trypsin digest before releasing IgG glycans with PNGase-F?","J Biomol Tech","https://pubmed.ncbi.nlm.nih.gov/37097917/"],
 ["June 2016","Reliable LC-MS quantitative glycomics using iGlycoMab stable isotope labeled glycans as internal standards","Electrophoresis","https://pubmed.ncbi.nlm.nih.gov/26913967/"]];
var SHEETS=[];
