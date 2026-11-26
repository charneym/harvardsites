var FONTS=['300 1em "Barlow"','400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"','700 1em "Barlow Semi Condensed"','500 1em "IBM Plex Mono"'];
/* contact: wolco.pl > Kontakt and the footer register line */
var TEL="+48817476933",TELT="+48 81 747 69 33",MAIL="info@wolco.pl",MAILS="sprzedaz@wolco.pl";
var ADDR="ul. Związkowa 23, 20-148 Lublin";
var WG="https://www.wolco.pl/gallery/index/show/cid/3/id/";
/* the wire range (wolco.pl > Oferta). [group, name, detail, url] */
var PRODS=[
 ["Koletowanie","Druty do koletowania|gwoździ","Druty ze stali niskowęglowej pokryte miedzią lub cynkiem, Ø 0,60–0,80 mm, oraz druty ze stali nierdzewnej. WOLCO jest jedynym w Polsce producentem tych drutów; ulepszone druty powstają według własnej, opatentowanej technologii (patent nr 226273).",WG+"27"],
 ["EDM","Druty EDM|WOLCUT 500 i 900","Mosiężne druty do elektrodrążenia metali z mosiądzu M63 (CuZn37), Ø 0,20 i 0,25 mm, z tolerancją +0,001/−0,002 mm. Na życzenie pokrywane galwanicznie cynkiem, co zwiększa wydajność i skraca czas wykonania detalu.",WG+"83"],
 ["Miedziowane","Druty stalowe|miedziowane","Stal niskowęglowa pokrywana chemicznie lub elektrolitycznie miedzią, Ø 0,30–1,00 mm, 300–1100 MPa. Do produkcji siatek, szpilek i szczotek technicznych oraz jako drut introligatorski.",WG+"31"],
 ["Niklowane","Druty stalowe|niklowane","Stal niskowęglowa pokrywana galwanicznie niklem, Ø 0,40–1,00 mm. Dla przemysłu żarówkowego, zabawkowego i pamiątkarskiego, pszczelarstwa i jako drut ozdobny.",WG+"35"],
 ["Cynowane","Druty stalowe|cynowane","Stal niskowęglowa pokrywana galwanicznie cyną, Ø 0,40–1,00 mm, 300–450 MPa, dla przemysłu elektrycznego i elektronicznego.",WG+"71"],
 ["Cynkowane","Druty stalowe|cynkowane","Stal niskowęglowa pokrywana galwanicznie cynkiem, Ø 0,30–1,20 mm. Drut introligatorski, wikliniarski i ozdobny, do szczotek technicznych i lin stalowych.",WG+"75"],
 ["Mosiądzowane","Druty stalowe|mosiądzowane","Stal niskowęglowa pokrywana galwanicznie mosiądzem, Ø 0,30–0,80 mm, dla przemysłu pamiątkarskiego i zabawkowego.",WG+"79"],
 ["Mosiężne","Druty|mosiężne","Druty z mosiądzu M63 (CuZn37), Ø 0,30–0,80 mm, 300–900 MPa: do szczotek technicznych, dla przemysłu pamiątkarskiego i do zastosowań ogólnych.",WG+"87"],
 ["Miedziane","Druty|miedziane","Druty z miedzi M1E, Ø 0,20–1,38 mm, na życzenie cynowane lub srebrzone galwanicznie. Dla przemysłu elektrycznego, elektronicznego, jubilerskiego i galwanotechnicznego.",WG+"91"]];
/* people named on wolco.pl > Kontakt. Text-only masthead, no bio sheets. */
var TEAM=[
 {g:"Sprzedaż",name:"Paweł Lewko",title:"Kierownik Działu Sprzedaży",sum:"tel. +48 512 531 942 · pawel.lewko@wolco.pl"},
 {g:"Sprzedaż",name:"Judyta Kuczyńska",title:"Dział Sprzedaży",sum:"tel. +48 606 373 533 · sprzedaz@wolco.pl"},
 {g:"Sprzedaż",name:"Paulina Zaręba",title:"Dział Sprzedaży",sum:"tel. +48 607 107 852 · sprzedaz@wolco.pl"},
 {g:"Sprzedaż",name:"Paweł Breś",title:"Specjalista ds. Sprzedaży",sum:"tel. +48 607 107 625 · pawel.bres@wolco.pl"},
 {g:"Sprzedaż",name:"Michał Maj",title:"Specjalista ds. Handlowych",sum:"tel. +48 607 107 566 · michal.maj@wolco.pl"},
 {g:"Produkcja",name:"Krzysztof Zaręba",title:"Kierownik Wydziału Produkcji",sum:"tel. +48 607 107 374 · krzysztof.zareba@wolco.pl"}];
var SHEETS=[];
