/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Zum Lieferprogramm '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){return '<div class="caps">'+SYS.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* milestones (amc-systeme.de > Über AMC > Geschichte von AMC) */
function tl(){var T=[["1998","Das erste Prozessleitsystem für die Anlagenautomatisierung"],["2006","Weld-QM für Schweißprozesse in der Automobilindustrie, mit dem INTEC-Messepreis"],["2014","Markteinführung der Umweltmonitoring-Plattform SensoMaster"],["2024","AMC iFactoryX geht an den Start"]];
  return '<ol class="amtl">'+T.map(function(t){return '<li><span class="v" data-r>'+t[0]+'</span><p data-r>'+esc(t[1])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Systemhaus seit 1990<span class="nomob"> · Chemnitz, Sachsen</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Messen, prüfen</span> <span class="l"><em>und automatisieren.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AMC ist Ihr Systemhaus für Mess-, Steuerungs- und Automatisierungstechnik aus Chemnitz: bewährte und innovative Produkte, dazu Systemlösungen von der Aufgabenstellung bis zur Inbetriebnahme.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/systeme">Zu den Systemlösungen '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>AMC – Ihr Partner seit 1990</span>'+
   '<h2 class="txt" id="mani">Seit 1990 liefern und realisieren Ingenieure und Techniker von AMC moderne Produkte und innovative Lösungen für die Mess-, Prüf- <span class="nw">und Automatisierungs­technik.</span> <em><span class="nw">Ihr Partner für</span> <span class="nw">den Erfolg von morgen.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1990</span><p class="k">am 13. August in Chemnitz gegründet, von Dipl.-Ing. Bernd Göbel und Dr. Frank Neubert</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30 Jahre</span><p class="k">Partnerschaft mit Advantech, als iAutomation-Premier-Partner (2024)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 kHz</span><p class="k">Datenerfassung mit AMC iFactoryX, für Zustandsüberwachung und vorausschauende Wartung</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">AMC iFactoryX · Monitoring</span><h2 class="d3"><span class="nw">Vom Sensor</span> <em><span class="nw">zur Visualisierung.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Erfassen</span><span>Übertragen</span><span>Visualisieren</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Direkt an der Maschine.</h2><p>Sensoren erfassen vor Ort, was die Anlage verrät: Vibrationen, Temperaturen und Luftfeuchte, Verbräuche von Wasser und Energie, Laufzeiten und Statuszustände, mit einer Datenerfassung bis 3 kHz.</p></article>'+
     '<article class="step"><h2>Am Edge verarbeitet.</h2><p>Leistungsstarke Edge-IoT-Geräte verarbeiten die Daten und übertragen sie sicher, über offene Industrieprotokolle wie LoRaWAN, MQTT, OPC UA oder EtherCAT, in Ihre On-Premise- oder Cloud-Umgebung.</p></article>'+
     '<article class="step"><h2>Sichtbar gemacht.</h2><p>Webbasierte Dashboards auf industriellen Monitoren, in Leitstellen oder auf dem Smartphone zeigen Anlageneffizienz, Alarme und Zustandsprognosen: Störungen werden früh erkannt, Stillstände seltener.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Komponenten für</span> <em><span class="nw">die Industrie.</span></em></h2></div><p data-r>Zum umfangreichen Lieferprogramm von AMC gehören Produkte für die Mess- und Prüftechnik sowie für die Steuerungstechnik und Automation, mit Partnern wie Advantech, NI (heute Teil von Emerson) und Meilhaus Electronic.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="systeme" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Systeme</span><h2 class="d2 split"><span class="nw">Von der Aufgabe</span> <em><span class="nw">bis zum System.</span></em></h2></div><p data-r>Wir übernehmen die komplette Bearbeitung von Projekten, oder helfen bei Teilaufgaben: Beratung, Planung und Projektierung, Forschung und Entwicklung, Software, Montage, Inbetriebnahme, Schulung und Wartung.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="ifactoryx" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>AMC iFactoryX</span><h2 class="d2 split"><span class="nw">Der Einstieg</span> <em><span class="nw">in die digitale Fabrik.</span></em></h2></div><p data-r>Ein modulares, skalierbares Monitoringsystem für Zustandsüberwachung und vorausschauende Wartung. Es wächst mit Ihren Anforderungen, in Leistung, Kanalanzahl und Funktionalität, und bindet Datenerfassungssysteme herstellerunabhängig an.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Anwendungen</span><dl>'+
    '<div data-r><dt class="lab">OEE</dt><dd>Gesamtanlageneffizienz (Overall Equipment Effectiveness)</dd></div>'+
    '<div data-r><dt class="lab">Digital Andon</dt><dd>Effizientes Management von Alarmen und Ereignissen</dd></div>'+
    '<div data-r><dt class="lab">PHM</dt><dd>Zustandsüberwachung und -prognose (Prognostic Health Monitoring)</dd></div>'+
    '<div data-r><dt class="lab">Maintenance</dt><dd>Wartungsmanagement für Maschinen und Anlagen</dd></div>'+
    '<div data-r><dt class="lab">FMS</dt><dd>Anlagenüberwachung (Facility Monitoring System)</dd></div>'+
    '<div data-r><dt class="lab">SPC</dt><dd>Statistische Prozesskontrolle</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Ausgezeichnet</span><p class="cr" data-r><span>WISE IoT Innovation Award von Advantech, 2025</span><span>On-Premise oder Cloud</span><span>Schulung „Vom Sensor zur Visualisierung“</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">35 Jahre</span> <em><span class="nw">aus Chemnitz.</span></em></h2></div><p data-r>Was 1990 mit Geräten für die Mikrowellen- und Plasmaphysik begann, ist heute PC-basierte Mess-, Steuerungs- und Automatisierungstechnik für Maschinen- und Anlagenbau, Fabrikautomation, Energie und Umwelt, Transportation und die Automobilindustrie.</p></div>'+
   tl()+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="messen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Messen und News</span><h2 class="d2 split"><span class="nw">Treffen Sie uns</span> <em><span class="nw">auf der Messe.</span></em></h2></div><p data-r>AMC ist auf Messen, Konferenzen und Fachtagen vertreten, von der SPS in Nürnberg bis zu den NI Days; jeder Eintrag führt zur Quelle.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Wir beraten</span> <em><span class="nw">Sie gern.</span></em></h2>'+
   '<p class="sub" data-r>Anfragen zu Systemlösungen und Komponenten: Die erfahrenen Mitarbeiter von AMC stehen Ihnen gern zur Verfügung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>AMC – Analytik & Messtechnik GmbH Chemnitz<br>Heinrich-Lorenz-Str. 55<br>09120 Chemnitz</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Service</span><p data-r><a class="ul" href="'+AM+'kontakt.html" target="_blank" rel="noopener">Anfrageformular</a><br>AMC Service und Reparatur<br>Rückrufbitte und AMC eNews</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>AMC – Analytik & Messtechnik GmbH Chemnitz<br>Heinrich-Lorenz-Str. 55, 09120 Chemnitz</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/systeme">Systeme</a><br><a class="ul" href="#/ifactoryx">iFactoryX</a><br><a class="ul" href="#/messen">Messen</a></div>'+
   '<div class="c"><span class="lab">Branchen</span>Maschinen- und Anlagenbau<br>Fabrikautomation<br>Energie und Umwelt<br>Transportation, Automobil</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:500;font-size:60px;letter-spacing:.32em">AMC</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AMC<span class="nomob"> – Analytik & Messtechnik</span> GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",monitoring:"story",produkte:"produkte",systeme:"systeme",ifactoryx:"ifactoryx",unternehmen:"unternehmen",messen:"messen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AMC – Analytik & Messtechnik GmbH Chemnitz — Mess-, Prüf- und Automatisierungstechnik seit 1990",x:"Start"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(r.sec,true);try{history.replaceState(null,"","#/")}catch(x){}},300)})()})();
