var FONTS=['300 1em "Figtree"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','400 1em "Inter"','500 1em "Inter"'];
var WEB="https://3dtholdings.com/";
var MAIL="gkassab@calmi2.org";
var RP="https://reporter.nih.gov/project-details/";
/* facts: 3dtholdings.com (home, About Us, Facilities, Research & Development, Companies, Contract Research Services, Careers PDF 2023),
   NIH RePORTER (org 3DT Holdings LLC, San Diego; abstracts of HL120517, HL123186, HL169034, HL174177, HL174201, HL176260),
   calmi2.org (Julius Guccione profile; address), Europe PMC (Dr. Kassab's published correspondence address); all fetched 2026-11-21 */
var PLAT=[["Incubator","Room to start","Facility space, shared office equipment, direct business assistance and guidance, mentoring and networking to capital for start-ups in cardiovascular and obesity-related disease."],
 ["Engineering","Designed and modelled","Rapid design and prototyping, with computational fluid dynamics, finite element, fluid-structure interaction and electromagnetic simulation in house."],
 ["Preclinical","Tested on site","USDA-approved, AAALAC-accredited facilities: two sterile surgical suites, flat-panel C-arms, IVUS and echocardiography for in vivo studies."]];
var PROG=[
 ["Structural heart","MitraClip operative planning","Machine-learning software that predicts mitral regurgitation, left atrial pressure and leaflet and myocardial stresses to find the best MitraClip placement. NIH SBIR Fast-Track.",RP+"11327319"],
 ["Heart failure","CRT optimisation tool","Physics-based modelling with machine learning to plan cardiac resynchronisation, conduction-system and LV endocardial pacing for each patient.",RP+"10915234"],
 ["Electrophysiology","His pacing stabilisation sheath","A deployable suction flute-tipped sheath to map the His bundle and place the pacing lead perpendicular to the tissue.",RP+"11005190"],
 ["Structural heart","Low-profile TAVR valve","A thinner, lower-stress leaflet biomaterial for durable transcatheter aortic valves on a smaller delivery system.",RP+"10917693"],
 ["Coronary","Conductance balloon post-dilatation catheter","A post-dilatation balloon that measures and displays its own size in real time, to guide stent deployment.",RP+"8592248"],
 ["Structural heart","Sizing valvuloplasty balloon","A 2-in-1 valvuloplasty conductance balloon that dilates the aortic valve and measures the annulus before TAVR.",RP+"8904828"],
 ["Interventional","Trans-septal access stabilisation","A guiding catheter for accurate, safe placement of steerable guides into the left atrium.",RP+"8591527"],
 ["Acute MI","Mild hypothermia catheter","Selective auto-retroperfusion that cools the heart region at risk to limit reperfusion injury after STEMI.",RP+"9409720"]];
var COS=[
 ["Peripheral and coronary","Intelligent Delivery Systems, Inc.","Electrical conductance-enabled guidewires, catheters and balloons; first, the .035” 35 Wire, a workhorse and vessel-sizing guidewire for peripheral artery disease."],
 ["Obesity","GRest, Inc.","A laparoscopic reversible gastric restrictive device, aiming for the weight loss of bariatric surgery with the reversibility of an adjustable band."],
 ["Ischemic heart disease","Retroperfusion, Inc.","Minimally invasive circulatory support catheters for ischemic heart disease and critical limb ischemia, acute and chronic."],
 ["Cardiac access","Pericardial Access, Inc.","A catheter platform for trans-atrial access to the pericardial space, to deliver therapies and diagnostic tools."],
 ["Gastroenterology","GI Bionics LLC","Fecobionics: a wireless device that measures pressures and velocity during defecation, for diagnosing anorectal disorders."]];
var CRS=["Cardiovascular","Peripheral vascular","Gastrointestinal","General surgery","Interventional","Medical devices","Tissue engineering","Drug delivery","Anatomic pathology and histology"];
var TEAM=[
 {g:"Leadership",name:"Ghassan S. Kassab, PhD",title:"Founder, Managing Member",sum:"Founder, President and CSO of the California Medical Innovations Institute; over 500 publications and 250 issued or pending patents."},
 {g:"Leadership",name:"Julius Guccione, PhD",title:"Chief Computing Officer",sum:"Formerly Professor of Surgery at UCSF; over 25 years in cardiac mechanics and simulation of devices for the heart."},
 {g:"Leadership",name:"William Combs",title:"Director of Engineering",sum:"29 years at Medtronic, a Medtronic Technical Fellow with 40 issued patents."},
 {g:"Leadership",name:"Frederic Field",title:"Director of Development",sum:"25+ years developing infusion pumps, needle safety devices and minimally invasive instruments."},
 {g:"Clinical and research",name:"Jose Antonio Navia, MD",title:"Cardiothoracic Surgeon",sum:"43 years as a cardiovascular surgeon; past president of the Argentine Cardiology Society."},
 {g:"Clinical and research",name:"Mengjun Wang, MD, MS",title:"Research Professor",sum:"20+ years of in vivo efficacy and safety studies of cardiovascular devices, 12 at Henry Ford."},
 {g:"Clinical and research",name:"Carlos Labarrere",title:"Pathologist, Pathology Core",sum:"Board-certified pathologist leading the Experimental Pathology and Immunopathology Laboratory."},
 {g:"Engineering",name:"Terry Hubbard",title:"Senior Engineer, Project Manager",sum:"30+ years in device design, from ventricular assist devices to artificial organs."},
 {g:"Engineering",name:"Greg Kelley",title:"Senior Engineer",sum:"30+ years in catheters and guidewires; an early member of the CoreValve team."},
 {g:"Engineering",name:"Neil Drake",title:"Senior Engineer",sum:"25 years with class III implantables; formerly VP of R&D at Obalon Therapeutics."}];
var NEWS=[
 ["Jun 2026","NIH NHLBI continues SBIR Phase II funding for 3DT’s MitraClip planning software, with $1.05M for its third year","NIH RePORTER",RP+"11327319"],
 ["May 2025","3DT’s MitraClip planning software moves to Phase II of its NIH SBIR Fast-Track award, with $1.07M","NIH RePORTER",RP+"11294378"],
 ["Sep 2024","NIH funds a stabilisation sheath for His pacing lead implants and a software tool to optimise CRT","NIH RePORTER",RP+"11005190"],
 ["Apr 2024","NIH awards 3DT an SBIR grant for a low-profile transcatheter aortic valve","NIH RePORTER",RP+"10917693"]];
var SHEETS=[];
