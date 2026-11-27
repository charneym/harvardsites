var FONTS=['300 1em "Manrope"','400 1em "Manrope"','500 1em "Manrope"','600 1em "Manrope"','400 1em "Newsreader"','italic 400 1em "Newsreader"'];
var MAIL="info@gibsononcology.com";
var CEOMAIL="rriggs@gibsononcology.com";
var GO="https://gibsononcology.com/";
var PU="https://www.purdue.edu/newsroom/2026/Q1/gibson-oncology-nih-to-begin-phase-2-trials-of-lmp744-for-treatment-of-first-time-recurrent-glioblastoma/";
var IMG="img/";
var PHONE="305-674-7072";
/* Sources: the client's November 2026 investor deck and three letters of support (_kit/priority/gibson/materials.md),
   gibsononcology.com (home, Lead Program, Additional Programs, Leadership Team, Scientific Collaborators, News and Events),
   and the Purdue University release of 25 February 2026. Nothing here is invented; animal data are labelled preclinical. */

/* the four strategic partners (deck slide 11). [key, institution, place, logo file, logo height class, investigators, drug, tag, big result, result line, detail] */
var PARTNERS=[
 {k:"nih",inst:"National Institutes of Health",unit:"National Institute of Neurological Disorders and Stroke (NINDS)",logo:"logo-ninds.png",lw:1830,lhh:404,lh:"l-ninds",pi:"Dr. Sadhana Jackson",drug:"LMP744",
  stage:"Phase 2 under way · Preclinical PDX",big:"5 doses",res:"With just five doses of LMP744 as a single agent, glioma tumors were completely gone in patient-derived (PDX) animal models.",
  more:"The Phase 2 trial of LMP744 began in June 2026, with NINDS paying the majority of the clinical costs."},
 {k:"mayo",inst:"Mayo Clinic",unit:"Rochester, Minnesota",logo:"logo-mayo-clinic.svg",lw:1320,lhh:277,lh:"l-mayo",pi:"Dr. Terry Burns",drug:"LMP744",
  stage:"Investigator-sponsored trial",big:"Before recurrence",res:"A principal-investigator-sponsored trial treating patients with residual glioma, proactively, before the cancer comes back.",
  more:"A paradigm shift from the usual approach of waiting for the cancer to recur."},
 {k:"duke",inst:"Duke University",unit:"The Preston Robert Tisch Brain Tumor Center (adults)",logo:"logo-duke-tisch.svg",lw:211,lhh:50,lh:"l-duke",pi:"Drs. Henry Friedman and Matthew Waitkus",drug:"LMP400",
  stage:"Preclinical PDX · Phase 2 planned",big:"1 week",res:"Resistant grade 3 astrocytomas showed major tumor regression in a PDX model within one week of LMP400 as a single agent.",
  more:"Duke has filed a $15 million SPORE grant to advance LMP400 in a Phase 2 trial in resistant grade 3 astrocytomas, low and high grade."},
 {k:"cnmc",inst:"Children’s National",unit:"Washington, D.C. (pediatric)",logo:"logo-childrens-national.svg",lw:189,lhh:24,lh:"l-cn",pi:"Drs. Roger Packer and Yanxin Pei",drug:"LMP400",
  stage:"Preclinical PDX",big:"7 of 8",res:"Resistant tumors completely gone within one week of LMP400 as a single agent, in grade 3 pediatric medulloblastoma PDX models. The eighth regressed significantly.",
  more:"Children’s National wants to work with Duke on LMP400 in pediatric patients."}];

