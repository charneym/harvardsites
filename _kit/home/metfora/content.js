var FONTS=['300 1em "Literata"','italic 300 1em "Literata"','400 1em "Literata"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"'];
var FORM="https://www.metfora.com/contact";
var LI="https://www.linkedin.com/company/metforadiagnostics/";
/* the pipeline, from metfora.com (Home, Pipeline, News & Events). Stages are NOT drawn as bars: the site does not state
   them in text. [programme, area, indication, detail line, text, status, dim] */
var PIPE=[
 ["ExpertLungDx","Lead test","Chronic lung diseases","COPD · asthma · pulmonary hypertension · interstitial lung disease","One blood test for patients with vague, non-specific symptoms such as fatigue and shortness of breath. In August 2025 Metfora aligned with the FDA, through the pre-submission process, on its regulatory pathway and intended use.","FDA pre-sub aligned",0],
 ["Platform","Cardiovascular","Heart disease","Metabolic fingerprinting","Listed on Metfora’s pipeline as a further indication for the same metabolite platform.","Pipeline",1],
 ["Platform","Metabolic","Diabetes","Metabolic fingerprinting","Listed on Metfora’s pipeline as a further indication for the same metabolite platform.","Pipeline",1]];
/* metfora.com (About). Text-only masthead (CI/CL). Summaries only restate public sources; blank where none is published. */
var TEAM=[
 {g:"Leadership team",name:"Diana Morales",title:"Chief Executive Officer",sum:""},
 {g:"Leadership team",name:"Debrah Thompson, PhD",title:"Chief Scientific Officer",sum:""},
 {g:"Leadership team",name:"Prof. Olga Rafikova, MD, PhD",title:"Co-Founder",sum:"Co-inventor of the metabolite technology licensed from the University of Arizona College of Medicine – Tucson."},
 {g:"Leadership team",name:"Prof. Ruslan Rafikov, PhD",title:"Co-Founder",sum:"Co-inventor of the metabolite technology licensed from the University of Arizona College of Medicine – Tucson."},
 {g:"Clinical and scientific",name:"Prof. Ken Knox, MD",title:"Clinical and scientific team",sum:""},
 {g:"Clinical and scientific",name:"Prof. Julie Ledford, PhD",title:"Clinical and scientific team",sum:""},
 {g:"Clinical and scientific",name:"Prof. Marc Simon, MD",title:"Clinical and scientific team",sum:""},
 {g:"Business and data",name:"Prof. Yong Ge, PhD",title:"Business and data team",sum:""},
 {g:"Business and data",name:"John Achoukian, MHI, PMP",title:"Business and data team",sum:""},
 {g:"Business and data",name:"Peter Nestler, PhD",title:"Business and data team",sum:""},
 {g:"Business and data",name:"Martin Fuchs",title:"Business and data team",sum:"Led Metfora as CEO through its NSF SBIR Phase I award in 2023."}];
/* news: only items with a working link (metfora.com News & Events). [date, headline, source, url] */
var NEWS=[
 ["August 2025","Metfora aligns with the FDA, through the pre-submission process, on the regulatory pathway and intended use for ExpertLungDx","FDA Q-Submission program","https://www.fda.gov/regulatory-information/search-fda-guidance-documents/requests-feedback-and-meetings-medical-device-submissions-q-submission-program"],
 ["April 2025","Metfora presents at Venture Madness 2025 in Tempe, its third selection in four years","Venture Madness","https://venturemadness.com/venture-madness-2025-highlights/"],
 ["December 2024","Metfora Diagnostics is a 2024 Arizona Innovation Challenge awardee","Arizona Commerce Authority","https://www.azcommerce.com/news-events/news/2024/12/arizona-commerce-authority-announces-2024-arizona-innovation-challenge-awardees/"],
 ["April 2024","University of Arizona startups selected for the Flinn Foundation Bioscience Entrepreneurship Program","Tech Launch Arizona","https://techlaunch.arizona.edu/news/university-arizona-startups-selected-flinn-foundation-bioscience-entrepreneurship-program"],
 ["March 2023","Startup Metfora receives an NSF SBIR award to advance its AI-enabled diagnostic technology","Tech Launch Arizona","https://techlaunch.arizona.edu/news/startup-metfora-advance-development-ai-enabled-diagnostic-technology"],
 ["February 2022","UArizona researchers develop an AI-driven method for diagnosing lung disease","Tech Launch Arizona","https://techlaunch.arizona.edu/news/2022/02/uarizona-researchers-develop-ai-driven-method-diagnosing-lung-disease"]];
var SHEETS=[];
