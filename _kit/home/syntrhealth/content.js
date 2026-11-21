/* applications: every line from syntrhealth.com (/solutions-for/*, /about) and NIH RePORTER project summaries.
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["SyntrFuge System","Aesthetics and plastic surgery","Microfat transfer","FDA-cleared","A natural alternative to synthetic fillers: up to 15 ml of a patient’s own fat, microsized for forehead, under-eye, cheeks, chin, lips, breasts and hips, through smaller cannulas and in an outpatient setting. Early-stage sales in multiple plastic surgery practices.","https://syntrhealth.com/solutions-for/aesthetics-plastic-surgery/","Syntr Health"],
 ["Wound care","Diabetic foot ulcers","Point-of-care healing","NIH SBIR Phase I, 2026","Harvest, process and return the patient’s own adipose tissue to the wound in one visit. NIDDK award 1R43DK147508 funds an early feasibility clinical study, toward FDA Breakthrough Device designation.",RP+"11349024","NIH RePORTER"],
 ["Platform","Device automation for rapid tissue microsizing","SyntrFuge and SyntrFPU 360","NIH SBIR Phase II","Automating the FDA-cleared CD-microfluidic platform as one system for many tissues. NCATS award R44TR004975, renewed in 2026.",RP+"11421478","NIH RePORTER"],
 ["Reconstruction","Breast cancer reconstructive surgery","Large-volume processing","NIH SBIR Phase I, 2025","Processing the larger volumes of the patient’s own fat that breast reconstruction needs. NCI award 1R43CA302403.",RP+"11253864","NIH RePORTER"],
 ["Diagnostics","Tumour tissue dissociation for single-cell analysis","CD lab-on-a-chip","NIH SBIR Phase I, 2025","Turning tumour tissue into viable single cells in minutes, with branching microfluidic channels on a spinning CD. NCATS award 1R43TR005720.",RP+"11070092","NIH RePORTER"]];
/* the wound-care evidence, every line from Syntr's NIH project summaries (R44TR004975, R43DK147508) */
var EVID=[
 ["Animal model","An earlier SBIR Phase I grant used microsized adipose tissue to heal diabetic ulcers in an animal model"],
 ["First patients","Preliminary human clinical data show significant diabetic foot ulcer wound closure within 28 ± 4 days, using the patient’s own fat processed in the platform"],
 ["Next study","A 2026 NIDDK award funds an early feasibility clinical study of the SyntrFuge System in people with diabetic foot ulcers"],
 ["The aim","Clinical evidence on safety and effectiveness, to support a pursuit of FDA Breakthrough Device designation for diabetic foot ulcers"]];
/* syntrhealth.com/about/our-team, condensed from their bios; plus the co-investigator named on the 2026 NIH award */
var TEAM=[
 {g:"Founders",name:"Ahmed Zobi",title:"Founder & Chief Executive Officer",sum:"Over 8 years in microfluidics and biomechanics. Led R&D and the company’s grants and funding, and guided the SyntrFuge System to 510(k) clearance. BS Biomedical Engineering, UC Irvine; EMBA."},
 {g:"Founders",name:"Hugo Salas",title:"Co-Founder, VP Business Development",sum:"Over 8 years in microfluidics; leads sales, marketing and technical product documentation. BS Biomedical Engineering, UC Irvine."},
 {g:"Founders",name:"Justin Stovner",title:"Co-Founder, VP Engineering",sum:"Lead engineer and designer of the SyntrFuge System; oversees manufacturing, automation and mechanical testing. BS and MS Biomedical Engineering, UC Irvine."},
 {g:"Founders",name:"Annie Kang",title:"Researcher, Veterinary Sciences",sum:"Bench test protocols and laboratory data; in veterinary medicine, her goal is treating canine spontaneous knee osteoarthritis."},
 {g:"Board, advisors and investigators",name:"Dane Shackleford",title:"Board Member",sum:"25+ years in medical devices, including VP of Sales at KCI/Acelity in negative pressure wound therapy and VP of Sales & Marketing at Spiracur."},
 {g:"Board, advisors and investigators",name:"Ron King, PhD",title:"Clinical Research, Advisory Board",sum:"Co-founder of the biotech accelerator BioAccel; formerly VP of Business and Strategic Partnerships at TGen, and senior positions at the National Institutes of Health."},
 {g:"Board, advisors and investigators",name:"David G. Armstrong",title:"Principal investigator, NIDDK award",sum:"Named with Ahmed Zobi as a principal investigator on the 2026 diabetic foot ulcer study award."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","NIDDK awards Syntr an SBIR grant for the prevention of amputation with rapid healing of diabetic ulcers using autologous microsized fat tissue","NIH RePORTER",RP+"11349024"],
 ["August 2026","NCATS continues Syntr’s Phase II award to automate its FDA-cleared CD-microfluidic platform for rapid tissue microsizing","NIH RePORTER",RP+"11421478"],
 ["September 2025","Syntr receives a $1.05 million SBIR Phase II award for device automation of the SyntrFuge platform","NIH RePORTER",RP+"11253865"],
 ["August 2025","NCI funds work on large-volume fat processing for breast cancer reconstructive surgery","NIH RePORTER",RP+"11253864"],
 ["August 2025","NCATS funds rapid, automated dissociation of tumour tissue for single-cell diagnostics","NIH RePORTER",RP+"11070092"],
 ["August 2021","Syntr Health Technologies announces FDA clearance of the SyntrFuge System, and an oversubscribed $2.2 million seed round","PR Newswire","https://www.biospace.com/syntr-health-technologies-announces-fda-clearance-of-the-syntrfuge-system-for-use-in-specialty-surgeries-requiring-transfer-and-implantation-of-patient-s-own-fat-tissue"]];
var SHEETS=[];
