var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','400 1em "Comfortaa"','500 1em "Comfortaa"'];
var MAIL="info@sermonixpharma.com";
var LI="https://www.linkedin.com/company/sermonix-pharmaceuticals/";
var TW="https://sermonixpharma.com";
/* the lasofoxifene programme: every line from sermonixpharma.com (/the-elaine-study, /the-elaine-2-study, /the-elaine-3-study)
   and Sermonix's releases (ELAINE-1 publication 2025-01-29; I-SPY 2 2024-11-02; LeonaBio licence 2025-12-18).
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["Lasofoxifene + abemaciclib","ELAINE-3","Phase 3 · NCT05696626","Enrolling","ESR1-mutated, ER+/HER2- locally advanced or metastatic breast cancer after an aromatase inhibitor with palbociclib or ribociclib. Lasofoxifene with abemaciclib is compared with fulvestrant and abemaciclib. More than half enrolled by December 2025; data expected mid-2027.",TW+"/the-elaine-3-study/","Study"],
 ["Lasofoxifene + abemaciclib","ELAINE-2","Phase 2","Reported","Safety and tolerability of the combination in women with ESR1-mutated HR+/HER2- metastatic breast cancer who had progressed on earlier endocrine therapy. Thirteen months of progression-free survival in heavily pretreated second- and third-line patients.",TW+"/the-elaine-2-study/","Study"],
 ["Lasofoxifene vs fulvestrant","ELAINE-1","Phase 2 · NCT03781063","Published","103 women with ESR1-mutated disease after an aromatase inhibitor and a CDK4/6 inhibitor. Numerically longer median PFS (5.6 vs 3.7 months) and higher response rate, and, unlike fulvestrant, improved vaginal and vulvar symptoms.",TW+"/sermonix-announces-clinical-breast-cancer-publication-of-article-examining-effects-of-lasofoxifene-versus-fulvestrant-on-urogenital-symptoms-in-patients-with-esr1-mutated-er-her2-metastatic-breast-c/","Release"],
 ["Lasofoxifene · neoadjuvant","I-SPY 2 arm","Phase 2 · with Quantum Leap","Reported","Lasofoxifene before surgery in HR+/HER2- locally advanced breast cancer. Twenty patients enrolled; well tolerated, with promising early Ki67 suppression in pre- and postmenopausal patients.",TW+"/sermonix-pharmaceuticals-lasofoxifene-is-well-tolerated-demonstrates-promising-ki67-suppression-in-phase-2-i-spy-2-arm-evaluating-therapy-in-neoadjuvant-breast-cancer-setting/","Release"]];
/* the LeonaBio licence, release of 18 December 2025 (posted on sermonixpharma.com) */
var EVID=[
 ["Licence","An exclusive global licence to develop and commercialise lasofoxifene, excluding Asia and certain countries in the Middle East"],
 ["Consideration","A pre-funded warrant for about 5.5 million LeonaBio shares, and up to $100 million in commercial and sales milestones plus royalties"],
 ["Funding","A $90 million private placement, with warrants for up to $146 million more, to carry lasofoxifene through Phase 3 topline data"],
 ["Timeline","ELAINE-3 is more than 50% enrolled, with pivotal data expected in mid-2027"]];
/* management and board, from the "About Sermonix" paragraph of Sermonix's releases (2025). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Leadership",name:"David Portman, MD",title:"Founder & Chief Executive Officer",sum:"A leading clinical researcher and expert in women’s health, sexual medicine and menopause, and SERM therapy; founded Sermonix in 2014."},
 {g:"Leadership",name:"Miriam Portman, MD",title:"Co-founder & Chief Operating Officer",sum:"Expertise in clinical trial conduct and patient recruitment."},
 {g:"Leadership",name:"Barry Komm, PhD",title:"Chief Scientific Officer",sum:"Recognised for his expertise in nuclear receptor biology."},
 {g:"Leadership",name:"Elizabeth Attias, MMSc, ScD",title:"Chief Strategy & Development Officer",sum:"Extensive experience in pharmaceutical drug commercialisation."},
 {g:"Leadership",name:"Paul Plourde, MD",title:"VP, Oncology Clinical Development",sum:"Many decades at AstraZeneca in breast cancer drug development."},
 {g:"Leadership",name:"Simon Jenkins, PhD",title:"VP, Operations",sum:"Over 30 years of experience in global drug development leadership."},
 {g:"Board",name:"Anthony Wild, PhD",title:"Non-executive Chairman",sum:"Former president of Parke-Davis Pharmaceuticals and of Warner-Lambert’s Pharmaceutical Division."}];
/* news: only items with a working link (sermonixpharma.com/news). [date, headline, source, url] */
var NEWS=[
 ["January 2026","Athira Pharma, licensee of lasofoxifene, becomes LeonaBio","LeonaBio",TW+"/athira-pharma-announces-name-change-to-leonabio-inc-with-new-ticker-lona/"],
 ["December 2025","Athira Pharma licenses the lasofoxifene Phase 3 programme from Sermonix, with financing of up to $236 million","Athira Pharma",TW+"/athira-pharma-announces-exclusive-license-to-lasofoxifene-phase-3-development-program-for-metastatic-breast-cancer-candidate-and-a-financing-for-up-to-236-million/"],
 ["March 2025","Sermonix and Regor announce a strategic collaboration on Regor’s rCARD discovery platform in breast cancer","Sermonix",TW+"/sermonix-and-regor-announce-strategic-collaboration-to-optimize-regors-proprietary-rcard-platform-for-identification-of-novel-targets-and-therapeutics/"],
 ["January 2025","Clinical Breast Cancer publishes ELAINE-1 analysis: lasofoxifene, not fulvestrant, improved vaginal and vulvar symptoms","Sermonix",TW+"/sermonix-announces-clinical-breast-cancer-publication-of-article-examining-effects-of-lasofoxifene-versus-fulvestrant-on-urogenital-symptoms-in-patients-with-esr1-mutated-er-her2-metastatic-breast-c/"],
 ["November 2024","Lasofoxifene well tolerated, with promising Ki67 suppression, in the Phase 2 I-SPY 2 neoadjuvant arm","Sermonix",TW+"/sermonix-pharmaceuticals-lasofoxifene-is-well-tolerated-demonstrates-promising-ki67-suppression-in-phase-2-i-spy-2-arm-evaluating-therapy-in-neoadjuvant-breast-cancer-setting/"],
 ["July 2024","US patent for lasofoxifene in aromatase-resistant ER+ breast cancer without ESR1 mutations","Sermonix",TW+"/sermonix-pharmaceuticals-receives-u-s-patent-for-lasofoxifene-as-method-for-treating-aromatase-resistant-er-breast-cancer-in-the-absence-of-esr1-mutations/"]];
var SHEETS=[];
