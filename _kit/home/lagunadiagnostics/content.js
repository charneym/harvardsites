var FONTS=['500 1em "Archivo"','600 1em "Archivo"','400 1em "Lato"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var MAIL="mailto:info@lagunadiagnostics.com";
/* Programmes, from lagunadiagnostics.com (About, Partners, Investors) and the 28 Apr 2026 release (FDA Breakthrough Device
   Designation). Stage words only as the company states them. [indication, area, title, stage, detail, dim, tag] */
var PIPE=[
 ["Schizophrenia and bipolar I disorder","Differential diagnosis","mRNA biomarker blood test","FDA Breakthrough Device Designation","Aids clinicians in differentiating schizophrenia and bipolar I disorder in symptomatic patients, with an objective probability score from a venous blood sample, used alongside clinical assessment. Next: CAP/CLIA-validated laboratory-developed tests with a lab partner and a clinical validation trial for FDA approval.",0,"Designated April 2026"],
 ["Before a first psychotic episode","Early detection","Predictive use of the panel","Validation protocol in design","Young people with first-time psychosis typically show symptoms for more than a year before diagnosis (RAISE study, NIMH). The validation trial is being designed to test detection one to two years before a first psychotic episode.",1,"In design"],
 ["Clinically high-risk SZ and BD","Drug development","Companion diagnostics","Seeking pharmaceutical partners","Laguna is seeking biopharmaceutical partners to use its assays as companion diagnostics, or in clinical trials of new or existing therapeutics, as a first step to licensing the technology.",1,"Partnering"]];
/* pivotal clinical trial, as the company reports it (lagunadiagnostics.com, About and Partners) */
var EVID=[
 ["90 subjects","Enrolled in the SBIR-funded pivotal clinical trial, supported by NIMH"],
 ["Three time points","Blood drawn from each subject at three visits, testing that the markers are stable traits"],
 ["Over 95%","Sensitivity and selectivity for schizophrenia and bipolar disorder against healthy controls"],
 ["Two U.S. patents","Issued August 2023 and October 2025, protecting the tests"]];
/* lagunadiagnostics.com (Team). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Leadership",name:"Terry W. Osborn, PhD, MBA",title:"Co-founder, CEO & Head of Clinical Research",sum:"Over 38 years leading healthcare and life sciences companies; formerly COO of WaferGen BioSystems through its Nasdaq listing and turnaround CEO of KCAS Bioanalytical & Biomarker Services. Part of NIH’s MicroArray Quality Control project."},
 {g:"Leadership",name:"Marquis P. Vawter, PhD",title:"Co-founder & Chief Scientific Officer",sum:"Psychiatry Research Professor and Director of the Functional Genomics Laboratory at the University of California, Irvine, which he founded in 2000; a pioneer of transcriptomic studies of schizophrenia and bipolar disorder."},
 {g:"Leadership",name:"Richard G. Morris, PhD",title:"Vice President, Business Development",sum:"Former President of the Research Products Division at Sigma-Aldrich, President of CambridgeSoft and CEO of PharmaSeq; began at Dionex, where he founded Dionex KK in Osaka."},
 {g:"Leadership",name:"Michael R. Levin",title:"Chief Financial Officer & Partner",sum:"Financial executive for early-stage and growth companies; oversees NIH grant budgeting and compliance, and has raised capital from angel, venture and private equity investors."},
 {g:"Leadership",name:"Martin L. Osborn, CISSP, CSP",title:"CIO / CISO",sum:"Over fifty years across hardware design, software and systems management, with more than twelve years in information security for Fortune 500 companies and government agencies."}];
/* news, each linking to the release or the article */
var NEWS=[
 ["28 Apr 2026","FDA grants Breakthrough Device Designation to Laguna’s mRNA gene biomarker test","PR Newswire","https://prnewswire.com/news-releases/us-fda-grants-breakthrough-device-designation-to-laguna-diagnostics-mrna-gene-biomarker-test-to-aid-in-differentiation-of-schizophrenia-and-bipolar-i-disorder-302754918.html"],
 ["23 Oct 2025","Patent issued for rapid blood tests to differentiate schizophrenia and bipolar disorder","Psychiatric Times","https://www.psychiatrictimes.com/view/patent-issued-for-rapid-blood-tests-to-differentiate-schizophrenia-and-bipolar-disorder"],
 ["1 Oct 2025","Second U.S. patent awarded, expanding the IP portfolio","PR Newswire","https://prnewswire.com/news-releases/laguna-diagnostics-awarded-second-us-patent-for-rapid-blood-tests-to-differentiate-schizophrenia-and-bipolar-disorder-expanding-ip-portfolio-in-3b-market-302571889.html"],
 ["15 May 2018","Peer-reviewed study published in Molecular Neuropsychiatry","BioSpace","https://www.biospace.com/laguna-diagnostics-announces-publication-of-peer-reviewed-study-in-molecular-neuropsychiatry"]];
var SHEETS=[];
