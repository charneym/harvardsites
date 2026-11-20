var FONTS=['400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Urbanist"','500 1em "Urbanist"','600 1em "Urbanist"'];
var WEB="https://www.cedarvalleywealth.com/";
var TEL="319-266-6507",TELH="tel:+13192666507";
var MAIL="invest@cedarvalleywealth.com";
var CRS="https://reports.adviserinfo.sec.gov/crs/crs_115511.pdf";
var ADV2="https://files.adviserinfo.sec.gov/IAPD/Content/Common/crd_iapd_Brochure.aspx?BRCHR_VRSN_ID=1024610";
var ADV="https://adviserinfo.sec.gov/firm/summary/115511";
/* the four components of the firm's philosophy (/cvwa/cvwa-our-philosophy and the four service pages) */
var SVC=[
 ["01","Financial Planning","Where are you now? Where do you want to be? How can you get from here to there? Planning is a process, not an event: your resources are Point A, your goals are Point B, and the plan is the roadmap between them. Taxes, income and estate, are always part of it, a natural outgrowth of our CPA heritage."],
 ["02","Investment Advice","We set appropriate investments for every time horizon, in clear, concise and measurable Investment Policies with specific ranges for each asset class. Clients come to us to find out what they need, not what a questionnaire says is “suitable”."],
 ["03","Asset Management","Where the rubber hits the road. We manage your assets according to the advice given, using low-expense, low-turnover, broadly diversified funds. We don’t sell investments to our clients. Never have. Never will."],
 ["04","Performance Review","Each year we measure the actual performance of your investments against asset-class benchmarks and send you an annual report. If your goals or time horizons have changed, the plan is revised and the cycle begins again."]];
/* six investment principles (/cvwa/asset-management) */
var PRIN=[["Risk and return are related.","We manage risk where we can and accept it where we can’t."],
 ["Asset allocation is the key.","We concentrate on the asset classes, not on picking stocks."],
 ["Diversification is critical.","Given the choice, we buy every stock in an asset class, through mutual funds."],
 ["Market timing is futile at best, fatal at worst.","Today is the hardest day there is to invest. But it is the only day we have."],
 ["Discipline reaps rewards.","No fads. Hedge funds have no place in our portfolios."],
 ["Costs matter.","Period."]];
var TEAM=[
 {name:"Karla R. Hoppes, CFP®",title:"Managing Member and Chief Compliance Officer",img:WEB+"wp-content/uploads/2024/05/DSC01632-Edit-Karla-Final1.png",mail:"Karla@CedarValleyWealth.com",ext:"103",
  bio:"Thirty years in financial services, advising individuals, families, 401(k) participants and business owners. An approved advisor with Dimensional Fund Advisors; partner with Bob Heaton since the firm’s formation in 2014."},
 {name:"Robert M. Heaton",title:"Member and Founder",img:WEB+"wp-content/uploads/2015/08/CVWA-2849-Website-Slider_512x512-7570-300x300.jpg",mail:"Bob@CedarValleyWealth.com",ext:"101",
  bio:"Founded Heaton Adams Financial Services in 2001, which became Cedar Valley Wealth Advisors in 2014. A CPA by background, he received the Iowa Society of CPAs’ Public Service Award in 1995, and co-founded Cedar Valley Hospice and Silos and Smokestacks."},
 {name:"Jake Hoppes",title:"Financial Assistant",img:WEB+"wp-content/uploads/2024/05/DSC01599-Edit-Jake-Final.png",mail:"Jake@CedarValleyWealth.com",ext:"104",
  bio:"A University of Northern Iowa finance graduate with an emphasis in personal wealth management. He supports Karla and works on financial planning and client reports."},
 {name:"Lorrin Schofield",title:"Staff Accountant and Financial Services Support",img:WEB+"wp-content/uploads/2024/05/DSC01595-Edit-Lorrin-Final.png",mail:"Lorrin@TouchstoneIowa.com",ext:"102",
  bio:"Joined in 2023, supporting both Cedar Valley Wealth Advisors and Touchstone Tax & Accounting and their clients."},
 {name:"Tina Groe",title:"Director of First Impressions",img:WEB+"wp-content/uploads/2024/05/DSC01590-Edit-Tina-Final.png",mail:"Tina@CedarValleyWealth.com",ext:"",
  bio:"Greets every client with a warm and friendly smile, from a background in office administration, compliance and auditing. A U.S. Navy veteran."}];
var SHEETS=[];
