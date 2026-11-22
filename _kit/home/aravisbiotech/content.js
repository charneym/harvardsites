var FONTS=['300 1em "Hanken Grotesk"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"','400 1em "Instrument Serif"','italic 400 1em "Instrument Serif"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
/* best published address for the company's lead: Jeffrey N. Anker's Clemson profile (clemson.edu/science/.../profiles/janker) */
var MAIL="janker@clemson.edu";
/* programmes: aravisbiotech.com/technologies ("We have solutions for: Spinal Fusion, Hip and Long Bone Fractures, Trauma Plates,
   Detecting Infection"), with the evidence each has in their own publication list and NIH RePORTER. No invented stages.
   [area, device, headline, evidence label, detail, link] */
var PROG=[
 ["Hip fractures","Sliding hip screw sensor","Screw bending, read on the follow-up X-ray","In vivo, ovine model · 2025","A straight tungsten pin threads into the back of a sliding hip screw. Human cadaver readings agreed with computer simulations, and in a sheep with an induced intertrochanteric fracture the sensor showed implant loading until week 8, when it stopped as the callus took the load.","https://doi.org/10.1038/s41598-025-03216-z"],
 ["Trauma plates","Tibial plate strain sensor","Plate bending under load, without new imaging","Cadaveric study · 2021","A lever on the plate presses a radio-dense fluid reservoir, so the liquid level in a capillary, read on a plain radiograph, tracks plate bending. Tested on a human cadaveric tibia, it was precise to under 2% of body weight.","https://doi.org/10.1109/TBME.2021.3092291"],
 ["Spinal fusion","Fusion indicator","Motion across a fusion, flexion to extension","Radiographic demonstration","A radio-dense indicator on the fusion hardware is imaged in flexion and in extension, so motion across the segment can be compared on standard radiographs.",""],
 ["Infection","X-ray read pH sensor","Early warning of prosthetic joint infection","NIH SBIR Phase I · X-VIS-PJI","Infection turns the fluid around an implant acidic. A pH-sensitive film on the implant, read through tissue by radiography or X-ray excited luminescence, flags it early: the subject of an NIH NIAMS award (R43AR081748).","https://doi.org/10.1002/adfm.202104124"]];
/* aravisbiotech.com/about. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founders",name:"Jeffrey N. Anker, Ph.D.",title:"Founder, CEO and co-inventor",sum:"Wallace R. Roy Distinguished Professor of Chemistry and Bioengineering at Clemson University; expertise in imaging and sensor development."},
 {g:"Founders",name:"John DesJardins, Ph.D.",title:"Founder, CTO and co-inventor",sum:"Robert B. and Susan B. Hambright Leadership Professor in Bioengineering at Clemson University."},
 {g:"Founders",name:"Caleb Behrend, M.D., M.S.",title:"Co-founder, CMO and co-inventor",sum:"Attending orthopaedic spine surgeon."},
 {g:"Advisory board",name:"Dave Eldridge",title:"Business mentor",sum:"Tri-County Entrepreneurial Corporation; NSF I-Corps business mentor."},
 {g:"Advisory board",name:"John Bachman",title:"Medical devices",sum:"Retired DG for J&J Medical Devices for Europe."},
 {g:"Advisory board",name:"Randy Moore",title:"Manufacturing",sum:"Retired President and Plant Manager, Mitsubishi Fibers, Greenville, SC."},
 {g:"Advisory board",name:"Tom Borg",title:"Regenerative medicine",sum:"Retired Chair of the Regenerative Medicine Department at MUSC."}];
/* publications and awards, each linking out. [date, title, venue, url] */
var NEWS=[
 ["June 2025","Proof of concept measurement of ovine intertrochanteric fracture stability with an X-ray visualized implantable screw bending sensor","Scientific Reports","https://doi.org/10.1038/s41598-025-03216-z"],
 ["September 2023","NIH awards X-VISUAL: an X-ray visualized indicator for screw strain under applied load (R43AR083782)","NIH RePORTER","https://reporter.nih.gov/project-details/10822470"],
 ["2021","A method to track fracture healing: tibial plate bending under load, read via plain radiography with an integrated fluidic sensor","IEEE Trans. Biomed. Eng.","https://doi.org/10.1109/TBME.2021.3092291"],
 ["2021","Synovial fluid pH sensor for early detection of prosthetic hip infections","Advanced Functional Materials","https://doi.org/10.1002/adfm.202104124"],
 ["2017","Implantable strain sensor to monitor fracture healing with standard radiography","Scientific Reports","https://doi.org/10.1038/s41598-017-01009-7"]];
var SHEETS=[];
