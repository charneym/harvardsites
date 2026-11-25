var FONTS=['400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var WEB="https://www.sentec-elektronik.de/";
var MAIL="info@sentec-elektronik.de";/* sentec-elektronik.de header, footer and Impressum */
var TEL="+49 3677 68937-0";var TELH="tel:+493677689370";
var FAX="+49 3677 68937-29";
/* products, from sentec-elektronik.de/de/produkte and its sub-pages: [group, name, description] */
var PROD=[
 ["SAW","TRANSMITRON‑T","Das passive Temperaturmesssystem: misst drahtlos an stehenden und bewegten Teilen, von 0 °C bis 300 °C. Zusammen mit der TU Ilmenau entwickelt."],
 ["SAW","Abfrageeinheit","Fernabfrage passiver SAW-Sensoren im freien 433-MHz-Band, mit 1 °C Auflösung, Anzeige, programmierbaren Temperatur-Schaltschwellen, Schaltausgängen, Ethernet und RS232."],
 ["SAW","Passive SAW-Sensoren","SAW-Resonatoren als passive Transponder ohne eigene Energiequelle, abgefragt über Funk."],
 ["SAW","Prozesskontrolle","Im Einsatz bei Plastverarbeitern in Rotationsformanlagen: Temperaturverlauf am PC, zur Optimierung der Ofenregelung und kürzerer Prozesszeiten."],
 ["Auto","TEDRA Systeme","Thermocoupled Enhanced Brake Disk Radio Access: drahtlose Übertragung der Bremsscheibentemperatur eines Fahrzeugs während der Fahrt, in drei Varianten."],
 ["Auto","PETRA","Ein drahtloses Druckmesssystem für den Test von Automobilkomponenten."],
 ["Auto","Automotive-Empfänger","Datenlogger, oder Weitergabe der Messwerte über Analogausgänge, CAN oder USB."],
 ["Auto","Individuelle Lösungen","Sensor- und Übertragungslösungen nach Maß, auf Basis unserer bewährten drahtlosen Netzwerktechnologie."]];
/* the wireless sensor network, from /de/produkte/drahtlose-sensornetzwerke: [figure, unit, title, text] */
var CAPS=[["2,4","GHz","ISM-Band","IEEE 802.15.4, lizenzfreier Betrieb, 16 Kanäle mit intelligenter Frequenzagilität und Direct Sequence Spread Spectrum."],
 ["1000","m","Funkreichweite","Im Freien, bei +10 dBm Sendeleistung und −96 dBm Empfindlichkeit. Router erhöhen die Reichweite."],
 ["64","Knoten","In einem Netzwerk","Stern- und Baumstruktur, selbst-konfigurierend, mit Fehlerüberwachung jedes einzelnen Knotens."],
 ["100 ms","– 1 h","Übertragungsintervall","Einstellbar, mit Checksumme und Handshake für garantierte Datenübertragung."]];
/* modules, from /de/produkte/prozessor-module, /de/produkte/drahtlose-sensornetzwerke and the home page */
var APPS=[["COBRA 8572","Computer Board for Rapid Applications: Dual Core PowerQUICC MPC8572 von Freescale mit 2 × 1,5 GHz und 2 GB RAM, auf nur 100 × 170 mm."],
 ["COBRA5329","ColdFire Board for Rapid Applications: hohe Rechenleistung bei geringem Stromverbrauch, mit uClinux für Embedded-Internet-Anwendungen."],
 ["ZEBRA","ZigBee Enabled Board for Radio Applications: ein geschirmtes 2,4-GHz-Funkmodul von nur 16 × 33 mm, mit Chipantenne, 50-Pin-Steckverbinder oder als SMD-Version."]];
/* services, from /de/dienstleistungen and the home page */
var SITES=[["Hardware-Entwicklung","Analog und digital","Controllermodule, Sensorelektronik und Signalauswertung: Leiterplatten mit über 18 Lagen, High-Speed-Busanbindung, analoge Signale, Funksensornetzwerke. Wir überwachen auch die Fertigung und testen, programmieren und kalibrieren die gefertigte Hardware."],
 ["Software-Entwicklung","Embedded und Desktop","Treiber für Schnittstellen am Mikrocontroller, Open-Source-Software, Linux und uClinux, Visualisierungen unter Windows oder Linux, in Assembler, C, C++, Delphi und SQL."],
 ["Systementwicklung","Von der Idee zum Komplettsystem","Datenerfassung mit Sensoren, intelligente Signalverarbeitung, Visualisierung und Logging: komplette Systeme aus einer Hand, genau nach Ihren Vorstellungen."]];
var CERTS=[["IEEE 802.15.4","Funksensornetzwerke und ZigBee"],["ColdFire · PowerQUICC","Controller- und Prozessormodule"],["TU Ilmenau","Partner bei TRANSMITRON‑T"]];
/* news: only items that link out. [date, headline, source, url] (sentec-elektronik.de news, and the SENSOR+TEST exhibitor directory) */
var NEWS=[
 ["Juni 2026","Automotive Testing Expo Europe 2026 in Stuttgart, Halle 1, Stand 1876","senTec Elektronik",WEB],
 ["Juni 2026","SENSOR+TEST 2026 in Nürnberg, Halle 1, Stand 1-130","SENSOR+TEST","https://www.sensor-test.de/en/visitors/search/exhibitor/1752"]];
var SHEETS=[];
