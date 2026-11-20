var FONTS=['400 1em "Newsreader"','italic 400 1em "Newsreader"','500 1em "Newsreader"','400 1em "Figtree"','500 1em "Figtree"','800 1em "Figtree"'];
var WEB="https://www.jpbpartners.com/";
var TEL="410-884-1960",TELH="tel:+14108841960";
var MAIL="jpbpartners@gmail.com";
var ADV="https://adviserinfo.sec.gov/firm/summary/159961";
var MAP="https://www.google.com/maps/search/?api=1&query=7556+Teague+Road+Suite+310+Hanover+MD+21076";
/* investment criteria, word for word from the firm's Private Equity page */
var CRIT=[["Revenue","Companies with $10M–$100M of revenue."],
 ["EBITDA","$2M+ for a platform; positive EBITDA for an add-on."],
 ["Industry verticals","Thematic and industry driven: consumer, retail, franchising, or other and opportunistic."],
 ["Company situations","Typically family or operator owned, or a corporate carve-out, with a strong management team in place or identified."],
 ["Transaction type","Buyouts, recapitalizations and growth equity."],
 ["Company profile","Attractive growth potential, an opportunity to expand a market niche, and a proven, scalable business model."]];
/* representative portfolio, current and realized, as listed on the firm's site (no status given per company) */
var PF=[
 ["The Helpful Hardware Company","Independent Ace Hardware affiliate operating 20 home improvement stores across the Southeast.","Retail"],
 ["Blue Mountain Plumbing, Heating & Cooling","Full-service HVAC and plumbing provider serving Fishersville and the Shenandoah Valley, Virginia.","Home services"],
 ["Turners Service","HVAC and plumbing experts serving Northern Virginia.","Home services"],
 ["Bowman’s","Full-service HVAC, plumbing, electrical and design specialist serving Northern Virginia.","Home services"],
 ["W.A. Sherman","Century-old HVAC, plumbing and electrical service provider in Orange, Virginia.","Home services"],
 ["Air-Right Energy Design","Full-service HVAC, plumbing, electrical and design specialist in Manassas, Virginia.","Home services"],
 ["GreenBoots Heating & Air","Full-service HVAC and plumbing provider in the Fredericksburg–Spotsylvania area of Virginia.","Home services"],
 ["Alpha Plumbing","Plumbing specialist serving Anne Arundel and Baltimore, Maryland communities for over 30 years.","Home services"],
 ["Doors By Mike","Garage door installation and repair in Conyers, Georgia and the surrounding areas.","Home services"],
 ["ZIPS Cleaners","Fast-turnaround dry cleaning and laundry service with 70+ locations.","Franchising"],
 ["Greene Turtle Franchising Group","Lively sports bar offering classic American fare and drinks.","Franchising"],
 ["Ted’s Bulletin","Retro-chic diner serving upscale comfort food and cocktails.","Restaurants"],
 ["Ticknors Clothiers","Premium men’s styling and tailoring.","Retail"],
 ["Hometown Hospice & Homecare","Compassionate, full-service home health and hospice provider.","Healthcare"],
 ["Marathon Live","Producing, promoting and operating live entertainment experiences.","Entertainment"],
 ["St. Joseph Aspirin","Low-dose aspirin brand since 1887.","Consumer brands"],
 ["Di-Gel","OTC antacid and anti-gas digestive relief.","Consumer brands"],
 ["Calgon","Iconic bath and body brand.","Consumer brands"]];
/* a sampling of real estate investments, as listed on the firm's site */
var RE=[
 ["Office","Arundel Mills Corporate Park","Hanover, Maryland","240,000 sq ft office and 55,000 sq ft retail","Developed; currently leased and managed"],
 ["Residential land","Parkside","Hanover, Maryland","280+ acres entitled for 1,200+ townhomes","1,100 lots delivered to date"],
 ["Senior living","Willows at Victoria Falls","Laurel, Maryland","75 active-adult for-rent apartments","Developed, leased, managed and sold"],
 ["Office","Knowledge Farms","Urbana, Maryland","Phase I: 32,000 sq ft medical office building","Purchased, managed and sold"],
 ["Retail","Centre at Edgewater","Edgewater, Maryland","45,000 sq ft fitness concept with Arby’s pad","Purchased; currently managed"],
 ["Office","Centre Park I & II","Columbia, Maryland","67,000 sq ft office building","Purchased, managed and sold"],
 ["Retail","Eldersburg Square","Eldersburg, Maryland","12,000 sq ft retail strip; 6 acres zoned for active adult","Phase 1 and Phase 2"],
 ["Retail","Kendall Hardware","Clarksville, Maryland","33,000 sq ft standalone retail store","Purchased, managed and sold"],
 ["Retail","Ace Brookstone","Kennesaw, Georgia","12,000 sq ft standalone retail store","Purchased, managed and sold"],
 ["Residential","Crestview","Crestview, Florida","540 acres entitled for over 1,000 lots","Entitled; approved subdivision sold"],
 ["Residential land","Panama City","Panama City, Florida","8.4 acres entitled for mixed use: 120 townhome lots","Entitled; land sold"]];
var TEAM=[
 {name:"JP Bolduc",title:"Founder & Chairman"},
 {name:"Jim Bolduc",title:"President & CEO"},
 {name:"Jay Jang",title:"COO & CCO"},
 {name:"Mike Kalinock",title:"Sr. Managing Director"},
 {name:"Mary Glagola",title:"CAO"},
 {name:"Andrew Berdahl",title:"Vice President"},
 {name:"Nick Ground",title:"Vice President"},
 {name:"Cindy Cannon",title:"Associate"},
 {name:"Jerry Feng",title:"Associate"},
 {name:"Adam Chin",title:"Associate"},
 {name:"Thomas Matta",title:"Analyst"},
 {name:"Michael Ellis",title:"Sr. Accountant, Investor Relations"},
 {name:"Chad Terry",title:"Sr. Accountant, Investor Relations"},
 {name:"Lorrie Zaycer",title:"Property Operations Coordinator; Executive Assistant"},
 {name:"Travis Francis, Jr.",title:"Property Manager"},
 {name:"Jeff Williams",title:"Facility Engineer"}];
var NEWS=[];
var SHEETS=[];
