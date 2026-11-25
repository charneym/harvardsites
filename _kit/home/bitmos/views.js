/* ================= VIEWS (home only: Produkte / Technologie / Unternehmen / Aktuelles open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Dark and bone grounds alternate: hero (dark, the sat 805 render), about (bone, statement +
   figures), the pulse-oximetry story (dark), products (bone: components and inspection in two columns, four equipment figures,
   three services), company (dark: two sites and recognition), news (bone), contact (dark). Content is never hidden at
   rest: reveals only enhance (failsafe in site.js). ================= */
function prods(g){return '<ul class="dcat">'+PROD.filter(function(p){return g.indexOf(p[0])>=0}).map(function(c){return '<li><span class="dc-b">'+esc(c[1])+'</span><span class="dc-m">'+esc(c[2])+'</span></li>'}).join("")+'</ul>'}
function caps(){return '<div class="dmesh">'+CAPS.map(function(m){
  return '<div class="dm"><span class="dm-v">'+esc(m[0])+'<small>'+esc(m[1])+'</small></span><h3>'+m[2]+'</h3><p class="dm-use">'+esc(m[3])+'</p></div>'}).join("")+'</div>'}
function apps(){return '<div class="dapps">'+APPS.map(function(a){return '<div class="da"><span class="lab kick">'+esc(a[0])+'</span><p>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function sites(){return '<ol class="dmfg">'+SITES.map(function(m,i){return '<li><span class="dmf-n">'+String(i+1).padStart(2,"0")+'</span><div><span class="lab dmf-k">'+esc(m[1])+'</span><h3>'+esc(m[0])+'</h3><p>'+esc(m[2])+'</p></div></li>'}).join("")+'</ol>'}
function certs(){return '<ul class="dcert">'+CERTS.map(function(c){return '<li><span class="dce-n">'+esc(c[0])+'</span><span class="lab">'+esc(c[1])+'</span></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={puls:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M2 24h8l3-12 5 20 4-14 3 6h13"/></svg>',
 sens:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 12h22a6 6 0 0 1 0 12H6"/><path d="M6 28h22"/><path d="M34 18h4"/><circle cx="20" cy="18" r="2"/></svg>',
 dev:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M10 10h20v20H10Z"/><path d="M15 4v6M25 4v6M15 30v6M25 30v6M4 15h6M4 25h6M30 15h6M30 25h6"/><path d="M16 16h8v8h-8Z"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Medizintechnik · <span class="nw">Düsseldorf, seit 1988</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="nw">Pulsoxymetrie,</span> <span class="nw">entwickelt und gefertigt</span> <em class="nw">in Düsseldorf.</em></h1>'+
    '<p class="s" data-r>Bitmos entwickelt und fertigt Medizinprodukte mit eigener Produktion: den Monitor <span class="nw">sat 805,</span> das Handpulsoxymeter <span class="nw">sat 801+</span> und die Elektronik dahinter, von der Idee bis zur CE-Zertifizierung.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Produkte '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt</a></div>'+
   '</div>'+
   '<ul class="pil" aria-label="Was wir machen">'+
    '<li class="p1" data-r><span class="pic">'+ICO.puls+'</span><div><span class="lab">Pulsoxymetrie</span><p>sat 805 und sat 801+, beide mit Masimo SET und Plethysmogramm.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.sens+'</span><div><span class="lab">Sensoren</span><p>Masimo-Sensoren für Erwachsene, Kinder und Neugeborene.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.dev+'</span><div><span class="lab">Entwicklung</span><p>Hard- und Software für elektronische Medizinprodukte.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>Über Bitmos</span>'+
   '<h2 class="txt" id="mani">Hervorgegangen aus Absolventen der Heinrich-Heine-Universität, entwickeln wir seit 1988 hochwertige Medizinprodukte, <em>mit klaren Bedienkonzepten, <span class="nw">in eigener Produktion.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1988</span><p class="k">Gegründet in Düsseldorf, mit Lösungen von der Neugeborenenüberwachung bis zur Schlafapnoetherapie</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2000</span><p class="k">Seit diesem Jahr entwickelt unser Design-Team pulsoxymetrische Lösungen rund um Masimo SET</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">400<small>m²</small></span><p class="k">Entwicklung und Fertigung unter einem Dach, an der Himmelgeister Straße</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technologie</span><h2 class="d3"><span class="nw">Licht, Puls,</span> <em class="nw">Alarm.</em></h2>'+
    '<p class="st-in">Wie das sat 805 die Sauerstoffsättigung misst und meldet.</p>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Licht</span><span>Puls</span><span>Alarm</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Das Licht.</h2><p>Ein Masimo-SET-Sensor am Finger durchleuchtet das Gewebe mit rotem und infrarotem Licht. Ein Detektor auf der Gegenseite misst, wie viel davon ankommt.</p></article>'+
     '<article class="step"><h2>Der Puls.</h2><p>Mit jedem Herzschlag ändert sich die Absorption. Das sat 805 berechnet daraus Sauerstoffsättigung und Pulsfrequenz und zeigt das Plethysmogramm, auch bei Bewegung und schwacher Durchblutung.</p></article>'+
     '<article class="step"><h2>Der Alarm.</h2><p>Für schnelle Reaktionszeiten erzeugt das sat 805 Alarme am Gerät und über den Fernalarm am Schwesternruf. Die analoge Schnittstelle bindet es in jeden Polysomnographie-Arbeitsplatz ein.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="produkte" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Produkte</span><h2 class="d2 split"><span class="nw">Pulsoxymeter</span> <em class="nw">und Sensoren.</em></h2></div><p data-r>Bitmos-Produkte zeichnen sich durch klar strukturierte Bedienkonzepte, innovative Details, modernes Design und hohe Wirtschaftlichkeit aus.</p></div>'+
   '<div class="dcols"><div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Pulsoxymetrie</span><span class="lab dn" data-r>02</span></div>'+prods(["Puls"])+'</div>'+
   '<div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Masimo-Sensoren</span><span class="lab dn" data-r>03</span></div>'+prods(["Sens"])+'</div></div>'+
   '<div class="dmesh-h"><div><span class="lab kick" data-r>Entwicklung als Leistung</span><h3 data-r><span class="nw">Von der Idee</span> <span class="nw">bis zur CE</span></h3></div><p data-r>Neben eigenen Produkten bietet das Bitmos-Team den kompletten Service einer Medizinprodukte-Entwicklung.</p></div>'+
   caps()+
   apps()+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Tradition seit</span> <em class="nw">mehr als 35 Jahren.</em></h2></div><p data-r>Durch interdisziplinäre Teambildung ist eine konstruktive Arbeitsatmosphäre entstanden, in der innovative Lösungen Raum bekommen.</p></div>'+
   '<div class="dmf-g"><div class="dmf-r">'+sites()+'</div>'+
   '<div class="dce-w"><span class="lab kick" data-r>Verpflichtung zur Qualität</span>'+certs()+
   '<p class="dmask" data-r>Unsere Produkte werden ständig auf ihr Optimierungspotenzial hin untersucht und den regulatorischen Anforderungen angepasst.</p></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="aktuelles" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Neues</span> <em class="nw">aus Düsseldorf.</em></h2></div><p data-r>Messen, Produkte und Service, aus unserem Newsbereich und dem Ausstellerverzeichnis der MEDICA.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec cta" id="kontakt" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Kliniken, Schlaflabore, HomeCare und Fachhandel</span>'+
   '<h2 class="big split"><span class="nw">Haben Sie Fragen?</span> <em><span class="nw">Sprechen Sie</span> <span class="nw">uns an.</span></em></h2>'+
   '<p class="sub" data-r>Zu unseren Pulsoxymetern, zu Sensoren und Zubehör oder zu einer Entwicklung: Wir stehen Ihnen gerne zur Verfügung.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Schreiben Sie uns '+ARR+'</a><a class="btn" href="'+TELH+'">Anrufen</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r><span>Bitmos GmbH</span><br><span>Himmelgeister Str. 37</span><br><span>40225 Düsseldorf</span></p></div>'+
    '<div><span class="lab" data-r>E-Mail</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telefon</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>Bitmos GmbH<br>Himmelgeister Str. 37<br>40225 Düsseldorf</div>'+
   '<div class="c"><span class="lab">Produkte</span>sat 805<br>sat 801+<br>Masimo-Sensoren</div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/technologie">Technologie</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></div>'+
  '</div>__LMARK3__'+
  '<div class="legal"><span class="lab">© 2026 Bitmos GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/products, #/technology, #/company or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={};/* typed or linked hashes scroll to their section; nav clicks open the build-out pages (buildout.js) */
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",produkte:"produkte",technologie:"story",unternehmen:"unternehmen",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Bitmos — Medizintechnik aus Düsseldorf, Pulsoxymetrie seit 2000",x:"Start"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec&&BOK[r.sec]){try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/";boOpen(r.sec);return}
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}if(BOK[r.sec]&&boOpen(r.sec))return;secGo(r.sec,true)},300)})()})();
