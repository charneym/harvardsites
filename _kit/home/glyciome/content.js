var FONTS=['300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Mulish"','600 1em "Mulish"'];
var MAIL="info@glyciome.com";
var TEL="509.828.0655";
var RP="https://reporter.nih.gov/project-details/";
/* programmes: every line from glyciome.com/research.html, NIH RePORTER (2R44CA254543) and the Spokane Journal (Dec 2025).
   [stage group, programme, what it is, stage, detail, link, link label] */
var PIPE=[
 ["Lead programme","PreBioGyn","Prebiotic intravaginal gel","NCI Phase II · clinical","A preservative-free prebiotic lubricant designed to prevent bacterial vaginosis, a risk factor for cervical cancer, especially for people in low-resource settings. A safety and feasibility randomised trial in at least 70 people recently treated for BV, in Spokane and Puerto Rico.",RP+"11419171","NIH RePORTER"],
 ["Delivery","Kraft-paper applicator","Plastic-free vaginal applicator","Near-market","Developed in Phase I to deliver PreBioGyn gel, it cuts waste and exposure to plastic contaminants during application.","https://glyciome.com/research.html","Glyciome"],
 ["Digital","Vaginal health app","Mobile monitoring","Translational","Monitors vaginal health and raises product-fit awareness for patients and providers using PreBioGyn and other vaginal products.","https://glyciome.com/research.html","Glyciome"],
 ["Diagnostics","Nanotube biosensor","Rapid screen for BV","Early stage","A carbon nanotube biosensor for a rapid, user-directed screen for bacterial vaginosis, the most common of all vaginal infections.","https://glyciome.com/research.html","Glyciome"],
 ["On the market","Wild & Pure®","Prebiotic total-body cleansers","Direct to consumer","Prebiotic cleansers for skin and genital care at every age. 2021 Idaho Innovation Award, Consumer Product of the Year; the Natural version is EWG Verified®.","https://wildandpure.com","wildandpure.com"]];
/* the four peer-reviewed abstracts on glyciome.com/research.html */
var PUBS=[
 ["JCO Global Oncology, 2022","A prebiotic hydrogel to prevent cervical cancer by optimizing the vaginal ecology and reducing oncogenic biological risk factors","https://doi.org/10.1200/GO.22.44000"],
 ["JCO Global Oncology, 2024","Biocompatibility of a novel prebiotic vaginal gel for treating the underlying conditions of vaginal dysbiosis and inflammation","https://doi.org/10.1200/GO-24-27000"],
 ["JCO Global Oncology, 2024","Novel, plastic-free vaginal applicator for reduction of environmental and systemic plastic chemical exposures","https://doi.org/10.1200/GO-24-11100"],
 ["Cancer Epidemiology, Biomarkers & Prevention, 2023","Regional college women in the U.S. report low health literacy regarding basic genital biology and cervical cancer risk factors","https://doi.org/10.1158/1538-7755.ASGCR23-Abstract-71"]];
/* glyciome.com/about.html, the AWIS release (Feb 2026) and the Spokane Journal (Dec 2025) */
var TEAM=[
 {name:"Joanna Ellington, DVM, PhD",title:"Co-founder & CEO",img:"jee.jpg",sum:"Reproductive physiologist and three-time founder. Inventor of Pre-Seed® Fertility Lubricant, which led the FDA to create a new device category for sperm-safe lubricants. 25 issued patents; 2026 Seattle AWIS Award for Science Advancement and Leadership."},
 {name:"Dennis Clifton, PharmD",title:"Co-founder & COO",img:"gdc.jpg",sum:"Pharmaceutical scientist with 20 years in reproductive health products and more than 10 brought from bench to market. Former department chair and interim dean of pharmacy at WSU; has prepared numerous FDA 510(k) submissions."}];
/* news: only items that link out. [date, headline, source, url] */
var NEWS=[
 ["August 2026","NCI awards $1.24M to continue the Phase II PreBioGyn cervical cancer prevention programme","NIH RePORTER",RP+"11419171"],
 ["February 2026","Dr. Joanna Ellington named 2026 Seattle AWIS Award winner for Science Advancement and Leadership","EIN Presswire","https://www.einpresswire.com/article/896366381/glyciome-s-dr-joanna-ellington-named-2026-seattle-awis-award-winner-for-science-advancement-and-leadership"],
 ["December 2025","Glyciome’s NCI clinical trial comes to Spokane","Spokane Journal","https://www.spokanejournal.com/articles/17757-glyciomes-nci-clinical-trial-comes-to-spokane"],
 ["November 2025","Glyciome becomes the first tenant at Evergreen Bioscience Innovation, Spokane’s new biotech incubator","Wild & Pure","https://wildandpure.com/blogs/news/bioscience-news-glyciome-joins-evergreen-bioscience-innovation"],
 ["June 2025","The EcoBalance™ System is now patent-protected","Wild & Pure","https://wildandpure.com/blogs/news/a-big-milestone-our-ecobalance%E2%84%A2-system-is-now-patent-protected"],
 ["September 2024","Glyciome awarded a landmark patent for its prebiotic cervical cancer prevention approach","EIN Presswire","https://www.einpresswire.com/article/747143315/glyciome-awarded-landmark-patent-for-prebiotic-cervical-cancer-prevention-approach-focused-on-under-served-populations"]];
var SHEETS=[];
