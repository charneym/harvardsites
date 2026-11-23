var FONTS=['300 1em "Poppins"','400 1em "Poppins"','500 1em "Poppins"','600 1em "Poppins"','400 1em "DM Mono"','500 1em "DM Mono"'];
var WEB="https://www.medicovestor.com/";
var MAIL="info@medicovestor.com";
/* the two platforms and what they add, as described on medicovestor.com/platform and in the company's press releases. [name, short, detail] */
var PROPS=[
 ["ADoBind™","Dimeric IgG1 ADC","A dimeric antibody targeting a B-cell epitope: a traditional cytotoxic payload on a dimeric IgG1 scaffold that also mediates immunologic cytotoxic effector mechanisms."],
 ["ADoTope™","Bi-epitope, dual payload","Two IgG1 antibodies, E1 and E2, each targeting a non-overlapping epitope on the same antigen, combined as a fixed-combination, dual-payload ADC."],
 ["More antibody per antigen","For low-expressing tumours","Designed to associate more antibody molecules with each tumour antigen, functionally increasing antigen density, so tumours once considered low expressors come into reach."],
 ["Payload plus immunity","ADCC · ADCP · CDC","Payload-mediated tumour cell kill and bystander effects, plus antibody-dependent cellular cytotoxicity and phagocytosis and complement-dependent cytotoxicity."],
 ["Pharmacokinetics","Longer exposure","In preclinical studies ADoBind FRα showed a much longer serum half-life and a larger AUC than its monomeric counterpart."],
 ["Platform-agnostic","Antigen, antibody, payload","Patented and agnostic to antigen, antibody, indication and payload, so it can complement approved and in-development ADCs."]];
/* pipeline as published on medicovestor.com/pipeline: [indication, platform · target · asset type, note, code] */
var PROG=[
 ["Pancreatic cancer","ADoBind · FRα · ADC","Lead programme. FDA IND clearance (October 2026), Fast Track designation (October 2026) and Orphan Drug designation (June 2025); preparing an international, multicentre Phase 1 study.","MC001"],
 ["Solid tumours","ADoBind · CT22 · ADC","An ADoBind ADC against CT22, for solid tumours.","MC002"],
 ["Ovarian cancer","ADoTope · FRα · ADC","A bi-epitope, dual-payload, fixed-combination chemoimmunotherapy ADC; preclinical activity in platinum-resistant ovarian cancer models, presented at AACR 2026.","MC003"],
 ["Colorectal cancer","ADoBind · FRα · Naked antibody","An antibody-only programme on the ADoBind backbone.",""],
 ["Endometriosis","ADoBind · FRα","A tetravalent ADoBind antibody against FRα, which is upregulated in endometriotic lesions but scarce in normal endometrium (75th ACOG, 2026).",""],
 ["Autoimmune diseases","ADoBind · CD38 · ADC","Extending the platform beyond oncology.",""]];
var MILESTONES=["Oversubscribed seed financing (2023)","Three US patents issued or approved (2024)","FDA Orphan Drug designation (2025)","First place, Next Star North America Biomedical competition (2025)","Strategic partnership with Sanyou Biopharmaceuticals","FDA IND clearance and Fast Track (2026)"];
/* people: as published on medicovestor.com/about-us */
var TEAM=[
 ["Seah H. Lim, MD, PhD","Founder and Chief Executive Officer",""],
 ["Benjamin Vali","Chief Regulatory Officer",""],
 ["Lin Ong, CA","Chief Operating Officer","Media and investor contact"],
 ["Eujern Lim","Chief Information Technology Officer",""],
 ["Jianbin Qi","Chief Operating Officer (China)",""],
 ["Chit Loh","Chairman, Medicovestor (Malaysia)",""]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["5 November 2026","CEO Seah Lim on a panel with directors from Takeda and AbbVie at the ADC Payload Summit","ADC Payload Summit","https://adc-payload.com/"],
 ["20 October 2026","FDA grants Fast Track designation to MC001, a first-in-class chemoimmunotherapy ADC for pancreatic cancer","GlobeNewswire","https://www.globenewswire.com/news-release/2026/10/20/3384282/0/en/medicovestor-announces-fda-fast-track-designation-for-mc001-its-first-in-class-chemoimmunotherapy-adc-for-pancreatic-cancer.html"],
 ["5 October 2026","FDA IND clearance for MC001, advancing to an international Phase 1 study","BioSpace","https://www.biospace.com/press-releases/medicovestor-announces-fda-ind-clearance-for-mc001-advancing-to-an-international-phase-1-study"],
 ["1 May 2026","MC004: a tetravalent ADoBind antibody targeting FRα for endometriosis, presented at the 75th ACOG","Poster (PDF)",WEB+"uploads/ACOG-2026-Lim-et-al.pdf"],
 ["24 September 2025","First place at the Next Star North America Biomedical Special Competition in Boston","BioSpace","https://www.biospace.com/press-releases/medicovestor-inc-wins-first-place-at-the-next-star-north-america-biomedical-special-competition-in-boston-part-of-the-2025-entrepreneur-next-star-million-prize-global-challenge"],
 ["17 June 2025","FDA grants Orphan Drug designation to ADoBind MC001 for pancreatic cancer","BioSpace","https://www.biospace.com/press-releases/fda-grants-orphan-drug-designation-to-medicovestors-first-in-class-adc-for-pancreatic-cancer"]];
var SHEETS=[];
