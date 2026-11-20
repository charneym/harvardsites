/* ================= VIEWS (home only; nav items open build-out pages, in-page CTAs scroll to their section) ================= */
function rows(list,cls,lk){return '<ul class="pfr '+cls+'">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p>'+(lk?'<a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Source</a>':'<p class="st">'+esc(c[3])+'</p>')+'</li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Maternal health technology<span class="nomob"> · Saint Louis, Missouri</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Early alerts,</span><span class="l"><em>safer births.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Maternal aRMOR is a wrist-worn sensor that gives care teams objective, real-time insight into a patient’s hemorrhage risk, even when blood loss is internal.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<span class="lab cap" aria-hidden="true">Maternal aRMOR on a patient’s wrist</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="txt" id="mani">Hemorrhage is <b class="w0">the global leading cause</b> of maternal death. Yet 90% of cases are preventable <em>with early detection and treatment.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">14 million</span><span class="k">People who experience severe blood loss after giving birth, every year</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5%</span><span class="k">Of US births involve hemorrhage, which accounts for 11% of US maternal deaths</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.8B</span><span class="k">What these losses cost the US healthcare system each year</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Our mission</span><p data-r>To pioneer solutions that protect and empower women’s health at every stage of life, combining rigorous research with empathetic, person-centred design.</p></div>'+
    '<div><span class="lab kick" data-r>Our vision</span><p data-r>Devices that change women’s health, aimed at the problems that affect the health of millions of women around the world.</p></div>'+
    '<div><span class="lab kick" data-r>Since 2022</span><p data-r>Founded in June 2022 by women engineers frustrated with the stagnant state of women’s health innovation. Female-founded and female-led.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Reading the body’s <em>first response.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Wear</span><span>Sense</span><span>Shift</span><span>Alert</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Worn at the wrist.</h2><p>Maternal aRMOR is a lightweight, noninvasive sensor that sits on the patient’s wrist and tirelessly monitors her circulation.</p></article>'+
     '<article class="step"><h2>Light reads the flow.</h2><p>A laser and a camera quantify the flowing red blood cells in the peripheral circulation, independent of skin pigmentation.</p></article>'+
     '<article class="step"><h2>The body protects its core.</h2><p>As bleeding begins, the body instinctively clamps down on vessels in the hands and feet to send blood to the vital organs, often while vital signs still look normal.</p></article>'+
     '<article class="step"><h2>An early, objective alert.</h2><p>Those subtle shifts become real-time, quantitative insight for the care team: automated quantified blood loss and personalized compensation alerts.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Maternal <em>aRMOR.</em></h2></div><p data-r>A wearable device that healthcare providers use to detect early hemorrhage in pregnant patients. Its patented technology enables equitable, low-cost, early hemorrhage detection and treatment monitoring.</p></div>'+
   '<dl class="facts">'+TECH.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">The first of <em>many.</em></h2></div><p data-r>Armor Medical is bringing to market the first commercial early warning system for obstetric hemorrhage, the first in a pipeline of technologies for women’s health.</p></div>'+
   '<span class="lab sub-l" data-r>Programmes</span>'+rows(PROG,"prg",false)+
   '<span class="lab sub-l pr" data-r>Funding and recognition</span>'+rows(FUND,"fnd",true)+
   '<div class="cred"><span class="lab" data-r>Recognized by</span><p data-r>'+CREDIT.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Female-founded, <em>female-led.</em></h2></div><p data-r>A multidisciplinary team with deep expertise in biomedical engineering and women’s health, as well as software, product and business development.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">In the <em>press.</em></h2></div><p data-r>Awards, grants and coverage of Armor Medical and Maternal aRMOR.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Safeguard <em>maternal health.</em></h2>'+
   '<p class="sub" data-r>To talk about Maternal aRMOR, clinical collaboration or partnership, write to the Armor Medical team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Armor Medical '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r>Saint Louis, Missouri<br>United States</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/armormedical/" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://www.instagram.com/armormedical" target="_blank" rel="noopener">Instagram</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Armor Medical Inc.</span>Saint Louis, Missouri<br>Founded June 2022</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/more/problem">Problem</a><br><a class="ul" href="#/more/technology">Technology</a><br><a class="ul" href="#/more/pipeline">Pipeline</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c"><span class="lab">Note</span>Maternal aRMOR is in development.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-weight:300;font-style:italic;font-size:66px;letter-spacing:-.01em">armor medical</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Armor Medical Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={problem:["Problem","problem"],technology:["Technology","technology"],pipeline:["Pipeline","pipeline"],team:["Team","team"],news:["News","news"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>built out.</em></h1>'+
   '<p class="lede intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Or keep scrolling the concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",problem:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — Armor Medical",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Armor Medical — Maternal aRMOR, a wearable early warning for postpartum hemorrhage",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
/* on the home page, section links scroll in place */
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a||curKey!=="home")return;var r=route(a.getAttribute("href"));if(r.k!=="home"||!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
/* arriving at a section from a build-out page (or a cold link): wait for the home view, then jump to the section */
function secAfter(sec){var n=0;(function wait(){if(++n>80)return;var lk=document.documentElement.style.overflow==="hidden"||curKey!=="home"||busy||!document.getElementById(sec);if(lk){setTimeout(wait,120);return}
  setTimeout(function(){secGo(sec,true);try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"},250)})()}
addEventListener("hashchange",function(){var r=route(location.hash);if(curKey!=="home"&&r.k==="home"&&r.sec)secAfter(r.sec)});
(function(){var r=route(location.hash);if(r.k==="home"&&r.sec)secAfter(r.sec)})();
