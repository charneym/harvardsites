var FONTS=['300 1em "Barlow"','400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"','400 1em "Lato"','700 1em "Lato"'];
var WEB="https://www.regentis.co.il/";
var IR="https://investors.regentis.co.il/";
var MAIL="ehud@regentis.co.il";
/* the Gelrin platform: the features listed on regentis.co.il/gelrin-technology. [feature, figure, detail] */
var PROPS=[
 ["Applied as a liquid","Cured in situ","Gelrin goes in as a liquid, so it completely fills the tissue defect, then cures into a soft, rubbery implant under UV light. It can reach narrow bone crevices or large spaces, open or closed."],
 ["Dense hydrogel network","PEG-DA + fibrinogen","Polymer chains of polyethylene glycol diacrylate crosslinked with trace quantities of denatured fibrinogen, a biologically inactivated protein."],
 ["Acts as a scaffold","Cell-free","The implant covers the entire wound and guides the migration and organisation of the cells involved in repair, with no cells harvested from the patient."],
 ["Surface erosion","Gradual and controlled","The implant is eroded and resorbed through a pre-programmed surface degradation, receding as the surrounding cells regenerate cartilage in a synchronous process."],
 ["Fully resorbed","6–9 months","The implant completely degrades within six to nine months and is replaced by healthy hyaline cartilage, the patient’s own natural cartilage."],
 ["Biocompatible","A platform","No serious adverse events were observed in the completed pilot study; the technology can serve as a platform for further clinical needs."]];
/* clinical programme: from regentis.co.il, the September 2026 fact sheet and the H1 2026 report. [name, status, detail, url] */
var PROG=[
 ["Pilot / Phase II","56 patients · up to 4 years","Treated in multiple sites in Northern Europe and Israel. Primary endpoints met: improvements in KOOS and VAS pain scores over two years were superior (100% greater improvement) to those seen with microfracture, the current standard, and kept improving for four years.",WEB+"clinical-development/"],
 ["U.S. pivotal Phase III","FDA IDE · 80 patients","An open-label, single-arm study in the United States and Europe under the FDA’s sanctioned protocol, with two-year follow-up of 80 patients. 43 of 80 treated as of September 2026; full enrollment expected around the end of 2026, and the PMA submission process by the end of 2027.","https://www.newswire.com/news/regentis-biomaterials-reports-first-half-2026-financial-results-and-provides"],
 ["MRI evidence","MOCART above 80 at 24 months","Structural MRI scores indicating near-complete, hyaline-like cartilage repair, published in Cartilage; the first study to use MOCART as a secondary endpoint with FDA acceptance of the approach.","https://irp.cdn-website.com/e64ac1a1/files/uploaded/RGNT+Fact+Sheet+September+2026.pdf"],
 ["Europe","CE Mark","Approved for commercialisation in the European Union, with sites in Italy, Germany, Serbia, Slovenia and Romania. In July 2026 the Notified Body approved a new solvent-free manufacturing process that raises production yield by 400%.","https://finviz.com/news/368547/regentis-receives-european-regulatory-approval-for-new-gelrinc-manufacturing-process-increasing-production-yield-by-400-ahead-of-european-commercial-launch"]];
/* investors: from the company's press releases and fact sheet. [item, figure, detail] */
var INV=[
 ["NYSE American: RGNT","IPO, December 2025","Initial public offering closed on December 5, 2025, with gross proceeds of $10 million."],
 ["Private placement","$6.5 million, June 2026","A private placement in June 2026; cash and equivalents of about $9.0 million at June 30, 2026, with debt fully repaid."],
 ["Market","~470,000 cases a year","About 750,000 knee arthroscopies a year in the U.S., of which some 470,000 involve cartilage damage: an estimated $3 billion annual U.S. market."],
 ["Patents","Exclusively owned","Patents covering the Gelrin family of products, their manufacture and delivery device, including the liquid, ready-to-use GelrinC formulation and the new solvent-free process."]];
var LEAD=["Dr. Ehud Geller · CEO and Executive Chairman","Prof. Dror Seliktar · inventor of Gelrin, Technion – Israel Institute of Technology"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","Exclusive distribution agreement with AMI Technologies to commercialise GelrinC in Israel, with revenue expected from 2027","Newswire","https://www.newswire.com/news/regentis-signs-exclusive-distribution-agreement-with-ami-technologies-to"],
 ["October 2026","Strong surgeon interest in GelrinC at the 8th ICRS Summit in Porto, Portugal","Newswire","https://www.newswire.com/news/regentis-biomaterials-reports-strong-surgeon-interest-in-gelrinc-at-8th-icrs"],
 ["September 2026","First half 2026 results: 43 of 80 patients treated in the U.S. pivotal trial; $6.5 million private placement","Newswire","https://www.newswire.com/news/regentis-biomaterials-reports-first-half-2026-financial-results-and-provides"],
 ["July 2026","European regulatory approval for a new GelrinC manufacturing process, increasing production yield by 400%","Finviz","https://finviz.com/news/368547/regentis-receives-european-regulatory-approval-for-new-gelrinc-manufacturing-process-increasing-production-yield-by-400-ahead-of-european-commercial-launch"],
 ["February 2026","2025 results and business update after the NYSE American IPO","BioSpace","https://www.biospace.com/press-releases/regentis-biomaterials-reports-2025-financial-results-and-provides-business-update"]];
var SHEETS=[];
