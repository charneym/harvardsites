var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Instrument Sans"','500 1em "Instrument Sans"','600 1em "Instrument Sans"','400 1em "Krona One"'];
var MAIL="support@sindrimaterials.com";
var SHOP="https://sindrimaterials.com/collections/graphene-cryo-em-grids",NWS="https://sindrimaterials.com/blogs/news";
/* the grids, from sindrimaterials.com/collections/graphene-cryo-em-grids (Limited Early Access, November 2026).
   [product, support, what it is, detail line, text, link label, url] */
var DEV=[
 ["Graphene on gold","Early access · In stock","Holey carbon on gold","R1.2/1.3 · 300 mesh","Continuous monolayer graphene over R1.2/1.3 holey carbon on a 300-mesh gold support. Packs of 5, 10 or 20 grids, with volume pricing from $67.50 per grid.","Shop",SHOP],
 ["Graphene on copper","Early access · In stock","Holey carbon on copper","R1.2/1.3 · 300 mesh","The same Sindri graphene and quality control on a 300-mesh copper support. Packs of 5 grids, from $60.00 per grid.","Shop",SHOP]];
/* sindrimaterials.com/pages/about-us. Text-only masthead (CI/CL): the published portraits are 184 px, too small for a grid. */
var TEAM=[
 {g:"Founders",name:"Christopher DiMarco, PhD",title:"Founder and Chief Executive Officer",sum:"Leads Sindri’s scientific direction and graphene technology development. PhD in mechanical engineering, with nearly 15 years of research focused on graphene synthesis, material behaviour and process development."},
 {g:"Founders",name:"Brian Checchio",title:"Co-founder and Chief Operating Officer",sum:"Leads business operations, commercialization and external relationships, after 14 years at Morgan Stanley in operations, risk management and leadership."},
 {g:"Founders",name:"David DiMarco",title:"Co-founder and Chief Manufacturing Officer",sum:"Leads manufacturing systems and production engineering; a mechanical engineer with experience in transportation, consumer products and industrial manufacturing."},
 {g:"Research and operations",name:"Bin Du, PhD",title:"Research Scientist",sum:"Materials synthesis, thin-film processing and advanced characterization; PhD in materials science and engineering, University of Delaware."},
 {g:"Research and operations",name:"Atul Dhall, PhD",title:"Lab Operations Engineer",sum:"Process reproducibility and engineering execution; PhD in nanoscale engineering, SUNY Polytechnic Institute, and postdoctoral research at the University of Pennsylvania."}];
/* news: from sindrimaterials.com/blogs/news; every row links out (to the story, or to the news page for recent items
   that have no story page of their own). [date, headline, source, url] */
var NEWS=[
 ["November 2026","Sindri Graphene Grids named a finalist for Launch of the Year in the 2026 Philadelphia Technical.ly Awards","Sindri news",NWS],
 ["September 2026","Sindri graphene cryo-EM grids enter Limited Early Access","Sindri news",NWS],
 ["June 2026","Sindri Materials named Reinventing Delaware’s 2026 Top Idea of the Year","Sindri news",NWS],
 ["December 2025","$500,000 investment through Delaware’s Accelerator and Seed Capital Program (SSBCI)","Sindri news","https://sindrimaterials.com/blogs/news/500-000-delaware-investment-ssbci"],
 ["August 2025","NIH NIGMS SBIR Phase I grant for graphene-based cryo-EM grids","Sindri news","https://sindrimaterials.com/blogs/news/secured-nih-nigms-sbir-phase-i-grant"]];
var SHEETS=[];