/* letters of support: approved excerpts, verbatim (materials.md) */
var LETTERS=[
 {k:"friedman",q:["We have now reviewed the data on LMP 400 and we are impressed with the multi-institutional preclinical studies on multiple brain tumors done with LMP 400. The fact that the FDA gave Gibson a wider ODD coverage than Gibson asked for is very impressive. The potential to be an oral agent puts it in a special class."],
  q2:"We would like to explore becoming the primary collaborator for Gibson for LMP 400 clinical studies on brain tumors.",
  h:"In a special class.",hl:["we are impressed","wider ODD coverage than Gibson asked for","puts it in a special class"],
  name:"Henry S. Friedman, MD",title:"James B. Powell, Jr. Professor of Neuro-Oncology; Chief, Division of Medical Neuro-Oncology; Deputy Director, The Preston Robert Tisch Brain Tumor Center at Duke",date:"21 September 2026"},
 {k:"waitkus",q:["We have observed strong antitumor responses to LMP400 in a patient-derived model of IDH-mutant astrocytoma that is otherwise relatively resistant to temozolomide and IDH inhibitors … LMP400 induced tumor regression in subcutaneous xenografts, including cases that regressed to immeasurable levels for at least one week."],
  q2:"Our findings in experimental model systems provide a mechanistically grounded preclinical rationale for continued development of LMP400 in malignant gliomas, particularly IDH-mutant astrocytomas and other molecularly defined gliomas characterized by elevated DNA replication stress.",
  h:"Strong antitumor responses.",hl:["strong antitumor responses","resistant to temozolomide and IDH inhibitors","regressed to immeasurable levels"],
  name:"Matthew S. Waitkus, PhD",title:"Assistant Professor, Department of Neurosurgery, The Preston Robert Tisch Brain Tumor Center, Duke University School of Medicine",date:"27 September 2026"},
 {k:"pei",q:["LMP400 demonstrated excellent brain tumor penetration and induced complete tumor regression in both models. In vitro studies showed a marked reduction in MYC expression following treatment, indicating that MYC may present a key therapeutic target of this compound."],
  q2:"These findings highlight the significant potential of LMP400 as a novel therapeutic candidate for pediatric brain tumors, an area with substantial unmet medical need.",
  h:"Complete tumor regression.",hl:["excellent brain tumor penetration","complete tumor regression","key therapeutic target"],
  name:"Yanxin Pei, PhD",title:"Associate Professor, George Washington University; Principal Investigator, Center for Cancer and Immunology Research, Children’s National Research Institute",date:"24 September 2026"}];

/* pipeline (deck + gibsononcology.com). stage: 0 preclinical, 1 phase 1, 2 phase 2, 3 phase 3; reach = how far the bar runs (0..4), live = the phase now under way */
var PIPE=[
 {drug:"LMP744",route:"Intravenous",ind:"Glioma brain tumors: first-time recurrent glioblastoma; residual glioma",reach:2.55,live:"Phase 2",
  who:"NINDS · NIH (Phase 2, since June 2026) · Mayo Clinic (investigator-sponsored trial)",
  txt:"Crosses the blood-brain barrier easily, is not pumped back out by its efflux transporters, and stays in the brain for up to 24 hours after a single dose. FDA Orphan Drug Designation for glioma, 2024. NINDS is paying the majority of the Phase 2 clinical costs.",
  img:"struct-lmp744.webp"},
 {drug:"LMP400",route:"Oral and intravenous",ind:"Resistant grade 3 astrocytomas (adult); pediatric brain tumors; Ewing’s sarcoma",reach:1.9,live:"Phase 2 planned",
  who:"Duke Tisch Brain Tumor Center ($15M SPORE grant filed) · Children’s National",
  txt:"Phase 1 complete at the National Cancer Institute. Less easily pumped out of the cancer cell than LMP744, with brain levels held for over 24 hours, and with the potential to be given by mouth. Duke plans a Phase 2 trial in resistant grade 3 astrocytomas.",
  img:"struct-lmp400.webp"},
 {drug:"Azas",route:"Next generation",ind:"Azaindenoisoquinolines: over 700 rationally designed compounds",reach:.85,live:"Preclinical",
  who:"Licensed worldwide from Purdue University and the National Cancer Institute",
  txt:"The next generation of the class, among them G-103, designed for oral administration. Over 700 rationally designed compounds, with intellectual property running beyond 2038.",img:null}];
var STAGES=["Preclinical","Phase 1","Phase 2","Phase 3"];

/* the pipeline as gibsononcology.com/our-pipeline shows it (six programmes), brought up to date with the November 2026 deck.
   reach runs 0..3 across Preclinical / Phase 1 / Phase 2. Conflicts between site and deck are logged in BUILD_NOTES.md. */
