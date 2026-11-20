/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){var sub=c[2]!=="Plattform";return '<li class="'+(sub?'sub':'pl')+'"><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function newsRows(list){return '<ul class="pfr nw">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab tg">'+esc(n[0])+'</span><h3>'+esc(n[2])+'</h3><p>'+esc(n[1])+' <span class="ar" aria-hidden="true">↗</span></p></a></li>'}).join("")+'</ul>'}
function team(){return '<div class="tm">'+TEAM.map(function(p){return '<div class="pp"><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span><ul class="bio">'+p.bio.map(function(b){return '<li>'+esc(b)+'</li>'}).join("")+'</ul><a class="ul ml" href="mailto:'+p.mail+'">'+esc(p.mail)+'</a></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Beteiligungsgesellschaft für Schweizer KMU<span class="nomob"> · Zürich · seit 2016</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Kontinuität</span><span class="l"><em>mit Weitblick.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Wir begleiten Unternehmensnachfolgen und Wachstumsschritte mit eigenem Unternehmer- und Familienkapital – verantwortungsvoll, partnerschaftlich und langfristig.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/suchprofil">Unser Suchprofil '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt aufnehmen</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Über uns</span>'+
   '<h2 class="txt" id="mani">Kontivia ist keine Private-Equity-Gesellschaft. Wir investieren ausschliesslich eigenes Kapital von Unternehmerfamilien und unterliegen <em>keinem Verkaufsdruck.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2016</span><span class="k">Gegründet als langfristiger, bodenständiger und integrer Partner für Unternehmerinnen und Unternehmer</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><span class="k">Beteiligungen an mittelständischen Unternehmen, erworben im Rahmen von Nachfolgeregelungen</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Unternehmensplattformen, gemeinsam mit dem Management weiterentwickelt</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Bewährtes erhalten</span><p data-r>Wir führen erfolgreiche Unternehmensgeschichten fort – mit Augenmass und Respekt für das bisher Erreichte.</p></div>'+
    '<div><span class="lab kick" data-r>Neues ermöglichen</span><p data-r>Neue unternehmerische Etappen sind Chancen: eine Nachfolge, externes Wachstumskapital oder die Ablösung eines Aktionärs.</p></div>'+
    '<div><span class="lab kick" data-r>Wachstum fördern</span><p data-r>Gemeinsam mit dem Management stärken wir die Leistungsfähigkeit der Unternehmen – nachhaltig und langfristig.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Unser Ansatz</span><h2 class="d3">Zukunft braucht <em>Herkunft.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Lebenswerk</span><span>Nachfolge</span><span>Plattform</span><span>Weitblick</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Ein Lebenswerk.</h2><p>Gesunde, etablierte mittelständische Unternehmen in der Schweiz – mit solidem Geschäftsmodell, bestehendem Management und intaktem Wachstumspotenzial.</p></article>'+
     '<article class="step"><h2>Nachfolge mit Familienkapital.</h2><p>Geht ein Lebenswerk in neue Hände über, beteiligen wir uns mit eigenem Unternehmer- und Familienkapital. Das Management bleibt, der bisherige Unternehmer kann sich rückbeteiligen.</p></article>'+
     '<article class="step"><h2>Stärker als Plattform.</h2><p>Seit 2016 hat Kontivia sechs Beteiligungen erworben und in drei Unternehmensplattformen zusammengeführt – etwa Brütsch und Jossi unter dem Dach von Inovu.</p></article>'+
     '<article class="step"><h2>Kontinuität mit Weitblick.</h2><p>Konservativer Einsatz von Fremdkapital, langfristiger Horizont, keine Exitorientierung: Wir entwickeln Unternehmen so weiter, wie Unternehmer denken und handeln.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Suchprofil</span><h2 class="d2 split">Was wir <em>suchen.</em></h2></div><p data-r>Unser Rahmen für die wesentlichen Beteiligungskriterien: ein überzeugendes Unternehmensprofil mit Hauptsitz in der Schweiz.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
   '<div class="sol"><div class="shead sm"><div><span class="lab kick" data-r>Lösungen</span><h3 class="d3 split">Partnerschaft <em>mit Substanz.</em></h3></div></div>'+
   '<ol class="solg">'+SOL.map(function(a,i){return '<li><span class="lab n">0'+(i+1)+'</span><h4>'+esc(a[0])+'</h4><p>'+esc(a[1])+'</p></li>'}).join("")+'</ol></div>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Beteiligungen</span><h2 class="d2 split">Sechs Unternehmen, <em>drei Plattformen.</em></h2></div><p data-r>Die bisherigen Kontivia-Beteiligungen: Nachfolgelösungen für Schweizer KMU, zusammengeführt und gemeinsam mit dem Management weiterentwickelt.</p></div>'+
   pfRows(PF)+
   '<div class="past"><span class="lab kick" data-r>Beteiligungen aus früherer Tätigkeit</span><p class="pl" data-r>'+PAST.map(esc).join('<i aria-hidden="true">·</i>')+'</p><p class="note" data-r>Börsengang während der Beteiligungspartnerschaft: Phonak/Sonova, Komax, Saia-Burgess, Sia Abrasives, Polytec Group.</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Jahrzehnte <em>Erfahrung.</em></h2></div><p data-r>Der Kontivia-Gründer Alexander Krebs war bei der aktiven Begleitung von Beteiligungen in den Verwaltungsräten zahlreicher bekannter Schweizer Unternehmen tätig.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split">Aus dem <em>Portfolio.</em></h2></div><p data-r>Berichte und Mitteilungen zu Kontivia und ihren Beteiligungen.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Unternehmerinnen, Unternehmer und ihre Berater</span>'+
   '<h2 class="big split">Ihre Nachfolge, <em>in guten Händen.</em></h2>'+
   '<p class="sub" data-r>Steht in Ihrem Unternehmen eine Nachfolge, ein Wachstumsschritt oder die Ablösung eines Aktionärs an? Wir freuen uns auf ein persönliches Gespräch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail an Kontivia '+ARR+'</a><a class="btn" href="'+TELH+'">'+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Standort</span><p data-r>Kontivia AG<br>Uraniastrasse 40<br>8001 Zürich</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Karte</a></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Gründer</span><p data-r>Alexander Krebs<br><a class="ul" href="mailto:alexander.krebs@kontivia.com">E-Mail</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Standort</span>Uraniastrasse 40<br>8001 Zürich</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">E-Mail</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Übersicht</span><a class="ul" href="#/more/ansatz">Ansatz</a><br><a class="ul" href="#/more/suchprofil">Suchprofil</a><br><a class="ul" href="#/more/beteiligungen">Beteiligungen</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/aktuelles">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Kontivia AG</span>Solides Unternehmerkapital</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 72" aria-hidden="true"><text x="260" y="58" text-anchor="middle" style="font-family:\'Literata\',Georgia,serif;font-weight:600;font-size:72px;letter-spacing:-.01em">Kontivia</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kontivia AG, Zürich</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

var MORE={ansatz:"Ansatz",suchprofil:"Suchprofil",beteiligungen:"Beteiligungen",team:"Team",aktuelles:"Aktuelles"};
function vMore(k){
  return '<section class="ph-head more" data-field data-theme="dark">'+
   '<span class="lab eyebrow">Konzept-Vorschau</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+MORE[k]+', <em>ausgebaut.</em></h1>'+
   '<p class="intro" data-r>Dies ist ein Konzept für die Startseite. Wenn Ihnen die Richtung gefällt, baue ich diese Seite und den Rest der Website im gleichen Stil aus – mit Ihrem Team, Ihren Beteiligungen und Neuigkeiten – und übernehme auch den Umzug von Ihrer bisherigen Website. Antworten Sie einfach auf die E‑Mail, mit der Sie diesen Link erhalten haben, dann besprechen wir das weitere Vorgehen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/">Zurück zur Startseite '+ARR+'</a><a class="more-k ul" href="#/'+k+'">Oder das Konzept weiter ansehen</a></div>'+
  '</section>';
}
/* ================= ROUTER: home, plus a build-out page per nav item; #/<section> scrolls to that home section ================= */
var SECS={about:"about",ansatz:"story",suchprofil:"criteria",beteiligungen:"portfolio",team:"team",aktuelles:"news",kontakt:"contact"};
function route(h){
  var m=/^#\/more\/([a-z]+)$/.exec(h||"");if(m&&MORE[m[1]]){var k=m[1];return {k:"more-"+k,v:function(){return vMore(k)},t:MORE[k]+" — Kontivia",x:MORE[k]}}
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kontivia — Langfristige Beteiligungspartnerin für Schweizer KMU, Zürich",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(r.k!=="home"||!r.sec)return;
  e.preventDefault();e.stopPropagation();
  if(curKey!=="home"){navByClick=true;location.hash="#/";(function wait(n){if(curKey==="home"&&!busy){setTimeout(function(){secGo(r.sec)},350);return}if(n<200)setTimeout(function(){wait(n+1)},50)})(0);return}
  if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(r.sec,true);try{history.replaceState(null,"","#/")}catch(x){}},300)})()})();
