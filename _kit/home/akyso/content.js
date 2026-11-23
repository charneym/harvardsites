var FONTS=['300 1em "Figtree"','400 1em "Figtree"','500 1em "Figtree"','400 1em "Open Sans"','600 1em "Open Sans"'];
/* Akyso publishes no email address; its site has a contact form and its July 2025 release a phone line. */
var FORM="https://akyso.com/#contact";
var TEL="tel:+17272700659";
var BW="https://www.businesswire.com/news/home/20250729152776/en/Akyso-Therapeutics-Expands-Pipeline-with-New-NIH-Grant-for-Buprenorphine-Implant-Following-Successful-Phase-1a-Trial-of-Naltrexone-Implant";
var PUB="https://journals.lww.com/journaladdictionmedicine/fulltext/9900/a_long_acting_naltrexone_implant__istep_n__for.653.aspx";
/* Programs, from akyso.com (Pipeline). Stage words only as the company states them.
   [program, area, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["iSTEP-N®","Opioid use disorder","Naltrexone implant","Phase 1a completed · Phase 1b next","A 10 cc solid, bioabsorbable implant with a payload of 4.8 grams of naltrexone, Akyso’s beachhead product. The first-in-human Phase 1a trial completed in April 2025; the Phase 1b 12-month PK study (NCT07064564) is commencing.",0,"Clinical","https://clinicaltrials.gov/study/NCT07064564","NCT07064564"],
 ["iSTEP-B","Opioid use disorder","Buprenorphine implant","Preclinical","An extended-release buprenorphine implant on the iSTEP platform, funded by NIDA/NIH in August 2025. Phase 1a/1b/2 will be a seamless study design in subjects with OUD.",1,"NIDA funded","https://reporter.nih.gov/project-details/11082099","NIH RePORTER"],
 ["iSTEP-N®","Alcohol use disorder","Naltrexone implant","Phase 1a completed","Naltrexone has been shown effective in treating patients with alcoholism; the same iSTEP-N implant is listed for alcohol use disorder.",1,"Clinical","",""],
 ["iSTEP-G","Weight loss · metabolic disease","GLP-1 receptor agonist implant","Preclinical","In Q1 2026 Akyso commenced formulation research with a GLP-1 receptor agonist, aiming for therapeutic levels after a single in-office procedure.",1,"Preclinical","",""]];
/* Milestones, as akyso.com and the 29 July 2025 Business Wire release state them. */
var EVID=[
 ["Since 2014","Akyso has worked in sustained-release drug delivery since 2014"],
 ["HEAL Initiative, 2019","In April 2019 Akyso was awarded a grant from the National Institute on Drug Abuse (NIDA) for its naltrexone implant"],
 ["Phase 1a complete","The first-in-human trial of iSTEP-N completed in April 2025, with excellent PK data, no serious adverse events and acceptable adverse events"],
 ["Buprenorphine, 2025","In August 2025 NIDA/NIH funding followed for iSTEP-B, building on the naltrexone implant"]];
/* akyso.com (Our team). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Founders",name:"Jeffrey Benner, MD",title:"Co-Founder · Co-CEO",sum:"Physician and biotech innovator; 38 years in retina surgery before turning full-time to the opioid crisis. Co-Principal Investigator on the $15M NIH/NIDA grant behind iSTEP-N; more than 10 issued U.S. patents."},
 {g:"Founders",name:"Steven Cohen, MD",title:"Co-Founder · Co-CEO",sum:"Surgeon, inventor and entrepreneur; directs strategy, regulatory development and translational research. Investigator in more than 100 clinical trials; Clinical Professor of Ophthalmology, University of South Florida."},
 {g:"Leadership",name:"Pravin Soni, PhD",title:"Chief Technical Officer",sum:"More than 30 years in pharmaceutical development; leads chemistry, manufacturing and controls for iSTEP-N, from polymer engineering to GMP scale-up."},
 {g:"Leadership",name:"Josh Berman, MD, PhD",title:"Chief Regulatory Officer",sum:"More than 40 years guiding drugs and biologics to FDA approval; formerly directed the Office of Clinical and Regulatory Affairs at the NIH."},
 {g:"Leadership",name:"Christopher Lumpkin",title:"Chief Engineer",sum:"Medical device engineer with over 20 years in surgical instrumentation; directs prototype and injector development for the iSTEP platform."},
 {g:"Leadership",name:"Adrienne O’Reilly, MS, CQA",title:"Head of Quality",sum:"Quality assurance executive with over a decade in global pharmaceutical development; oversees Akyso’s quality management system."},
 {g:"Advisors",name:"Mary Ellen Cosenza, PhD",title:"Toxicologist",sum:"Board-certified toxicologist (DABT); formerly Executive Director of U.S. Regulatory Affairs and Toxicology at Amgen."},
 {g:"Advisors",name:"Martha Riddle",title:"FDA Liaison",sum:"Senior clinical development executive with more than 25 years across psychiatry, neurology and addiction medicine."}];
var NEWS=[
 ["Q1 2026","iSTEP-G: formulation research begins on an ultra-long-acting GLP-1 receptor agonist implant","akyso.com","https://akyso.com/#news"],
 ["29 July 2025","Akyso Therapeutics expands pipeline with new NIH grant for buprenorphine implant following successful Phase 1a trial of naltrexone implant","Business Wire",BW],
 ["2025","A long-acting naltrexone implant (iSTEP-N) for opioid use disorder: first-in-human results published","Journal of Addiction Medicine",PUB],
 ["2025","Steven Cohen, MD, FACS presents the Phase 1a results of iSTEP-N at the GAB 2025 addiction conference, Orlando","Magnus Group","https://addiction-behavioral-conferences.magnusgroup.org/program/scientific-program/2025/a-long-acting-naltrexone-implant-for-opioid-use-disorder-first-in-human-phase-i-trial"]];
var SHEETS=[];
