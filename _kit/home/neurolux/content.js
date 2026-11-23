var FONTS=['300 1em "Inter Tight"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "Inter"','500 1em "Inter"'];
var WEB="https://neurolux.org/";
var MAIL="sales@neurolux.org";
var TEL="(224) 307-6589";
/* facts: neurolux.org (home, devices, company history, our team, news, SfN 2026 post), NIH RePORTER (org NEUROLUX, INC.:
   R43/R44MH143569, R41HL180172, R44MH140096, R44MH114944, R44NS107142), Nature Biomedical Engineering s41551-023-01029-x;
   all fetched 2026-11-23 */
var SYS=[["Fully implantable","Nothing on the head","Ideally proportioned for subdermal implantation: no external antennas, batteries, fiber optic cables or head mounts."],
 ["Any enclosure","Built for real behavior","Robust wireless coverage in home cages and behavioral boxes, closed lids, food and water included, for individual animals or groups."],
 ["Compatible","Fits the lab you have","User-friendly software sets frequency, pulse duration and burst mode, and works with any standard TTL triggering system."]];
var PRODUCTS=[
 ["Optogenetics","Unilateral implant","Mounts sub-dermally on the skull for chronic, stable operation, with no quantifiable effect on movement or social behavior, unlike tethered optogenetics.","https://neurolux.org/devices/"],
 ["Optogenetics","Bilateral implant","Two probes, each with a µLED at its tip, deliver simultaneous stimulation to two distinct target brain regions.","https://neurolux.org/devices/"],
 ["Optogenetics","Spinal implant","A flexible, lightweight, open oblong design with a single probe and a µLED at its tip, for optogenetic manipulation of spinal circuits.","https://neurolux.org/devices/"],
 ["Physiology","nVital","A fully implantable, battery-free platform that streams body temperature and 3-axis acceleration from freely moving rodents, converted into heart rate, respiration rate and behavior.","https://neurolux.org/devices/"],
 ["System","PDC Box and Autotuner","The Power Distribution Control Box delivers wireless power to the implants; the Autotuner matches the antenna to any cage in moments.","https://neurolux.org/product-information/"],
 ["System","Modular system","An add-on to the core system: each module controls its own enclosure, running up to seven additional experiments in parallel.","https://neurolux.org/product-information/"]];
var TEAM=[
 {g:"Leadership",name:"Anthony Banks",title:"CEO and Co-Founder",sum:"Over 30 years in technology development, thirteen of them in the Rogers Research Group; director of the Center for Bio-Integrated Electronics at Northwestern University."},
 {g:"Leadership",name:"Roozbeh Ghaffari",title:"Chief Technology Officer",sum:"Over 100 papers and 50 issued patents; Director of Translational Research at Northwestern’s Querrey Simpson Institute for Bioelectronics."},
 {g:"Leadership",name:"Cameron Good",title:"Chief Research Officer",sum:"Joined in 2021 from the U.S. Army, where he ran a research program on sleep and motor neurocircuitry; leads physiological recording in the product pipeline."},
 {g:"Leadership",name:"Betsy Banks",title:"Business Admin Manager",sum:"Over 20 years in business: grant accounting, payroll, human resources and operating policy."},
 {g:"Co-founders",name:"John Rogers",title:"Co-Founder",sum:"Materials scientist and engineer, from MIT, Harvard and Bell Labs to Illinois and Northwestern; first Director of the Center for Bio-Integrated Electronics."},
 {g:"Co-founders",name:"Robert Gereau",title:"Co-Founder",sum:"Washington University in St. Louis; studies the circuits, cells and signaling behind the plasticity that underlies chronic pain."},
 {g:"Co-founders",name:"Michael Bruchas",title:"Co-Founder",sum:"Professor at the University of Washington; studies how brain circuits are wired and the neural basis of stress, emotion and reward."},
 {g:"Engineering and research",name:"Minsung Kim",title:"Manufacturing Research Scientist",sum:"PhD, Seoul National University, in flexible optoelectronics; leads development of fully implantable, wireless hardware for behavioral studies."},
 {g:"Engineering and research",name:"Ian Jones",title:"Senior Systems Integration Engineer",sum:"Leads software integration: acquisition, processing and visualization of data from the wireless EEG devices."},
 {g:"Engineering and research",name:"Zac Anderson",title:"Mechanical Engineer",sum:"Leads systems engineering, bridging hardware design and in vivo use: prototyping, surgeries and wireless data analysis."},
 {g:"Engineering and research",name:"Dane Hintermueller",title:"Electrical Engineer",sum:"Bio-integrated sensor instrumentation; developed an implantable optical sensing architecture at Northwestern under John Rogers."},
 {g:"Engineering and research",name:"Gentiana Deda",title:"Biomedical Research Engineer",sum:"Design, benchtop testing, regulatory compliance and grant writing across the full life cycle of the optogenetic implants."},
 {g:"Engineering and research",name:"Miranda Lee",title:"Biomedical Engineer",sum:"Product manufacturing, prototyping and development; previously built bioresorbable sensors in the Rogers lab."},
 {g:"Engineering and research",name:"Courtney Shaw",title:"Scientific Product and Applications Specialist",sum:"Product development, market research, customer and sales support, and commercialization."}];
var NEWS=[
 ["Oct 2026","Meet NeuroLux at SfN 2026, Booth #1110, with a new device making its debut at Neuroscience 2026","NeuroLux","https://neurolux.org/meet-neurolux-at-sfn-2026-booth-1110/"],
 ["Apr 2024","An implantable device for wireless monitoring of diverse physio-behavioral characteristics in freely behaving small animals and interacting groups","NeuroLux","https://neurolux.org/an-implantable-device-for-wireless-monitoring-of-diverse-physio-behavioral-characteristics-in-freely-behaving-small-animals-and-interacting-groups/"],
 ["Feb 2024","Join NeuroLux at SfN 2024","NeuroLux","https://neurolux.org/join-us-at-sfn-2024/"],
 ["2023","A wireless and battery-less implant for multimodal closed-loop neuromodulation in small animals","Nature Biomed. Eng.","https://www.nature.com/articles/s41551-023-01029-x"]];
var SHEETS=[];
