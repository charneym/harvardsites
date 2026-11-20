var FONTS=['400 1em "Bodoni Moda"','italic 400 1em "Bodoni Moda"','500 1em "Bodoni Moda"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"','400 1em "Krona One"'];
var WEB="https://verteqcapital.com/";
var TEL="+39 02 8277 8044",TELH="tel:+390282778044";
var MAIL="info@verteqcapital.com";
var MAP="https://www.google.com/maps/search/?api=1&query=via+Larga+13+20122+Milano";
/* target profiles, from the firm's Strategia page */
var CRIT=[["Aziende ben guidate","Imprese che necessitano di un partner in grado di supportarne la crescita."],
 ["Nicchie specializzate","Aziende consolidate con significativa esposizione internazionale, alti margini e rilevante potenziale di generazione di cassa."],
 ["Aziende familiari","Imprese che affrontano problemi di successione, con necessità di ristrutturare la proprietà attraverso investimenti di maggioranza o minoranza."],
 ["Real assets","Beni immobiliari e asset nell’energia rinnovabile in grado di offrire ritorni significativi nel lungo termine, con un profilo di rischio relativamente limitato."],
 ["Settori","Un approccio di investimento aperto e opportunistico, senza preclusioni di settore."]];
/* current portfolio, described as on the firm's Investimenti page */
var PF=[
 ["Polis Termoplastici","Componenti in tecnopolimeri per macchinari industriali. Acquisita come add-on di Radici Products nel novembre 2023.","Componentistica · 2023","https://www.polistermoplastici.com/"],
 ["Epilate","Leader italiano nell’epilazione definitiva.","Epilazione definitiva · 2023","https://www.epilate.it/"],
 ["Radici Products","Componenti in tecnopolimeri per macchinari industriali.","Componentistica · 2022","https://www.radiciproducts.it/"],
 ["ArteOlio","Olio extra-vergine di oliva 100% italiano di qualità superiore, prodotto nella Maremma Toscana. Società agricola e società benefit.","Olio extra-vergine · 2019–2025","https://www.arteolio.com/"],
 ["Gellify","Società a modello misto attiva in investimenti di venture capital e consulenza digitale, focalizzata su operatori digitali B2B.","Consulenza digitale · 2017","https://gellify.com/"]];
/* realised */
var EXIT=[["Valyrian Enterprise Solutions","Boutique tecnologica specializzata in Salesforce e intelligenza artificiale applicata ai processi commerciali. Acquisita al 100% dal Gruppo Lutech (Apax Partners).","Exit · aprile 2026","https://valyrianenterprisesolutions.com/"]];
var TEAM=[
 {g:"Fondatore",name:"Ennio Valerio Boccardi",title:"Fondatore, Managing Partner e Presidente",sum:"Già co-fondatore di VAM Investments Group, Principal in Palamon Capital Partners e Director in Magenta SGR; MBA alla Columbia Business School."},
 {g:"Consiglio di Amministrazione",name:"Francesco Di Giovanni",title:"Consigliere d’Amministrazione",sum:"Già AD di GEOX, Compagnia Aerea Italiana, Cementir Italia e Moplefan, e Managing Director di Aeroporti di Roma."},
 {g:"Consiglio di Amministrazione",name:"Giuliano Caviglia",title:"Consigliere d’Amministrazione",sum:"Digital Experience Director di Lutech; fondatore e AD di Valyrian Enterprise Solutions, in precedenza Executive Managing Director in Accenture."},
 {g:"Team di investimento",name:"Guido Gandi",title:"Investment Associate",sum:"Nel team dal 2020. Laurea Magistrale in Finance all’Università Bocconi, cum laude."},
 {g:"Team di investimento",name:"Davide Leccese",title:"Investment Associate",sum:"Nel team dal 2022. Laurea Magistrale in Corporate Finance all’Università LUISS, cum laude."},
 {g:"Team di investimento",name:"Lorenzo Spaterna",title:"Investment Analyst",sum:"Nel team dal 2025, dopo esperienze in Crédit Agricole CIB e Menara Capital. Laurea Magistrale in Finance all’Università Bocconi, cum laude."}];
/* news: only items with a working link on the firm's site */
var NW="https://verteqcapital.com/it/news/";
var NEWS=[
 ["1 giugno 2026","VERTEQ Capital promuove Davide Leccese Investment Associate","VERTEQ Capital",NW+"june-1-2026-verteq-capital-appoints-davide-leccese-investment-associate/"],
 ["15 aprile 2026","Valyrian Enterprise Solutions, partecipata di VERTEQ Capital, acquisita dal Gruppo Lutech (Apax)","VERTEQ Capital",NW+"15-aprile-2026-valyrian-enterprise-solutions-partecipata-di-verteq-capital-acquisita-dal-gruppo-lutech-apax-partners/"],
 ["2 febbraio 2026","ArteOlio continua a crescere: aumento di capitale di 3 milioni di euro per 110 ettari biologici in Toscana","VERTEQ Capital",NW+"february-2-2026-arteolio-continues-to-grow-e3-million-capital-increase-to-purchase-and-develop-110-hectares-in-tuscany-100-organic-reaching-total-olive-grove-surface-of-800-hectares/"],
 ["7 maggio 2025","Nuove nomine: Davide Leccese Senior Investment Analyst, Lorenzo Spaterna entra nel team","VERTEQ Capital",NW+"7-maggio-2025/"],
 ["15 novembre 2023","VERTEQ Capital cresce nella componentistica per macchinari: Radici Products acquisisce Polis Termoplastici","VERTEQ Capital",NW+"verteq-capital-cresce-nella-componentistica-per-macchinari/"]];
var SHEETS=[];
