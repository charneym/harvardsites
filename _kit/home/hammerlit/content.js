var FONTS=['300 1em "Archivo"','italic 300 1em "Archivo"','400 1em "Archivo"','italic 400 1em "Archivo"','500 1em "Archivo"','600 1em "Archivo"'];
var MAIL="info@hammerlit.de";
var TW="https://www.hammerlit.de";
/* Produktbereiche: jede Zeile aus dem Sortiment auf hammerlit.de (Hauptnavigation „Produkte“) und, für halitec, aus dem
   Ausstellerprofil der productronica 2025. [Bereich, Kurzbeschreibung, Produktlinien] */
var PIPE=[
 ["Patientenversorgung","Pflege- und Organisationswagen","P-Serie · Pflegewagen aus Edelstahl, PMEF-Serie · Notfallwagen, Lifeline-Serie"],
 ["Infektionsschutz","Hygiene, immer dort, wo sie gebraucht wird","Infektionsschutzwagen und Hygienecenter · Desinfektionsmittelspender"],
 ["Mobile Visite","Visitenwagen für Panel-PC und Laptop","Panel-PC (All-in-One) · Visitenwagen MV P1, stufenlos höhenverstellbar · Laptopwagen"],
 ["Wäscheversorgung","Seit dem Wickelsack® von 1961","Wäschesammler · Etagenwagen · Mehrzweckwagen · Wäschetransportsäcke"],
 ["Schrankwagen","Medical Logistics","Schrankwagen für den Wäschetransport und für den Modultransport"],
 ["Sterilgutlogistik","Geschlossen und sicher transportiert","Sterilguttransportwagen · Sterilgut-Shuttle-System"],
 ["OP-Ausstattung","Aufbewahren, lagern, unterstützen","Hakenwagen aus Edelstahl · Instrumententische"],
 ["Entsorgung","Sammeln, trennen, abtransportieren","Abfallsammler · Abwurfbehälter · Transportcontainer · Wertstoffsammler"],
 ["Modulversorgung","Für alle gängigen ISO-Module","Module und Modulkörbe · Trägerwände · Modulwagen RGAE 322MTRS"],
 ["Regal- und Lagersysteme","Einfach, flexibel und belastbar","Regalwagen, fahrbar · Fachböden und Eckpfosten"]];
/* Unternehmen in Zahlen und Fakten (hammerlit.de: Historie, Das Unternehmen, Nachhaltigkeit, Verbundene Unternehmen) */
var EVID=[
 ["Gegründet","März 1954 in Leer, von Curt Th. Meseke und Wilhelm Connemann"],
 ["Verbundene Unternehmen","Hammerlit Austria GmbH in Wiener Neudorf, Hammerlit Polska in Posen"],
 ["Lager und Lieferung","Logistikhalle mit scannergeführtem Hochregallager, eigener Fuhrpark mit GPS"],
 ["Energie","Der Solarpark der Unternehmensgruppe erzeugt mehr Strom, als Hammerlit und seine Zulieferer verbrauchen"]];
var TEAM=[];
/* Aktuelles: nur Einträge, die auf eine Seite verlinken. [Datum, Titel, Rubrik, URL] */
var NEWS=[
 ["Nov. 2025","productronica 2025, München: halitec Reinraumeinrichtungen in Halle B2, Stand 147","Messe","https://exhibitors.productronica.com/ausstellerportal/2025/aussteller/ausstellerdetails/hammerlit-gmbh/?elb=228.1100.1963.1.111"],
 ["2025","Spenden statt schenken: 5.000 € für Ärzte ohne Grenzen, DLRG, DGzRS, Humedica und Mercy Ships","Engagement","https://www.hammerlit.de/news/30-spenden-statt-schenken-2025.html"],
 ["Produktneuheit","BatterySafe: Akku-Lager- und Ladeschrank mit Wasserlöschsystem","Produkt","https://www.hammerlit.de/produktneuheiten-hammerlit/batterysafe.html"],
 ["Katalog","Gesamtprogramm Nr. 42: der Katalog aller Produktbereiche, kostenfrei","Katalog","https://www.hammerlit.de/news/29-neuer-katalog-gesamtprogramm-nr-42-verfgbar.html"]];
var SHEETS=[];
