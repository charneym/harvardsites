var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','700 1em "Montserrat"','600 1em "Lexend Zetta"'];
var MAIL="info@vivheart.it";
var EW="https://www.vivheart.it";
/* every fact below is from vivheart.it (Mission, News and the three articles it reposts):
   EuroIntervention image (30 Aug 2024), TCT 2024 abstract TCT-919 (J Am Coll Cardiol, 28 Nov 2024), and the research letter
   in the Canadian Journal of Cardiology (doi 10.1016/j.cjca.2025.07.007; reposted 19 Sep 2025). */
var STUDY=[
 ["Design","Prospective, single-arm, single-centre, open-label first-in-human feasibility study (NCT06412354)"],
 ["Site","IRCCS San Raffaele Scientific Institute, Milan; patients enrolled February to June 2024"],
 ["Safety","Primary safety endpoint reached in all 20 patients; no device-related complications, and no death or stroke at 30 days"],
 ["Performance","Technical success (VARC-3) in 100% of patients; median crossing time 208 seconds"]];
var GROUPS=[
 ["8","Transcatheter heart valves","Recrossing a THV: Acurate Neo 2, Evolut R and Myval"],
 ["6","Failed surgical bioprostheses","Valve-in-valve into a degenerated surgical valve"],
 ["6","Native aortic stenosis","Safety analysis extended to crossing native valves in TAVR"]];
/* news: the three items on vivheart.it/news, each linking to ViVHeart's own post. [date, headline, source, url] */
var NEWS=[
 ["September 2025","A dedicated device for a safe aortic prosthesis crossing: the EasyCross catheter","Canadian Journal of Cardiology",EW+"/2025/09/19/a-dedicated-device-for-a-safe-aortic-prosthesis-crossing-the-easycross-catheter/"],
 ["November 2024","TCT-919: EasyCross self-centering catheter to facilitate aortic valve crossing during TAVR, a first-in-human feasibility trial","TCT 2024 · JACC",EW+"/2024/11/28/tct-919-easycross-self-centering-catheter-to-facilitate-aortic-valve-crossing-during-tavr-a-first-in-human-feasibility-trial/"],
 ["August 2024","First-in-human experience with EasyCross: a novel catheter for a safe and correct aortic valve crossing","EuroIntervention",EW+"/2024/08/30/first-in-human-experience-with-easycross-a-novel-catheter-for-a-safe-and-correct-aortic-valve-crossing/"]];
var SHEETS=[];
