/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Protect","After a heart attack, or as dilated cardiomyopathy progresses, cardiomyocytes die. The therapy is designed first to stop that loss, keeping heart cells alive after the injury.",'<path d="M28 8c9 6 15 7 18 7 0 17-7 27-18 33C17 42 10 32 10 15c3 0 9-1 18-7z"/><path class="a" d="M21 28l5 5 10-11"/>'],
  ["Renew","The adult heart barely replaces its own muscle cells. By reactivating the ability of cardiomyocytes to divide, new, integrated and functional cells can preserve cardiac performance.",'<rect x="8" y="18" width="18" height="20" rx="5"/><rect class="a" x="30" y="18" width="18" height="20" rx="5"/><circle class="f" cx="17" cy="28" r="2.6"/><circle class="f" cx="39" cy="28" r="2.6"/>'],
  ["Prevent fibrosis","Stiff, non-contractile scar tissue is what turns an injury into heart failure. Preventing it from forming keeps the contractility of the heart muscle intact.",'<path d="M8 40l14-24M18 44l14-24M28 44l14-24M38 40l10-17"/><path class="a" d="M8 12l40 32"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function road(){return '<div class="ev"><span class="lab kick" data-r>The road to the clinic</span><div><dl>'+ROAD.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Neocor Therapeutics, i-Lab 2025 press release (Marseille, 15 October 2025). Timelines for 2026 and 2027 are the company’s stated plans.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cardiac gene therapy<span class="nomob"> · Heart regeneration</span> · Marseille</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Regenerate</span><span class="l">the heart,</span><span class="l"><em>don’t just slow it.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Neocor Therapeutics is developing a gene therapy that protects heart muscle cells, renews them and prevents cardiac fibrosis: one intravenous injection, designed to restore heart function after a heart attack or in genetic dilated cardiomyopathy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Today’s heart failure treatments slow the disease. None of them replaces the heart muscle that was lost or undoes the scar that stiffens it. Neocor exists to uncover therapies for heart regeneration and <em>repair.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">33,000+</span><span class="k">New patients with dilated cardiomyopathy every year in Europe and the United States</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Complementary modes of action in one gene therapy: protect, renew, prevent fibrosis</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€370K</span><span class="k">i-Lab 2025 innovation grant from the French state, under France 2030</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One injection, <em>three actions.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Injury</span><span>Delivery</span><span>Repair</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The heart loses muscle, and scars.</h2><p>After a heart attack, or as dilated cardiomyopathy progresses, cardiomyocytes die. The adult heart cannot replace them, and stiff scar tissue fills the gap, slowly pushing the heart toward failure.</p></article>'+
     '<article class="step"><h2>A single intravenous injection.</h2><p>A viral vector carries the gene for a protein that Neocor’s founding team identified and patented. Given once into a vein, it reaches the heart through the circulation.</p></article>'+
     '<article class="step"><h2>Protect, renew, prevent the scar.</h2><p>The protein keeps heart cells from dying, reactivates their ability to divide, and prevents fibrosis, so the heart can regain lasting function rather than only slowing its decline.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Two approaches, <em>one medicine.</em></h2></div><p data-r>Neocor’s technology combines cardiomyocyte renewal with the prevention of cardiac fibrosis, to treat ischemic and rare genetic heart disease at the root rather than managing its symptoms.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Two indications, <em>one mechanism.</em></h2></div><p data-r>The same gene therapy addresses the heart after a severe infarction and in genetic dilated cardiomyopathy, two conditions where the loss of heart muscle drives the disease.</p></div>'+
   pipeRows(PIPE)+
   road()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Heart scientists and <em>a serial founder.</em></h2></div><p data-r>A complementary founding team that mixes entrepreneurial experience with cardiovascular research, guided by experts in heart failure, gene therapy and clinical trials.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origin</span><p data-r>Academic research in Marseille, at Marseille Medical Genetics (Inserm / Aix-Marseille Université), protected by a patent since 2018.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>i-Lab 2025 laureate (France 2030), French Tech Emergence from Bpifrance, and SATT Sud-Est.</p></div>'+
    '<div><span class="lab kick" data-r>Ecosystem</span><p data-r>Eurobiomed’s GO4BIO accelerator, Impulse, CAAP Capital Innovation and WAI BNP Paribas.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recognition <em>and coverage.</em></h2></div><p data-r>The latest about Neocor Therapeutics.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors and partners</span>'+
   '<h2 class="big split">Talk to <em>Neocor.</em></h2>'+
   '<p class="sub" data-r>Curious to know more about Neocor and its path to the clinic? Reach out, the team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Neocor '+ARR+'</a><a class="btn" href="#/pipeline">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Registered office</span><p data-r>Neocor Therapeutics SAS<br>785 avenue du Peymian<br>13600 La Ciotat, France</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Research</span><p data-r>La Timone, Marseille</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Marseille, France</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Heart regeneration and repair<br>Gene therapy</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Manrope\',Arial,sans-serif;font-weight:800;font-size:64px;letter-spacing:-.03em">neocor</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Neocor Therapeutics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Neocor Therapeutics — Gene therapy to regenerate the heart, Marseille",x:"Home"};
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
