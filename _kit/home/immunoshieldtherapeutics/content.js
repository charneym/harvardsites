var FONTS=['400 1em "Playfair Display"','italic 400 1em "Playfair Display"','400 1em "Roboto"','500 1em "Roboto"','700 1em "Roboto"','500 1em "JetBrains Mono"'];
var MAIL="info@immunoshieldtherapeutics.com";
var TEL="(480) 788-6717",TELH="+14807886717";
var RPT="https://reporter.nih.gov/project-details/";
/* pipeline: from ImmunoShield's NIH SBIR project summaries (NIH RePORTER) and its AZBio member spotlight */
var PROGS=[
 ["Macroencapsulated islets for type 1 diabetes","NIDDK SBIR Phase II · Non-human primate","Hydrogel injection-molded devices holding donor islets, evaluated for tissue response, islet survival, host immune and metabolic response and function in a diabetic non-human primate model, generating the biocompatibility, toxicology and CMC data for future FDA submissions.",RPT+"11404899","NIH RePORTER"],
 ["Islet dose and loading density","NIDDK SBIR Phase I · Completed","Syngeneic and allogeneic studies in a diabetic rat omentum transplant model to find the islet density and dose for high surface-area devices, the configuration carried forward to large animals.",RPT+"10716174","NIH RePORTER"],
 ["Stem cell-derived insulin-secreting cells","Partnering","ImmunoShield partners with developers of insulin-secreting cell therapies, so allogeneic and stem cell-derived cells can reach patients safely, at scale and without chronic immune suppression.","https://www.azbio.org/?p=49291","AZBio"],
 ["Automated hydrogel injection molding","Manufacturing platform","An automated molding system that casts complex, high surface-area hydrogel devices reproducibly, with diverse hydrogels, and could apply well beyond type 1 diabetes.","https://news.asu.edu/20241104-science-and-technology-asu-startup-pioneers-breakthroughs-cell-therapy","ASU News"]];
/* news: award notices and coverage, each linking to its source */
var NEWS=[
 ["30 Jul 2026","NIDDK funds year three of the non-human primate macroencapsulation study, $935,197","NIH RePORTER",RPT+"11404899"],
 ["22 Jun 2026","AZBio member spotlight: turning the curative potential of allogeneic cell therapy into reality","AZBio","https://www.azbio.org/?p=49291"],
 ["6 Jan 2026","From lab to startup: ASU researchers drive health innovation","ASU News","https://news.asu.edu/20260106-health-and-medicine-lab-startup-asu-researchers-drive-health-innovation"],
 ["3 Sep 2025","SBIR Phase II of $913,868: hydrogel injection-molded islet macroencapsulation devices in a non-human primate model","NIH RePORTER",RPT+"11183246"],
 ["4 Nov 2024","ASU startup pioneers breakthroughs in cell therapy","ASU News","https://news.asu.edu/20241104-science-and-technology-asu-startup-pioneers-breakthroughs-cell-therapy"],
 ["4 Aug 2023","SBIR Phase I: islet dosing and loading density in injection-molded macroencapsulation devices","NIH RePORTER",RPT+"10716174"]];
var TEAM=[
 {g:"Founders",name:"Jessica Weaver",title:"Founder",sum:"Assistant professor of biomedical engineering, School of Biological and Health Systems Engineering, Arizona State University."},
 {g:"Founders",name:"Oren Snir",title:"Co-founder",sum:"Principal investigator, with Jessica Weaver, on the NIH SBIR Phase I award."},
 {g:"Founders",name:"Matthew Becker",title:"Chief Technology Officer",sum:"Contact principal investigator on the NIH SBIR Phase II award; postdoctoral research scholar at Arizona State University."},
 {g:"NIH Phase II",name:"Norma S. Kenyon",title:"Principal investigator",sum:"Principal investigator, with Matthew Becker, on the non-human primate macroencapsulation study."}];
var SHEETS=[];
