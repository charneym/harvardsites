/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function rows(L){return '<ul class="pfr pipe np">'+L.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Mehr '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Tempo","Ab einem Arbeitstag","Produktion ab einem Arbeitstag. Bei HDI und Starrflex richtet sich die Lieferzeit nach Absprache.",'<circle cx="28" cy="30" r="18"/><path d="M24 8H32"/><path class="a" d="M28 30V18"/><circle class="f" cx="28" cy="30" r="2.4"/>'],
  ["Serienqualität","Gleiche Prozesse","Gleiche Prozesse und Maschinen, gleiche Datenbearbeitung und Archivierung: das Muster ist auf die Serie übertragbar.",'<path d="M8 16H48M8 28H48M8 40H48"/><path class="a" d="M8 28H30"/><circle class="f" cx="30" cy="28" r="2.4"/>'],
  ["Notfall","Auch größere Serien","Die große Stärke von MOS: Notfallproduktion auch für größere Serien, direkt ans Band.",'<path d="M10 44H46"/><path d="M14 44V30H24V44M28 44V20H38V44"/><path class="a" d="M14 14L26 14L32 8"/><circle class="f" cx="32" cy="8" r="2.4"/>'],
  ["Flexibilität","Auch am Wochenende","Keine Einschränkung bei der Ausführung der Leiterplatte, und für wichtige Aufträge auch am Wochenende.",'<path d="M10 14H46V46H10Z"/><path d="M10 24H46M20 8V18M36 8V18"/><path class="a" d="M20 36L26 41L37 30"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* key figures of the Neuweiler fab (mos-electronic.de > Produkte, Eildienst, MOS-Verbund; news 2016, 2020, 2024) */
function mats(){var M=[["Lagen","50","Leiterplatten von einseitig bis 50 Lagen"],["Dicke","6,0 mm","im Verbund bis 10 mm"],["Kupfer","400 µm","Dickkupfer auf Innen- und Außenlagen"],["Vias","Typ VII","gefüllt mit eigener Hole-Plugging-Anlage"],["Ätzen","8 Kammern","zusätzliche saure Ätzlinie für Dickkupfer"],["Lötstopplack","alle Farben","dazu alle gängigen Endoberflächen"],["Konformität","RoHS · UL","RoHS-Konformität und UL-Listing"],["Verbund","seit 2005","feste Serienpartner in Fernost"]];
  return '<ul class="kmat">'+M.map(function(m){return '<li><span class="lab">'+esc(m[0])+'</span><b>'+esc(m[1])+'</b><span class="kz">'+esc(m[2])+'</span></li>'}).join("")+'</ul>'}
function qual(){var Q=[
  ["Fertigung auf höchstem Stand","Seit der Gründung ist es das Ziel, die Fertigung auf technologisch höchstem Stand zu halten. Ständige Neuinvestitionen und Produktverbesserungen sind ein wesentlicher Teil des Erfolges."],
  ["Investiert in die Prozesse","Eine zusätzliche saure Ätzlinie mit acht Ätzkammern für Kupfer bis 400 µm, eine neue Sprühanlage für Lötstopplack und 2024 die Hole-Plugging-Anlage THP 35 von ITC."],
  ["Direkter Draht","Kunden erreichen ihre Ansprechpartner kurzfristig und direkt, für eine reibungslose Zusammenarbeit zwischen Ihnen, der Entwicklung, der Produktion und der Logistik."]];
  return '<ol class="exps">'+Q.map(function(x,i){return '<li><span class="lab">'+('0'+(i+1)).slice(-2)+'</span><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Leiterplattenhersteller<span class="nomob"> · Neuweiler</span> · seit 1984</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Leiterplattentechnik</span> <span class="l acc">für die Zukunft.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MOS Electronic fertigt im Nordschwarzwald Leiterplatten vom Prototypen bis zur Großserie: bis 50 Lagen, HDI, Flex und Starrflex, Dickkupfer und IMS, im Eildienst ab einem Arbeitstag.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technologien">Zu den Technologien '+ARR+'</a><a class="btn" href="#/kontakt">Anfrage stellen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>MOS Electronic GmbH · seit 1984</span>'+
   '<h2 class="txt" id="mani"><em>Vom Prototypen bis zur Großserie:</em> alles aus einer Hand, mit der Technologie von morgen schon im <span class="nw">ersten Muster.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">50</span><p class="k">Lagen: Leiterplatten von einseitig bis 50 Lagen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 Tag</span><p class="k">Eildienst: Produktion ab einem Arbeitstag, in Serienqualität</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">400 µm</span><p class="k">Dickkupfer auf Innen- und Außenlagen</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">In der Fertigung</span><h2 class="d3">Vom Lagenaufbau <em>zur Leiterplatte.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Verpressen</span><span>Bohren</span><span>Oberfläche</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Daten und Lagen</span> <span class="nw">aus einem Haus.</span></h2><p>Das Team CAM bereitet die Daten auf. Kerne, Prepregs und Kupferfolien werden zum Multilayer verpresst, von einseitig bis 50 Lagen.</p></article>'+
     '<article class="step"><h2><span class="nw">Gebohrt, galvanisiert,</span> <span class="nw">verfüllt.</span></h2><p>Durchgangs- und Sacklochbohrungen werden durchkontaktiert. Die eigene Hole-Plugging-Anlage verfüllt sie nach Typ VII in einem Produktionsschritt.</p></article>'+
     '<article class="step"><h2><span class="nw">Lötstopplack</span> <span class="nw">und Endoberfläche.</span></h2><p>Lötstopplack in allen Farben, dazu alle gängigen Endoberflächen. Auf Wunsch mit Impedanzprüfung, RoHS-konform und UL-gelistet.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technologien" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technologien</span><h2 class="d2 split"><span class="nw">Alle Arten von</span> <em class="nw">Leiterplatten.</em></h2></div><p data-r>Vom einseitigen Prototypen bis zum Multilayer mit 50 Lagen: MOS fertigt in Neuweiler und bietet zusammen mit dem MOS-Verbund alle Arten von Leiterplatten in jeder Stückzahl an.</p></div>'+
   rows(PRODS)+
  '</div></section>'+

  '<section class="sec light" id="eildienst" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Eildienst seit 1985</span><h2 class="d2 split"><span class="nw">Der Eildienst fängt</span> <em class="nw">beim Angebot an.</em></h2></div><p data-r>Bereits 1985 hat MOS den Eildienst ins Leben gerufen. Eildienstfertigungen für Prototypen und Notfallproduktionen größerer Mengen direkt ans Band gehören längst zum Tagesgeschäft, selbstverständlich in Serienqualität.</p></div>'+
   caps()+
   '<div class="bk"><span class="lab kick" data-r>PoolPlus</span><p class="cr" data-r><span>Preiswerte Muster in Serienqualität und kürzester Zeit</span><a class="ul" href="mailto:poolplus@mos-electronic.de">poolplus@mos-electronic.de</a></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="technik" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technische Eckdaten</span><h2 class="d2 split"><span class="nw">Die Fertigung</span> <em class="nw">in Zahlen.</em></h2></div><p data-r>Standardtechnologien und Kapazitäten der Leiterplattenfertigung in Neuweiler, ergänzt um Sonderlagenaufbauten, Cavities und Copper Inlays auf Anfrage.</p></div>'+
   mats()+
  '</div></section>'+

  '<section class="sec light" id="qualitaet" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Qualität</span><h2 class="d2 split"><span class="nw">Qualität ist Teil</span> <em class="nw">der Philosophie.</em></h2></div><p data-r>In hochmodern ausgestatteten Fertigungshallen entstehen Leiterplatten mit einem Höchstmaß an Qualität und Wirtschaftlichkeit, getragen von Flexibilität, Schnelligkeit und Zuverlässigkeit.</p></div>'+
   qual()+
  '</div></section>'+

  '<section class="sec dark2" id="unternehmen" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unternehmen</span><h2 class="d2 split"><span class="nw">Seit 1984</span> <em class="nw">in Neuweiler.</em></h2></div><p data-r>Ein flexibles Team aus rund sechzig, meist langjährigen Mitarbeitern im Nordschwarzwald. Seit 2005 arbeitet MOS mit festen asiatischen Serienherstellern zusammen und bietet so alle Arten von Leiterplatten in allen Seriengrößen an.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Aktuelles</span><div class="bkl"><p class="cr" data-r><span>electronica 2026, München</span><span>Halle A1, Stand 441</span><a class="ul" href="https://exhibitors.electronica.de/ausstellerportal/2026/aussteller/ausstellerdetails/mos-electronic-gmbh/?elb=809.1100.1715.1.111" target="_blank" rel="noopener">Im Ausstellerverzeichnis</a></p>'+
   '<p class="cr" data-r><span>MOS stellt ein</span><span>Offene Stellen in Fertigung und Labor</span><a class="ul" href="'+MG+'aktuelles.htm" target="_blank" rel="noopener">Zu den Stellen</a></p></div></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="kontakt" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Kontakt</span>'+
   '<h2 class="big split"><span class="nw">Ihr Layout,</span> <em class="nw">unsere Leiterplatte.</em></h2>'+
   '<p class="sub" data-r>Für Anfragen zu Prototypen, Eildienst und Serien, zu PoolPlus oder zum MOS-Verbund erreichen Sie das Team in Neuweiler direkt.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail schreiben '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Anrufen: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Anschrift</span><p data-r>MOS Electronic GmbH<br>Hermann-Löns-Straße 40–44<br>75389 Neuweiler</p></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telefon <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Broschüren</span><p data-r><a class="ul" href="'+MG+'kontakt.htm" target="_blank" rel="noopener">Technologie- und Imagebroschüren anfordern</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Anschrift</span>MOS Electronic GmbH<br>Hermann-Löns-Straße 40–44, 75389 Neuweiler</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Entdecken</span><a class="ul" href="#/technologien">Technologien</a><br><a class="ul" href="#/eildienst">Eildienst</a><br><a class="ul" href="#/qualitaet">Qualität</a><br><a class="ul" href="#/unternehmen">Unternehmen</a></div>'+
   '<div class="c"><span class="lab">Register</span>Registergericht Stuttgart<br>HR B 330/659<br>Geschäftsführerin: Margrit Schmalstieg</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Exo\',Arial,sans-serif;font-style:italic;font-weight:700;font-size:66px;letter-spacing:.3em">MOS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MOS Electronic</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",fertigung:"story",technologien:"technologien",eildienst:"eildienst",technik:"technik",qualitaet:"qualitaet",unternehmen:"unternehmen",kontakt:"kontakt"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MOS Electronic — Leiterplatten aus Neuweiler, seit 1984",x:"Start"};
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
