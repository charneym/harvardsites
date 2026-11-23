/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[5]?'Pipeline':'Cleared')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Saves lives","Five samples with a 3D spread in a single pass raise the number of sites sampled on a tumour and so reduce sampling error. No tract effect: the needles reliably reach different sampling sites.",'<circle cx="28" cy="30" r="17"/><circle class="f" cx="28" cy="30" r="2.6"/><circle class="f" cx="20" cy="24" r="2.2"/><circle class="f" cx="36" cy="24" r="2.2"/><circle class="f" cx="21" cy="38" r="2.2"/><circle class="f" cx="35" cy="38" r="2.2"/>'],
  ["Saves time","Cuts procedure time in half, which lowers the cost of each procedure and allows more patients per day.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 16v12l8 6"/>'],
  ["Saves money","A much lower chance of damaging the biopsy channel of the EUS scope, or of a needle breaking or kinking; replacing a broken or kinked needle is not reimbursed and falls to the hospital.",'<path d="M10 40h36"/><path class="a" d="M12 34l10-8 8 5 14-13"/><path d="M38 18h6v6"/>'],
  ["Simple to use","Intuitive and based on existing tools, with no need for special training and no need for needle tilting.",'<path d="M14 42l22-22"/><path class="a" d="M36 20l6-6"/><circle cx="14" cy="42" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function spec(){return '<div class="ev spx"><span class="lab kick" data-r>InstaFan specifications</span><div><dl>'+SPEC.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Two ways to operate: the central needle handle alone works as a 22G FNB needle, or press the safety release button and push the peripheral needles&#8217; handle to deploy all five. From onepassmedical.com and the InstaFan brochure; specifications are subject to change.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Multi-needle EUS biopsy<span class="nomob"> · FDA 510(k) cleared</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Five biopsies.</span><span class="l"><em>One pass.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>InstaFan is the first disposable multi-needle EUS-FNA/B device. A central needle and four peripheral needles take specimens from five locations in a tumour in a single pass, to reduce the sampling errors behind false-negative biopsies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Meet InstaFan '+ARR+'</a><a class="btn" href="#/platform">How it works</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why one needle is not enough</span>'+
   '<h2 class="txt" id="mani">Today&#8217;s EUS biopsy platforms have a single needle, and a single track can miss the malignant cells. The result is a high false-negative rate: <em>an incorrect diagnosis, and treatment that comes late or not at all.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">Biopsy specimens from five different locations on a tumour, in one pass</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">½</span><p class="k">The procedure time, cut in half, allowing more patients per day</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10 mm</span><p class="k">Spread of the four peripheral needles at 30 mm deployment</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How InstaFan works</span><h2 class="d3">One pass, <em>five sites.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Locate</span><span>Central</span><span>Fan out</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Find the tumour by ultrasound.</h2><p>The echoendoscope sits in the stomach or duodenum and its curvilinear ultrasound probe images the lesion through the wall. InstaFan passes through the scope&#8217;s accessory channel, as a single needle would.</p></article>'+
     '<article class="step"><h2>The central needle goes first.</h2><p>Under EUS guidance the 22-gauge FNB central needle is deployed into the tumour. Used alone, the central needle handle works as a standard 22G FNB needle.</p></article>'+
     '<article class="step"><h2>Four more follow, fanning out.</h2><p>Press the safety release and the four pre-bent 25-gauge FNA needles follow, spreading to 10 mm at 30 mm. Five specimens come out together: one pass, with no needle tilting.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>InstaFan</span><h2 class="d2 split">Five needles, <em>one platform.</em></h2></div><p data-r>OnePass Medical innovates the biopsy platform itself. InstaFan combines two types of needle in one disposable device, so a single pass samples five different locations on a tumour.</p></div>'+
   caps()+
   spec()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From diagnosis <em>to treatment.</em></h2></div><p data-r>InstaFan was also designed as a therapeutic delivery platform. Every pipeline product is based on it: focused RF ablation and drug delivery at several sites in the tumour during the biopsy procedure itself.</p></div>'+
   pipeRows(PIPE)+
   '<div class="bk"><span class="lab kick" data-r>Regulatory</span><p class="cr" data-r><span>FDA 510(k) K251542</span><i>·</i><span>Anvisa, Brazil</span><i>·</i><span>Patents issued by the USPTO</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Endoscopists <em>and engineers.</em></h2></div><p data-r>Founded in 2018 by a gastroenterologist who led an EUS service and a former Nasdaq-listed company chief executive, with a clinical advisory board of interventional endoscopists in the United States and Israel.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Mission</span><p data-r>Saving lives by transforming biopsies: improving them, by conducting them in one pass, and upgrading them to carry therapy such as RF ablation and drug delivery.</p></div>'+
    '<div><span class="lab kick" data-r>Shareholders</span><p data-r>Tav Medical, a leading Israeli CMO; Clalit, Israel&#8217;s largest HMO; and Galil Ofek Innovation, an Israeli medical technology incubator.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>OnePass Medical is supported by grants from the Israel Innovation Authority.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Clearances <em>and milestones.</em></h2></div><p data-r>The latest from OnePass Medical, from FDA clearance of InstaFan to funding and approvals along the way.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Endoscopists, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>OnePass.</em></h2>'+
   '<p class="sub" data-r>Whether you perform EUS-guided biopsies and want to try InstaFan, would like to distribute it, or want to partner on the therapeutic pipeline, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email OnePass Medical '+ARR+'</a><a class="btn" href="#/technology">About InstaFan</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>OnePass Medical Ltd.<br>1st The Four St., Katzrin Industrial Park<br>Katzrin 1290000, Israel</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Founded</span><p data-r>2018, with grants from the Israel Innovation Authority.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Katzrin Industrial Park<br>Israel</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">InstaFan</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>InstaFan · EUS-RFA · EUS drug-device combination</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.1em">OnePass</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 OnePass Medical Ltd.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",platform:"story",instafan:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"OnePass Medical — InstaFan, five EUS biopsies in one pass",x:"Home"};
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
