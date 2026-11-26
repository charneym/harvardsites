/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function meds(){return '<ul class="pfr pipe np">'+MED.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function mats(){return '<div class="ev ind"><span class="lab kick" data-r>Qualität</span><dl>'+MAT.map(function(c){return '<div data-r><dt class="lab">'+esc(c[0])+'</dt><dd>'+esc(c[1])+'</dd></div>'}).join("")+'</dl></div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* where intra products are used (intra-online.de > Unternehmen), each with a small line icon */
var ICO={
 a:'<svg viewBox="0 0 56 56"><path d="M6 10H50V40H6Z"/><path class="a" d="M10 28H18L22 18L27 34L31 24H46"/><path d="M22 48H34M28 40V48"/></svg>',
 p:'<svg viewBox="0 0 56 56"><path d="M28 6V22"/><path d="M28 22C22 18 12 20 10 34C9 44 14 50 22 48C26 47 26 42 26 36V24"/><path d="M28 22C34 18 44 20 46 34C47 44 42 50 34 48C30 47 30 42 30 36V24"/><path class="a" d="M40 30V52"/></svg>',
 k:'<svg viewBox="0 0 56 56"><path d="M28 48C16 40 8 32 8 21C8 14 13 9 19 9C23 9 26 11 28 14C30 11 33 9 37 9C43 9 48 14 48 21C48 32 40 40 28 48Z"/><path class="a" d="M4 28H17L21 21L26 36L30 26H52"/></svg>',
 g:'<svg viewBox="0 0 56 56"><path d="M4 18C18 14 38 14 52 18"/><path d="M4 38C18 42 38 42 52 38"/><path class="a" d="M4 28H30"/><path class="a" d="M30 22C40 22 40 34 30 34C26 34 26 22 30 22Z"/></svg>'};
var SERV=[
 ["a","Anästhesie und Intensivmedizin","Messen und überwachen","Invasive Messung arterieller, venöser und pulmonaler Drücke, kontinuierliche Infusion, parenterale Ernährung und Blutentnahme über eine einzige Punktionsstelle."],
 ["p","Pneumologie","Luft und Flüssigkeit ableiten","Spezielle Katheter entfernen pathologische Ansammlungen von Luft und Flüssigkeit aus der Pleurahöhle, auch im Notfall, wenn eine chirurgische Saugdrainage zu spät käme."],
 ["k","Kardiologie und Elektrophysiologie","Stimulieren und ableiten","Temporäre Stimulation des Herzens bei bradykarden Rhythmus- und Reizleitungsstörungen, Ableitung des intrakardialen EKG, Messung des Herzzeitvolumens."],
 ["g","Gefäßchirurgie","Thromben entfernen, Venen strippen","Ballonkatheter für Embolektomie, Thrombektomie und Gallengänge, Spülkatheter für die Irrigation, Venenstripper für das antegrade und retrograde Strippen."]];
function serv(){return '<div class="caps svc">'+SERV.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["16.–19.11.2026","Aussteller auf der MEDICA 2026 in Düsseldorf","MEDICA","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3079895"],
 ["Zertifikat","Qualitätsmanagement nach ISO 13485: das Zertifikat zum Download","intra","https://intra-online.de/files/intra-online/unternehmen/zertifikate/192153_intra%20special%20catheters%20GmbH_ISO%2013485.2021%20WA%2024_Ed.%202_De-En_HZERT_24_JS_PDF.pdf"],
 ["Karriere","Gesucht: Mitarbeiter Bestellwesen und Einkauf (m/w/d)","intra",PW+"/aktuelles/stellenanzeige-mitarbeiter-bestellwesen-einkauf-mwd"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Spezialkatheter<span class="nomob"> · Rehlingen-Siersburg, seit 1977</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Katheter, die</span> <span class="l">sicher liegen.</span> <span class="l"><em>Seit 1977.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Arterielle und venöse Seldinger-Katheter, Elektroden für die Elektrophysiologie, Thoraxdrainage und Gefäßchirurgie: nach GMP gefertigt, sterilisiert und CE-gekennzeichnet.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Zum Produktkatalog '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Seit 1977</span>'+
   '<h2 class="txt" id="mani">Kein Produkt ist so gut, dass es nicht noch verbessert werden könnte. Deshalb gehört Innovation zu unserem <span class="nw">täglichen Geschäft:</span> <em><span class="nw">gemeinsam mit Ärzten</span> <span class="nw">aus Forschung, Universität</span> <span class="nw">und Klinik.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1977</span><p class="k">gegründet; seither Spezialkatheter für Kunden in aller Welt</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">Produktbereiche, von arteriellen Kathetern bis zur Thoraxdrainage</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">48 h+</span><p class="k">Liegezeit des MICROSELD®-Arterienkatheters aus PTFE, etwa zur Langzeit-Druckmessung</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Seldinger-Technik</span><h2 class="d3"><span class="nw">Vier Schritte</span> <em class="nw">ins Gefäß.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Punktion</span><span>Draht</span><span>Dilatator</span><span>Katheter</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Ein Stich,</span> <span class="nw">sicher im Gefäß.</span></h2><p>Die Seldinger-Punktionsnadel erreicht das Gefäß. Der MICROSELD® eignet sich besonders für die Punktion der Arteria radialis, brachialis und femoralis.</p></article>'+
     '<article class="step"><h2><span class="nw">Der Draht</span> <span class="nw">weist den Weg.</span></h2><p>Durch die Nadel folgt der Führungsdraht mit flexibler J-Spitze, eingeführt in Einhandtechnik. Die Nadel wird zurückgezogen, der Draht bleibt liegen.</p></article>'+
     '<article class="step"><h2><span class="nw">Der Dilatator</span> <span class="nw">weitet den Kanal.</span></h2><p>Über den liegenden Draht weitet der Dilatator den Stichkanal. Nadel, Führungsdraht, Dilatator und Spritze liegen den zentralvenösen Sets bei.</p></article>'+
     '<article class="step"><h2><span class="nw">Der Katheter</span> <span class="nw">liegt.</span></h2><p>Der Katheter gleitet über den Draht ins Gefäß, der Draht wird entfernt. Weiches Polyurethan, Soft-Tip und cm-Markierung; der Katheterclip fixiert ihn sicher.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="anwendungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Anwendungen</span><h2 class="d2 split"><span class="nw">Wo intra-Katheter</span> <em class="nw">im Einsatz sind.</em></h2></div><p data-r>Mehr als 40 Jahre Erfahrung in der Herstellung von Spezialkathetern für Anästhesie, Intensiv- und Notfallmedizin, Innere Medizin, Pädiatrie, Pneumologie, Gefäßchirurgie, Elektrophysiologie und Kardiologie.</p></div>'+
   serv()+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produktkatalog</span><h2 class="d2 split"><span class="nw">Von der Arterie</span> <em class="nw">bis zur Pleura.</em></h2></div><p data-r>Zu allen Spezialitäten bieten wir das passende Zubehör, von Dreiwegehähnen bis zu Drainageventilen. Unser Vertriebsteam unterstützt Sie gern bei der Produktauswahl.</p></div>'+
   meds()+
   mats()+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Hohe Qualität,</span> <em class="nw">die gleich bleibt.</em></h2></div><p data-r>Der Erfolg eines Produktes definiert sich mehr denn je durch hohe und gleichbleibende Qualität. Deshalb setzen wir auf qualifizierte Mitarbeiter und modernste Produktionsstätten.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Gegründet</span><h3 data-r>1977</h3><p data-r>Seit fast fünf Jahrzehnten Spezialkatheter für Anästhesie, Innere Medizin, Intensiv- und Notfallmedizin, Kardiologie und Pneumologie.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Zertifiziert</span><h3 data-r>ISO 13485</h3><p data-r>Dazu Anhang V der Richtlinie 93/42/EWG. Bis zum beantragten MDR-Zertifikat gelten die Übergangsbestimmungen nach Art. 120.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Standort</span><h3 data-r>Rehlingen-Siersburg</h3><p data-r>Oststrasse 2, im Saarland. Von hier beliefern wir unsere Kunden in aller Welt.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Neues</span> <em class="nw">von intra.</em></h2></div><p data-r>Messen, Zertifikate und offene Stellen: was sich bei intra special catheters tut.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Fragen zu</span> <em class="nw">einem Produkt?</em></h2>'+
   '<p class="sub" data-r>Gerne unterstützt Sie unser Vertriebsteam bei der Produktauswahl. Schreiben Sie uns oder rufen Sie an.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>intra special catheters GmbH<br>Oststrasse 2<br>66780 Rehlingen-Siersburg</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Katalog</span><p data-r><a class="ul" href="'+PW+'/produktkatalog" target="_blank" rel="noopener">Produktkatalog online</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>intra special catheters GmbH<br>Oststrasse 2, 66780 Rehlingen-Siersburg</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/anwendungen">Anwendungen</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Zertifiziert</span>ISO 13485, CE-Kennzeichnung<br>Gegründet 1977</div>'+
  '</div>'+'%%FOOTLOGO%%'+
  '<div class="legal"><span class="lab">© 2026 intra special catheters GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",seldinger:"story",produkte:"produkte",anwendungen:"anwendungen",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"intra special catheters GmbH — Spezialkatheter aus Rehlingen-Siersburg, seit 1977",x:"Start"};
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
