/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function rows(L){return '<ul class="pfr pipe np">'+L.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Více '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Obruče","Hliník i leštěná nerez","Obruče 20″ a 22″ ve stříbrném a černém eloxu, v přírodním hliníku nebo z leštěné nerezi, se čtyřmi nebo šesti úchyty; také ergonomické s povrchem PVC soft.",'<circle cx="28" cy="28" r="19"/><circle class="a" cx="28" cy="28" r="14"/><circle class="f" cx="28" cy="14" r="2.2"/><circle class="f" cx="28" cy="42" r="2.2"/>'],
  ["Ráfky a náboje","Od ráfku po rychločep","Ráfky, náboje, osy a rychločepy, adaptéry a ložiska: díly, ze kterých se kolo skládá, k dodání i samostatně.",'<circle cx="28" cy="28" r="19"/><circle class="a" cx="28" cy="28" r="5"/><path d="M28 9V23M28 33V47M9 28H23M33 28H47"/>'],
  ["Přední kolečka","PUE, 100 až 200 mm","Přední kolečka s polyuretanovou obručí v šedé a černé, od 100 × 30 po 200 × 50 mm; také jako set s vidlicí a domečkem.",'<circle class="a" cx="28" cy="36" r="11"/><circle class="f" cx="28" cy="36" r="2.4"/><path d="M28 25V10M20 10H36"/>'],
  ["Chrániče paprsků","Transparentní, černé, Sport","Chrániče paprsků pro kola 20″ až 26″: transparentní, černé, s šipkou nebo s českou vlajkou, a řada Sport.",'<circle cx="28" cy="28" r="19"/><circle class="a" cx="28" cy="28" r="12"/><path d="M16 28H40"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>REHA program<span class="nomob"> · Dolní Štěpanice u Jilemnice</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Kola k vozíkům,</span> <span class="l">od ráfku</span> <span class="l acc">po obruč.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>DELFI REHAB vyrábí v Dolních Štěpanicích u Jilemnice kompletní kola k invalidním vozíkům a jejich komponenty: ráfky, obruče, náboje, osy a chrániče paprsků, pro zákazníky v Česku, v Evropě i za jejími hranicemi.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/kola">Kompletní kola '+ARR+'</a><a class="btn" href="#/kontakt">Poptávka</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>DELFI REHAB spol. s r.o.</span>'+
   '<h2 class="txt" id="mani">Začínali jsme cyklistickými ráfky. <em>Dnes vyplétáme celá kola pro vozíky.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1990</span><p class="k">Počátky firmy DELFI, zpočátku výroba cyklistických ráfků</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2011</span><p class="k">Vznik DELFI REHAB, kovovýroby komponentů pro zdravotechniku</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~40</span><p class="k">Zaměstnanců v Dolních Štěpanicích u Jilemnice</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Výroba</span><h2 class="d3"><span class="nw">Jak vzniká</span> <em class="nw">kolo k vozíku.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ráfek</span><span>Vypletení</span><span>Obruč</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Ráfek a náboj.</h2><p>Kovovýroba v Dolních Štěpanicích vyrábí cyklistické ráfky od samých začátků firmy. Kolo k vozíku začíná stejně: ráfkem a nábojem.</p></article>'+
     '<article class="step"><h2>Vypletení.</h2><p>Paprsky spojí náboj s ráfkem a vznikne kompletní vypletené kolo, s osou 12 nebo 15 mm podle vozíku.</p></article>'+
     '<article class="step"><h2>Obruč a plášť.</h2><p>Na úchyty se připevní obruč z hliníku nebo nerezi a kolo se obuje do foukaného nebo polyuretanového pláště, na přání s chráničem paprsků.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="wheels" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Kompletní kola</span><h2 class="d2 split"><span class="nw">Vypletená kola</span> <em class="nw">od 18″ do 24″.</em></h2></div><p data-r>Standardní, lehká, dětská i kola heavy duty, v rozměrech od 18″ do 24″, s osou 12 nebo 15 mm. Na přání je obujeme do foukaného nebo polyuretanového pláště.</p></div>'+
   rows(WHEELS)+
  '</div></section>'+

  '<section class="sec light" id="parts" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Komponenty</span><h2 class="d2 split"><span class="nw">Každý díl kola,</span> <em class="nw">i samostatně.</em></h2></div><p data-r>REHA program zahrnuje vedle kompletních kol obruče, ráfky, náboje, osy a rychločepy, adaptéry, ložiska, pláště a duše, přední kolečka a chrániče paprsků, a také vozíky a chodítka.</p></div>'+
   caps()+
   '<div class="act shop" data-r><a class="btn solid" href="'+DS+'" target="_blank" rel="noopener">Celý sortiment v e-shopu '+ARR+'</a><a class="btn" href="https://online.fliphtml5.com/mmbbl/jeaf/" target="_blank" rel="noopener">Katalog</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>O společnosti</span><h2 class="d2 split"><span class="nw">Česká kovovýroba</span> <em class="nw">pro zdravotechniku.</em></h2></div><p data-r>DELFI REHAB vznikla v roce 2011 rozdělením společnosti DELFI spol. s r.o. Provozovna v Dolních Štěpanicích se věnuje kovovýrobě komponentů pro zdravotechniku, především kompletních kol k invalidním vozíkům.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Obchodní zástupci</span><p class="cr ag" data-r>'+REPS.map(function(a){return '<span>'+esc(a)+'</span>'}).join("")+'</p></div>'+
   '<div class="bk"><span class="lab kick" data-r>Další výroba</span><p class="cr" data-r><span>Cyklistické ráfky a velovložky</span><span>Žaluzie a montáž interiérů</span><span>Sněhové lopaty SNOW-PERMON</span><span>Rozpěrné tyče</span></p></div>'+
   '<div class="bk"><span class="lab kick" data-r>Veletrh</span><p class="cr" data-r><span>REHACARE 2026</span><span>Düsseldorf, září 2026</span><a class="ul" href="https://www.rehacare.com/vis/v1/en/exhibitors/rehacare2026.3073998" target="_blank" rel="noopener">V katalogu vystavovatelů</a></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Pošlete nám</span> <em class="nw">svou poptávku.</em></h2>'+
   '<p class="sub" data-r>Kola, obruče a náhradní díly: obchodní oddělení v Dolních Štěpanicích je vám k dispozici v pracovní dny od 6:00 do 14:30.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Napsat e-mail '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Volat '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adresa</span><p data-r>DELFI REHAB spol. s r.o.<br>Dolní Štěpanice 104<br>514 01 Jilemnice</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Tel. <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Firma</span><p data-r>IČO 28741064<br>DIČ CZ28741064<br>Po–Pá 6:00–11:45, 12:15–14:30</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adresa</span>DELFI REHAB spol. s r.o.<br>Dolní Štěpanice 104, 514 01 Jilemnice</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Web</span><a class="ul" href="#/kola">Kola</a><br><a class="ul" href="#/komponenty">Komponenty</a><br><a class="ul" href="#/vyroba">Výroba</a><br><a class="ul" href="#/firma">Firma</a></div>'+
   '<div class="c"><span class="lab">REHA program</span>Kompletní kola a komponenty k invalidním vozíkům, vyrobené v České republice</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:600;font-size:64px;letter-spacing:.16em">DELFI REHAB</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 DELFI REHAB spol. s r.o.</span><span class="lab">Koncept webu</span><a class="lab ul" href="#main" id="toTop">Nahoru ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",vyroba:"story",kola:"wheels",komponenty:"parts",firma:"company",kontakt:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"DELFI REHAB — kola a komponenty pro invalidní vozíky, Dolní Štěpanice u Jilemnice",x:"Úvod"};
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
