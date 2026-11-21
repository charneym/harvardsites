/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Thrombo-inflammatory disease<span class="nomob"> · Chicago, Illinois</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Stop the clot</span><span class="l">and the inflammation,</span><span class="l"><em>without the bleeding.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>DuPage Medical Technology develops peptide drugs that block a newly described signaling pathway in platelets and white blood cells, packed into high-loading nanoparticles that carry them inside the cell.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How the drugs work '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A high-loading peptide nanoparticle, cut open: the lipid shell and the peptide cargo packed inside it. Crafted render.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Clotting and inflammation drive sepsis and the injury that follows a heart attack or a kidney transplant. DMT’s drugs act on both, and despite potent anti-thrombotic effects, <em>they do not cause bleeding.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$6M+</span><p class="k">From the NIH Small Business Innovation Research program for preclinical studies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">9</span><p class="k">Patents awarded to founder Xiaoping Du, seven of them on the ExE peptide nanoparticles</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Initial indications: sepsis, myocardial and renal ischemia/reperfusion injury</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>A new target</span><p data-r>The peptides bind Gα13 and block its interaction with β3 and β2 integrins, the outside-in signal that drives platelets and leukocytes.</p></div>'+
    '<div><span class="lab kick" data-r>Inside the cell</span><p data-r>High-loading peptide nanoparticles allow efficient intracellular delivery, so peptides can be used in vivo against targets inside the cell.</p></div>'+
    '<div><span class="lab kick" data-r>A licensable platform</span><p data-r>The patent-pending technology for making these nanoparticles can be licensed by others developing peptide-based drugs.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">A peptide that <em>cuts one signal.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Deliver</span><span>Bind</span><span>Calm</p></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Packed, then carried in.</h2><p>MB2mP6 and M3mP6 are peptide drugs encapsulated in a unique lipid formulation, which yields high-loading peptide nanoparticles. The nanoparticles carry the peptide across the membrane, into platelets and leukocytes.</p></article>'+
     '<article class="step"><h2>Gα13 is held away from the integrin.</h2><p>Inside the cell, the peptide binds Gα13, the G protein that otherwise couples to the integrin’s tail. With that interaction blocked, the integrin’s outside-in signal stops.</p></article>'+
     '<article class="step"><h2>Less clot, less inflammation.</h2><p>Without outside-in signaling, platelets do not build an occlusive thrombus and leukocytes calm down: anti-thrombotic and anti-inflammatory at once, and in DMT’s studies, without causing bleeding.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One mechanism, <em>three indications.</em></h2></div><p data-r>Proof-of-concept animal studies are complete for each initial indication. DMT plans to raise $10 million to support pharmacology and toxicology studies for an IND and Phase I trials.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Funded by</span><p class="cr" data-r><span>National Heart, Lung, and Blood Institute <i>SBIR</i></span><span>National Institute of Diabetes and Digestive and Kidney Diseases <i>SBIR</i></span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From the lab bench <em>at UIC.</em></h2></div><p data-r>DuPage Medical Technology is a University of Illinois Chicago faculty startup, with an exclusive license from the university to develop Dr. Du’s drugs.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News &amp; publications</span><h2 class="d2 split">Published in <em>Science Translational Medicine.</em></h2></div><p data-r>The science behind the drugs has appeared in Science Translational Medicine, Nature Communications and the Journal of Immunology.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners and investors</span>'+
   '<h2 class="big split">Safer drugs for <em>thrombo-inflammation.</em></h2>'+
   '<p class="sub" data-r>DuPage Medical Technology works from an industrial park affiliated with the University of Illinois Chicago. To talk about the drugs, licensing the nanoparticle technology or an investment, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>DuPage Medical Technology, Inc.<br>2201 W. Campbell Park Dr., Ste. 316<br>Chicago, Illinois 60612</p></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+13126903107">312-690-3107</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>UIC faculty startup<br>NIH SBIR awardee</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>2201 W. Campbell Park Dr., Ste. 316<br>Chicago, Illinois 60612</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+13126903107">312-690-3107</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Peptide nanoparticle drugs for<br>thrombo-inflammatory disease</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Ibarra Real Nova\',Georgia,serif;font-weight:600;font-size:72px;letter-spacing:-.01em"><tspan fill="#f4efea">Du</tspan><tspan fill="#e4573f">Page</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 DuPage Medical Technology, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"DuPage Medical Technology — peptide nanoparticle drugs for thrombo-inflammatory disease, Chicago",x:"Home"};
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
