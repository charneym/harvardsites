/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function rows(L){return '<ul class="pfr pipe np">'+L.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Więcej '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Galwanika","Pokrywanie galwaniczne","Miedziowanie powierzonych drutów Ø 0,30–2,00 mm oraz pokrywanie Ø 0,30–1,50 mm niklem, cynkiem, srebrem lub stopami, np. mosiądzem.",'<path d="M8 30H48"/><path d="M14 18V44M42 18V44"/><path class="a" d="M8 30H48"/><circle class="f" cx="28" cy="30" r="2.4"/>'],
  ["Ciągnienie","Przeciąganie drutów","Przeciąganie powierzonych drutów stalowych, miedzianych lub ze stopów miedzi w zakresie Ø 0,050–5,500 mm.",'<path d="M6 22H24L34 27H50M6 34H24L34 29H50"/><path class="a" d="M24 22L34 27M24 34L34 29"/><circle class="f" cx="34" cy="28" r="2.4"/>'],
  ["Obróbka cieplna","Żarzenie i odpuszczanie","W piecach wgłębnych, w kręgach i na szpulach, w osłonie gazów ochronnych (azot/wodór), bez atmosfery ochronnej lub według technologii klienta.",'<path d="M12 14H44V44H12Z"/><path class="a" d="M20 36C20 30 26 30 26 24M30 36C30 30 36 30 36 24"/><circle class="f" cx="28" cy="44" r="2.4"/>'],
  ["Przewijanie","Przewijanie na szpule","Przewijanie powierzonych drutów Ø 0,050–2,500 mm oraz precyzyjne przewijanie drutów spawalniczych, np. z beczek, Ø 0,800–1,200 mm.",'<path d="M16 12H40M16 44H40"/><path d="M20 12V44M36 12V44"/><path class="a" d="M20 20H36M20 28H36M20 36H36"/><circle class="f" cx="36" cy="28" r="2.4"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* quality, laboratory and awards (wolco.pl > O firmie, Usługi, Certyfikaty, Aktualności) */
function mats(){var M=[["System zarządzania","PN-EN ISO 9001:2015","Jakość wyrobów i usług"],["System zarządzania","PN-EN ISO 14001:2015","Ochrona środowiska"],["Patent","nr 226273","Ulepszone druty do koletowania"],
  ["Laboratorium","Wytrzymałość","Maszyny wytrzymałościowe Inspect Blue"],["Laboratorium","Rezystancja","Rezystomat Burster"],["Laboratorium","Grubość powłoki","Spektrometr rentgenowski Fischer"]];
  return '<ul class="kmat k3">'+M.map(function(m){return '<li><span class="lab">'+esc(m[0])+'</span><b>'+esc(m[1])+'</b><span class="ai">'+esc(m[2])+'</span></li>'}).join("")+'</ul>'}
/* distribution for Knitwire (UK) since August 2024 (wolco.pl > Oferta) */
function qual(){var Q=[
  ["Odmgławiacze","Demistery siatkowe Knitwire","Wyłączny przedstawiciel na Polskę i kraje sąsiadujące. Demistery osuszają gazy techniczne, odzyskują cenne substancje, chronią instalacje przed korozją i separują ciecze od gazów, w przemyśle petrochemicznym, gazowniczym, chemicznym i farmaceutycznym.",WG+"111"],
  ["DPF","Uszczelki, obejmy i zestawy DPF","Wyłączny dystrybutor w Polsce zestawów montażowych DPF do samochodów ciężarowych firmy Graphfor (Knitwire): zestawy z obejmami i bez, pojedyncze uszczelki i obejmy do pojazdów DAF, MAN, Scania, Volvo/Renault, Ford, Iveco i Mercedes.",WG+"115"]];
  return '<ol class="exps x2">'+Q.map(function(x){return '<li><span class="lab">'+esc(x[0])+'</span><h3>'+esc(x[1])+'</h3><p>'+esc(x[2])+'</p><a class="lab lk ul" href="'+x[3]+'" target="_blank" rel="noopener">Więcej '+ARR+'</a></li>'}).join("")+'</ol>'}
/* news that links out (wolco.pl > Aktualności; wire 2026 exhibitor directory) */
function news(){var N=[
  ["19.11.2025","Certyfikat Złotego Darczyńcy od Fundacji na rzecz Pomocy Dzieciom Grodzieńszczyzny","wolco.pl","https://www.wolco.pl/news/index/show/id/61"],
  ["04.2026","Wystawca na targach wire 2026 w Düsseldorfie","wire-tradefair.com","https://www.wire-tradefair.com/vis/v1/en/exhibitors/wire2026.3034355"],
  ["22.04.2025","Podziękowania od Fundacji na rzecz pomocy dzieciom z Grodzieńszczyzny","wolco.pl","https://www.wolco.pl/news/index/show/id/60"],
  ["2025","Wystawca na targach WireTech 2025, stoisko C3.14a","wiretechpoland.com","https://wiretechpoland.com"]];
  return '<ul class="nws">'+N.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>WOLCO Sp. z o.o.<span class="nomob"> · Druty specjalistyczne</span> · Lublin</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Druty specjalistyczne</span> <span class="l acc">od Ø 0,05 mm.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>WOLCO jest polskim producentem drutów specjalistycznych ze stali, miedzi i mosiądzu, od Ø 0,05 do Ø 4,00 mm. Na życzenie klientów pokrywamy je chemicznie lub elektrolitycznie miedzią, niklem, cynkiem, cyną, mosiądzem lub srebrem.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/oferta">Nasza oferta '+ARR+'</a><a class="btn" href="#/kontakt">Zapytanie ofertowe</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>WOLCO Sp. z o.o. · od 1992 roku</span>'+
   '<h2 class="txt" id="mani"><em>Jedyny w Polsce producent</em> stalowych drutów do koletowania gwoździ i mosiężnych drutów do <span class="nw">elektrodrążenia EDM.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">0,05</span><p class="k">mm: najcieńszy drut w ofercie, a zakres sięga Ø 4,00 mm</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">metali i stopów powłok: Cu, Ni, Zn, Sn, CuZn i Ag</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1984</span><p class="k">rok, od którego tradycję drutów prowadzi poprzedniczka WOLCO, firma Strongweld</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">W zakładzie</span><h2 class="d3"><span class="nw">Od ciągadła</span> <em class="nw">do szpuli.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ciągnienie</span><span>Powlekanie</span><span>Nawijanie</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Drut przeciągany</span> <span class="nw">do średnicy.</span></h2><p>Druty stalowe, miedziane i ze stopów miedzi przeciągamy przez ciągadła do żądanej średnicy, w zakresie Ø 0,050–5,500 mm, także z drutu powierzonego przez klienta.</p></article>'+
     '<article class="step"><h2><span class="nw">Galwaniczna powłoka</span> <span class="nw">z sześciu metali.</span></h2><p>Na liniach galwanicznych drut pokrywamy miedzią, niklem, cynkiem, cyną, mosiądzem lub srebrem. Linię do pokryć galwanicznych docenił dyplomem Minister Nauki i Szkolnictwa Wyższego.</p></article>'+
     '<article class="step"><h2><span class="nw">Nawinięty na szpulę,</span> <span class="nw">gotowy do wysyłki.</span></h2><p>Gotowy drut nawijamy na szpule, m.in. K‑125 do K‑250, HD‑15 i MP‑100. We własnym laboratorium badamy wytrzymałość, rezystancję i grubość powłoki.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="oferta" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Oferta</span><h2 class="d2 split"><span class="nw">Druty ze stali,</span> <em class="nw">miedzi i mosiądzu.</em></h2></div><p data-r>Druty stalowe, opcjonalnie pokrywane innymi metalami, w zakresie Ø 0,05–4,00 mm, dla producentów siatek technicznych, szpilek i gwoździ, oraz druty mosiężne i miedziane Ø 0,15–3,00 mm, m.in. do szczotek technicznych i dla przemysłu elektrycznego. Inne średnice wykonujemy na zamówienie.</p></div>'+
   rows(PRODS)+
  '</div></section>'+

  '<section class="sec light" id="uslugi" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Usługi</span><h2 class="d2 split"><span class="nw">Usługi dla</span> <em class="nw">branży druciarskiej.</em></h2></div><p data-r>Pracujemy także na drucie powierzonym przez klienta. Doświadczony zespół mechaników, elektryków i automatyka wykonuje ponadto przeglądy, naprawy, remonty i modernizacje urządzeń i maszyn.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="jakosc" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Jakość</span><h2 class="d2 split"><span class="nw">Jakość badana</span> <em class="nw">w laboratorium.</em></h2></div><p data-r>Firma zatrudnia specjalistów w dziedzinie produkcji i badania drutów ze stali i metali nieżelaznych. Za innowacyjność otrzymaliśmy m.in. wyróżnienie w Konkursie o Nagrodę Gospodarczą Prezydenta Miasta Lublin 2012, a w 2020 roku Nagrodę Burmistrza Miasta Lubartowa.</p></div>'+
   mats()+
  '</div></section>'+

  '<section class="sec light" id="partner" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Dystrybucja</span><h2 class="d2 split"><span class="nw">Partner firmy</span> <em class="nw">Knitwire w Polsce.</em></h2></div><p data-r>Od sierpnia 2024 roku współpracujemy z brytyjską firmą Knitwire, która od ponad 40 lat produkuje wyroby z siatki drucianej. Demistery oferujemy w wymiarach standardowych i według planów klienta.</p></div>'+
   qual()+
  '</div></section>'+

  '<section class="sec dark2" id="aktualnosci" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktualności</span><h2 class="d2 split"><span class="nw">Na targach</span> <em class="nw">i w regionie.</em></h2></div><p data-r>WOLCO wystawia się na międzynarodowych targach branży drutów i kabli i od lat wspiera Fundację na rzecz Pomocy Dzieciom Grodzieńszczyzny.</p></div>'+
   news()+
   '<div class="ppl"><span class="lab kick" data-r>Zespół</span>'+team()+'</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Jakiego drutu</span> <em class="nw">Państwo potrzebują?</em></h2>'+
   '<p class="sub" data-r>Prosimy podać materiał, średnicę, powłokę, wytrzymałość i rodzaj szpuli. Dział Sprzedaży przygotuje ofertę, także na średnice i usługi niestandardowe.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Napisz do nas '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Zadzwoń '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Siedziba</span><p data-r>WOLCO Sp. z o.o.<br>ul. Związkowa 23<br>20-148 Lublin</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Tel. <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Faks +48 81 747 72 02</p></div>'+
    '<div><span class="lab" data-r>Sprzedaż</span><p data-r><a class="ul" href="mailto:'+MAILS+'">'+MAILS+'</a><br>Tel. <a class="ul" href="tel:+48606373533">+48 606 373 533</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Siedziba</span>WOLCO Sp. z o.o., ul. Związkowa 23<br>20-148 Lublin, Polska</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Strona</span><a class="ul" href="#/oferta">Oferta</a><br><a class="ul" href="#/uslugi">Usługi</a><br><a class="ul" href="#/jakosc">Jakość</a><br><a class="ul" href="#/aktualnosci">Aktualności</a></div>'+
   '<div class="c"><span class="lab">Rejestr</span>KRS 0000193786 · NIP 712-015-57-66<br>REGON 430062896</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',Arial,sans-serif;font-weight:700;font-size:70px;letter-spacing:.34em">WOLCO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 WOLCO Sp. z o.o.</span><span class="lab">Koncepcja strony</span><a class="lab ul" href="#main" id="toTop">Do góry ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",oferta:"oferta",uslugi:"uslugi",jakosc:"jakosc",partner:"partner",aktualnosci:"aktualnosci",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"WOLCO — Polski producent cienkich drutów specjalistycznych",x:"Start"};
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
