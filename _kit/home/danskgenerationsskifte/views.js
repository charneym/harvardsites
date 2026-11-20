/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
var AREAS=["Industri","Brands","Omsorg & Sundhed"];
function pfRows(){return AREAS.map(function(a){return '<span class="lab sub-l" data-r>'+esc(a)+'</span><ul class="pfr">'+PF.filter(function(c){return c[2]===a}).map(function(c){
  return '<li><span class="lab tg">Investering '+esc(c[4])+'<span class="fd">'+esc(c[5])+'</span></span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Besøg '+esc(c[0])+'</a></li>'}).join("")+'</ul>'}).join("")}
function ini(n){return n.split(" ").filter(function(x,i,a){return i===0||i===a.length-1}).map(function(x){return x[0]}).join("")}
function team(){
  function card(p){return '<li class="tm'+(p.lead?' ld':'')+'"><figure>'+(p.img?'<div class="ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" loading="lazy" width="600" height="800"></div>':'<div class="ph ni" aria-hidden="true"><span>'+esc(ini(p.name))+'</span></div>')+
    '<figcaption><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span></figcaption></figure></li>'}
  return '<span class="lab sub-l dk" data-r>Partnere og bestyrelse</span><ul class="tgrid lead">'+TEAM.filter(function(p){return p.lead}).map(card).join("")+'</ul>'+
    '<span class="lab sub-l dk pr" data-r>Team</span><ul class="tgrid">'+TEAM.filter(function(p){return !p.lead}).map(card).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Privat investeringsselskab<span class="nomob"> · Vester Skerninge og Frederiksberg</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Succesfulde</span><span class="l">generationsskifter</span><span class="l"><em>siden 2005.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Dansk Generationsskifte tager ansvar for det ledelses- og kapitalmæssige generationsskifte i små og mellemstore danske virksomheder.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/kriterier">Det ser vi efter '+ARR+'</a><a class="btn" href="#/kontakt">Kontakt os</a></div></div>'+
   '<span class="lab hero-cap" data-r>Flintholm · Vester Skerninge</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Om os</span>'+
   '<h2 class="txt" id="mani"><b class="w0">Sund fornuft,</b> enkle strategier og fokus på eksekvering. Vi betragter os selv som ejere, og når vi investerer, gør vi det med <em>stort engagement.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2005</span><span class="k">Stiftet af Jens Heimburger som et kraftcenter for generationsskifte</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30–250</span><span class="k">mDKK i typisk omsætning i de virksomheder, vi køber</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5–25</span><span class="k">mDKK i typisk indtjening før skat</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Industri</span><p data-r>Specialiserede industrivirksomheder, fra glasfiberkomposit og sikkerhedskomponenter til anlæg for affald og genanvendelse.</p></div>'+
    '<div><span class="lab kick" data-r>Brands</span><p data-r>Danske brands med et unikt produkt, fra ravsmykker og uderum til blødgøringsanlæg og gelato.</p></div>'+
    '<div><span class="lab kick" data-r>Omsorg & Sundhed</span><p data-r>Velfærds- og sundhedsydelser til kommuner, regioner og private, samlet i Carelink Gruppen.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Strategi</span><h2 class="d3">Et fornyende <em>generationsskifte.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ansvar</span><span>Majoritet</span><span>Direktør</span><span>Ejere</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Vi tager ansvar.</h2><p>For det ledelses- og kapitalmæssige generationsskifte, så grundlaget for virksomhedens langsigtede udvikling og vækst bliver stærkere.</p></article>'+
     '<article class="step"><h2>Kun majoritet.</h2><p>Vi foretager udelukkende majoritetsinvesteringer, og når vi investerer, gør vi det som ejere og med stort engagement.</p></article>'+
     '<article class="step"><h2>Direktøren investerer med.</h2><p>Vi stiller altid som betingelse, at den nye direktør bliver medinvestor.</p></article>'+
     '<article class="step"><h2>De tidligere ejere bliver.</h2><p>De bedste resultater opnås, når de tidligere ejere bevarer tilknytningen til virksomheden som aktionærer og medlemmer af bestyrelsen.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Kriterier</span><h2 class="d2 split">Det ser vi <em>efter.</em></h2></div><p data-r>Vi fokuserer på investeringer, hvor vi kan bringe vores branche- og investeringserfaringer i spil, så vi sammen med virksomhedens ledelse og organisation kan gøre en forskel.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Virksomheder</span><h2 class="d2 split">Danske virksomheder i <em>nye hænder.</em></h2></div><p data-r>Vores virksomheder inden for industri, brands samt omsorg og sundhed, med investeringsår og fond.</p></div>'+
   pfRows()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Erfaring fra idé til <em>eksekvering.</em></h2></div><p data-r>Investeringer, finansieringer, fornyelsesprocesser, salg, marketing og ledelse. Vores fælles mål er at yde virksomhederne størst mulig support frem til det succesfulde videresalg.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Nyheder</span><h2 class="d2 split">Fra <em>porteføljen.</em></h2></div><p data-r>Seneste nyt om vores virksomheder.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Ejere, ledere og rådgivere</span>'+
   '<h2 class="big split">Står virksomheden over for et <em>generationsskifte?</em></h2>'+
   '<p class="sub" data-r>Vi hører gerne fra ejere af danske virksomheder inden for industri, brands samt omsorg og sundhed med en omsætning på 30–250 mDKK.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Skriv til os '+ARR+'</a><a class="btn" href="'+TELH+'">Ring '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Flintholm</span><p data-r>Filippavej 57<br>5762 Vester Skerninge</p><a class="ul lk" href="'+MAP1+'" target="_blank" rel="noopener" data-r>Kort</a></div>'+
    '<div><span class="lab" data-r>Frederiksberg</span><p data-r>Frederiksberg Allé 18<br>1820 Frederiksberg</p><a class="ul lk" href="'+MAP2+'" target="_blank" rel="noopener" data-r>Kort</a></div>'+
    '<div><span class="lab" data-r>Kontakt</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><a class="ul lk" href="'+LI+'" target="_blank" rel="noopener" data-r>LinkedIn</a></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Flintholm</span>Filippavej 57<br>5762 Vester Skerninge<br>CVR 33046294</div>'+
   '<div class="c"><span class="lab">Frederiksberg</span>Frederiksberg Allé 18<br>1820 Frederiksberg</div>'+
   '<div class="c"><span class="lab">Kontakt</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">E-mail</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Se også</span><a class="ul" href="#/more/strategi">Strategi</a><br><a class="ul" href="#/more/kriterier">Kriterier</a><br><a class="ul" href="#/more/virksomheder">Virksomheder</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/nyheder">Nyheder</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 84" aria-hidden="true"><text x="500" y="62" text-anchor="middle" style="font-family:\'Libre Caslon Text\',Georgia,serif;font-weight:400;font-size:66px;letter-spacing:.06em">DANSK GENERATIONSSKIFTE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Dansk Generationsskifte A/S</span><span class="lab">Konceptwebsite</span><a class="lab ul" href="#main" id="toTop">Til toppen ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={"om-os":"about",strategi:"story",kriterier:"criteria",virksomheder:"portfolio",team:"team",nyheder:"news",kontakt:"contact"};
var MORE={strategi:"Strategi",kriterier:"Kriterier",virksomheder:"Virksomheder",team:"Team",nyheder:"Nyheder"};
function vMore(k){
  return '<section class="ph-head more" data-field data-theme="dark">'+
   '<span class="lab eyebrow">Konceptforhåndsvisning</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+MORE[k]+', <em>fuldt udbygget.</em></h1>'+
   '<p class="intro" data-r>Dette er et koncept for forsiden. Hvis I kan lide retningen, bygger jeg denne side og resten af sitet i samme stil, med jeres team, virksomheder og nyheder, og står for flytningen fra jeres nuværende site. Svar på den e-mail, som dette link kom i, så tager vi det derfra.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/">Tilbage til forsiden '+ARR+'</a><a class="more-k ul" href="#/'+k+'">Eller fortsæt med at scrolle i konceptet</a></div>'+
  '</section>';
}
function route(h){
  var m=/^#\/more\/([a-z-]+)$/.exec(h||"");if(m&&MORE[m[1]]){var k=m[1];return {k:"more-"+k,v:function(){return vMore(k)},sec:null,t:MORE[k]+" — Dansk Generationsskifte",x:MORE[k]}}
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Dansk Generationsskifte — Privat investeringsselskab for generationsskifte i danske virksomheder",x:"Forside"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
function secAfter(id){var n=0;(function wait(){if(++n>80)return;var lk=curKey!=="home"||document.documentElement.style.overflow==="hidden"||!document.getElementById(id);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(id,true);try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"},350)})()}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  if(curKey!=="home"){secAfter(r.sec);return}
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(r.sec)secAfter(r.sec)})();
