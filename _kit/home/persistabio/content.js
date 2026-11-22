var FONTS=['300 1em "Montserrat"','500 1em "Montserrat"','400 1em "Montserrat"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="rowe@roweassoc.com";
var FORM="https://www.persistabio.com/contact/";
var RP="https://reporter.nih.gov/project-details/";
/* Programmes, from persistabio.com (Home, Technology, News) and NIH RePORTER. Status words only where the company or the
   public record states them. [area, focus, title, status, detail, dim] */
var PIPE=[
 ["Lead indication","Type 1 diabetes","O2Line™ oxygenated encapsulation system","Preclinical · large-animal studies","Insulin-secreting cells in an anti-fibrotic, immunoisolating capsule, kept alive by an implanted oxygen generator. The prototype normalised blood glucose in diabetic rats over 90-day trials; NIDDK's Direct-to-Phase II SBIR now funds scale-up to minipig size and large-animal diabetes correction.",0],
 ["Manufacturing","Clinical-grade capsule","Cell capsule made under GMP","NIH SBIR Phase I · FuzeHub grant","Technology transfer of the electrospun cell capsule to a GMP-qualified partner and pilot manufacturing runs to set process specifications, plus custom capsules for each new cell therapy.",0],
 ["Regulatory","FDA, CBER","INTERACT meeting","Positive feedback, September 2026","The FDA viewed Persista Bio's modular approach to hardware and cellular development and testing as reasonable, and heard the proposed sequence of preclinical studies.",0],
 ["Next","Further indications","A platform for other cell therapies","Exploring","Inflammation, pain, obesity, enzyme deficiencies and other metabolic disorders, with cell partners in diabetes and other therapeutic areas.",1]];
/* Milestones, from Persista Bio news releases and NIH RePORTER. */
var EVID=[
 ["Nature Communications · August 2025","A continuously oxygenated macroencapsulation system reversed diabetes in rats without immunosuppression"],
 ["NIDDK · September 2025","A $2.1 million Direct-to-Phase II SBIR grant for advanced preclinical development of O2Line"],
 ["FuzeHub · July 2026","A manufacturing grant from the Jeff Lawrence Innovation Fund, with NYSTAR and Cornell's Center for Life Science Ventures"],
 ["FDA INTERACT · September 2026","Early regulatory advice from CBER on the modular development and testing programme"]];
/* persistabio.com (Team). Text-only masthead (CI/CL); summaries only state what the site states. */
var TEAM=[
 {g:"Founding team",name:"Linda Tempelman, PhD",title:"Chief Executive Officer, Co-founder",sum:"PhD in chemical engineering, Cornell University. Founding CEO of Giner Life Sciences; eight US patents; led the licensing, commercialisation and sale of Giner's transdermal sensor technology and executed a cell-therapy pharmaceutical partnership."},
 {g:"Founding team",name:"Minglin Ma, PhD",title:"Co-founder",sum:"Professor of Biological and Environmental Engineering, Cornell University; PhD in chemical engineering, MIT. Fifteen years in cell encapsulation; spun out the topical disinfectant company AvantGuard in 2018."},
 {g:"Founding team",name:"James Flanders, DVM",title:"Chief Scientific Officer, Co-founder",sum:"Professor Emeritus, Cornell University College of Veterinary Medicine; DVM, University of California, Davis. Ten years of cell-encapsulation large-animal studies with the Ma lab."},
 {g:"Advisory board",name:"James Shapiro, MD",title:"Advisor",sum:"A leader in islet transplantation; professor of surgery, medicine and surgical oncology at the University of Alberta."},
 {g:"Advisory board",name:"Simon Stone, MS",title:"Advisor",sum:"Electrolyzer inventor."},
 {g:"Advisory board",name:"Brian Pham, PhD",title:"Advisor",sum:"Co-inventor of O2Line and lead author of the Nature Communications study."},
 {g:"Advisory board",name:"Doug Lawrence, MBA",title:"Advisor",sum:"Former Becton Dickinson executive in diabetes and ophthalmology."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","Persista Bio receives positive feedback on its modular approach from FDA INTERACT","Persista Bio","https://www.persistabio.com/persista-bio-receives-positive-feedback-on-modular-approach-from-fda-interact/"],
 ["July 2026","NIDDK continues the O2Line Direct-to-Phase II award","NIH RePORTER",RP+"11406294"],
 ["July 2026","Persista Bio awarded a FuzeHub Manufacturing Grant","Persista Bio","https://www.persistabio.com/persista-bio-awarded-fuzehub-manufacturing-grant/"],
 ["September 2025","Persista Bio secures two NIH grants to advance the O2Line oxygenated cell therapy platform","Persista Bio","https://www.persistabio.com/persista-bio-secures-two-nih-grants-to-advance-o2line-oxygenated-cell-therapy-platform/"],
 ["August 2025","Nature Communications: a continuously oxygenated macroencapsulation system enables high-density packing and delivery of insulin-secreting cells","Nature Communications","https://doi.org/10.1038/s41467-025-62271-2"]];
var SHEETS=[];
