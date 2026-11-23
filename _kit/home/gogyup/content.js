var FONTS=['500 1em "Poppins"','600 1em "Poppins"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:info@gogyup.com";
var RPT="https://reporter.nih.gov/project-details/11407698";
/* Where GogyUp works, from gogyup.com (At Work / In the Clinic / In Daily Life / For Adult Learners, Health Literacy,
   Individuals) and NIH RePORTER (2R44NR020340-02). [setting, area, title, sub, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["In the clinic","Health literacy","GogyUp Instant Assistant","NIH SBIR Phase II · NINR","Instant reading support for existing patient education materials, so adults with limited reading skills can better understand and follow guidance for type 2 diabetes self-management. Phase II takes it to a release candidate and a 300-patient pragmatic trial in community health clinics.",0,"",RPT,"NIH RePORTER"],
 ["At work","Employers","Learning Manager and GogyUp Reader","Manufacturing · healthcare · staffing","Your current training content, converted into interactive job aids, with comprehension checks and progress reports that verify what each employee understands, at a deeper level than group training or a standard LMS.",1,"Employers","",""],
 ["In daily life","Individuals","Snap Reader","Free app","Scan any document to hear and read it: text-to-speech with multiple voices and speeds, reader-friendly formatting, and tap any word for pronunciation, definition and word-by-word translation.",1,"Free download","",""],
 ["For adult learners","Educators","GogyUp Reader","Free app","Designed for emerging adult readers and preloaded with readings in beginning literacy, citizenship education and health literacy, with optional mini-lessons in phonics and phonemic awareness that adjust to each reader.",1,"Free download","",""]];
/* Milestones, as NIH RePORTER and the Star Tribune (2022) state them. */
var EVID=[
 ["NIH SBIR Phase II","Awarded in September 2026 by the National Institute of Nursing Research, 2R44NR020340"],
 ["300-patient trial","A pragmatic effectiveness-implementation hybrid trial of the GogyUp Instant Assistant in community health clinics"],
 ["Phase I complete","NIH SBIR Phase I, 2021 to 2024: in-the-moment reading assistance for adults with diabetes at community health centers"],
 ["University of Minnesota","The NIH-funded trial is run with the University of Minnesota"]];
/* Leadership, from the Star Tribune (2022) and NIH RePORTER. Text-only masthead; summaries state only what the sources state. */
var TEAM=[
 {g:"Founders",name:"Ned Zimmerman-Bence",title:"Co-Founder & CEO",sum:"Leads GogyUp, and is contact principal investigator on its NIH SBIR awards."},
 {g:"Founders",name:"Brian Lukis",title:"Co-Founder",sum:"One of the three co-founders named by the Star Tribune in 2022."},
 {g:"Founders",name:"David Radcliffe",title:"Co-Founder",sum:"One of the three co-founders named by the Star Tribune in 2022."},
 {g:"Research",name:"Nathan D. Shippee",title:"Principal Investigator",sum:"Principal investigator, with Ned Zimmerman-Bence, on the NIH SBIR project for adults with diabetes served at community health centers."}];
var NEWS=[
 ["September 2026","NIH SBIR Phase II: increasing health through in-the-moment reading assistance for adults with diabetes at community health centers","NIH RePORTER",RPT],
 ["2022","Minneapolis tech company helps adults with low literacy with work and health care instructions","Star Tribune","https://www.startribune.com/mpls-tech-company-helps-adults-with-low-literacy-with-work-health-care-instructions/600165844"],
 ["3 November 2021","Health literacy and type 2 diabetes mellitus prevention","GogyUp blog","https://gogyup.com/blog/ndam"],
 ["19 November 2021","The scalability of social enterprise","GogyUp blog","https://gogyup.com/blog/social-enterprise"]];
var SHEETS=[];
