var FONTS=['300 1em "Montserrat"','500 1em "Montserrat"','400 1em "Montserrat"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="info@abzymetx.com";
var RP="https://reporter.nih.gov/project-details/";
/* The pipeline, from abzymetx.com (Preclinical Pipeline: Immuno-oncology and Other Indications; Technology; Press Releases)
   and NIH RePORTER. Status words only where the company or the public record states them.
   [programme family, area, title, status, detail, dim] */
var PIPE=[
 ["Anti-C1q VHH","Progressive multiple sclerosis","CNS-penetrant anti-C1q nanobody","Preclinical, published 2026","Abzyme's anti-C1q nanobody, engineered with the CNS-targeting peptide RVG29, roughly doubled blood-brain barrier penetration and, given weekly, improved motor function and reduced complement deposition, glial activation, demyelination and axonal injury in a model of progressive MS. Supported by NINDS STTR grant R43NS120624.",0],
 ["Abz495","Immuno-oncology","pH-dependent anti-CD3 scFv T-cell engager","Available for licensing","Binds human CD3 strongly in the acidic tumour microenvironment and negligibly in normal tissue, to limit the on-target, off-tumour activation that constrains T-cell engager dosing. Covered by US Patent 12,116,411, granted October 2024.",0],
 ["Abz722","Immuno-oncology","Dual ligand-binding PD-1","Available for licensing or co-development","An engineered PD-1 receptor with sub-nanomolar affinity to both PD-L1 and PD-L2, as a soluble checkpoint inhibitor.",0],
 ["Anti-VEGF / anti-CD147","Retinal neovascular disease","Multi-specific long-acting antibody","NEI SBIR Phase II, through February 2027","A camelid-derived multi-specific antibody targeting both VEGF and CD147 (Emmprin/Basigin) to prevent choroidal neovascularisation, with collaborators at the University of Cincinnati and the Medical University of South Carolina. Phase II award of $1,657,994.",0],
 ["BDNF-mimetic VHH","Neurology","Nerve-growth-stimulating VHH","Preclinical, NIH-sponsored","VHH antibodies that function like Brain-Derived Neurotrophic Factor to stimulate nerve growth, in animal models for multiple sclerosis.",0],
 ["VHH building blocks","Multiple","Anti-TIGIT · VEGF · ANGPTL4 · CD147 · BCMA · CD19 · CD22 · CD33","Available for licensing or co-development","Single-domain modules for bispecific and multi-specific immunotherapies, CAR-T and CAR-NK constructs, plus half-life extension by anti-albumin VHH or a hyaluronic-acid-binding peptide.",0],
 ["Next","Pemphigus · ophthalmology","T-cell engagers and further indications","On the pipeline","Pemphigus-specific T-cell engagers for targeted immunotherapy (NIAID award R43AI151635) and further ophthalmology programmes.",1]];
/* The discovery platform, from abzymetx.com (Technology Overview, Services Overview, Who We Are). */
var EVID=[
 ["Animal-free","An engineered eukaryotic in vitro system raises antibodies to difficult targets, including non-immunogenic and highly toxic antigens"],
 ["Weeks, not months","Each discovery and optimisation cycle finishes within weeks, from receipt of the target to optimised antibodies in several formats"],
 ["Real-time screening","FACS single-cell sorting selects on epitope diversity, affinity, cross-reactivity, pH-dependence, expressibility, solubility and developability at once"],
 ["Manufacturable","Selection in a eukaryotic host filters for well-expressing, manufacturable candidates from the first round"]];
/* abzymetx.com (Management Team; Events & Presentations). Text-only masthead (CI/CL); summaries only state what the site states. */
var TEAM=[
 {g:"Leadership",name:"Hiep Tran, PhD",title:"Co-founder, President and Chief Scientific Officer",sum:"More than 20 years in academic and industrial research; author of more than twenty peer-reviewed papers and inventor on five issued US patents. Formerly Director of Molecular Biology Services at Rockland Immunochemicals and Director of R&D at LifeSensors; PhD in molecular genetics, Leningrad State University."},
 {g:"Leadership",name:"Alexander H. Taylor, PhD",title:"Director, Pre-clinical Studies",sum:"Sixteen years in R&D at GSK leading Antibody Engineering US, Cell Line Development US and Host Cell Development; before that pioneered antibody humanisation at Centocor. PhD in molecular biology, University of Pennsylvania."},
 {g:"Leadership",name:"Steve Manobianco, MBA",title:"Director, Business Development",sum:"Twenty-five years in global sales, marketing and business development in pharmaceutical R&D services; formerly Vice President of Global Sales and Business Development at GENEWIZ."},
 {g:"Laboratory",name:"Rajesh Singh, PhD",title:"Laboratory Director",sum:"Presented Abzyme's data at the Princeton University Drug Discovery Conference and the Next Gen Immuno-Oncology Congress."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","Abzyme announces publication of preclinical studies of CNS-penetrant anti-C1q nanobody therapy in a progressive multiple sclerosis model","Abzyme Therapeutics","https://abzymetx.com/press-releases/"],
 ["July 2026","Central nervous system-penetrant anti-C1q therapy reduces neuroinflammation and preserves neurological function in a model of progressive multiple sclerosis","Brain, Behavior, and Immunity","https://pubmed.ncbi.nlm.nih.gov/41786004/"],
 ["March 2025","NEI continues Abzyme's Phase II award for multi-specific long-acting antibodies in retinal neovascular disease","NIH RePORTER",RP+"11045761"],
 ["October 2024","Abzyme secures US Patent 12,116,411 for its novel pH-dependent anti-CD3 antibody","Abzyme Therapeutics","https://abzymetx.com/press-releases/"],
 ["August 2024","Abzyme presents data at the 12th Annual Immuno-Oncology Summit, Philadelphia","Abzyme Therapeutics","https://abzymetx.com/media-publications/events-presentations/"],
 ["March 2024","Abzyme awarded an NIH Phase II SBIR grant for multi-specific long-acting antibodies for retinal neovascular diseases","Abzyme Therapeutics","https://abzymetx.com/press-releases/"]];
var SHEETS=[];
