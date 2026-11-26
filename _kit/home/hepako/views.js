/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function inds(){return '<ul class="pfr pipe np">'+IND.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr dazu '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the elastomers on one temperature scale, -80 to 320 °C (hepako.de > Materialien) */
function tC(v){return (v<0?"−"+(-v):String(v))}
function mats(){var lo=-80,hi=320,pc=function(v){return ((v-lo)/(hi-lo)*100).toFixed(2)+"%"};
  return '<div class="hpmat">'+MAT.map(function(m){return '<div class="hpm-c"><span class="hpm-k">'+esc(m[0])+'</span><span class="hpm-n">'+esc(m[1])+'</span>'+
    '<span class="hpm-bar" aria-hidden="true"><i style="left:'+pc(m[2])+';width:calc('+pc(m[3])+' - '+pc(m[2])+')"></i><b style="left:'+pc(0)+'"></b></span>'+
    '<span class="hpm-r">'+tC(m[2])+' °C bis '+tC(m[3])+' °C</span></div>'}).join("")+'</div>'+
    '<p class="hpm-note" data-r>Dazu Flüssigsilikon (LSR) und Fluor-Flüssigsilikon (F-LSR), alle gängigen Werkstoffe als HTV und LSR, und Spezialmischungen nach Bedarf. Temperaturbeständigkeit laut Werkstoffübersicht; die Skala reicht von −80 °C bis 320 °C, die feine Marke zeigt 0 °C.</p>'}
/* what we do (hepako.de > Leistungen), each with a small line icon */
var ICO={
 f:'<svg viewBox="0 0 56 56"><path d="M8 10H48V25H8Z"/><path d="M8 31H48V46H8Z"/><path class="a" d="M20 25V20H36V25M20 31V36H36V31"/><path class="a" d="M4 28H52"/></svg>',
 m:'<svg viewBox="0 0 56 56"><path d="M8 24a14 14 0 1 0 28 0a14 14 0 1 0 -28 0"/><path d="M32 34L48 50"/><path class="a" d="M17 20H27V28H17Z"/><path class="a" d="M21 20V28"/></svg>',
 v:'<svg viewBox="0 0 56 56"><path d="M8 14H48V24H8Z"/><path class="a" d="M8 24H48V36H8Z"/><path d="M8 36H48V42H8Z"/><path d="M14 14V8M28 14V8M42 14V8"/></svg>',
 q:'<svg viewBox="0 0 56 56"><path d="M12 6H38L46 14V50H12Z"/><path d="M38 6V14H46"/><path class="a" d="M20 30L26 36L38 22"/><path d="M20 44H38"/></svg>'};
var SVC=[
 ["f","Compression · Transfer · Injection","Komplexe Formartikel","Technisch anspruchsvolle Formen und sehr enge Toleranzen, mit dem Fertigungsverfahren, das zum Artikel passt, bis hin zum Stanzen."],
 ["m","Bohrungen ab 0,2 mm","Mikroteile","Die Miniaturisierung haben wir früh erkannt: auch bei sehr kleinen Teilen setzen wir komplexeste Formen um, mit Wandstärken von 0,1 mm."],
 ["v","Metall · Keramik · Kunststoff","Verbundteile","Wir verbinden Gummi mit anderen Werkstoffen und eröffnen unseren Kunden so neue Möglichkeiten in vielen Bereichen."],
 ["q","DIN EN ISO 13485","Geprüfte Qualität","Zertifiziert durch die mdc medical device certification GmbH: System-, Prozess- und Produktqualität werden stets geprüft und verbessert."]];
function svc(){return '<div class="caps svc">'+SVC.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Nov. 2026","Hepako auf der COMPAMED 2026 in Düsseldorf, Halle 8a, Stand N35","Blog",HW+"/blog/hepako-auf-der-compamed-2026-in-duesseldorf/"],
 ["Aug. 2026","Wir suchen Verstärkung: Kunden- und Projektbetreuung, Qualitätsmanagement","Blog",HW+"/blog/wir-suchen-verstaerkung-fuer-unser-team/"],
 ["Mai 2026","Hepako auf der EPHJ 2026 in Genf: Mikrospritzguss und Elastomerbauteile","Blog",HW+"/blog/hepako-auf-der-ephj-2026-in-genf/"],
 ["Feb. 2025","Hepako übernimmt die Geschäftstätigkeit der SIRU technology GmbH","Blog",HW+"/blog/hepako-uebernimmt-die-geschaeftstaetigkeit-der-siru-technology-gmbh/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Präzisionsgummiartikel<span class="nomob"> · seit 1976</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l la">Präzision in</span> <span class="l lc">Gummi <em>und Silikon.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>HEPAKO fertigt in Raisting am Ammersee kleine, hochpräzise Formteile aus Gummi und Silikon, gezielt nach den Wünschen der Kunden: für Medizintechnik, Hörgeräte, Pneumatik, Feinwerktechnik und Optik.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/leistungen">Unsere Leistungen '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Über uns</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Keines der Produkte,</span> <span class="nw">die wir herstellen,</span> <span class="nw">ist Standardware.</span> <span class="nw">Seit 1976 fertigen wir</span> <span class="nw">präzise Gummiformteile</span> <span class="nw">nach den Wünschen</span> <span class="nw">unserer Kunden.</span> <em><span class="nw">Kundenspezifisch. Weltweit.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1976</span><p class="k">gegründet von Kurt <b>He</b>gele, Hans-Dieter <b>Pa</b>rtosch und Franz <b>Ko</b>llerbaur, daher der Name</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0,1 mm</span><p class="k">Wandstärke, und Bohrungen mit 0,2 mm Durchmesser, auch bei sehr kleinen Teilen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">ISO 7</span><p class="k">die Reinraumklasse, in der wir besonders kritische Artikel für die Medizintechnik montieren</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">So entsteht ein Formteil</span><h2 class="d3"><span class="nw">Vom Werkstoff</span> <em class="nw">zum Präzisionsteil.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Werkstoff</span><span>Werkzeug</span><span>Formgebung</span><span>Prüfung</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Der passende Werkstoff.</span></h2><p>Von EPDM, NBR und Festsilikon bis zu Hochleistungselastomeren wie FKM, FFKM oder Fluorsilikon, als HTV oder Flüssigsilikon (LSR). Wir beraten bei der Auswahl und stellen auch Spezialmischungen her.</p></article>'+
     '<article class="step"><h2><span class="nw">Das eigene Werkzeug.</span></h2><p>Die Formen, die jeder Artikel braucht, entwerfen und fertigen wir gemeinsam mit unserem Werkzeugbau, Artikel für Artikel.</p></article>'+
     '<article class="step"><h2><span class="nw">Präzise geformt.</span></h2><p>Compression, Transfer oder Injection Molding: das Verfahren wird auf die Erfordernisse jedes Artikels abgestimmt, bis hin zum Mikrospritzguss.</p></article>'+
     '<article class="step"><h2><span class="nw">Bis auf 0,1 mm.</span></h2><p>Bohrungen mit 0,2 mm Durchmesser, Wandstärken von 0,1 mm. Besonders kritische Artikel montieren wir im Reinraum der ISO-Klasse 7, unter einem QM-System nach DIN EN ISO 13485.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="leistungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leistungen</span><h2 class="d2 split"><span class="nw">Ihr Partner für</span> <em class="nw">präzise Gummiteile.</em></h2></div><p data-r>Für viele Firmen weltweit sind wir der erste Partner, wenn es um präzise Gummiartikel geht. Jeder Artikel entsteht gezielt nach den Anforderungen des Kunden; unser Fokus liegt auf drei Bereichen.</p></div>'+
   svc()+
  '</div></section>'+

  '<section class="sec dark2" id="einsatzbereiche" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Einsatzbereiche</span><h2 class="d2 split"><span class="nw">Überall, wo</span> <em class="nw">Gummiteile zählen.</em></h2></div><p data-r>Unser Fokus liegt auf kleinen, hochpräzisen Gummiformteilen. Eingesetzt werden sie überall dort, wo Gummiteile gebraucht werden; die wichtigsten Anwendungsgebiete sind diese sechs.</p></div>'+
   inds()+
  '</div></section>'+

  '<section class="sec light" id="unternehmen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Ein Unternehmen</span> <em class="nw">am Ammersee.</em></h2></div><p data-r>Gegründet 1976 in einer Garage in Pöcking am Starnberger See, seit 1997 mit eigenen Produktions- und Büroräumen in Raisting, dazu eine Niederlassung in Klatovy, Tschechien.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>1982</span><h3 data-r>Erste Gummiteile</h3><p data-r>Ein Auftrag für Silikonschnuller startet die Fertigung von Gummiteilen; bald konzentriert sich Hepako ganz auf diesen Bereich.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>1984</span><h3 data-r>Bayerischer Staatspreis</h3><p data-r>Auf der Handwerksmesse in München, für die Fertigung von Präzisions-Silikonbälgen.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>2020 · 2024</span><h3 data-r>Mehr Raum</h3><p data-r>Der Standort Raisting wächst auf nahezu die doppelte Fläche, 2024 zieht Hepako CZ in neue Räume.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>2025</span><h3 data-r>SIRU technology</h3><p data-r>Hepako übernimmt die Geschäftstätigkeit der SIRU technology GmbH und baut die Medizintechnik weiter aus.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="materialien" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Materialien</span><h2 class="d2 split"><span class="nw">Der Werkstoff</span> <em class="nw">für jede Anwendung.</em></h2></div><p data-r>Jede Anwendung stellt eigene Aufgaben an das Formteil: Temperatur, chemische Beständigkeit, Mechanik. Ein Auszug aus dem Spektrum unserer Elastomere, mit ihrer Temperaturbeständigkeit.</p></div>'+
   mats()+
  '</div></section>'+

  '<section class="sec dark2" id="aktuelles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split"><span class="nw">Neues</span> <em class="nw">aus Raisting.</em></h2></div><p data-r>Messen, Stellen und Neuigkeiten: wo Sie uns persönlich treffen, und wie Hepako wächst.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Sprechen Sie</span> <em class="nw">mit uns.</em></h2>'+
   '<p class="sub" data-r>Sie haben Fragen oder eine Anwendung im Blick? Rufen Sie uns an oder schreiben Sie uns eine E-Mail; wir freuen uns auf Ihre Anfrage.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>HEPAKO GmbH<br>Gewerbegebiet 7<br>82399 Raisting</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Telefax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Geschäftsführer</span><p data-r>Dr. Christoph Partosch<br>Amtsgericht München<br>HRB 51004</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>HEPAKO GmbH<br>Gewerbegebiet 7, 82399 Raisting</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/leistungen">Leistungen</a><br><a class="ul" href="#/einsatzbereiche">Einsatzbereiche</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/materialien">Materialien</a></div>'+
   '<div class="c"><span class="lab">Zertifiziert</span>DIN EN ISO 13485<br>Zugelassener Wirtschaftsbeteiligter (AEO)</div>'+
  '</div><svg class="bigsvg" viewBox="0 -24 1000 238" aria-hidden="true"><text class="bmx" x="500" y="180" text-anchor="middle" textLength="990" lengthAdjust="spacingAndGlyphs">HEPAKO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 HEPAKO GmbH</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",leistungen:"leistungen",einsatzbereiche:"einsatzbereiche",unternehmen:"unternehmen",materialien:"materialien",aktuelles:"aktuelles",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"HEPAKO GmbH — Präzisionsgummiartikel aus Raisting, seit 1976",x:"Start"};
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
