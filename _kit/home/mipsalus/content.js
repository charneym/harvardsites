/* Programmes, from mipsalus.dk (Pipeline chart, New proprietary drug, News 2026) and ClinicalTrials.gov NCT07927608.
   Stage words only as the company states them. [code, area, indication, stage, detail, dim, link, linklabel, tag] */
var PIPE=[
 ["MPS1 · Phelimin","Phenylketonuria (PKU)","Phenylketonuria and other hyperphenylalaninemias","Phase 1 approved","Target: phenylalanine and phenylalanine-containing oligopeptides. A first-in-human study in healthy volunteers and adults with classical PKU at Rigshospitalet, Copenhagen, approved by the Danish Medicines Agency and opened for enrolment by the EMA.",0,"https://clinicaltrials.gov/study/NCT07927608","ClinicalTrials.gov","Clinical"],
 ["MPS2","Alkaptonuria · Tyrosinemia","Alkaptonuria (AKU) and tyrosinemia","Discovery","Target: tyrosine and tyrosine-containing oligopeptides.",1,"","","Discovery"],
 ["MPS3","Maple syrup urine disease","Maple syrup urine disease (MSUD)","Discovery","Target: leucine, valine and isoleucine.",1,"","","Discovery"],
 ["MPS4","Wilson’s disease","Wilson’s disease","Non-clinical","Target: copper ions.",1,"","","Non-clinical"]];
/* Milestones, as mipsalus.dk states them. */
var EVID=[
 ["Orphan Drug Designation","Phelimin holds Orphan Drug Designation from both the European Medicines Agency and the U.S. Food and Drug Administration"],
 ["June 2026","The Danish Medicines Agency approved MipSalus’ application to start a phase 1 first-in-human study of Phelimin"],
 ["November 2026","The EMA approved opening the trial for enrolment at Copenhagen University Hospital, for participants including people with PKU from Denmark, Sweden and Norway"],
 ["Scientific advice","The Danish medicines agency agreed to a very limited non-clinical plan and accepts blood Phe concentration as the clinical endpoint"]];
var PARTNERS=["Rigshospitalet","Aarhus University","Aarhus University Hospital","University of Liverpool","Smerud Medical Research","Innovation Fund Denmark"];
/* mipsalus.dk (Management, Board of Directors). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Management",name:"Nicolas O. Krogh",title:"Co-founder & Chief Executive Officer",sum:"Business development, entrepreneurship and intellectual property; formerly at Pharmexa, Plougman & Vingtoft and Rigshospitalet. MSc in Biochemistry, University of Copenhagen."},
 {g:"Management",name:"Klaus Gregorius, PhD",title:"Co-founder & Chief Scientific Officer",sum:"Led biochemistry development at PreciSense and worked as research scientist and project manager at Pharmexa; named inventor on 17 patent applications."},
 {g:"Management",name:"Amanda Andresen",title:"Chief Operating Officer",sum:"Joined MipSalus as a research scientist in 2018, became project manager in 2020 and COO in 2023. MSc in Pharmacy, University of Copenhagen."},
 {g:"Board of Directors",name:"Jens Peter Toft",title:"Chairman of the Board",sum:"25 years at Danske Bank, latterly Executive Vice President and Global Head of Corporate Finance, across IPOs, M&A and rights issues, including in biotech and pharma."},
 {g:"Board of Directors",name:"Claus Bayer",title:"Board Member",sum:"Corporate finance advisor and professional board member after an early career at McKinsey & Co in Copenhagen; MBA, Harvard Business School."}];
var NEWS=[
 ["17 November 2026","MipSalus advances its novel PKU therapy into the clinic","mipsalus.dk","https://www.mipsalus.dk/2026-2/"],
 ["10 November 2026","A first-in-human study of Phelimin in healthy volunteers and adults with PKU","ClinicalTrials.gov","https://clinicaltrials.gov/study/NCT07927608"],
 ["17 June 2026","Danish Medicines Agency approves the first-in-human study of Phelimin","mipsalus.dk","https://www.mipsalus.dk/2026-2/"],
 ["October 2024","MipSalus attends the 38th E.S.PKU Conference in Porto","mipsalus.dk","https://www.mipsalus.dk/2024-2/"],
 ["June 2024","An Innobooster from the Innovation Fund Denmark","mipsalus.dk","https://www.mipsalus.dk/2024-2/"]];
var SHEETS=[];
