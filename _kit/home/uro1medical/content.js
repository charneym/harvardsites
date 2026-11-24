/* URO-1, Inc.: facts from uro1medical.com (home, Prostate Biopsy, Targeted Biopsy, GU Pathology, Interventional Radiology,
   About Us, News) and the press it links to (Urology Times, IBTimes, CEO Monthly, the May 2025 release).
   Real characters only, never HTML entities (DU).
   Product rows: [product, kind, title, sub, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["SUREcore® Needle","Single use","18ga biopsy needle","22 and 25 cm","A single-use, disposable 18-gauge needle for the reusable biopsy handpieces already in use. Its patented coaxially centred design virtually eliminates needle deflection, for consistent target accuracy.",0,"Needle","",""],
 ["SUREcore® Prime","Reusable","Biopsy handpiece","SUREcore platform","A reusable biopsy handpiece for the SUREcore needle, designed to obtain larger, higher-quality tissue cores.",0,"Handpiece","",""],
 ["SUREcore® Plus","Single use","18ga biopsy instrument","22 and 25 cm","A single-use 18-gauge biopsy instrument: true to target, with more tissue volume and higher tissue quality.",0,"Instrument","",""],
 ["coreCARE®","Specimen retrieval","Tissue transfer cradle","Touch and Go","“Touch and Go” tissue transfer minimises handling and preserves tissue integrity and orientation. The core stays attached to the cradle on its way to pathology, where a grossing ruler measures its length.",0,"Cradle","",""]];
/* coreCARE in the pathology lab, from uro1medical.com (GU Pathology) */
var EVID=[
 ["Tissue transfer","Atraumatic “Touch and Go” transfer preserves the histologic architecture, where current methods frequently fragment the tissue"],
 ["Transport","The tissue stays firmly attached to the cradle, which prevents fragmentation and deformation on the way to pathology"],
 ["Grossing","The core remains intact on the cradle, and its grossing ruler measures tissue length, instead of retrieving each fragment and approximating the ends"],
 ["Preparation","Shorter tissue preparation time, with tissue that is easier to gross in"]];
var TEAM=[
 {g:"Leadership",name:"Ted Belleza",title:"President and CEO",sum:"A serial entrepreneur based in the San Francisco Bay Area with more than 35 years of building companies, including medical tools for HIV diagnosis and gynaecological surgery. A prostate cancer survivor, he founded URO-1 after his own biopsy."},
 {g:"Leadership",name:"John J. Smith III, MD, FACS",title:"Chief Medical Officer",sum:"Dr. Jack Smith has been involved with research and teaching throughout his career."},
 {g:"Leadership",name:"Kevin Rackers",title:"Chief Technology Officer",sum:"Owner and president of Automation Techniques, Inc., a contract R&D company of 23 years."},
 {g:"Leadership",name:"Chloe Chan",title:"Chief Financial Officer",sum:"Described as the archetypal CFO for high-tech start-ups."},
 {g:"Product and operations",name:"Philip Allred",title:"VP R&D",sum:"More than 20 years developing medical devices."},
 {g:"Product and operations",name:"Jack Snoke",title:"VP Applications Development",sum:"An entrepreneur and industrial designer who started and grew INNO, an Atlanta-based design firm."},
 {g:"Product and operations",name:"Lynn Knight",title:"QA and Operations Manager",sum:"More than 15 years of experience in the contract manufacturing environment."}];
var NEWS=[
 ["10 Mar 2026","URO-1 aims to advance targeted biopsy technology to support diagnostic precision and pathology workflow","IBTimes","https://www.ibtimes.com/uro-1-inc-aims-advance-targeted-biopsy-technology-support-diagnostic-precision-pathology-3798839"],
 ["9 Mar 2026","How clinical validation is reshaping urology device adoption","CEO Monthly","https://ceomonthly.com/how-clinical-validation-is-reshaping-urology-device-adoption/"],
 ["4 Feb 2026","URO-1 prostate biopsy devices adopted across Novant Health as the clinical study continues","Urology Times","https://www.urologytimes.com/view/uro-1-prostate-biopsy-devices-adopted-across-novant-health-system-as-clinical-study-continues"],
 ["AUA 2025","A novel core needle biopsy instrument designed for targeted biopsy","UroToday","https://www.urotoday.com/conference-highlights/aua-2025/aua-2025-prostate-cancer/160209-aua-2025-a-novel-core-needle-biopsy-instrument-designed-for-targeted-biopsy.html"],
 ["28 May 2025","URO-1 reaches a milestone in soft tissue biopsies to identify cancer","Yahoo Finance","https://finance.yahoo.com/news/uro-1-reaches-milestone-soft-192500015.html"],
 ["29 Oct 2024","From survivor to innovator: Ted Belleza and the URO-1 team","Grit Daily","https://gritdaily.com/ted-belleza-uro-1-improve-prostate-cancer-diagnosis/"]];
var SHEETS=[];
