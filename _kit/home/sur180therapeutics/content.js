var FONTS=['400 1em "Playfair Display"','italic 400 1em "Playfair Display"','400 1em "DM Sans"','500 1em "DM Sans"','600 1em "DM Sans"'];
var WEB="https://www.sur180therapeutics.com/";
var MAIL="info@sur180therapeutics.com";
var BOR="https://doi.org/10.1093/biolre/ioag107";
var NIH="https://reporter.nih.gov/project-details/11331307";
/* pipeline: sur180therapeutics.com home, "Our Pipeline" (one compound, a CRHR1 antagonist). [indication, stage reached 1-4, tag, detail] */
var PIPE=[
 ["Endometriosis",2,"Lead programme","Reduce pain, suppress inflammation within lesions and reduce adhesions, without disrupting reproductive hormones or fertility. NIH SBIR Phase II: lowest effective dose and schedule, fertility validation, and a pre-IND dialogue with the FDA."],
 ["Surgical adhesions",1,"Pre-clinical","Postoperative prophylactic CRHR1 antagonism attenuated post-surgical peritoneal adhesion formation in a rat cecal abrasion model (2026)."],
 ["Additional indication",1,"Pre-clinical","A further indication for the same compound, in pre-clinical work."]];
var STAGES=["Pre-clinical","IND-enabling","Phase 1","Phase 2"];
/* evidence: publications page + the Biology of Reproduction post. [title, venue, year, detail, link, label] */
var EVID=[
 ["Antagonizing CRHR1 with an orally bioavailable drug reduces endometriosis pain and associated adhesions","Biology of Reproduction","2026","Pexacerfont, a small orally administered molecule, significantly reduced endometriosis-associated pain and cut adhesion scores in half, without altering gonadal hormones or compromising fertility. With PHSU and the Ponce Research Institute.",BOR,"Read the paper"],
 ["Postoperative CRHR1 antagonism attenuates post-surgical peritoneal adhesion formation","Rat cecal abrasion model","2026","Prophylactic CRHR1 blockade after surgery reduced the adhesions that form between abdominal organs.",WEB+"publications","Publications"],
 ["Antagonizing CRHR1 with antalarmin reduces the progression of endometriosis","Peer-reviewed study","2018","Earlier work from the founding team: blocking the stress-axis receptor reduced the progression of endometriosis.","https://pubmed.ncbi.nlm.nih.gov/30427841/","PubMed"],
 ["Repurposing CRH antagonists for the treatment of endometriosis","NIH NICHD · SBIR Phase II · R44HD109055","2025–2026","A competitive, peer-reviewed NIH award to de-risk the oral candidate, find the lowest effective dose and prepare for a pre-IND meeting.",NIH,"NIH RePORTER"]];
/* people: sur180therapeutics.com/aboutus. Static masthead rows (no sheets). [name, role, one-line summary] */
var FOUND=[
 ["Annelyn Torres-Reverón, PhD","Co-Founder & CEO","Behavioral neuroscientist, certified in integrative medicine; PRST & Columbia University Therapeutics Accelerator Program."],
 ["Caroline B. Appleyard, PhD","Co-Founder & Scientific Director","Clinical pharmacologist in translational research with animal models; oversight of NIGMS and NCI training programs."],
 ["Idhaliz Flores, PhD","Co-Founder & Chair of the Board","Molecular biologist and endometriosis patient advocate; Board of Directors, ENDOPR."]];
var BOARD=[
 ["Lissette Gutierrez, MD","Board Member & Principal Clinical Adviser","Over 20 years in obstetrics and gynecology, with expertise in endometriosis and complex pelvic pain."],
 ["Ignacio Pino, DVM","Board Member & Entrepreneurial Advisor","Advises on fundraising and commercialization; co-founder and COO of CDI Labs, Mayagüez, PR."],
 ["Denisse Flores, JD, CPA","Board Member & Financial and Corporate Advisor","More than 20 years in accounting and finance; Office Manager Partner at PwC in San Juan."],
 ["Carolyn Sikes, PhD","Regulatory Advisor","Drug development and medical affairs expert with over 30 years across therapeutic areas; PhD, Duke University."]];
/* news: blog posts with working links. [date, headline, source, url] */
var NEWS=[
 ["3 November 2026","Endometriosis: the $220 billion market opportunity","SUR180",WEB+"post/endometriosis-the-220-billion-market-opportunity"],
 ["24 May 2026","SUR180 research in Biology of Reproduction featured in Public Health PR","SUR180",WEB+"post/sur180-non-hormonal-endometriosis-crhr1-biology-of-reproduction"],
 ["26 March 2026","CEO Dr. Annelyn Torres-Reverón on Notiséis WIPR","SUR180",WEB+"post/sur180-notiseis-wipr-endometriosis"],
 ["23 March 2026","The founders at the SRI Annual Scientific Meeting, San Juan","SUR180",WEB+"post/sur180-sri-annual-scientific-meeting-2026"],
 ["17 March 2026","Strategic partnership with Nura Health on precision diagnostics and non-hormonal treatment","SUR180",WEB+"post/sur180-therapeutics-and-nura-health"]];
var SHEETS=[];
