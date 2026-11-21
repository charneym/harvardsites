var FONTS=['300 1em "Jost"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','italic 500 1em "Cormorant Garamond"','600 1em "Cormorant Garamond"'];
var MAIL="bd@gryphonbio.com";
var RP="https://reporter.nih.gov/project-details/";
var PRN="https://www.prnewswire.com/news-releases/gryphon-bio-inc-pioneers-novel-blood-biomarker-panel-to-monitor-treatment-journey-for-patients-with-traumatic-brain-injury-and-alzheimers-302349637.html";
var DPS="https://www.medrxiv.org/content/10.64898/2026.09.16.26361861v1";
/* Programmes: every line from gryphonbio.com, the PR Newswire release of 13 January 2025, the 2026 medRxiv preprint and the
   NIH RePORTER records of Gryphon Bio, Inc. (South San Francisco). [name, programme, kind, status, detail, link, link label] */
var PIPE=[
 ["Blood biomarker panel","Traumatic brain injury","Blood test","Observational clinical studies","A panel of brain biomarkers, combined with known risk factors such as age and genetic variants, for early detection and monitoring of TBI in active-duty soldiers, Veterans, adults and children, with partners at multiple U.S. and international clinical sites.",PRN,"PR Newswire"],
 ["Blood biomarker panel","Alzheimer’s disease and mild cognitive impairment","Blood test","Observational clinical studies","The same approach applied to Alzheimer’s disease and adjacent conditions: blood tests that follow the patient journey, from early detection to monitoring of brain health and healthy ageing.",PRN,"PR Newswire"],
 ["Fingerstick dried plasma spots","Capillary sampling for TBI biomarkers","Sampling","Pilot feasibility study · 2026","Paired fingerstick and venous samples, from hours to decades after injury, showed well-correlated GFAP and NfL measurements, and the GFAP/NfL ratio agreed best of all. The authors report analytical feasibility, not yet clinical readiness.",DPS,"medRxiv"],
 ["sgp130-Fc bioconjugates","Post-acute, rehabilitation phase of TBI","Therapeutic research","NIH SBIR Phase II · NINDS","Bioconjugates designed to cross the blood-brain barrier and block soluble IL-6 receptor “trans-signaling”, which Gryphon’s clinical biomarker data link to worse cognitive outcomes after moderate to severe TBI.",RP+"11416616","NIH RePORTER"]];
/* partnering: the site's own Pipeline copy */
var EVID=[
 ["Clinical studies","Work with patients to assess their needs and improve the tests for early detection and monitoring of brain health"],
 ["Clinical decisions","Give care providers results that inform recovery, hospitalisation and return to work, play or duty"],
 ["Drug development","Enrich and track patients responding to therapies, de-risking partners’ trials and regulatory paths"],
 ["Clinical laboratories","Develop, validate and manufacture the tests with clinical testing laboratory partners, under applicable regulatory requirements"]];
/* team: gryphonbio.com (titles), Dr. Haskins's bio there, the January 2025 release and the 2026 preprint's author list.
   Text-only masthead (CI/CL): the site's headshots are 225px thumbnails. */
var TEAM=[
 {g:"Founders",name:"Will Haskins, PhD",title:"CEO & Co-Founder",sum:"Led antibody, ADC and gene therapy R&D through Phase I–III, including at Genentech; PhD, University of Florida."},
 {g:"Founders",name:"Kevin K. Wang, PhD",title:"Co-Founder",sum:"Co-discoverer of Gryphon’s biomarkers; neurotrauma and biomarker research at Morehouse School of Medicine."},
 {g:"Leadership",name:"Caroline Popper, MD, MPH",title:"Chief Business Officer",sum:"Physician and attorney; co-author of Gryphon’s 2026 study of fingerstick sampling for TBI biomarkers."},
 {g:"Leadership",name:"Anthony DeLizza, MS",title:"Chief Business Advisor",sum:"A long career commercialising laboratory and point-of-care diagnostics and medical devices, at Syva (now Siemens), Johnson & Johnson and others."},
 {g:"Research and operations",name:"Devin Jackson, PhD",title:"Senior Research Scientist",sum:"Co-author of Gryphon’s 2026 study of capillary dried plasma spots for TBI biomarkers."},
 {g:"Research and operations",name:"Kristy Radeker, MSM",title:"Associate Director, Clinical Operations & Finance",sum:""},
 {g:"Research and operations",name:"Katie Tehas",title:"Research Associate",sum:""}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","Biomarker concordance between dried plasma spots of capillary blood and venous plasma in traumatic brain injury: a pilot study","medRxiv",DPS],
 ["August 2026","NINDS continues Gryphon’s SBIR Phase II award for sgp130-Fc bioconjugates in TBI ($1,246,138)","NIH RePORTER",RP+"11416616"],
 ["January 2025","Gryphon Bio pioneers a novel blood biomarker panel to monitor the treatment journey in TBI and Alzheimer’s disease, and appoints Anthony DeLizza","PR Newswire",PRN],
 ["February 2023","NINDS awards Gryphon an SBIR grant to develop sgp130-Fc bioconjugates for TBI ($484,997)","NIH RePORTER",RP+"10601623"],
 ["September 2021","NINDS awards Gryphon an SBIR grant for a biomarker-powered immunotherapy targeting GFAP in TBI ($499,065)","NIH RePORTER",RP+"10253356"]];
var SHEETS=[];
