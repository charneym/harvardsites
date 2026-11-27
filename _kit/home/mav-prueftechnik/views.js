/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Werkzeuge","Für jede Probe die passende Aufnahme","Spannwerkzeuge für die Messpunkt- und die Abzugseite, frei kombinierbar. Ab Werk etwa MK-8/A und SG 40 bis 500 N, SHA-40/A und SG 90 bis 10.000 N.",'<path d="M8 20H24V36H8Z"/><path d="M32 20H48V36H32Z"/><path class="a" d="M24 28H32"/><circle class="f" cx="16" cy="28" r="2.2"/>'],
  ["Sonderwerkzeuge","Konstruiert nach Ihrem Muster","Für kundenspezifische Testfälle konzipieren, fertigen und testen wir Sonderwerkzeuge anhand von Mustern. Schicken Sie uns Ihre Probe.",'<path d="M10 40L22 16H34L46 40Z"/><path class="a" d="M22 30H34"/><circle class="f" cx="28" cy="22" r="2.2"/>'],
  ["Software","Messdaten auswerten","mavDATAex übergibt Messwerte an Excel, mavSTAT erfasst sie statistisch mit Prüfplänen, mavCALIB erstellt Kalibrierscheine. Trial-Versionen zum Download.",'<path d="M8 12H48V40H8Z"/><path class="a" d="M14 34L22 26L30 30L42 18"/><path d="M20 46H36"/>'],
  ["Datenübertragung","RS232, Ethernet, REST-API","Messdaten gehen über die serielle Schnittstelle an PC oder Tischdrucker, bei den ETM-Geräten auch über Ethernet mit REST-API.",'<path d="M8 18H22V38H8Z"/><path d="M34 18H48V38H34Z"/><path class="a" d="M22 24H34M22 32H34"/><circle class="f" cx="15" cy="28" r="2"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function apps(){var A=[
  ["Kabelverarbeitung",["Zugfestigkeit an Flachsteckern, Kabelschuhen und Endhülsen, angepresst, gecrimpt oder geschweißt","Auszieh- und Aufsteckprüfung von Steckverbindungen","Wire-Wrap-Verbindungen, Kabelbinder und gespleißte Kabel"]],
  ["Medizin und Pharma",["Druckkraftmessung an subkutanen Spritzen","Ventile von Sprühdosen und Pumpmechanismen","Bruchfestigkeit von Tabletten, Dragees und Kapseln; Nahtmaterial und Verbände"]],
  ["Elektroindustrie",["Scherprüfung an SMD-Bauteilen auf Leiterplatten","Bruchprüfung an Keramik- und Leiterplatten","Materialprüfung an elektronischen Bauelementen"]],
  ["Weitere Prüfungen",["Haltekraft von Magneten, Tasterkraft und Kontaktdruck","Adhäsion von Klebstoffen, Etiketten und Stickern","Federn, Schnüre, Drahtseile, Folien und Aufreißlaschen"]]];
  return '<div class="apps">'+A.map(function(a,i){return '<div class="app"><span class="lab n">0'+(i+1)+'</span><h3>'+esc(a[0])+'</h3><ul>'+a[1].map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function svc(){var S=[
  ["Kalibrierung und Justierung","Wir kalibrieren in mehreren Messreihen und justieren gemäß den Abweichungen neu. Als Hersteller sind unsere Kalibrierungen mit denen akkreditierter Labore gleichzusetzen."],
  ["Prüfintervall","Den Zyklus legen Sie als Besitzer fest. Ohne andere Festlegung: höchstens alle 12 Monate, und immer nach einem Standortwechsel oder einer größeren Reparatur (ISO 7500-1)."],
  ["Reparatur und Support","Reparatur- und Wartungsarbeiten an MAV-Prüfgeräten und kompetenter Support bei technischen Fragen, direkt vom Hersteller in Berlin."],
  ["Leasing","Mit der MMV-Leasing in einer monatlichen Rate, auf Wunsch mit Service-Vereinbarung und Maschinenversicherung."]];
  return '<dl>'+S.map(function(s){return '<div><dt class="lab">'+esc(s[0])+'</dt><dd>'+esc(s[1])+'</dd></div>'}).join("")+'</dl>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1397" height="902" alt="ClipGunTester CGT von MAV Prüftechnik mit Touch-Bedienteil" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>The Pulltester Company<span class="nomob"> · Berlin, seit 1962</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Was halten muss,</span> <span class="l acc">prüft MAV.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Seit 1962 entwickelt und fertigt MAV PRÜFTECHNIK in Berlin Prüfgeräte für Zug- und Druckkräfte: für Crimpverbindungen, Steckverbinder und vieles mehr. Entwickelt und hergestellt in Deutschland.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Prüfgeräte ansehen '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Maschinen, Apparate, Vorrichtungen</span>'+
   '<h2 class="txt" id="mani">Was 1962 für die kabelverarbeitende Industrie begann, ist heute ein Spezialist für <em class="nw">Zug- und Druckprüfung.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1962</span><p class="k">gegründet in Berlin, als Hersteller von Maschinen, Apparaten und Vorrichtungen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10.000 Hz</span><p class="k">Messfrequenz in allen aktuellen Hand- und Motorgeräten</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10.000 N</span><p class="k">Anzeigebereich der großen Baugröße der ETM-Motorgeräte</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">So prüft ein ETM-Motorgerät</span><h2 class="d3">Eine Zugprüfung, <em>Schritt für Schritt.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Einspannen</span><span>Ziehen</span><span>Auswerten</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Die Probe wird eingespannt.</h2><p>Ein Werkzeug sitzt auf der Messpunktseite, der starren Seite der Lastmesszelle; das andere auf der Abzugseite, dem beweglichen Lastschlitten.</p></article>'+
     '<article class="step"><h2>Der Schlitten zieht.</h2><p>Mit frei einstellbarer Geschwindigkeit fährt der Lastschlitten an, gemessen mit 10.000 Hz. Die Längenmesseinrichtung zeichnet dabei den Kraft-Weg-Verlauf auf.</p></article>'+
     '<article class="step"><h2>Der Spitzenwert steht fest.</h2><p>Beim Bruch stoppt das Gerät, die Höchstkraft bleibt stehen. Die Messwerte gehen per RS232 oder Ethernet an mavDATAex, mavSTAT oder den Drucker.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split">Prüfgeräte für <em>Zug und Druck.</em></h2></div><p data-r>Handgeräte für schnelle, kostengünstige Prüfungen bis 1.000 N, Motorgeräte der ETM-Serie bis 10.000 N, und das Zubehör, um sie zu kalibrieren.</p></div>'+
   prods()+
   '<div class="act shop" data-r><a class="btn" href="'+OG+'Katalog.pdf" target="_blank" rel="noopener">Digitaler Produktkatalog (PDF) '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="werkzeuge" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Werkzeuge und Software</span><h2 class="d2 split">Was die Probe hält, <em>und was die Daten sagt.</em></h2></div><p data-r>Eine vielfältige Auswahl an Aufnahme- und Spannwerkzeugen, die sich fast beliebig kombinieren lassen, und Software für die Auswertung der Messdaten.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="anwendungen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Anwendungen</span><h2 class="d2 split">Nicht nur <em>für Kabel.</em></h2></div><p data-r>Unsere Geräte gehen weit über die kabelverarbeitende Industrie hinaus: in die Qualitätskontrolle, in Prüflabore und direkt in die Fertigung.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec dark2" id="service" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Service</span><h2 class="d2 split">Kalibriert, justiert, <em>vom Hersteller.</em></h2></div><p data-r>Kalibrierung, Justierung, Reparatur und Wartung Ihrer MAV-Prüfgeräte, dazu Leasing mit monatlicher Ratenzahlung.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Leistungen</span>'+svc()+'</div>'+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split">Aus Berlin-Neukölln, <em>in die ganze Welt.</em></h2></div><p data-r>Sämtliche Geräte werden in Deutschland entwickelt und hergestellt, nach ISO 9001 zertifiziert seit 1996, und über Vertretungen in Europa, Asien und Australien vertrieben.</p></div>'+
   team()+
   '<div class="qual"><span class="lab kick" data-r>Vertretungen</span><p class="cr" data-r><span>Australien</span><span>Belgien</span><span>China</span><span>Dänemark</span><span>Frankreich</span><span>Indien</span><span>Italien</span><span>Norwegen</span><span>Österreich</span><span>Polen</span><span>Rumänien</span><span>Russland</span><span>Schweden</span><span>Slowakei</span><span>Spanien</span><span>Tschechien</span><span>Ungarn</span><a class="ul" href="'+OG+'Unternehmen/Vertretungen/vertretungen.html" target="_blank" rel="noopener">Alle Adressen</a></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split">Neu im Programm, <em>und auf Messen.</em></h2></div><p data-r>Neue Werkzeuge, neue Software und die Messen, auf denen Sie uns treffen, zuletzt die productronica in München.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Schicken Sie uns</span> <em class="nw">Ihr Muster.</em></h2>'+
   '<p class="sub" data-r>Nicht sicher, welche Werkzeuge Sie brauchen? Senden Sie uns Proben, und wir stellen die passende Kombination zusammen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Anfrage senden '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresse</span><p data-r>MAV PRÜFTECHNIK GmbH<br>Sanderstraße 28<br>12047 Berlin, Deutschland</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Downloads</span><p data-r><a class="ul" href="'+OG+'Katalog.pdf" target="_blank" rel="noopener">Produktkatalog (PDF)</a><br><a class="ul" href="'+OG+'AGB.pdf" target="_blank" rel="noopener">AGB (PDF)</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresse</span>MAV PRÜFTECHNIK GmbH<br>Sanderstraße 28, 12047 Berlin</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Seiten</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/anwendungen">Anwendungen</a><br><a class="ul" href="#/service">Service</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Prüfgeräte</span>CT · FT · CGT-Touch<br>ETM-M · ETM-A · ETM-F<br>KMG · Lastmesszellen SM</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Barlow\',Arial,sans-serif;font-weight:500;font-size:54px;letter-spacing:.16em">MAV PRÜFTECHNIK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MAV PRÜFTECHNIK GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",prozess:"story",produkte:"produkte",werkzeuge:"werkzeuge",anwendungen:"anwendungen",service:"service",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MAV PRÜFTECHNIK — The Pulltester Company · Zug- und Druckprüfmaschinen aus Berlin, seit 1962",x:"Start"};
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
