var FONTS=['300 1em "Inter Tight"','italic 300 1em "Inter Tight"','400 1em "Inter Tight"','italic 400 1em "Inter Tight"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="support@pacDNAtx.com";
var TW="https://pacdnatx.com";
/* programmes: every line from pacdnatx.com/about and /mission, and NIH RePORTER (R42CA275425, pacDNA, contact PI Ke Zhang).
   [programme, area, stage, status, detail, link, link label] */
var PIPE=[
 ["Pan-KRAS antisense","Oncology","Research","NCI-funded STTR","A molecular brush-conjugated antisense oligonucleotide designed as a pan-KRAS depletion agent, supported by the National Cancer Institute under STTR award R42CA275425.","https://reporter.nih.gov/project-details/11180050","NIH RePORTER"],
 ["Brushield™ for partners","Platform","Partnering","Open to partners","pacDNA is seeking partnership and out-licensing opportunities: Brushield™ enables rapid candidate validation and can accelerate lead-to-IND development for clients’ and partners’ oligonucleotides.",TW+"/mission","Mission"],
 ["Internal pipeline","Non-liver targets","Discovery","Undisclosed","Assets developed in-house that leverage the benefits of the Brushield™ platform, chosen for favourable clinical development pathways and a significant unmet clinical need.",TW+"/about","About"]];
/* pacdnatx.com/copy-of-about ("Meet the team"). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"Carl LeBel, PhD",title:"Chief Executive Officer",sum:"Previously Chief Development Officer at Frequency Therapeutics, Chief Scientific Officer at Otonomy and President and CEO of Akesis Pharmaceuticals, after 14 years in R&D management at Amgen."},
 {g:"Leadership",name:"Ke Zhang, PhD",title:"Founder",sum:"Professor of Chemistry at Northeastern University, devoted to joining synthetic polymers and nucleic acids; NSF CAREER awardee and Kabiller Rising Star in Nanomedicine."}];
/* recognition: only the items on pacdnatx.com/news that link to a real page. [label, headline, link] */
var REC=[
 ["Golden Ticket","BioMarin LabCentral Golden Ticket","https://www.linkedin.com/posts/pacdna-inc_the-biomarin-labcentral-golden-ticket-is-activity-7062897918956953601-nuqz"],
 ["Collaboration","Nanotechnology Characterization Laboratory, National Cancer Institute","https://www.cancer.gov/nano/research/ncl"],
 ["Finalist","BIO International Convention Start-Up Stadium 2023","https://www.bio.org/events/bio-international-convention/start-stadium-2023"],
 ["Award","Invented Here, Boston Patent Law Association","https://bipla.org/general/custom.asp?page=InventedHere2022"],
 ["Accelerator","MassBio Drive","https://www.linkedin.com/posts/massbio_massbiodrive-activity-6980164278905405440-CZOu"],
 ["Funding","Northeastern University Spark Fund, awarded twice","https://cri.northeastern.edu/spark-fund/"],
 ["Prize","Kabiller Rising Star in Nanomedicine for Prof. Ke Zhang","https://news.northwestern.edu/stories/2023/09/northwestern-universitys-international-institute-for-nanotechnology-announces-distinguished-winners-of-kabiller-prizes/"],
 ["Programme","NIH I-Corps","https://seed.nih.gov/I-Corps-at-NIH"],
 ["Presenter","Partnership Opportunities in Drug Delivery (PODD)","https://poddconference.com"]];
var SHEETS=[];
