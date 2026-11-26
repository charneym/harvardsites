var FONTS=['300 1em "Hanken Grotesk"','italic 300 1em "Hanken Grotesk"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','400 1em "Inter"','500 1em "Inter"','600 1em "Inter"','500 1em "JetBrains Mono"'];
/* contact: busch-microsystems.de > Kontakt and Impressum */
var TEL="+49671201331",TELT="+49 671 201331-0",FAXT="+49 671 201331-99",MAIL="sales@busch-microsystems.de";
var PW="https://www.busch-microsystems.de";
/* standard positioning systems: busch-microsystems.de > Produkte > Positioniersysteme and each product page. [tag, name, spec facts, image, url] */
var PROD=[
 ["Granit · mit Apertur","XY-Tische","Eisenloser Linearmotor, Kreuzrollenführung, nahezu kein Cogging. Verfahrweg XY 200 bis 300 mm, Messsystem-Auflösung 100 bis 1 nm.","p-xy.webp",PW+"/busch_all_products/xy-tische-granit-mit-apertur/"],
 ["Granit","Gantry-System","Grundaufbau aus Granit, Portal synchron von Linearmotoren bewegt. Verfahrweg X bis 1.500 mm, Y bis 3.000 mm, bis 10 m/s².","p-gantry.webp",PW+"/busch_all_products/gantry-system-granit/"],
 ["Granit","Lineartische","Exzellente Bahngenauigkeit, Gewinderaster am Schlitten, als Tischsystem kombinierbar, etwa zum XY-Tisch. Verfahrweg 25 bis 300 mm.","p-linear.webp",PW+"/busch_all_products/lineartische-granit/"],
 ["Aluminium","Hubtische","DC-Motor, geschliffene Kugelumlaufspindel und Kreuzrollenführungen, Anschluss über D-Sub-Stecker. Auf Wunsch mit Granitsäule.","p-hub.webp",PW+"/busch_all_products/hubtische-aluminium/"]];
/* options on every base system (same page: "Unsere Basis für Ihre Applikation") */
var OPT=["Skalierbare Verfahrwege","Höhere Traglasten","Absolute oder inkrementelle Messsysteme","Zusätzliche Achsen","Reinraumbetrieb","Vakuumklassen","Faltenbälge","Mit oder ohne Steuerung","Granit, Aluminium, Edelstahl, Keramik"];
/* applications: busch-microsystems.de > Anwendungen */
var APP=[
 ["Laserbearbeitung","Hohe Systemsteifigkeit, geringe bewegte Massen, geringe thermische Ausdehnung, Laser und Bewegungspfad synchronisiert."],
 ["Halbleiterindustrie","Reinraumtaugliche Systeme aus Materialien, die keine Partikel absondern."],
 ["Messtechnik","Genauigkeit über den gesamten Verfahrweg, bei hohem Gleichlauf und exzellenter Bahngenauigkeit."],
 ["Optische Industrie","Komplettsysteme für optische Bearbeitungs- und Messverfahren, etwa 2 µm Ablaufgenauigkeit auf vier Metern."]];
/* contacts (Unternehmen > Ansprechpartner; management per Impressum); text-only masthead */
var TEAM=[
 {g:"Ansprechpartner Vertrieb",name:"Dipl.-Ing. Winfried Busch",title:"Geschäftsführer, Gründer",sum:"Gründete BUSCH Microsystems 1999 als Ingenieurbüro für Entwicklungs-Dienstleistungen in der Systemtechnik."},
 {g:"Ansprechpartner Vertrieb",name:"Nicola Baumdicker-Busch",title:"Geschäftsführung, Außendienst",sum:"2006 gründete Winfried Busch die GmbH mit seinen Töchtern Helen und Nicola. Telefon +49 671 201331-11."},
 {g:"Ansprechpartner Vertrieb",name:"Tatjana Weigele",title:"Innendienst",sum:"Telefon +49 671 201331-82."},
 {g:"Ansprechpartner International",name:"Nathan Brown",title:"USA, Colorado",sum:"Telefon +1 720 671 2184."},
 {g:"Ansprechpartner International",name:"ELIMEC Electro-mechanical Engineering",title:"Rishon LeZion, Israel",sum:"Partner für Asien."},
 {g:"Ansprechpartner International",name:"VarioDrive",title:"Oud-Beijerland, Niederlande",sum:"„Power in motion“: Partner für die Niederlande."},
 {g:"Ansprechpartner International",name:"Optoprim",title:"Vimercate, Italien",sum:"Partner für Italien."}];
var SHEETS=[];
