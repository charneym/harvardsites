var FONTS=['300 1em "Barlow"','italic 300 1em "Barlow"','400 1em "Barlow"','500 1em "Barlow"','400 1em "Roboto"','500 1em "Roboto"','700 1em "Roboto"','500 1em "IBM Plex Mono"','700 1em "Arimo"'];
/* contact: hepako.de > Kontakt and Impressum */
var TEL="+49880791050",TELT="+49 8807 91050",FAXT="+49 8807 91215",MAIL="info@hepako.de";
var HW="https://www.hepako.de";
/* the fields of application (hepako.de > Einsatzbereiche, each from its own page). [typical parts, name, detail, url] */
var IND=[
 ["Miniaturisierung","Mikroteile","Selbst bei sehr kleinen Teilen setzen wir komplexeste Formen um, mit dem Elastomer, das die jeweilige Anwendung verlangt.",HW+"/einsatzbereiche/mikroteile/"],
 ["Schläuche · Dämpfer · Eartips","Hörgeräte","Unsere Gummiteile tragen zum akustischen Erfolg bei, durch Vibrationsdämpfung und Geräuschisolierung, und zum Tragekomfort.",HW+"/einsatzbereiche/hoergeraete/"],
 ["Membranen · Ventile · Dichtkappen","Medizin","Narkosemasken, Katheter oder Dichtkappen für Trokare und Luer-Locks, oft aus Flüssigsilikon und auf Wunsch im Reinraum der ISO-Klasse 7 montiert.",HW+"/einsatzbereiche/medizin/"],
 ["Membranen · Ventilsitze","Pneumatik und Pumpen","Membranen und Dichtungen für Pumpen, die Flüssigkeiten, Gase oder pastöse Stoffe fördern: passgenau und höchst zuverlässig.",HW+"/einsatzbereiche/pneumatik-und-pumpen/"],
 ["O-Ringe · Bälge · Buchsen","Feinwerktechnik","Hohe Lebensdauer selbst unter schwierigsten Bedingungen, und ein perfektes Zusammenspiel mit den anderen Komponenten.",HW+"/einsatzbereiche/feinwerktechnik/"],
 ["Schutzkappen · Pads","Optische Geräte","Formkonstanz und Passgenauigkeit für Mikroskope, Teleskope und Ferngläser, und Tragekomfort bei Brillen.",HW+"/einsatzbereiche/optische-geraete/"]];
/* elastomers (hepako.de > Materialien): [code, name, min °C, max °C] */
var MAT=[
 ["VMQ","Silikon-Kautschuk",-80,250],["FVMQ","Fluor-Silikon-Kautschuk",-65,250],["FFKM","Perfluor-Kautschuk",-25,320],["FKM","Fluor-Kautschuk",-30,250],
 ["HNBR","Hydrierter Nitrilkautschuk",-40,150],["IIR","Butyl-Kautschuk",-60,130],["EPDM","Ethylen-Propylen-Kautschuk",-30,130],["NBR","Nitril-Kautschuk",-50,110],
 ["CR","Chloropren-Kautschuk",-40,100],["PNR","Norbornen-Kautschuk",-30,70]];
/* management (hepako.de > Über uns > Management). Text-only masthead. */
var TEAM=[
 {g:"Geschäftsführung",name:"Dr. Christoph Partosch",title:"Geschäftsführender Gesellschafter seit 2016",sum:"Seit Herbst 2014 im Unternehmen, zunächst als Prokurist für Strategie, Geschäftsentwicklung und Vertrieb. Promotion in Wirtschaftswissenschaften (Dr. rer. pol.) an der Universität Münster."}];
var SHEETS=[];
