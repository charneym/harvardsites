/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk av">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function projRows(){return '<ul class="pfr proj">'+PROJ.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[3])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[2])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk av"><a class="ul" href="'+c[5]+'" target="_blank" rel="noopener">Lees meer '+ARR+'</a></span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+
   '<div class="mh-group"><p class="mh-label">En verder</p><p class="mh-more">'+TEAM2.map(esc).join('<i> · </i>')+'</p></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["CO₂-opslag","Planten gebruiken CO₂ om organisch materiaal te produceren. Ze slaan dus CO₂ op terwijl wij stroom maken.",'<path d="M8 40h40"/><path d="M28 40V18"/><path d="M28 26c-8 0-12-6-12-12 8 0 12 6 12 12z"/><path class="a" d="M28 22c8 0 12-6 12-12-8 0-12 6-12 12z"/><path d="M22 40l-6 10M34 40l6 10M28 40v12"/>'],
  ["50% minder methaan","Stroom opwekken met de Plant-e-technologie leidt tot 50% minder methaanvorming in de bodem; methaan is als broeikasgas 25 keer krachtiger dan CO₂.",'<path d="M8 22h40"/><circle cx="18" cy="34" r="4"/><circle cx="34" cy="38" r="4"/><circle class="f" cx="26" cy="46" r="2.4"/><path class="a" d="M12 12l32 32"/>'],
  ["50 tot 100 jaar","De materialen in het Plant-e-systeem zijn volledig inert: ze breken niet af en lossen niet op in de bodem.",'<rect x="20" y="8" width="16" height="40"/><path d="M20 16l16 8M20 26l16 8M20 36l16 8"/><path class="a" d="M10 48h36"/>'],
  ["Productie 24/7","Continue energieproductie, dag en nacht, minimaliseert de behoefte aan energieopslag zoals een batterij.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 16v12l8 6"/><circle class="f" cx="28" cy="28" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Specificaties</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Van plant-e.com. De volledige specificaties staan in de brochures per SensorStick.</p></div></div>'}
function partners(){return '<div class="bk"><span class="lab kick" data-r>Onze partners</span><p class="cr" data-r>'+PARTNERS.map(esc).join('<i>·</i>')+'</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>SensorSticks op basis van plantenstroom</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Elektriciteit</span><span class="l">die de natuur</span><span class="l"><em>ons geeft.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Plant-e maakt autonome sensoren voor natuur, land- en tuinbouw. De SensorStick wekt zijn stroom op uit plantenwortels en bodemmicro-organismen, en meet en verzendt dag en nacht, zonder batterijen te vervangen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">Hoe het werkt '+ARR+'</a><a class="btn" href="#/sensorsticks">De SensorSticks</a></div></div>'+
   '<span class="lab hcap" data-r>SensorStick in het Cairngorms National Park, Schotland</span>'+
  '</section>'+

  '<section class="sec mani dark" id="over" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Onze missie · Écht groene elektriciteit</span>'+
   '<h2 class="txt" id="mani">Wij maken elektriciteit met levende planten voor verlichting en sensoren, om bij te dragen aan een duurzamere én groenere wereld: <em>overal waar planten kunnen groeien en water beschikbaar is.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;50 jr</span><p class="k">Levensduur van een SensorStick, met een stroombron die nooit leeg is</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24/7</span><p class="k">Stroom, dag en nacht, uit de natuurlijke processen rond de plantenwortels</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2009</span><p class="k">Sinds dit jaar ontwikkelt Plant-e stroom uit levende planten, op octrooien van Wageningen University &amp; Research</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Hoe het werkt</span><h2 class="d3">Stroom uit de <em>wortelzone.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fotosynthese</span><span>Wortelzone</span><span>Stroom</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>De plant vangt licht.</h2><p>Via fotosynthese produceert een plant organisch materiaal. Een deel gebruikt ze voor haar eigen groei; een ander deel blijft ongebruikt.</p></article>'+
     '<article class="step"><h2>Bacteriën breken het af.</h2><p>Dat deel scheiden de wortels uit in de grond. Bacteriën rond de wortels breken het af, en daarbij komen elektronen vrij.</p></article>'+
     '<article class="step"><h2>De SensorStick meet en zendt.</h2><p>Plant-e vangt die elektronen op als elektriciteit en geeft ze daarna terug aan de grond. Daarmee meet de SensorStick continu en verzendt hij zijn data, via LoRa of satelliet.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technologie" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technologie</span><h2 class="d2 split">Elektriciteit die de <em>natuur ons geeft.</em></h2></div><p data-r>Plant-e ontwikkelt producten waarin levende planten elektriciteit genereren. De technologie, oorspronkelijk ontdekt aan Wageningen University, produceert continu, dag en nacht, gedurende vele tientallen jaren stroom voor lage-vermogen toepassingen zoals sensoren en verlichting.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="sensorsticks" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>SensorSticks</span><h2 class="d2 split">Meten zonder <em>batterijen te vervangen.</em></h2></div><p data-r>Een SensorStick combineert een stroombron op basis van levende planten, nauwkeurige sensoren en datatransmissie in één compact systeem, voor natuur, land- en tuinbouw, ook op de meest afgelegen locaties.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="projecten" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Projecten</span><h2 class="d2 split">In het veld, <em>van Renkum tot de Cairngorms.</em></h2></div><p data-r>SensorSticks meten grondwaterstand in herstellende hoogvenen in Schotland, Engeland en Ierland, en waterkwaliteit rond Nederlandse kassen, met natuurbeheerders, waterschappen en tuinders.</p></div>'+
   projRows()+
   partners()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Van biologie <em>tot elektronica.</em></h2></div><p data-r>Een dynamisch bedrijf met een passie voor duurzaamheid en innovatie, met ruim tien jaar ervaring in het ontwikkelen en tegelijk vermarkten van de technologie. Die omvat diverse expertises, en die zitten allemaal in het team.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="nieuws" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Nieuws</span><h2 class="d2 split">Het laatste van <em>Plant-e.</em></h2></div><p data-r>Projecten, installaties en mijlpalen, van de glastuinbouw in Nederland tot de hoogvenen van het Verenigd Koninkrijk en Ierland.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Samenwerken?</span>'+
   '<h2 class="big split">Praat met <em>Plant-e.</em></h2>'+
   '<p class="sub" data-r>We bespreken projecten in nauw overleg met de opdrachtgever, en kijken graag wat we voor je kunnen betekenen: voor een eerste informatief gesprek, een offerte of meer informatie over de SensorSticks.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Mail Plant-e '+ARR+'</a><a class="btn" href="#/sensorsticks">Bekijk de SensorSticks</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Adres</span><p data-r>Plant-e B.V.<br>Beukenlaan 52<br>6871 CL Renkum</p></div>'+
    '<div><span class="lab" data-r>Algemeen</span><p data-r><a class="ul" href="'+MAIL+'">office@plant-e.com</a></p></div>'+
    '<div><span class="lab" data-r>Projecten en verkoop</span><p data-r><a class="ul" href="'+SALES+'">sales@plant-e.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Adres</span>Beukenlaan 52<br>6871 CL Renkum</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">office@plant-e.com</a><br><a class="ul" href="'+SALES+'">sales@plant-e.com</a></div>'+
   '<div class="c"><span class="lab">Ontdek</span><a class="ul" href="#/technologie">Technologie</a><br><a class="ul" href="#/sensorsticks">SensorSticks</a><br><a class="ul" href="#/projecten">Projecten</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/nieuws">Nieuws</a></div>'+
   '<div class="c"><span class="lab">SensorSticks</span>Waterstand · Bodemvocht · Waterkwaliteit</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Ubuntu\',sans-serif;font-weight:500;font-size:76px">Plant-e</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Plant-e B.V.</span><span class="lab">Conceptwebsite</span><a class="lab ul" href="#main" id="toTop">Terug naar boven ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={over:"over",story:"story",technologie:"technologie",sensorsticks:"sensorsticks",projecten:"projecten",team:"team",nieuws:"nieuws",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Plant-e — autonome sensoren op basis van plantenstroom",x:"Home"};
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
