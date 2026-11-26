var FONTS=['300 1em "Montserrat"','italic 300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','400 1em "Open Sans"','500 1em "Open Sans"','600 1em "Open Sans"'];
/* contact: greiner-gmbh.de > Impressum and Unternehmen > Kontakt */
var TEL="+497144811200",TELT="+49 7144 8112-0",FAXT="+49 7144 811299",MAIL="info@greiner-gmbh.de";
var GR="https://www.greiner-gmbh.de/";
/* MEDBEST, from greiner-gmbh.de > Medbest and its product pages. [area, name, detail, url] */
var PRODS=[
 ["Dialyse","Multiline Next DC","Ein vollständig neues Konzept der Dialyseliege in Design, Technologie und Leistung: 3 bis 5 Motoren, extra weiche Polsterung für viele Stunden, 5-Punkt-Armauflagen, bis 220 kg Patientengewicht.",GR+"medbest/medizinische-liegen/dialyseliege.html"],
 ["Ambulantes Operieren","Multiline Next AC und AC+","Liege zur OP-Vorbereitung, Ruhe- und Aufwachliege nach der OP und für den Transport. Die AC+ mit kurzem Rückenteil, Normschienen rundum und Kopfstütze Ergo für den ambulanten OP.",GR+"medbest/medizinische-liegen/multiline-next-ac-plus.html"],
 ["Infusion und Onkologie","Multiline Next IT","Mit einzigartiger Konstruktion für die Infusions- und Transfusionsmedizin und die Chemotherapie.",GR+"medbest/loesungen/dialyse-infusion-transfusion/infusion-und-transfusion.html"],
 ["Untersuchung","SITA Variationsliege","Vielfältige Ausführungen von Liegen, passend für jeden Untersuchungsbereich, jetzt bis 220 kg Patientengewicht.",GR+"medbest/medizinische-liegen/sita.html"],
 ["Transport","Transportliegen","Transportliegen mit agilem Fahrgestell, hoher Manövrierfähigkeit und komfortabler Polsterung.",GR+"medbest/loesungen/transport-mobilisation/transportstuehle.html"],
 ["Pflege","Pflegesessel","Pflegesessel und Ruheliegen für Tagespflege und Seniorenheime, mit intelligenter Komfortausstattung.",GR+"medbest/loesungen/tagespflege-seniorenheime/pflegestuehle-und-ruheliegen.html"],
 ["Arbeitsplatz","Arbeitshocker","Ein breites Sortiment in verschiedenen Varianten, mit unterschiedlichen Bezügen und Ausstattungsmerkmalen.",GR+"medbest/loesungen/arbeitshocker-arbeitsstuehle/arbeitshocker.html"]];
/* greiner-gmbh.de > Unternehmen > Historie */
var HIST=[
 ["1922","Walter Greiner Senior gründet „GREINER Stahlmöbel“ in einer kleinen mechanischen Werkstatt."],
 ["1972","Die ersten medizinischen Liegen und Stühle überzeugen Krankenhäuser und Arztpraxen auf Anhieb."],
 ["1988","Mit der Scheel-Mann-Sitze GmbH kommen Automobil- und Nutzfahrzeugsitze dazu."],
 ["2016","Neues Firmengebäude in Pleidelsheim und die Liegengeneration Multiline Next DC, IT und AC."]];
/* greiner-gmbh.de > Unternehmen > Kontakt. Text-only masthead. */
var TEAM=[
 {name:"Kristina Greiner",title:"Geschäftsführerin",sum:"Familienunternehmen in dritter und vierter Generation"},
 {name:"Katja Bärlin-Greiner",title:"Prokuristin",sum:"Telefon +49 7144 811-20"},
 {name:"Markus Euchner",title:"Bereichsleiter Markt & Innovationen",sum:"Telefon +49 7144 8112-68"},
 {name:"Julian Schockenhoff",title:"Intl. Sales Manager & Vertriebsleiter DACH",sum:"Telefon +49 7144 8112-74"}];
