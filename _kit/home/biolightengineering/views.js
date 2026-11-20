/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pti"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function mhg(lab,L){return '<div class="mh-group"><p class="mh-label">'+lab+'</p><ul class="mh-list">'+L.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}).join("")+'</ul></div>'}
function mh(){return '<div class="mh">'+mhg("Biolight Engineering",TEAM)+mhg("Investigators on the National Eye Institute award",INV)+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Pediatric retinal imaging<span class="nomob"> · Hinsdale, Illinois</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A wider view of</span><span class="l"><em>the infant retina.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Biolight Engineering is developing PedCam, a low-cost, ultra-widefield fundus camera that images the retina of premature infants without dilating drops, for retinopathy of prematurity screening and pediatric eye care.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How PedCam works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A rendering of a 200° ultra-widefield fundus view, the field PedCam is built to capture. Illustration, not patient data.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Retinopathy of prematurity is a leading cause of childhood blindness, and it often begins in the peripheral retina. Today’s pediatric cameras see 130° or less, cost more than $70,000 and need dilating drops. <em>PedCam is designed to answer all three.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">200°</span><span class="k">Ultra-widefield view of the retina, against 130° or less for existing pediatric cameras</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;$25k</span><span class="k">Target cost of PedCam, against more than $70,000 for today’s systems</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.5M</span><span class="k">In National Eye Institute SBIR funding since 2016</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Nonmydriatic</span><p data-r>No pharmacologic pupil dilation: the light enters through the wall of the eye, not the pupil.</p></div>'+
    '<div><span class="lab kick" data-r>Portable</span><p data-r>Handheld and smartphone-based prototypes have already shown full retinal coverage with high image fidelity.</p></div>'+
    '<div><span class="lab kick" data-r>Patented</span><p data-r>Trans-pars-planar illumination, US Patent 11,154,193, assigned to Biolight Engineering.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Light through the side, <em>the image through the pupil.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pupil</span><span>Pars plana</span><span>200°</span><span>Screen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Most cameras share the pupil.</h2><p>A conventional fundus camera sends light in and brings the image out through the same small pupil. That usually means dilating drops, and in today’s pediatric cameras a field of view of 130° or less.</p></article>'+
     '<article class="step"><h2>Light enters through the pars plana.</h2><p>PedCam’s patented trans-pars-planar illumination delivers light through the wall of the eye just behind the iris, at the pars plana, so the inside of the eye is lit from the side.</p></article>'+
     '<article class="step"><h2>The whole pupil is left for imaging.</h2><p>With the light arriving elsewhere, the full pupil carries the image out: an ultra-widefield, 200° view of the retina, without dilating drops.</p></article>'+
     '<article class="step"><h2>The periphery, at the bedside.</h2><p>ROP often involves the peripheral retina. A low-cost, portable camera that reaches it makes point-of-care imaging and remote screening of premature infants possible.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From prototype <em>to 510(k).</em></h2></div><p data-r>The National Eye Institute’s Direct-to-Phase II SBIR award, made in July 2026, funds PedCam’s path to market with the University of Illinois Chicago, the University of Chicago and Children’s Hospital Los Angeles.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Published</span><p class="cr" data-r><a class="ul" href="'+PAPER+'" target="_blank" rel="noopener">Toslak, Chau, Erol, Liu, Chan, Son and Yao, “Trans-pars-planar illumination enables 200° ultra-wide field pediatric fundus photography for easy examination of the retina,” arXiv, 2019</a></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers and clinicians, <em>one camera.</em></h2></div><p data-r>PedCam is built by Biolight Engineering with bioengineers and ophthalmologists at the University of Illinois Chicago.</p></div>'+
   mh()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">On the <em>public record.</em></h2></div><p data-r>The National Eye Institute’s awards, the patent and the research PedCam builds on, each with its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Neonatal units, clinicians and partners</span>'+
   '<h2 class="big split">Every infant, <em>seen in time.</em></h2>'+
   '<p class="sub" data-r>Biolight Engineering is based in Hinsdale, Illinois. To talk about PedCam, clinical collaboration or partnership, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Biolight Engineering '+ARR+'</a><a class="btn" href="'+RP1+'" target="_blank" rel="noopener">The NEI award</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Biolight Engineering LLC<br>506 Wedgewood Ct<br>Hinsdale, IL 60521</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>National Eye Institute<br>SBIR Phase II</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Biolight Engineering LLC<br>Hinsdale, Illinois 60521</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Ultra-widefield, nonmydriatic<br>pediatric retinal imaging</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 62" aria-hidden="true"><text x="320" y="54" text-anchor="middle" style="font-family:\'IBM Plex Sans\',system-ui,sans-serif;font-weight:400;font-size:62px;letter-spacing:.3em">BIOLIGHT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Biolight Engineering LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Biolight Engineering — PedCam, a low-cost ultra-widefield retinal camera for premature infants, Hinsdale, Illinois",x:"Home"};
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
