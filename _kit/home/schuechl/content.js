var FONTS=['300 1em "Archivo"','italic 300 1em "Archivo"','400 1em "Archivo"','italic 400 1em "Archivo"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"','500 1em "IBM Plex Mono"'];
var MAIL="info@schuechl.de";
var TW="http://www.schuechl.de";
/* Anlagen: jede Zeile nach schuechl.de (Prodaus-de.html, UHG-Easy-4-5-de.html, UGM-850-1300-de.html). [Bereich, Anlage, Typ, Merkmal, Beschreibung] */
var PIPE=[
 ["Manuell","UHG-400 / 500 / 600 Easy","Manuelle Vakuumgießanlagen","Formen bis 740 × 600 × 750 mm","Absolut praxisbezogen, einfach in der Handhabung und sehr robust: Belüftung über Kugelhahn statt Magnetventilen, das Zusammenkippen der Materialien von Hand über nach außen geführte Hebel. Digitale Vakuumanzeige, stufenlos einstellbare Rührerdrehzahl, Lift serienmäßig."],
 ["Automatisch","UGM-850 / UGM-1300","Vollautomatische Vakuumgießanlagen","Durch Module erweiterbar","Misch- und Luftstoßautomatik für blasenfreie Abgüsse und gleichbleibende Qualität, Touchscreen und Anzeige von Anwendungsfehlern in der Steuerung. Formen bis 1 170 × 1 300 × 1 100 mm; ein Erweiterungsmodul ist in weniger als einer Minute angeschoben."],
 ["Neu im Programm","340-MULTIPLEX · 500-MULTICAST","Kompakte Vakuumgießanlagen","Stoppuhr mit Topfzeit","Stufenlos einstellbare Rührgeschwindigkeit, digitale Vakuumanzeige und Universalhebel; das Stoppuhrmodul zeigt auch die Topfzeit der Mischung. Aluminiumtür mit Glasscheibe oder Plexiglastür, Formen bis 560 × 500 × 635 mm."],
 ["Großformat","UHG-690-17","Vakuumgießanlage für große Mengen","Becher B bis 17 Liter","Starke elektrische Kippeinheit und eine zusätzliche seitliche Tür, für Formgrößen bis 800 × 690 × 720 mm. Weitere Optionen auf Anfrage."],
 ["Rühren","URM-400 · UHG-500 Kombi","Vakuum-Rühranlage","Rühren bis 30 Liter","Extrem starkes Rührwerk, Vakuumregulierventil, Behälter mit 3, 10 und 30 Litern im Schnellwechselhalter. Als Kombi mit der Gießanlage UHG-500: zwei Anlagen in einer."],
 ["Verguss","Serien- und Elektroverguss","Vakuumgießanlage für den Serienverguss","Teach-In-Steuerung","Drehtisch, Positioniereinheit und Schlauchklemme für den Serienverguss. Die Teach-In-Steuerung wiederholt automatisch die einmal vorgezeigte Gießmenge."]];
/* außerdem im Programm (Prodaus-de.html) */
var EVID=[
 ["Wachsgießanlagen","Zur Herstellung von Wachskernen für den Feinguss, in verschiedenen Baugrößen"],
 ["Infiltrieranlagen","Erhöhen die Festigkeit von Musterteilen, dichten ab und befüllen komplexe Hohlräume, vollautomatisch oder manuell"],
 ["Vakuumaggregate","Universell einsetzbar, für Dauerbetrieb ausgelegt, hohes Vakuum unter 1 mbar; Vakuumpumpen ab Lager"],
 ["Wärmeschränke, Waagen, Werkzeuge","Wärmeschränke mit Prozessregelung, das KERN-Waagenprogramm, Werkzeuge und Verbrauchsmaterial, auch für MCP-, HEK-, MTT-, Renishaw- und KLM-Anlagen"]];
var TEAM=[];
/* Messen: nur Einträge mit Link. [Datum, Titel, Ort, URL] */
var NEWS=[
 ["Nov. 2025","productronica 2025: Halle A4, Stand 400","Messe München","https://exhibitors.productronica.com/ausstellerportal/2025/aussteller/ausstellerdetails/schuechl-maschinenbau/?elb=228.1100.4391.1.111"],
 ["14.–17. Nov. 2023","productronica 2023: Halle A4, Stand 400","Messe München","http://www.schuechl.de/Messe-de.html"],
 ["07.–10. Nov. 2023","formnext 2023: als Mitaussteller bei Synthene, Halle 11.1","Frankfurt am Main","http://www.schuechl.de/Messe-de.html"],
 ["16.–23. Okt. 2019","K-Messe 2019: Halle 4, Stand A63","Düsseldorf","http://www.schuechl.de/Messe-de.html"]];
var SHEETS=[];
