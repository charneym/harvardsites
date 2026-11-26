var FONTS=['300 1em "Archivo"','400 1em "Archivo"','500 1em "Archivo"','400 1em "Source Sans 3"','italic 400 1em "Source Sans 3"','600 1em "Source Sans 3"','500 1em "JetBrains Mono"'];
/* contact: amc-systeme.de > Kontakt and the Impressum */
var TEL="+49371383880",TELT="+49 371 38388-0",FAXT="+49 371 38388-99",MAIL="info@amc-systeme.de";
var ADDR="Heinrich-Lorenz-Str. 55, 09120 Chemnitz";
var AM="https://www.amc-systeme.de/";
/* the delivery programme (amc-systeme.de > Produkte). [group, title, detail, url] */
var PRODS=[
 ["Produkte","Industrielle Computertechnik","Vorkonfigurierte Industrie-PCs, Industrie-PC-Gehäuse, All-in-One Touch Panel PCs, Embedded Box-IPCs, portable Industrie-PCs, Industrie-Touch-Displays und Single Board Computer, bis zu GPU-IPCs für KI-Lösungen.",AM+"industrielle-computertechnik.html"],
 ["Produkte","Mess- und Automatisierungstechnik","Test- und Prüftechnik, Mess- und Steuerkarten für PC-Systeme, mobile Messtechnik, Steuerungstechnik für Maschinen und Anlagen, Remote-I/O-Module und Software für Messtechnik und Automatisierung.",AM+"mess-und-automatisierungstechnik.html"],
 ["Produkte","Industrielle Kommunikationstechnik","Ethernet-Switche, LWL-Umsetzer und WiFi Access Points, serielle Device Server, Karten und Konverter, Feldbus-Schnittstellen, GPIB-Produkte zur Messgerätesteuerung sowie Video- und Framegrabber-Schnittstellen.",AM+"industrielle-kommunikationstechnik.html"]];
/* the system solutions (amc-systeme.de > Systeme). [label, title, detail, icon] */
var SYS=[
 ["Monitoring","Monitoring- und Prozessleitsysteme","HMI/SCADA-Systeme, die Modernisierung bestehender Prozessleitsysteme, ausfallsichere Prozessleitsysteme und Energiedatenmanagement.",'<path d="M8 44H48"/><path class="a" d="M10 36L19 26L27 31L36 16L46 22"/><circle class="f" cx="36" cy="16" r="2.4"/>'],
 ["Steuerung","Steuerungs- und Überwachungssysteme","Neubau und Modernisierung von Anlagensteuerungen: von der Planung und Projektierung über die Softwareentwicklung bis zur Inbetriebnahme.",'<rect x="10" y="12" width="36" height="32"/><path class="a" d="M18 22H38M18 30H32M18 38H26"/><circle class="f" cx="38" cy="38" r="2.4"/>'],
 ["Prüfung","Test- und Prüfsysteme","Qualitätssicherung in der Glasindustrie mit Glas-QM, Labor-Automatisierung und die Online-Schweißprozess-Kontrolle Weld-QM für die Automobilindustrie.",'<path d="M28 8V20"/><path class="a" d="M12 40L28 20L44 40"/><path d="M8 46H48"/><circle class="f" cx="28" cy="20" r="2.4"/>']];
var TEAM=[
 {g:"Geschäftsführung",name:"Dipl.-Ing. Bernd Göbel",title:"Geschäftsführer",sum:"Gründete AMC am 13. August 1990 zusammen mit Dr. Frank Neubert."},
 {g:"Geschäftsführung",name:"Dipl.-Betriebswirtin Iris Winkler",title:"Prokuristin",sum:"Einzelprokura, vertretungsberechtigt."}];
/* news and events: each row links out to the source */
var NEWS=[
 ["24.–26. Nov. 2026","SPS 2026 in Nürnberg: AMC iFactoryX und SENSOmaster32 Energy, Halle 7, Stand 380 bei Advantech","sps.mesago.com","https://sps.mesago.com/nuernberg/en/exhibitor-search.detail.html/amc---analytik--messtechnik-gmbh-chemnitz.html"],
 ["08. Dez. 2026","NI Tech Forum Düsseldorf, danach 2027: all about automation Berlin, NI Days Germany und die 23. AALE in Fulda","amc-systeme.de",AM+"messen-veranstaltungen.html"],
 ["13. Okt. 2026","NI Tech Day Berlin: Fachvortrag „NVH Testing für elektrische Maschinen – Von der Messung zur Ursache“","amc-systeme.de",AM+"messen-veranstaltungen.html"],
 ["Neu bei AMC","Der dydaqlog-E IIoT-Datenlogger im IP65-Gehäuse: flexibel messen, intelligent vernetzen","amc-systeme.de",AM+"daq-mess-stationen-dydaqlog-e-iiot-datenlogger.html"]];
var SHEETS=[];
