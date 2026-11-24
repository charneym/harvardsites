var FONTS=['400 1em "Poppins"','500 1em "Poppins"','600 1em "Poppins"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:info@toolsforsurgery.com";
var TFS="https://www.toolsforsurgery.com";
var FDA="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=";
/* The catalogue, from toolsforsurgery.com/products and each product page (read 2026-11-23).
   [area, name, catalogue no(s), description, product page] */
var PROD=[
 ["Bariatric","ZZIREN® Orogastric Tubes","ZZ-GBT and ZZ-SGT, 32 / 36 / 40 Fr","Flexible, suction-regulating gastric tubes for gastric bypass, sleeve gastrectomy and hiatal hernia repair, with a pinch clamp, a suction-regulating valve and a 92 cm insertion tube.","/zziren-orogastric-tubes/"],
 ["Bariatric","Bariatric Air Syringe™","ALT-BA","Controlled insufflation for intraoperative leak testing of gastric staple lines and anastomoses, with an integral 20–60 mmHg pressure gauge. Compact and disposable.","/bariatric-air-syringe/"],
 ["Colorectal","Colorectal Air Syringes™","ALT-30 and ALT-50","Pressure-regulated insufflation for leak testing colorectal anastomoses, in open (OP) and laparoscopic and robotic (LP) versions. An indicator pin signals the target pressure; a valve vents any excess.","/alt/"],
 ["Colorectal","Circular Stapler Anvil Sizer Set","ANS-10","Reusable 25, 29 and 33 mm sizers that insert easily and gauge the proximal bowel more accurately than conventional sizers.","/circular-stapler-anvil-sizer-set/"],
 ["Colorectal","Circular Stapler Head Sizer Set","HSS-10","Light, reusable sizers shaped like the stapler itself, with a venting channel so they never trap air ahead of themselves.","/circular-stapler-head-sizer-set/"],
 ["Colorectal","Hemorrhage Occluder Pins","HOP-03 and HOP-AP","Medical-grade titanium thumbtacks for control of presacral hemorrhage when clamping, suturing and cautery are ineffective, with or without an applicator.","/hop/"],
 ["Colorectal","Easy Loop™","EZL-02-NS","A loop ostomy device that combines the advantages of a rigid rod and a flexible bridge: no suturing, retaining rings, soft silicone.","/easy-loop/"],
 ["Anorectal","Sohn’s Dilators®","SOD-03","A set of 30, 35 and 40 mm dilators for Standardized Anal Dilatation in the treatment of anal fissure. Autoclavable, lightweight and durable.","/sod/"],
 ["Anorectal","Young’s Style Anal Dilators","YSD-06","Six graduated, self-retaining dilators, 15 to 40 mm, for anal stenosis, anal fissure and puborectalis syndrome.","/ysd/"],
 ["Anorectal","Illuminated Indirect Anoscopy Mirror","IAM-01","For mirror examination of hemorrhoids, mucosal prolapse and full-thickness rectal prolapse.","/illuminated-indirect-anoscopy-mirror"],
 ["Anorectal","NEOBALM®","NEO-12","A gentle hygienic cleansing cream for the anal region that leaves a non-greasy, moisturizing residue.","/neobalm/"],
 ["Wound","WIKI DRAINS®","WIK-15-3-1 and WIK-15-3-6","Transcutaneous channel drains in medical-grade silicone: four channels, a round tip, a securing flange, easily trimmed. Supplied sterile.","/wiki-drains/"]];
/* Quoted on the product pages of toolsforsurgery.com, with their sources */
var EVID=[
 ["ASCRS Clinical Practice Guidelines","“Routine testing of colorectal anastomoses reduces the postoperative leak rate.”"],
 ["Abe Fingerhut, MD","“Sterile titanium thumbtacks should be available in all operating rooms where rectal surgery is performed.”"],
 ["Standardized Anal Dilatation","Success rates of 83% to 88% for anal dilatation to 40 mm for six minutes, with lower rates of impaired continence than lateral internal sphincterotomy."],
 ["Leiboff AR, J Wound Care 2014","Vertically drained closed-incision NPWT: a novel method for managing surgical incisions, the case series behind the WIKI DRAINS®."]];
/* FDA 510(k) database (accessdata.fda.gov), applicant Tools for Surgery / Arnold R. Leiboff. [decision date, device, number] */
var REG=[
 ["10 January 2025","ZZIREN® Orogastric Tube, SGT and GBT, 32 to 40 Fr","K242901"],
 ["18 May 2022","Siren SGT","K220218"],
 ["25 March 2004","Hemorrhage Occluder Pin","K040109"],
 ["24 March 2004","Easy Loop, model EZL-01","K040110"]];
/* Text-only masthead; only what public records state */
var TEAM=[
 {g:"Leadership",name:"Arnold R. Leiboff, MD",title:"President",sum:"Board-certified colon and rectal surgeon in East Setauket, New York; the named contact on each of the company’s FDA 510(k) clearances."}];
var SHEETS=[];
