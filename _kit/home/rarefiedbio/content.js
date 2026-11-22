var FONTS=['300 1em "Roboto Mono"','400 1em "Roboto Mono"','500 1em "Roboto Mono"','400 1em "Roboto"','500 1em "Roboto"'];
var FORM="https://www.rarefiedbio.com/home-1-1";
var RP="https://reporter.nih.gov/project-details/";
/* Programmes, from rarefiedbio.com (Home, Pipeline, Rarefied Difference) and NIH RePORTER 1R43AI189037-01A1.
   Stage words only as the company or the public record state them. [programme, area, title, stage, detail, dim] */
var PIPE=[
 ["RB201","Autoimmunity","First-in-class oral inhibitor","Phase 1 complete","An oral, once-daily medicine that gently re-tunes overactive T and B cells by restoring immune regulation upstream of the inflammation that causes tissue injury. It has completed a Phase 1 human trial and shows broad preclinical efficacy across multiple autoimmune models.",0,"Clinical"],
 ["RB202","Autoimmunity","Rarefied's second programme","In development","Built on the same new approach to rebalancing the immune system, RB202 further advances autoimmune treatments.",1,"Next"],
 ["CARD11 GOF","Rare paediatric inborn error of immunity","MALT1 inhibition for CARD11 gain of function","NIH SBIR Phase I, 2025","Inborn CARD11 gain-of-function variants (BENTA disease) cause recurrent infections, severe autoimmunity and enlarged lymph nodes and spleen in children, and there is no cure. Rarefied is testing its MALT1 inhibitor in patient cells, with Dr. Andrew Snow, who discovered the disease.",0,"Research"]];
/* RB201's profile, as the company and its NIH award record describe it. */
var EVID=[
 ["Oral, once daily","A pill rather than the injections or infusions most autoimmune treatments need today"],
 ["Phase 1 complete","RB201 has successfully completed its Phase 1 human trial"],
 ["Safety margins","High safety margins in toxicology studies in dogs and rats, and excellent in vitro safety data"],
 ["Broad efficacy","Preclinical efficacy across multiple autoimmune models"]];
/* rarefiedbio.com (Team) and NIH RePORTER. Text-only masthead; summaries state only what the record states. */
var TEAM=[
 {g:"Founder",name:"Manish Butte, MD, PhD",title:"Founder",sum:"Twenty years as a practising clinical immunologist and physician-scientist at world-leading academic institutions. Leads a large clinical and research enterprise, with 200+ publications, decades of NIH funding and two prior startups."},
 {g:"Science",name:"Andrew Hou, PhD",title:"Principal Scientist",sum:"Leads Rarefied's laboratory studies. T-cell immunologist with a PhD in Chemical and Biomedical Engineering from UCLA."},
 {g:"Development",name:"Ian Davies, PhD",title:"Chemistry / CMC",sum:"Twenty years at Merck and more than 200 drug candidates; Director, Princeton Catalysis Institute."},
 {g:"Development",name:"Lee Silverman, DVM, PhD",title:"Toxicology",sum:"Toxicologist and pathologist with twenty years in industry; formerly at Rheos, Agios and Millennium."},
 {g:"Development",name:"Christopher Novashinski",title:"Regulatory",sum:"Fractional head of regulatory; co-founder and COO of RareMoon."},
 {g:"Business and legal",name:"Keith Kendall, MBA",title:"Business Advisor",sum:"Experienced CEO across biotech, global strategy, business development, manufacturing and operations, with deep financial and board experience."},
 {g:"Business and legal",name:"Jeremy Korst, MBA",title:"Business Advisor",sum:"Technology executive, board member and entrepreneur; founding partner at GBK Collective, with leadership roles at Microsoft and T-Mobile."},
 {g:"Business and legal",name:"Bruce Jenett, JD",title:"Corporate Legal",sum:"Former head at DLA Piper, with 45 years of experience with biotech startups."},
 {g:"Business and legal",name:"Andy Kumamoto, JD",title:"IP",sum:"Formerly at Cooley, McDermott and McCutchen; twenty years in biotech intellectual property."}];
var NEWS=[];
var SHEETS=[];
