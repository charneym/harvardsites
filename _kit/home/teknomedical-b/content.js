var FONTS=['400 1em "Playfair Display"','italic 400 1em "Playfair Display"','500 1em "Playfair Display"','400 1em "Asap"','500 1em "Asap"','600 1em "Asap"','italic 800 1em "Archivo"','italic 700 1em "Archivo"'];
/* contact: tekno-medical.com > Service > Kontakt and the Impressum */
var TEL="+49746117010",TELT="+49 7461 170 10",FAXT="+49 7461 170 150",MAIL="Mail@tekno-medical.com";
var TM="https://www.tekno-medical.com";
/* the product areas (tekno-medical.com > Produkte, with their own sub-categories). [area, title, detail, url] */
var PRODS=[
 ["Offene Chirurgie","Chirurgische Instrumente","Basis-Instrumentarium, HNO, plastische Chirurgie, Gefäßchirurgie, Retraktor-Systeme, Mikro-, Neuro- und Wirbelsäulenchirurgie, Gynäkologie, Thorax, Magen und Darm.",TM+"/de/produkte/offene-chirurgie/"],
 ["Endoskopie","Optiken, Geräte und Systeme","Optiken und Geräte für Laparoskopie, Thorax, Urologie, Gynäkologie, Arthroskopie und Sinuskopie, dazu Mini- und Mikro-Systeme für die MIC.",TM+"/de/produkte/endoskopie/"],
 ["OP-Ausstattung","OP-Tische","Mechanische und elektrische OP-Tische mit dem passenden Zubehör.",TM+"/de/produkte/op-ausstattung/"],
 ["HF-Chirurgie","HF-Geräte und bipolare Pinzetten","HF-Geräte, Argonbeamer integriert in das HF-Gerät, und bipolare Pinzetten.",TM+"/de/produkte/hf-geraete/"],
 ["Sterilisation","Container und Siebschalen","Sterilisationscontainer, Siebschalen und Verbrauchsmaterial für die Aufbereitung.",TM+"/de/produkte/sterilisation/"],
 ["Fachbereiche","Dental, Veterinär, Ophthalmologie","Instrumentarium und HF-Geräte für die Zahnmedizin, Instrumente, Geräte und Optiken für die Tiermedizin, Instrumente für die Augenheilkunde.",TM+"/de/produkte/dental/"]];
/* new products (tekno-medical.com > News > Neuheiten); each links to its own data sheet. [name, area, text, pdf] */
var NEWS=[
 ["Bipolar-System","Urologie · Gynäkologie","Präzises Schneiden, effektive Koagulation und kontinuierliche Spülung, betrieben mit Kochsalzlösung.",TM+"/fileadmin/media/news/Neuheiten/0171_Bipolar_Resektoskop_System.pdf"],
 ["Ureterorenoskope","Urologie","Hochauflösende Optik mit bis zu 40.000 Pixeln, Ø 4,9 bis 8,1 Charr., Arbeitslängen von 150 bis 425 mm.",TM+"/fileadmin/media/news/Neuheiten/0165_Ureteroskop_2026_11_12.pdf"],
 ["HoLEP / MiLEP System","Urologie · BPH","Minimalinvasive Laser-Enukleation der Prostata, für die Chirurgie der benignen Prostatahyperplasie.",TM+"/fileadmin/media/news/Neuheiten/TK_0095_HoLEP-MiLEP_System_V02.pdf"],
 ["Hybrid Resektoskop","Monopolar · Bipolar","Monopolare und bipolare Technologie in einem einzigen System, mit speziell isolierten Komponenten.",TM+"/fileadmin/media/news/Neuheiten/TK_0150_Hybrid_Resectoscope_System_V02.pdf"],
 ["CLS 50 Kamera-System","Endoskopie","Kamera, LED-Lichtquelle sowie Bild- und Videospeicherung in einem kompakten System, mit 10-fachem digitalem Zoom.",TM+"/fileadmin/media/news/Neuheiten/TK_0135_CLS_50_Kompakteinheit.pdf"],
 ["TEKNO Flux Pumpen","Saugen · Spülen","Membran- und Peristaltikpumpen mit Touch-Display für Arthroskopie, Urologie, Hysteroskopie und Laparoskopie.",TM+"/fileadmin/media/news/Neuheiten/TK_0158_Tekno_Flux_Pumpen.pdf"]];
/* management (tekno-medical.com > Unternehmen > Management and the Impressum). Text-only masthead. */
var TEAM=[
 {g:"Geschäftsführung",name:"Harald Mattes",title:"Geschäftsführer",sum:"Sohn des Firmengründers; führt das Familienunternehmen gemeinsam mit seinem Bruder Florian."},
 {g:"Geschäftsführung",name:"Florian Mattes",title:"Geschäftsführer",sum:"Sohn des Firmengründers; führt das Familienunternehmen gemeinsam mit seinem Bruder Harald."},
 {g:"Gründer",name:"Bruno Mattes",title:"Firmengründer, 1976",sum:"Gründete Tekno-Medical 1976 in Tuttlingen."}];
var SHEETS=[];
