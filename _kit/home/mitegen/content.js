var MAIL="info@mitegen.com";
var MG="https://www.mitegen.com/";
var RP="https://reporter.nih.gov/project-details/";
/* NIH-funded development, every line from NIH RePORTER (org MITEGEN, LLC, Ithaca) and mitegen.com press releases.
   [years, title, sub, status, detail, link, label] */
var PIPE=[
 ["2006–12","High-throughput crystallography tools","NIH NIGMS STTR · PI Robert Thorne","Delivered","Tools for high-throughput protein crystallization and structure determination, developed with Cornell: the research behind MiTeGen’s mounts and crystallization consumables.",MG+"learn/about-mitegen/management-team/","Founding story"],
 ["2012–16","Hyperquenching cryocooler","NIH NIGMS SBIR, Phase I and II","Launched 2016","A hyperquenching cryocooler for biomolecular X-ray crystallography. It launched in July 2016 as NANUQ, an automated high-speed cryocooling device, and a day-use NANUQ Access Facility opened in Ithaca in 2017.",MG+"mitegen-announces-nanuq-an-automated-high-speed-cryocooling-device/","Launch release"],
 ["2020","Cryo-EM sample preparation","NIH NIGMS SBIR Phase I","Funded","Technology for the preparation and storage of samples for cryo-electron microscopy. MiTeGen’s cryo-EM line now runs from grids to pucks for organising, tracking and shipping them.",RP+"10010925","NIH RePORTER"],
 ["2024–28","Ultra-fast cryopreservation","NIH NIGMS SBIR Phase II · $999,741","Under way","An automated, robot-based platform that soaks, cools and warms small biological samples with convective rates approaching a hundred times current practice: ice-free cryopreservation of embryos, cells, tissues and organoids, validated with bovine, porcine and Drosophila embryos and tissue slices.",RP+"11409780","NIH RePORTER"]];
/* the team: mitegen.com/learn/about-mitegen/management-team and NIH RePORTER. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Robert Thorne",title:"Founder, Chairman and CTO",sum:"Professor of Physics at Cornell University. Founded MiTeGen in 2004 to commercialise MicroMounts. Holds or has pending 10 patents in crystal growth, crystallography and cryopreservation."},
 {g:"Leadership",name:"Benjamin Apker",title:"Chief Operating Officer",sum:"Drives business, operations and product development. Principal investigator on MiTeGen’s NIH cryo-EM and cryopreservation awards."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","MiTeGen announces a distribution agreement with Puxano for graphene-coated Quantifoil cryo-EM grids across North America","MiTeGen",MG+"mitegen-announces-distribution-agreement-with-puxano/"],
 ["August 2026","NIH SBIR Phase II: improving cryopreservation outcomes of small biological samples through ultra-fast convective cooling and warming","NIH RePORTER",RP+"11409780"],
 ["2026","Make every crystal count: introducing the NANUQ Desktop HT, an automated plunge cooler for high-throughput crystallography","MiTeGen",MG+"product/nanuq-desktop-ht/"],
 ["2024","Celebrating 20 years: from roots in crystallography to cryo-EM, IVF and more","MiTeGen",MG+"news/mitegens-20th-anniversary/"],
 ["March 2020","MiTeGen announces a cryo-EM product distribution agreement with NanoSoft","MiTeGen",MG+"mitegen-announces-cryo-em-product-distribution-agreement-with-nanosoft/"],
 ["April 2017","MiTeGen opens the NANUQ Access Facility, day-use access to automated high-speed cryocooling","MiTeGen",MG+"mitegen-opens-nanuq-access-facility-naf/"]];
var SHEETS=[];
