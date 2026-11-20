var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Libre Caslon Text"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"'];
var WEB="https://danskgenerationsskifte.dk/";
var TEL="+45 62 24 17 41",TELH="tel:+4562241741";
var MAIL="lb@danskgenerationsskifte.dk";
var LI="https://www.linkedin.com/company/dansk-generationsskifte/";
var MAP1="https://www.google.com/maps/search/?api=1&query=Filippavej+57+5762+Vester+Skerninge";
var MAP2="https://www.google.com/maps/search/?api=1&query=Frederiksberg+All%C3%A9+18+1820+Frederiksberg";
/* criteria, from the firm's Virksomheder and Strategi pages */
var CRIT=[["Områder","Danske virksomheder inden for tre hovedområder: industri, brands samt omsorg og sundhed."],
 ["Størrelse","Typisk en omsætning på 30–250 mDKK og en indtjening før skat på 5–25 mDKK."],
 ["Ejerskab","Udelukkende majoritetsinvesteringer. Den nye direktør bliver altid medinvestor."],
 ["Virksomheden","Et vækstpotentiale, et unikt produkt eller en unik ydelse, en kompetent organisation og medarbejdere, og en sund forretning med positive resultater."],
 ["Ejerne","Motiverede og forandringsparate ejere, som ønsker at være mindretalsaktionær og bevare tilknytningen til virksomheden."],
 ["Etik og klima","God etik, en fornuftig bæredygtighedspolitik og en klimavenlig drift fra produktudvikling til marked."]];
/* portfolio, as described on the firm's company pages: [name, description, area, url, investment year, fund] */
var PF=[
 ["Dansk Polyglas","Specialister i udvikling og fremstilling af krævende konstruktioner i glasfiberkomposit til arkitektur, bygningskonstruktion og offshore-industrien.","Industri","http://www.polyglas.dk","2021","Generationsskifte Invest II"],
 ["Nordtech Vetec","Industrielle radiostyrings- og forsyningsprodukter til kraner, maskiner og transportanlæg i Danmark og Norge; Vetec udvikler sikkerhedskomponenter og vejeceller til tunge løft.","Industri","https://nordtech.dk/","2017","Generationsskifte Invest"],
 ["Wamatech","Maskiner og komplette turn-key anlæg til affalds- og genanvendelsesindustrien i hele Europa, fra grovsortering til finsortering og komprimering.","Industri","https://wamatech.dk/","2025","Generationsskifte Invest"],
 ["House of Amber","International retailkæde med design, produktion og salg af ravsmykker. København, Hong Kong, Beijing, Shanghai og Penang.","Brands","https://www.houseofamber.com/","2007","Dansk Generationsskifte"],
 ["PLUS","Produkter til attraktive uderum: hegn, havemøbler, legeredskaber, havehuse og højbede, forhandlet i 13 lande i Europa.","Brands","https://plus.dk/","2022","Generationsskifte Invest II"],
 ["Aqua Danmark","Udvikler, forhandler og servicerer blødgøringsanlæg og vandbehandlingsudstyr til private hjem og erhverv.","Brands","https://aquadanmark.dk/","2023","Generationsskifte Invest II"],
 ["Ismageriet","Premium og innovativ gelato af friske råvarer, solgt i egne iscaféer i Storkøbenhavn og online.","Brands","https://ismageriet.dk/","2024","Generationsskifte Invest III"],
 ["Carelink Gruppen","Danmarks største danskejede velfærdskoncern, med velfærdsløsninger til kommuner, regioner og private. Marselisborg, Personalegruppen, Medflex og Uni-Care blev fusioneret ind i Carelink Gruppen i 2023.","Omsorg & Sundhed","http://www.carelink.dk","2019","Tema 65+ Invest I"]];
/* team, from the firm's Team page (portraits are the firm's own) */
var TEAM=[
 {name:"Jens Heimburger",title:"Direktør · Stifter",img:"img/jens-heimburger.jpg",lead:1},
 {name:"Lars Bladt",title:"Direktør · Medejer",img:"img/lars-bladt.jpg",lead:1},
 {name:"Robert Spliid",title:"Bestyrelsesformand",img:"img/robert-spliid.jpg",lead:1},
 {name:"Gustav Himmelstrup",title:"Strategi & Analyse",img:"img/gustav-himmelstrup.jpg"},
 {name:"Hans Ole Nielsen",title:"Økonomichef",img:"img/hans-ole-nielsen.jpg"},
 {name:"Gustav Møller Andersen",title:"Strategi & Analyse",img:"img/gustav-moller-andersen.jpg"},
 {name:"Kasper Veje Jakobsen",title:"Finansiel Controller",img:"img/kasper-veje-jakobsen.jpg"},
 {name:"Mette Lund Kock",title:"Bogholder",img:"img/mette-lund-kock.jpg"},
 {name:"Aleksander Gierahn",title:"Finansiel Controller",img:""}];
/* news: only items with a working link */
var NEWS=[
 ["6. juli 2026","Carelink Gruppen, backet af Dansk Generationsskifte, kan blive børsnoteret allerede i 2027","NKP | M&A Insights","https://www.mainsights.io/ma-news/dansk-generationsskifte-backed-welfare-group-carelink-gruppen-ipo-likely-as-early-as-2027-following-latest-addition-of-attrives-with-two-more-acquisitions-planned-this-year"],
 ["22. juni 2026","Carelink Gruppen køber velfærdsvirksomheden Attrives af Team Olivia til en EV på 282 mDKK","NKP | M&A Insights","https://www.mainsights.io/ma-news/dansk-generationsskifte-backed-danish-care-provider-carelink-gruppen-acquires-welfare-company-attrives-from-byggmastaren-backed-team-olivia-at-an-ev-of-dkk-282m---evebita-fy0-of-7x"],
 ["22. juni 2026","Team Olivia sælger sin danske forretning til Carelink Gruppen","Pressemeddelelse · Placera","https://www.placera.se/pressmeddelanden/byggmastare-anders-j-ahlstrom-holding-byggmastare-anders-j-ahlstrom-holding-ab-publ-team-olivia-avyttrar-sin-danska-verksamhet-till-carelink-gruppen-20260622"]];
var SHEETS=[];
