var FONTS=['300 1em "Source Serif 4"','400 1em "Source Serif 4"','600 1em "Source Serif 4"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="info@bioaxonebio.com";
/* The pipeline, from bioaxonebio.com (Disease Focus, Technology, News). Stage words only where the company states them.
   [drug, target, title, status, detail, dim] */
var PIPE=[
 ["BA-210","Rho inhibitor","Acute spinal cord injury","Phase 3 · seeking a partner","A cell- and tissue-penetrating protein drug that locks Rho in its inactive state. It is delivered locally, in a fibrin sealant, to the site of injury during decompression surgery, to limit secondary damage. Tested in Phase 1b and Phase 2b/3 trials; signals of efficacy were seen in the 3 mg dose group. Composition patent US 11,324,802 (2022).",0],
 ["NRL-1049","ROCK2 inhibitor","Cerebral cavernous malformation","Phase 1 · licensed to Neurelis","Formerly BA-1049: an orally available, brain-targeted, ROCK2-selective small molecule that restores blood-brain barrier integrity and reduces lesion formation in models of the disease. Licensed to Neurelis in 2021; IND filed in January 2023.",0],
 ["BA-434","PTEN · self-delivering RNAi","Spinal cord injury","Preclinical","A self-delivering RNAi compound that transiently silences PTEN in neurons, a well-validated target for long-distance axon regeneration. Method-of-treatment patent US 11,098,308 (2021).",0],
 ["Next","Blood-brain barrier","Stroke and neurodegeneration","Relevance under study","Success with ROCK2 inhibition in CCM will have relevance to other neurological diseases where the blood-brain barrier is compromised, including stroke and neurodegenerative disease.",1]];
/* The science, from bioaxonebio.com (Technology, Disease Focus). */
var EVID=[
 ["Spinal cord injury","More than 12,000 new injuries in the United States each year, and no drug on the market to repair neuronal damage and reverse paralysis"],
 ["Cerebral cavernous malformation","About 200,000 Americans have had bleeding in the brain from CCM; the only treatment of symptoms is brain surgery"],
 ["One pathway","Rho and Rho kinase 2 (ROCK2) are both over-activated by neurotrauma and by disease"],
 ["Twenty years","Of research led by the founder into the signalling pathways and proteins that block axon regeneration in the central nervous system"]];
/* bioaxonebio.com (About Us). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Management",name:"Lisa McKerracher, PhD",title:"Founder and Chief Executive Officer",sum:"Serial entrepreneur in regenerative medicine and translational neuroscience; 15 years on the faculty at McGill University and the Université de Montréal, where she led the first group to purify and identify a growth-inhibitory protein in the CNS. Christopher Reeve medal, 2000; adjunct at McGill."},
 {g:"Management",name:"Pierre Caouette",title:"Chief Operating Officer",sum:"Co-founded BioAxone as seed investor and oversees corporate strategy and finance. A serial entrepreneur and former airline captain, he founded the computer-hardware company Hexacan, sold in 1990."},
 {g:"Advisors",name:"Krista McKerracher, MBA",title:"Business Advisor",sum:"Over 40 years in pharma and biotech; formerly VP, Head of Hemoglobinopathy Programs at CRISPR Therapeutics, where her team developed CASGEVY, and VP & Global Program Franchise Head at Novartis."},
 {g:"Advisors",name:"Cathy Sohn, PharmD",title:"Business Advisor",sum:"Thirty years of US and global pharmaceutical experience; from 1998 to 2010 Senior VP Worldwide Business Development and Strategic Alliances for GSK's Consumer Healthcare division."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["June 2025","Isoform-selective and non-selective rho-kinase inhibitors do not affect collagenase-induced intracerebral hemorrhage outcomes in mice","J Cereb Blood Flow Metab","https://pubmed.ncbi.nlm.nih.gov/39763388/"],
 ["November 2024","The novel ROCK2-selective inhibitor NRL-1049 preserves the blood-brain barrier after acute injury","J Cereb Blood Flow Metab","https://www.bioaxonebio.com/news"],
 ["January 2023","Licensee Neurelis files an IND to advance NRL-1049 for cerebral cavernous malformation","BioAxone BioSciences","https://www.bioaxonebio.com/news"],
 ["May 2022","Patent US 11,324,802 issued to protect BA-210, a Rho inhibitor for spinal cord injury","BioAxone BioSciences","https://www.bioaxonebio.com/news"],
 ["June 2021","BioAxone licenses BA-1049 and its portfolio of Rho kinase inhibitors to Neurelis","Business Wire","https://www.businesswire.com/news/home/20210621005584/en/BioAxone-BioSciences-Announces-License-of-Cerebral-Cavernous-Malformations-Drug-Candidate-BA-1049-and-Portfolio-of-Rho-Kinase-Inhibitors-to-Neurelis/"]];
var SHEETS=[];
