var FONTS=['300 1em "Figtree"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','400 1em "Inter"','500 1em "Inter"'];
var MAIL="mailto:ajacobi@multiradiance.com";
var TEL="tel:+14405420761";
var PRS="https://multiradiance.com/about/our-company/press-releases/";
var LE=PRS+"fda-clearance-lateral-epicondylitis/";
/* Devices, from multiradiance.com product pages, the Technology page and press releases. [name, area, title, status, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["MR5 ACTIV PRO","Sports medicine · Dental","Cordless Super Pulsed Laser","FDA-cleared for lateral epicondylitis, 2026","Cleared for the adjunctive temporary relief of pain associated with lateral epicondylitis, after a prospective, randomized, triple-blind, placebo-controlled, multi-center trial published in BMJ Open.",0,"Cleared",LE,"Press release"],
 ["LaserShower","MR5 ACTIV PRO","For large treatment areas","200 W peak super pulsed power","The most powerful super pulsed laser in the MR5 series: over 500 mW mean output, a 30 cm&#178; emitter aperture for the low back, spine and legs, and up to 8 hours of cordless use.",0,"MR5 series","",""],
 ["LaserStim","MR5 ACTIV PRO","Laser with electrical stimulation","Guided by TARGET™","The first and only FDA-cleared device to combine neuroadaptive electrical stimulation and laser in a single emitter, measuring the tissue to locate and dose the areas that need it.",0,"MR5 series","",""],
 ["FibroLux","Rheumatology","Laser for fibromyalgia","FDA-cleared, 2022","The first and only therapeutic laser cleared by the FDA for adjunctive use in the temporary relief of pain associated with fibromyalgia. In a clinical trial it reduced tender points by 52% and pain by 53%.",0,"Cleared",PRS+"multi-radiance-medical-breaks-new-ground-fibromyalgia-relief/","Press release"],
 ["ALPHA","Class IV","Class IV laser therapy","Optimal Thermal Profile","Designed to target treatment by symptom, with Priority Principle, or by anatomy, with Accurate Dose Technology; less absorption at the surface means less heat and more light reaching the target tissue.",0,"Class IV","https://multiradiance.com/class4alphalaser/","Alpha laser"],
 ["ACTIVet PRO","Veterinary","Super Pulsed Lasers for animals","Since 2010","Equine, companion and exotic applications, with AlphaVet Class IV lasers and MPACTVet shockwave in a laser therapy continuum of care.",0,"Veterinary","https://vet.multiradiance.com/","Veterinary site"]];
/* Evidence, from the 9 June 2026, 1 February 2024 and 11 November 2025 releases. */
var EVID=[
 ["72% vs 40%","Clinical success with active treatment versus placebo in the lateral epicondylitis trial (p=0.045), published in BMJ Open"],
 ["86.67% vs 48.89%","Subjects meeting success criteria with FibroLux versus placebo, in a randomized placebo-controlled fibromyalgia trial"],
 ["59+ articles","Peer-reviewed articles on Multi Radiance technology since inception, with over 35 global clinical trials"],
 ["Three cleared indications","NHN 510(k) clearances for neck and shoulder pain (MR4), fibromyalgia (FibroLux) and lateral epicondylitis (MR5 ACTIV PRO)"]];
/* multiradiance.com (Our Story) and press releases. Text-only masthead; summaries state only what the company states. */
var TEAM=[
 {g:"Leadership",name:"Max Kanarsky",title:"Founder, President & CEO",sum:"Became a partner in 2004 and brought the Super Pulsed Laser technology to the United States and Canada."},
 {g:"Leadership",name:"Douglas Johnson",title:"Chief Science Officer",sum:"Leads the clinical studies behind the company's FDA-cleared indications."},
 {g:"Research",name:"Dr. Ernesto Cesar Pinto Leal-Junior",title:"Senior Researcher",sum:"Head of the Laboratory of Phototherapy and Innovative Technologies (LaPIT); principal investigator of the lateral epicondylitis trial."},
 {g:"Research",name:"Dr. Janis T. Eells",title:"Medical Advisory Board",sum:"Member since 2015; pioneered research on photobiomodulation for retinal injury and retinal disease."}];
var NEWS=[
 ["9 June 2026","Multi Radiance Medical expands FDA-cleared indications with new lateral epicondylitis clearance following successful triple-blind clinical trial","multiradiance.com",LE],
 ["24 March 2026","Multi Radiance Medical joins forces with VetPD &#8211; Veterinary Professional Development as newest North American industry partner","multiradiance.com",PRS+"vetpd-2026/"],
 ["18 December 2025","Making an MPACT that lasts: shockwave therapy for hard-to-heal equine suspensory injuries","multiradiance.com",PRS+"mpactvet-shockwave-therapy-equine-suspensory-injuries/"],
 ["11 November 2025","Multi Radiance Medical recognizes research team members on 2025 Stanford University Top 2% Scientists list","multiradiance.com",PRS+"stanford-university-top-scientists-list-2025/"],
 ["1 February 2024","Multi Radiance Medical breaks new ground in fibromyalgia pain relief with the first FDA-cleared therapeutic laser","multiradiance.com",PRS+"multi-radiance-medical-breaks-new-ground-fibromyalgia-relief/"]];
var SHEETS=[];
