var FONTS=['300 1em "Outfit"','400 1em "Outfit"','500 1em "Outfit"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="s.sridhar@northeastern.edu";
var RP="https://reporter.nih.gov/project-details/";
/* Programmes, from theranano.com (Technology Pipeline; InCeRT; QUTE-CE MRI; Nanomedicines of molecular inhibitors), NIH RePORTER
   (R41/R42CA224646, R41DA043974, HHSN261201800026C) and Prostate Cancer and Prostatic Diseases (2026). Stage words only where the
   company's own pipeline chart or the public record states them. [programme, area, title, stage, detail, dim] */
var PIPE=[
 ["InCeRT-DTX","Prostate cancer and other solid tumours","Drug-eluting brachytherapy spacer implants","Scale-up manufacturing; IND for Phase I in preparation","A brachytherapy spacer loaded with docetaxel, made by a solvent-free hot-melt extrusion process, that radiosensitises the gland from the inside for local chemoradiation. Developed with brachytherapy clinicians at Brigham and Women's Hospital and Dana-Farber, under NIH Phase I and $2M Phase II STTR awards.",0],
 ["NanoTalazoparib","Ovarian, breast and lung cancer · Ewing sarcoma","Nanoparticle formulation of the PARP inhibitor talazoparib","Animal studies; ready for scale-up manufacturing","Tested in pre-clinical models of ovarian, breast and lung cancer and Ewing sarcoma, and ready for scale-up pharmaceutical manufacturing for IND-enabling studies. An NCI Phase I SBIR contract also funded InCeT-Talazoparib, an injectable sustained-release depot.",0],
 ["QUTE-CE MRI","Diagnostic imaging","Quantitative contrast-enhanced MRI with magnetic nanoparticles","First-in-human trial completed (NCT03266848)","Ultra-short time-to-echo MRI with safe iron-oxide nanoparticles gives quantitative blood-volume maps and angiograms of unprecedented clarity. Licensed from Northeastern University; first-in-human study at Massachusetts General Hospital under NIH STTR grant R41DA043974.",0]];
/* What the InCeRT-DTX canine study showed (Prostate Cancer and Prostatic Diseases, November 2026). */
var EVID=[
 ["Over 10× the dose","The tolerated intra-prostatic docetaxel dose, 9 µg per cm³, was more than ten times the estimated dose achievable by intravenous delivery"],
 ["No systemic toxicity","At that dose no systemic toxicities were observed, and local effects were minimal and non-clinical"],
 ["38–45% smaller","Combined with a single dose of external beam radiation, the implants reduced prostate volume by 38 to 45 percent"],
 ["Nineteen animals","A large-animal study of InCeRT-DTX in beagles, with Dartmouth, Brigham and Women's Hospital, Dana-Farber and Northeastern"]];
/* theranano.com (About Us) and NIH RePORTER. Text-only masthead; summaries only state what the record states. */
var TEAM=[
 {g:"Founder",name:"Srinivas Sridhar, PhD",title:"Founder",sum:"University Distinguished Professor of Physics, Bioengineering and Chemical Engineering at Northeastern University and Lecturer on Radiation Oncology, Harvard Medical School. Inventor and developer of the QUTE-CE MRA, InCeRT and InCeT implant technologies; more than 200 peer-reviewed publications."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2026","Assessment of a novel intra-prostate sustained release docetaxel combined with radiation treatment of prostate cancer: a canine BPH model","Prostate Cancer and Prostatic Diseases","https://pubmed.ncbi.nlm.nih.gov/43064742/"],
 ["2024","QUTE-CE MRI results published in the International Journal of Biomedical Imaging","International Journal of Biomedical Imaging","https://doi.org/10.1155/2024/9763364"],
 ["September 2019","NIH Phase II $2M STTR contract awarded for drug-eluting brachytherapy implants for chemoradiation therapy","NIH RePORTER",RP+"10017919"],
 ["September 2018","NCI Phase I SBIR contract awarded for sustained delivery of PARP inhibitors for cancer chemoprevention","NIH RePORTER",RP+"9788729"],
 ["July 2017","NIH Phase I STTR grant awarded for quantitative non-invasive brain imaging using magnetic nanoparticles","NIH RePORTER",RP+"9334402"]];
var SHEETS=[];
