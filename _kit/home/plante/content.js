var FONTS=['300 1em "Fira Sans"','400 1em "Fira Sans"','500 1em "Fira Sans"','400 1em "Raleway"','500 1em "Raleway"','500 1em "Ubuntu"','italic 400 1em "Ubuntu"'];
var MAIL="mailto:office@plant-e.com";
var SALES="mailto:sales@plant-e.com";
var PE="https://plant-e.com/";
/* SensorSticks, from plant-e.com (product pages, Specificaties).
   [name, area, title, status, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["Waterstand","SensorStick","Grondwaterstand in veen en wetlands","± 1 cm · ± 0,1 °C · via satelliet","Een waterniveausensor en een bodemtemperatuursensor met satellietconnectiviteit, ontworpen voor snelle installatie in veengebieden en wetlands. Data elke 24 uur, als CSV of Excel; levensduur meer dan 50 jaar.",0,"",PE+"water-level-sensorstick/","Productpagina"],
 ["Bodemvocht","SensorStick","Bodemvocht voor golf, kwekerij en landbouw","± 0,05 m³/m³ · per uur · LoRa","Continue, realtime bodemvochtgegevens voor golfbanen, boomkwekerijen, stedelijk groen en landbouw, voor slimmer en efficiënter irrigeren. Installatie met een grondboor; de data gaat naar je eigen dashboard.",0,"",PE+"bodemvocht-sensorstick/","Productpagina"],
 ["Waterkwaliteit","SensorStick","Oppervlaktewater rond kassen en percelen","EC ±5% (0–23 dS/m) · per uur · LoRa","Meet elektrische geleidbaarheid en temperatuur in sloten en wateren, als vroeg detectiesysteem voor lekkages en run-off: zo kan worden aangetoond dat de kas of het perceel emissievrij is.",0,"",PE+"waterkwaliteit-sensorstick/","Productpagina"]];
/* Positieve klimaatimpact, from plant-e.com/technologie. */
var EVID=[
 ["Inzetbaar in","Veengebieden, mangrovebossen, regenwouden, rivierbeddingen, ondiepe bekkens, golfbanen, boomgaarden, wijngaarden, glastuinbouw en landbouw"],
 ["Stroombron","Op plantenbasis, met batterijback-up; de materialen zijn volledig inert en breken niet af in de bodem"],
 ["Data","Via LoRa of satelliet naar een online dashboard, uit te lezen op de computer of in de app"],
 ["Gepatenteerd","Oorspronkelijk ontdekt aan Wageningen University & Research; de octrooien zijn in handen van Plant-e"]];
/* plant-e.com/over/team. Text-only masthead; roles exactly as published (no summaries are published). */
var TEAM=[
 {g:"Directie",name:"Marjolein Helder",title:"CEO",sum:""},
 {g:"Directie",name:"Paulien van Straten",title:"COO",sum:""},
 {g:"R&D",name:"Daniel Groen",title:"Head of R&D",sum:""},
 {g:"R&D",name:"Pim de Jager",title:"R&D",sum:""},
 {g:"R&D",name:"Hadi Rajaei",title:"Field Experimental Engineer",sum:""},
 {g:"Business development",name:"Sharon Polman",title:"Business Development",sum:""},
 {g:"Business development",name:"Junya Nakasugi",title:"Business Development",sum:""}];
var TEAM2=["Justin Vievermanns","Annelies Brakshoofden","Silvia van Kempen"];
/* Projects, each from its plant-e.com article. [place, partner, title, date, detail, link] */
var PROJ=[
 ["Cairngorms National Park","Cairngorms National Park Authority","Waterstand in blanket bog, Schotland","Augustus 2025","SensorSticks leveren realtime grondwaterstanddata via satelliet, rechtstreeks uit het veen, voor het herstel van de uitgestrekte hoogvenen van het park.",PE+"actueel/plant-es-sensorsticks-installed-in-cairngorms-national-park-to-boost-peatland-restoration/"],
 ["Bolton Fell Moss en Wedholme Flow","Natural England","Twee voorbeeldprojecten voor veenherstel, Engeland","Augustus 2025","Een mid-scale trial op twee voormalige veenwinningen, nu National Nature Reserves; sindsdien leveren de SensorSticks realtime grondwaterstanddata.",PE+"actueel/natural-england-and-plant-e-partner-to-reimagine-peatland-futures/"],
 ["Liffey Head Bog","National Parks and Wildlife Service","Tien SensorSticks bij de bron van de Liffey, Ierland","September 2025","Grondwaterstand in een Special Area of Conservation in Wicklow, het hoogveen waar de rivier ontspringt die Dublin van drinkwater voorziet.",PE+"actueel/plant-e-brings-plant-powered-sensors-to-liffey-head-bog-to-strengthen-water-management/"],
 ["Cuilcagh Mountain","Fermanagh & Omagh District Council","Drie SensorSticks op de grens van Noord-Ierland en Ierland","December 2025","In de Cuilcagh Lakelands UNESCO Global Geopark; de derde SensorStick werd zonder hulp van Plant-e geïnstalleerd. Alle drie zenden data.",PE+"actueel/successful-installation-with-fermanagh-omagh-district-council/"],
 ["Transparante Tuinder","Tuinders, kennisinstellingen en partners","Waterkwaliteit rond kassen, Nederland","November 2025","Vijftien SensorStick-prototypen in sloten bij drie tuinders meten geleiding en watertemperatuur, zonder batterijen of externe stroom.",PE+"actueel/transparante-tuinder-samen-werken-aan-schoner-water-in-de-glastuinbouw/"],
 ["North Pennines","North Pennines National Landscape","Waterstand en temperatuur in de hoogvenen, Engeland","Juni 2025","Twee autonome sensoren in het grootste aaneengesloten hoogveengebied van Engeland, met elk uur data en zonder regelmatige bezoeken op locatie.",PE+"actueel/north-pennines-soil-moisture-stick/"]];
var NEWS=[
 ["21 januari 2026","Transparante Tuinder: samen werken aan schoner water in de glastuinbouw","plant-e.com",PE+"actueel/transparante-tuinder-samen-werken-aan-schoner-water-in-de-glastuinbouw/"],
 ["14 januari 2026","DHI Demonstration Project Completed: peatland monitoring with partners in Scotland, England and Ireland","plant-e.com",PE+"actueel/dhi-demonstration-project-completed/"],
 ["18 september 2025","Plant-e’s SensorStick on BBC One Countryfile","plant-e.com",PE+"actueel/plant-e-sensorstick-on-bbc-one-country-file/"],
 ["22 november 2024","Plant-e wint rechtszaak over octrooi tegen Bioo bij de Unified Patent Court","plant-e.com",PE+"actueel/plant-e-wint-rechtszaak-over-octrooi-tegen-bioo/"]];
var PARTNERS=["Rijkswaterstaat","Natural England","National Parks and Wildlife Service","Cairngorms National Park","North Pennines National Landscape","Hoogheemraadschap van Delfland","Waterschap De Dommel","Glastuinbouw Nederland","LTO Noord","Van den Berk Boomkwekerijen","Veenweiden Innovatiecentrum","Stichting Kennis in je Kas","RVO","Wageningen University & Research"];
var SHEETS=[];
