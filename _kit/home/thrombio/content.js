/* ThromBio: facts from thrombio.com.au (About, Leadership, Technology, Lead Indications, STARS, Co-STARS, Media),
   ClinicalTrials.gov NCT05363397 and NCT06813651. Real characters only, never HTML entities (DU).
   Programme rows: [compound, stage, title, sub, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["TBO-309","Phase II · STARS","Acute ischaemic stroke","Adjunct to thrombolysis","A prospective, multi-centre, open-label, dose-escalation Phase IIa study of TBO-309 given with standard reperfusion therapy, run by the Florey Institute with Neuroscience Trials Australia at stroke units in NSW, Victoria and South Australia. Nearly 30 patients had been treated by April 2026.",0,"",CTS,"ClinicalTrials.gov"],
 ["TBO-309","Phase II · Co-STARS","Tandem-occlusion stroke","With thrombectomy and carotid stenting","Sponsored by ThromBio and recruiting since October 2025: patients undergoing carotid artery stenting receive intravenous aspirin and TBO-309, with two doses tested in sequence in up to 78 patients to establish the optimal clinical dose.",0,"",CTC,"ClinicalTrials.gov"],
 ["TBO-309","Phase I · completed","Healthy volunteers","Two Phase I trials, as AZD6482","Taken through two Phase I trials by AstraZeneca as AZD6482, with an excellent safety profile. Further Phase I studies showed safety and efficacy in combination with other antiplatelet and anticoagulant therapies.",1,"Completed","",""]];
/* Why current stroke therapy falls short, from thrombio.com.au (Lead Indications) */
var EVID=[
 ["Time","Thrombolysis with rtPA can only be given within 4.5 hours of stroke onset"],
 ["Failed reperfusion","Recanalisation rates can be as low as 20% in large vessel occlusions"],
 ["Rethrombosis","Up to 50% of patients with atherosclerotic disease see the clot form again"],
 ["Bleeding","rtPA carries a 6–8% risk of symptomatic intracerebral haemorrhage"]];
var TEAM=[
 {g:"Board of Directors",name:"Shaun Jackson",title:"Founder and Director",sum:"Professor and head of the Thrombosis Research Group, whose laboratory discovered the role of PI3Kβ in disease-causing blood clots."},
 {g:"Board of Directors",name:"David Mazzo",title:"Independent Director",sum:""},
 {g:"Senior Management",name:"Peter Bush",title:"Chief Executive Officer",sum:""},
 {g:"Senior Management",name:"Simone Schoenwaelder",title:"Head, Biology",sum:""},
 {g:"Senior Management",name:"Simon Jackson",title:"Chief Information Officer",sum:""},
 {g:"Senior Management",name:"Dr Sundeep Dugar",title:"Drug Discovery",sum:""},
 {g:"Senior Management",name:"Amos Meltzer",title:"Corporate Development",sum:""}];
var MED="https://www.thrombio.com.au/media/";
var NEWS=[
 ["5 Jul 2026","Founder and Director Professor Shaun Jackson gives a keynote at a Gordon Research Conference","Gordon Research Conference",MED+"gordonresearch"],
 ["30 Apr 2026","NSW Premier visits John Hunter Hospital to celebrate landmark stroke trial results","NBN News",MED+"nbnnews"],
 ["29 Apr 2026","Newcastle at the centre of a world-first stroke breakthrough, as patients describe their recovery","Newcastle Herald",MED+"newcastleherald"],
 ["20 May 2025","ThromBio scientists publish a new blood-clotting mechanism in Nature","Nature",MED+"nature"]];
var SHEETS=[];
