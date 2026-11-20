var FONTS=['400 1em "Cormorant Garamond"','italic 400 1em "Cormorant Garamond"','500 1em "Cormorant Garamond"','600 1em "Cormorant Garamond"','400 1em "Manrope"','500 1em "Manrope"','700 1em "Manrope"'];
var WEB="https://progressequity.com/";
var TEL="303-953-4777",TELH="tel:+13039534777";
var MAIL="steve@progressequity.com";
var MAP="https://www.google.com/maps/search/?api=1&query=6400+S+Fiddlers+Green+Circle+Suite+440+Greenwood+Village+CO+80111";
/* investment criteria, from the firm's home and Investment Focus pages */
var CRIT=[["EBITDA","A minimum of $2 million of annual EBITDA, with an established history of profitability."],
 ["Business model","Scalable and sustainable, generating high returns on capital: few fixed assets and/or low capital expenditure requirements for growth."],
 ["Transactions","Majority recapitalizations of founder-owned businesses, management buyouts, corporate carve-outs and full sales."],
 ["Geography","Businesses located throughout the United States."],
 ["Experience","Healthcare services, specialty foods, franchisors, communications and marketing services, manufacturing and business services."],
 ["Good fits","Growing companies that lack some of the systems, controls and processes institutional investors expect; asset-light services; regulated industries; founders seeking liquidity and future upside."]];
/* current portfolio, as listed on the firm's site (descriptions from its portfolio pages and announcements) */
var PF=[
 ["Davey Coach","One of the nation’s leading dealers of new and used mid-sized buses and shuttles, and a provider of passenger vehicles for lease and rental. Based in Denver.","Dealerships","https://www.daveycoach.com/"],
 ["Crestcom International","A leading global franchisor of management and leadership training, with more than 180 franchisees in over 60 countries. Based in Denver.","Franchising","https://www.crestcom.com/"],
 ["ProSet Modular","One of the leading set services companies for permanent modular construction, serving manufacturers, contractors and developers nationwide.","Construction","https://www.prosetmodular.com/"],
 ["Salisbury Moore","Renovation and remodeling for leading hotel brands and owners across the U.S. Founded in 2005; headquartered in Raleigh, North Carolina.","Construction","https://www.salisburymoore.com/"],
 ["Hanson Lab Solutions","The largest direct, vertically integrated lab casework manufacturer and interiors supplier in the western U.S. Founded in 1977; Camarillo, California.","Manufacturing","https://www.hansonlab.com/"],
 ["InDemand Industrial Services","Maintenance and construction services for industrial facilities across the U.S., from offices in Camden, Arkansas and Bismarck, North Dakota.","Industrial services",""],
 ["Medical Indicators","A manufacturer of disposable thermometers for dialysis centers, hospitals and long-term care. Based outside Princeton, New Jersey.","Healthcare","https://www.medicalindicators.com/"]];
/* realized investments named on the firm's site */
var REAL=["Westcon Industries","Terracare Associates","Diversified Machine Systems","Texas Home Health Holdings","Specialty Desserts","Option 1 Nutrition Solutions","Oncology Molecular Imaging","Network for Medical Communication and Research","Future Food"];
var TEAM=[
 {name:"Michael L. Bailey",title:"Partner",img:PIC.bailey,note:"Founding partner; formerly President and CEO of Mission Foods and a Frito-Lay sales executive."},
 {name:"Stephen N. Sangalis",title:"Partner",img:PIC.sangalis,note:"Founding partner; previously a founding partner of Rocky Mountain Capital Partners."},
 {name:"Paul A. Yeoham",title:"Partner",img:PIC.yeoham,note:"Founding partner; previously a founding partner of Transition Capital Partners."},
 {name:"Carolina B. Hensley",title:"Principal",img:PIC.hensley,note:"With the firm since 2011; over 20 years in banking, mezzanine and private equity."},
 {name:"Clay Fox",title:"Vice President",img:PIC.fox,note:"Joined in 2020, with close to 15 years of origination and transaction experience."}];
var NEWS=[
 {d:"2026-09-17",s:"Parkway Capital",t:"Parkway Capital announces investment in Davey Coach, in partnership with Northcreek Mezzanine and Progress Equity Partners",u:"https://www.calvertstreetinvestmentpartners.com/parkway-capital-announces-investment-davey-coach/"},
 {d:"2026-09-17",s:"Davey Coach",t:"Davey Coach acquires Hudson Bus Sales, expanding into Texas and Florida",u:"https://www.daveycoach.com/blog/18369/Davey-Coach-Acquires-Hudson-Bus-Sales-Expanding-National-Bus-Sales-and-Service-Capabilities"},
 {d:"2025-01-14",s:"Progress Equity",t:"Progress Equity Partners invests in ProSet Modular",u:"https://progressequity.com/2025/01/14/progress-equity-partners-invests-in-proset-modular/"},
 {d:"2024-09-20",s:"Progress Equity",t:"Progress Equity Partners recapitalizes hotel renovation leader Salisbury Moore",u:"https://progressequity.com/2024/09/20/progress-equity-partners-recapitalizes-salisburymoore/"},
 {d:"2023-04-21",s:"Progress Equity",t:"Progress Equity Partners recapitalizes Hanson Lab Solutions",u:"https://progressequity.com/2023/04/21/progress-equity-partners-recapitalizes-hanson-lab-solutions/"}];
var SHEETS=[];
