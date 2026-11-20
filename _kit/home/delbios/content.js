var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Lato"','700 1em "Lato"'];
var WEB="https://delbios.com/";
var MAIL="info@delbios.com";
var ADDR="Edifici Eureka, Campus UAB, 08290 Cerdanyola del Vallès, Barcelona";
var MAP="https://www.google.com/maps/search/?api=1&query=Edifici+Eureka+UAB+Cerdanyola+del+Valles";
var LI="https://www.linkedin.com/company/delbios-pharmaceuticals/";
var CORDIS="https://cordis.europa.eu/project/id/101136772";
var SCIADV="https://doi.org/10.1126/sciadv.adq4738";
var NANB="https://www.nanbiosis.es/a-breakthrough-therapy-for-fabry-disease-nanogla-demonstrates-promising-results/";
var CDTI="https://www.cdti.es/sites/default/files/2025-12/resolucion_definitiva_neotec_2025_firmado.pdf";
var FDN="https://fabrydiseasenews.com/news/nanogla-potential-more-effective-ert-fabry-named-orphan-drug-europe/";
var T_IB="https://delbios.com/investigator-brochure-ib-investigational-medicinal-product-dossier-impd-and-phase-i-synopsis/";
var T_LYO="https://delbios.com/rfq-for-002-2026-request-for-quotation-rfq-scale-up-methodology-and-production-of-a-lyophilized-nanoformulation/";
var T_DRF="https://delbios.com/2-week-dose-range-finding-drf-study-in-minipig/";
var T_PK="https://delbios.com/in-vivo-pharmacokinetic-bridging-study-non-glp/";
var TENDERS="https://delbios.com/category/tenders-and-subcontracting/";
/* development path of nanoGLA: CORDIS Nano4Rare (101136772) and Delbios tender notices, 2026. [stage, title, detail, detail2, link, link label] */
var PROG=[
 ["Done","Proof of concept and first GLP toxicology","Under the EU Smart4Fabry project, nanoGLA reached an advanced preclinical stage, including a first GLP toxicology study in rats.",CORDIS,"CORDIS"],
 ["2026","Second-species toxicology","A 2-week dose range finding study in minipigs, with a pharmacokinetic bridging study comparing the liquid and the new lyophilized nanoGLA.",T_DRF,"Tender notice"],
 ["2026","A lyophilized formulation at scale","Scale-up methodology and production of a lyophilized nanoformulation of nanoGLA.",T_LYO,"Tender notice"],
 ["Next","Toward first-in-human","The Investigator Brochure, the IMPD and a Phase I synopsis, prepared to EMA, ICH and EU Clinical Trial Regulation requirements for a future Clinical Trial Application.",T_IB,"Tender notice"]];
var PARTNERS=["European Innovation Council","CDTI, NEOTEC programme","CSIC"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2026","Delbios prepares the Investigator Brochure, IMPD and Phase I synopsis for nanoGLA","Delbios",T_IB],
 ["June 2026","Request for quotation: scale-up and production of a lyophilized nanoformulation","Delbios",T_LYO],
 ["December 2025","CDTI awards Delbios a €335,000 NEOTEC grant for its 2026–2027 business plan","CDTI",CDTI],
 ["January 2025","nanoGLA reduces Gb3 deposits in Fabry mice, including in the brain","NANBIOSIS",NANB],
 ["December 2024","“Targeted nanoliposomes to improve enzyme replacement therapy of Fabry disease”","Science Advances",SCIADV]];
var SHEETS=[];
