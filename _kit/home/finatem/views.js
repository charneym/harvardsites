/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">Aktuell</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function exRows(list){return '<ul class="exr">'+list.map(function(c){return '<li><h4>'+esc(c[0])+'</h4><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function newsRows(list){return '<ul class="pfr nw">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab tg">'+esc(n[0])+'</span><h3>'+esc(n[2])+'</h3><p>'+esc(n[1])+' <span class="ar" aria-hidden="true">↗</span></p></a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){return '<li><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Seit 2000<span class="nomob"> · Mehrheitsbeteiligungen · Deutschland, Österreich, Schweiz</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Eigenkapital für</span><span class="l"><em>den Mittelstand.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Eine unabhängige, partnergeführte Beteiligungsgesellschaft in Bad Homburg vor der Höhe. Wir verstehen uns als Partner unserer Portfoliounternehmen und ihres Managements.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">Unsere Kriterien '+ARR+'</a><a class="btn" href="#/contact">Kontakt</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Stabilität. Wachstum. Partnerschaft.</span>'+
   '<h2 class="txt" id="mani">Seit dem Jahr 2000 beteiligen wir uns an mittelständischen Unternehmen. Wir glauben an den Mittelstand und begleiten ihn <em>als Partner.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2000</span><span class="k">Seit dem Jahr 2000 beteiligen wir uns an mittelständischen Unternehmen</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€ 10–50 Mio.</span><span class="k">Jahresumsatz der Unternehmen des kleineren Mittelstands, in die wir investieren</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">23</span><span class="k">Unternehmen in unserer Portfolio-Übersicht, davon vier aktuelle Beteiligungen</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Stabilität</span><p data-r>Mehrheitsbeteiligungen an etablierten Unternehmen mit Geschäftsaktivitäten bzw. Know-how im deutschsprachigen Raum.</p></div>'+
    '<div><span class="lab kick" data-r>Wachstum</span><p data-r>Kapital für den nächsten Schritt, auch über wachstumsbedingte Folgeinvestitionen.</p></div>'+
    '<div><span class="lab kick" data-r>Partnerschaft</span><p data-r>Wir arbeiten mit dem Management, unterstützt von Industrie-Experten mit langjähriger Managementerfahrung.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Unser Ansatz</span><h2 class="d3">Ein Getriebe, das <em>ineinandergreift.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Betrieb</span><span>Anlass</span><span>Partner</span><span>Wachstum</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Ein Unternehmen des Mittelstands.</h2><p>Unser Fokus liegt auf dem kleineren Mittelstand: Jahresumsatz zwischen € 10 Mio. und € 50 Mio., EBITDA zwischen € 2 Mio. und € 6 Mio.</p></article>'+
     '<article class="step"><h2>Ein Anlass für Veränderung.</h2><p>Typische Beteiligungsanlässe sind Nachfolgeregelungen und Konzern-Spin-Offs. Wir übernehmen dann eine Mehrheitsbeteiligung.</p></article>'+
     '<article class="step"><h2>Partner des Managements.</h2><p>Das Investment-Team bringt umfassende Finanzierungserfahrung im deutschen Mittelstand mit; Industrie-Experten unterstützen projektbezogen.</p></article>'+
     '<article class="step"><h2>Wachstum, das trägt.</h2><p>Wo das Unternehmen wächst, begleiten wir es mit wachstumsbedingten Folgeinvestitionen.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investitionskriterien</span><h2 class="d2 split">Der kleinere Mittelstand, <em>im Fokus.</em></h2></div><p data-r>Als unabhängige Beteiligungsgesellschaft investieren wir über Mehrheitsbeteiligungen in Unternehmen mit Geschäftsaktivitäten bzw. Know-how in Deutschland, Österreich und der Schweiz.</p></div>'+
   '<dl class="facts kgrid">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Vier aktuelle <em>Beteiligungen.</em></h2></div><p data-r>Vom Zustellgroßhandel bis zu hochpräzisen Antriebskomponenten: Unternehmen, die wir heute als Mehrheitsgesellschafter begleiten.</p></div>'+
   pfRows(PF)+
   '<div class="exh"><span class="lab kick" data-r>Ehemalige Beteiligungen</span></div>'+
   exRows(EX)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Partnergeführt, <em>in Bad Homburg.</em></h2></div><p data-r>Das Investment-Team verfügt über umfassende Finanzierungserfahrung im deutschen Mittelstand. Industrie-Experten mit langjähriger nationaler und internationaler Managementerfahrung unterstützen es projektbezogen.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Aktuelles</span><h2 class="d2 split">Aus den <em>Meldungen.</em></h2></div><p data-r>Transaktionen und Veröffentlichungen rund um Finatem und das Portfolio.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Unternehmer, Konzerne und Berater</span>'+
   '<h2 class="big split">Das nächste Kapitel, <em>gemeinsam.</em></h2>'+
   '<p class="sub" data-r>Sie planen eine Nachfolge, einen Spin-off oder den nächsten Wachstumsschritt eines mittelständischen Unternehmens? Wir freuen uns auf das Gespräch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">E-Mail an Finatem '+ARR+'</a><a class="btn" href="tel:'+TELH+'">'+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Büro</span><p data-r>Finatem Beteiligungsgesellschaft<br>Rathausplatz 12<br>61348 Bad Homburg v.d.H.</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Karte</a></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Gesellschaft</span><p data-r>Finatem Fonds Management Verwaltungs GmbH<br>Amtsgericht Bad Homburg v.d.H., HRB 16464</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Büro</span>Rathausplatz 12<br>61348 Bad Homburg v.d.H.</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="mailto:'+MAIL+'">E-Mail</a><br><a class="ul" href="tel:'+TELH+'">Telefon</a></div>'+
   '<div class="c"><span class="lab">Übersicht</span><a class="ul" href="#/more/approach">Ansatz</a><br><a class="ul" href="#/more/criteria">Kriterien</a><br><a class="ul" href="#/more/portfolio">Portfolio</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">Aktuelles</a></div>'+
   '<div class="c"><span class="lab">Nachhaltigkeit</span><a class="ul" href="https://finatem.com/esg/" target="_blank" rel="noopener">ESG-Offenlegungen</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Cinzel\',Georgia,serif;font-weight:400;font-size:58px;letter-spacing:.2em">FINATEM</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Finatem Beteiligungsgesellschaft</span><span class="lab">Konzept-Website</span><a class="lab ul" href="#main" id="toTop">Nach oben ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={approach:["Ansatz","approach"],criteria:["Kriterien","criteria"],portfolio:["Portfolio","portfolio"],team:["Team","team"],news:["Aktuelles","news"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Konzeptvorschau</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>ausgearbeitet.</em></h1>'+
   '<p class="lede intro" data-r>Dies ist ein Konzept für die Startseite. Wenn Ihnen die Richtung gefällt, würde ich diese Seite und den Rest der Website im selben Stil ausarbeiten, mit Ihrem Team, Ihrem Portfolio und Ihren Meldungen, und den Umzug von Ihrer bisherigen Website übernehmen. Antworten Sie einfach auf die E-Mail, mit der Sie diesen Link erhalten haben, dann besprechen wir alles Weitere.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Zurück zur Startseite '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Oder das Konzept weiter ansehen</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — Finatem",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Finatem — Eigenkapital für den Mittelstand, Bad Homburg v.d.H.",x:"Start"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
/* on the home page, section links scroll in place */
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a||curKey!=="home")return;var r=route(a.getAttribute("href"));if(r.k!=="home"||!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"",location.hash==="#/"?"#/":"#/")}catch(x){}prevHash="#/"});
/* arriving at a section from a build-out page (or a cold link): wait for the home view, then jump to the section */
function secAfter(sec){var n=0;(function wait(){if(++n>80)return;var lk=document.documentElement.style.overflow==="hidden"||curKey!=="home"||busy||!document.getElementById(sec);if(lk){setTimeout(wait,120);return}
  setTimeout(function(){secGo(sec,true);try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"},250)})()}
addEventListener("hashchange",function(){var r=route(location.hash);if(curKey!=="home"&&r.k==="home"&&r.sec)secAfter(r.sec)});
(function(){var r=route(location.hash);if(r.k==="home"&&r.sec)secAfter(r.sec)})();
