var FONTS=['300 1em "Barlow Semi Condensed"','400 1em "Barlow Semi Condensed"','500 1em "Barlow Semi Condensed"','400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"'];
/* contact: autechgmbh.de > Kontakt / Impressum (AuTech GmbH Automationstechnologie, Kocherweg 37, 74429 Sulzbach-Laufen) */
var TEL="+4979769107770",TELT="+49 7976 910777-0",MAIL="info@autechgmbh.de";
var DP="https://autechgmbh.de/";
/* tube machines (autechgmbh.de > Produkte > Rohrschneiden / Rohrumformen). [type, machine, use, tube diameter] */
var MACH=[
 ["Trennen","AS60 Standard","Trennen und Rollieren in einem Arbeitsgang, mit gerader Maschinenfront.","6–60 mm"],
 ["Trennen","AS60 S","Erhöhter Freiheitsgrad im Spann- und Trennbereich für komplexe Rohrgeometrien.","bis 40 mm"],
 ["Trennen","AS60 Servo","Servogesteuert, mehrstufiges Trennen und Rollieren; beide Rohrenden individuell bearbeitbar.","bis 40 mm"],
 ["Trennen","AS80 Standard","Mit pneumatischen Achsantrieben.","bis 100 mm"],
 ["Trennen","AS80 Servo","Servogesteuert, frei programmierbare Arbeitszyklen.","bis 100 mm"],
 ["Umformen","AU90","Aufweiten und Einziehen. Vollelektrisch mit SEW-Antrieben, Umformkraft radial bis 100 Tonnen, Wandstärken bis 3 mm.","15–90 mm"]];
/* robot cells (autechgmbh.de > Automation). [kind, cell, text] */
var CELLS=[
 ["Vereinzelung und Zuführung","Pickerzelle an HDG-Rundtisch","Delta-Picker und eine Kamera vereinzeln PE-Ampullen aus dem Schüttgut; zwei 6-Achs-Roboter befüllen die vorgesiegelten Beutel."],
 ["Kollaborierende Roboter","Plattenhandling","Platten werden mit Vakuum von einem Stapel aufgenommen und auf ein Förderband aufgelegt."],
 ["Teilehandling","Klebestation","Ein Industrieroboter positioniert die Bauteile unter einem Klebedispenser. Die Geometrien kommen direkt aus den CAD-Daten."],
 ["Prüfstand","Roboter Motoman MH50","Prüfstand für Sägeblätter oszillierender Maschinen. Alle Parameter werden aufgezeichnet und als Protokoll ausgegeben."]];
/* special machines (autechgmbh.de > Sondermaschinenbau). [rate, machine, text] */
var SPECIAL=[
 ["1500 Flaschen/h","Dichtheitprüfen, Etikettieren, Kappenschrauben","PE-Flaschen werden auf Dichtheit geprüft, etikettiert und verschlossen, in Modulbauweise direkt an der Produktionsmaschine."],
 ["bis 1800 Etiketten/h","Rundetikettierer","Zylindrische Produkte werden stehend oder liegend etikettiert, optional mit Codeleser, OCR und Kameraprüfung."],
 ["bis 800 Etiketten/min","Flachetikettierer","Flache Produkte werden liegend etikettiert; optische Systeme prüfen Vorhandensein und Position der Etiketten."],
 ["Handarbeitsplatz bis Anlage","Fügen und Verstemmen","Mit Überwachung der Prozesskräfte, Dokumentation zur Rückverfolgbarkeit und Anbindung an Ihr Leitsystem."],
 ["stückgenau","Transportieren, Vereinzeln, Zählen","Produkte stückgenau in Boxen verpacken, wenden, ausrichten, stapeln oder dem nächsten Prozess zuführen."]];
/* services */
var SERV=[
 ["01 · Konzept","Konzept und Konstruktion","Gemeinsam entwickeln wir ein auf Ihr Produkt abgestimmtes Konzept und prüfen die Machbarkeit, wenn möglich per Simulation. Konstruiert wird mit Creo Elements, EPLAN P8 und WSCAD."],
 ["02 · Fertigung","Fertigung und Montage","Unsere qualifizierte Belegschaft und unser moderner Maschinenpark fertigen nahezu alle Komponenten selbst. Montage und Installation übernimmt unser geschultes Fachpersonal."],
 ["03 · Inbetriebnahme","Programmierung und Inbetriebnahme","SPS-Programmierung mit Siemens TIA-Portal und Beckhoff TwinCAT, Roboter herstellerübergreifend. Die Dokumentation ist CE-konform."],
 ["04 · Service","Service und Schulung","Kurze Reaktionszeit, 24h-Service und Fernwartung. Wartungsverträge und Ersatzteile über die gesamte Lebensdauer aus eigener Fertigung."]];
/* news: each row links out to its source. [date, title, source, url] */
var NEWS=[
 ["Nov. 2025","Wir sind vom 13. bis 17. April 2026 auf der Tube in Düsseldorf","autechgmbh.de",DP+"blog/2025/11/21/wir-sind-vom-13-17-april-2026-auf-der-tube-in-duesseldorf/"],
 ["März 2025","Wenn etablierte Anbieter schließen: Nachfolge laufender Projekte","autechgmbh.de",DP+"blog/2025/03/11/wenn-etablierte-anbieter-schliessen-nachfolge-laufender-projekte/"],
 ["Mai 2024","Video: AuTech GmbH auf der Tube 2024 in Düsseldorf","autechgmbh.de",DP+"blog/2024/05/16/video-autech-gmbh-auf-der-tube-2024-in-duesseldorf/"]];
var SHEETS=[];
