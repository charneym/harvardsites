/* ================= VIEWS (home only; nav items open build-out pages, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b></span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[1])+'</span></h3><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Kidney therapeutics<span class="nomob"> · Clinical stage</span> · Seattle, Washington</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Lack of concentration</span><span class="l">is our <em>focus.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NephroDI is developing NDI-5001, a kidney-targeted small molecule AMPK activator, as a potential first-in-class treatment for congenital X-linked nephrogenic diabetes insipidus.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How NDI-5001 works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Children born with X-linked NDI must drink as much water as they lose, up to 20 liters a day, to avoid severe dehydration. Today there is <em>no effective therapy.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20 L</span><span class="k">Of dilute urine a day in X-linked NDI, almost a liter an hour</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Phase 1b</span><span class="k">Trial of NDI-5001 in adults with X-linked NDI, recruiting since July 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.1M</span><span class="k">NIH NIDDK SBIR Phase II award to prepare the pediatric study, 2025</span></div>'+
   '</div>'+
   '<div class="plat">'+DESIG.map(function(d){return '<div><span class="lab kick" data-r>'+esc(d[0])+'</span><p data-r>'+esc(d[1])+'.</p></div>'}).join("")+'</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How NDI-5001 works</span><h2 class="d3">A second route to <em>concentrated urine.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Vasopressin</span><span>X-linked NDI</span><span>AMPK</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The healthy signal.</h2><p>In the kidney’s collecting duct, the hormone vasopressin binds its V2 receptor. The cAMP/PKA pathway sends aquaporin-2 water channels to the cell surface, and water returns to the blood.</p></article>'+
     '<article class="step"><h2>A broken receptor.</h2><p>In X-linked NDI, mutations in the V2 receptor gene stop that pathway from switching on. The channels stay inside the cell, and the water leaves as dilute urine.</p></article>'+
     '<article class="step"><h2>A route around it.</h2><p>AMPK can also phosphorylate aquaporin-2, without the PKA pathway. NDI-5001 is a kidney-targeted AMPK activator that did not affect blood glucose in preclinical studies.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One program, <em>from adults to children.</em></h2></div><p data-r>NephroDI focuses on concentration disorders of the kidney. Its first product addresses X-linked NDI caused by mutations in the vasopressin V2 receptor (AVPR2) gene.</p></div>'+
   pipeRows(PIPE)+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r>'+BACK.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Kidney physiology, <em>translated.</em></h2></div><p data-r>NephroDI grew out of work at Emory University on how the kidney concentrates urine, and a novel class of AMPK activators, brought together with early support from the Georgia Research Alliance and the Coulter Fund.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones on the way <em>to patients.</em></h2></div><p data-r>The trial, the grant, the investment and the partnership behind NDI-5001.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors, patients and families</span>'+
   '<h2 class="big split">Help us change life <em>with NDI.</em></h2>'+
   '<p class="sub" data-r>We work closely with adult and pediatric NDI experts and the NDI Foundation. To hear when clinical trials open, or to talk about NDI-5001, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email NephroDI '+ARR+'</a><a class="btn" href="'+TRIAL+'" target="_blank" rel="noopener">See the trial listing</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>NephroDI Therapeutics, Inc.<br>Seattle, Washington</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Patients and families</span><p data-r>Support and resources from <a class="ul" href="https://ndif.org/" target="_blank" rel="noopener">the NDI Foundation</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Seattle, Washington</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/more/science">Science</a><br><a class="ul" href="#/more/pipeline">Pipeline</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Concentration disorders<br>of the kidney</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Figtree\',Arial,sans-serif;font-weight:600;font-size:64px;letter-spacing:.01em">NephroDI</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NephroDI Therapeutics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={science:["Science","science"],pipeline:["Pipeline","pipeline"],team:["Team","team"],news:["News","news"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>built out.</em></h1>'+
   '<p class="lede intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your science, pipeline, team and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Or keep scrolling the concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",science:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — NephroDI Therapeutics",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NephroDI Therapeutics — NDI-5001 for X-linked nephrogenic diabetes insipidus, Seattle",x:"Home"};
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
