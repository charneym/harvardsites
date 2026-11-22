var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Inter Tight"','500 1em "Inter Tight"','600 1em "Inter Tight"','400 1em "Montserrat"','600 1em "Montserrat"'];
var MAIL="dmaglaris@cytogelpharma.com";
var CG="https://cytogelpharma.com/";
/* the pipeline, from cytogelpharma.com (Pipeline, CYT-1010, Next Gen Endomorphins, Therapeutic Areas, Partners) and the
   October 13, 2026 release (Phase 2 underway, results expected Q1 2027).
   [programme, sub, indication, detail line, progress 0..4, progress incl. in-progress, text, dim] */
var PIPE=[
 ["CYT-1010®","Acute pain · IV","Moderate to severe postoperative pain","Intravenous · Phase 2 underway",2,2.5,"Phase 2 is evaluating efficacy and safety in patients with pain after surgery, with results expected in the first quarter of 2027. Phase 1 demonstrated safety and analgesic activity.",0],
 ["CYT-1010®","Chronic pain · oral","Chronic pain","Oral formulation · early research",0,.5,"Based on pre-clinical studies, CYT-1010 should also be effective for chronic pain. Cytogel has completed early research on an oral formulation for chronic therapy.",0],
 ["Next-gen endomorphins","Discovery","Endomorphin-like analgesics","From the patent portfolio",0,.3,"Many alternative endomorphin-like structures are in Cytogel’s patent portfolio; the company is selecting candidates with enhanced pharmaceutical properties.",0],
 ["Hydrogels","Partnering","Drug-delivery hydrogels","Temperature- and pH-sensitive",0,0,"Hydrogels that may carry many times their weight in drug, potentially improving control of release and precision of delivery. Open to collaboration.",1]];
/* cytogelpharma.com (Leadership, Contact Us). Text-only masthead (CI/CL). Summaries only restate the site. */
var TEAM=[
 {g:"Leadership",name:"C. Dean Maglaris",title:"CEO and Chair of the Board of Managers",sum:"Leads Cytogel and its contact for investors and scientists; has guided CYT-1010 from Phase 1 into Phase 2."},
 {g:"Leadership",name:"Theodore Maione, Ph.D.",title:"Chief Scientific Officer",sum:"Leads Cytogel’s science on the endomorphins and CYT-1010."},
 {g:"Leadership",name:"James Hamsher, Ph.D.",title:"Head, Licensing and Business Development",sum:"Cytogel’s contact for licensing, collaboration and corporate partnership."},
 {g:"Leadership",name:"Mary R. Driver",title:"Director, Clinical Development Operations",sum:"Runs clinical development operations for the CYT-1010 programme."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","Cytogel announces the advancement of CYT-1010 into Phase 2 clinical testing","Press release",CG+"newsroom-publications/"],
 ["April 2026","Cytogel announces initial closing of financing to advance its lead pain management candidate into Phase 2","EIN Presswire","https://www.einpresswire.com/article/907387436/cytogel-announces-initial-closing-of-financing-to-advance-lead-pain-manag"],
 ["November 2025","Cytogel Pharma announces equity offering to advance CYT-1010, a transformative pain solution","Press release",CG+"newsroom-publications/"],
 ["May 2023","Cytogel enters into a CRADA with the U.S. Army Institute of Surgical Research to evaluate CYT-1010","Press release",CG+"newsroom-publications/"],
 ["2020","Dilemma of addiction and respiratory depression in the treatment of pain: a prototypical endomorphin as a new approach","Pain Medicine","https://academic.oup.com/painmedicine/article/21/5/992/5511538"]];
var SHEETS=[];
