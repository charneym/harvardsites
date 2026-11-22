var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Asap"','500 1em "Asap"','600 1em "Asap"','700 1em "Asap"'];
var MAIL="info@stembiosys.com";
var SB="https://stembiosys.com/";
var LI="https://www.linkedin.com/company/6625749/";
/* products: every line from stembiosys.com (/cellvo-matrix-plus, /chondrocytes, /cellvo-matrix-technology, /products,
   news 2020-11-09 and 2023-06-13). [family, name, use, detail, link, link label] */
var PROD=[
 ["Matrix","CELLvo™ Matrix Plus","Stem cells · cardiomyocytes","The next generation of CELLvo™ Matrix. iPSC-derived cardiomyocytes seeded on it mature and become binucleated within seven days, where conventional approaches give partial maturation in 30 to 100.",SB+"cellvo-matrix-plus","Matrix Plus"],
 ["Matrix","CELLvo™ NeuroMatrix","Neural cells","An extracellular matrix produced in vitro by primary human astrocytes, supporting iPSC-derived and primary neurons, astrocytes, microglia and neural stem cells in mono and co-culture.",SB+"products/cellvo-neuromatrix","NeuroMatrix"],
 ["Matrix","CELLvo™ ChondroMatrix","Chondrocytes","More than 150 proteins secreted and assembled by human chondrocytes on standard culture vessels, for rapid expansion with reduced dedifferentiation.",SB+"chondrocytes","ChondroMatrix"],
 ["Cells","CELLvo™ Human Atrial Cardiomyocytes","Cardiotoxicity screening","Chamber-specific, non-genetically modified hiPSC-derived atrial cells, developed with REPROCELL and purified by negative selection, that mature rapidly on Matrix Plus.",SB+"products/cellvo-human-atrial-cardiomyocytes","Atrial CMs"],
 ["Cells","CELLvo™ Human Chondrocytes","Cartilage research","Young (&lt;40y), healthy (50–70y) or osteoarthritic (50–70y) donor chondrocytes, uncultured at P0 or expanded on ChondroMatrix.",SB+"chondrocytes","Chondrocytes"]];
/* stembiosys.com /management-staff, /board-of-directors, /advisors, /company-history. Text-only masthead. */
var TEAM=[
 {g:"Leadership",name:"Bob Hutchens",title:"Chief Executive Officer",sum:"Also a member of the Board of Directors."},
 {g:"Leadership",name:"Mark Horsey",title:"Chief Financial Officer",sum:""},
 {g:"Founders and board",name:"Xiao-Dong Chen, MD, PhD",title:"Founder · Board",sum:"Developed the patented CELLvo™ Matrix as a tenured professor at UT Health San Antonio, replicating the stem cell niche missing from tissue culture plastic."},
 {g:"Founders and board",name:"Steven A. Davis, MD",title:"Co-founder · Board",sum:"San Antonio dermatologist who partnered with Dr. Chen to license the technology from UT Health San Antonio and form the company."},
 {g:"Founders and board",name:"Robert S. Langer, ScD",title:"Board",sum:"MIT bioengineer, on the board from the start; his lab explored why the CELLvo™ Matrix works as well as it does."},
 {g:"Founders and board",name:"Fred Dinger",title:"Chairman of the Board",sum:""}];
var BOARD="Paul Castella, PhD · Ian Clements, MSc · Martin Landon";
var SAB="John Harper, PhD (Chair) · Christopher Navara, PhD · Steve Badylak, PhD, DVM, MD · Todd Herron, PhD · José Jalife, MD · Jeanne Loring, PhD";
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","An Aging Cell study from UT Health San Antonio: aging MSCs on CELLvo™ Matrix Plus expand about a million-fold more than on plastic","StemBioSys",SB+"new-blog/2026/10/7/1-million-fold-greater-expansion"],
 ["August 2025","StemBioSys scientists publish superficial zone chondrocyte expansion on chondrocyte-derived decellularized matrices in Cartilage","PubMed","https://pubmed.ncbi.nlm.nih.gov/40886119/"],
 ["June 2023","StemBioSys launches CELLvo™ Atrial Cardiomyocytes, developed with REPROCELL, for chamber-specific cardiotoxicity screening","StemBioSys",SB+"news/2023/6/29/stembiosys-announces-launch-of-cellvo-atrial-cardiomyocyte-a-technological-leap-forward-in-cardiotoxicity-screening"],
 ["May 2023","An NIH SBIR grant to develop a native extracellular matrix that improves islet function","StemBioSys",SB+"new-blog/2023/5/15/stembiosys-awarded-an-sbir-grant-to-advance-islet-transportation-using-ecm"],
 ["September 2021","StemBioSys closes an oversubscribed $6.6 million Series C financing","StemBioSys",SB+"news/2021/9/28/stembiosys-closes-66-million-series-c-financing"]];
var SHEETS=[];
