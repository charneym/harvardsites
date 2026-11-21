var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Nunito Sans"','600 1em "Nunito Sans"','700 1em "Nunito Sans"','800 1em "Nunito"'];
var WEB="https://provizigen.com/";
var MAIL="provizigen@gmail.com";
var NSF="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2335299";
var RP1="https://reporter.nih.gov/project-details/10821518";
var RP2="https://reporter.nih.gov/project-details/10935988";
var RPS="https://reporter.nih.gov/project-details/11259928";
var XW="https://x.com/provizigen/status/1816254879322759508";
var ASRC="https://asrc.gc.cuny.edu/";
/* programme: from the NIH RePORTER abstract of R41AR083738 (NIAMS STTR) and the NSF STTR Phase I award 2335299 and its
   project outcomes report (2025-11-14). [stage, name, detail line, text, link, link label] */
var PROG=[
 ["Phase I complete","A deimmunized gel carrier","NSF STTR Phase I · 2023–2025","From a library of elastin-like and coiled-coil protein constructs, dE10C2 emerged as the lead: it gels within 10 minutes at 37 °C, and conservative substitutions removed three predicted high-risk epitopes.",NSF,"NSF award"],
 ["Preclinical evidence","HydroGEN in a joint-injury model","Rabbit ACL transection","Delivered immediately after injury, HydroGEN significantly prevented post-traumatic osteoarthritis; delivered eight weeks later, it had therapeutic effects that promoted the joint’s own cartilage repair.",RP2,"NIH RePORTER"],
 ["In progress","Stability and safety","NIH NIAMS STTR Phase I · to 2026","Characterising HydroGEN’s microstructure, mechanics and gelation over temperature and time, and establishing its lack of toxicity and its biodistribution after injection into the joint.",RP2,"NIH RePORTER"],
 ["Next","Large-animal studies, then the clinic","Phase II and IND-enabling work","A large-animal model of post-traumatic osteoarthritis, encapsulation and release studies, and IND-enabling preclinical work toward a BLA and first-in-human trials.",NSF,"Outcomes report"]];
/* people: as named on the NSF award 2335299 and the NIH award R41AR083738; no portraits are published */
var TEAM=[
 ["Jui S. Chaugule, Ph.D.","Principal investigator","Leads ProViZiGen’s research and is the principal investigator on its NIH and NSF STTR awards for HydroGEN."],
 ["Raymond S. Tu","Co-principal investigator, NSF STTR","The City College of New York, City University of New York."]];
var PARTNERS=["New York University (STTR research institution)","CUNY Advanced Science Research Center · Sensor CAT","National Institutes of Health · NIAMS","U.S. National Science Foundation"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["November 14, 2025","NSF Phase I outcomes: the deimmunized HydroGEN carrier gels at body temperature with low predicted immunogenicity","NSF",NSF],
 ["August 5, 2025","NIAMS continues ProViZiGen’s STTR award for HydroGEN with $158,663 for a second year","NIH RePORTER",RP2],
 ["April 15, 2025","An administrative supplement of $54,999 adds to the HydroGEN STTR project","NIH RePORTER",RPS],
 ["July 24, 2024","ProViZiGen welcomes Dr. Jui Chaugule to lead its team","ProViZiGen on X",XW],
 ["November 30, 2023","NSF awards an STTR Phase I grant, now $295,000, for an injectable biotherapeutic for post-traumatic osteoarthritis","NSF",NSF],
 ["September 25, 2023","NIAMS awards an STTR Phase I grant, “Engineered Biotherapeutic Agent for Treatment of Post-Traumatic Osteoarthritis”","NIH RePORTER",RP1]];
var SHEETS=[];
