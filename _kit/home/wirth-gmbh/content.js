var FONTS=['300 1em "Archivo"','400 1em "Archivo"','italic 400 1em "Archivo"','500 1em "Archivo"','400 1em "Lato"','700 1em "Lato"','500 1em "IBM Plex Mono"'];
/* contact: wirth-gmbh.com > Impressum and Kontakt */
var TEL="+493460270880",TELT="+49 34602 7088-0",FAXT="+49 34602 7088-111",MAIL="info@wirth-gmbh.com";
var PW="https://wirth-gmbh.com/de",PV=PW+"/oktopus-vakuumhebegeraete";
/* the OKTOPUS® lines (wirth-gmbh.com > OKTOPUS Vakuumhebetechnik, each category page). [category, name, detail, url] */
var PROD=[
 ["Sandwichpaneele","OKTOPUS® PANEL-Jack","Vakuumheber für die horizontale und vertikale Wandmontage, die Decken- und die Dachmontage, als Kran- oder Stapleranbaugerät und für die Herstellung von Sandwichelementen; der IT-BT 1000 trägt bis 1.000 kg.",PV+"/sandwichpaneele"],
 ["Glasmontage","OKTOPUS® GLASS-Jack","Geräte für ebene und gebogene Scheiben, mit Dreh- und Schwenkfunktion: der GL-M 9000 trägt bis 9.000 kg, der GL-CC 1200 DES ist ein 3-Achsen-Funk-Manipulator für bis 1.200 kg.",PV+"/glashandling/glasmontage/ebene-scheiben"],
 ["Glasbearbeitung","Saugrahmen und Glaszangen","Für Fensterproduktion, Glasbearbeitung und Isolierglas: vertikale und horizontale Saugrahmen, kettenhängende Geräte, starr geführte Geräte mit Hubsäule und die Glaszange ERGO-Up.",PV+"/glashandling/glasbearbeitung"],
 ["Blech, Metall, Holz","Lasttraversen und Anbaugeräte","Vakuumheber für Metall- und Holzverarbeitung: Lasttraversen für Krane und kombinierte Stapler- und Krananbaugeräte.",PV+"/blech-metall-holz"],
 ["Manipulatoren","Gegengewichtsanlagen","Vakuumheber mit integrierter Gegengewichtsanlage, variable Gegengewichtsanlagen für Glasmontagen, Baustellenmanipulatoren zum Kran- und Stapleranbau, innerbetriebliche Manipulatoren.",PW+"/gegengewichtsanlagen-de"],
 ["Krananlagen","X-Y-Leichtüberkranung","X-Y-Leichtüberkranungen sowie Säulen- und Wandschwenkkrane: von der Planung und dem Layout bis zur Montage.",PV+"/krananlagen"]];
/* the safety features listed on every OKTOPUS category page (wirth-gmbh.com > Sicherheitsmerkmale) */
var IND=[
 ["Normen","Erfüllung aller Kriterien der DIN EN 13155; Geräte für innerbetriebliches Handling von Glas nach DIN EN 13035."],
 ["CE","CE-Zeichen nach Maschinenrichtlinie 2006/42/EG."],
 ["Zwei Kreise","Baustellengeräte als redundante 2-Kreis-Vakuumsysteme, jeder Vakuumkreis mit 2-facher Sicherheit."],
 ["Überwachung","Integrierte Vakuummanometer und integrierte Druckschalterüberwachung zur Anzeige von Funktionsstörungen."],
 ["Warnung","Optische und/oder akustische Warneinrichtungen bei Abweichungen vom Sollzustand."],
 ["Reserve","Ein Vakuumreservoir gleicht Vakuumverluste aus; Ausfälle der Energieversorgung werden energieautark angezeigt."],
 ["24 Volt","Baustellengeräte mit 24 V-Batteriesystem, mit wesentlich erhöhter Sicherheit gegenüber 12 V-Systemen, und integriertem Akkumeter."],
 ["Effizienz","Druckschaltergeregeltes Vakuumniveau zur Reduzierung des Strom- bzw. Druckluftverbrauchs."]];
/* management (Impressum) and the named contacts (Kontakt). Text-only masthead. */
var TEAM=[
 {g:"Geschäftsführung",name:"Holger Schadwinkel",title:"Geschäftsführer",sum:"WIRTH GmbH, Amtsgericht Stendal, HRB 204669."},
 {g:"Ansprechpartner",name:"Frank Pallas",title:"Vertrieb Inland",sum:"OKTOPUS® Vakuumhebetechnik in Deutschland."},
 {g:"Ansprechpartner",name:"Julia Bolze",title:"Vertrieb Export",sum:"OKTOPUS® Vakuumhebetechnik international."},
 {g:"Ansprechpartner",name:"Bastian Gottschlich",title:"Leichtüberkranung & Schwenkkräne",sum:"Planung, Layout und Montage von Krananlagen."}];
var SHEETS=[];
