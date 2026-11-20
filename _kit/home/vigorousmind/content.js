var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"','800 1em "Big Shoulders Display"'];
var MAIL="info@vigorousmind.com";
var TEL="(888) 769-6463";
var RP="https://reporter.nih.gov/project-details/";
/* research programmes: every line from NIH RePORTER (project titles and abstracts) and vigorousmind.com/who-benefits-and-how.
   [award, title, setting, status, detail, link, link label] */
var PIPE=[
 ["1R43AG094367","Preventing delirium in hospitalised older adults living with dementia","Hospitals","NIA SBIR · 2025","An application that builds a personalised, multicomponent non-pharmacological intervention for each patient, delivered at the bedside by an autonomous navigating robot: a less labour-intensive, scalable alternative to programmes run by nurses, families and volunteers.",RP+"11182833","NIH RePORTER"],
 ["1R43AG082599","Detecting falls and the risk of falls","Nursing homes · ADRD","NIA SBIR · 2023","The robot, fitted with an infra-red camera, image processing and AI, becomes an extra “set of eyes” that patrols corridors and residents’ rooms, without the static room cameras that intrude on privacy or miss falls in the dark.",RP+"10698704","NIH RePORTER"],
 ["1R43AG073004","Telepresence that alleviates loneliness","Nursing homes","NIA SBIR · 2021","An autonomous navigating telepresence robot integrated with web-based scheduling, Zoom and the Vigorous Mind activities platform, so residents with and without dementia can see family without staff setting up tablets.",RP+"10255485","NIH RePORTER"],
 ["1R43AG061928","A web-based app against loneliness at home","Older adults at home","NIA SBIR · 2018","The Vigorous Mind engagement, socialisation and brain wellness platform, studied with the Consortium on Technology for Proactive Care at Northeastern University in senior living communities and senior centres.",RP+"9678301","NIH RePORTER"],
 ["1R43AG057337","Physical exercise in a multidomain platform","Older adults","NIA SBIR · 2017","Physical exercise and coaching added to cognitive training, stress reduction and socialising. Completed with Northeastern’s CTPC: participants increased their physical activity and said they would recommend Vigorous Mind to friends.",RP+"9408822","NIH RePORTER"]];
/* the science, as cited on vigorousmind.com/who-benefits-and-how */
var EVID=[
 ["Loneliness","Loneliness is associated with increased depressive symptoms and risk of coronary heart disease and stroke, and is a key predictor of depression, health deterioration and death in older adults","Cacioppo 2006 · Valtorta 2016 · Perissinotto 2012"],
 ["Social isolation","A risk factor for all-cause morbidity and mortality, with outcomes comparable to smoking, obesity, lack of exercise and high blood pressure","Landeiro et al. 2017"],
 ["Multidomain care","Two years of diet, exercise, cognitive training and vascular risk monitoring could improve or maintain cognitive functioning in at-risk older people (FINGER)","Ngandu 2015"],
 ["An active life","An active and socially integrated lifestyle in late life protects against dementia; more socially active older adults experience less cognitive decline","Fratiglioni 2004 · Bennett 2006 · Wilson 2011"]];
/* vigorousmind.com/about. Text-only masthead (CI/CL); the summaries are condensed from their bios. */
var TEAM=[
 {g:"Leadership",name:"Yuval Malinsky",title:"Chief Executive Officer",sum:"Principal investigator on multiple NIH-funded grants in technology for brain wellness and dementia care. Founder of three software companies; INSEAD MBA."},
 {g:"Leadership",name:"Ofer Schneid",title:"VP Engineering & CTO",sum:"More than 25 years leading high-tech ventures, with senior roles at Scitex USA and Kodak USA, and founder of several start-ups."},
 {g:"Leadership",name:"Daphna Malinsky, PhD",title:"Director of Cognitive Psychology",sum:"Psychologist trained in school psychology and neuropsychology, with more than 20 years of clinical experience. Doctorate from Boston College."},
 {g:"Leadership",name:"Steven Wetzner, MD",title:"VP Medical Affairs",sum:"Clinical Professor of Radiology at Tufts University School of Medicine and Emeritus Chairman of Radiology at New England Baptist Hospital."},
 {g:"Scientific advisory board",name:"David A. Bennett, MD",title:"Rush University",sum:"Director of the Rush Alzheimer’s Disease Center; principal investigator of the Religious Orders Study and the Memory and Aging Project."},
 {g:"Scientific advisory board",name:"Louis Bherer, PhD",title:"Université de Montréal",sum:"Professor of Medicine and researcher at the Montréal Heart Institute, studying cognitive stimulation, exercise and cognitive decline."},
 {g:"Scientific advisory board",name:"Ronald Cohen, PhD",title:"University of Florida",sum:"Evelyn McKnight Chair of Clinical Translation in Cognitive Aging; directs the Center for Cognitive Aging and Memory."},
 {g:"Advisory board",name:"Barney Spivack, MD",title:"Internist-geriatrician",sum:"Founder of the Connecticut Geriatrics Society and Fellow of the American Geriatrics Society, after more than 30 years caring for older adults."},
 {g:"Advisory board",name:"Lillian Glickman, PhD",title:"UMass Boston",sum:"Former Secretary of the Massachusetts Executive Office of Elder Affairs; co-directs the Management in Aging Services master’s programme."},
 {g:"Advisory board",name:"Ido Eilam",title:"SunSetter Products",sum:"Co-founder and former CEO of SunSetter, the largest US direct marketer of retractable awnings. Harvard Business School MBA."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["July 2025","National Institute on Aging awards Vigorous Mind an SBIR grant to test a robot that delivers delirium prevention at the bedside of hospitalised patients with dementia","NIH RePORTER",RP+"11182833"],
 ["September 2023","SBIR award from the NIA for an autonomous robot that detects falls and the risk of falls in nursing home residents with Alzheimer’s disease","NIH RePORTER",RP+"10698704"],
 ["August 2021","SBIR award from the NIA for an autonomous navigating telepresence robot to alleviate loneliness in nursing homes","NIH RePORTER",RP+"10255485"],
 ["September 2018","Second NIA SBIR grant: a web-based app to alleviate loneliness and isolation in older adults, with Northeastern University","NIH RePORTER",RP+"9678301"]];
var SHEETS=[];