/* MEDICA 2026 exhibitor directory; greiner-gmbh.de > News. [date, title, source, url] */
var NEWS=[
 ["November 2026","GREINER auf der MEDICA 2026 in Düsseldorf, Halle 15, Stand G24","MEDICA 2026 · Ausstellerverzeichnis","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3077124"],
 ["März 2026","Save the date: GREINER auf der TOP HAIR Messe 2026 in Düsseldorf","GREINER · News",GR+"unternehmen/newsdetails.html?tx_news_pi1%5Bnews%5D=316&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=cb3cf99e8302696031eb74ef2eabf7da"],
 ["2026","Arab Health Dubai 2026: GREINER ist wieder dabei","GREINER · News",GR+"unternehmen/newsdetails.html?tx_news_pi1%5Bnews%5D=314&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=c2e1f18ffa4dcd41283eb635253f75bb"],
 ["November 2025","MEDICA 2025: GREINER ist wieder dabei","GREINER · News",GR+"unternehmen/newsdetails.html?tx_news_pi1%5Bnews%5D=311&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=1182c9ef28568827ae2b742649c32065"]];
var SHEETS=[];
var GRD="M155.9,50c-.8,2-1.3,4.2-1.3,6.6s.4,4.5,1.3,6.5c.8,2,2,3.7,3.6,5.2,1.5,1.4,3.4,2.6,5.5,3.4,2.1.8,4.4,1.2,7,1.2s4.8-.4,7.1-1.2c.8-.3,1.7-.6,2.5-1.1v-14.8h11.2v20.5c-2.9,2.1-6.3,3.7-10.1,4.8-3.8,1.1-7.6,1.6-11.4,1.6s-8.1-.6-11.6-1.9c-3.5-1.3-6.6-3.1-9.2-5.4-2.6-2.4-4.6-5.1-6-8.3-1.4-3.2-2.2-6.7-2.2-10.5s.7-7.3,2.2-10.5c1.4-3.2,3.5-5.9,6.1-8.3,2.6-2.4,5.7-4.2,9.3-5.4,3.5-1.3,7.4-1.9,11.7-1.9s9,.7,12.7,2.2c3.8,1.5,6.9,3.7,9.5,6.5l-7.8,6.9c-2-2-4.1-3.4-6.4-4.4-2.3-.9-4.8-1.4-7.5-1.4s-4.9.4-7,1.2c-2.1.8-4,1.9-5.5,3.4-1.5,1.4-2.7,3.2-3.6,5.1ZM246.7,65.6l11.8,16.2h-13.2l-10.3-14.2c-.2,0-.4,0-.5,0h-10.6v14.1h-12.4V31.3h22.7c7.4,0,13.1,1.6,17.2,4.9,4.1,3.2,6.2,7.7,6.2,13.4s-.9,7.1-2.8,9.8c-1.9,2.7-4.5,4.8-8,6.2,0,0,0,0,0,0ZM233.8,40.8h-10v17.5h10c3.7,0,6.6-.8,8.5-2.3,1.9-1.5,2.9-3.7,2.9-6.5s-1-4.9-2.9-6.5c-1.9-1.5-4.8-2.3-8.5-2.3ZM288,60.7h24.7v-9.2h-24.7v-10.9h28v-9.4h-40.2v50.5h41.2v-9.4h-28.9v-11.7ZM335.3,81.8h12.4V31.3h-12.4v50.5ZM403.9,61.9l-26.4-30.6h-10.2v50.5h12.2v-30.6l26.4,30.6h10.2V31.3h-12.2v30.6ZM447.5,60.7h24.7v-9.2h-24.7v-10.9h28v-9.4h-40.2v50.5h41.2v-9.4h-28.9v-11.7ZM527.6,81.8l-10.3-14.2c-.2,0-.4,0-.5,0h-10.6v14.1h-12.4V31.3h22.7c7.4,0,13.1,1.6,17.2,4.9,4.1,3.2,6.2,7.7,6.2,13.4s-.9,7.1-2.8,9.8c-1.9,2.7-4.5,4.8-8,6.2,0,0,0,0,0,0l11.8,16.2h-13.2ZM516,40.8h-10v17.5h10c3.7,0,6.6-.8,8.5-2.3,1.9-1.5,2.9-3.7,2.9-6.5s-1-4.9-2.9-6.5c-1.9-1.5-4.8-2.3-8.5-2.3Z";
