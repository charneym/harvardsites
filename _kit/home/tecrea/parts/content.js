var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Schibsted Grotesk"','500 1em "Schibsted Grotesk"','600 1em "Schibsted Grotesk"','600 1em "Big Shoulders Display"','700 1em "Big Shoulders Display"'];
var WEB="https://www.tecrea.com/";
var MAIL="info@tecrea.com";
var ADDR="London Bioscience Innovation Centre (LBIC), 2 Royal College Street, London NW1 0NH, United Kingdom";
var MAP="https://www.google.com/maps/search/?api=1&query=London+Bioscience+Innovation+Centre+2+Royal+College+Street+London+NW1+0NH";
var NP=WEB;
/* the Nanocin range, from tecrea.com/reagents, /drug-forumlation and /bioprocessing. [tag, name, line, detail] */
var PROG=[
 ["DNA","Nanocin PLASMID","DNA transfection","Engineered to enter mammalian cells, for highly efficacious DNA transfection in a range of cell types."],
 ["RNA","Nanocin RNA","RNA transfection","An effectively non-toxic RNA transfection agent, designed to be compatible with clinical development."],
 ["Small molecules","Nanocin SM","Small-molecule delivery","Designed with size in mind: delivers exceptionally small and highly hydrophobic molecules into cells."],
 ["Proteins","Nanocin PRO","Protein and peptide delivery","Reimagines the use of peptides and proteins, for efficient delivery into cells and tissue."],
 ["GMP","Nanocin GMP","Drug formulation and bioprocessing","A delivery tool with an exceptional safety profile, for reformulating drugs and for GMP-compliant, scalable AAV and lentivirus production."]];
var LABS=["Royal Veterinary College, London","Loughborough University","IDIBELL, Barcelona","Newcastle University","PRONEC Ltd"];
/* programmes and partnerships, from tecrea.com/latest-news, /human-health and /animal-health. [area, title, detail] */
var PIPE=[
 ["Women’s health","Recurrent urinary tract infections","A dual-action, non-antibiotic antimicrobial therapy that both combats infection and relieves symptoms through local administration. Developed with UCL’s Bladder Infection and Immunity Group and funded by the Innovate UK Biomedical Catalyst (2025)."],
 ["Human health","Topical terbinafine for onychomycosis","A Phase 2b study of a topical terbinafine antifungal product that uses Nanocin met its primary endpoint, showing superiority over vehicle with a high level of statistical significance (2024)."],
 ["Animal health","Endometritis in dairy cows","A farmer-centred local treatment that combines tissue release and infection control without antibiotics, developed with a global veterinary pharmaceutical company and funded by Innovate UK (2024)."],
 ["Agriculture","Sanzone seed coating","A low-cost, non-toxic seed coating built on Nanocin that decontaminates seeds and protects them from infection, tested in Zimbabwe and South Africa through the UK–South Africa SOFI 2 programme (2025)."],
 ["Under licence","Animal and human health","Through past partnerships the platform is used under licence in otitis externa, mastitis, endometritis, ophthalmology, topical fungal infections, topical anti-inflammation and cosmetics."]];
/* people, from tecrea.com/meet-the-team (titles exactly as published; no bios are published) */
var TEAM=[["Simon Bate","Chief Executive Officer"],["Liam Good","Chief Scientific Officer"],["Laila El Attar","Principal Scientist"],["Mafalda Castro","Research Scientist"],["Josephous Miculob","Research Scientist"]];
var ADV=[["Omar A Ibrahimi","Dermatology & Human Health"],["David Wheeler","Dermatology & Animal Health"],["Steven van Winden","Livestock"],["Paul Dick","Animal Health"],["Liam McIlveen","Legal"],["Richard Smith","Finances"]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["October 20, 2025","Tecrea secures Innovate UK Biomedical Catalyst funding to advance its UTI therapy","Tecrea","https://www.tecrea.com/tecrea-ltd-secures-innovate-uk-biomedical-catalyst-funding-to-advance-groundbreaking-uti-therapy/"],
 ["July 23, 2025","The i Paper on Tecrea’s non-antibiotic alternative for chronic UTI","The i Paper","https://inews.co.uk/news/chronic-uti-cure-hope-treatment-3781326"],
 ["June 2, 2025","Tecrea completes the SOFI 2 programme and advances Sanzone seed coating","Tecrea","https://www.tecrea.com/tecrea-ltd-completes-sofi2-program-and-advances-sanzone-seed-coating-technology/"],
 ["November 22, 2024","Selected for the second cohort of the Accelerating FemTech programme","Tecrea","https://www.tecrea.com/tecrea-ltd-has-been-selected-for-the-second-cohort-of-the-accelerating-femtech-programme/"],
 ["April 16, 2024","Phase 2b clinical result for a topical antifungal using Nanocin technology","Tecrea","https://www.tecrea.com/successful-hase-2b-human-clinical-trial-result-involving-tecreas-nanocin-technology/"]];
var SHEETS=[];
