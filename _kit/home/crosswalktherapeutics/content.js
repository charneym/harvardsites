var FONTS=['400 1em "Alegreya"','500 1em "Alegreya"','600 1em "Alegreya"','400 1em "Alegreya Sans"','500 1em "Alegreya Sans"','700 1em "Alegreya Sans"','400 1em "DM Mono"','500 1em "DM Mono"'];
var WEB="https://crosswalktherapeutics.com/";
var MAIL="info@crosswalktx.com";
var PR_MPS="https://www.prnewswire.com/news-releases/crosswalk-therapeutics-secures-national-mps-society-grant-to-address-unmet-skeletal-disease-in-morquio-a-syndrome-302663587.html";
var PR_CDX="https://www.biopharmadive.com/press-release/20240712-crosswalk-therapeutics-announces-acquisition-of-rare-disease-assets-from-co/";
/* the approach, as set out on crosswalktherapeutics.com and in the company's press releases. [title, short, detail] */
var PROPS=[
 ["Genetically validated targets","Over 80% of rare diseases are genetic","By focusing on clinically identified and pre-clinically validated targets, we enhance the likelihood of program success."],
 ["Function, replaced or corrected","Loss and gain of function","Functional replacements for loss-of-function diseases, and engineering solutions for toxic gain-of-function diseases."],
 ["Technology-neutral","The modality the disease needs","We choose the modality best suited to the therapeutic requirements, while also considering patient convenience."],
 ["Protein biodistribution","Into hard-to-reach tissues","A plug-and-play platform for delivering engineered enzymes into tissues that today’s therapies leave under-treated."],
 ["Easier on patients","Subcutaneous administration","Convenient subcutaneous dosing is designed to reduce the burden of therapy for patients, caregivers and families."],
 ["Built on experience","TKT, Shire, Dyax, Baxalta, Takeda","A team that has spent its careers developing therapies for rare disease patients, with significant success in previous roles."]];
/* programs: as announced by the company. [name, status line, detail, url] */
var PROG=[
 ["Morquio A syndrome (MPS IVA)","National MPS Society research grant, 2026","A fusion protein designed to improve both enzyme performance and delivery to bone and cartilage, the skeletal disease current enzyme therapy leaves poorly served.",PR_MPS],
 ["Fabry disease","Engineered enzyme, acquired from Codexis","Investigational engineered enzyme, integrated with Crosswalk’s biodistribution platform toward a best-in-class enzyme replacement therapy.",PR_CDX],
 ["Pompe disease","Engineered enzyme, acquired from Codexis","Investigational engineered enzyme, combined with the platform in a single construct to reach the tissues infusions leave behind.",PR_CDX],
 ["Further lysosomal storage diseases","Platform expansion","The platform is designed to extend to other lysosomal storage diseases, including those with neurological manifestations such as metachromatic leukodystrophy.",PR_CDX]];
var AREAS=["Lysosomal storage diseases","Inborn errors of metabolism","Benign hematology","Immunology"];
var ROOTS=["TKT","Shire","Dyax","Baxter","Baxalta","Takeda"];
/* people: as named in the company's press releases */
var TEAM=[
 ["Madhu Natarajan, PhD","Chief Executive Officer",""],
 ["Rizwana Islam","SVP and Head of Metabolism",""]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["16 January 2026","Crosswalk Therapeutics secures a National MPS Society grant to address unmet skeletal disease in Morquio A syndrome","PR Newswire",PR_MPS],
 ["15 July 2024","Crosswalk Therapeutics announces the acquisition of rare disease assets, engineered enzymes for Fabry and Pompe disease, from Codexis, Inc.","BioPharma Dive",PR_CDX]];
var SHEETS=[];
