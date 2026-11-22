var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','400 1em "Source Sans 3"','600 1em "Source Sans 3"'];
var WEB="https://enzytag.com/";
var MAIL="info@enzytag.com";
var TEL="+31 45 208 4814";
var CORDIS="https://cordis.europa.eu/project/id/101311592";
var PDB="https://www.rcsb.org/structure/5OX2";
var R1="https://doi.org/10.1002/adsc.201600017";
var R2="https://doi.org/10.1016/j.cbpa.2017.01.017";
var R3="https://doi.org/10.1002/adsc.201700314";
var R4="https://doi.org/10.1039/c9gc03600h";
/* applications: as described on enzytag.com (Technology and Proposition pages). [area, subject, stage label, detail, link, link label] */
var PROG=[
 ["Linear peptide drugs and small proteins","Chemo-enzymatic peptide synthesis (CEPS)","Licensable technology","A solvent-free adjunct to solid-phase synthesis. EnzyTag reports higher yields than solid-phase synthesis alone for long or complex peptides, and says the approach can be applied to the large majority of marketed peptide medicines with little new capital equipment.",R4,"Green Chem. 2019"],
 ["Macrocycles and cyclotides","Head-to-tail cyclisation","Explored with partners","The same ligase chemistry closes a peptide chain end to end in water, which EnzyTag describes as an entry into cyclic peptide drugs.",R3,"Adv. Synth. Catal. 2017"],
 ["Conjugates, ADCs, PROTACs and LYTACs","Expressed protein ligation (EPL)","Discovery collaborations","Ligases join peptides and proteins to each other, linking payloads to proteins through a short peptide linker. EnzyTag points to single, monodisperse products as the advantage over existing bioconjugation routes.",R2,"Curr. Opin. Chem. Biol. 2017"]];
/* people: as published on enzytag.com (Team and Scientific Advisory Board). Portraits are the company's own. */
var TEAM=[
 ["Leendert van den Bos","Chief Executive Officer","MSc and PhD in bio-organic chemistry from Leiden University. He worked at Organon BioSciences, Schering-Plough, Merck Sharp & Dohme and Aspen Pharmacare, mostly in process research and development, and holds an executive MBA from Nyenrode University.","p-vandenbos.webp"],
 ["Roger McDonald","Business Development","Chemistry graduate of the University of Birmingham. Twenty years at Ubichem, where he became a board member at 29 and helped found a development and manufacturing site in Budapest, then European business development at Cambridge Major Laboratories. He joined EnzyTag at the beginning of 2019.","p-mcdonald.webp"]];
var SAB=[
 ["David Craik","Scientific Advisor","Professor of Chemistry at the Institute for Molecular Bioscience, University of Queensland, and an Australian Research Council Laureate Fellow. His research covers cyclic peptides and NMR in drug design; he is a Fellow of the Australian Academy of Science.","p-craik.webp"],
 ["Dave Bramhill","Scientific Advisor","More than 25 years in engineering and producing biologics, including antibodies and scaffolds. He helped establish Merck's biologics department and has since worked with startup biotech companies and a venture fund, consulting on business development and technology applications.","p-bramhill.webp"]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["11 June 2026","EnzyTag joins FlexCAT, a Horizon Europe doctoral network on flexible and disordered protein targets","CORDIS, European Commission",CORDIS],
 ["2019","Sustainable, cost-efficient manufacturing of therapeutic peptides using CEPS","Green Chemistry",R4],
 ["2017","Omniligase-1, a tool for peptide head-to-tail cyclisation","Advanced Synthesis & Catalysis",R3],
 ["2017","Enzyme-mediated ligation technologies for peptides and proteins","Current Opinion in Chemical Biology",R2],
 ["2016","Peptiligase, a cosolvent-stable peptide ligase for ligation and cyclisation in water","Advanced Synthesis & Catalysis",R1]];
var SHEETS=[];
