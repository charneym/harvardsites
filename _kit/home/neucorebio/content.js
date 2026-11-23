var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','800 1em "Archivo"'];
var MAIL="info@neucorebio.com";
var SITEURL="https://neucorebio.com/";
/* Programmes exactly as Neucore Bio and its award records describe them: the NSF STTR Phase I outcomes report for
   award 2507437 (lead clinical programme, plexiform neurofibromas; FixE platform; Lonza and Indiana University named
   for Phase II) and NIH STTR 1R41TR005758-01A1 (CMT1A, miR-381/miR-871 to Schwann cells). No stages are invented:
   each row carries the stage its own award record states. */
var PIPE=[
 ["FixE-NF1","Plexiform neurofibromas (neurofibromatosis type 1)","Peripheral nerve","Lead programme · Phase I complete","Engineered vesicles carry the large NF1 genetic cargo that exceeds the packaging limit of conventional AAV vectors. In patient-derived NF1-deficient Schwann cells they entered the diseased cells, escaped the endosome, translated functional protein and normalised tumour-suppressor control, cell-death checkpoints and inflammatory signalling.","https://www.nsf.gov/awardsearch/showAward?AWD_ID=2507437","NSF award 2507437"],
 ["FieEV-CMT1A","Charcot-Marie-Tooth disease type 1A","Peripheral nerve","STTR Phase I · to Dec 2026","Duplication of the PMP22 gene in Schwann cells drives demyelination and axonal degeneration in roughly 1 in 5,000 people. The programme delivers the microRNAs miR-381 and miR-871 to Schwann cells in vitro and in vivo, and optimises vesicle dosing toward a Phase II application.","https://reporter.nih.gov/project-details/11254810","NIH 1R41TR005758"],
 ["Scalable manufacturing","Platform-wide","Process development","Phase I complete","Chemically defined culture media more than doubled vesicle yield while removing bovine serum entirely, and post-harvest methods now package plasmid DNA and messenger RNA into purified vesicles at high encapsulation efficiency without going back through the cell.","https://www.nsf.gov/awardsearch/showAward?AWD_ID=2507437","NSF award 2507437"],
 ["Peripheral nerve disorders","Modular indication expansion","Peripheral nerve","Research","The platform is re-administrable and modular, so the same vesicle design is being directed at further peripheral nerve disorders beyond neurofibromatosis and the Charcot-Marie-Tooth neuropathies.","https://www.nsf.gov/awardsearch/showAward?AWD_ID=2507437","NSF award 2507437"]];
/* The four Phase I findings, each line taken from the NSF project outcomes report for award 2507437 (Neucore Bio,
   last modified 12 October 2026). */
var EVID=[
 ["Manufacturing","Chemically defined media doubled extracellular vesicle yield and eliminated bovine serum contaminants, opening a path to bioreactor-scale manufacture"],
 ["Cargo packaging","Plasmid DNA and messenger RNA were packaged into purified vesicles after harvest, at high encapsulation efficiency and without losing nanoscale stability"],
 ["Tropism and delivery","Engineered vesicles selectively targeted and entered patient-derived NF1-deficient Schwann cells, then escaped the endosome and translated functional protein"],
 ["Molecular rescue","Delivered cargo restored tumour-suppressor control, re-established cell-death checkpoints and suppressed chronic inflammatory signalling"]];
/* neucorebio.com/#team, with the two scientific co-founders' Ohio State affiliation as the site gives it. */
var TEAM=[
 {g:"Leadership",name:"Brian Price, PhD",title:"Co-founder and Chief Executive Officer",sum:"Leads Neucore Bio from Columbus; co-investigator on the company's NIH STTR award for the CMT1A programme."},
 {g:"Leadership",name:"Silvia Duarte-Sanmiguel, PhD",title:"R&D Director",sum:"Principal investigator on both the NSF and NIH STTR Phase I awards, and author of the Phase I outcomes report."},
 {g:"Founders and board",name:"Peter Kleinhenz",title:"Co-founder, Board Chair",sum:"Co-founded the company and serves as a chair of its board."},
 {g:"Founders and board",name:"Michael Triplett, PhD",title:"Co-founder, Board Chair",sum:"Co-founded the company and serves as a chair of its board."},
 {g:"Founders and board",name:"Kenneth L. Morand, PhD",title:"Co-founder and Board Member",sum:"Co-founder of Neucore Bio and a member of its board."},
 {g:"Scientific co-founders",name:"Daniel Gallego-Perez, PhD",title:"The Ohio State University",sum:"Scientific co-founder; his laboratory's work on tissue nanotransfection underpins the fibroblast-derived vesicle platform."},
 {g:"Scientific co-founders",name:"Natalia Higuita-Castro, PhD",title:"The Ohio State University",sum:"Scientific co-founder and co-principal investigator on the NSF STTR Phase I award."}];
/* Only items that link out: the company's own two 2025 releases and the public award records behind them. */
var NEWS=[
 ["October 2026","NSF STTR Phase I outcomes: scalable manufacturing, post-isolation cargo loading and molecular rescue in NF1-deficient Schwann cells","National Science Foundation","https://www.nsf.gov/awardsearch/showAward?AWD_ID=2507437"],
 ["September 2025","Neucore Bio awarded NIH STTR Phase I grant to pursue exosome-based genetic medicine for Charcot-Marie-Tooth disease type 1A","Neucore Bio","https://neucorebio.com/neucore-bio-awarded-u-s-national-institutes-of-health-nih-sttr-phase-i-grant-to-pursue-exosome-based-genetic-medicine-for-charcot-marie-tooth-disease-type-1a-cmt1a/"],
 ["August 2025","Fibroblast-derived engineered extracellular vesicle technology for targeted delivery of RNA therapeutics to treat CMT1A","NIH RePORTER","https://reporter.nih.gov/project-details/11254810"],
 ["August 2025","Neucore Bio awarded competitive grant from the U.S. National Science Foundation for research on scalability of exosome-based therapeutics for genetic disease","Neucore Bio","https://neucorebio.com/neucore-bio-awarded-competitive-grant-from-the-u-s-national-science-foundation-for-research-on-scalability-of-exosome-based-therapeutics-for-genetic-disease/"],
 ["June 2025","Fibroblast-derived engineered extracellular vesicles as new nucleic acid therapeutic delivery systems for peripheral nervous system genetic disorders","National Science Foundation","https://www.nsf.gov/awardsearch/showAward?AWD_ID=2507437"]];
var SHEETS=[];