var PROG_STAGES=["Preclinical","Phase 1","Phase 2"];
var PROG=[
 {g:"Brain tumors",code:"DC-101",drug:"LMP744",ind:"Glioblastoma (first-time recurrent); residual glioma",reach:2.5,live:"Phase 2",
  note:"NIH (NINDS) Phase 2 trial under way since June 2026, with NINDS paying the majority of clinical costs. Mayo Clinic: investigator-sponsored trial in residual glioma."},
 {g:"Brain tumors",code:"DC-103",drug:"LMP400",ind:"Grade 3 and grade 4 astrocytoma",reach:2,live:"Phase 2 planned",
  note:"Phase 1 complete. Duke has filed a $15 million SPORE grant for a Phase 2 trial in resistant grade 3 astrocytomas; Children’s National is studying pediatric brain tumors."},
 {g:"Other cancers",code:"DC-102",drug:"LMP744",ind:"Relapsed solid tumors, lymphoma",reach:2,live:"Phase 1 complete",
  note:"NCI Phase 1: two partial responses, and tumors held stable for up to 18 months in 35% of patients."},
 {g:"Other cancers",code:"DC-104",drug:"LMP400",ind:"Relapsed solid tumors, lymphoma",reach:2,live:"Phase 1 complete",
  note:"A PTEN endometrial PDX study is done. FDA Rare Pediatric Disease Designation for Ewing’s sarcoma."},
 {g:"Other cancers",code:"DC-105",drug:"LMP776",ind:"Relapsed solid tumors, lymphoma",reach:2,live:"Phase 1 complete",
  note:"Indimitecan, the third licensed indenoisoquinoline, through NCI Phase 1."},
 {g:"Other cancers",code:"DC-106",drug:"G-103",ind:"The Azas: hematologic and solid tumors",reach:1,live:"Preclinical",
  note:"Oral administration. One of over 700 rationally designed Aza compounds, protected beyond 2038."}];

/* gibsononcology.com/brain-cancer: the rationale, in their seven requirements */
var RATIONALE=[
 ["It must cross the blood-brain barrier","Both LMP744 and LMP400 easily cross the barrier, are not pumped out by drug transporters, and accumulate in the brain for up to 24 hours after a single dose."],
 ["Its doses must be proven safe in trials","LMP744 and LMP400 have been shown to be safe in multiple Phase 1 trials in solid tumors and lymphomas."],
 ["Its mechanisms must matter in brain cancer","It reduces overexpression of the cMYC oncogene and inhibits TOPO 1, both well-known targets in brain cancer."],
 ["Its mechanisms must be impressive","Shown to the FDA, they won Gibson an orphan drug designation broader than the company had requested."],
 ["Strong preclinical activity in glioblastoma","Extensive NIH studies of LMP744 led to the Phase 2 trial in patients whose glioblastoma has failed one drug."],
 ["Effect across several brain tumors","Beyond glioblastoma, NIH studies have shown evidence of effect in multiple other brain tumors."],
 ["Independent confirmation","Duke University has shown that LMP400 slows tumor growth in IDH-mutant astrocytoma models."]];

/* gibsononcology.com/news-and-events-2: "Breaking news" */
var BREAKING=[
 ["NINDS · Phase 2 trial with LMP744","The NINDS has begun treating patients in the Phase 2 study of LMP744 in glioblastoma patients who have failed their initial drug. The first patient has completed the first course of treatment without complications."],
 ["Mayo Clinic · Residual tumor reduction","Mayo Clinic is beginning a trial of LMP744 to reduce residual tumor in glioblastoma patients in a period of temporary stability after radiation and temozolomide, to decrease the likelihood of recurrence."],
 ["Duke University · Preclinical studies of LMP400","The Preston Robert Tisch Brain Tumor Center has run multiple PDX studies of LMP400 in ATRX-deficient glioblastoma, leading to advanced animal studies designed to support new clinical studies in brain tumors."]];

/* milestones: dated items from their news page and the November 2026 deck */
var MILESTONES=[
 ["Sep 2018","Gibson acquires three clinical non-camptothecin TOPO 1 drugs from Linus Oncology"],
 ["Dec 2018","FDA Rare Pediatric Disease Designation for LMP400 in Ewing sarcoma"],
 ["Feb 2020","Exclusive commercial rights to the cMYC-inhibiting indenoisoquinolines"],
 ["May 2020","Worldwide rights to the azaindenoisoquinolines from Purdue and the NCI"],
 ["Oct 2023","FDA Orphan Drug Designation for LMP400 in glioma"],
 ["Oct 2024","FDA Orphan Drug Designation for LMP744 in glioma"],
 ["Feb 2026","Gibson and the NIH announce the Phase 2 trial of LMP744"],
 ["Jun 2026","The NINDS Phase 2 trial of LMP744 begins, NINDS paying most clinical costs"],
 ["Sep 2026","Letters of support from Duke and Children’s National"],
 ["Oct 2026","Phase 2 update at the 28th Annual Blood-Brain Barrier Consortium"]];


