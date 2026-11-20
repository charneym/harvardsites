/* ================= VIEWS (home only: Problem / Technology / Programme / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(list,cls,lk){return '<ul class="pfr '+cls+'">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p>'+(lk?'<a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Source</a>':'<p class="st">'+esc(c[3])+'</p>')+'</li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neonatal medical devices<span class="nomob"> · Perth, Western Australia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A new standard</span><span class="l">for <em>neonatal</em></span><span class="l"><em>critical care.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Empowering carers to deliver critical care while keeping the smallest and most vulnerable patients safe, and helping healthcare systems balance resources and therapeutic outcomes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How Vedette works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<span class="lab cap" aria-hidden="true">Neonatal intensive care</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="txt" id="mani">In the NICU, every vital sign is watched <b class="w0">every second.</b> Intravenous therapy, one of the most common interventions, <em>is still checked by eye.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">7–10</span><span class="k">Attempts that may be needed to place a neonatal IV, taking up to an hour</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7 in 10</span><span class="k">Neonatal IVs that leak or infiltrate, even after successful cannulation</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4–6%</span><span class="k">Of neonatal IV leakages that result in extravasation injury and possible long-term tissue damage</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Our mission</span><p data-r>To protect the smallest and most vulnerable patients from preventable harm during one of the most common yet primitively monitored interventions in the NICU.</p></div>'+
    '<div><span class="lab kick" data-r>Our approach</span><p data-r>A data-driven solution for neonatal IV monitoring, developed in collaboration with leading NICUs so it fits the way care teams already work.</p></div>'+
    '<div><span class="lab kick" data-r>Our expertise</span><p data-r>Biomedical engineering, radio astronomy, neonatology and burns care, brought together around a single gap in neonatal monitoring.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Vedette works</span><h2 class="d3">Watching the line, <em>not just the baby.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Access</span><span>Leak</span><span>Watch</span><span>Alert</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A hard-won line.</h2><p>With tiny blood volumes, low blood pressure and hair-thin veins, placing a neonatal IV can take seven to ten attempts. Each insertion carries risk.</p></article>'+
     '<article class="step"><h2>A quiet leak.</h2><p>Even after a successful cannulation, seven in ten neonatal IVs leak or infiltrate, and fluid moves into the tissue around the vein long before anyone can see it.</p></article>'+
     '<article class="step"><h2>Monitored, continuously.</h2><p>Vedette watches IV therapy every second, the way the NICU already watches heart rate, oxygen saturation and temperature.</p></article>'+
     '<article class="step"><h2>Caught before injury.</h2><p>Early signs of infiltration become timely, actionable insight for the care team, before visible injury occurs.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Vedette<sup class="tm">™</sup></h2></div><p data-r>A device to transform IV safety from subjective visual checks into a quantitative, data-driven process, empowering NICU teams to balance safety, resource use and therapeutic goals in real time.</p></div>'+
   '<dl class="facts">'+TECH.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="programme" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split">From the NICU <em>to market.</em></h2></div><p data-r>Pretect Devices is taking Vedette from development towards commercial use, with support from the Western Australian Government.</p></div>'+
   '<span class="lab sub-l" data-r>Programmes</span>'+rows(PROG,"prg",false)+
   '<span class="lab sub-l pr" data-r>Funding</span>'+rows(FUND,"fnd",true)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Astronomy, engineering <em>and the NICU.</em></h2></div><p data-r>Founded by an astrophysicist and NICU parent and a biomedical engineer, and advised by leaders in neonatology, burns care and life-sciences commercialisation.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>news.</em></h2></div><p data-r>Funding and recognition for Pretect Devices and Vedette.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Protect the <em>smallest patients.</em></h2>'+
   '<p class="sub" data-r>To talk about Vedette, clinical collaboration or partnership, write to Dr Nipanjana Patra, co-founder and CEO.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Pretect Devices '+ARR+'</a><a class="btn" href="#/technology">How Vedette works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r>Perth<br>Western Australia</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Pretect Devices Pty Ltd<br>ABN 93 658 807 231</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Pretect Devices Pty Ltd</span>Perth, Western Australia<br>ABN 93 658 807 231</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/problem">Problem</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Note</span>Vedette™ is in development.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Figtree\',system-ui,sans-serif;font-weight:600;font-size:64px;letter-spacing:.14em">PRETECT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Pretect Devices Pty Ltd</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",problem:"about",technology:"story",programme:"programme",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Pretect Devices — Vedette, continuous IV monitoring for neonatal critical care",x:"Home"};
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
