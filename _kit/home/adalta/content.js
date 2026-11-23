/* Programmes, from adalta.com.au (Corporate overview, East to West strategy and product pipeline, AD-214, Fibrosis) and the
   company's ASX announcements (1 Apr, 29 Apr, 25 May, 5 Aug 2026). Stage words only as the company states them.
   The legacy anti-infective asset is not shown on this concept home page. [indication, area, title, stage, detail, dim, tag] */
var PIPE=[
 ["Mesothelioma","Mesothelin CAR-T","EW-001 (formerly BZDS1901)","Investigator-initiated trials in China · Australian Phase 1 planned","A first-in-class autologous CAR-T therapy targeting mesothelin, with investigator-initiated trials run by Shanghai Cell Therapy Group in China. Manufacturing is transferring to Cell Therapies Pty Ltd in Australia, and a pre-IND meeting with the US FDA is being prepared, both anticipated in the second half of 2026.",0,"Lead programme"],
 ["Lung, colorectal, gastric","Solid-tumour CAR-T","“East to West” pipeline","Under exclusive negotiation","An initial pipeline of CAR-T assets from Asian originators, targeting lung, colorectal, gastric and other solid tumours with advanced CAR-T technologies.",0,"In-licensing"],
 ["IPF and kidney fibrosis","i-body Fc-fusion","AD-214","Two Phase I studies complete","A first-in-class anti-CXCR4 i-body fusion protein, effective in multiple animal models of fibrosis, with FDA Orphan Drug Designation in idiopathic pulmonary fibrosis. Available for partnering.",1,"Available for partnering"]];
/* EW-001 investigator-initiated trial in advanced mesothelioma (ASX announcements 1 April and 5 August 2026) */
var EVID=[
 ["50% response rate","Five of the ten patients treated at higher doses of the current generation saw tumour shrinkage of more than 30%"],
 ["20% complete response","Tumours became undetectable in two of those ten patients, where published second-line complete response rates are typically 0%"],
 ["Two years","The first complete responder remains free of cancer recurrence two years after a single infusion"],
 ["Under two days","The Gen 2 manufacturing process, shorter and lower cost, at 5–10% of the Gen 1 cell dose"]];
/* adalta.com.au (Management Team, Board). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Management",name:"Tim Oldham, PhD",title:"CEO & Managing Director",sum:"More than 20 years in life sciences business development, alliance management and commercialisation across Europe, Asia and Australia, focused on biologics and cell and gene therapies. CEO since October 2019."},
 {g:"Management",name:"Kevin Lynch, MBBS",title:"Consultant Chief Medical Officer, Oncology",sum:"An industry physician with more than 25 years across clinical development, regulatory and reimbursement approval and post-registration medical activities."},
 {g:"Management",name:"Angus Tester, PhD",title:"Senior Director, Operations",sum:"Over 20 years in biotechnology, previously at ASX-listed Opthea, Nexvet, Telix and Exopharm, in product development and project management."},
 {g:"Management",name:"Janette Dixon, DBA",title:"Head of Business Development",sum:"More than 25 years as a chief executive and consultant, partnering pharmaceutical assets across Asia Pacific, including China, North America and Europe."},
 {g:"Management",name:"Darryn Bampton",title:"Director, Clinical and Regulatory Operations",sum:"28 years in regulatory affairs and clinical development across small biotechnology and large pharmaceutical companies; Director of Bampton Regulatory Services since 2012."},
 {g:"Management",name:"Andrew O’Brien",title:"Head of Corporate Development",sum:"Entrepreneur, commercialisation specialist and venture capitalist focused on Asia and Australasia; co-founder and Managing Director of vivaLAB and Grannus Securities."},
 {g:"Management",name:"Michael Foley, PhD",title:"Founding Chief Scientist",sum:"The founding scientist of AdAlta and a key inventor of AD-114, the i-body behind AD-214; an internationally recognised leader in phage display."},
 {g:"Board",name:"Paul MacLeman",title:"Chairman",sum:"Over 25 years across veterinary practice, pharmaceutical development and manufacturing, biotechnology, diagnostics and finance."},
 {g:"Board",name:"Michelle Burke",title:"Non-executive Director",sum:"Over 30 years in healthcare and life sciences; Non-executive Chair of Cell Therapies Pty Ltd and a member of the Pharmaceutical Benefits Advisory Committee."},
 {g:"Board",name:"Fadi Diab",title:"Non-executive Director",sum:"More than 10 years across financial institutions, technology transformation, operations and investor relations."},
 {g:"Board",name:"Cameron Jones",title:"Company Secretary & CFO",sum:"Chartered Accountant responsible for ASIC reporting, ASX compliance, annual reporting and shareholder meetings, and Chief Financial Officer of AdAlta."}];
/* ASX announcements, each linking to the PDF on announcements.asx.com.au */
var NEWS=[
 ["2 Sep 2026","Partner to provide BZDS1901 CAR-T to advanced mesothelioma patients under a special access scheme in China","20260902/pdf/073m7zkv9p1mn6.pdf"],
 ["10 Aug 2026","Ongoing investigator-initiated trial cohort survival in the EW-001 mesothelioma study","20260810/pdf/072l8mb358tqrb.pdf"],
 ["5 Aug 2026","Two-year survival milestone in the EW-001 mesothelioma study","20260805/pdf/072fjx713n8gbs.pdf"],
 ["25 May 2026","Sector-leading advisors engaged to support US FDA engagement for BZDS1901","20260525/pdf/06zxgfjf8j64xv.pdf"],
 ["4 May 2026","Strategic placement raises A$2.5 million to advance BZDS1901","20260504/pdf/06z6bk1dlp5zb6.pdf"],
 ["29 Apr 2026","First Australian manufacturing work order executed for BZDS1901","20260429/pdf/06yz3msqxy0fys.pdf"]];
var SHEETS=[];
