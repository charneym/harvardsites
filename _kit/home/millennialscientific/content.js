var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"'];
var MAIL="inquiry@millennialscientific.com";
var MS="https://www.millennialscientific.com/";
/* products, from millennialscientific.com (home, Technology, NanoPak pages, NanoPak-B early access post, 28 July 2026).
   [name, chemistry, mode, detail, status, url] */
var PROD=[
 ["NanoPak-C","All-carbon","Reverse phase and hydrophobic interaction LC","Excellent mechanical stability and durability at high temperatures and across all pHs, for scalable, high-performance reverse phase and hydrophobic interaction chromatography. The award-winning first product of the platform.","Available","https://www.millennialscientific.com/nanopak"],
 ["NanoPak-M","Functionalized carbon","Multimodal (mixed-mode) LC","Ligands on the microbeads’ surface allow affinity or ion-exchange chromatography, while the underlying carbon still retains by reverse phase or hydrophobic interaction.","Available","https://www.millennialscientific.com/nanopak-m"],
 ["NanoPak-E","Electrically conducting carbon","Electrochemically modulated LC","An externally applied voltage tunes the conducting carbon’s interfacial properties, such as surface charge, for efficient, repetitive and selective separation of charged analytes.","Available","https://www.millennialscientific.com/nanopak-e"],
 ["NanoPak-B","Biologic carbon microbeads","Large-pore bioprocess media","Fast-flow, mechanically rigid carbon microbeads with tunable micron-scale pores, for viral vectors, lipid nanoparticles and large nucleic-acid assemblies. Base matrices and ion-exchange formats.","Early access","https://www.millennialscientific.com/post/millennial-launches-nanopak-b-biologic-carbon-microbeads-early-access-cohort-program"]];
/* millennialscientific.com, Company & Leadership. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Balaji Sitharaman, PhD",title:"Founder and Director",sum:"Inventor, internationally recognised for nanotechnology R&D, with over 20 years in carbon nanotechnology."},
 {g:"Leadership",name:"Bob Williams",title:"Director",sum:"28+ years in product development and business development in diagnostic imaging; formerly ACIST Medical Systems and Bracco Imaging."},
 {g:"Leadership",name:"Dennis Fujii, PhD",title:"Director",sum:"28+ years of senior management in diagnostic and pharmaceutical technologies; formerly a director at Bracco Diagnostics and Nycomed-Amersham."},
 {g:"Advisors",name:"Sitharaman Balasubramanian",title:"Business Advisor, Product Development",sum:"Executive Director of the Composite Prototyping Center, Long Island; formerly Director of Technology Development at Northrop Grumman."},
 {g:"Advisors",name:"Sharon Barkume, JD",title:"Business Advisor, Intellectual Property",sum:"25+ years as a life science executive; Director, Developmental Therapeutics and Proteomics Center, Stony Brook University."},
 {g:"Advisors",name:"Cheryl Springfels",title:"Communications",sum:"23+ years of strategic consulting for non-profit, scientific and educational institutions."}];
/* news: their own posts (blog feed). [date, headline, kind, url] */
var NEWS=[
 ["July 2026","NanoPak-B biologic carbon microbeads: early access cohort opens","Product","https://www.millennialscientific.com/post/millennial-launches-nanopak-b-biologic-carbon-microbeads-early-access-cohort-program"],
 ["June 2026","HPLC separation of tirzepatide on NanoPak-C all-carbon microbeads","Application","https://www.millennialscientific.com/post/hplc-separation-of-tirzepatide-on-nanopak-c-all-carbon-microbeads"],
 ["May 2026","Selected for the BioTools Innovator 2026 accelerator","Company","https://www.millennialscientific.com/post/millennial-scientific-selected-for-biotools-innovator-2026-accelerator"],
 ["May 2026","Indian patent granted for our carbon bead synthesis technology","Intellectual property","https://www.millennialscientific.com/post/indian-patent-granted-for-millennial-scientific-s-carbon-bead-synthesis-technology"],
 ["April 2026","Advancing next-generation chromatography with support from New York State","Company","https://www.millennialscientific.com/post/advancing-next-generation-chromatography-with-support-from-new-york-state"],
 ["February 2026","Recognised as a DeepTech Pioneer by Hello Tomorrow","Recognition","https://www.millennialscientific.com/post/millennial-scientific-recognized-as-a-deeptech-pioneer-by-hello-tomorrow"]];
var SHEETS=[];
