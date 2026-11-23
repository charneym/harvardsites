/* ================= VIEWS (home only: Approach / Science / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function props(){return '<ul class="pfr">'+PROPS.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Leadership, founders and board</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={bind:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 36V22M20 22L10 10M20 22l10-12"/><path d="M6.5 6.5l4 3.5M33.5 6.5l-4 3.5"/></svg>',
 fc:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 4v14M20 18L11 30M20 18l9 12"/><circle cx="20" cy="9" r="5"/></svg>',
 shield:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5l12 4.5v9.5c0 8-5.4 13.4-12 16-6.6-2.6-12-8-12-16V9.5Z"/><path d="M14.5 20l4 4 7-8"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Immunology<span class="nomob"> · Cambridge, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precision biologics</span><span class="l">for <em>autoimmune</em></span><span class="l"><em>disease.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>Next-generation therapies that rapidly neutralize pathogenic autoantibodies and prevent autoimmune inflammation and tissue damage, while preserving the immune system’s ability to fight infection.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">Our approach '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>An IgG antibody (PDB 1IGY): antigen-binding arms in blue, the Fc stem that carries its effector function in red. Rendered.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="approach" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our approach</span>'+
   '<h2 class="txt" id="mani">We are redefining the treatment paradigm for autoimmune disease: <em>stopping the antibodies that attack the body, without disarming the ones that protect it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2025</span><p class="k">Founded in Cambridge, Massachusetts, by Jeffrey Ravetch and Eric Sundberg</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1<small>st</small></span><p class="k">A first-in-class approach: a new biologic drug class for autoimmune disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30<small>+ yrs</small></span><p class="k">Of drug discovery and development behind our CEO, Renato Skerlj</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.bind+'</span><span class="lab kick" data-r>Neutralize</span><p data-r>Rapidly neutralize the pathogenic autoantibodies that drive autoimmune disease.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.fc+'</span><span class="lab kick" data-r>Prevent</span><p data-r>Blunt the inflammation and tissue damage that autoantibodies set off, by modulating antibody effector function.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.shield+'</span><span class="lab kick" data-r>Preserve</span><p data-r>Keep the immune system’s ability to fight infection, and antibodies’ capacity to neutralize viruses.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Quiet the attack, <em>keep the defence.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Attack</span><span>Neutralize</span><span>Protect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>An autoantibody attacks.</h2><p>In autoimmune disease, antibodies bind the body’s own tissue. Their Fc stem then recruits immune cells, setting off inflammation and tissue damage.</p></article>'+
     '<article class="step"><h2>Its effector function is quieted.</h2><p>Rhapsogen’s biologics modulate antibody effector function: the autoantibody is neutralized, the immune cell is no longer drawn in, and the inflammation subsides.</p></article>'+
     '<article class="step"><h2>Protection stays intact.</h2><p>Antibodies that defend the body keep their capacity to neutralize viruses and other pathogens, so the immune system can still fight infection.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="science" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">A new biologic drug class, <em>built on the antibody.</em></h2></div><p data-r>Our founders have made fundamental contributions to understanding how the immune system interacts with antibodies, to protect against infection or to cause autoimmune disease. On that science we are developing a best-in-class precision biologic for autoimmune disease, with superior efficacy, safety and durability.</p></div>'+
   props()+
  '</div></section>'+

  '<section class="sec dark tmsec" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by leaders <em>in antibody immunology.</em></h2></div><p data-r>Co-founded in 2025 by Prof. Jeffrey Ravetch of Rockefeller University and Prof. Eric Sundberg of Emory University, launched by Catalio Capital Management’s venture strategy, and led by Renato Skerlj, Ph.D.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From launch <em>to leadership.</em></h2></div><p data-r>Rhapsogen’s launch with Catalio Capital Management in 2025, and the appointment of Renato Skerlj, Ph.D., as Chief Executive Officer.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and scientists</span>'+
   '<h2 class="big split">A new paradigm <em>for autoimmune disease.</em></h2>'+
   '<p class="sub" data-r>Follow Rhapsogen as we build next-generation biologics for patients with autoimmune disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+LI+'" target="_blank" rel="noopener">Follow on LinkedIn '+ARR+'</a><a class="btn" href="#/approach">Our approach</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>Rhapsogen<br>Cambridge, Massachusetts</p></div>'+
    '<div><span class="lab" data-r>Backed by</span><p data-r>Catalio Capital Management</p></div>'+
    '<div><span class="lab" data-r>Focus</span><p data-r>Precision biologics for autoimmune disease</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>Rhapsogen<br>Cambridge, Massachusetts</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Follow</span><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Precision biologics<br>for autoimmune disease</div>'+
  '</div><div class="bigl" aria-hidden="true">__LOGO__</div>'+
  '<div class="legal"><span class="lab">© 2026 Rhapsogen</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={approach:"approach",science:"science",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Rhapsogen — precision biologics for autoimmune disease",x:"Home"};
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
