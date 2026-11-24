var FONTS=['300 1em "Manrope"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','400 1em "Newsreader"','italic 400 1em "Newsreader"'];
var MAIL="info@gibsononcology.com";
var CEOMAIL="rriggs@gibsononcology.com";
var GO="https://gibsononcology.com/";
var PU="https://www.purdue.edu/newsroom/2026/Q1/gibson-oncology-nih-to-begin-phase-2-trials-of-lmp744-for-treatment-of-first-time-recurrent-glioblastoma/";
var IMG="img/";
/* Sources: the client's November 2026 investor deck and three letters of support (_kit/priority/gibson/materials.md),
   gibsononcology.com (home, Lead Program, Additional Programs, Leadership Team, Scientific Collaborators, News and Events),
   and the Purdue University release of 25 February 2026. Nothing here is invented; animal data are labelled preclinical. */

/* the four strategic partners (deck slide 11). [key, institution, place, logo file, logo height class, investigators, drug, tag, big result, result line, detail] */
var PARTNERS=[
 {k:"nih",inst:"National Institutes of Health",unit:"National Institute of Neurological Disorders and Stroke (NINDS)",logo:"logo-ninds.png",lh:"l-ninds",pi:"Dr. Sadhana Jackson",drug:"LMP744",
  stage:"Phase 2 under way · Preclinical PDX",big:"5 doses",res:"With just five doses of LMP744 as a single agent, glioma tumours were completely gone in patient-derived (PDX) animal models.",
  more:"The Phase 2 trial of LMP744 began in June 2026, with NINDS paying the majority of the clinical costs."},
 {k:"mayo",inst:"Mayo Clinic",unit:"Rochester, Minnesota",logo:"logo-mayo-clinic.svg",lh:"l-mayo",pi:"Dr. Terry Burns",drug:"LMP744",
  stage:"Investigator-sponsored trial",big:"Before recurrence",res:"A principal-investigator-sponsored trial treating patients with residual glioma, proactively, before the cancer comes back.",
  more:"A paradigm shift from the usual approach of waiting for the cancer to recur."},
 {k:"duke",inst:"Duke University",unit:"The Preston Robert Tisch Brain Tumor Center (adults)",logo:"logo-duke-tisch.svg",lh:"l-duke",pi:"Drs. Henry Friedman and Matthew Waitkus",drug:"LMP400",
  stage:"Preclinical PDX · Phase 2 planned",big:"1 week",res:"Resistant grade 3 astrocytomas showed major tumour regression in a PDX model within one week of LMP400 as a single agent.",
  more:"Duke has filed a $15 million SPORE grant to advance LMP400 in a Phase 2 trial in resistant grade 3 astrocytomas, low and high grade."},
 {k:"cnmc",inst:"Children’s National",unit:"Washington, D.C. (paediatric)",logo:"logo-childrens-national.svg",lh:"l-cn",pi:"Drs. Roger Packer and Yanxin Pei",drug:"LMP400",
  stage:"Preclinical PDX",big:"7 of 8",res:"Resistant tumours completely gone within one week of LMP400 as a single agent, in grade 3 paediatric medulloblastoma PDX models. The eighth regressed significantly.",
  more:"Children’s National wants to work with Duke on LMP400 in paediatric patients."}];

