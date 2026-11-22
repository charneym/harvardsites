var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Roboto"','500 1em "Roboto"','700 1em "Roboto"','300 1em "Roboto"'];
var MAIL="info@impactproteomics.com";
/* services and kits, as listed on impactproteomics.com (/services, /products, /technology). [name, what, detail] */
var SERV=[
 ["IP-to-MS antigen profiling","Immunoproteomics","Full-service sample preparation, mass spectrometry and data analysis. Validate known antigens for cancers and the most common autoimmune diseases, or discover novel ones, from serum, plasma or another antibody source.","1 month turnaround"],
 ["Multiomics","Sample preparation","DNA, RNA and protein purified from a single cultured-cell or tissue sample, in any combination, with optional mass spectrometry of the protein fraction.","1 month turnaround"],
 ["Proteomics","Sample preparation","Intact proteins or digested peptides purified from cells, tissue or another protein source, cleaned of SDS, lipids, carbohydrates and salts, with optional mass spectrometry.","1 month turnaround"]];
var KITS=[["ProMTag IP-to-MS Kit","$750"],["ProMTag Multiomics DNA, RNA, Protein Kit","$650"],["ProMTag Peptide Universal Protein Cleanup Kit","$600"],["ProMTag Intact Protein Universal Protein Cleanup Kit","$600"]];
/* team: impactproteomics.com news (2024-09-09), Carnegie Mellon University profile (2020-10-22). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership and founders",name:"Jeff Whitmore",title:"Chief Executive Officer",sum:"Leads Impact Proteomics. With Jon Minden, presented the company’s technologies and plans in Analytical Chemistry Startups’ “ProMTag Promise” feature in 2024."},
 {g:"Leadership and founders",name:"Jonathan Minden, PhD",title:"Founder and Chief Scientific Officer",sum:"Carnegie Mellon University faculty in Biological Sciences, where his lab uses proteomics. In 2015 he shared the idea that, after years of iteration, became Impact Proteomics."},
 {g:"Leadership and founders",name:"Amber Lucas, PhD",title:"Co-founder",sum:"Doctorate in biological sciences from Carnegie Mellon (2018). Took the technology through the NSF Innovation Corps programme in 2017 and served as CEO as the company launched its first kits."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2026","NIH SBIR award: transforming autoimmune diagnostics and disease monitoring with a scalable IP-to-MS platform","NIH RePORTER","https://reporter.nih.gov/project-details/11313355"],
 ["January 2025","“IP-to-MS: An Unbiased Workflow for Antigen Profiling” published in the Journal of Proteome Research","Impact Proteomics","https://www.impactproteomics.com/2025/01/ip-to-ms-an-unbiased-workflow-for-antigen-profiling-published-in-jpr/"],
 ["December 2024","A new in-gel digestion workflow: two-hour digestion with MT-Trypsin, then trypsin removal by click chemistry","Impact Proteomics","https://www.impactproteomics.com/2024/12/impact-proteomics-launches-new-in-gel-digestion-workflow-utilizing-mt-trypsin/"],
 ["September 2024","Analytical Chemistry Startups features Impact Proteomics and the “ProMTag Promise”","Impact Proteomics","https://www.impactproteomics.com/2024/09/promtag-promise/"],
 ["October 2021","A $1M NSF Phase II SBIR grant to develop ProMTag sample preparation technology","Impact Proteomics","https://www.impactproteomics.com/2021/10/impact-proteomics-awardedphase-ii-sbir-grant/"]];
var SHEETS=[];