/* regulatory and IP (deck slide 12) */
var DESIG=[
 ["FDA Orphan Drug Designation","LMP744 and LMP400, for all glioma brain tumors. Duke: the FDA gave Gibson “a wider ODD coverage than Gibson asked for.”"],
 ["FDA Rare Pediatric Disease Designation","LMP400, for Ewing’s sarcoma."],
 ["Patents beyond 2041","U.S. and international composition-of-matter patents for LMP744 and LMP400, with new composition-of-matter patents filed."],
 ["700+ compounds, IP beyond 2038","The next-generation azaindenoisoquinolines (Azas), with U.S. and international patents filed and oral administration possible."]];

/* market and transactions (deck slides 3, 6, 9) */
var MARKET=[["$3.2B","Glioblastoma market, 2025"],["$6.9B","Projected by 2035 (CAGR 7.8%)"],["3.27","U.S. cases per 100,000 (age-adjusted)"],["6–10 mo","Typical median survival in recurrent disease"]];
var DEALS=[["Feb 2026","Servier","Day One","$2.5B"],["Mar 2025","Jazz","Chimerix","$935M"],["Dec 2020","Servier","Agios","$1.8B upfront + $200M milestone"]];
var COMPETE=[["Servier","Vorasidenib","Specific mutation · smaller market"],["Day One","Tovorafenib","Specific mutation · smaller market"],["Chimerix (Jazz)","Dordaviprone","Specific mutation · smaller market"],["Novocure","TTFields (device)","Device"],["Gibson Oncology","LMP744 and LMP400","All glioma brain tumors · larger market"]];
var REASONS=[
 ["Two commercially validated targets","TOPO 1 plus reduction of cMYC overexpression, the driver of about 80% of human cancers, in one molecule."],
 ["Proof from premier institutions","NIH (NINDS), Mayo Clinic, Duke and Children’s National are deploying their own resources on Gibson’s drugs."],
 ["Orphan and Rare Pediatric designations","Orphan Drug Designation for LMP744 and LMP400 in all gliomas; Rare Pediatric Disease Designation for LMP400 in Ewing’s sarcoma."],
 ["Long-lived intellectual property","LMP744 and LMP400 beyond 2041; over 700 Aza compounds beyond 2038."],
 ["A very low burn rate","Working with NINDS, Duke and Children’s National keeps Gibson’s annual spend very low."],
 ["A quick path to market","Brain tumors first, with low competition; then doctors can use the drugs in other cancers as merited."]];

/* people (gibsononcology.com, Leadership Team and Board of Directors; Scientific Collaborators). Portraits are theirs. */
var TEAM=[
 {name:"Mark C. Rogers, MD, MBA",title:"Founder and Executive Chair",b:1,img:"p-rogers.webp"},
 {name:"Randall B. Riggs",title:"President and Chief Executive Officer",b:1,img:"p-riggs.webp"},
 {name:"Theodore C. Solomon",title:"Founder and Chief Financial Officer",b:1,img:"p-tsolomon.webp"},
 {name:"Elizabeth London Rogers, MD",title:"Founder and Chief Operations Officer",b:1,img:"p-erogers.webp"},
 {name:"Clifford T. Solomon, MD",title:"Founder and Chief Medical Officer; Clinical Professor, UM Neurosurgery",b:1,img:"p-csolomon.webp"},
 {name:"Mark S. Cushman, PhD, PharmD",title:"Founder and Chief Scientific Officer; Distinguished Professor Emeritus, Purdue",b:1,img:"p-cushman.webp"},
 {name:"Mark D. Baganz, MD",title:"Independent Director",b:1,img:"p-baganz.webp"}];
