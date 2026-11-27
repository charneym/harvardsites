var FONTS=['300 1em "Quicksand"','400 1em "Quicksand"','500 1em "Quicksand"','600 1em "Quicksand"','400 1em "Nunito Sans"','600 1em "Nunito Sans"','700 1em "Nunito Sans"'];
/* contact: boehmelektronik.de > Kontakt / Impressum (Klaus Böhm Elektronik GmbH, Germanenstraße 24, 72768 Reutlingen; HRB 351005 Amtsgericht Stuttgart) */
var TEL="+4971215153950",TELT="07121 51 53 95-0",MAIL="mail@boehmelektronik.de";
var DP="https://www.boehmelektronik.de/";
/* the five product areas, as boehmelektronik.de > Produkte lists them. [area, title, description, products] */
var AREAS=[
 ["01","Automatisierungs- und Zuführlösungen","Beladeeinrichtungen für Federschleifmaschinen, Federn verpacken, Federn anlassen, Maschinenüberwachung.","Beladeeinrichtungen mit Roboter RZ6.4, FZ6.1 und RB3 · Anlassofen · Auswurfkontrolle · Verpackungsautomaten"],
 ["02","Federproduktion","Federn winden und schleifen.","Federwindemaschine FWM-1 · Federschleifmaschinen"],
 ["03","Haspel","Bund-, Spulen- und Bandhaspel.","Bundhaspel · Bandhaspel · Spulenhaspel"],
 ["04","Antriebs- und Fördertechnik","Verschiedene Förderantriebe und Zuführsysteme.","Federentwirrsystem · Entwirrtopf EW-1 · Vorratsbehälter VB · Federzuführung FZ · Steilförderer mit Bunker · Trommel-, Rund- und Linearförderer"],
 ["05","Messen und Prüfen","Messgeräte für Druck-, Zug- und Schenkelfedern, manuell und PC-gesteuert.","Setz- und Prüfautomaten · Torsionsfederprüfgeräte · Zug- und Druckfedern"]];
/* the current machines (boehmelektronik.de home, "Neue Lösungen"). [model, name, features] */
var NEU=[
 ["RZ6.4","Schleifmaschinenbeladeeinrichtung","Perfekte Ergänzung zu 1- und 2-Teller-Schleifmaschinen. Anwendbar im Durchlauf- oder Zustellschleifverfahren. Zuführen von quadratischen und unterquadratischen Federn möglich. Modularer Aufbau, optimiert auf Ihre Anwendung."],
 ["FZ6.1","Schleifmaschinenbeladeeinrichtung","Perfekte Ergänzung zur 2-Teller-Schleifmaschine. Formfedern lageorientiert zuführen. Modularer Aufbau, maßgeschneidert auf Ihre Anwendung."],
 ["RB3","Zuführung mit Roboter-Handling","Für jede Feder die richtige Größe. Modular und flexibel. Schnelle Umrüstung für kleine Losgrößen."],
 ["SPH1000","Spulenhaspel für die Elektroindustrie","Extra schonendes Umlenken speziell für isoliertes Material. Einfacher Spulenwechsel mit integrierter Hebeeinrichtung. Für Spulen bis 1000 kg."]];
/* management, as in the Impressum and the commercial register (text-only masthead) */
var TEAM=[
 {name:"Ralf Böhm",title:"Geschäftsführer",sum:"Vertritt die Klaus Böhm Elektronik GmbH laut Impressum."},
 {name:"Matthias Seehuber",title:"Geschäftsführer",sum:"Geschäftsführung, HRB 351005, Amtsgericht Stuttgart."},
 {name:"Klaus Böhm",title:"Gründer",sum:"Gründete das Unternehmen 1979, anfangs mit elektronischen Messgeräten für die Federnindustrie."}];
/* news: each row links out to its source. [date, title, source, url] */
var NEWS=[
 ["Apr 2026","Böhm Elektronik auf der wire 2026 in Düsseldorf, der Fachmesse für Draht und Kabel","wire 2026 · Ausstellerverzeichnis","https://www.wire-tradefair.com/vis/v1/en/exhibitors/wire2026.3067866"],
 ["2026","Stellenangebot: Techniker (m/w/d) der Fachrichtung Elektrotechnik","Böhm Elektronik · Startseite",DP]];
var SHEETS=[];