/* letters of support: approved excerpts, verbatim (materials.md) */
var LETTERS=[
 {k:"friedman",q:["We have now reviewed the data on LMP 400 and we are impressed with the multi-institutional preclinical studies on multiple brain tumors done with LMP 400. The fact that the FDA gave Gibson a wider ODD coverage than Gibson asked for is very impressive. The potential to be an oral agent puts it in a special class."],
  q2:"We would like to explore becoming the primary collaborator for Gibson for LMP 400 clinical studies on brain tumors.",
  name:"Henry S. Friedman, MD",title:"James B. Powell, Jr. Professor of Neuro-Oncology; Chief, Division of Medical Neuro-Oncology; Deputy Director, The Preston Robert Tisch Brain Tumor Center at Duke",date:"21 September 2026"},
 {k:"waitkus",q:["We have observed strong antitumor responses to LMP400 in a patient-derived model of IDH-mutant astrocytoma that is otherwise relatively resistant to temozolomide and IDH inhibitors … LMP400 induced tumor regression in subcutaneous xenografts, including cases that regressed to immeasurable levels for at least one week."],
  q2:"Our findings in experimental model systems provide a mechanistically grounded preclinical rationale for continued development of LMP400 in malignant gliomas, particularly IDH-mutant astrocytomas and other molecularly defined gliomas characterized by elevated DNA replication stress.",
  name:"Matthew S. Waitkus, PhD",title:"Assistant Professor, Department of Neurosurgery, The Preston Robert Tisch Brain Tumor Center, Duke University School of Medicine",date:"27 September 2026"},
 {k:"pei",q:["LMP400 demonstrated excellent brain tumor penetration and induced complete tumor regression in both models. In vitro studies showed a marked reduction in MYC expression following treatment, indicating that MYC may present a key therapeutic target of this compound."],
  q2:"These findings highlight the significant potential of LMP400 as a novel therapeutic candidate for pediatric brain tumors, an area with substantial unmet medical need.",
  name:"Yanxin Pei, PhD",title:"Associate Professor, George Washington University; Principal Investigator, Center for Cancer and Immunology Research, Children’s National Research Institute",date:"24 September 2026"}];

/* pipeline (deck + gibsononcology.com). stage: 0 preclinical, 1 phase 1, 2 phase 2, 3 phase 3; reach = how far the bar runs (0..4), live = the phase now under way */
var PIPE=[
 {drug:"LMP744",route:"Intravenous",ind:"Glioma brain tumours: first-time recurrent glioblastoma; residual glioma",reach:2.55,live:"Phase 2",
  who:"NINDS · NIH (Phase 2, since June 2026) · Mayo Clinic (investigator-sponsored trial)",
  txt:"Crosses the blood-brain barrier easily, is not pumped back out by its efflux transporters, and stays in the brain for up to 24 hours after a single dose. FDA Orphan Drug Designation for glioma, 2024. NINDS is paying the majority of the Phase 2 clinical costs.",
  img:"struct-lmp744.webp"},
 {drug:"LMP400",route:"Oral and intravenous",ind:"Resistant grade 3 astrocytomas (adult); paediatric brain tumours; Ewing’s sarcoma",reach:1.9,live:"Phase 2 planned",
  who:"Duke Tisch Brain Tumor Center ($15M SPORE grant filed) · Children’s National",
  txt:"Phase 1 complete at the National Cancer Institute. Less easily pumped out of the cancer cell than LMP744, with brain levels held for over 24 hours, and with the potential to be given by mouth. Duke plans a Phase 2 trial in resistant grade 3 astrocytomas.",
  img:"struct-lmp400.webp"},
 {drug:"Azas",route:"Next generation",ind:"Azaindenoisoquinolines: over 700 rationally designed compounds",reach:.85,live:"Preclinical",
  who:"Licensed worldwide from Purdue University and the National Cancer Institute",
  txt:"The next generation of the class, among them G-103, designed for oral administration. Over 700 rationally designed compounds, with intellectual property running beyond 2038.",img:null}];
var STAGES=["Preclinical","Phase 1","Phase 2","Phase 3"];

/* regulatory and IP (deck slide 12) */
var DESIG=[
 ["FDA Orphan Drug Designation","LMP744 and LMP400, for all glioma brain tumours. Duke: the FDA gave Gibson “a wider ODD coverage than Gibson asked for.”"],
 ["FDA Rare Pediatric Disease Designation","LMP400, for Ewing’s sarcoma."],
 ["Patents beyond 2041","Strong intellectual property for LMP744 and LMP400."],
 ["700+ compounds, IP beyond 2038","The next-generation azaindenoisoquinolines (Azas), rationally designed."]];

