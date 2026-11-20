var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Inter"','500 1em "Inter"','500 1em "JetBrains Mono"','500 1em "Sora"'];
var WEB="https://omnecoil.com/";
var MAP="https://www.google.com/maps/search/?api=1&query=4640+SW+Macadam+Ave+Portland+OR+97239";
/* the OmnEcoil system, from omnecoil.com ("Our Solution") and the NIH NCI STTR abstract (1R41CA278032-01A1) */
var PARTS=[
 ["Endorectal coil","Disposable · 20 cm","A disposable endorectal MRI coil that images the prostate from close range. In ex vivo phantom testing its signal-to-noise ratio was on average 78% higher than a commercial inflatable balloon coil."],
 ["Multichannel needle guide","Curved array","A curved array of multiple biopsy channels. The guide at the geometric centre, the convergence point of the array, directs the biopsy needle to the target."],
 ["Needle placement in the bore","Gap below the coil","A gap below allows MRI needle placement at the same time, so imaging and tissue sampling happen in one procedure inside the scanner."],
 ["Clamp stand and baseplate","Reusable · embedded electronics","A reusable clamp stand, embedded electronics and baseplate. The system is designed to work with any standard MRI scanner."],
 ["Software","Future development","Plans include machine learning for target identification and/or biopsy hole selection."]];
/* milestones, each from a public record */
var MILES=[["2015","The OmnEcoil is first conceived: an endorectal coil combined with a multichannel transrectal needle introducer"],
 ["2020","NSF SBIR Phase I award to develop the integrated endorectal MRI and targeted transrectal biopsy system"],
 ["2022","Feasibility study of the OmnEcoil system registered at the OHSU Knight Cancer Institute (NCT05362032)"],
 ["2024","Prototype description and ex vivo evaluation published in the Journal of Computer Assisted Tomography"],
 ["2025","NSF Phase I closes with a finalized multichannel needle introducer, tested in phantoms and ready for in vivo testing"],
 ["2025","NIH NCI STTR Phase I award ($399,995) for feasibility testing in 30 men at OHSU"]];
var TEAM=[
 {g:"Leadership",name:"Bernadette Greenwood",title:"CEO",sum:"Imaging specialist and clinical researcher, a pioneer of MRI-guided focal therapy for prostate cancer."},
 {g:"Leadership",name:"Duffy DuFresne",title:"Chairman",sum:"Biotech and medical device startup CEO who has raised ca. $200M in private and public financings."},
 {g:"Leadership",name:"Dr. Fergus Coakley",title:"Inventor and Scientific Advisor",sum:"Inventor of the OmnEcoil; Professor and Chair of Diagnostic Radiology at OHSU."},
 {g:"Clinical advisory board",name:"Jen-Jane Liu, MD",title:"Urologic oncologist, OHSU",sum:"Assistant Professor of Urology at OHSU, specialising in cancers of the genitourinary system."},
 {g:"Clinical advisory board",name:"Scott Eggener, MD",title:"Professor of Surgery and Radiology, University of Chicago",sum:"Director of the Prostate Program at UChicago Medicine; over 200 publications on urologic cancers."},
 {g:"Clinical advisory board",name:"Aytekin Oto, MD, MBA",title:"Professor of Radiology and Surgery, University of Chicago",sum:"Director of Body Imaging, with a special interest in MR-guided prostate biopsy and focal therapy."}];
/* news: only items with a working link */
var NEWS=[
 ["2 Sep 2025","NIH NCI STTR Phase I: transforming prostate cancer diagnosis, feasibility testing of a novel system for integrated endorectal MRI and in-bore biopsy","NIH RePORTER","https://reporter.nih.gov/project-details/11186195"],
 ["May 2024","Prototype description and ex vivo evaluation of a system for combined endorectal MRI and in-bore biopsy of the prostate","J. Comput. Assist. Tomogr.","https://doi.org/10.1097/RCT.0000000000001583"],
 ["May 2022","Feasibility of the OmnEcoil system for integrated endorectal MRI and transrectal MRI-targeted biopsy of the prostate","ClinicalTrials.gov","https://clinicaltrials.gov/study/NCT05362032"],
 ["Dec 2020","NSF SBIR Phase I: prostate cancer diagnosis with an integrated endorectal MRI and targeted transrectal biopsy","NSF","https://www.nsf.gov/awardsearch/showAward?AWD_ID=2037190"]];
var SHEETS=[];
