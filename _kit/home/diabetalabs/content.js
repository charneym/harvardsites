var FONTS=['300 1em "Roboto Slab"','400 1em "Roboto Slab"','500 1em "Roboto Slab"','600 1em "Roboto Slab"','400 1em "Open Sans"','500 1em "Open Sans"','600 1em "Open Sans"','700 1em "Open Sans"'];
var WEB="https://diabetalabs.com/";
var MAIL="info@diabetalabs.com";
/* the three principles on their home page; [name, detail] */
var PILL=[["Informed design","Re-engineering of known, human peptide activators."],["Novel targets","Effective exploitation of previously untapped receptors."],["Beta-cell health","Improving pancreatic beta-cell health to halt disease progression."]];
/* the candidates' properties, from diabetalabs.com (Our Therapeutic Candidates). [property, short, detail] */
var PROPS=[
 ["Peptide analogues","Redesigned human hormones","Based on re-design of the human hormone receptor activators."],
 ["Enzyme resistant","Stable in plasma","Improved stability against enzymatic degradation in plasma."],
 ["Receptor selectivity","On target","Improved selectivity towards the target receptors of interest."],
 ["Excellent solubility","Easier to formulate","Enabling easier formulation compared to many peptides."]];
/* what the candidates do at the beta-cell (Our Solution) */
var ACTS=[
 ["Rest beta-cells","Prevent further burnout of dwindling beta-cell mass."],
 ["Improve function","Increase releasable insulin stores and overall sensitivity."],
 ["Increase cell mass","Promote beta-cell proliferation, reduce apoptosis and improve beta-cell identity."],
 ["Prevent decline","Put a stopper in, and actively reverse, progressive beta-cell decline in severe disease."]];
/* people: as published on diabetalabs.com/dbl-team */
var MGMT=[
 ["Dr. Ryan Lafferty","Founder, CEO","A diabetes-focused pharmacist who has led DBL’s innovation and fundraising, while advancing its therapeutic and commercial potential."],
 ["Prof. Peter Simpson","Executive Chair, Co-Founder","Strategic leadership, investor relations and biotech expertise, driving commercial focus and partnership success."],
 ["Prof. Nigel Irwin","Academic Director, Co-Founder","An esteemed diabetes researcher with expertise in gut peptides, drug discovery, teaching, patents and editorial leadership."],
 ["Dr. Alex Chacko","University Director","Head of Innovation and Impact at Ulster University."]];
var TECH=[
 ["Dr. Shaun Sharkey","Principal Scientist (Preclinical)","A PhD in antidiabetic research and several years of oncology-related preclinical profiling in industry and academia."],
 ["Dr. Nishan Ramnarain (MD)","Clinical Development Lead","A pharmaceutical consultant with expertise in metabolic disease, clinical translation and global biotech-pharma R&D leadership."],
 ["Dr. Juanita Carrey","Senior Project Manager","A Senior R&D Project Manager with expertise in drug discovery, operations and complex pharma-biotech collaborations."]];
var SCI=["Prof. Peter Flatt, MBE","Prof. Finbarr O’Harte","Prof. Victor Gault","Prof. Nigel Irwin"];
var INV=["DSW Ventures","QUBIS Ltd","Clarendon Fund Managers NI"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","Dia Beta Labs wins the AIMS Summit 2026 Shark Tank competition, held at IDA Ireland in Dublin, as its lead programme advances through IND-enabling toxicology","Dia Beta Labs",WEB+"dia-beta-labs-wins-aims-summit-2026-shark-tank-competition/"],
 ["August 2025","Dia Beta Labs raises €1.4M for its next-generation peptide therapies for obesity and type 2 diabetes","StartupHub.ai","https://www.startuphub.ai/news/dia-beta-labs-raises-14m-for-diabetes-cell-therapies"],
 ["June 2025","Prof. Peter Flatt, of DBL’s scientific committee, named in the King’s Birthday Honours list with an MBE","Dia Beta Labs",WEB+"prof-peter-flatt-named-in-kings-honours-list/"],
 ["October 2024","Overall winners of INVENT 2024, from 117 entrants, and winners of the BioBreakthroughs category","Dia Beta Labs",WEB+"invent-winners-2024/"]];
var SHEETS=[];
