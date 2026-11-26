var FONTS=['300 1em "Archivo"','400 1em "Archivo"','500 1em "Archivo"','400 1em "Michroma"','400 1em "Source Sans 3"','italic 400 1em "Source Sans 3"','600 1em "Source Sans 3"','500 1em "JetBrains Mono"'];
/* contact: solarc.de (sidebar and Impressum) */
var TEL="+493031985540",TELT="+49 30 319 8554-00",FAXT="+49 30 319 8554-99",MAIL="info@solarc.de";
var ADDR="Glogauer Straße 21, 10999 Berlin";
var SO="https://www.solarc.de/";
/* the product range (solarc.de > Produkte, "Unsere Produkte auf einen Blick"). [group, title, detail, url] */
var PRODS=[
 ["Solarmodule","Standard- und|kundenspezifische Solarmodule","Starre und semiflexible mono- und polykristalline Module sowie semiflexible Dünnschichtmodule, von 40 mW bis 200 W. Nach Ihren Vorgaben in Form, Farbe und Abmessung, für Indoor oder Outdoor, glas- oder ETFE-laminiert.",SO+"deutsch/produkte/solarmodule/"],
 ["Elektronik","Solare Laderegler|und DC/DC-Wandler","Laderegler und DC/DC-Wandler speziell für autarke Kleinleistungssysteme, dazu kundenspezifische Elektronik und Neuentwicklungen.",SO+"deutsch/produkte/"],
 ["Systeme","Kundenspezifische Lösungen","Solarversorgte GPS-Ortungssysteme (Tracking), Motor- und Lichtsteuerungssysteme sowie Batterie- und Speichersysteme, vom Prototyp bis zur Serienfertigung.",SO+"deutsch/produkte/"],
 ["Messtechnik","Messtechnik für|Windkraft und PV","ROMEG M 20 G zur Blattwinkelvermessung des Rotors per Laser, Solareinstrahlungs-Messsysteme, Referenzzellen und der PV Plant Power Optimizer.",SO+"deutsch/produkte/"]];
/* test and consulting services (solarc.de > Über uns, Produkte > Prüf- und Beratungsdienstleistungen). [label, title, detail, icon] */
var SYS=[
 ["Klimaschrank","Umweltsimulation","Wärme- und Feuchtetests, Klimawechseltests und Langzeittests (Alterungstests) für Entwicklungs- und Fertigungsaufgaben, auch für Komponenten unserer Kunden vor der Markteinführung.",'<rect x="12" y="8" width="32" height="40"/><path class="a" d="M20 20H36M20 28H30"/><circle class="f" cx="36" cy="38" r="2.4"/>'],
 ["Modulprüfung","Elektrolumineszenz-Tests","Sonnensimulatoren, Elektro- und Fotolumineszenz machen Minderleistung und versteckte Defekte wie Microcracks, inaktive Bereiche und Hotspots schnell und sicher sichtbar.",'<path d="M8 14H48V42H8Z"/><path d="M21 14V42M35 14V42M8 28H48"/><path class="a" d="M25 17L30 24L27 27"/><circle class="f" cx="42" cy="36" r="2.4"/>'],
 ["Beratung","Beratung und Integration","Beratung und technische Beurteilungen von Solarprodukten, dazu die Integration von Solarkomponenten in bestehende Kundenprodukte.",'<path d="M10 40H46"/><path class="a" d="M14 32L24 22L32 28L44 14"/><circle class="f" cx="44" cy="14" r="2.4"/>']];
var TEAM=[
 {g:"Geschäftsführung",name:"Dipl.-Ing. Dieter Werner",title:"Geschäftsführer",sum:"SOLARC Innovative Solarprodukte GmbH, Berlin"},
 {g:"Geschäftsführung",name:"Andreas Wiechmann",title:"Geschäftsführer",sum:"SOLARC Innovative Solarprodukte GmbH, Berlin"}];
/* references (solarc.de > Unsere Referenzen) */
var REFS=["Carl Zeiss Sports Optics GmbH","DHL Solutions and Innovation","Erbatech GmbH","Fraunhofer ISE","Fraunhofer UMSICHT","Interactive Wear AG","IT-Direkt Business Technologies GmbH","Ozroll Europe Pty Ltd","Roma Rolladensysteme GmbH","Siemens AG","Telic AG","UfU e.V."];
/* news: each row links out to the source */
var NEWS=[
 ["10.–13. Nov. 2026","electronica 2026 in München: SOLARC in Halle A5, Stand 332, mit solarversorgten Low-Power-Off-Grid-Lösungen","exhibitors.electronica.de","https://exhibitors.electronica.de/ausstellerportal/2026/aussteller/ausstellerdetails/solarc-innovative-solarprodukte-gmbh/?elb=809.1100.4285.1.111"],
 ["Stellenangebot","Wir suchen Mechatroniker (m/w/d) für Entwicklung und Produktion, in Vollzeit oder Teilzeit, in Berlin-Kreuzberg","solarc.de",SO+"deutsch/stellenangebote/"],
 ["Downloads","Katalog 2022–2023 sowie Datenblätter zu Solarmodulen, Ladereglern und Wandlern","solarc.de",SO+"deutsch/downloads/"]];
var SHEETS=[];
