var FONTS=['300 1em "Barlow Semi Condensed"','400 1em "Barlow Semi Condensed"','500 1em "Barlow Semi Condensed"','400 1em "Barlow"','italic 400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"'];
/* contact: jfa.de > Kontakt and Impressum */
var TEL="+49602186050",TELT="+49 6021 8605-0",FAXT="+49 6021 8605-20",MAIL="kundenbetreuung@jfa.de";
var ADDR="Ruhlandstraße 72–78, 63741 Aschaffenburg";
var JF="https://www.jfa.de/";
/* the range (jfa.de > Produkte). [group, title, detail, url] */
var PRODS=[
 ["Messmittel","Mess- und Kontrollplatten, Winkelnormale 90°","Messbalken, Kalibrierwürfel 90°, Rundlaufprüfgeräte, Rundtische und Feinmesstische: Mess- und Spannzeuge aus natürlichem Hartgestein für Fertigung und Feinmessraum.",JF+"hcpg/p/5/messmittel/"],
 ["Komponenten","Aufbauten und Komplettsysteme","Maschinenbasen und Maschinengestelle aus Granit für Laser-Materialbearbeitung und Mikrozerspanung, Portale, luftgelagerte Kreuztische, steckerfertige Systeme.",JF+"hcpg/p/6/komponenten-aufbauten-systeme/"],
 ["Sondermesstechnik","Maßgeschneiderte Messeinrichtungen","Längenmessmaschinen, Kurbelwellen-, Turbinenläufer- und Walzenmessstände, Planarität-Messgeräte: von der Planung über Konstruktion und Fertigung bis zur Inbetriebnahme.",JF+"hcpg/p/7/sondermesstechnik/"],
 ["Lohnfertigung","Fräsen, Schleifen, Justage, Montage","Flach- und Führungsbahnschleifen, µ-genaue Justage in klimakonstanter Umgebung und Montage von Linearführungen, vom Kleinstbauteil bis zum tonnenschweren Maschinenbett.",JF+"hcpg/p/8/lohnfertigung/"],
 ["Werkstoffe","Keramik, Glaskeramik, Invar","Präzisionsbearbeitung von Al₂O₃, SiC, SiSiC, Glaskeramik und Sonderstählen wie Invar und Titan, mit eigenentwickelter Werkzeugtechnik.",JF+"hcpg/p/9/werkstoffe/"],
 ["Pflege","JFA-Clean","Das Reinigungsmittel für Messplatten, Messnormale und technische Körper aus natürlichem Hartgestein, in Gebinden zu 1 und 5 Litern.",JF+"hcpg/p/11/clean/"]];
/* management, as listed in the jfa.de Impressum; history from jfa.de > Über uns > Historie. Text-only masthead. */
var TEAM=[
 {g:"Geschäftsführung",name:"Johannes Fischer",title:"Geschäftsführer",sum:"Gesellschafter seit 1994"},
 {g:"Geschäftsführung",name:"Matthias Fischer",title:"Geschäftsführer",sum:"Gesellschafter seit 1994"},
 {g:"Geschäftsführung",name:"Hans Fischer",title:"Geschäftsführer",sum:""},
 {g:"Geschäftsführung",name:"Lukas Fischer",title:"Geschäftsführer",sum:""}];
/* news: each row links out to the source (jfa.de > News Archiv) */
var NEWS=[
 ["21.07.2026","Berufswegekompass am 10.10.2026 in der Linde MH Arena","jfa.de",JF+"news/n/98/berufswegekompass-10.10.2026-linde-mh-arena/#news98"],
 ["20.05.2025","PRECISIEBEURS 2025 in ’s-Hertogenbosch, 12. und 13. November","jfa.de",JF+"news/n/96/precisiebeurs-2025-nl-s-hertogenbosch-12.-13.-nov/#news96"],
 ["06.05.2025","EMO 2025, Messe Hannover, 22. bis 26. September","jfa.de",JF+"news/n/97/emo-2025-messe-hannover-22.-26.-september/#news97"],
 ["Juni 2025","JFA auf der LASER World of PHOTONICS 2025, Messe München","world-of-photonics.com","https://exhibitors.world-of-photonics.com/ausstellerportal/2025/aussteller/ausstellerdetails/johann-fischer-aschaffenburg-praezisionswerk-gmbh-und-co-kg/?elb=178.1100.2693.1.111"]];
var SHEETS=[];
