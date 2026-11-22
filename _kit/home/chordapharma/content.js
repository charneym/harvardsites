var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','400 1em "Comfortaa"'];
var MAIL="info@chordapharma.com";
var UP="https://chordapharma.com/wp-content/uploads/";
/* the pipeline, from chordapharma.com (home, News) and the 2023-11-02 release: Capsadyn is the first of Chorda's pipeline of
   future drugs under development. [programme, sub, indication, stage label, progress 0..4, progress incl. in-progress, detail, dim] */
var PIPE=[
 ["Capsadyn®","On the market","Minor arthritis, joint and muscle pain","OTC topical cream · 0.25% capsaicin",4,4,"Launched in November 2023 after a placebo-controlled clinical trial at Carilion Clinic; on Amazon since February 2026, where it ranked as the #1 New Release in Arthritis Pain Relief Medications.",0],
 ["Pipeline","In development","Opioid-free analgesics for chronic pain","Under development",0,0,"Following Capsadyn, Chorda’s portfolio of future drugs is being developed to address the same priority: safe alternatives to opioids and to pain relievers that are not considered safe for long-term use.",1]];
/* the clinical trial: 2024-03-15 release, NCT05649228 */
var EVID=[
 ["Design","Double-blind, randomized and placebo-controlled, at a single site: the Dermatology Department of Carilion Clinic, Roanoke"],
 ["Participants","44 healthy volunteers, and every participant completed the study"],
 ["During the visit","Median peak burn of 0 for Capsadyn and for placebo, statistically indistinguishable (p = 0.32); 5 for a 0.1% capsaicin comparator cream (p < 0.001)"],
 ["The next day","No participant with Capsadyn or placebo reported any burning; 48.3% of those with the comparator did"]];
/* chordapharma.com (About Us). Text-only masthead (CI/CL). Summaries only restate the site. */
var TEAM=[
 {g:"Executive team",name:"Victor Iannello, Sc.D.",title:"Chief Executive Officer, Chairman",sum:"Inventor on 13 US patents; founded Radiant Physics and Synchrony, sold to Dresser-Rand. Fifteen years on Carilion Clinic boards."},
 {g:"Executive team",name:"Rick Carliss, Ph.D.",title:"Founder, President, Chief Scientific Officer",sum:"Thirty years in pharmaceuticals, including drug discovery at Schering-Plough and Endo; Ph.D. in Neurobiology and Physiology, Northwestern."},
 {g:"Non-executive directors",name:"G. Robert Vaughan",title:"Senior Vice President, Finance, Carilion Clinic",sum:"M.B.A. and B.S. in Finance, Pamplin College of Business at Virginia Tech."},
 {g:"Non-executive directors",name:"Aileen Helsel, PhD",title:"Director of Innovation, Carilion Clinic",sum:"Ph.D. in Molecular Bioscience, Washington State University."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["February 2026","Capsadyn expands distribution with an Amazon launch, quickly ranking as the #1 New Release in Arthritis Pain Relief","PRWeb","https://www.prweb.com/releases/capsadyn-expands-distribution-with-amazon-launch-quickly-ranking-as-1-new-release-in-arthritis-pain-relief-302683424.html"],
 ["March 2024","Top-line results from a clinical trial show Capsadyn does not burn","Press release",UP+"2024/03/2024-03-15-Clinical-Trial-Shows-Capsadyn-Doesnt-Burn.pdf"],
 ["November 2023","Chorda Pharma launches the sale of Capsadyn topical cream","Press release",UP+"2023/11/2023-11-02-Chorda-Pharma-Launches-Sale-of-Capsadyn.pdf"],
 ["June 2022","Chorda Pharma selected for a Commonwealth Commercialization Fund grant","Press release",UP+"2022/06/2022-06-27-Chorda-Pharma-Wins-CCF-Grant.pdf"],
 ["June 2021","Chorda Pharma partners with Carilion Clinic for emerging pain treatments","Press release",UP+"2021/07/2021-06-02-Chorda-Pharma-Partnership-with-Carilion-Press-Release.pdf"],
 ["May 2021","Victor Iannello joins Chorda Pharma as CEO","Press release",UP+"2021/07/2021-05-04-Iannello-Named-CEO-of-Chorda-Press-Release.pdf"]];
var SHEETS=[];
