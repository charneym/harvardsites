/* ================= VIEWS (nur Startseite; Navigationspunkte öffnen Build-out-Seiten über das Kit-Modul buildout, CTAs scrollen) ================= */
function prod(){return '<ul class="pfr mip">'+PROD.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function blog(){return '<ul class="nws">'+BLOG.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Lesen '+ARR+'</span></a></li>'}).join("")+'</ul>'}
/* Anforderungen an ein gutes Portsystem (pakumed.de > Über Titanports), belegt mit den Produktseiten */
function caps(){var C=[
  ["01","Leichte Implantation","Komplettsets für die Seldinger-Technik bringen Trokar und Einführbesteck mit. Der Eingriff erfolgt in der Regel in Lokalanästhesie.",'<path d="M10 46L40 16"/><path class="a" d="M40 16l6-6M34 12l10 10"/><path d="M8 48l6-2-4-4z"/>'],
  ["02","Stabile Konnektion","Eine Dreh-Schraubverbindung hält Portkammer und Katheter sicher zusammen und bleibt trotzdem de-konnektierbar.",'<rect x="8" y="22" width="20" height="12"/><path class="a" d="M28 24h6v8h-6M30 24v8M32 24v8"/><path d="M34 28h16"/>'],
  ["03","Hoher Durchfluss","Beim TITAN-PORT D verhindert die Fischmaulspitze die Anlagerung an die Gefäßwand: So werden hohe Durchflussraten erreicht.",'<path d="M6 22h34M6 34h34"/><path class="a" d="M12 28h30M36 23l6 5-6 5"/><path d="M40 22l10 6-10 6"/>'],
  ["04","Fester Sitz, gute Verträglichkeit","Die Silikonmembran hält die Portkanüle verlässlich in Position. Die Katheter sind frei von Latex, PVC und DEHP.",'<path d="M10 40h36M14 40V30h28v10"/><path class="a" d="M28 8v28"/><path d="M22 14h12"/>'],
  ["05","Sicher zu finden","Nahtlöcher fixieren die Kammer an der Muskelfaszie. Anwender berichten von kaum Dislokationen dank der stabilen Titankapsel.",'<circle cx="28" cy="28" r="16"/><circle class="a" cx="28" cy="28" r="6"/><path d="M28 6v8M28 42v8M6 28h8M42 28h8"/>'],
  ["06","Hochdruckinjektion","Die Standard-Ports M und L sind für Kontrastmittel bis 5,2 ml/s bei max. 300 psi (21 bar) geeignet.",'<path d="M8 44A22 22 0 0 1 48 44"/><path class="a" d="M28 44L40 22"/><circle cx="28" cy="44" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Portkathetersysteme<span class="nomob"> · Essen</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Ports aus Reintitan,</span><span class="l"><em>mit dem Leben vernetzt.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>PakuMed entwickelt und fertigt vollständig implantierbare TITAN-Port-Kathetersysteme für den langfristigen Gefäßzugang, dazu die stanzfreien SFN®-Portkanülen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/produkte">Unsere Produkte '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick">Über uns</span>'+
   '<h2 class="txt" id="mani">PakuMed wurde von Medizinern ins Leben gerufen. <span class="nw">Unsere Produkte</span> sind Antworten: <em><span class="nw">Ideen, die eigentlich</span> <span class="nw">selbstverständlich sein sollten.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3.000</span><p class="k">Punktionen hält die selbstschließende Silikonmembran der Standard-Ports aus</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 Tesla</span><p class="k">MR-bedingt sicher: TITAN-Port-Kathetersysteme bis 3 Tesla</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">13 g</span><p class="k">wiegt der TITAN-PORT Standard M, der Armport UA nur 5,5 g</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technologie</span><h2 class="d3"><span class="nw">Gebaut für</span> <em class="nw">lange Liegezeiten.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Gehäuse</span><span>Membran</span><span>Katheter</span><span>Kanüle</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Eine Kammer aus Reintitan.</h2><p>Reintitan ist das implantationsverträglichste Material: hypoallergen, hoch bioverträglich und ohne chemische Reaktion mit Injektionslösungen. Nahtlöcher fixieren die Kammer an der Muskelfaszie.</p></article>'+
     '<article class="step"><h2>Bis zu 3.000 Punktionen.</h2><p>Die Membran aus selbstschließendem Spezialsilikon ist druckstabil, hält die Portkanüle verlässlich in Position und verträgt bis zu 3.000 Punktionen.</p></article>'+
     '<article class="step"><h2>Fest verschraubt.</h2><p>Eine Dreh-Schraubverbindung verbindet Kammer und Katheter. Der Katheter aus Polyurethan oder Silikon ist knickstabil, röntgendicht und trägt eine Längenskalierung.</p></article>'+
     '<article class="step"><h2>Stanzfrei punktiert.</h2><p>Der Spezialschliff der SFN®-Portkanülen stanzt keinen Stichkanal in die Membran. Das reduziert das Infektionsrisiko und verlängert die Lebensdauer des Systems.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="produkte" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Produkte</span><h2 class="d2 split"><span class="nw">Für jeden Einsatz</span> <em class="nw">den richtigen Port.</em></h2></div><p>Chemotherapie, Schmerztherapie, parenterale Ernährung, Dialyse oder Apherese: Unsere Portsysteme aus Reintitan gibt es einzeln oder als Komplettset, mit dem passenden Zubehör.</p></div>'+
   prod()+
  '</div></section>'+

  '<section class="sec light" id="anforderungen" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Anforderungen</span><h2 class="d2 split"><span class="nw">Was ein guter Port</span> <em class="nw">leisten muss.</em></h2></div><p>Jedes implantierbare Kathetersystem hat Vor- und Nachteile. Diese Anforderungen entscheiden darüber, ob die Komplikationsrate niedrig bleibt.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">Unternehmen</span><h2 class="d2 split"><span class="nw">Von Essen aus</span> <em class="nw">in alle Welt.</em></h2></div><p>Von Medizinern gegründet, mit dem Patienten im Fokus. Von unserem Stammsitz in Essen aus liefern wir international, verbunden mit Universitäten, Forschungseinrichtungen, Anwendern und Einkäufern.</p></div>'+
   '<div class="uf">'+
    '<div class="uf-p"><span class="lab">Leitung</span>'+
     '<ul class="dirs">'+
      '<li><span class="dn">Michaela Pastoors-Koudaimi</span><span class="dr">Geschäftsleitung, Fachärztin für Allgemeinmedizin</span></li>'+
      '<li><span class="dn">Dr. med. (syr) M. Kamal Koudaimi</span><span class="dr">Viszeralchirurg, Leitung Entwicklung und Sicherheit</span></li>'+
      '<li><span class="dn">Mayada-Joana Koudaimi, M.Sc.</span><span class="dr">Geschäftsleitung, Marketing und Vertrieb</span></li>'+
      '<li><span class="dn">Sami Kotrache, M.Sc.</span><span class="dr">Technische Leitung, Medizintechnik</span></li>'+
     '</ul>'+
     '<blockquote class="uf-q">„Die Ports sind sicher, MRT-tauglich und biologisch gut verträglich. Die Firma PakuMed zeichnet sich durch umfassenden Service und kompromisslose Sicherheit aus.“<cite>Dr. Hadry, Chirurgie und Gefäßzentrum Freudenstadt</cite></blockquote></div>'+
    '<div class="uf-s">'+
     '<div class="site"><span class="lab">Stammsitz</span><p>Im Löwental 79<br>45239 Essen</p></div>'+
     '<div class="site"><span class="lab">Qualität</span><p>Zertifiziert nach ISO 13485 durch TÜV NORD</p></div>'+
     '<div class="site"><span class="lab">Regulatorik</span><p>Umsetzung der Medizinprodukteverordnung (EU) 2017/745</p></div>'+
     '<div class="site"><span class="lab">Verband</span><p>Mitglied bei SPECTARIS</p></div>'+
    '</div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick">News &amp; Events</span><h2 class="d2 split"><span class="nw">Wir sind international</span> <em class="nw">für Sie da.</em></h2></div><p>2026 haben wir unsere Portsysteme auf der World Health Expo in Dubai und zuletzt auf der MEDICA in Düsseldorf gezeigt.</p></div>'+
   '<div class="ev">'+
    '<span class="lab kick">Zuletzt</span>'+
    '<dl>'+
     '<div><dt class="lab">Messe</dt><dd>MEDICA 2026, Düsseldorf</dd></div>'+
     '<div><dt class="lab">Termin</dt><dd>16. bis 19. November 2026</dd></div>'+
     '<div><dt class="lab">Aussteller</dt><dd>PakuMed medical products gmbh, Essen</dd></div>'+
     '<div><dt class="lab">Davor</dt><dd>World Health Expo 2026, Dubai, 9. bis 12. Februar</dd></div>'+
    '</dl>'+
   '</div>'+
   '<span class="lab kick sub-l pr">Weiterlesen</span>'+
   blog()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick">Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Fragen zu</span> <em class="nw">unseren Ports?</em></h2>'+
   '<p class="sub">Sie haben Fragen zu unseren Produkten, Portsystemen oder Bestellungen? Unser Team unterstützt Sie gerne.</p>'+
   '<div class="act"><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Anschrift</span><p>PakuMed medical products gmbh<br>Im Löwental 79<br>45239 Essen, Deutschland</p></div>'+
    '<div><span class="lab">Kontakt</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab">Geschäftszeiten</span><p>Montag bis Freitag<br>8:30 bis 17:00 Uhr</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>PakuMed medical products gmbh<br>Im Löwental 79, 45239 Essen</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Zertifiziert</span>Qualitätsmanagement nach ISO 13485, zertifiziert durch TÜV NORD</div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/produkte">Produkte</a><br><a class="ul" href="#/technologie">Technologie</a><br><a class="ul" href="#/unternehmen">Unternehmen</a><br><a class="ul" href="#/news">News</a></div>'+
  '</div><div class="fwm" aria-hidden="true">'+FLOGO+'</div>'+
  '<div class="legal"><span class="lab">© 2026 PakuMed medical products gmbh</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technologie:"story",produkte:"produkte",anforderungen:"anforderungen",unternehmen:"unternehmen",news:"news",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"PakuMed – TITAN-Port-Kathetersysteme aus Reintitan, Essen",x:"Start"};
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
