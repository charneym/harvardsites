var FONTS=['300 1em "Archivo"','400 1em "Archivo"','900 1em "Archivo"','italic 500 1em "Fira Sans"','400 1em "IBM Plex Sans"','italic 400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
/* contact: allresist.de > Impressum and Kontakt */
var TEL="+49334135930",TELT="+49 3341 35 93 0",FAXT="+49 3341 35 93 29",MAIL="info@allresist.de";
var ADDR="Am Biotop 14, 15344 Strausberg";
var AR="https://www.allresist.de/",PI=AR+"portfolio-item/";
/* product groups (allresist.de > Produkte, product pages and Service). [group, title, detail, url] */
var PRODS=[
 ["E-Beam-Resists","CSAR 62 · Phoenix 81 · Medusa 84 SiH","Positive und negative Resists für die Elektronenstrahl-Lithographie: höchstauflösend unter 10 nm, mit sehr hohem Kontrast und sehr prozessstabil. Medusa 84 SiH ist ein HSQ-Resist ohne MIBK.",PI+"e-beam-resist-ar-p-6200-serie-csar-62/"],
 ["Photoresists","AR-P 3100 bis 5300 · Atlas 46","Positiv-, Negativ- und Umkehrresists für i-line und Breitband-UV, von dünnen Schichten bis zu extrem stabilen Strukturen von bis zu etwa 200 µm mit Atlas 46.",PI+"photoresist-ar-n-4600-serie/"],
 ["Schutzlacke","Electra 92 · AR-PC 5000","Dünne, leitfähige Schichten leiten Aufladungen bei der Elektronenbestrahlung auf isolierenden Substraten ab und lassen sich danach einfach mit Wasser entfernen.",PI+"schutzresist-ar-pc-5092-02-electra-92/"],
 ["Prozesschemikalien","Entwickler, Verdünner, Remover","Die passenden Chemikalien zu jedem Resist: Entwickler, Verdünner, Stopper, Remover und der Haftvermittler AR 300-80.",PI+"haftvermittler-ar-300-80-neu/"],
 ["Sonderanfertigung","Resists nach Kundenwunsch","Wir passen bestehende Standard-Resists an oder entwickeln einen Resist komplett nach Ihren Wünschen, als Speziallack oder Prozesschemikalie für Ihre Technologie.",AR+"service-2/"]];
/* management, from the Impressum and the company history (Firmengeschichte, Neuigkeiten Sept. 2026). Text-only masthead. */
var TEAM=[
 {g:"Geschäftsführung",name:"Brigitte Schirmer",title:"Geschäftsführerin · Mitgründerin",sum:"Gründete Allresist am 16. Oktober 1992 gemeinsam mit Matthias Schirmer, um das Resist-Know-how der Fotochemischen Werke Berlin zu bewahren."},
 {g:"Geschäftsführung",name:"Ulrike Schirmer",title:"Geschäftsführerin",sum:"Übernimmt ab Januar 2027 als alleinige Geschäftsführerin die Nachfolge und führt das Familienunternehmen in die nächste Generation."},
 {g:"Gründer",name:"Matthias Schirmer",title:"Mitgründer",sum:"Naturwissenschaftler und Mitgründer. 2022 gemeinsam mit Brigitte Schirmer mit dem Verdienstorden des Landes Brandenburg geehrt."}];
/* news (allresist.de > Presse), each links to the original post */
var NEWS=[
 ["Oktober 2026","Entwicklung ohne toxisches TMAH: der neue Cholin-Entwickler","Resist des Monats",AR+"oktober-2026-entwicklung-ohne-toxisches-tmah-der-neue-cholin-entwickler-von-allresist/"],
 ["September 2026","Weltklasse made in Strausberg-Nord","Berliner Zeitung",AR+"berliner-zeitung-weltklasse-made-in-strausberg-nord/"],
 ["September 2026","Allresist auf der MNE 2026 in Interlaken: neue Entwicklungen für die Lithographie","Neuigkeiten",AR+"allresist-auf-der-mne-2026-in-interlaken-neue-entwicklungen-fuer-die-lithographie/"],
 ["September 2026","Dichtfest des Logistikzentrums und Finale beim Deutschen Nachhaltigkeitspreis 2027","Neuigkeiten",AR+"doppelter-grund-zur-freude-erfolgreiches-dichtfest-und-finaleinzug-beim-deutschen-nachhaltigkeitspreis-2027/"]];
var SHEETS=[];
