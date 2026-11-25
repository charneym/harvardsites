var FONTS=['300 1em "Barlow Semi Condensed"','italic 300 1em "Barlow Semi Condensed"','400 1em "Barlow Semi Condensed"','500 1em "Barlow Semi Condensed"','400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"','italic 400 1em "Newsreader"'];
var MAIL="info@ergokomfort.de";
var TW="https://www.ergokomfort.de";
/* mats: every line from ergokomfort.de/arbeitsplatzmatten and its four sub-pages. [area, products, application, tag, detail] */
var PIPE=[
 ["Trocken","FN-PLUS · RN-PLUS","Trockene Steh- und Geharbeitsplätze","PUR · bis 7 Jahre Garantie","Geschäumtes Polyurethan mit flachen Noppen oder Halbkugelprofil, 12 bis 14 mm stark. Das abgeflachte Profil der FN-PLUS verringert den Drehwiderstand und ist leicht befahrbar. Optional schwer entflammbar nach DIN 4102/B1, antistatisch oder ESD."],
 ["Öl und Späne","NI-ANTI RUTSCH · NI-FN · NI-SPEZIAL","Öle, Kühlschmiermittel, Späne","Nitril NBR · ISO-Klasse 5","Beständig gegen Öl, Kühlschmiermittel und viele Chemikalien, kurzfristig resistent gegen Funken und heiße Späne, mit rutschhemmender Unterseite für gute Standfestigkeit."],
 ["ESD","FN-PLUS-B1 + ESD · RN-PLUS B1 + ESD · NI-FN + ESD","ESD-Schutzbereiche (EPA)","DIN EN 61340-5-1","Zertifiziert für ESD-Schutzbereiche, mit einem Ableitwiderstand von 10⁵ bis 10⁷ Ohm nach DIN EN 61340-5-1; die PUR-Matten zusätzlich schwer entflammbar nach DIN 4102/B1."],
 ["Hygiene","HYDRO-EPDM-FN · ANTI RUTSCH · SPEZIAL","Lebensmittel, Hygiene, Labor, Reinraum","EPDM · ISO-Klasse 2","EPDM-Gummi, beständig gegen Feuchtigkeit, Säuren, Basen und Alkohol, temperaturbeständig von ca. −40 °C bis +150 °C. Optional in RAL-Farben."]];
/* the gait study, from ergokomfort.de/arbeitsplatzmatten/studie */
var EVID=[
 ["Methodik","Dreidimensionale Ganganalyse mit zehn gesunden Probanden, zwei Kraftmessplatten und acht Infrarotkameras, in Arbeitsschuhen der Sicherheitsstufe 3"],
 ["Kniegelenk","Änderung des Gelenkwinkels in medio-lateraler Richtung während der Belastungsantwort: 4,3° auf der Matte, 4,0° auf dem Boden (p = .001)"],
 ["Hüfte","Gelenkwinkeländerung in der frontalen Ebene während der Abdruckphase: 7,3° auf der Matte, 7,0° auf dem Boden (p = .026)"],
 ["Sprunggelenk","Die Winkeländerung in der sagittalen Ebene ist in Belastungsantwort und Mittelstand auf dem Boden signifikant größer als auf der Matte"]];
/* management, from the company Impressum. Text-only masthead. */
var TEAM=[
 {g:"Geschäftsführung",name:"Werner Heinz Schlosser",title:"Geschäftsführung",sum:"Geschäftsführer und inhaltlich Verantwortlicher der Ergokomfort GmbH"},
 {g:"Geschäftsführung",name:"Heike Henke-Schlosser",title:"Geschäftsführung",sum:"Geschäftsführung der Ergokomfort GmbH, Harsefeld"}];
var NEWS=[];
var SHEETS=[];
