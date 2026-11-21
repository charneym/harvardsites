var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"'];
var WEB="https://www.cerflux.com/";
var MAIL="smart@CerFlux.com";
var ADDR="215 Richard Arrington Jr Blvd N, Suite 101, Birmingham, AL 35203";
var MAP="https://www.google.com/maps/search/?api=1&query=215+Richard+Arrington+Jr+Blvd+N+Birmingham+AL+35203";
var NSF="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2545371";
var N_NSF="https://www.cerflux.com/news/nsf-sbir-2026";
var N_PAT="https://www.cerflux.com/news/prophet-patent-2026";
/* platform: from cerflux.com (home, /providers, /pharma, /nams-cancer-drug-discovery), the 2026-01-09 patent release and NSF award 2545371.
   [name, full name, audience label, detail, link, link label] */
var PROG=[
 ["POET®","Personalized Oncology Efficacy Test","Patients and providers","Screens multiple therapy agents at once on standard biopsy tissue from the patient’s own tumor, a different agent in each box, matching treatments to tumors in less than seven days, outside the patient and before treatment begins.","https://www.cerflux.com/providers","For providers"],
 ["PEER®","Preclinical Estimated Efficacy Report","Pharma and biotech","Predicts the clinical efficacy of preclinical drugs, so teams can prioritize candidates, compare responses across diverse tumor microenvironments and benchmark against standard of care, with AI/ML-ready data.","https://www.cerflux.com/pharma","For pharma"],
 ["BEST™","Bioprinted ex vivo Slice Tissue","The cancer model","Evaluates drugs directly on patient tumor tissue and on tissue-engineered 3D microtissues that mimic the human tumor microenvironment. Advanced under a 2026 NSF SBIR Phase II award with the University of Virginia.",NSF,"NSF award"],
 ["ChipMux™","Biopsy-on-a-chip","Closer to the clinic","Focused ex vivo screens on fresh patient tissue, to support final go/no-go decisions or to refine trial design and segmentation strategies.","https://www.cerflux.com/pharma","For pharma"],
 ["PROPHET™","A multimodal tumor “supermodel”","U.S. Patent 12,518,880","Builds avatars of the same tumor in vitro, ex vivo and in silico from living tumor tissue that patients consent to donate after their passing, to learn why treatment fell short and what might have worked.",N_PAT,"Patent release"]];
/* partners as listed on cerflux.com/about-cerflux (type only, BW/CJ) */
var PARTNERS=["The James Comprehensive Cancer Center at OSU","University of Virginia Cancer Center","The O’Neal Comprehensive Cancer Center at UAB","The Holden Comprehensive Cancer Center at Iowa","Southern Research","National Cancer Institute","Breast Cancer Research Foundation of Alabama","Innovate Alabama","BIO Alabama"];
/* people: as listed on cerflux.com/about-cerflux; no portraits are published there */
var TEAM=[
 ["Dr. Karim I. Budhwani","Co-founder and CEO-Scientist","Principal investigator on the 2026 NSF SBIR Phase II award, which advances the BEST platform with the University of Virginia."],
 ["Christopher M. Krebs","Chief Financial Officer",""],
 ["Stacy G. Taylor","Champion of Market Innovation",""],
 ["E. Burns Roensch","Director",""]];
var SCI=["Dr. Kumudu Madduma-Liyanage, Lab Director","Dr. Chelsea L. Crawford, Deputy Director of Research","Dr. Mary Kathryn Sewell-Loftin, Biomedical Scientist","Dr. Rachael E. Guenter, Cancer Biologist","Dr. Parmanand Ahirwar, Medicinal Chemist","Dr. M. Grace Albright, Data Analytics"];
var ADVISORS=["Dr. Mansoor N. Saleh","Dr. Donald J. Buchsbaum","Dr. Matt G. Clark","Deborah Grimes","Dr. Lisa W. Johnson","Dr. Sandeep M. Menon","Dr. Kristen M. Noles","Jonathan E. Raulston","Allison C. Spensley"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 23, 2026","CerFlux awarded a $1.25 million NSF grant to advance human-relevant cancer drug research, with the University of Virginia","CerFlux",N_NSF],
 ["April 19, 2026","CerFlux presents tumor microenvironment model benchmarking studies at AACR","CerFlux","https://www.cerflux.com/news/aacr-2026"],
 ["April 9, 2026","CerFlux reframes the AI debate at the Alabama AI Innovation Summit","CerFlux","https://www.cerflux.com/news/alaai-noonshow-2026"],
 ["January 9, 2026","CerFlux awarded a patent for a multimodal tumor “supermodel”","CerFlux",N_PAT],
 ["December 17, 2025","CerFlux awarded a BCRFA grant to advance obesity-informed breast cancer treatment","CerFlux","https://www.cerflux.com/news/bcrfa-cerflux-2025"]];
var SHEETS=[];
