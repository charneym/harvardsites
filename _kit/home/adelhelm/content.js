var FONTS=['300 1em "Archivo"','400 1em "Archivo"','italic 400 1em "Archivo"','500 1em "Archivo"','400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"','500 1em "IBM Plex Mono"'];
/* contact: adelhelm.de > Impressum and Über uns & Standorte */
var TEL="+497121988560",TELT="+49 7121 98856-0",FAXT="+49 7121 98856-29",MAIL="info@adelhelm.de";
var PW="https://www.adelhelm.de";
/* adcoat ML-Line (Medical Line): adelhelm.de > Branchen > Medizintechnik (Life Science). [tag, title, detail, url] */
var MED=[
 ["HF-Chirurgie","adcoat® ML HFIso","Elektrische Isolation, Blendfreiheit, Sterilisierbarkeit und Antihafteigenschaften in eng tolerierten Schichten auf Griffen, Elektroden, Schaftrohren und HF-Pinzetten.",PW+"/beschichtungen/elektrisch-isolierend.html"],
 ["Führungsdrähte","adcoat® ML FluoroWire®","Senkt die intravaskulären Reibungskräfte auf Führungsdrähten aus Edelstahl und Nitinol, anwendbar etwa auf Katheter, Stents und Ballons. FDA-konform und biokompatibel.",PW+"/branchen/medizintechnik-life-science.html"],
 ["Elektrochirurgie","adcoat® ML ElectroBond™","Biokompatibel, extrem widerstandsfähig, glatt und reibungsarm, mit sehr guter Haftung auf Metallen und Edelstählen: für eine ausgezeichnete Gewebeablösung.",PW+"/branchen/medizintechnik-life-science.html"],
 ["Kennzeichnung","ML adPrint","Permanente, sehr dünne, reibungsarme, sterilisierbare und biokompatible Bedruckungen auf beschichteten Oberflächen: Logos, Skalen und Codes für die Rückverfolgbarkeit.",PW+"/verfahren/sonstige.html"]];
/* surface functions of the ML-Line (same page) */
var MAT=[
 ["Schutz","Antihaft-, Chemikalien- und Korrosionsschutz, in unterschiedlichen Härten und Dicken."],
 ["Elektrisch","Elektrisch leitend oder elektrisch isolierend, hydrophil oder hydrophob."],
 ["Im Einsatz","Sterilisierbar, antimikrobiell, gleitoptimiert, abriebbeständig und atraumatisch."]];
/* management (Impressum) and the group companies (Über uns & Standorte); text-only masthead */
var TEAM=[
 {g:"Geschäftsführung",name:"Bennet-Christian Adelhelm",title:"Ing., vertretungsberechtigt",sum:"ADELHELM Kunststoffbeschichtungen GmbH"},
 {g:"Geschäftsführung",name:"Thomas Adelhelm",title:"Dipl.-Wirt.-Ing. (FH), Geschäftsführer",sum:"ADELHELM LubriCoat GmbH"},
 {g:"Unternehmensgruppe",name:"ADELHELM Kunststoffbeschichtungen",title:"Eningen u. A., Deutschland",sum:"Funktionale Kunststoffbeschichtung, Antihaftbeschichtung, Chemikalienschutz, Korrosionsschutz"},
 {g:"Unternehmensgruppe",name:"ADELHELM LubriCoat",title:"Eningen u. A., Deutschland",sum:"Gleitlack-Beschichtungen, Trockenschmierung, Korrosionsschutz"},
 {g:"Unternehmensgruppe",name:"ADELHELM LubriCoat NA",title:"Mukwonago, Wisconsin, USA",sum:"Kunststoff-, Antihaft- und Gleitlack-Beschichtungen, Chemikalien- und Korrosionsschutz"},
 {g:"Unternehmensgruppe",name:"EPOSINT AG",title:"Islikon, Schweiz",sum:"Uhrenindustrie, Chemie- und Apparatebau, Medizintechnik, Elektrotechnik"},
 {g:"Unternehmensgruppe",name:"TECHNICOAT Functional Coatings",title:"Tschechien, Rumänien, Polen",sum:"Öl und Gas, Lebensmittel, chemische Industrie"},
 {g:"Unternehmensgruppe",name:"TECHNICOAT India",title:"Pune, Indien",sum:"Antihaft- und Gleitbeschichtungen, Zink- und Manganphosphatierung, Sandstrahlen"},
 {g:"Unternehmensgruppe",name:"VALLON Metallveredlung",title:"Reutlingen, Deutschland",sum:"Nasschemische Oberflächenbehandlung und galvanische Beschichtungen"}];
var SHEETS=[];