/* market and transactions (deck slides 3, 6, 9) */
var MARKET=[["$3.2B","Glioblastoma market, 2025"],["$6.9B","Projected by 2035 (CAGR 7.8%)"],["3.27","U.S. cases per 100,000 (age-adjusted)"],["6–10 mo","Typical median survival in recurrent disease"]];
var DEALS=[["Feb 2026","Servier","Day One","$2.5B"],["Mar 2025","Jazz","Chimerix","$935M"],["Dec 2020","Servier","Agios","$1.8B upfront + $200M milestone"]];
var COMPETE=[["Servier","Vorasidenib","Specific mutation · smaller market"],["Day One","Tovorafenib","Specific mutation · smaller market"],["Chimerix (Jazz)","Dordaviprone","Specific mutation · smaller market"],["Novocure","TTFields (device)","Device"],["Gibson Oncology","LMP744 and LMP400","All glioma brain tumours · larger market"]];
var REASONS=[
 ["Two commercially validated targets","TOPO 1 plus reduction of cMYC overexpression, the driver of about 80% of human cancers, in one molecule."],
 ["Proof from premier institutions","NIH (NINDS), Mayo Clinic, Duke and Children’s National are deploying their own resources on Gibson’s drugs."],
 ["Orphan and Rare Pediatric designations","Orphan Drug Designation for LMP744 and LMP400 in all gliomas; Rare Pediatric Disease Designation for LMP400 in Ewing’s sarcoma."],
 ["Long-lived intellectual property","LMP744 and LMP400 beyond 2041; over 700 Aza compounds beyond 2038."],
 ["A very low burn rate","Working with NINDS, Duke and Children’s National keeps Gibson’s annual spend very low."],
 ["A quick path to market","Brain tumours first, with low competition; then doctors can use the drugs in other cancers as merited."]];

/* people (gibsononcology.com, Leadership Team and Board of Directors; Scientific Collaborators). Portraits are theirs. */
var TEAM=[
 {name:"Mark C. Rogers, MD, MBA",title:"Founder and Executive Chair",img:"p-rogers.webp"},
 {name:"Randall B. Riggs",title:"President and Chief Executive Officer",img:"p-riggs.webp"},
 {name:"Theodore C. Solomon",title:"Founder and Chief Financial Officer",img:"p-tsolomon.webp"},
 {name:"Elizabeth London Rogers, MD",title:"Founder and Chief Operations Officer",img:"p-erogers.webp"},
 {name:"Clifford T. Solomon, MD",title:"Founder and Chief Medical Officer; Clinical Professor, UM Neurosurgery",img:"p-csolomon.webp"},
 {name:"Mark S. Cushman, PhD, PharmD",title:"Founder and Chief Scientific Officer; Distinguished Professor Emeritus, Purdue",img:"p-cushman.webp"},
 {name:"Mark D. Baganz, MD",title:"Independent Director",img:"p-baganz.webp"}];
var COLLAB=[
 {name:"Sadhana Jackson, MD",title:"NIH Investigator; Head of Developmental Therapeutics & Pharmacology, NINDS/NCI",img:"p-jackson.webp"},
 {name:"Matthew Waitkus, PhD",title:"Assistant Professor in Neurosurgery and Pathology, Duke Cancer Institute",img:"p-waitkus.webp"},
 {name:"Yves Pommier, MD, PhD",title:"Senior Investigator, Developmental Therapeutics Branch, NCI/CCR",img:"p-pommier.webp"},
 {name:"Desmond A. Brown, MD, PhD",title:"Head of Neurosurgical Oncology, NINDS",img:"p-brown.webp"},
 {name:"Jing Wu, MD, PhD",title:"NIH Lasker Clinical Research Scholar, Neuro-Oncology Branch",img:"p-wu.webp"},
 {name:"Manmeet Ahluwalia, MD, MBA",title:"Chief Scientific Officer and Deputy Director, Miami Cancer Institute",img:"p-ahluwalia.webp"},
 {name:"Graeme F. Woodworth, MD",title:"Chair of Neurosurgery, University of Maryland School of Medicine",img:"p-woodworth.webp"},
 {name:"Danzhou Yang, PhD",title:"Distinguished Professor of Medicinal Chemistry, Purdue University",img:"p-yang.webp"},
 {name:"Pooran Chand, PhD",title:"CEO and Co-Founder, Therachem Research Medialab",img:"p-chand.webp"}];

