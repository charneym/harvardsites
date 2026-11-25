var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','500 1em "Montserrat"'];
var MAIL="contact@porphychem.com";
var TW="https://porphychem.com";
var SHOP="https://shop.porphychem.com/porphyrins-products";
/* the catalogue families, as listed in the Products menu of porphychem.com (each links to its shop page) */
var FAM=[
 ["Dipyrrylmethanes","dipyrrylmethanes.html"],["BODIPYs / aza-BODIPYs","bodipys-azabodipys.html"],["A4 porphyrins","a4-porphyrins.html"],
 ["trans-A2B2 porphyrins","trans-a2b2-porphyrins.html"],["A3B porphyrins","a3b-porphyrins.html"],["β-substituted porphyrins","substituted-porphyrins.html"],
 ["meso- and β-substituted porphyrins","meso-and-substituted-porphyrins.html"],["Chlorins","chlorins.html"],["Metalloporphyrins","metalloporphyrins.html"],
 ["Phthalocyanines","phthalocyanines.html"],["Nanoparticles","nanoparticles.html"],["Miscellaneous","miscellaneous.html"]];
/* services: every line from porphychem.com /en/services/* . [label, title, detail, url] */
var SERV=[
 ["01","Custom synthesis","Rare porphyrins, phthalocyanines and related compounds made to order, from low volumes to the scale-up of new molecules. Send a structure, name or CAS number and the quantity; within a few days the chemists return a quote with lead time and purity.",TW+"/en/services/custom-synthesis/6"],
 ["02","Scale-up to bulk quantities","Routes revisited for large scale, with less solvent, less waste and safer reagents. High-capacity reactors, rotary evaporators, preparative columns and Soxhlet extractors supply tens of grams to kilograms; qualified partners go up to tons.",TW+"/en/services/scale-up-to-bulk-quantities/7"],
 ["03","API / GMP","Porphyrin- and phthalocyanine-based active pharmaceutical ingredients made to GMP and the ICH Q7a guideline, at a regularly FDA-inspected site: route research, process development and scale-up, analytical and formulation development, registration files.",TW+"/en/services/gmp/2"],
 ["04","Contract research","Projects run to your specification, budget, lead time, confidentiality and intellectual-property policies, with a responsive team of chemists in real-time contact, and advice on which product meets your target.",TW+"/en/services/contract-research/4"]];
/* founders and the Scientific Advisory Board (porphychem.com /en/about-us/history and /scientific-advisory-board). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founders",name:"Dr. Benoit Habermeyer",title:"Co-founder & President",sum:"Co-founded PorphyChem SAS in June 2013 to bring porphyrin derivatives and technology to research and industry."},
 {g:"Founders",name:"Dr. Jean-Michel Barbe",title:"Co-founder",sum:"Research Director at the CNRS; PhD in physical chemistry, University of Burgundy, 1985."},
 {g:"Scientific Advisory Board",name:"Prof. Roger Guilard",title:"University of Burgundy",sum:"Took the initiative of the PorphyChem project. Co-editor of the Handbook of Porphyrins and the Handbook of Porphyrin Science; 2010 Robert Burns Woodward Career Award in Porphyrin Chemistry."},
 {g:"Scientific Advisory Board",name:"Prof. Karl M. Kadish",title:"University of Houston",sum:"Hugh Roy and Lillie Cranz Cullen University Professor, and Distinguished University Professor of Chemistry."},
 {g:"Scientific Advisory Board",name:"Prof. Mathias O. Senge",title:"Trinity College Dublin",sum:"Professor of Organic Chemistry; studied chemistry and biochemistry in Freiburg, Amherst, Marburg and Lincoln."},
 {g:"Scientific Advisory Board",name:"Prof. Tomás Torres",title:"Autónoma University of Madrid",sum:"Head of the Institute for Advanced Research in Chemical Sciences (IAdChem) and Full Professor of Organic Chemistry."}];
/* news: porphychem.com/en/news, 2026. [date, headline, where, url] */
var NEWS=[
 ["10 September 2026","PorphyChem sponsors the PDT-PDD 2026 conference in Nancy, France, 26–30 October 2026","pdt2026.com","https://www.pdt2026.com/"],
 ["18 August 2026","PorphyChem sponsors the 2026 Linstead Career Award in Phthalocyanine Chemistry at ICPP-14: congratulations to Prof. José H. Zagal","PorphyChem news",TW+"/en/news"],
 ["23 April 2026","PorphyChem sponsors ICPP-14, the International Conference on Porphyrins and Phthalocyanines, in Kyoto, 28 June to 3 July 2026","icpp-spp.org","http://www.icpp-spp.org/"]];
var SHEETS=[];
