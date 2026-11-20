var FONTS=['300 1em "Jost"','400 1em "Jost"','italic 400 1em "Jost"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"'];
var WEB="https://tessonics.com/";
var MAIL="saleseu@tessonics.com";
var TEL="+15192504455";
var IRAP="https://search.open.canada.ca/grants/record/nrc-cnrc%2C172-2026-2027-Q2-1046384%2Ccurrent";
/* facts: tessonics.com (home, about, contact, products: F2, F1-R, RIWA, smart welding gun, AM 1202), tessonicsmedical.com (3D-TRUBI),
   Government of Canada grants record NRC IRAP 172-2026-2027-Q2-1046384, University of Windsor (IDIR profile, Daily News 2024-05-14),
   Wikipedia (Roman Maev); all fetched 2026-11-20 */
var FIELDS=[["Automotive","Spot welds and adhesive bonds","Imaging-based quality control for carmakers, tier 1 and tier 2 suppliers, from the inspection bench to the welding gun itself."],
 ["Industry and aerospace","Non-destructive testing","Acoustic microscopy and material characterisation for welded joints, adhesive bonds, castings and composites, in aviation as well as automotive."],
 ["Medical","Diagnostic imaging","Ultrasonic medical devices, led by 3D transcranial ultrasound brain imaging, developed under several government contracts."]];
var PRODUCTS=[
 ["Spot weld inspection","F2 Platform","Portable matrix-array inspection that produces C-scan images of defects and structures, configurable as the Resistance Spot Weld Analyzer (RSWA) and the Adhesive Bond Inspection System (ABIS).","https://tessonics.com/products/f2"],
 ["Spot weld inspection","F1-R","The next generation of the F1: images a spot weld’s internal structure and checks the nugget diameter against the minimum, compatible with existing F1 software.","https://tessonics.com/products/f1r"],
 ["In-process monitoring","RIWA","The Real-Time Integrated Weld Analyzer: a high-frequency transducer inside the welding electrode inspects each weld while it is made, with AI-based analysis.","https://tessonics.com/products/riwa"],
 ["Welding","Smart welding guns","FlexGun Ultra and FlexGun 3, with a common gun body for all steel and aluminium spot welding, turn an assembly cell into a self-monitoring line.","https://tessonics.com/products/smart-welding-gun"],
 ["Laboratory","AM 1202 acoustic microscope","A desktop acoustic microscope for 2D and 3D imaging of internal structure, 5 to 100 MHz, for industrial quality control and biomedical research.","https://tessonics.com/products/am-1202"]];
var GROUP=[
 {g:"Tessonics Group",name:"Tessonics Inc.",title:"Canada · Windsor, Ontario",sum:"Head office, where all production and final assembly take place."},
 {g:"Tessonics Group",name:"Tessonics Corp.",title:"United States · Birmingham, Michigan",sum:"Founded in 2003, the first company of the group."},
 {g:"Tessonics Group",name:"Tessonics Europe GmbH",title:"Germany · Frechen",sum:"Sales and support for customers in Europe."},
 {g:"Tessonics Group",name:"Tessonics Poland Sp. z o.o.",title:"Poland · Wrocław",sum:"The group’s company in Poland."},
 {g:"Tessonics Group",name:"Tessonics Technology (Beijing) Ltd",title:"China · Beijing",sum:"The group’s company in China."},
 {g:"Spin-off companies",name:"Tessonics Medical Systems",title:"Birmingham, Michigan · 2019",sum:"Develops and commercialises 3D-TRUBI transcranial brain imaging."},
 {g:"Spin-off companies",name:"The True Image Solution",title:"Research company · 2013",sum:"Non-destructive evaluation of art and cultural heritage."}];
var CUST=["BMW","Ford","Chrysler","Mercedes-Benz","Volkswagen","Audi","Porsche","Toyota","Honda","Hyundai","Kia","General Motors","Volvo","Boeing","Bombardier","Embraer","Rolls-Royce","Magna","Gestamp","KUKA"];
var SHEETS=[];
