var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','700 1em "Montserrat"'];
var MAIL="contact@vivitatechnologies.com";
var REP="https://reporter.nih.gov/project-details/";
var PRN="https://www.prnewswire.com/news-releases/vivita-technologies-awarded-1-5m-nih-grant-to-translate-biomaterials-with-blueprints-for-regeneration-301621530.html";
var SCI="https://www.vivitatechnologies.com/science.html";
/* programs: every line from vivitatechnologies.com (science, background, applications), the PR Newswire release of
   13 Sep 2022 and NIH RePORTER (R43HL136003, R44HL164140, R43HL180206). [stage, title, sub, status, detail, link, label] */
var PIPE=[
 ["Vascular","BARE Patch","Cardiovascular patch","Toward 510(k)","The Phase II SBIR funds the final characterization and evaluation of the BARE Patch for FDA 510(k) clearance in vascular indications, the step that opens product manufacturing and first-in-human studies.",PRN,"Press release"],
 ["Surgical valve","Heart valve leaflets","Immune-compatible, unfixed","Toward IDE","The same Phase II project builds the foundational dataset for an Investigational Device Exemption for heart valve indications: leaflets that function like a normal valve on implantation and are remodelled into the patient’s own tissue.",REP+"10478303","NIH RePORTER"],
 ["Transcatheter","BARE-Thin","TAVR leaflet biomaterial","Feasibility, 2025–27","Thinner BARE patches from porcine pericardium for transcatheter valves, tested against glutaraldehyde-fixed tissue for resistance to the damage of crimping, which raises concerns about TAVR durability.",REP+"11185741","NIH RePORTER"],
 ["Platform","Tissue and organ replacements","Xenogeneic ECM products","Research","SPEAR removes antigens from a wide range of animal tissues, including pericardium, artery, vein and whole heart: the basis for a spectrum of off-the-shelf tissue and organ replacement products.",SCI,"Science"]];
/* the platform's results, from vivitatechnologies.com/science and the patent numbers in NIH award R43HL180206 */
var EVID=[
 ["Antigens removed","Up to 97% of all detectable antigens, known (MHC, α-gal) and unidentified, hydrophilic and lipophilic"],
 ["Structure kept","Native collagen structure and function, so the scaffold is recognised as self and invites constructive repair"],
 ["Unfixed","No glutaraldehyde fixation: the tissue can be repopulated by the recipient’s cells and turned over like living tissue"],
 ["Patented","SPEAR Platform, US 9,220,733; BARE patches, US 9,827,350"]];
/* the team: vivitatechnologies.com/team. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founders",name:"Maelene L. Wong, PhD",title:"Co-founder and Chief Executive Officer",sum:"Pioneered the ViVita Process as a graduate student. 16 years in cardiovascular tissue engineering; PhD in Biomedical Engineering, UC Davis; BS in Bioengineering, UC Berkeley."},
 {g:"Founders",name:"Leigh G. Griffiths, VetMB, PhD",title:"Co-founder and Chairman",sum:"Runs the cardiovascular surgery program at UC Davis, where his research finds ways past the barriers to transplanting animal-derived tissue scaffolds."},
 {g:"Team",name:"Jim D. Olson, MBA",title:"Corporate Development",sum:"Over 40 years in leadership roles; founded WestShore Management Group. Business Specialist at the UC Davis Engineering Translational Technology Center."},
 {g:"Team",name:"Fabian Lara, MD",title:"Biomaterials Scientist",sum:"MD, Universidad Autónoma de Guadalajara; formerly a Postdoctoral Scholar in UC Davis Pathology and Laboratory Medicine."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2025","NIH SBIR award: unfixed, xenogeneic extracellular matrix for crimp damage-resistant and regenerative transcatheter heart valve prostheses","NIH",REP+"11185741"],
 ["September 2022","ViVita Technologies awarded $1.5M NIH grant to translate biomaterials with blueprints for regeneration","PR Newswire",PRN],
 ["May 2017","NIH SBIR award: novel xenogeneic extracellular matrix biomaterial for cardiovascular prostheses","NIH",REP+"9254357"],
 ["2016","Startup Month: ViVita Technologies","Comstock’s","https://www.comstocksmag.com/web-only/startup-month-vivita-technologies"],
 ["November 2014","Maelene Wong, co-founder and CEO, ViVita","Sacramento Business Journal","https://www.bizjournals.com/sacramento/print-edition/2014/11/21/maelene-wong-co-founder-and-ceo-vivita.html"],
 ["May 2013","New approach to heart valve replacement wins Big Bang! business competition","UC Davis","https://www.ucdavis.edu/news/new-approach-heart-valve-replacement-wins-big-bang-business-competition"]];
var SHEETS=[];
