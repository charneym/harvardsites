var FONTS=['300 1em "Work Sans"','400 1em "Work Sans"','500 1em "Work Sans"','600 1em "Work Sans"','400 1em "DM Mono"','500 1em "DM Mono"'];
var WEB="https://www.curasen.com/";
var MAIL="info@CuraSen.com";
/* the science, as set out on curasen.com/science and /about. [point, short, detail] */
var PROPS=[
 ["The locus coeruleus","A small brain stem nucleus","The origin of most ascending norepinephrine (noradrenaline), which modulates and activates higher brain functions in limbic and cortical regions and supports cerebral homeostasis."],
 ["Among the first to fail","Alzheimer’s, Parkinson’s and more","Early signs of neurodegeneration, such as anosmia, dysautonomia and sleep dysregulation, as well as cognitive loss and depression in older adults, follow profound neuronal pathology in the locus coeruleus."],
 ["Many cell types depend on it","Neurons, glia, cerebral vessels","As the signal erodes, its neuronal, metabolic and immunological support fades, leading to neurotrophic collapse, inflammation and atrophy."],
 ["β<sub>2</sub> adrenoceptors","First-in-class, in the brain","Our first-in-class β<sub>2</sub> compounds have shown proof-of-concept and safe delivery of this key stimulus to the CNS, with improvements in cognition and mood in Parkinson’s or Alzheimer’s patients."],
 ["α<sub>1A</sub> adrenoceptors","Best-in-class, in the periphery","In neurogenic orthostatic hypotension, our best-in-class compound selectively targets α<sub>1A</sub> adrenoceptors to stably and safely control blood pressure and cerebral perfusion."],
 ["Symptoms and progression","The goal","To reduce the life-altering symptoms of neuropsychiatric and neurodegenerative disease, and to slow or reverse disease progression."]];
/* pipeline, as charted on curasen.com/pipeline (bar = share of the IND-enabling → Phase 3 track). [name, indication, mechanism, bar %, note] */
var PHASES=["IND-enabling","Phase 1","Phase 2a","Phase 2b","Phase 3"];
var PIPE=[
 ["CuraAX","nOH in Parkinson’s and related conditions","α<sub>1A</sub>-AR agonist, NCE (CST-3056)",47,"Met its Phase 2a primary endpoint, November 2026"],
 ["CuraCN","Neurodegenerative disease","Combination β<sub>2</sub>-AR agonist",57,"Phase 2 data in Parkinson’s and Alzheimer’s patients"],
 ["CuraXN","Neurodegenerative disease","Combination β<sub>2</sub>-AR agonist, NCE",57,""]];
var INVEST=["New Leaf Venture Partners","Longitude Capital","abrdn funds","Intermediate Capital Group (ICG)","Alta Partners","Johnson & Johnson Innovation – JJDC","Pappas Capital","Alzheimer’s Drug Discovery Foundation"];
/* people: as published on curasen.com/leadership */
var TEAM=[
 ["Kathleen Sereda Glaub, MBA","Chief Executive Officer","Co-founder and executive chair from 2018, CEO since October 2024. Led Afferent to its $1.25 billion sale to Merck; president of Plexxikon for 12 years."],
 ["Anthony Ford, PhD","President and Chief Scientific Officer","Co-founder and CEO from 2018. Co-founded Afferent, leading the discovery of gefapixant; earlier head of neuroscience at Roche, Palo Alto."],
 ["Gabriel Vargas, MD, PhD","Chief Medical Officer","Joined in 2018 from Amgen, where he led early development of the migraine preventive Aimovig™. Psychiatry residency and fellowship at UCSF."],
 ["Michael P. Dillon, PhD","Chief Technical Officer","Joined in 2023; previously chief scientific officer and head of research at IDEAYA Biosciences, with 30 years in pharmaceutical R&D."],
 ["Peter Butera","Senior Vice President, Operations","30 years in clinical operations; previously VP clinical operations at Attenua and at Afferent, and ten years at Pain Therapeutics."],
 ["Renee Martin, PhD","Vice President, Translational Science","Joined in 2020; previously SVP Medical Sciences at Anthera Pharmaceuticals and more than 14 years at Roche."]];
var BOARD=["Patrick Enright, MBA · Chair, Longitude Capital","Kathleen Sereda Glaub, MBA","Anthony Ford, PhD","Simon Tate, PhD · ICG","Ronald Hunt · New Leaf Venture Partners","Loretta Tse, PhD · abrdn"];
var SAB=["Mehrdad Shamloo, PhD · Co-founder, Chair of the SAB","Robert Booth, PhD · Co-founder, Distinguished Advisor"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["12 November 2026","Phase 2a data show CuraAX (CST-3056) met its primary endpoint, with a statistically significant improvement in standing systolic blood pressure in patients with nOH","CuraSen news",WEB+"phase-2a-clinical-data-show-curasen-therapeutics-curaax-cst-3056-met-primary-endpoint-demonstrating-statistically-significant-improvement-in-standing-systolic-blood-pressure-in-patients-wit/"],
 ["5 November 2026","Late-breaking Phase 2a data with CuraAX to be presented at the 37th International Symposium on the Autonomic Nervous System","CuraSen news",WEB+"curasen-therapeutics-to-present-late-breaking-phase-2a-exploratory-data-with-curaax-cst-3056-in-patients-with-neurogenic-orthostatic-hypotension-noh-at-the-37th-international-symposium-on-the-aut/"],
 ["10 November 2025","Positive Phase 1 safety, pharmacokinetic and pharmacodynamic data with CuraAX at the 2025 American Autonomic Society symposium","CuraSen news",WEB+"curasen-therapeutics-presents-positive-phase-1-safety-pharmacokinetics-and-pharmacodynamics-data-with-curaax-cst-3056-at-the-2025-american-autonomic-society-aas-international-symposium/"],
 ["23 October 2025","First patient dosed with CuraAX in the Phase 2a neurogenic orthostatic hypotension study","CuraSen news",WEB+"curasen-therapeutics-doses-first-patient-with-curaax-cst-3056-in-phase-2a-neurogenic-orthostatic-hypotension-noh-study/"]];
var SHEETS=[];
