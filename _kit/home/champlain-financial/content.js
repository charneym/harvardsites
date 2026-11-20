var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Public Sans"','500 1em "Public Sans"','600 1em "Public Sans"'];
var WEB="https://www.champlaincanada.com/";
var TEL="514.282.3585",TELH="tel:+15142823585";
var MAIL="info@champlaincanada.com";
var MAP="https://www.google.com/maps/search/?api=1&query=1000+rue+Sherbrooke+Ouest+bureau+1700+Montreal+QC+H3A+3G4";
/* "typical" investment targets, from the firm's Our Approach page */
var CRIT=[["Size","EBITDA ranging between $3 million and $20 million."],
 ["Sectors","Principally consumer, retail distribution, healthcare and niche manufacturing."],
 ["Track record","An established history of sales and profit growth."],
 ["Differentiation","Products or services that are clearly differentiated and that satisfy a market need."],
 ["Partnership","Companies looking not only for capital but also for operation-oriented business partners to build the business."],
 ["Management","A strong management team in place or, if not, externally recruited managerial talent identified and available."]];
/* current portfolio, in the order and wording of the firm's Portfolio page (condensed) */
var PF=[
 ["Induspac Group","Design, manufacturing and distribution of custom and stock corrugated cardboard packaging; established in 1973, headquartered in Candiac, Quebec.","Packaging"],
 ["Ventilation Jean Roy","Design, installation and maintenance of heating, ventilation and air-conditioning systems; founded in 1991.","HVAC services"],
 ["Équipements St-Germain","Operator-free rental of heavy machinery and transportation of construction equipment across Canada.","Equipment rental"],
 ["Manulift","A Canadian company specializing exclusively in telehandlers, with four branches and over 400 employees across the country.","Equipment"],
 ["Amisco","Four manufacturing plants in L’Islet, Quebec, producing kitchen and dining room furniture sold across North America.","Manufacturing"],
 ["TCED / Batteries Expert","A franchise network of 60 Batteries Expert retail stores, and distribution of batteries, chargers and renewable energy products.","Retail distribution"],
 ["Groupe DMV","Management of veterinary establishments in Quebec, founded in 1993 to support independent animal health professionals.","Healthcare"],
 ["Armoires Cuisines Action","Québec’s leader in the design, manufacture and installation of custom kitchen cabinets and residential storage.","Manufacturing"],
 ["Location Sauvageau / Location Légaré","Short- and medium-term vehicle rentals for commercial and institutional clients in Quebec, with a fleet of 3,800+ utility vehicles.","Vehicle rental"],
 ["Groupe Grandio","A restaurant group of more than 3,800 employees in more than 55 locations, including La Cage – Brasserie Sportive and Cochon Dingue.","Restaurants"],
 ["Enjay Converters","For over 30 years, food-safe packaging products for the food and bakery industry.","Packaging"],
 ["Dion Herbs and Spices","A Montréal-based packager, marketer and wholesaler of culinary herbs and spices.","Food"],
 ["Humanity Bakeries","A Quebec platform in specialized bakery and pastry, built from Boulangerie Dumas, Maison Isabelle and Aliments 2000.","Food"],
 ["Naya Waters","A leader in branded, single-serve bottled water in Quebec, bottling spring water in Mirabel.","Beverage"],
 ["Wong Wing","The leading Canadian frozen food brand for Chinese snacks, appetizers, entrées, soups and sides.","Food"],
 ["Seccan","A leading Canadian distributor of security solutions and door hardware, through Serrubec, Hardware Agencies and McGregor Hardware Distribution.","Distribution"],
 ["GHP Group","Based in Chicago, development and distribution of seasonal products for major home centres and retailers.","Consumer products"],
 ["Spencer Supports","Through HB Heller and GSL Creations, a Canadian leader in value ladies’ and teens’ apparel.","Apparel"],
 ["La Canadienne","Quality women’s footwear made under its namesake brand since 1997, with a waterproof collection made in Canada.","Footwear"],
 ["Champlain Seafood","Parent of Cheticamp Fisheries, Riverside Lobster International, Boston Lobster and Captain Dan’s Seafood, among others.","Seafood"],
 ["BCI Foods","Baxters Canada Inc., a leading manufacturer of canned soups and sauces in Saint-Hyacinthe, Québec.","Food"],
 ["Groupe Must Société","Contemporary furniture and accessories for interior and exterior spaces, including Maison Corbeil and La Galerie du Meuble.","Home furnishings"],
 ["Brault & Bouthillier","Quebec’s largest distributor of school supplies, founded in 1946 and serving Quebec and Ontario.","Distribution"],
 ["JLD-Laguë Group","One of the largest Canadian networks of John Deere equipment dealerships, across Eastern Ontario and Quebec.","Equipment dealers"],
 ["Orthofab","Design, manufacture and sale of high-end wheelchairs and seating products, headquartered in Quebec City.","Healthcare"]];
