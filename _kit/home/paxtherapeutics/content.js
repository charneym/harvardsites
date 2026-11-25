var FONTS=['300 1em "Jost"','italic 300 1em "Jost"','400 1em "Jost"','italic 400 1em "Jost"','500 1em "Jost"','400 1em "DM Sans"','500 1em "DM Sans"','600 1em "DM Sans"'];
var MAIL="info@paxtherapeutics.com";
var IMAIL="Margaret@PAXtherapeutics.com";
var TW="https://www.paxtherapeutics.com";
/* the pipeline: every line from paxtherapeutics.com (home, /our-pipeline, /the-science).
   [indication, programme, route, stage, detail] */
var PIPE=[
 ["Hand flexor tendon ruptures","PAX-001","Single injection during repair surgery","IND planned 2027","GLP toxicology and dose-range finding studies completed under guidance by the FDA. A Phase 1/1B study is planned as the fastest way to show proof of concept. About 100,000 flexor tendon injuries occur each year in the US alone."],
 ["Achilles and extensor tendon injuries","PAX-001","Injection during repair surgery","Future","Other tendon injuries are the next conditions for which PAX-001 is expected to be applicable."],
 ["Ligament tears (ACL, MCL)","PAX-001","Injection during repair surgery","Future","Ligament repairs usually rely on a ligament harvested from another location or from a cadaver; PAX-001 is designed to optimise healing of ligaments as well as tendons."],
 ["Partial tears, such as some rotator cuff tears","PAX-001","Injection through the skin, in the office","Future","When the rupture is incomplete, PAX-001 could be given through the skin, avoiding surgery altogether."],
 ["Veterinary: horses and dogs","PAX-001","Local injection","Later","30% of thoroughbreds have career-threatening Achilles tendinosis, and dogs commonly tear the cranial cruciate ligament. PAX is focusing first on humans."]];
/* progression to the clinic (home page and /our-pipeline) */
var EVID=[
 ["Completed","IND-enabling GLP toxicology and dose-range finding studies, under guidance by the FDA"],
 ["Next","Filing an investigational new drug application with the FDA, anticipated for 2027"],
 ["First study","A Phase 1/1B study in hand flexor tendon ruptures, designed to show both safety and benefit"],
 ["Supported by","A LIFT grant from Rhode Island Life Science Hub (June 2025) to document the GLP studies for the IND"]];
/* leadership and advisors, from paxtherapeutics.com /about-us. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Executive leadership",name:"Margaret A. Liu, MD",title:"Chief Executive Officer",sum:"An expert in gene delivery, vaccines and immunotherapy; formerly Vice-President of Vaccines and Gene Therapy at Chiron and a Director of the American Society for Gene and Cell Therapy."},
 {g:"Executive leadership",name:"Xiaotian Wang, MD",title:"Co-Founder & Chief Scientific Officer",sum:"Research Assistant Professor at Brown University; developed the AAV2-VEGF vector, work that won the 3M Award of Excellence in Translational Regenerative Science."},
 {g:"Executive leadership",name:"Sanjay Gokhale, MBA",title:"VP, Corporate Development & CFO",sum:"More than three decades in investment banking, venture capital and corporate development, with transactions valued in excess of $10 billion."},
 {g:"Executive leadership",name:"Robert G. Johnson, MD, PhD",title:"Chief Strategy Officer",sum:"Former CEO of KOSAN Pharmaceuticals and COO of GenVivo; served on the faculties of Harvard Medical School and UPenn as an HHMI Investigator."},
 {g:"Surgical advisors",name:"Karl H. Breuing, MD, FACS",title:"Plastic Surgery",sum:"Professor of Surgery at the Warren Alpert Medical School of Brown University; expert in regenerative medicine and wound healing."},
 {g:"Surgical advisors",name:"Manuel F. DaSilva, MD, FAAOS",title:"Orthopedic Surgery",sum:"Professor of Orthopedics at the Warren Alpert Medical School of Brown University, specialising in the hand, wrist, elbow and shoulder."},
 {g:"Surgical advisors",name:"Joseph C. Benacci, MD, FACS",title:"Plastic Surgery",sum:"Plastic surgeon at Emplify – Gundersen Health System, where he chaired Plastic Surgery for 16 years."},
 {g:"Surgical advisors",name:"Jin Bo Tang, MD",title:"Tendon repair",sum:"Secretary-General of the International Federation of Societies for Surgery of the Hand and Editor-in-Chief of Current Practice in Hand Surgery."},
 {g:"Development and regulatory",name:"Richard Junghans, MD, PhD",title:"Clinical trials and regulatory affairs",sum:"Oncologist who has completed multiple gene therapy clinical trials; President of IT BIO, LLC."}];
/* news: only items with a working link (paxtherapeutics.com, "PAX in the news"). [date, headline, source, url] */
var NEWS=[
 ["November 2025","Innovator Q&A with founder Paul Liu, MD, on PAX Therapeutics and tendon injuries","The Boston Globe","https://www.bostonglobe.com/2025/11/03/metro/ri-tendon-injuries-pax-therapeutics"],
 ["September 2025","PAX among the five inaugural tenants of Rhode Island’s Ocean State Labs","Providence Journal","https://www.providencejournal.com/story/news/local/2025/09/24/5-new-biotech-startups-are-coming-to-ris-ocean-state-labs-next-year/86315675007"],
 ["September 2025","The “Fab Five”: first Ocean State Labs life sciences tenants announced","Ocean State Stories","https://www.oceanstatestories.org/fab-five-first-ocean-state-labs-life-sciences-tenants-announced/"],
 ["June 2025","LIFT grant from Rhode Island Life Science Hub to prepare the IND documentation for PAX-001","RI Life Science Hub","https://www.rilifescience.com/news"],
 ["June 2024","PAX featured in Rhode Island Bio’s Profiles in Innovation","RI Bio","https://ri-bio.org/profiles-in-innovation/"]];
var SHEETS=[];
