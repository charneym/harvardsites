var FONTS=['300 1em "Literata"','italic 300 1em "Literata"','400 1em "Literata"','italic 400 1em "Literata"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"'];
var WEB="https://synaptrabio.com.au/";
var FORM="https://synaptrabio.com.au/contact";
/* no company email is published (their contact page is a form); the co-founder's Macquarie University address is published on his researcher profile */
var MAIL="lars.ittner@mq.edu.au";
var MQP="https://researchers.mq.edu.au/en/persons/lars-ittner/";
var BD="https://biotechdispatch.com.au/news/157-million-in-cureator-funding-boosts-australian-startups-tackling-dementia";
var MQR="https://lighthouse.mq.edu.au/media-releases/2025/sept-2025/$2.3m-boost-for-macquarie-university-spinout-developing-patient-friendly-dementia-treatments";
/* the four papers SynaptraBIO's own About page cites as its foundation. [year, title, journal, url] */
var REFS=[
 ["2010","Dendritic function of tau mediates amyloid-β toxicity in Alzheimer’s disease mouse models","Cell 142, 387–397","https://doi.org/10.1016/j.cell.2010.06.036"],
 ["2016","Site-specific phosphorylation of tau inhibits amyloid-β toxicity in Alzheimer’s mice","Science 354, 904–908","https://doi.org/10.1126/science.aah6205"],
 ["2018","Dendritic tau in Alzheimer’s disease","Neuron 99, 13–27","https://doi.org/10.1016/j.neuron.2018.06.003"],
 ["2020","Reduction of advanced tau-mediated memory deficits by the MAP kinase p38γ","Acta Neuropathologica 140, 279–294","https://doi.org/10.1007/s00401-020-02191-1"]];
/* what the company says it will develop (About page) */
var FOCUS=[
 ["Alzheimer’s disease","First-in-class small-molecule inhibitors","Against new targets for disease-modifying treatment, identified by two decades of discovery research into what initiates and drives neurodegeneration."],
 ["Frontotemporal dementia","The same small-molecule portfolio","Frontotemporal dementia is the second indication the company names, with the founders’ research spanning both diseases."],
 ["Related neurological conditions","Built on an AI-powered drug discovery platform","The CUREator+ programme funds AI-assisted drug discovery targeting tau-related brain cell damage."]];
/* people: as listed on synaptrabio.com.au (Founders; Board of Directors). No portraits are published. */
var FOUNDERS=[
 ["Prof. Lars M. Ittner, MD","Co-founder","Director of the Dementia Research Centre at Macquarie University, with over two decades in neuroscience research and drug development in Alzheimer’s disease."],
 ["Dr Ole Tietz, PhD","Co-founder and Chief Scientific Officer","Group Leader at the Dementia Research Centre, with over 15 years of drug discovery and development in neuroscience and oncology."],
 ["Dr Janet van Eersel, PhD","Co-founder","Group Leader at the Dementia Research Centre, with extensive experience in preclinical drug testing across models of dementia."]];
var BOARD=[
 ["Dr Duncan McHale","Director","Founder of Weatherden Ltd and Supervisory Board member of Evotec; formerly Chief Medical Officer at Evelo Biosciences, with senior roles at UCB, AstraZeneca and Pfizer."],
 ["Henry Willmington","Director","Finance executive in telecommunications and financial services across Sydney, London and Hong Kong: strategy, M&A and capital management."],
 ["Dr Mian Bi","Director","Clinician-scientist and lead investor and co-founder of Australian Medical Angels, which has supported more than 30 healthtech and medtech startups."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 22, 2025","$15.7 million in CUREator+ funding boosts Australian startups tackling dementia, including $2.3 million for Synaptra Bio","Biotech Dispatch",BD],
 ["September 2025","$2.3m boost for Macquarie University spinout developing patient-friendly dementia treatments","Macquarie University",MQR]];
var SHEETS=[];
