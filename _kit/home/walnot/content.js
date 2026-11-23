var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"'];
var MAIL="mr@walnot.health";
var PAPER="https://www.nature.com/articles/s41746-025-01690-3";
var BTP="https://communities.springernature.com/posts/mapping-the-mind-at-home-a-wearable-fnirs-platform-for-the-future-of-precision-mental-health";
var NIH="https://reporter.nih.gov/project-details/11405496";
/* programmes, from walnot.health (home, Products), the NIH STTR abstract (R41MH139347) and npj Digital Medicine 8:271 (2025).
   [title, stage, what it is, detail line, text, link label, url] */
var PROG=[
 ["NeuroEvidence","For researchers","Precision neuroimaging research","Dense-sampling studies, self-run at home","Participants set themselves up with AR guidance and record at home: 50+ sessions per participant instead of the 3–4 lab visits typical, with signal quality verified before every recording.","Run a study","#/contact"],
 ["At-home ADHD study","NIH STTR Phase I · 2025–27","Reliable data at home, for everyone","Funded by the National Institute of Mental Health","Aim 1 adapts the headband for reliable recording across head sizes and skin tones; Aim 2 tests feasibility and usability in an at-home study, with ADHD as the model disorder.","NIH RePORTER",NIH],
 ["Dense-sampling validation","Published · 2025","Wearable fNIRS for precision imaging","npj Digital Medicine 8, 271","Eight adults ran ten self-administered sessions each at home or at work. Reliability rose with every session to as high as 0.92, and individual brain-connectivity profiles stood out from the group.","Read the paper",PAPER],
 ["Clinical validation","Planned · Phase II","From prototype to scalable device","Larger clinical studies","If Phase I succeeds, Phase II will adapt the device for scalable manufacturing and carry out larger clinical validation studies.","The project",NIH]];
/* walnot.health About us, "Meet Our Team". Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Co-founders",name:"Maryam Rostami, PhD",title:"Co-Founder, Vice President and CEO",sum:"Cognitive neuroscience researcher and UX/UI designer."},
 {g:"Co-founders",name:"Audrey Bowden, PhD, MBA",title:"Co-Founder and President",sum:"Professor of Biomedical Engineering, of Electrical and Computer Engineering, and of Ophthalmology and Visual Sciences."},
 {g:"Co-founders",name:"Ali Rahimpour, PhD",title:"Co-Founder and CSO",sum:"Computational neuroscience and biological signal processing; contact PI on the NIH STTR award."},
 {g:"Co-founders",name:"Hadi Hosseini, PhD",title:"Co-Founder and Scientific Advisor",sum:"Associate Professor of Computational Neuroscience and Neuroimaging."},
 {g:"Co-founders",name:"Matthew Bowden, JD, MBA",title:"Co-Founder and CLO",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["2025–2026","NIH awards Walnot a Phase I STTR for an at-home precision functional neuroimaging platform, renewed for fiscal 2026","NIH RePORTER",NIH],
 ["2025","Wearable fNIRS platform for dense sampling and precision functional neuroimaging","npj Digital Medicine",PAPER],
 ["2025","Mapping the mind at home: a wearable fNIRS platform for the future of precision mental health","Springer Nature · Behind the paper",BTP]];
var SHEETS=[];
