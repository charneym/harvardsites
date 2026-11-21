var FONTS=['200 1em "Outfit"','300 1em "Outfit"','400 1em "Outfit"','500 1em "Outfit"','600 1em "Outfit"'];
var LI="https://www.linkedin.com/company/stab-therapeutics/";
var TW="https://twitter.com/STAbtherapeutic";
var MAIL="info@stabtherapeutics.com";
/* programmes: every line from stabtherapeutics.com (Pipeline, Strategy, support), the EU CTIS record 2025-524814-27-00,
   CNIO (Science Translational Medicine, Feb 2024) and CORDIS project 101287295. [area, title, sub, status, detail, link, label] */
var PIPE=[
 ["CD19","STAb-T19","Relapsed or refractory CD19-positive B-cell malignancies","Phase I authorised","Patient T cells engineered to secrete an anti-CD19 × anti-CD3 T cell-engager. A first-in-human Phase I study, sponsored by the Hospital 12 de Octubre research foundation, is authorised in the EU for 24 participants at four sites.","https://www.ctis.eu/trial/2025-524814-27-00","EU CTIS"],
 ["BCMA","STAb-TBCMA","Multiple myeloma","Preclinical","T cells secreting anti-BCMA engagers outperformed BCMA CAR-T cells in the lab, were unaffected by soluble BCMA and generated immune memory in vivo. Supported by a CDTI NEOTEC 2024 grant.","https://www.cnio.es/en/news/new-immunotherapy-for-multiple-myeloma-proves-in-the-lab-to-be-more-effective-than-car-t-treatment-already-in-use/","CNIO"],
 ["iPSC","iN-KEY","Off-the-shelf therapy for multiple myeloma","EU Horizon","A Horizon Europe consortium building an allogeneic, iPSC-derived cell therapy that pairs a BCMA CAR with a CD19 STAb construct, made in an automated GMP process and headed for a first-in-human trial.","https://cordis.europa.eu/project/id/101287295","CORDIS"]];
/* stabtherapeutics.com, Our Team; the CEO appointment release (Dec 2023). Text-only masthead. */
var TEAM=[
 {g:"Leadership",name:"Carolina Pola, PhD",title:"Chief Executive Officer",sum:"Trained at New York University and was a Scientific Editor at Nature Medicine; later Director of Innovation at CNIO and Director of Corporate and Scientific Communications at PharmaMar.",li:"https://www.linkedin.com/in/carolina-pola-3a41a45/"},
 {g:"Leadership",name:"Belén Blanco",title:"Chief Scientific Officer",sum:"Co-founder of STAb Therapeutics.",li:"https://www.linkedin.com/in/bel%C3%A9n-blanco-durango-a4b268202"},
 {g:"Scientific Advisory Board",name:"Luis Álvarez-Vallina",title:"Co-founder",sum:"Head of the H12O-CNIO Cancer Immunotherapy Clinical Research Unit.",li:"https://www.linkedin.com/in/luis-alvarez-vallina-572919127/"},
 {g:"Scientific Advisory Board",name:"Joaquín Martínez",title:"Advisor",sum:"",li:"https://www.linkedin.com/in/joaquin-martinez-49317517"},
 {g:"Scientific Advisory Board",name:"Luis Paz-Ares",title:"Advisor",sum:"",li:"https://twitter.com/LuisPaz_Ares"},
 {g:"Scientific Advisory Board",name:"Richard G. Vile",title:"Advisor",sum:"",li:"https://www.linkedin.com/in/richard-vile-2b0570188"}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","STAb Therapeutics joins iN-KEY, a Horizon Europe project for an off-the-shelf iPSC-derived immunotherapy for multiple myeloma","CORDIS","https://cordis.europa.eu/project/id/101287295"],
 ["April 2026","First-in-human Phase I study of STAb-T19 cells in B-cell malignancies authorised in the EU","EU CTIS","https://www.ctis.eu/trial/2025-524814-27-00"],
 ["February 2024","T cells secreting anti-BCMA engagers control multiple myeloma and promote immune memory in vivo (Science Translational Medicine)","CNIO","https://www.cnio.es/en/news/new-immunotherapy-for-multiple-myeloma-proves-in-the-lab-to-be-more-effective-than-car-t-treatment-already-in-use/"],
 ["December 2023","STAb Therapeutics appoints Carolina Pola as Chief Executive Officer","STAb Therapeutics","https://stabtherapeutics.com/carolina-pola-chief-executive-officer/"],
 ["October 2023","Awarded by the Fundación para el Conocimiento madri+d in its Healthstart programme","STAb Therapeutics","https://stabtherapeutics.com/award-by-fundacion-para-el-conocimiento-madrid/"]];
var SHEETS=[];
var FORM="mailto:"+MAIL;
