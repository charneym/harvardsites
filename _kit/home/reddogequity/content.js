var FONTS=['500 1em "Cormorant Garamond"','italic 500 1em "Cormorant Garamond"','600 1em "Cormorant Garamond"','400 1em "Public Sans"','500 1em "Public Sans"','600 1em "Public Sans"'];
var WEB="https://reddogequity.com/";
var TEL="404-458-7777",TELH="tel:+14044587777";
var MAP="https://www.google.com/maps/search/?api=1&query=4401+Northside+Parkway+Suite+100+Atlanta+GA+30327";
/* what they look for: the Investment Strategy page, close to word for word */
var CRIT=[["Leadership","An identified Red Dog business leader to run the company, with real “skin in the game”: a substantial personal investment in the company."],
 ["Experience","Companies operating in industries where we or our partners have deep experience."],
 ["Stability","A stable business with strong customer relationships and a diverse book of business."],
 ["An edge","Something significant about the company that gives it an edge. We avoid companies whose disappearance would not be noticed."],
 ["Growth","Multiple ways to grow the business, including by acquisition."],
 ["Risk","The absence of large risks that are beyond management’s control."],
 ["Value we add","Red Dog Equity’s ability to add value after the acquisition."],
 ["Control","We prefer control investments, and will consider minority investments when all of the criteria are present and we have negative control."]];
/* their Industry Focus ("circle of competence") */
var IND=["Transportation services","Business services","Restaurants","Consumer services","Specialty retail","Retail medical","Specialty distribution","Light manufacturing","Industrial services","Environmental services"];
/* portfolio, as listed on their Portfolio page; descriptions from each company page */
var PF=[
 {n:"Entegee",s:"Engineering talent",d:"A U.S. engineering talent business headquartered in Braintree, Massachusetts, supporting clients across specialized technical markets through national recruiting capabilities.",y:"Acquired 2026",u:"https://www.entegee.com/"},
 {n:"ADL Final Mile",s:"Transportation and logistics",d:"Transportation and logistics services across the Midwest, Southeast and Southwest for over 35 years: 27 states and 79 company-managed distribution locations.",y:"Formed 2022",u:"https://www.adlfinalmile.com/"},
 {n:"Mammoth Holdings",s:"Consumer services",d:"Founded in 2002, Mammoth owns and operates a multi-state portfolio of car wash brands, partnering with dominant regional operators in a highly fragmented sector.",y:"Platform formed 2018",u:"https://mammothholdings.com/"}];
var RLZ=[{n:"Superior USA Waste",s:"Environmental services",d:"An integrated network of collection, processing and disposal facilities in Oklahoma. Sold to GFL Environmental in September 2025.",y:"Realized 2025",u:"https://superiorusawaste.com/"}];
/* portraits from their own Team page */
var PH="https://reddogequity.com/imgs/";
var TEAM=[
 {name:"Toby Chambers",title:"Co-Founder and Managing Director",img:PH+"red-dog-equity-toby.png",bg:"Previously Roark Capital Group (11 years) and Rhône Group. 25+ years of experience, 18 as a private equity investor."},
 {name:"Tom Connolly",title:"Co-Founder and Managing Director",img:PH+"red-dog-equity-tom.png",bg:"Founding senior executive and lead M&A executive at XPO Logistics, which completed 17 acquisitions during his tenure."},
 {name:"Chance McNamara",title:"Managing Director",img:PH+"red-dog-equity-chance.png",bg:"Joined Red Dog in 2019 from Roark Capital, where he worked on Atkins, Pet Valu, Pet Supermarket and Massage Envy."},
 {name:"John Phelps",title:"Managing Director, Operations",img:PH+"red-dog-equity-john-phelps.jpg",bg:"Co-founder of Clutch Technologies, acquired by Cox Automotive; later Head of Product for Cox Automotive’s mobility platform."},
 {name:"Billy Huger",title:"Senior Advisor",img:PH+"red-dog-equity-billy-huger.jpg",bg:"Over 30 years building and managing alternative asset management firms, most recently at Monarch Private Capital."},
 {name:"Amy Githens",title:"Manager of Operations",img:PH+"red-dog-equity-githens.png",bg:"Fifteen years at The Coca-Cola Company and Foundation, after HR and operations roles at Arthur Andersen."}];
/* press, newest first, each linking to the release or article their own Press page links to */
var NEWS=[
 ["June 12, 2026","Adecco Group’s Entegee acquired by Red Dog Equity","Staffing Industry Analysts","https://www.staffingindustry.com/news/global-daily-news/adecco-groups-entegee-acquired-by-red-dog-equity"],
 ["June 11, 2026","Red Dog Equity to acquire Entegee","ACCESS Newswire","https://www.accessnewswire.com/newsroom/en/banking-and-financial-services/red-dog-equity-to-acquire-entegee-1176024"],
 ["January 13, 2026","ADL Final Mile acquires Xcel Delivery Services","Press release (PDF)","https://reddogequity.com/pdfs/2026/260113-ADL-Final-Mile%20Acquires-Xcel-Delivery-Services.pdf"],
 ["September 9, 2025","Red Dog Equity sells Superior Waste","Press release (PDF)","https://reddogequity.com/pdfs/2025/250909-Superior-Sale-to-GFL.pdf"],
 ["September 3, 2025","ADL Final Mile acquires DMC Logistics","Press release (PDF)","https://reddogequity.com/pdfs/2025/250903-ADL-Final-Mile-Acquires-DMC-Logistics-LLC.pdf"],
 ["December 11, 2024","ADL Final Mile acquires Henry Industries","Press release (PDF)","https://reddogequity.com/pdfs/2024/241211-ADL-Henry-Press-Release.pdf"]];
var SHEETS=[];
