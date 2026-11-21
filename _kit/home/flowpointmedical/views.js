/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function devRows(){return '<ul class="pfr path">'+DEV.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Hemodialysis vascular access<span class="nomob"> · Overland Park, Kansas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The future of</span><span class="l">hemodialysis</span><span class="l"><em>vascular access.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>An implantable titanium guide that leads every dialysis needle to the right point, and a self-sealing valve that stops bleeding the moment the needle comes out.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/development">Development</a></div></div>'+
   '<span class="lab cap">The Flowpoint needle guide · render</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="txt" id="mani">More than 500,000 Americans live with end-stage kidney disease, and most of them need hemodialysis three times a week. <b class="w0">The single most important problem they face is safe and reliable cannulation.</b> <em>Flowpoint is built to solve it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">500K+</span><span class="k">Americans living with end-stage kidney disease</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3×</span><span class="k">Hemodialysis treatments a week, for most of them, to stay alive</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7%</span><span class="k">Of the Medicare budget goes to dialysis patients, about 1% of those on Medicare</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">One fixed path to the vein, <em>sealed every time.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fistula</span><span>Guide</span><span>Needle</span><span>Seal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The fistula.</h2><p>Hemodialysis draws blood through an arteriovenous fistula in the arm, punctured with large needles at every treatment. Finding the right spot, safely, is the hardest part.</p></article>'+
     '<article class="step"><h2>The guide.</h2><p>The Flowpoint device is implanted under the skin, directly over the vessel. Its open titanium lattice is designed for tissue to grow into and hold it in place.</p></article>'+
     '<article class="step"><h2>The needle.</h2><p>The needle enters a channel set at a fixed angle. Its tip pushes the valve aside and reaches the vessel at a set depth, at the correct insertion point.</p></article>'+
     '<article class="step"><h2>The seal.</h2><p>When the needle is withdrawn, the titanium-nitride coated valve slides back and closes the channel, so bleeding stops immediately.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="development" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Development</span><h2 class="d2 split">From the bench <em>to the dialysis chair.</em></h2></div><p data-r>Funded by the National Institute of Diabetes and Digestive and Kidney Diseases, Flowpoint is taking the device from prototype toward first-in-human use.</p></div>'+
   devRows()+
   '<p class="ack" data-r>Research reported here is supported by the National Institute of Diabetes and Digestive and Kidney Diseases of the National Institutes of Health under award R43DK141421. The device is described in US 2024/0238575 A1, “Vascular access devices with self-sealing valves”.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers, scientists <em>and a vascular surgeon.</em></h2></div><p data-r>The device was invented at Mount Sinai and The Cooper Union, and is being developed by Flowpoint Medical with the clinicians who place vascular access.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones <em>so far.</em></h2></div><p data-r>Awards, publications and appearances from Flowpoint Medical.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Safer access, <em>every treatment.</em></h2>'+
   '<p class="sub" data-r>For clinical collaboration, partnerships or investment, write to the Flowpoint Medical team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span class="bl">11320 W 144th St</span><span class="bl">Overland Park, KS 66221</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>NIH NIDDK SBIR Phase I, award R43DK141421</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>11320 W 144th St<br>Overland Park, KS 66221</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/development">Development</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Hemodialysis vascular access</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Source Sans 3\',system-ui,sans-serif;font-weight:400;font-size:54px;letter-spacing:.18em">FLOWPOINT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Flowpoint Medical Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",development:"development",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Flowpoint Medical — an implantable, self-sealing needle guide for hemodialysis vascular access",x:"Home"};
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
