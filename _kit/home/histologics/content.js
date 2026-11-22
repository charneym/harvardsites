var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','italic 800 1em "Barlow Semi Condensed"'];
var MAIL="support@histologics.com";
var WC="https://histologicswc.com/",WH="https://histologicswh.com/",VT="https://histologicsvet.com/";
/* the devices, from the three division sites (histologicswh.com, histologicswc.com, histologicsvet.com), the IP and
   regulatory pages, and the 2025-11-06 Soft K-Bride release. [device, division, what it is, detail line, text, link, url] */
var DEV=[
 ["Soft K-Bride®","Wound care · New 2025","Curved Kylon® brush-curette","Wound-bed prep, debridement and biopsy","Contours margins and “saucerizes” the wound bed; dislodges necrosis and biofilm. The handle is marked in centimetres to measure a wound up to 10 cm.","Wound care",WC],
 ["SoftBiopsy® +D","Wound care","Debride and sample in one step","Kylon® brush-biopsy for wounds","Gentle tangential sampling with minimal trauma; solid tissue for culture or PCR, held in a snap-off tissue container.","Wound care",WC],
 ["Soft K-Cot®","Wound care · Veterinary","Fingertip Kylon® pad","Soft debridement with optional tissue capture","Worn on the fingertip for controlled access and feel; the hooks lift slough and biofilm. Single-use.","Wound care",WC],
 ["Soft K-Rette®","Wound care · Veterinary","Slim Kylon® brush-curette","Narrow and crevice debridement","Reaches tight spaces and wound crevices for efficient debris lift and capture, with a snap-off tissue container.","Wound care",WC],
 ["SoftBiopsy®","Women’s health · Veterinary","Ectocervical friction biopsy","Single-use Kylon® pad","A trans-epithelial biopsy that is gentler than a punch; the head snaps off straight into fixative for transport.","Women’s health",WH],
 ["Soft ECC® and ECC-S","Women’s health","Endocervical curettage","Blunted, tapered Kylon® tips","An abundant ECC sample caught in the fabric’s “tissue trap”, rotated and dropped directly into fixative. The smaller ECC-S fits narrow, stenotic canals.","Women’s health",WH]];
/* histologicswc.com (About, Advisory Board) and the company's releases. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founder",name:"Neal M. Lonky, MD, MPH",title:"Founder and CEO",sum:"Board-certified Ob/Gyn and inventor; developed Speculoscopy (PapSure®) and SpiraBrush CX® before founding Histologics around the Kylon® fabric."},
 {g:"Wound care advisory board",name:"Traci A. Kimball, MD, CWSP",title:"Advisory Board Co-Founder",sum:"Denver, Colorado; known as The Wound Wizard. Working In Synergy (WISH) Holdings and The WISH Clinic."},
 {g:"Wound care advisory board",name:"David Armstrong, DPM",title:"Professor of Surgery, USC",sum:"Co-Director of the USC Limb Preservation Program; Director of the Southwestern Academic Limb Salvage Alliance (SALSA), Keck School of Medicine."},
 {g:"Wound care advisory board",name:"Bruce Levine, DPM, FACFAS",title:"Founding President, Harbor Foot & Ankle",sum:"Podiatric surgeon, San Pedro, California."},
 {g:"Wound care advisory board",name:"Mark Suski, MD, FACS",title:"Plastic and Reconstructive Surgery",sum:"Diplomate, American Board of Plastic Surgery; Thousand Oaks, California."},
 {g:"Wound care advisory board",name:"Laura Swoboda, DNP",title:"Advisory Board (Ad-Hoc)",sum:"Professor of Health Sciences, family nurse practitioner and certified wound specialist; Milwaukee, Wisconsin."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 2025","Histologics LLC Wound Care launches Soft K-Bride®, a wound-bed prep, debridement and biopsy device","EIN Presswire","https://www.einpresswire.com/article/864717865/histologics-llc-wound-care-launches-soft-k-bride-a-revolutionary-wound-bed-prep-debridement-and-biopsy-device"],
 ["September 2024","Dr. Neal Lonky among the Most Outstanding Healthcare Leaders of 2024","The Life Sciences Magazine","https://thelifesciencesmagazine.com/histologics-llc-leader-dr-neal-lonky/"],
 ["August 2023","Founder and CEO Neal Lonky, MD, MPH on how Kylon® enables compassionate tissue removal","EIN Presswire","https://www.einpresswire.com/article/651306560/histologics-llc-founder-ceo-neal-lonky-md-mph-on-how-kylon-enables-compassionate-tissue-removal"],
 ["August 2023","Histologics and Dr. Lonky nominated for Innovator of the Year by the Orange County Business Journal","PR Newswire","https://www.prnewswire.com/news-releases/histologics-llc-and-neal-lonky-md-mph-are-nominated-for-innovator-of-the-year-and-recognized-by-the-orange-county-business-journal-301891248.html"]];
var SHEETS=[];