/* illustrative exits, as listed on the firm's Portfolio page */
var PRIOR=["Transports Inter-Nord","Louis Garneau Sports","Marine Press","LB Maple Treat","Garda Background Screening","Choisy Laboratories","Kanuk","Landry Investment Management","Ogilvy","Neptune","Pro Hockey Life","Dismed"];
var TEAM=[
 {g:"Partners",name:"Pierre Simard",title:"Managing Partner",sum:"Founded Champlain in 2004 after co-founding Champlain Capital Partners, a US$150 million buyout fund; formerly with Lazard Frères."},
 {g:"Partners",name:"Jean-Stéphane Yansouni",title:"Partner",sum:"A partner since 2005; formerly a management consultant with McKinsey & Company. Sits on a number of portfolio boards."},
 {g:"Partners",name:"Scott Jackson",title:"Partner",sum:"Joined in 2006 from McKinsey; as President of Pro Hockey Life, grew it into Canada’s leading hockey retailer."},
 {g:"Partners",name:"Francois Schumayer",title:"Partner",sum:"Joined in 2018; formerly a project leader with Boston Consulting Group and in PSP Investments’ private equity group."},
 {g:"Advisory & Operating Partners",name:"Philippe Arrata",title:"Operating Partner",sum:"Formerly CEO of Mountain Equipment Co-op and Chief Financial & Administrative Officer of Best Buy Canada."},
 {g:"Advisory & Operating Partners",name:"Daniel Cousineau",title:"Operating Partner",sum:"Former president of St-Hubert; President of Baxters Canada Inc. (BCI)."},
 {g:"Advisory & Operating Partners",name:"Terry Enepekides",title:"Operating Partner",sum:"Associated with Champlain since 2008; President of JLD-Laguë and chairman of the Équipement St-Germain board."},
 {g:"Advisory & Operating Partners",name:"André La Forge",title:"Advisory Partner",sum:"Joined in 2019 after 16 years in private equity and 11 years leading KPMG’s financial advisory services in Montréal."},
 {g:"Advisory & Operating Partners",name:"Paul Le Brun",title:"Operating Partner",sum:"Former partner with McKinsey & Company and SVP with Kruger Inc.; President of Brault & Bouthillier."}];
/* news: only items with a working link */
var NEWS=[
 ["July 30, 2026","Équipement St-Germain, backed by Champlain, acquires Montréal-based Location Alary","Rental Equipment Register","https://www.rermag.com/mergers-acquisitions/article/55394673/quebecs-equipement-st-germain-acquires-montreal-based-location-alary"],
 ["July 2, 2026","Boucher Lortie welcomes a strategic investor group led by Champlain, with Desjardins Capital and Fondaction","Canada Newswire","https://www.newswire.ca/news-releases/boucher-lortie-welcomes-strategic-investor-group-to-support-next-phase-of-growth-and-pursue-consolidation-opportunities-801634997.html"],
 ["December 2025","Induspac partners with a group of Québec investors led by Champlain Financial","Raymond Chabot Grant Thornton","https://www.rcgt.com/en/achievements/groupe-induspac-announces-financial-partnership/"],
 ["August 24, 2022","Champlain Financial Corporation announces the acquisition of Armoires Cuisines Action","Champlain Financial","https://www.champlaincanada.com/release/champlain-financial-corporation-announces-acquisition-armoires-cuisines-action/"]];
var SHEETS=[];
