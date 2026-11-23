var FONTS=['300 1em "Exo"','400 1em "Exo"','500 1em "Exo"','600 1em "Exo"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"'];
var WEB="https://www.giwindows.com/";
var MAIL="brian.tinkham@giwindows.com";
var MEDIA="Media@giwindows.com";
var FDA="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=";
var P_SE=WEB+"_files/ugd/3c099b_6db93aff26c54b98997e468f81424086.pdf";
var P_OS=WEB+"_files/ugd/3c099b_77a3619cec9d4cd6b9f62636f6696f9c.pdf";
var PR_FLEX=WEB+"_files/ugd/3c099b_ae115bb4078c460dafef8654b851e033.pdf";
var PR_B=WEB+"_files/ugd/3c099b_3cd3605bbd7745f0b63f8e2c40d8f18a.pdf";
/* the Flexagon system: from giwindows.com, the June and August 2025 FDA releases and Surgical Endoscopy (2025). [part, figure, detail, url] */
var PROPS=[
 ["Flexagon self-forming magnets","Self-aligning","Delivered into each of the two segments to be joined, the magnets self-form and self-align, then create the anastomosis by magnetic compression: sutureless and staple-free.",PR_FLEX],
 ["Compression, serosa to serosa","No staples, no sutures","The compressed tissue seals serosa to serosa, leaving no retained foreign bodies and no pathways from mucosa to serosa, the drawbacks of staples and sutures.",P_SE],
 ["OTOLoc access system","Immediately patent","An implant with a central lumen that gives radial support to the enterotomies, capturing and controlling them between the magnets so the anastomosis carries flow at once.",P_OS],
 ["Laparoscopic and endoscopic delivery","Less invasive","Delivery systems for minimally invasive surgery and the emerging field of endoluminal surgery, integrating laparoscopic delivery, advanced robotics and endoscopic delivery.",PR_FLEX],
 ["Nothing left behind","Naturally expelled","Once the anastomosis has formed, the magnets and device pass naturally, leaving no foreign material in the patient.",P_OS]];
/* evidence and clearances. [name, status, detail, url] */
var PROG=[
 ["First in human","Obesity Surgery, 2025","Seven patients, immediately patent magnetic duodeno-ileal anastomosis (IMPA-DI) during SADI-S: all procedures completed, magnet placement in a median 12 minutes, liquid diets resumed within 2 days, no anastomosis-related adverse events at 30 days, all devices naturally expelled.",P_OS],
 ["Preclinical, against staplers","Surgical Endoscopy, 2025","Fourteen swine, laparoscopic magnetic versus stapled bypass anastomoses: no adverse events at 42 days, average burst pressure 129.2 mmHg versus 79.4 mmHg for staples, no bacterial ingress, and devices rated easy or very easy to use.",P_SE],
 ["FDA 510(k): Flexagon","K243482 · June 2025","Clearance for the Flexagon self-forming magnets with laparoscopic and endoscopic delivery, a magnetic compression anastomosis system.",FDA+"K243482"],
 ["FDA 510(k): Flexagon Plus OTOLoc","K250541 · August 2025","The OTOLoc access system, which controls and captures the enterotomy between Flexagon magnets, followed by further clearances in January 2026 (K253550) and October 2026 (K261630).",FDA+"K261630"]];
/* people: giwindows.com/leadership-board-of-directors. [name, role, one sentence] */
var LEADS=[
 ["Brian Tinkham","President and Chief Executive Officer","Co-founder of Beacon Endoscopic, acquired by Covidien in 2014, from which GI Windows was spun out; formerly VP of New Technologies at Medtronic."],
 ["Peter Lukin","Chief Operating Officer","Over two decades in endoscopic device development and operations, and more than 15 commercial product launches."],
 ["Gerry Sheridan","Chief Financial Officer","Over 20 years of global financial management, principally in medical device startups."],
 ["Erik B. Wilson, MD","Chief Medical Officer","Professor of Surgery at McGovern Medical School, UTHealth Houston, and Division Chief of Elective General Surgery."],
 ["Yverre Bobay","Vice President, Regulatory","Over 20 years of global regulatory experience with class II and III devices, including PMAs, 510(k)s and IDEs."]];
var BOARD=[
 ["Christopher Thompson, MD","Director","Co-founder of Beacon Endoscopic and GI Windows; Director of Endoscopy, Brigham and Women’s Hospital, and Professor of Medicine, Harvard Medical School."],
 ["Frederic Moll, MD","Director","Co-founder of Intuitive Surgical and Auris Health; Co-Founder and Partner, Sonder Capital."],
 ["V. Kadir Kadhiresan, PhD","Director","Vice President, Venture Investments, Johnson & Johnson Innovation."],
 ["Daniel T. Sheehan","Director","Vice President of Venture Capital, Medtronic."],
 ["Steve Burriss","Director","Chief Operating Officer, Orlando Health."],
 ["John Cammett","Director","Co-founder, Realterm Private Equity."],
 ["Payson Coleman, Esq.","Director","Senior Counsel, Pillsbury."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","FDA 510(k) clearance for the GI Windows Flexagon Plus OTOLoc System (K261630)","FDA","https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K261630"],
 ["January 2026","FDA 510(k) clearance for the Self-Forming Magnet, Flexagon Plus OTOLoc (K253550)","FDA","https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K253550"],
 ["August 2025","FDA 510(k) clearance for the OTOLoc Access System, which controls and captures the enterotomy between Flexagon magnets","GI Windows",WEB+"_files/ugd/3c099b_8c64d191dd874326ba5310b08e30a073.docx?dn=Otoloc%20Press%20Release%2008_04_25..docx"],
 ["June 2025","FDA 510(k) clearance for Flexagon self-forming magnets, laparoscopic and endoscopic delivery system","GI Windows",PR_FLEX],
 ["March 2025","Immediately patent magnetic duodeno-ileal anastomosis (IMPA-DI): the first-in-human study","Obesity Surgery",P_OS],
 ["November 2024","$37 million Series B led by Orlando Health Ventures, with Rex Health Ventures, J&J Innovation–JJDC and others","GI Windows",PR_B]];
var SHEETS=[];
