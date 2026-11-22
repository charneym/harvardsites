var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','italic 500 1em "Manrope"'];
var MAIL="mailto:jschwartz@orthopreserve.com";
var LI="https://www.linkedin.com/company/orthopreserve/";
/* development pipeline, from orthopreserve.com/pipeline ("Development Pipeline") and the January 2025 FDA release.
   [year, milestone, detail, status, done] */
var PIPE=[
 ["2021","Company founded","Founded by orthopedic clinicians and biomedical engineers to commercialize the meniscus implant technology developed at a leading U.S. academic institution from 2016 to 2020, spun out of Georgia Tech.","Complete",1],
 ["2023","NIH SBIR grant awarded","Funded animal studies, long-term durability simulation testing and refinement of the minimally invasive surgical technique.","Complete",1],
 ["2024","FDA Breakthrough Device designation","Granted December 2024 for Defender. It confirms a significant clinical need and streamlines the FDA review pathway.","Complete",1],
 ["2025","FDA TAP Program acceptance","The first orthopedic device accepted into the FDA Total Product Life Cycle Advisory Program, enabling direct collaboration with FDA and other stakeholders.","Complete",1],
 ["2026–27","IDE submission and first-in-human trials","The current seed round will fund the remaining pre-clinical testing required for an Investigational Device Exemption and first-in-human clinical trials, targeted for 2027.","In progress",0]];
/* orthopreserve.com/team. Text-only masthead. */
var TEAM=[
 {g:"Leadership",name:"Jonathan Schwartz",title:"Chief Executive Officer",sum:"Inventor of the implant, first developed during his graduate work in biomechanical engineering at Georgia Tech; polymer science research and biotech engineering project management."},
 {g:"Leadership",name:"Cyrus Kump, MD",title:"Chief Medical Officer",sum:"Board-certified orthopedic surgeon, 20+ years in knee and meniscus arthroscopy; partner at OrthoVirginia; retired U.S. Army Reserve colonel."},
 {g:"Leadership",name:"Max Guillot",title:"Executive Vice President",sum:"Orthopedic PA, diagnosing, treating and assisting in surgeries for meniscus and other orthopedic injuries; formerly an EMT."},
 {g:"Leadership",name:"Brendan Baggot",title:"Vice President, Regulatory Affairs",sum:"Spoke for the company on its January 2025 FDA TAP enrollment and the guidance it brings on market adoption and insurance coverage."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["March 2026","ATDC startups secure rare FDA ‘Breakthrough Device’ status","Georgia Tech News","https://news.gatech.edu/news/2026/03/20/atdc-startups-secure-rare-fda-breakthrough-device-status"],
 ["February 2026","New implants seek to close the treatment gap for meniscus tears","BONEZONE","https://bonezonepub.com/2026/02/11/new-implants-seek-to-close-the-treatment-gap-for-meniscus-tears/"],
 ["January 2025","OrthoPreserve receives both FDA Breakthrough Device designation and TAP enrollment for its meniscus implant","PR Newswire","https://www.prnewswire.com/news-releases/orthopreserve-receives-both-fda-breakthrough-device-designation-and-prestigious-tap-enrollment-for-meniscus-implant-to-revolutionize-knee-pain-treatment-302363541.html"],
 ["January 2025","CEO Q&A: how a graduate thesis turned into medtech startup OrthoPreserve","Hypepotamus","https://www.hypepotamus.com/tag/orthopreserve/"],
 ["July 2024","Woodruff School alumnus launches meniscus implant startup","Georgia Tech","https://www.me.gatech.edu/news/woodruff-school-alumnus-launches-meniscus-implant-startup"]];
var SHEETS=[];
