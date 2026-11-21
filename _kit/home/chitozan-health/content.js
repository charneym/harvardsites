var FONTS=['300 1em "Jost"','italic 300 1em "Jost"','400 1em "Jost"','italic 400 1em "Jost"','500 1em "Jost"','600 1em "Jost"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
var MAIL="avanhorn@chitozanhealth.com";
var RP="https://reporter.nih.gov/project-details/";
var CZ="https://www.chitozanhealth.com/";
/* Products and programmes: every line from chitozanhealth.com (home, Textiles, Infection Control, Advanced Skin
   Therapeutics, Antimicrobial Resistance, Barrier Packaging, Research) and the NIH RePORTER records of Chitozan Health,
   LLC (Summerville, SC). [product, application, type, status, detail, link, link label] */
var PIPE=[
 ["Silver Shell™","Healthcare textiles: privacy curtains, linens, scrubs, uniforms, blankets, air filters","Textile finish","NIAID STTR Phase I · 2022","A silver-chitosan finish with significantly less silver than other silver antimicrobial finishes. Treated textiles have withstood 75 commercial and home washes without a loss of efficacy and stay soft to the touch; the finish passes tests that qualify for an EPA Category IV, minimal-risk designation.",RP+"10546228","NIH RePORTER"],
 ["Silver Shell FR","Military, firefighting and outdoor apparel; medical drapes and bed linens","Flame-resistant finish","NIAID STTR Phase I · 2026","A patent-pending finish that combines flame resistance with antimicrobial activity, developed with research partners at the University of Georgia by phosphorylating chitosan and building phosphate into the silver chloride lattice. It passes the ASTM D1230 flammability test.",RP+"11315042","NIH RePORTER"],
 ["Glucosil additive","Silicone and polyisoprene devices for central-line and catheter therapy","Device additive","Development","Glucosil and Silver Shell powders can be built into silicones during manufacture. Device materials made with the Glucosil additive eradicate resistant MRSA on contact and inhibit biofilm formation.",CZ+"infection-control","Chitozan Health"],
 ["Glucozan™ gels and serums","Wounds, burns and scrapes, from firefighting and trauma to the backyard","Skin and wound care","Development","Self-drying gels built on the silver chitosan technology, designed to protect a wound from dust and debris, keep it moist, conform to its surface and support the natural healing response.",CZ+"advanced-skin-therapeutics","Chitozan Health"],
 ["Silusan™ and Cellusan™","Biodegradable packaging films","Barrier coating","Development","Barrier packaging coatings that combine Silver Shell chitosan with cellulose. The coating passed the ASTM G-21 antifungal test, with no fungal growth on the packaging surface.",CZ+"packaging","Chitozan Health"]];
/* the testing record, from the Textiles and Research pages of chitozanhealth.com */
var EVID=[
 ["Efficacy","More than 70 efficacy tests on finished textiles show a sustained kill of bacteria of 99.99% or better"],
 ["Durability","Treated textiles keep their efficacy through 75 commercial and home washes"],
 ["Leaching","A zero zone of inhibition, and silver barely detectable in wash water"],
 ["Fungi","No fungal growth after 72 hours in ASTM G-21 testing at Situ Biosciences; complete inhibition of Candida auris in ASTM E2722"]];
/* team: chitozanhealth.com/the-team and NIH RePORTER. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Austin Van Horn",title:"Founder & President",sum:"Founded Chitozan Health with partners Matthew and Alan Taylor; previously in business development at Adsil Corp. and Idea Integration."},
 {g:"Leadership",name:"Matthew Taylor",title:"President, Europe",sum:"Materials engineer (Sheffield Hallam); managing director of Icon Process Systems, Arcasorb and Silver Shell Ltd. in the UK."},
 {g:"Science",name:"David Juhas",title:"Chief Scientist",sum:"Formulation and process research engineer, formerly at Kodak; developed the advanced silver chitosan formula under the NIH NIAID award."},
 {g:"Science",name:"Alan Taylor",title:"Inventor",sum:"Chemical engineer (London University College, First Class Honours) whose company built water treatment plants, including for Arcasorb."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","NIAID awards Chitozan Health an STTR Phase I grant for flame-retardant antimicrobial textiles ($320,600)","NIH RePORTER",RP+"11315042"],
 ["2023","NIAID adds a $55,000 supplement to the silver-chitosan textile finish study","NIH RePORTER",RP+"10825963"],
 ["July 2022","NIAID awards Chitozan Health an STTR Phase I grant to test chitosan-supported silver as a textile finish ($254,157)","NIH RePORTER",RP+"10546228"]];
var SHEETS=[];
