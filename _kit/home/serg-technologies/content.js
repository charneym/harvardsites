var FONTS=['300 1em "Inter Tight"','400 1em "Inter Tight"','500 1em "Inter Tight"','italic 300 1em "Inter Tight"','400 1em "Inter"','500 1em "Inter"'];
var WEB="https://www.sergtechnologies.com/";
var MAIL="info@sergtechnologies.com";
var IUK="https://iuk-business-connect.org.uk/?p=120655";
/* facts: sergtechnologies.com (home, team, insights, blog feed), Innovate UK Business Connect 2025-10-15 (Biomedical Catalyst, SERG-MED),
   HRA research summary SERG ONE DBS (REC 24/YH/0216), Imperial College London news 2022-07-12; all fetched 2026-11-20 */
var PILLARS=[["Symptom tracking","Precision scores","Rate symptom assessments with objective scores, monitor symptoms at home and measure their fluctuations."],
 ["DBS programming","StimSense","Symptom rating built into deep brain stimulation programming, to accelerate every session."],
 ["Medication","Medication response","Measure the response to medication, then calibrate dosage and schedule to the patient."],
 ["Therapies","Programmes that show results","Plan and execute programmes with pre and post effectiveness analysis, a complement to the existing pillars of care."]];
var RESULTS=[["Significant time savings","Under 90 minutes","StimSense enables full automatic programming in under 90 minutes, where one stimulator can take 4 to 5 hours today."],
 ["Maintained clinical outcomes","Standard of care","Outcomes with automatic programming were comparable to the standard of care."],
 ["High clinician agreement","r = 0.74","Reliable score prediction: a median correlation of 0.74 with the specialist’s own scoring."]];
var PRODUCTS=[
 ["Wearable sensing","2× IMU-MMG wearable","Proprietary wearables: inertial measurement units for motion capture and two mechanomyogram channels for muscle activity, with wireless streaming to the application and on-board SD storage for out-of-clinic recording.",""],
 ["Software","Development software","Signal acquisition, device management, assessment selection and clinician score annotations, with video conferencing for remote testing, cloud data storage and AI-enabled testing.",""],
 ["DBS programming","StimSense","A physiological sensing suite, proprietary biomarkers and AI algorithms calibrated on specialist scoring. Fast, lightweight algorithms run on edge devices, built for integration, scoring tremor, bradykinesia and rigidity at high resolution.",""],
 ["Innovate UK","SERG-MED","A Parkinson’s ecosystem built on a smart wearable platform that supports remote, timely medication titration, funded through the Innovate UK Biomedical Catalyst.",IUK]];
var TEAM=[
 {g:"Leadership",name:"Dr Samuel Wilson",title:"CEO",sum:"Co-founder; SERG grew out of his research with Prof. Ravi Vaidyanathan at Imperial College London."},
 {g:"Leadership",name:"Diana Darko",title:"COO",sum:""},
 {g:"Leadership",name:"Ewan Phillips",title:"CFO",sum:""},
 {g:"Leadership",name:"Dr Christos Kapatos",title:"CBO",sum:"Co-founder."},
 {g:"Engineering and clinical",name:"Dr Thomas Martineau",title:"Lead Machine Learning Engineer",sum:""},
 {g:"Engineering and clinical",name:"Kostas Dalakas",title:"Lead Hardware Engineer",sum:""},
 {g:"Engineering and clinical",name:"Dr Panipat Wattanasiri",title:"Machine Learning Engineer",sum:""},
 {g:"Engineering and clinical",name:"Panagiotis Papageorgiou",title:"Machine Learning Engineer",sum:""},
 {g:"Engineering and clinical",name:"Karl Tiemann",title:"Senior Engineer",sum:""},
 {g:"Engineering and clinical",name:"Chuni Wang",title:"UX/UI Designer",sum:""},
 {g:"Engineering and clinical",name:"Norman Madeja",title:"Clinical Research Nurse",sum:""},
 {g:"Engineering and clinical",name:"Netaly Gross",title:"Neurological Physiotherapist",sum:""},
 {g:"Engineering and clinical",name:"Prof. Laurie Rowe",title:"Regulatory Consultant",sum:"Red Medtech"},
 {g:"Advisory board",name:"Prof. Francesca Morgante",title:"Professor of Neurology, Eleanor Peel Chair",sum:"City St George’s, University of London"},
 {g:"Advisory board",name:"Dr Fahd Baig",title:"Consultant Neurologist",sum:"St George’s Hospital"},
 {g:"Advisory board",name:"Prof. Ravi Vaidyanathan",title:"Professor in Biomechatronics",sum:"Imperial College London"},
 {g:"Advisory board",name:"Prof. Dario Farina",title:"Chair in Neurorehabilitation Engineering",sum:"Imperial College London"},
 {g:"Advisory board",name:"Dr Yen Tai",title:"Consultant Neurologist",sum:"Charing Cross Hospital"}];
var NEWS=[
 ["Mar 2026","StimSense at the 3rd Expert Summit on the Future of DBS, Würzburg, Germany","SERG Insights","https://www.sergtechnologies.com/post/stimsense-at-the-3rd-expert-summit-on-the-future-of-dbs-w%C3%BCrzburg-germany"],
 ["Feb 2026","Parkinson’s monitoring: why is it so far behind?","SERG Insights","https://www.sergtechnologies.com/post/parkinson-s-monitoring-why-is-it-so-far-behind"],
 ["Oct 2025","Innovate UK Biomedical Catalyst backs SERG-MED, a smart wearable platform for remote medication titration","Innovate UK Business Connect",IUK],
 ["Jul 2025","Where real-time data fits in the future of deep brain stimulation","SERG Insights","https://www.sergtechnologies.com/post/where-real-time-data-fits-in-the-future-of-deep-brain-stimulation"]];
var SHEETS=[];
