var FONTS=['300 1em "Fraunces"','400 1em "Fraunces"','italic 400 1em "Fraunces"','400 1em "Poppins"','500 1em "Poppins"','600 1em "Poppins"'];
var MAIL="mailto:social@peri-pear.com";
/* the research, from peri-pear.com/product ("The Research"): Sun et al. (2024), Healthcare 12(7):702, systematic review of warm compresses
   in the second stage of labour. [outcome, risk ratio or mean difference, 95% CI low, high, label] */
var RR=[
 ["Second-degree tears",0.40,0.27,0.59,"RR 0.40"],
 ["Third- and/or fourth-degree tears",0.34,0.20,0.57,"RR 0.34"],
 ["Episiotomy",0.69,0.58,0.83,"RR 0.69"],
 ["Intact perineum",3.36,1.22,9.27,"RR 3.36"]];
var EVID=[
 ["Sun et al., Healthcare, 2024","Systematic review: warm compresses on the perineum reduced second-degree tears (RR 0.40) and third- and/or fourth-degree tears (RR 0.34), reduced episiotomy (RR 0.69) and perineal pain, and increased intact perineum (RR 3.36).","https://www.mdpi.com/2227-9032/12/7/702"],
 ["Maghalian et al., Archives of Gynecology and Obstetrics","Systematic review with similar significant findings: second-degree tears (RR 0.65), third-degree (RR 0.32), fourth-degree (RR 0.11), episiotomy (RR 0.63) and intact perineum (RR 3.06).","https://link.springer.com/article/10.1007/s00404-023-07195-2"]];
/* peri-pear.com/team-1. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founders",name:"Eviatar Natan, PhD",title:"CEO and Co-founder",sum:"PhD from the University of Cambridge, research at MIT and the University of Oxford; more than a decade leading healthcare startups."},
 {g:"Founders",name:"Nina van Schaick, RM",title:"COO and Co-founder",sum:"Midwife with 14 years of NHS and private frontline experience and more than 400 births attended; Oxford Brookes midwifery graduate."},
 {g:"Team and advisers",name:"Stephanie Monty",title:"Product Lead",sum:"Award-winning product designer with eight years in health tech; founded and led the ostomy-care medtech Ostique."},
 {g:"Team and advisers",name:"Hollie Osborne",title:"Chief of Staff",sum:""},
 {g:"Team and advisers",name:"Sapna Shah",title:"Fractional FD and Angel Investor",sum:""},
 {g:"Team and advisers",name:"Abdul Sultan",title:"Clinical Advisor",sum:"Consultant urogynaecologist behind the OASI care bundle, rolled out from 2016 to tackle third- and fourth-degree tears."}];
/* news: items from peri-pear.com/press that link out. [date, headline, source, url] */
var NEWS=[
 ["October 2026","Startup category winner at the Santander X UK Awards 2026","Business News","https://www.business-news.org.uk/meet-the-winners-of-the-santander-x-uk-awards-2026/"],
 ["September 2026","Peripear secures £1.2M to prevent perineal tearing","Femtech Insider","https://femtechinsider.com/peripear-secures-1-2m-to-prevent-perineal-tearing/"],
 ["September 2026","UK birth injury prevention startup secures £1.2m in equity and grant funding","FutureFemHealth","https://www.futurefemhealth.com/p/uk-birth-injury-prevention-startup"],
 ["August 2026","Peripear wins the Innovate UK Women in Innovation Award","Femtech World","https://www.femtechworld.co.uk/entrepreneur/peripear-wins-innovate-uk-women-in-innovation-award/"],
 ["August 2026","Women’s health devices, choosing markets and investors: Eviatar Natan","Beyond the Clinic","https://open.spotify.com/episode/28veZSKQdmbXdMEhDmIPh9"],
 ["June 2026","Top prize at the NatWest Accelerator Pitch Final in Oxford","NatWest Group","https://www.natwestgroup.com/news-and-insights/news-room/press-releases/enterprise/2026/jun/oxfords-innovators-take-centre-stage-at-natwest-accelerator-pitc.html"]];
var SHEETS=[];
