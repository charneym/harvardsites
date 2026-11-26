var FONTS=['300 1em "Archivo"','italic 300 1em "Archivo"','400 1em "Archivo"','italic 400 1em "Archivo"','500 1em "Archivo"','400 1em "IBM Plex Sans"','italic 400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
/* contact: hpf-elektronik.de > Kontakt, Ansprechpartner and Impressum */
var TEL="+497181998870",TELT="+49 7181 99887-0",FAXT="+49 7181 99887-9",MAIL="info@hpf-elektronik.de",SALES="sales@hpf-elektronik.de",SUPPORT="support@hpf-elektronik.de";
var CP="https://hpf-elektronik.de/";
/* product lines (hpf-elektronik.de > Kamerakontrollsysteme, Risskontrollsysteme, Codelesesysteme and the product pages). [tag, title, detail, url] */
var PRODS=[
 ["Farberkennung","Blisterkontrollsystem EOK FA","Farbkamera mit bis zu 12 Megapixel, Industrie-PC und temperaturkompensierte LED-Auflichtbeleuchtung: Farbkontrolle von Tabletten, Dragees und Kapseln, auch ungerichteter mehrfarbiger und bedruckter Kapseln. Lüfterlos und ohne sichtbare Kabel.",CP+"blisterkontrollsystem-eok-fa.html"],
 ["Einfarbig","Blisterkontrollsystem EOK BW","Befüllungskontrolle, Bruchstückerkennung, Kontur und Erkennung von Spots anderer Farbe mit bis zu 2452 × 2056 Pixel, eingelernt im Teach-in mit automatischem Suchen aller Produkte im Blister.",CP+"blisterkontrollsystem-eok-bw.html"],
 ["Druckbilder","Druckbildkontrollsystem EOK PQ","Prüft Farben und Merkmale des Druckbildes auf der Folie, ohne störende Glanzlichter bei der Ausleuchtung, mit sehr hoher Auswertungsgeschwindigkeit. Auch für den nachträglichen Einbau geeignet.",CP+"kamerakontrollsysteme.html"],
 ["Risskontrolle","Risskontrollsystem EOK CR","Durchlichtkontrolle für tiefgezogene Aluminium-Laminatfolie vor der Befüllung: Risse bis herab auf 5 µm werden sicher erkannt, bei typischen Folienbreiten von 100 bis 600 mm. Das Gerät ist selbstüberwachend.",CP+"risskontrollsystem-eok-cr.html"],
 ["Codelesen","Codelesesystem EOK CC","Bis zu 8 hochpräzise Leseköpfe tasten Pharmacodes bis 20 Stellen ab, bei Abzugsgeschwindigkeiten bis 100 m/min, mit integriertem Schieberegister und direkter Auswurfansteuerung.",CP+"codelesesystem-eok-cc.html"],
 ["Nachverfolgbarkeit","Track & Trace System EOK TT","Für die Codes und Konzepte der Rückverfolgbarkeit, von PZN und GS1 GTIN bis E-Pedigree: für Arzneimittel- und Patientensicherheit, Fälschungssicherheit und Markenschutz.",CP+"codelesesysteme.html"]];
/* contact persons, as listed on hpf-elektronik.de > Ansprechpartner. Text-only masthead. */
var TEAM=[
 {name:"Dipl.-Ing. (FH) Volker Seyffer",title:"Geschäftsführer"},
 {name:"Dipl.-Inf. (FH) Thomas Bleile",title:"Entwicklung"},
 {name:"Alexander Schwarz",title:"Einkauf"}];
/* news: each row links out to the source */
var NEWS=[
 ["05/2026","interpack 2026 in Düsseldorf: HPF Elektronik aus Urbach als Aussteller, Halle 16, Stand F16","interpack · Ausstellerverzeichnis","https://www.interpack.com/vis/v1/en/exhibitors/interpack2026.3007214"],
 ["Produkte","Komplett überarbeitet: die neuen\u00a0Kamerakontrollsysteme EOK\u00a0FA, BW\u00a0und\u00a0PQ","HPF · Kamerakontrollsysteme",CP+"kamerakontrollsysteme.html"],
 ["06/2024","ACHEMA 2024 in Frankfurt am Main: HPF Elektronik in Halle 3, Stand F72","HPF · Startseite",CP],
 ["2021","Virtueller Messestand zur FACHPACK 2021: die Kontrollsysteme von HPF im virtuellen Rundgang","HPF · Virtueller Messestand","https://virtualx.mmb-messebau.de/tour/kmm/210822-hpfelektronik_fachpack2021"]];
var SHEETS=[];