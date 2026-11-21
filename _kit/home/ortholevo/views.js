/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page CTAs scroll) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[3])+'</span></div><p>'+esc(c[1])+'</p><a class="lab ul lk" href="https://ortholevo.com/our-publications" target="_blank" rel="noopener">Publications</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Sustained-release relaxin<span class="nomob"> · Joint stiffness</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Freedom</span><span class="l"><em>from fibrosis.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Ortholevo is developing sustained-release relaxin: a single joint injection with lasting efficacy to treat joint stiffness, such as frozen shoulder, and restore full motion.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology" data-to="story">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<span class="lab cap" aria-hidden="true">Shoulder X-ray · photo Stefani Medina, Unsplash</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The clinical need</span>'+
   '<h2 class="txt" id="mani">Patients with frozen shoulder often wait out the months it takes to resolve, and in many cases <b class="w0">stiffness remains.</b> <em>They need a treatment that addresses the fibrosis in the joint.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">9M</span><span class="k">People in the United States with shoulder arthrofibrosis (NIH SBIR abstract)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6–12</span><span class="k">Months patients typically wait for frozen shoulder to resolve</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$6M</span><span class="k">In five product development grants, from the NIH, the Department of Defense and others</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Relaxin</span><p data-r>A peptide hormone present in all women and men, upregulated in pregnancy, when it loosens joints through its antifibrotic mechanism.</p></div>'+
    '<div><span class="lab kick" data-r>Sustained release</span><p data-r>Patented polymeric microparticle formulations that keep relaxin working in the joint, rather than clearing in a single bolus.</p></div>'+
    '<div><span class="lab kick" data-r>Local</span><p data-r>One injection into the stiff joint, acting where the fibrosis is, to provide faster, fuller recovery.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">One injection, <em>lasting release.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fibrosis</span><span>Inject</span><span>Release</span><span>Restore</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The joint stiffens.</h2><p>In arthrofibrosis and adhesive capsulitis, fibrotic collagen accumulates in the joint capsule. It thickens and contracts, and the joint loses motion.</p></article>'+
     '<article class="step"><h2>One injection.</h2><p>Relaxin-2 loaded polymeric microparticles are injected directly into the joint, a minimally invasive, locally acting treatment.</p></article>'+
     '<article class="step"><h2>Released over time.</h2><p>The microparticles release relaxin in the joint over time, so a single injection can act for longer than the hormone alone.</p></article>'+
     '<article class="step"><h2>Motion returns.</h2><p>Relaxin downregulates collagen production and upregulates matrix metalloproteases. In preclinical studies, sustained-release relaxin reversed arthrofibrosis.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="pipeline" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Locally acting, <em>injectable, antifibrotic.</em></h2></div><p data-r>Ortholevo is in the preclinical stage of developing locally acting, injectable treatments for fibrotic diseases, focused on the musculoskeletal health of patients with joint conditions.</p></div>'+
   pfRows(PROG)+
  '</div></section>'+

  '<section class="sec dark" id="origins" data-theme="dark"><div class="wrap">'+
   '<div class="plf">'+
    '<div class="plf-t"><span class="lab kick" data-r>Origins</span><h2 class="d2 split">Out of Boston’s labs, <em>toward the clinic.</em></h2>'+
     '<p data-r>Ortholevo is a grant-funded therapeutics startup spun out of Boston University and Harvard Medical School (Beth Israel Deaconess Medical Center). Its founders published the work behind it in PNAS in 2019 and Science Translational Medicine in 2022.</p>'+
     '<div class="act" data-r><a class="btn" href="https://ortholevo.com/our-publications" target="_blank" rel="noopener">See the publications '+ARR+'</a></div></div>'+
    '<dl class="facts">'+
     '<div><dt class="lab">Spun out of</dt><dd>Boston University and Harvard Medical School, Beth Israel Deaconess Medical Center</dd></div>'+
     '<div><dt class="lab">Funding</dt><dd>NIH (NIAMS) SBIR and CRP, DoD CDMRP, Blavatnik Therapeutics Challenge, MassVentures START</dd></div>'+
     '<div><dt class="lab">Patents</dt><dd>US patents on the drug formulations (2022) and the treatment methods (2023)</dd></div>'+
     '<div><dt class="lab">Recognition</dt><dd>Judges’ Choice Winner, 2024 MA Life Sciences Innovation Day</dd></div>'+
    '</dl>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Orthopedics, <em>and sustained release.</em></h2></div><p data-r>A development team experienced in orthopedic and sustained-release therapeutics, with scientific founders from Boston University and Beth Israel Deaconess Medical Center.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>Grants, awards and publications behind sustained-release relaxin.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Restore <em>full motion.</em></h2>'+
   '<p class="sub" data-r>Interested in sustained-release relaxin, in partnering on joint stiffness, or in joining Ortholevo? We would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Ortholevo '+ARR+'</a><a class="btn" href="https://www.linkedin.com/company/ortholevo" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Lynnfield, Massachusetts</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Publications</span><p data-r><a class="ul" href="https://ortholevo.com/our-publications" target="_blank" rel="noopener">Our R&amp;D and reviews</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Ortholevo, Inc.<br>Lynnfield, Massachusetts</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="https://www.linkedin.com/company/ortholevo" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Support</span>Research reported here is supported by the National Institute of Arthritis and Musculoskeletal and Skin Diseases of the NIH (R44AR079326, SB1AR084380). Sustained-release relaxin is investigational.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Figtree\',sans-serif;font-weight:500;font-size:60px;letter-spacing:.02em">ortholevo</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ortholevo, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (nav items are taken over by buildout.js) ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",origins:"origins",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ortholevo — Sustained-release relaxin for joint stiffness",x:"Home"};
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
