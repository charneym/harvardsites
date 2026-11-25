var FONTS=['300 1em "Archivo"','400 1em "Archivo"','italic 400 1em "Archivo"','500 1em "Archivo"','400 1em "Open Sans"','600 1em "Open Sans"','700 1em "Open Sans"','500 1em "IBM Plex Mono"'];
/* contact: pkt-gmbh.de > Kontakt and the Impressum */
var TEL="+497234955000",TELT="+49 7234 9550-0",FAXT="+49 7234 9550-40",MAIL="info@pkt-gmbh.de";
var PW="https://www.pkt-gmbh.de";
/* the technologies (pkt-gmbh.de > Technologien, each with its own figures). [process, title, detail, url] */
var TECH=[
 ["Mikro · Präzision","Mikro- und Präzisionsspritzguss","Hochpräzise Kunststoffteile mit Mikrostrukturen ab einem Teilegewicht unter 0,001 g. Gratfreie Bohrungen bis 0,16 mm Kerndurchmesser, Entlüftungsbahnen innerhalb von 2 µm, Anschnitte ab 0,1 mm.",PW+"/technologien#mikro-und-praezisionsspritzguss"],
 ["Dünnwand","Technischer Dünnwandspritzguss","Wandstärken ab 0,2 mm und ein Fließweg-Wandstärken-Verhältnis von 150:1 bei technischen Werkstoffen, auf Maschinen mit hoher Spritzdynamik.",PW+"/technologien#technischer-duennwandspritzguss"],
 ["Mehrkomponenten","Mehrkomponentenspritzguss","Overmolding, Indexplatten, Drehteller und Core Back, bei Bedarf mit thermischer Trennung der Komponenten im Werkzeug.",PW+"/technologien#mehrkomponenten-spritzguss"],
 ["Hybrid","Hybridteile","Form- und haftschlüssige Verbindungen von Kunststoff und Einleger, mit Roboter-Wiederholgenauigkeit von 3/100 mm und Vorwärmung der Einleger.",PW+"/technologien#hybridteile"]];
/* the industries (pkt-gmbh.de > Branchen) */
var IND=[
 ["Medizintechnik","Werkzeuge, Anlagen und Prozesse qualifiziert nach DQ, IQ, OQ, PQ gemäß GMP; eingehauste Maschinen, Ablage in saubere Gebinde."],
 ["Uhrenindustrie","Hier liegen die Wurzeln: Mikrozahnräder mit Gewichten im Milligramm-Bereich für die Schweizer Uhrenindustrie."],
 ["Automotive","Prozessfähigkeit in engen Toleranzfenstern, Sensorik im Werkzeug für Druck und Temperatur, auch in Richtung E-Mobilität."],
 ["Elektrotechnik","Rundstecker in Dünnwandtechnologie, filigrane Steckkammern und extrem hohe Reproduziergenauigkeit."],
 ["Feinwerktechnik","Enge Toleranzen für Lage, Form und Positionierung, bis zur Montage kompletter Baugruppen."],
 ["Verpackungsindustrie","Werkzeuge mit hoher Kavitätenanzahl und hoher Positionsgenauigkeit der Kavitäten."]];
/* management (Impressum) and department heads (pkt-gmbh.de > Leistungen). Text-only masthead. */
var TEAM=[
 {g:"Geschäftsführung",name:"Samuel Glaser",title:"Geschäftsführer",sum:"„Egal ob Mikro- oder Präzisionsspritzguss, Dünnwand, Mehrkomponenten oder Hybrid: wir bieten Ihnen die beste Lösung.“"},
 {g:"Geschäftsführung",name:"Joachim Lehmann",title:"Geschäftsführer",sum:"Vertritt die Gesellschaft gemeinsam mit Samuel Glaser."},
 {g:"Ansprechpartner",name:"Joachim Staude",title:"Betriebsleitung",sum:"Betriebsleitung am Standort Tiefenbronn."},
 {g:"Ansprechpartner",name:"Ingo Ehringer",title:"Leitung Entwicklung und Konstruktion",sum:"Machbarkeitsanalyse, Bauteiloptimierung, Moldflow-Analyse, FMEA und DFM."},
 {g:"Ansprechpartner",name:"Christian Walter",title:"Leitung Qualitätssicherung",sum:"Hochpräzise Messtechnik bis zur Computertomografie, Inline-Kameraüberwachung."}];
var SHEETS=[];
