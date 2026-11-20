/* ================= VIEWS (home only; nav items open build-out pages, in-page CTAs scroll) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[3])+'</span></h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">Source</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Human kidney organoids<span class="nomob"> · Seattle, Washington</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Human models.</span><span class="l">Human <em>cures.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Plurexa grows human mini-organs that model major disease, to make therapeutics innovation faster, cheaper and easier. First target: polycystic kidney disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<span class="lab cap" aria-hidden="true">A cyst in a human kidney organoid · Plurexa imaging</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why Plurexa</span>'+
   '<h2 class="txt" id="mani">Our model system is the human kidney, <b class="w0">a beautiful and complex organ</b> needing innovative therapies. We grow it from stem cells, <em>so new medicines can be tested on human tissue first.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">12M</span><span class="k">People affected by polycystic kidney disease</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1</span><span class="k">Approved treatment, tolvaptan, whose side effects make it unsuitable for many patients</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.9M</span><span class="k">In NIH NIDDK STTR awards since 2023, Phase I and Phase II</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Human models</span><p data-r>Organoids from human pluripotent stem cells that recapitulate PKD-specific cyst formation from kidney tubules.</p></div>'+
    '<div><span class="lab kick" data-r>A new target</span><p data-r>Non-muscle myosin II, an ATP-driven motor that regulates the stiffness and contractility of tubules.</p></div>'+
    '<div><span class="lab kick" data-r>Human cures</span><p data-r>First-in-class NMII activators, built on studies that advanced cardiac myosin activators into clinical trials.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our science</span><h2 class="d3">Holding a tubule <em>in shape.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Tubule</span><span>Cyst</span><span>Myosin</span><span>Activator</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A healthy tubule.</h2><p>Tiny tubules in the kidney are lined by epithelial cells. Inside them, non-muscle myosin II pulls on actin to set the tubule’s stiffness and contractility.</p></article>'+
     '<article class="step"><h2>A cyst forms.</h2><p>In polycystic kidney disease, usually inherited as a loss of polycystin-1 or polycystin-2, tubules in the kidneys, liver and brain vasculature expand into fluid-filled cysts.</p></article>'+
     '<article class="step"><h2>Myosin holds the line.</h2><p>In Plurexa’s human PKD organoids, inhibiting NMII increases cyst formation, and mice lacking NMII develop kidney cysts. The motor keeps tubules from deforming.</p></article>'+
     '<article class="step"><h2>Switch the motor on.</h2><p>Small-molecule NMII activators reduce PKD cyst growth, in human organoids and in mice: a first-in-class approach for patients who need more than one option.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">From organoid <em>to IND.</em></h2></div><p data-r>With the University of Washington, Plurexa has blueprinted a drug-development pipeline for PKD, from in silico design to in vivo studies, supported by the NIH’s National Institute of Diabetes and Digestive and Kidney Diseases.</p></div>'+
   pfRows(PROG)+
  '</div></section>'+

  '<section class="sec dark" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="plf">'+
    '<div class="plf-t"><span class="lab kick" data-r>MiniKidney platform</span><h2 class="d2 split">Disease, in <em>a Petri dish.</em></h2>'+
     '<p data-r>Plurexa provides services built on human pluripotent stem cells and the organoids and cell types derived from them. The MiniKidney platform re-creates disease in a form a lab can screen.</p>'+
     '<dl class="facts">'+
      '<div><dt class="lab">Organoids</dt><dd>hKidney organoids, in vials and in 96- and 384-well plates</dd></div>'+
      '<div><dt class="lab">Cells</dt><dd>Kidney PTE cells and iPS stem cells</dd></div>'+
      '<div><dt class="lab">Uses</dt><dd>Tissue regeneration, gene therapy and drug development</dd></div>'+
     '</dl>'+
     '<div class="act" data-r><a class="btn" href="mailto:'+MAIL+'?subject=MiniKidney%20services">Ask about services '+ARR+'</a></div></div>'+
    '<div class="plf-i"><figure class="ph a"><img src="plates.webp" alt="Plurexa hKidney organoid 96-well and 384-well plates" width="1600" height="1276" loading="lazy" decoding="async"></figure>'+
     '<figure class="ph b"><img src="vials.webp" alt="Vials of Plurexa hKidney organoids, PTE cells and iPS stem cells" width="1200" height="1031" loading="lazy" decoding="async"></figure></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Twenty years <em>of stem cells.</em></h2></div><p data-r>A Plurexa–University of Washington team working at the meeting point of stem cells, bioengineering and genome editing, guided by an expert advisory council.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>Awards and recognition for Plurexa’s work on polycystic kidney disease.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, researchers and investors</span>'+
   '<h2 class="big split">Test it on human <em>tissue first.</em></h2>'+
   '<p class="sub" data-r>Interested in MiniKidney services, in partnering on NMII activators, or in Plurexa’s work on PKD? We would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Plurexa '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Seattle</span><p data-r>1209 6th Ave N, Suite 101<br>Seattle, WA 98109</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Seattle</span>1209 6th Ave N, Suite 101<br>Seattle, WA 98109</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/more/science">Science</a><br><a class="ul" href="#/more/programmes">Programmes</a><br><a class="ul" href="#/more/platform">Platform</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c"><span class="lab">Support</span>Research at Plurexa is supported in part by the National Institutes of Health (NIDDK, R42DK136452).</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Cabin\',sans-serif;font-weight:500;font-size:64px;letter-spacing:.01em">Plurexa</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Plurexa</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={science:["Science","science"],programmes:["Programmes","programmes"],platform:["Platform","platform"],team:["Team","team"],news:["News","news"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>built out.</em></h1>'+
   '<p class="lede intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Or keep scrolling the concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",science:"story",programmes:"programmes",platform:"platform",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — Plurexa",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Plurexa — Human kidney organoids for polycystic kidney disease, Seattle",x:"Home"};
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
