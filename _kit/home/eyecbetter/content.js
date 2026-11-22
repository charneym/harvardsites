var FONTS=['300 1em "Poppins"','400 1em "Poppins"','500 1em "Poppins"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"'];
var MAIL="info@eyecbetter.com";
var RP="https://reporter.nih.gov/project-details/";
/* The platform, from eyecbetter.com (home, About, press) and the NIH SBIR record. Status words only where the company or
   the public record states them. [component, area, title, status, detail, dim] */
var PIPE=[
 ["Digital therapeutic","Patient app","The eyecbetter patient experience","Introduced at Glaucoma 360, February 2023","A patient-provider digital health platform for glaucoma that keeps a continuous care connection between clinic visits: personalised analytics, real-time health nudges, medication-adherence support and the seewell™ score, a summary of how vision is affecting every area of life.",0,"Available"],
 ["Care team","Patient Care Coordinators","eyecbetter Patient Care Coordinators","Alongside the app","Coordinators who keep the person with glaucoma engaged during a lifelong treatment journey, alongside the app, and connect them to their glaucoma specialist.",0,"Available"],
 ["Photonic IOP Biomonitoring","Wearable tonometer","No-touch, no-air-puff tonometry","NIH SBIR Phase I, 2025 to 2027","A wearable tonometer that measures intraocular pressure without touching the eye or puffing air at it, and transmits each reading to the patient app. NEI award 1R43EY037593-01 of $315,825 funds the physical model, pupil monitoring and the first human repeatability study.",0,"In development"],
 ["For providers","Subscription","Remote monitoring through providers and health plans","Provider enrolment and reimbursement","The digital therapeutic is offered through providers, organisations and major health plans on a per-patient, per-month subscription, with a provider enrolment and reimbursement programme.",0,"For providers"],
 ["Next","Further research","Trans-lid tonometry","Option agreement, University of Pittsburgh","An option on University of Pittsburgh intellectual property for a solitary-wave-based, easily employable trans-lid tonometer.",1,"Next"]];
/* The Phase I plan, from the NIH SBIR abstract (1R43EY037593-01). */
var EVID=[
 ["Aim 1 · Physical model","A model built on Newton's equations of motion seeds the machine learning, targeting IOP resolution of 1 mmHg or better in porcine eyes"],
 ["Aim 2 · Pupil monitoring","An eye-position monitor turns the laser off whenever the pupil drifts, keeping light below the 0.6 mW safety threshold"],
 ["Aim 3 · Human eyes","Repeatability is tested in 30 healthy human eyes, to inform the design of a Phase II trial"],
 ["Aim 4 · Comfort","Every measurement is monitored for patient safety and comfort"]];
/* eyecbetter.com (Our Team; press). Text-only masthead (CI/CL); summaries only state what the site states. */
var TEAM=[
 {g:"Leadership",name:"Joel M. Solano, MD",title:"Founder and Chief Executive Officer",sum:"Board-certified, fellowship-trained anterior segment surgeon and glaucoma specialist, trained at the Mayo Clinic in Rochester, with more than 15 years diagnosing and treating severe eye disease. Principal investigator on the NIH award."},
 {g:"Leadership",name:"Peter DeLange, MBA",title:"VP of Operations",sum:"More than 25 years in medical devices: founder and CEO of Devicix, acquired by Nortech Systems; SVP of Operations and Business Development at EnteroMedics; co-founder of FocusStart."},
 {g:"Leadership",name:"Joy Glen",title:"Chief Sales and Marketing Officer",sum:"Twenty years of executive leadership in healthcare go-to-market across audiology and ophthalmology, with a focus on tele-health and med-tech."},
 {g:"Leadership",name:"Matt Rhodes",title:"Chief Financial Officer, Consultant",sum:"More than 25 years aligning stakeholders across investment management, retail healthcare and enterprise management."},
 {g:"Science and engineering",name:"Hayden Brownell, PhD",title:"Principal Scientist",sum:"Experimental physicist with thirty years developing devices for research and commercial ventures; founder of AccelBeam Synthesis."},
 {g:"Science and engineering",name:"Patrick Corneille",title:"Director, Research and Development",sum:"More than 15 years of medical device product development, leading programmes to global launch at Stryker Endoscopy and Nortech Systems."},
 {g:"Patients and community",name:"Amy Dixon, PLY",title:"Director of Patient Advocacy",sum:"Tokyo 2020 Paralympian in triathlon and a uveitis and glaucoma patient, representing the voice of the glaucoma patient in the programme."},
 {g:"Patients and community",name:"Dr. Jodi Star",title:"Chief Psychiatric Officer",sum:"Quadruple board-certified psychiatrist with more than 20 years in clinical care, research and education."},
 {g:"Patients and community",name:"Lane Macy Kiefaber",title:"Director of Social Responsibility and Philanthropy",sum:"More than 25 years as an executive and start-up strategist in nonprofit and for-profit social-impact businesses."},
 {g:"Advisory board",name:"John Berdahl, MD",title:"Advisor",sum:"Ophthalmic surgeon in cornea, cataract, glaucoma and refractive surgery; founder of Equinox."},
 {g:"Advisory board",name:"Brian Mohney, MD",title:"Advisor",sum:"Pediatric eye surgeon with more than 30 years of practice; physician, researcher and educator at the Mayo Clinic."},
 {g:"Advisory board",name:"Dr. Kirk Adams",title:"Advisor",sum:"Former President and CEO of the American Foundation for the Blind."},
 {g:"Advisory board",name:"Thomas E. Lauerman",title:"Advisor",sum:"Founder of and investor in more than a dozen companies; co-founder of GeoAccess, sold to UnitedHealth Group."},
 {g:"Advisory board",name:"Gus Savloff",title:"Advisor",sum:"Vice-President of Sales and CGO of EyeMD EMR, whose records software serves more than 3,000 ophthalmologists."}];
/* News: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2025","NIH awards eyecbetter an SBIR grant for a new, non-invasive, no-puff, no-touch tonometry method: remote photonic IOP biomonitoring","NIH RePORTER",RP+"11182264"],
 ["September 2023","Digital healthcare start-up eyecbetter launches a Regulation CF crowdfunding campaign on StartEngine","PR Newswire","https://www.prnewswire.com/news-releases/digital-healthcare-startup-eyecbetter-launches-regulation-c-crowdfunding-campaign-on-startengine-301937963.html"],
 ["September 2023","Eyecbetter announces Paralympian Amy Dixon as its new Director of Patient Advocacy","eyecbetter","https://eyecbetter.com/amy_dixon_pr/"],
 ["March 2022","Eye C Better signs an exclusive worldwide licence to develop the first non-contact device for managing glaucoma at home","eyecbetter","https://eyecbetter.com/eye-c-better-finalizes-agreement-to-develop-worlds-first-non-contact-device/"],
 ["July 2021","Eyecbetter signs an option agreement with the University of Pittsburgh for a trans-lid tonometer","eyecbetter","https://eyecbetter.com/eye-c-better-signs-option-agreement-with-university-of-pittsburgh/"]];
var SHEETS=[];
