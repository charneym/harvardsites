var FONTS=['300 1em "Epilogue"','italic 300 1em "Epilogue"','400 1em "Epilogue"','italic 400 1em "Epilogue"','400 1em "Poppins"','500 1em "Poppins"','600 1em "Poppins"'];
var MAIL="hello@biomimir.ca";
var LI="https://www.linkedin.com/company/biomimir/";
var NW="https://www.biomimir.ca/news/";
/* products: every line from biomimir.ca (/home, /news/biomimir-medtech-innovator-2025-accelerator-cohort,
   /news/biomimir-has-graduated-from-the-creative-destruction-labs-program, /news/biomimir-to-present-at-biotech-showcase-2024).
   [area, title, sub, status, detail, link, link label] */
var PIPE=[
 ["MatriFlex · lead","Bioresorbable skin substitute and wound filler","Complex wounds","Proof of concept","A liquid-to-solid, bioresorbable skin substitute. It goes into the wound as a liquid, sets in place, and is designed for complex wounds such as ulcers, abscesses and fistulas.",NW+"biomimir-medtech-innovator-2025-accelerator-cohort","BioMimir news"],
 ["MatriSoothe","Second product in the development pipeline","Wound care","In development","Presented alongside MatriFlex by Dr. Fiona Simpson at Biotech Showcase 2024 in San Francisco, as one of two products in BioMimir’s development pipeline.",NW+"biomimir-to-present-at-biotech-showcase-2024","BioMimir news"]];
/* biomimir.ca/team. Text-only masthead; summaries condensed from their bios. */
var TEAM=[
 {g:"Co-founders",name:"Dr. Fiona Simpson",title:"CEO and Co-Founder",sum:"PhD in Biomedical Engineering, Université de Montréal; her thesis on biomimetic materials for in situ corneal regeneration won the 2021–2022 IGB Award for Best Doctoral Thesis. Directed the OPTEC cleanrooms at Hôpital Maisonneuve-Rosemont, 2018–2021."},
 {g:"Co-founders",name:"Dr. Elle Edin",title:"CSO and Co-Founder",sum:"Doctorate in polymer chemistry, Uppsala University. Developed medical devices for two world-leading regenerative medicine groups, including biomaterials for corneal implants and in situ fillers."},
 {g:"Co-founders",name:"Benjamin Yam",title:"COO and Co-Founder",sum:"Healthcare operations leader, formerly Regional Director at MyHealth Centre, the largest diagnostic health facility in Ontario. Global Executive MBA, Rotman School of Management."}];
/* news: each item links to BioMimir's own post. [date, headline, source, url] */
var NEWS=[
 ["October 2025","NASDAQ congratulates the 2025 MedTech Innovator cohort, featuring the graduates’ logos in Times Square","BioMimir news",NW+"nasdaq-congratulates-2025-medtech-innovator-cohort"],
 ["June 2025","BioMimir is selected for the MedTech Innovator 2025 Accelerator: one of 65 companies from nearly 1,500 applicants","BioMimir news",NW+"biomimir-medtech-innovator-2025-accelerator-cohort"],
 ["February 2025","BioMimir wins a CIX Startup Award in the Emerging category","BioMimir news",NW+"biomimir-wins-a-cix-startup-award"],
 ["January 2024","Dr. Fiona Simpson presents MatriFlex and MatriSoothe at Biotech Showcase 2024 in San Francisco","BioMimir news",NW+"biomimir-to-present-at-biotech-showcase-2024"],
 ["June 2023","BioMimir graduates from the Creative Destruction Lab’s Biomedical Engineering stream at UBC Sauder","BioMimir news",NW+"biomimir-has-graduated-from-the-creative-destruction-labs-program"],
 ["May 2023","BioMimir wins the 2023 Startup TNT Life Science Investment Summit","BioMimir news",NW+"biomimir-wins-the-2023-startup-tnt-life-sciences-summit"]];
var SHEETS=[];
