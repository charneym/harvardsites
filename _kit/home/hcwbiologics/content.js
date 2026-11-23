var FONTS=['300 1em "Manrope"','400 1em "Manrope"','500 1em "Manrope"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:info@hcwbiologics.com";
/* Programs, from hcwbiologics.com (Our Programs, Pipeline). Stage words only as the company states them.
   [program, area, title, stage, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["HCW9302","Clinical stage","IL-2 fusion for regulatory T cell expansion","Phase 1 · alopecia areata","An injectable, first-in-kind IL-2 fusion protein built on the TOBI platform. It binds IL-2&#945;&#946;&#947; receptors predominantly expressed on T<sub>reg</sub> cells, activating and expanding T<sub>reg</sub> cells but not effector T cells. A multi-center first-in-human trial is enrolling (NCT07049328).",0,"Clinical","https://clinicaltrials.gov/study/NCT07049328","ClinicalTrials.gov"],
 ["HCW9206","Commercial-ready","Multi-cytokine fusion for CAR-T manufacturing","Drug Master File filed with FDA","Delivers synergistic signaling from three immune-stimulatory cytokines within a single molecule, generating CAR-T cells markedly enriched for long-lived T-memory stem cells. Positioned as a reagent for CAR-T-based manufacturing.",0,"Commercial-ready","",""],
 ["HCW9201","Commercial-ready","IL-12, IL-15 and IL-18 fusion for memory-like NK cells","Drug Master File filed with FDA","Brief priming of blood NK cells with HCW9201 results in highly active memory-like NK cells with enhanced responses against cancer. Positioned for CIML NK cell manufacturing.",0,"Commercial-ready","",""],
 ["HCW11-040","IND-enabling","Second-generation immune checkpoint inhibitor","IND-enabling studies","A combination of cytokines and pembrolizumab that expands progenitor exhausted T cells without triggering cytokine storm in preclinical studies. Targets include bronchopulmonary dysplasia and solid tumors.",1,"IND-enabling","",""],
 ["HCW11-018b","IND-enabling","Tetravalent “BIG BiTE” T-cell engager","IND-enabling studies","Combines a tissue factor-targeting BiTE with IL-15 stimulation and a TGF&#946; trap, designed for solid tumors. In non-human primate studies it showed favorable tolerability and a long serum half-life.",1,"IND-enabling","",""],
 ["HCW11-006","IND-enabling · licensed","Multi-functional immune cell stimulator","Licensed to Trimmune","Developed in partnership with Beijing Trimmune Biotech, the licensee for in vivo development and commercialization. HCW holds a free opt-in right for the American markets after the Phase 1 trial in China.",1,"Partnered","",""]];
/* hcwbiologics.com (Leadership and Board of Directors). Portraits from the same page. */
var TEAM=[
 {name:"Hing C. Wong, PhD",title:"Founder and Chief Executive Officer",img:"p-wong.webp"},
 {name:"Peter Rhode, PhD",title:"Chief Scientific Officer and Vice President, Clinical Operations",img:"p-rhode.webp"},
 {name:"Rebecca Byam, MBA, CPA",title:"Chief Financial Officer",img:"p-byam.webp"},
 {name:"Lee Flowers",title:"Senior Vice President, Business Development",img:"p-flowers.webp"},
 {name:"Jack Egan, PhD",title:"Vice President of Manufacturing and Development",img:"p-egan.webp"},
 {name:"Nicole Valdivieso, Esq.",title:"Vice President, Legal Affairs",img:"p-valdivieso.webp"}];
var BOARD=["Scott T. Garrett","Hing C. Wong, PhD","Rick S. Greene","Lisa M. Giles"];
var NEWS=[
 ["5 November 2026","HCW Biologics secures up to $10.0 million in cash through debt financing","GlobeNewswire via Finviz","https://finviz.com/news/417022/hcw-biologics-secures-up-to-100-million-in-cash-through-debt-financing"],
 ["16 June 2026","Positive preliminary human data from the Phase 1 trial of HCW9302 monotherapy in alopecia areata","GlobeNewswire via Finviz","https://finviz.com/news/361915/hcw-biologics-announces-positive-results-for-preliminary-human-data-readout-for-phase-1-clinical-trial-evaluating-il-2-based-fusion-immunotherapeutic-hcw9302-monotherapy-in-alopecia-areata"],
 ["18 November 2025","First patient dosed in the first-in-human clinical trial of HCW9302 in an autoimmune disease","GlobeNewswire via Barchart","https://www.barchart.com/story/news/36179541/hcw-biologics-announces-initiation-of-first-in-human-clinical-trial-to-evaluate-hcw9302-in-an-autoimmune-disease"]];
var SHEETS=[];
