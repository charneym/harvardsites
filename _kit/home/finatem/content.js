var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','500 1em "Spectral"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Figtree"','400 1em "Cinzel"','500 1em "Cinzel"'];
var WEB="https://finatem.com/";
var MAIL="info@finatem.de";
var TEL="+49 6172 388 440 0";
var TELH="+4961723884400";
var MAP="https://www.google.com/maps/search/?api=1&query=Rathausplatz+12+61348+Bad+Homburg+v.d.H.";
/* focus, as published on finatem.com (home page) */
var CRIT=[["Unternehmensgröße","Jahresumsatz zwischen € 10 Mio. und € 50 Mio."],
 ["Ertragskraft","EBITDA zwischen € 2 Mio. und € 6 Mio."],
 ["Region","Geschäftsaktivitäten bzw. Know-how in Deutschland, Österreich und der Schweiz."],
 ["Beteiligungsform","Mehrheitsbeteiligungen."],
 ["Anlässe","Nachfolgeregelungen, Konzern-Spin-Offs sowie wachstumsbedingte Folgeinvestitionen."],
 ["Haltung","Partner unserer Portfoliounternehmen und ihres Managements."]];
/* portfolio, as listed on finatem.com/portfolio */
var PF=[
 ["Food & Service Group","Zustellgroßhandel von Food- und Non-Food-Artikeln mit Fokus auf Schnellgastronomie."],
 ["GFT Gothaer Fahrzeugtechnik","Produktion von Auslegersystemen und sicherheitsrelevanten Krankomponenten."],
 ["HKM Sports Equipment","Vertrieb eines eigenen Reitsport-Vollsortiments."],
 ["hGears","Entwicklung und Produktion von hochpräzisen Antriebskomponenten mit Fokus auf E-Mobilität, E-Bikes und professionelle Elektrowerkzeuge."]];
var EX=[
 ["GfS – Gesellschaft für Straßenunterhaltung","Stahlschutzsysteme und Verkehrssicherung"],
 ["Mungo Befestigungstechnik","Befestigungstechnik für die Baubranche"],
 ["Schollenberger Kampfmittelbergung","Zivile Kampfmittelsondierung und -bergung"],
 ["WST Präzisionstechnik","Präzisionsteile für Automotive, Getriebebau und Hydraulik"],
 ["DataWerks","Big-Data-Analysesoftware"],
 ["TechnoPhysik","Dämmstoffe und Brandschutzprodukte"],
 ["Licht|basis","Großhandel für Leuchtmittel und Lichtlösungen"],
 ["Schwinn","Dekorative Möbelbeschläge aus Kunststoff- und Metalldruckguss"],
 ["Bärbel Drexel","Naturkosmetik, Nahrungsergänzung und Wohn-Accessoires"],
 ["Oberndörfer Präzisionsteile","Hochpräzise Dreh- und Frästeile für Automotive"],
 ["Mecanindus Vogelsang","Spannstifte und Komponenten für Fahrwerk und passive Sicherheit"],
 ["FMW","Turnkey-Projekte in der Fördertechnik"],
 ["J&S Automotive","Sicherheitselemente, Wärmeabschirmsysteme und Schweißbaugruppen"],
 ["Derby Cycle","Fahrräder für den Fachhandel in Deutschland und Europa"],
 ["Steudle","Elektrische Kontakte und Präzisionsstanzteile"],
 ["DNZ – Deutsche Notrufzentralen","Werkschutz, Sicherheitsdienste und Alarmleitstelle"],
 ["MBB Liftsystems","Hebebühnen und Fördertechnik"],
 ["Hügel Gutbrod","Zulieferer Automotive"],
 ["Towntalker Media","Out-of-Home-Medien"]];
/* team, as listed on finatem.com/team */
var TEAM=[
 {name:"Christophe Hemmerle",title:"Geschäftsführer · Gründungspartner"},
 {name:"Eric Jungblut",title:"Geschäftsführer · Partner"},
 {name:"Katrin Radtke",title:"Accounting · Treasury"},
 {name:"Sabine Gräfin Zedtwitz",title:"Investor Relations · Controlling"}];
var NEWS=[
 ["17.06.2026","Finatem","Erklärung zu den wichtigsten nachteiligen Auswirkungen auf Nachhaltigkeitsfaktoren (Finatem IV)","https://finatem.com/esg/"],
 ["05.05.2026","Rödl","Rödl berät IceLake bei der Übernahme der GfS Gesellschaft für Straßenunterhaltung mbH","https://www.roedl.com/insights/roedl-beraet-icelake-bei-der-uebernahme-der-gfs-gesellschaft/"],
 ["16.02.2026","Majunke","GroundBirds, a portfolio company of IceLake, has acquired GfS Gesellschaft für Straßenunterhaltung from Finatem","https://majunke.com/groundbirds-a-portfolio-company-of-icelake-has-acquired-gfs-gesellschaft-fuer-strassenunterhaltung-from-finatem-beteiligungsgesellschaft"],
 ["29.10.2024","CMS","CMS berät Aktionärin beim Verkauf der Mungo Befestigungstechnik AG","https://cms.law/de/che/news-information/cms-beraet-aktionaerin-beim-verkauf-der-mungo-befestigungstechnik-ag"]];
var SHEETS=[];
