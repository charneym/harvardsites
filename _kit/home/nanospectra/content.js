var FONTS=['300 1em "Sora"','400 1em "Sora"','500 1em "Sora"','400 1em "IBM Plex Sans"','italic 400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
/* Nanospectra publishes no email address (nanospectra.com, press releases, FDA 510(k) K243701). Contact is by
   telephone (business directories) and the registered address (FDA 510(k) K243701, July 2025). */
var TEL="+17138422720",TELT="+1 713 842 2720";
var ADDR="8285 El Rio St., Suite 150, Houston, Texas 77054";
/* the clinical path: every line from nanospectra.com, Nanospectra press releases (Feb 2020, Sep 2020, Nov 2021),
   PNAS 116:18590 (2019) and FDA 510(k) K243701. [stage, title, where, detail] */
var CLIN=[
 ["Completed","First-in-human pilot study","46 patients · 3 US sites","AuroLase Therapy for focal ablation of prostate tissue, under an FDA investigational device exemption. Results from the lead site were published in PNAS in August 2019."],
 ["Completed","Pivotal study, NCT04240639","60 patients · 9 US sites","Open-label, multicenter, single-treatment study with MRI/ultrasound fusion guidance. The first procedures were done at the University of Michigan; enrollment was completed in November 2021."],
 ["Cleared, July 2025","AuroLase® System, 510(k) K243701","FDA · substantially equivalent","Nanospectra’s own AuroLase System, cleared by the FDA for the ablation, coagulation and vaporization of soft tissue, delivering near-infrared light through a flexible optical fibre."],
 ["Platform","Beyond the prostate","Solid tumors, tissue, drug delivery","The ultra-focal platform is viable for multiple applications, and Nanospectra is pursuing clinical advancement, exclusive partnering agreements and ongoing research and development."]];
/* team: people named in Nanospectra press releases and in the PNAS pilot-study paper. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"David Jorden",title:"Chief Executive Officer",sum:"Has led Nanospectra through the pivotal AuroLase study and the Series B-1 financing, and was the contact for the 2025 AuroLase System clearance."},
 {g:"Leadership",name:"Jon A. Schwartz",title:"Clinical Research",sum:"Nanospectra’s author on the PNAS pilot-study paper on gold nanoshell-localized photothermal ablation of prostate tumors."},
 {g:"Scientific founders",name:"Naomi J. Halas",title:"Laboratory for Nanophotonics, Rice University",sum:"Co-founder; her Houston laboratory developed the gold nanoshells at the heart of AuroLase Therapy."},
 {g:"Scientific founders",name:"Jennifer L. West",title:"Biomedical Engineering, Duke University",sum:"Co-founder; bioengineer and co-author of the clinical pilot study of nanoshell-directed ablation."},
 {g:"Clinical investigators",name:"Ardeshir R. Rastinehad, DO",title:"National principal investigator",sum:"Led the first-in-human pilot study and the pivotal trial; System Director of Prostate Cancer, Northwell Health."},
 {g:"Clinical investigators",name:"Steven E. Canfield, MD",title:"Urology, UTHealth Houston",sum:"McGovern Medical School at UTHealth Houston; co-author of the PNAS pilot-study paper."},
 {g:"Clinical investigators",name:"Arvin K. George, MD",title:"Urology, University of Michigan",sum:"Michigan Medicine, where the first two pivotal-study procedures were done; co-author of the PNAS pilot-study paper."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2025","FDA clears the AuroLase® System, Nanospectra’s near-infrared laser for soft-tissue ablation (510(k) K243701)","U.S. FDA","https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K243701"],
 ["November 2021","Enrollment completed in the pivotal trial of nanoparticle-based focal ablation","Urology Times","https://www.urologytimes.com/view/enrollment-completed-in-trial-of-novel-nanoparticle-based-focal-ablation-therapy"],
 ["September 2020","Sirtex Medical leads the first tranche of Nanospectra’s Series B-1 financing","Medical Device Network","https://www.medicaldevice-network.com/news/nanospectra-biosciences-funds-ablation-therapy/"],
 ["February 2020","Nanospectra initiates its pivotal study of AuroLase Therapy for ablation of prostate tissue","BioSpace","https://www.biospace.com/nanospectra-biosciences-initiates-pivotal-study-of-aurolase-therapy-for-ablation-of-prostate-tissue"],
 ["August 2019","Gold nanoshell-localized photothermal ablation of prostate tumors in a clinical pilot device study","PNAS","https://doi.org/10.1073/pnas.1906929116"]];
var SHEETS=[];
