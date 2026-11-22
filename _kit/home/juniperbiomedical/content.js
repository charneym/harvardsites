var FONTS=['400 1em "EB Garamond"','italic 400 1em "EB Garamond"','500 1em "EB Garamond"','italic 500 1em "EB Garamond"','400 1em "Lato"','700 1em "Lato"'];
var MAIL="info@juniperbiomedical.com";
var NB="https://www.juniperbiomedical.com/news";
/* conditions, from Juniper's own platform chart and Solutions page. [area, condition, detail, status, first] */
var COND=[
 ["Urology","Mixed urinary incontinence","The first product: a long-term precision therapy for MUI, which combines stress and urge symptoms and affects nearly 1 in 4 women. No advanced solution on the market treats both.","First product",1],
 ["Urology","Stress urinary incontinence","Designed to restore normal neuromuscular function to damaged pelvic floor tissue, with personalised stimulation.","Platform",0],
 ["Urology","Overactive bladder and urge incontinence","Designed to calm bladder overactivity and restore normal urinary function.","Platform",0],
 ["Colorectal","Fecal incontinence","The same precise, low-power platform, aimed at an under-treated patient population.","Platform",0],
 ["Pelvic health","Chronic pelvic pain","Selective stimulation of a distal target nerve, without energy spreading into adjacent tissue.","Platform",0],
 ["Sexual health","Erectile and female sexual dysfunction","Further applications of the platform for under-treated pelvic health conditions in men and women.","Platform",0]];
/* juniperbiomedical.com, About: Executive Leadership; Board (January 2026 release). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Executive leadership",name:"David N. Constantine",title:"Co-Founder and Chief Executive Officer",sum:"Founded the company in 2019 with Mario Romero-Ortega; presented at AdvaMed’s MedTech Conference keynote stage as a MedTech Innovator finalist."},
 {g:"Executive leadership",name:"Mario Romero-Ortega, PhD",title:"Co-Founder and Chief Science Officer",sum:"Biomedical engineer; presented Juniper’s preclinical research at the American Urological Association annual meeting."},
 {g:"Executive leadership",name:"Gregory Martin, PhD",title:"Chief Technology Officer",sum:""},
 {g:"Executive leadership",name:"Jayme Coates, MS, MBA",title:"Chief Operating Officer",sum:""},
 {g:"Executive leadership",name:"Jessica DeLong, MD, FACS",title:"Chief Medical Officer",sum:"Urologist; surgery internship and urology residency at the Lahey Clinic, Massachusetts."},
 {g:"Executive leadership",name:"Robert Swain, PhD",title:"Clinical and Regulatory Affairs",sum:""},
 {g:"Board",name:"Frank Fischer",title:"Board of Directors",sum:"Founder and chair of NeuroPace; formerly CEO of Heartport and Ventritex."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["January 2026","Juniper wins the Phase 3 NIH SPARC Neuromod Prize and welcomes Frank Fischer to its board","Business Wire","https://www.businesswire.com/news/home/20260120181799/en/CORRECTING-and-REPLACING-Juniper-Biomedical-Wins-Neuromod-Prize-and-Welcomes-Frank-Fischer-to-Board-of-Directors"],
 ["October 2025","Neuromod Prize Phase 3 progress presented at HLTH 2025","Juniper news",NB],
 ["May 2025","Precision neuromodulation at DeviceTalks Boston, MedTech Innovator Open Rounds","Juniper news",NB],
 ["April 2025","Preclinical research on urinary incontinence presented at the AUA annual meeting","Juniper news",NB],
 ["November 2024","Pioneering neuromodulation for pelvic health","LSI, The Memo","https://lifesciencemarketresearch.com/insights/the-memo-juniper-biomedical-pioneering-neuromodulation-for-pelvic-health"],
 ["April 2024","Seed funding to accelerate growth and innovation in pelvic health disorders","Business Wire","https://www.businesswire.com/news/home/20240402986983/en/Juniper-Biomedical-Secures-Seed-Funding-to-Accelerate-Growth-and-Innovation-in-Pelvic-Health-Disorders."]];
var SHEETS=[];
