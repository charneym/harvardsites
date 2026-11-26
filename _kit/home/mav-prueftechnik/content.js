var FONTS=['300 1em "Barlow"','400 1em "Barlow"','500 1em "Barlow"','400 1em "Archivo Black"','400 1em "IBM Plex Sans"','italic 400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
/* contact: mav-germany.de > Kontakt and Impressum */
var TEL="+49306931053",TELT="+49 (0)30 6931053",MAIL="info@mav-germany.de";
var ADDR="Sanderstraße 28, 12047 Berlin, Deutschland";
var OG="https://mav-germany.de/";
/* the current range (mav-germany.de > Produkte > Handgeräte, Motorgeräte, Kalibrierzubehör). [category, name|name, detail, url] */
var PRODS=[
 ["Handgerät","Universal Tester|CT-Touch","Das Einsteigermodell mit Bedienung per Hebel, für einfache Zugprüfungen: 0–500 N, 10.000 Hz Messfrequenz, 5.000 Schritte Auflösung.",OG+"Produkte/Handgerate/handgerate.html"],
 ["Handgerät","Digital Tester|FT-Touch","Hebelbedienung mit reaktionsschnellem Farb-Touchscreen, 0–50 bis 1.000 N, 10.000 Schritte, ab 2022 mit Netzwerkanschluss und REST-API.",OG+"Produkte/Handgerate/handgerate.html"],
 ["Handgerät","Clip Gun Tester|CGT-Touch","Zugkraftmessung an hand- und druckluftbetätigten Kabelbinder-Spannpistolen, ausgelöst einfach über den Abzug der Pistole.",OG+"Produkte/Handgerate/handgerate.html"],
 ["Motorgerät","Motorischer Tester|ETM-M","Zug und Druck bis 10.000 N, mit Präzisions-Längenmesseinrichtung für Kraft-Weg-Verläufe, Bruchstopp, Halten unter Last und Zyklusprogrammen.",OG+"Produkte/Motorgerate/motorgerate.html"],
 ["Motorgerät","Motor-Prüfstation|ETM-A","Vielseitige elektronische Prüfstation für Zug- und Druckkraftprüfungen, mit frei einstellbarer Geschwindigkeit und TFT-Multitouch-Display.",OG+"Produkte/Motorgerate/motorgerate.html"],
 ["Kalibrierung","Kraftmessgerät KMG|und Lastmesszellen SM","Das Referenzsystem für die Kalibrierung von Prüfgeräten: Zellen von 50 bis 10.000 N, bis zu zehn an einem KMG, auch als eigenständiges Prüfsystem.",OG+"Produkte/Kalibrierzubehor/kalibrierzubehor.html"]];
/* Geschäftsführung, as named in the Impressum. Text-only masthead. */
var TEAM=[
 {g:"Geschäftsführung",name:"Goran Radovanovic",title:"Geschäftsführer",sum:"MAV PRÜFTECHNIK GmbH, Amtsgericht Charlottenburg HRB 59335."}];
/* news: each item links out to its source */
var NEWS=[
 ["Dez. 2026","Betriebsferien vom 21.12.2026 bis 08.01.2027: in dieser Zeit kein Warenversand und keine Warenannahme","mav-germany.de",OG],
 ["Nov. 2025","productronica 2025 in München: MAV PRÜFTECHNIK in Halle B4, Stand 124","productronica.com","https://exhibitors.productronica.com/ausstellerportal/2025/aussteller/ausstellerdetails/mav-prueftechnik-gmbh/?elb=228.1100.1995.1.111"],
 ["Software","Die Entwicklung der Kalibriersoftware mavCALIB für KMG und Lastmesszelle ist abgeschlossen","mav-germany.de",OG+"Produkte/Datenverarbeitung/datenverarbeitung.html"],
 ["Werkzeuge","In Entwicklung: eine Alternative zum Werkzeug SHA 40, mit beweglichen Spannbacken; neu sind Wechseleinsätze für das MAK-Werkzeug","mav-germany.de",OG+"Produkte/Werkzeuge/werkzeuge.html"]];
var SHEETS=[];
