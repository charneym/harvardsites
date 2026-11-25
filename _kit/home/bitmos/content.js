var FONTS=['400 1em "Source Sans 3"','500 1em "Source Sans 3"','600 1em "Source Sans 3"','700 1em "Source Sans 3"','500 1em "Source Serif 4"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var WEB="https://www.bitmos.de/de/";
var MAIL="info@bitmos.de";/* bitmos.de footer and Kontakt page */
var TEL="+49 (0) 211 60 10 10 30";var TELH="tel:+4921160101030";
/* products, from bitmos.de/de/produkte, /pulsoxymetrie, the sat 805 and sat 801+ pages and /mas-sensors: [group, name, description] */
var PROD=[
 ["Puls","sat 805","Unser Stand-alone-Monitor, Made in Germany, mit der bewährten Ein-Knopf-Bedienung: Masimo SET, Plethysmogramm, Fernalarm für den Schwesternruf und analoge Schnittstelle."],
 ["Puls","sat 801+","Unser aktuellstes Handpulsoxymeter: Masimo SET, Plethysmogramm, Lithium-Ionen-Akku, integrierter Schutzkragen und Datenexport per USB oder microSD-Karte."],
 ["Sens","RD SET und LNCS Einweg-Klebesensoren","Für Erwachsene, Kinder, Kleinkinder und Neugeborene, auch für Frühgeborene mit empfindlicher Haut. Latexfrei."],
 ["Sens","RD SET und LNCS Mehrweg-Sensoren","Mehrweg-Sensoren für die Masimo-SET-Pulsoxymetrie, dazu Patientenkabel."],
 ["Sens","Zubehör und Ersatzteile","Ersatz-Klebestreifen, Zubehör und Ersatzteile rund um die Sensoren."]];
/* development services, from bitmos.de/de/unternehmen: [figure, unit, title, text] */
var CAPS=[["CE","","Zertifizierung","Der komplette Service einer Medizinprodukte-Entwicklung, inklusive Design und richtlinienkonformer Dokumentation."],
 ["HW+SW","","Elektronik","Unsere Kernkompetenz: die hard- und softwareseitige Entwicklung von elektronischen Medizinprodukten."],
 ["1998","","Qualität","Seit 1998 wird unser Qualitätsmanagementsystem nach EN 13485 in der aktuellen Ausgabe durchgängig optimiert."],
 ["Idee","","Machbarkeit","Produktoptimierungen sowie Machbarkeitsprüfungen von Ideen und Detaillösungen."]];
/* where the sat 805 is used, from its product page */
var APPS=[["In der Klinik","Zuverlässige Datenerfassung und Alarmerzeugung sind wichtige Parameter für schnelle Reaktionszeiten."],
 ["Im Schlaflabor","Vielseitige Schnittstellen ermöglichen die einfache Integration in jeden Polysomnographie-Arbeitsplatz."],
 ["Im HomeCare-Bereich","Die einfache Bedienung erlaubt eine sichere Anwendung in der häuslichen Umgebung."]];
/* the company, from bitmos.de/de/unternehmen, /fachhandelspartner and the Impressum */
var SITES=[["Düsseldorf","Entwicklung und Fertigung","Auf rund 400 m² an der Himmelgeister Straße entwickeln und fertigen sieben Mitarbeiter unsere Medizinprodukte, die meisten von ihnen seit mehr als zehn Jahren."],
 ["Europa und weltweit","Fachhandelspartner","Bitmos-Produkte erreichen Kliniken und Anwender über Fachhändler in ganz Europa, von Dänemark bis Spanien, und darüber hinaus."]];
var CERTS=[["1988","Gegründet von Absolventen der Heinrich-Heine-Universität"],["EN 13485","Qualitätsmanagement seit 1998"],["Seit 2000","Pulsoxymetrie rund um Masimo SET"]];
/* news: only items that link out. [date, headline, source, url] */
var NEWS=[
 ["November 2026","Bitmos als Aussteller auf der MEDICA 2026 in Düsseldorf","MEDICA",'https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3089104'],
 ["November 2025","MEDICA 2025: Halle 11, Stand B25","Bitmos",WEB+"index.php"],
 ["März 2024","Sauerstofftherapieprodukte: Service auch nach Produktionsende","Bitmos",WEB+"aktuelles/75-sauerstofftherapieprodukte.php"],
 ["Juni 2022","Spende kommt in Albanien an","Bitmos",WEB+"aktuelles/62-spende-kommt-in-albanien-an.php"]];
var SHEETS=[];