var COLLAB=[
 {name:"Mark S. Cushman, PhD, PharmD",title:"Founder and Chief Scientific Officer; Distinguished Professor of Medicinal Chemistry, Purdue University",img:"p-cushman.webp"},
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
 ["October 15, 2026","Dr. Sadhana Jackson presents an update on the NINDS Phase 2 trial of LMP744, a novel cMYC / TOPO 1 inhibitor, at the 28th Annual Blood-Brain Barrier Consortium","Conference details","https://cmetracker.net/PPMC/Publisher?page=pubOpen#/featured"],
 ["February 25, 2026","Gibson Oncology and NIH begin Phase 2 trials of LMP744 in first-time recurrent glioblastoma","Purdue University",PU],
 ["October 11, 2024","FDA grants orphan drug designation to LMP744 for glioma","OncLive","https://www.onclive.com/view/fda-grants-orphan-drug-designation-to-lmp744-for-glioma"],
 ["July 15, 2024","2024 Topoisomerases in Biology and Medicine Conference","FIU","https://case.fiu.edu/news-events/topoisomerases-in-biology-and-medicine-conference/"],
 ["October 2023","FDA grants orphan drug designation to LMP400 (indotecan) for the treatment of glioma","NCI Center for Cancer Research","https://ccr.cancer.gov/news/article/fda-grants-orphan-drug-designation-to-indotecan-for-the-treatment-of-glioma"],
 ["September 19, 2023","Powerful drug combination kills glioblastoma tumors containing a unique genetic makeup","NCI Center for Cancer Research","https://ccr.cancer.gov/neuro-oncology-branch/powerful-drug-combination-kills-glioblastoma-tumors-containing-a-unique-genetic-makeup"],
 ["April 22, 2021","Gibson congratulates Dr. Danzhou Yang as Distinguished Professor of Medicinal Chemistry and Molecular Pharmacology at Purdue","Business Wire","https://www.businesswire.com/news/home/20210422005301/en/Gibson-Oncology-Congratulates-Dr.-Danzhou-Yang-as-Distinguished-Professor-of-Medicinal-Chemistry-and-Molecular-Pharmacology-at-Purdue-University"],
 ["May 20, 2020","Gibson secures worldwide rights to 56 azaindenoisoquinolines and expands its Scientific Advisory Board for its cMYC programme","Business Wire","https://www.businesswire.com/news/home/20200520005015/en/Gibson-Oncology-Expands-its-Scientific-Advisory-Board-for-Novel-Oncology-cMYC-Program"],
 ["February 19, 2020","BRCAness, SLFN11 and RB1 loss predict response to topoisomerase I inhibitors in triple-negative breast cancers","Science Translational Medicine","https://www.science.org/doi/10.1126/scitranslmed.aax2625"],
 ["February 10, 2020","Gibson obtains exclusive commercial rights to novel anti-cancer drugs that inhibit the cMYC oncogene","Business Wire","https://www.businesswire.com/news/home/20200210005202/en/Gibson-Oncology-Obtains-Exclusive-Commercial-Rights-to-Novel-Anti-Cancer-Drugs-That-Inhibit-the-Undruggable-cMyc-Oncogene-a-Key-Driver-for-the-Majority-of-Cancers"],
 ["December 12, 2018","LMP400 receives FDA Rare Pediatric Disease Designation for the treatment of Ewing sarcoma","BioSpace","https://www.biospace.com/gibson-s-novel-anti-cancer-drug-lmp-400-receives-fda-rare-pediatric-disease-designation-for-the-treatment-of-ewing-sarcoma"],
 ["October 1, 2018","The NCI reports anti-cancer efficacy and safety of Gibson’s indenoisoquinolines in 84 dogs with advanced lymphoma","BioSpace","https://www.biospace.com/the-national-cancer-institute-nci-demonstrates-anti-cancer-efficacy-and-safety-of-gibson-s-novel-class-of-indenoisoquinolines-in-advanced-canine-lymphoma"],
 ["September 6, 2018","Gibson acquires three clinical non-camptothecin TOPO 1 drugs from Linus Oncology","BioSpace","https://www.biospace.com/gibson-oncology-llc-acquires-novel-anti-cancer-drugs-from-linus-oncology"]];
/* The Phase 1 record behind the Phase 2 trial: Purdue University release, 25 February 2026; trial design from gibsononcology.com. */
var EVID=[
 ["Phase 1","Two NCI trials in more than 40 heavily pretreated, advanced-stage cancer patients; LMP744 was well tolerated"],
 ["Responses","Two patients’ tumors shrank by at least 30%, and 35% of patients had tumors that did not grow for up to 18 months"],
 ["Phase 2 design","About 40 patients with first-time recurrent glioblastoma; a one-hour infusion daily for five days, with brain tissue analysed before and after"],
 ["Endpoints","Tumor regression first; then progression-free survival and overall survival. The FDA says the trial may qualify as a registration trial"]];
var SHEETS=[];