/* news: only items with a working link (gibsononcology.com News and Events). [date, headline, source, url] */
var NEWS=[
 ["October 2026","Dr. Sadhana Jackson presents an update on the NINDS Phase 2 trial of LMP744 at the 28th Annual Blood-Brain Barrier Consortium","Gibson Oncology",GO+"news-and-events/"],
 ["February 2026","Gibson Oncology and NIH begin Phase 2 trials of LMP744 in first-time recurrent glioblastoma","Purdue University",PU],
 ["October 2024","FDA grants orphan drug designation to LMP744 for glioma","OncLive","https://www.onclive.com/view/fda-grants-orphan-drug-designation-to-lmp744-for-glioma"],
 ["July 2024","2024 Topoisomerases in Biology and Medicine Conference","FIU","https://case.fiu.edu/news-events/topoisomerases-in-biology-and-medicine-conference/"],
 ["October 2023","FDA grants orphan drug designation to indotecan (LMP400) for the treatment of glioma","NCI Center for Cancer Research","https://ccr.cancer.gov/news/article/fda-grants-orphan-drug-designation-to-indotecan-for-the-treatment-of-glioma"],
 ["September 2023","Powerful drug combination kills glioblastoma tumours containing a unique genetic makeup","NCI Center for Cancer Research","https://ccr.cancer.gov/neuro-oncology-branch/powerful-drug-combination-kills-glioblastoma-tumors-containing-a-unique-genetic-makeup"],
 ["April 2021","Gibson congratulates Dr. Danzhou Yang as Distinguished Professor of Medicinal Chemistry and Molecular Pharmacology at Purdue","Business Wire","https://www.businesswire.com/news/home/20210422005301/en/Gibson-Oncology-Congratulates-Dr.-Danzhou-Yang-as-Distinguished-Professor-of-Medicinal-Chemistry-and-Molecular-Pharmacology-at-Purdue-University"],
 ["May 2020","Gibson secures worldwide rights to the azaindenoisoquinolines and expands its Scientific Advisory Board for its cMYC programme","Business Wire","https://www.businesswire.com/news/home/20200520005015/en/Gibson-Oncology-Expands-its-Scientific-Advisory-Board-for-Novel-Oncology-cMYC-Program"],
 ["February 2020","BRCAness, SLFN11 and RB1 loss predict response to topoisomerase I inhibitors in triple-negative breast cancers","Science Translational Medicine","https://www.science.org/doi/10.1126/scitranslmed.aax2625"],
 ["February 2020","Gibson obtains exclusive commercial rights to novel anti-cancer drugs that inhibit the cMYC oncogene","Business Wire","https://www.businesswire.com/news/home/20200210005202/en/Gibson-Oncology-Obtains-Exclusive-Commercial-Rights-to-Novel-Anti-Cancer-Drugs-That-Inhibit-the-Undruggable-cMyc-Oncogene-a-Key-Driver-for-the-Majority-of-Cancers"],
 ["December 2018","LMP400 receives FDA Rare Pediatric Disease Designation for the treatment of Ewing sarcoma","BioSpace","https://www.biospace.com/gibson-s-novel-anti-cancer-drug-lmp-400-receives-fda-rare-pediatric-disease-designation-for-the-treatment-of-ewing-sarcoma"]];
/* The Phase 1 record behind the Phase 2 trial: Purdue University release, 25 February 2026; trial design from gibsononcology.com. */
var EVID=[
 ["Phase 1","Two NCI trials in more than 40 heavily pretreated, advanced-stage cancer patients; LMP744 was well tolerated"],
 ["Responses","Two patients’ tumours shrank by at least 30%, and 35% of patients had tumours that did not grow for up to 18 months"],
 ["Phase 2 design","About 40 patients with first-time recurrent glioblastoma; a one-hour infusion daily for five days, with brain tissue analysed before and after"],
 ["Endpoints","Tumour regression first; then progression-free survival and overall survival. The FDA says the trial may qualify as a registration trial"]];
var SHEETS=[];
