var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Source Sans 3"','500 1em "Source Sans 3"','600 1em "Source Sans 3"','700 1em "Source Sans 3"'];
var MAIL="info@oxolife.com";
var LI="https://www.linkedin.com/company/oxolife/";
/* programmes: Oxolife/ESHRE releases (July 2024), PR Newswire (9 April 2025), Rutgers (29 Nov 2021), EIC (17 Feb 2026).
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["OXO-001","Embryo implantation in IVF and ICSI","Assisted reproduction","Phase II completed","OXOART2, a placebo-controlled Phase II trial at European fertility centres. A pivotal Phase III is planned to confirm the results, including women using their own eggs. Selected for the EIC Accelerator in 2026 (OXO-ART).","https://clinicaltrials.gov/study/NCT05076032","NCT05076032"],
 ["OXO-001","Infertility associated with PCOS","Polycystic ovary syndrome","On track for Phase II","In preclinical studies OXO-001 has shown the ability to restore ovulation and reproductive capacity. Developed with the University of Córdoba–IMIBIC and Rutgers Robert Wood Johnson Medical School.","https://research.rutgers.edu/news/oxolife-initiates-collaboration-university-cordoba-and-rutgers-develop-treatment-improve","Rutgers"]];
/* OXOART2 exploratory analysis, ESHRE 2024 (Clinical Trials Arena, 8 July 2024) */
var EVID=[
 ["Early pregnancy","75.9% with OXO-001 against 52.4% with placebo"],
 ["Clinical pregnancy","50.0% against 35.7%, confirmed by fetal heartbeat at five weeks"],
 ["Ongoing pregnancy","46.3% against 35.7% at about ten weeks, a 10.6-point gain"],
 ["Live birth","42.6% against 35.7%, a 6.9-point gain"]];
/* Rutgers 2021, IBEC 2021, PR Newswire 2025, catalonia.health 2024. Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Founders",name:"Dr. Agnès Arbat",title:"CEO & CMO, co-founder",sum:"Over 20 years in the pharmaceutical industry, including Bayer’s Women’s Health and Cardiovascular medical team and Organon’s Women’s Health Medical Affairs. EU Women Innovators Prize, 2025."},
 {g:"Founders",name:"Dr. Ignasi Canals",title:"CSO, co-founder",sum:"Co-founded Oxolife in 2013 and directs its science, including the OXO-001 collaborations with IBEC, the University of Córdoba and Rutgers."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["February 2026","Oxolife selected for the EIC Accelerator for OXO-ART, a first-in-class oral, non-hormonal tablet to improve live birth rates","European Innovation Council","https://eic.ec.europa.eu/news/61-start-ups-and-smes-secure-eic-support-latest-round-eic-accelerator-2026-02-17_en"],
 ["April 2025","Oxolife’s CEO Agnès Arbat receives the EU Women Innovators Prize at the EIC Summit in Brussels","PR Newswire","https://www.prnewswire.com/news-releases/oxolifes-ceo-agnes-arbat-receives-prestigious-eu-women-innovators-prize-302424459.html"],
 ["July 2024","Oxolife’s infertility pill increased IVF success by over 10% in its Phase II trial","Clinical Trials Arena","https://www.clinicaltrialsarena.com/news/oxolifes-infertility-pill-increased-ivf-success-by-over-10-in-phase-ii-trial/"],
 ["July 2024","The OXOART2 study is selected as one of the highlights of ESHRE’s 40th Annual Meeting","Catalonia.health","https://catalonia.health/news/oxoart2-estudi-clinic-doxolife-seleccionat-com-un-dels-mes-destacats-presentats-a-la-40a-reunio-anual-de-leshre"],
 ["November 2021","Oxolife begins a collaboration with the University of Córdoba and Rutgers on infertility in PCOS","Rutgers","https://research.rutgers.edu/news/oxolife-initiates-collaboration-university-cordoba-and-rutgers-develop-treatment-improve"],
 ["October 2021","Oxolife starts the OXOART-2 Phase II trial to improve embryo implantation","Barcelona Science Park","https://www.pcb.ub.edu/en/?p=67039"],
 ["January 2021","IBEC and Oxolife start a pioneering study to treat infertility","IBEC","https://ibecbarcelona.eu/ibec-and-oxolife-start-a-pioneering-study-to-treat-infertility/"]];
var SHEETS=[];
