var FONTS=['400 1em "Marcellus"','400 1em "Source Sans 3"','italic 400 1em "Source Sans 3"','600 1em "Source Sans 3"'];
/* contact: gctool.com > Kontakt, Unternehmen > Ansprechpartner, and the Impressum */
var TEL="+497515091580",TELT="+49 751 509158 0",FAXT="+49 751 509158 99",MAIL="diamond.info@gctool.com";
var ADDR="Josef-Bayer-Straße 3, 88250 Weingarten";
var GC="https://www.gctool.com/";
/* the range (gctool.com > Produkte > Bohrer / Fräser, Dienstleistungen, News > Neue Produkte). [group, title, detail, url] */
var PRODS=[
 ["Fräser · Neu","GC-2i High Performance Fräser","Neu entwickelter Schaftfräser aus Vollhartmetall, 2-Schneider mit Zentrumschnitt und MicroSpeed Diamantbeschichtung, für Spitzenleistungen bei Aluminium-IMS-Anwendungen.",GC+"produkte/fraeser.html"],
 ["Fräser","1- und 2-Schneiden-Fräser","Typen 1312 bis 1318 und 1322 bis 1328 für Innen- und Außenkonturen in IMS auf Aluminium- oder Kupferbasis, mit und ohne keramischem Dielektrikum.",GC+"produkte/fraeser.html"],
 ["Fräser","Spiral- und diamantverzahnt","Type 1704 mit rechteckiger Spiralverzahnung für halogenfreie und Hoch-Tg-Materialien und zum Nutzentrennen, dazu die Typen 1700, 1750, 1200, 1204 und 1250.",GC+"produkte/fraeser.html"],
 ["Bohrer","Kopf-, Spiral- und konische Bohrer","Kopfbohrer 1638, 1639 und 1640, Spiralbohrer 1835, konische Bohrer 1534 und Type 1625 mit stärkerer Diamantschicht, für Leiterplatte, IMS, Glas, Quarz und Keramik.",GC+"produkte/bohrer.html"],
 ["Gewinde","Gewindefrässtifte und Senker","Gewindefrässtift 1940 für metrische ISO-Innengewinde in IMS, Type 190x mit stärkerer Diamantschicht, Senker 1590 bis 1596 und Frässtichel 138x.",GC+"produkte/fraeser.html"],
 ["Dienstleistung","Beschichtungsservice","Wir beschichten auch Ihre eigenen Werkzeuge und sonstige Produkte aus Hartmetall, ohne dass Sie in Know-how und Infrastruktur für die Diamantbeschichtung investieren müssen.",GC+"dienstleistungen/beschichtungsservice.html"]];
/* contact persons, as listed on Unternehmen > Ansprechpartner. Text-only masthead. */
var TEAM=[
 {g:"Geschäftsführung",name:"Martin Strasmann",title:"Geschäftsführer",sum:"Telefon +49 751 509158 0"},
 {g:"Vertrieb",name:"Oliver Neuschel",title:"Leiter Vertrieb",sum:"Telefon +49 751 509158 14 · auch für das ISO 9001-Zertifikat"},
 {g:"Vertrieb",name:"Johannes Meschenmoser",title:"Technischer Vertrieb",sum:"Telefon +49 751 509158 25"},
 {g:"Einkauf",name:"Heike Stark",title:"Einkauf",sum:"Telefon +49 751 509158 13"}];
/* news: each row links out to the source */
var NEWS=[
 ["Nov. 2025","GCT auf der productronica 2025 in München, Halle B3, Stand 401","productronica","https://exhibitors.productronica.com/ausstellerportal/2025/aussteller/ausstellerdetails/gct-gmbh/?elb=228.1100.1780.1.111"],
 ["27.03.2024","Neu: GC-2i High Performance Fräser (2-Schneider) mit Zentrumschnitt für Aluminium-IMS","gctool.com",GC+"news/neue-produkte.html"],
 ["09.08.2021","GCT entwickelt diamantbeschichteten Bohrer Type 1639 für 5G-Materialien","gctool.com",GC+"news/pressemitteilungen.html"],
 ["18.06.2021","GCT beschichtet einen Bohrer von nur 0,05 mm mit der Multilayer-Diamantschicht","gctool.com",GC+"news/pressemitteilungen.html"]];
var SHEETS=[];
