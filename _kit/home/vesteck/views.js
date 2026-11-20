/* ================= VIEWS (home only; nav items open build-out pages, in-page links scroll to their section) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function pathRows(){return '<ul class="pfr path">'+PATH.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p>'+(c[3]?'<a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Source</a>':'<span></span>')+'</li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function sab(){return '<ul class="sab">'+SAB.map(function(p){return '<li><span class="nm">'+esc(p[0])+'</span><span class="af">'+esc(p[1])+'</span></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Endovascular aortic repair<span class="nomob"> · Clinical stage</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Revolutionizing</span><span class="l"><em>EVAR.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Suture-Tight™ is an endovascular suturing system that secures the top of an implanted endograft to the aorta, to prevent endograft migration and type 1a endoleak.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact</a></div></div>'+
   '<span class="lab cap" aria-hidden="true">Photograph · Vesteck</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">Vesteck is a clinical stage medical device company revolutionizing aortic repair with <b class="w0">an advanced endosuturing platform,</b> built to <em>eliminate the graft migration and endoleaks that lead to complex and expensive repair procedures.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">14</span><span class="k">First-in-human patients, treated in Canada, Latvia and Australia</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 years</span><span class="k">Of follow-up with no graft migration, no suture fractures and no evidence of endoleaks</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.98M</span><span class="k">NIH NHLBI Direct to Phase II SBIR grant, awarded 2025</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">A surgeon’s suture, <em>delivered from inside the graft.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Repair</span><span>Risk</span><span>Catheter</span><span>Suture</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The repair.</h2><p>In endovascular aneurysm repair, an endograft is placed inside the abdominal aorta to exclude the aneurysm. Its top, the proximal end, has to hold in the neck of the aorta.</p></article>'+
     '<article class="step"><h2>The risk.</h2><p>If the graft migrates or the seal at the neck opens, a type 1a endoleak, blood returns to the aneurysm sac, and the patient faces complex and expensive repair procedures.</p></article>'+
     '<article class="step"><h2>The catheter.</h2><p>Conceived by physicians to fit the current workflow, the Suture-Tight™ catheter carries pre-loaded sutures to the neck, at the initial implant or at a repair. One insertion can place up to four.</p></article>'+
     '<article class="step"><h2>The endosuture.</h2><p>Each nitinol endosuture behaves like a surgeon’s suture, working as a pair of surgical sutures through graft and aortic wall, and can be retracted and repositioned if needed.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="clinical" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical path</span><h2 class="d2 split">From first case <em>to pivotal trial.</em></h2></div><p data-r>Fifteen pre-clinical studies, fourteen first-in-human patients across three countries and two years of follow-up, now funded toward an FDA pivotal trial.</p></div>'+
   pathRows()+
   '<p class="ack" data-r>Research reported here is supported by the National Heart, Lung, and Blood Institute of the National Institutes of Health under Award Number R44HL178318. Vesteck is a clinical stage company; Suture-Tight™ is not available for sale in the USA or OUS.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Surgeons and engineers, <em>side by side.</em></h2></div><p data-r>A veteran team whose board and advisors bring decades of experience in developing, manufacturing and commercializing more than twenty cardiovascular devices.</p></div>'+
   team()+
   '<span class="lab sub-l pr" data-r>Global Scientific Advisory Board</span>'+sab()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Results, grants <em>and coverage.</em></h2></div><p data-r>Releases from Vesteck and coverage of Suture-Tight™.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Physicians, partners and investors</span>'+
   '<h2 class="big split">Let’s talk about <em>durable repair.</em></h2>'+
   '<p class="sub" data-r>For clinical collaboration, partnership or investment in Suture-Tight™, write to the Vesteck team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Vesteck '+ARR+'</a><a class="btn" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Vesteck Inc.<br>West Chester, PA 19380</p></div>'+
    '<div><span class="lab" data-r>R&amp;D and manufacturing</span><p data-r>Carlsbad, California</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Vesteck Inc.<br>West Chester, PA 19380</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/more/technology">Technology</a><br><a class="ul" href="#/more/clinical">Clinical</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c"><span class="lab">Notice</span>Vesteck is a clinical stage company. Suture-Tight™ is not available for sale in the USA or OUS.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:600;font-size:62px;letter-spacing:.08em">VESTECK</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Vesteck Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={technology:["Technology","technology"],clinical:["Clinical","clinical"],team:["Team","team"],news:["News","news"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>built out.</em></h1>'+
   '<p class="lede intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Or keep scrolling the concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",technology:"story",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — Vesteck",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Vesteck — Suture-Tight™ endosuturing for endovascular aortic repair",x:"Home"};
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
