var FONTS=['300 1em "Archivo"','400 1em "Archivo"','italic 300 1em "Archivo"','400 1em "Lato"','700 1em "Lato"'];
var WEB="https://paratechs.com/";
var MAIL="info@paratechs.com";
var RPT="https://reporter.nih.gov/project-details/11397362";
/* facts: paratechs.com (home, About Us, Contact Us, All Products and product pages, Contract Research Services, News,
   Scientific Advisory Board, Events), NIH RePORTER R44OD032088 (appl 11397362, 11069358), JoVE doi 10.3791/65477;
   all fetched 2026-11-21 */
var SYS=[["Embryo transfer","No anesthesia, no recovery","The NSET device places embryos in the uterus without surgery, so recipient females need no anesthesia, analgesia or recovery afterwards."],
 ["Artificial insemination","Sperm to the uterine horn","The same non-surgical approach transfers sperm, for rapid colony expansion, age-matched cohorts and assisted breeding of aged animals."],
 ["Cryopreservation","Freeze, store, recover","Cryodroppers vitrify mouse embryos and freeze mouse sperm in a standard cryovial, ready for cryorecovery when a line is needed again."]];
var PRODUCTS=[
 ["Mice","mNSET™ 60010","Non-Surgical Embryo Transfer device for mice: uterine embryo transfer without the anesthesia and recovery that surgery requires. U.S. Patent 9,615,903; EtO sterilized; ten devices per box.","https://paratechs.com/products/nset-device-for-mice"],
 ["Mice","mC&I 60020","Artificial insemination device for mice, used with the mNSET and the Cervical Manipulation Rod in ParaTechs’ published JoVE protocol.","https://paratechs.com/products/c-i-device-for-mice-60020"],
 ["Rats","rNSET™ 70010","Non-Surgical Embryo and Sperm Transfer device for rats: cryorecovered embryos, embryos after IVF, colony expansion and assisted breeding. Made by an FDA-registered, ISO 13485 manufacturer.","https://paratechs.com/products/rnset-70010"],
 ["Cryopreservation","Cryodroppers 80010 · 80020","Fast, easy vitrification of mouse embryos (Cryodropper-E) and cryopreservation of mouse sperm (Cryodropper-S), sterile and ready to use in 2 mL or 4 mL cryovials.","https://paratechs.com/products/cryodropper-for-mouse-embryos-80010-10-per-pouch"],
 ["Protein expression","VE-BEVS","Vankyrin-enhanced insect cell lines and transfer vectors: up to 8-fold more protein than parental Sf9 cells, compatible with all conventional baculovirus expression systems.","https://paratechs.com/products/ve-bevs-insect-cell-line-10010"],
 ["Assays","Nitrate Reductor 50010","96 copper-plated cadmium pins that reduce nitrate to nitrite in every well of a microplate at once, for serum, urine, water, soil and plant extracts.","https://paratechs.com/products/nitrate-reductor-kit-50010"]];
var SERV=["Assisted reproduction workshops for mice and rats","Non-surgical embryo or sperm transfer","Sperm and embryo cryopreservation","Cryorecovery and IVF","Rederivation from embryos","Transgenic rodent production","IACUC and protocol consultation","SLA 3D printing and prototype development","SBIR and STTR program support"];
var TEAM=[
 {g:"Founders",name:"Angelika Fath-Goodin, PhD",title:"Co-Founder, Chief Executive Officer",sum:"Chief Scientific Officer since 2004 and CEO since 2011; has won and managed USDA, NSF and NIH SBIR grants. PhD, Friedrich Miescher Institute, Basel."},
 {g:"Founders",name:"Bruce A. Webb, PhD",title:"Co-Founder",sum:"Co-inventor on the VE-BEVS patents; professor emeritus of Entomology at the University of Kentucky. PhD, University of Washington."},
 {g:"Team",name:"Barbara Stone, PhD",title:"Chief Science Officer, Director of NSET Technology",sum:"PI for the NSET research program and chair of the IACUC; joined ParaTechs in 2009. PhD in Microbiology and Molecular Genetics, UCLA."},
 {g:"Team",name:"Sarah Srodulski",title:"Director of Sales and Logistics",sum:"Joined ParaTechs in 2016 as a Research Associate, bringing animal handling and laboratory techniques from the University of Kentucky."},
 {g:"Scientific advisory board",name:"Michael Adang, PhD",title:"Professor, University of Georgia",sum:"Professor of entomology, biochemistry and molecular biology; co-founder and Chief Scientific Officer of InsectiGen."},
 {g:"Scientific advisory board",name:"Glenn King, PhD",title:"Professor, University of Queensland",sum:"Group leader at the Institute for Molecular Bioscience, University of Queensland."}];
var NEWS=[
 ["Aug 2026","NIH continues ParaTechs’ SBIR Phase II award for a rat sperm cryopreservation and artificial insemination system, with $535,088 for the year","NIH RePORTER",RPT],
 ["2026","ParaTechs meets scientists at the TT2026 transgenic technology meeting in Leiden, the Netherlands","ParaTechs",WEB],
 ["Aug 2025","NIH Office of the Director awards SBIR Phase II funding for the rat artificial insemination system","NIH RePORTER","https://reporter.nih.gov/project-details/11069358"],
 ["Jul 2023","Stone and Srodulski in JoVE: inducing pseudopregnancy in female mice without vasectomized males, before non-surgical embryo transfer","JoVE","https://dx.doi.org/10.3791/65477"]];
var SHEETS=[];
