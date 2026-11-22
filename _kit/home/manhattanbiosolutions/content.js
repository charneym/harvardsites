var FONTS=['300 1em "Poppins"','400 1em "Poppins"','500 1em "Poppins"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="borys.shor@manhattanbiosolutions.com";
var OC="https://www.1stoncology.com/blog/?p=";
/* Programmes, from manhattanbiosolutions.com (Scientific Platforms: ADCs; News) and the company's press releases
   (April 2025, May 2025, June 2024, November 2023) and the July 2026 Cell Reports Medicine paper.
   Status words only where the company or the public record states them. [platform, area, title, status, detail, dim] */
var PIPE=[
 ["LEG-TOP1i","Solid tumours","Legumain-cleavable TOP1-inhibitor ADCs","Validated across three programmes","The company's linker is cleaved by legumain, a lysosomal protease frequently overexpressed in tumours, and carries topoisomerase I inhibitor payloads derived from exatecan. In preclinical studies LEG-TOP1i ADCs gave complete tumour regression with strong durability in several hard-to-treat xenograft models. Expanded rights to the platform secured April 2025.",0],
 ["FGFR4 ADC","Rhabdomyosarcoma · FGFR4+ cancers","FGFR4-targeted ADCs on the 3A11 antibody","Preclinical, published July 2026","Built on the NCI's high-affinity 3A11 antibody, the binder also used in a CAR T-cell trial at the NCI. The exatecan ADC gave durable tumour control in fusion-negative and fusion-positive rhabdomyosarcoma and a patient-derived model, and controlled FGFR4-expressing breast cancer (Cell Reports Medicine, 2026).",0],
 ["TxD ADC","Drug-resistant solid tumours","Taxoid-payload ADCs with Stony Brook","REACH award, May 2025","With Professor Iwao Ojima's Institute of Chemical Biology & Drug Discovery: fluorine-containing taxoid payloads designed for potency against drug-resistant cancers, evaluated on a proprietary target, a tumour-associated glycoprotein highly expressed across aggressive solid tumours.",0],
 ["Dual payload","Multiple targets","Dual-payload ADC configurations","In design","Next-generation designs that pair payload classes on one antibody, using the stability and tumour-selective release of the legumain-cleavable platform.",1]];
/* What the linker is designed to fix, from manhattanbiosolutions.com (ADCs) and the April 2025 release. */
var EVID=[
 ["Stable in circulation","The legumain-cleavable linker is built to hold its payload in the blood, where premature release drives off-target toxicity"],
 ["Released in the tumour cell","Cleavage by lysosomal legumain after internalisation confines payload release to malignant cells"],
 ["Payloads that kill resistant cells","Exatecan-derived TOP1 inhibitors cause irreparable DNA double-strand breaks; taxoid payloads add a second, clinically established class"],
 ["Screened, not guessed","A high-throughput FRET-based screen and in-house linker and payload libraries feed new tumour-selective linker-payloads"]];
/* manhattanbiosolutions.com (Team) and press releases. Text-only masthead (CI/CL); summaries only state what is published. */
var TEAM=[
 {g:"Leadership",name:"Borys Shor, PhD",title:"Founder and Chief Executive Officer",sum:"Leads the company's ADC programmes; co-principal investigator on the Stony Brook TxD ADC project. Published on ADC translation from preclinical to clinical (inotuzumab ozogamicin) and anti-5T4 ADC combinations."},
 {g:"Leadership",name:"Zev Gechtman, PhD",title:"Scientific Director",sum:""},
 {g:"Leadership",name:"David Yu",title:"Chief Operating Officer, Advisor",sum:"More than 20 years in drug development, portfolio strategy and investment; leads EMEA portfolio strategy at Santen, previously at Takeda, after a decade in Wall Street finance."},
 {g:"Leadership",name:"John Psaltos, MBA, CPA",title:"Chief Financial Officer",sum:"More than 20 years in accounting and financial operations, including biopharma R&D and manufacturing."},
 {g:"Leadership",name:"John Mohr, CPA",title:"VP, Commercial & Licensing",sum:"Co-founder of BioAsset Advisors; formerly in brand management, licensing and M&A at CV Therapeutics, Fournier Pharma and Merck."},
 {g:"Leadership",name:"Agnes Westelinck, PharmD",title:"VP, Regulatory Affairs",sum:""},
 {g:"Board of Directors",name:"Robert Easton, MBA",title:"Director",sum:"Former co-chairman of Bionest Partners and past chairman of the New York Biotechnology Association; Rice and Harvard Business School."},
 {g:"Board of Directors",name:"Ronald T. Raines, PhD",title:"Director",sum:"Firmenich Professor of Chemistry at MIT; more than 500 publications and 50 US patents."},
 {g:"Scientific advisors",name:"Nathan Tumey, PhD",title:"Antibody-drug conjugates",sum:"Binghamton University; author of the 2021 study on legumain-cleavable ADC linkers."},
 {g:"Scientific advisors",name:"Dhaval Shah, PhD",title:"Biologics",sum:"University at Buffalo; pharmacokinetic and PBPK modelling of ADCs and antibodies."},
 {g:"Scientific advisors",name:"Jean Kadouche, PhD",title:"Antibody development",sum:"INSERM; Saint-Louis and Européen Georges Pompidou Hospitals, Paris."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2026","Targeted antibody-drug conjugates for rhabdomyosarcoma and other FGFR4-expressing cancers","Cell Reports Medicine","https://pubmed.ncbi.nlm.nih.gov/42447867/"],
 ["May 2025","Manhattan BioSolutions' TxD ADC collaboration secures a REACH award from the Center for Biotechnology at Stony Brook University","Press release",OC+"103038"],
 ["April 2025","Manhattan BioSolutions secures expanded rights to its legumain ADC platform after validation in three programmes","Press release",OC+"102357"],
 ["June 2024","Manhattan BioSolutions partners with Stony Brook University to advance taxoids as ADC payloads","Press release",OC+"96889"],
 ["February 2024","Nascent Biotech and Manhattan BioSolutions collaborate to explore pritumumab antibody-drug conjugates","Drug Discovery Online","https://www.drugdiscoveryonline.com/doc/nascent-biotech-and-manhattan-biosolutions-collaborate-to-explore-pritumumab-antibody-drug-conjugates-0001"],
 ["November 2023","Collaboration agreements with the NIH and Binghamton University to develop a novel ADC","Press release",OC+"91525"]];
var SHEETS=[];
