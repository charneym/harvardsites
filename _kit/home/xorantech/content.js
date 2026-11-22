var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Raleway"','500 1em "Raleway"','600 1em "Raleway"'];
var MAIL="info@xorantech.com";
var XT="https://xorantech.com/";
/* products: every line from xorantech.com (home, /products/vtron, /vetcat, /minicat-iq-plus, /xcat-iq, /xoranconnect,
   /purview-xoran) and the 30 Sept 2026 Next Generation vTRON release. [line, product, market, status, detail, link, label] */
var PIPE=[
 ["vTRON · Next Generation","Full-body veterinary CT","Veterinary","Launched 2026","Built on the proven vTRON platform: a 31.5-inch open bore on a compact, mobile base, now with a 43 × 43 cm detector, a field of view up to 23 × 23 cm, 0.2–0.4 mm voxels in 3D and enhanced bone and soft-tissue reconstruction.",XT+"next-gen-vtron/","Launch release"],
 ["VetCAT","3D x-ray during the office visit","Veterinary","In practice","VetCAT scans take less than a minute and generate high-quality 3D x-rays of the pet’s anatomy, so disease or injury can be diagnosed during the visit and treatment can begin right away.",XT+"vetcat/","xorantech.com"],
 ["MiniCAT IQ+","Upright in-office CT for ENT","ENT","Next generation","A compact, upright cone beam CT system designed for ENT specialists, delivering high-resolution imaging of the sinuses, temporal bones and skull base in the practice.",XT+"minicat-iq-plus/","xorantech.com"],
 ["xCAT IQ","Truly mobile intraoperative CT","Critical care","In practice","An ultra-compact, mobile CT scanner that provides real-time CT scans of the brain, sinuses, ears and skull base, built to be taken into the operating room.",XT+"xcat-iq/","xorantech.com"],
 ["XoranConnect · Purview","Viewing, sharing and archive","Software","Service","HIPAA-compliant web viewing, off-site archival and backup of scans for physicians and patients; Purview adds browser-based 3D reconstruction and advanced MPR, sharing and automation.",XT+"xoranconnect/","xorantech.com"]];
/* xorantech.com/leadership and the bio pages. Text-only masthead; summaries condensed from their bios. */
var TEAM=[
 {g:"Leadership",name:"Rob Bryant",title:"Chief Executive Officer",sum:"Joined Xoran in January 2024 as Chief Commercial Officer and became CEO that June. Twenty years at Medtronic leading sales and clinical specialist teams across ENT, neurosurgery, neuromodulation and sleep disordered breathing; earlier at Stryker, and seven years in the U.S. Marine Corps, rising to Captain."},
 {g:"Leadership",name:"Jackie Vestevich, JD",title:"Co-founder · Board Manager",sum:"Has served Xoran as Director, CMO, COO and General Counsel. Formerly a shareholder at Howard & Howard Attorneys; JD from Wayne State, BA from the University of Michigan, and holder of three U.S. patents."},
 {g:"Leadership",name:"Dr. David Sarment, DDS, MS",title:"Veterinary & International President",sum:"Clinical investigator on the original NIDCR grant that helped found Xoran at the University of Michigan. Author of “Cone Beam Computed Tomography for Maxillofacial Applications” and over thirty peer-reviewed articles."},
 {g:"Leadership",name:"Jason Wuellner, MBA, CMA, FPAC",title:"Chief Financial Officer",sum:"Previously Controller and Credit Manager for a large Southeast Michigan equipment company; economics degree from the University of Michigan and an MBA from Wayne State University."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 2026","Veterinary Dermatology publishes a cone beam CT analysis of osseous changes in young cats with inflammatory aural polyps, co-authored by Xoran’s Dr. David Sarment","PubMed","https://pubmed.ncbi.nlm.nih.gov/42389943/"],
 ["September 2026","Xoran Veterinary launches the Next Generation vTRON, with a larger field of view and enhanced bone and soft-tissue reconstruction","Xoran",XT+"next-gen-vtron/"],
 ["November 2024","Xoran announces a partnership with Tungsten Medical Network","Xoran",XT+"xoran-tungsten-partnership/"],
 ["June 2024","Rob Bryant is named Chief Executive Officer; Bob Glazer joins the Xoran Board of Directors","Xoran",XT+"xoran-names-rob-bryant-ceo/"],
 ["May 2024","Mandai Wildlife Group in Singapore conducts its first CT scan of a fish, using vTRON","Xoran",XT+"vtron-successfully-scans-fish/"]];
var SHEETS=[];
