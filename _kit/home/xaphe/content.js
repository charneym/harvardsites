var FONTS=['300 1em "Poppins"','400 1em "Poppins"','500 1em "Poppins"','400 1em "Instrument Sans"','italic 400 1em "Instrument Sans"','500 1em "Instrument Sans"','600 1em "Instrument Sans"'];
/* contact: xaphe.co.uk contact block ("XapHe, 97 Lisburn Road, Belfast ... enquiries@xaphe.co.uk"). Generic address, flagged. */
var MAIL="enquiries@xaphe.co.uk";
var XP="https://xaphe.co.uk/";
/* HAWC, in the company's own words (xaphe.co.uk/technology and /bio-services) and the Innovate UK 10181467 summary
   (LNPs "are recognised as foreign", "require cold-chain storage", "are restricted by the size and number of RNA they
   can deliver, and have suboptimal endosomal escape"; XapHe's peptide "condense[s] RNA into nanoparticles, enabling
   cell entry via two mechanisms"; the particles "can also be stored at room temperature post-lyophilisation").
   [group, title, detail] */
var SPECS=[
 ["Sequence","A 15-amino-acid consensus","AI analysis of human proteins found a 15-aa sequence with an 8-aa clathrin-mediated domain and a 7-aa clathrin-independent one, present in human proteins, viruses and bacteria alike."],
 ["Peptide","Nine residues added","The consensus sequence alone neither complexed nucleic acids nor formed particles. Nine further amino acids — two at the N-terminus, five at the C-terminus, two between the domains — produced HAWC."],
 ["Particles","~100 nm, PDI under 0.06","HAWC condenses nucleic acids into nanoparticles around 100 nm across, with a polydispersity index consistently below 0.06, and without microfluidics."],
 ["Entry","Two routes into the cell","Both entry mechanisms stay functional, which maximises uptake even in primary cells: over 80% transfection across every cell type tested."],
 ["Tolerance","Not seen as foreign","The sequence is not recognised as foreign, so cells can be transfected repeatedly without toxicity — unlike lipid nanoparticles, which provoke an immune response of their own."],
 ["Storage","Room temperature","Particles keep their characteristics after lyophilisation and need no cold chain, even when the cargo is RNA."],
 ["Cargo","Any size, any number","DNA, CRISPR and sgRNA, mRNA, microRNA, oligos or saRNA — any size or number of nucleic acids within one nanoparticle."],
 ["Targeting","Beyond the liver","A targeting motif added to the HAWC peptide carries the cargo to a chosen tissue or cell type, and these particles lyophilise and store at room temperature too."]];
/* the board as listed on xaphe.co.uk/about-us; directors per Companies House NI723771. Text-only masthead. */
var TEAM=[
 {g:"Founders",name:"Prof Helen McCarthy",title:"CEO and co-founder · Chair of Nanomedicine, Queen’s University Belfast; named on over 40 granted patents"},
 {g:"Founders",name:"Prof Nicholas Dunne",title:"CSO and co-founder · Chair of Biomedical Engineering, Dublin City University"},
 {g:"Board",name:"Prof Margaret Topping",title:"Chair of the Board · Chair of Language and Communication, Queen’s University Belfast"}];
/* programmes and funding, from xaphe.co.uk/research and UKRI Gateway to Research. [date, headline, where, url] */
var NEWS=[
 ["31 March 2026","Innovate UK backs Heal-X: a peptide–microRNA biomaterial for chronic wound repair (£99,919)","Innovate UK","https://gtr.ukri.org/projects?ref=10181467"],
 ["Queen’s University Belfast","HAWC carries a multi-epitope mRNA vaccine for osteosarcoma, the most common primary bone cancer in children and adolescents","Research partner",XP+"research"],
 ["Dublin City University","A polymeric nanogel for advanced wound healing, carrying three microRNAs aimed at each phase of repair; in vivo results exceed commercial products to date","Research partner",XP+"research"],
 ["Birmingham","HAWC nanoparticles deliver a new mRNA to the front and the back of the eye in a drop formulation","Research partner",XP+"research"],
 ["18 November 2024","XapHe Ltd incorporated in Belfast, the only RNA company in Northern Ireland","Company","https://find-and-update.company-information.service.gov.uk/company/NI723771"]];
