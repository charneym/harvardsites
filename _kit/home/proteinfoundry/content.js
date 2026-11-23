var FONTS=['300 1em "Montserrat"','500 1em "Montserrat"','400 1em "Montserrat"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="information@proteinfoundry.com";
var PFB="https://www.proteinfoundry.com/";
/* The catalogue, from proteinfoundry.com (Products menu, category pages and the home page carousels).
   [family, scope, title, availability, detail, dim] */
var PIPE=[
 ["CXC chemokines","Human and murine","CXCL4, CXCL10, CXCL12-alpha, CXCL13 and the rest of the CXC family","In the catalogue","Recombinant CXC chemokines expressed with the native N-terminal sequence intact, because the first residues are what the receptor reads. CXCL12-alpha — the chemokine whose structure in complex with the CXCR4 receptor our founders solved — is a catalogue staple.",0],
 ["CC chemokines","Human and murine","CCL8, CCL14(9-74), CCL15(25-92) and the rest of the CC family","In the catalogue","The CC family, including the naturally processed forms whose truncated N-termini carry the activity, produced to the same refolding and purification standard as every other protein we ship.",0],
 ["Other chemokines","Human and murine","XC and CX3C chemokines","In the catalogue","The smaller families, kept in catalogue so that a laboratory working across the whole chemokine network can source every ligand from one place.",0],
 ["Labelled proteins","Any chemokine in the catalogue","Fluorescent dye, biotin or your own cargo","Labelled to order","Any chemokine in the catalogue can be supplied labelled with the fluorescent dye of your choice, with biotin, or with a small molecule you specify — for imaging, binding assays and flow cytometry.",0],
 ["Tagged proteins","Any chemokine in the catalogue","C-terminal tag of your choice","Labelled to order","Tags go on the C-terminus, so the N-terminus that drives receptor activation stays exactly as nature made it.",0],
 ["Custom","Beyond the catalogue","Variants, mutants and stable-isotope-labelled protein","By request","Sequence modifications to any catalogue chemokine, pre-clinical quantities for in vivo work, and metabolic labelling with 15N or 13C for NMR and mass spectrometry.",1]];
/* Quality control, from proteinfoundry.com (Quality Assurance). */
var EVID=[
 ["Purity and content","Verified by SDS-PAGE analysis and reversed-phase HPLC"],
 ["Authenticity","Verified by mass spectrometry, to confirm the correct molecular weight"],
 ["Structural integrity","Verified by 1- and 2-dimensional NMR spectroscopy, to confirm the protein is properly folded"],
 ["Biological activity","Confirmed by in vitro calcium flux and chemotaxis assays, where available"],
 ["Endotoxin","Tested by the LAL method: under 0.01 EU per microgram of protein"]];
/* proteinfoundry.com (About Us). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Founders",name:"Brian F. Volkman, PhD",title:"Co-founder and President",sum:"Structural biologist with 24 years of research experience in protein design, engineering and structure-based drug discovery. Professor of biochemistry at the Medical College of Wisconsin."},
 {g:"Founders",name:"Francis C. Peterson, PhD",title:"Co-founder and Vice President",sum:"Structural biochemist with 20 years of research experience in the design, production, bioassay and 3D structure determination of recombinant cytokine and chemokine proteins. Associate professor of biochemistry at the Medical College of Wisconsin."},
 {g:"Founders",name:"Michael B. Dwinell, PhD",title:"Co-founder and Vice President",sum:"Twenty-two years of research experience investigating the pathological and physiological mechanisms of human inflammatory diseases and cancer. Associate professor of microbiology and molecular genetics at the Medical College of Wisconsin."},
 {g:"Laboratory and operations",name:"Nicholas S. Barnekow",title:"Production",sum:"Research technologist at the Medical College of Wisconsin with six years of research experience, ensuring quality production."},
 {g:"Laboratory and operations",name:"Leyla Sutton, MBA",title:"Director of Marketing",sum:"Specialises in business analytics and information technology management, with an MBA and an MS in IT Management from the University of Wisconsin-Milwaukee."},
 {g:"Laboratory and operations",name:"Alexa De La Sancha",title:"Marketing Communications Specialist",sum:"Research technologist at the Medical College of Wisconsin, with a bachelor's degree in biomolecular engineering."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","Chemokines do more than direct traffic","Literature highlights",PFB+"chemokines-do-more-than-direct-traffic"],
 ["October 2026","New study confirms the safety of CCL20LD","Recent publications",PFB+"new-study-confirms-safety-of-ccl20ld"],
 ["April 2026","Cyclic D-sulfopeptide ligands lend drug development a helping hand","Literature highlights",PFB+"cyclic-d-sulfopeptide-ligands-lend-drug-development-a-helping-hand"],
 ["February 2026","The complex role of heparan sulfate in regulating inflammation","Recent publications",PFB+"complex-role-of-heparan-sulfate"],
 ["December 2025","Decoding the selective promiscuity of the chemokine network","Recent publications",PFB+"decoding-the-selective-promiscuity-of-the-chemokine-network"],
 ["June 2025","Encoding and decoding selectivity and promiscuity in the human chemokine-GPCR interaction network","PubMed","https://pubmed.ncbi.nlm.nih.gov/40273912/"],
 ["August 2025","Protein Foundry featured by MKE Startup News as “Milwaukee’s medical foundry”","Protein Foundry",PFB+"proteinfoundryfeaturedbymkestartupnews"]];
/* Customer words, quoted from the Reviews block on proteinfoundry.com. [quote, attribution] */
var SAID=[
 ["Protein Foundry is a source of high-quality cytokines that have been critical for our R&D studies. Their responsiveness has been incredible and has helped us move our research forward. I would have no hesitation in recommending them to collaborators, as I have many times!","Retham Technologies"],
 ["I won’t buy my chemokines from anywhere else!","Medical College of Wisconsin"]];
var SHEETS=[];
