/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="rg-tm">'+gs.map(function(g){return '<div class="rg-tg"><span class="lab kick" data-r>'+esc(g)+'</span><ul>'+by[g].map(function(p){
    return '<li data-r><span class="rg-nm">'+esc(p.name)+'</span><span class="rg-rl">'+esc(p.title)+'</span>'+(p.sum?'<p class="kl-sum">'+esc(p.sum)+'</p>':'')+'</li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["The limit","UV can’t reach a tumor","UV light activates psoralen, used for decades against psoriasis and, through photopheresis, cutaneous T-cell lymphoma. But UV light cannot penetrate tissue.",'<path d="M6 14h44"/><path d="M6 22h44"/><path class="a" d="M16 4v12M28 4v12M40 4v12"/><path d="M14 34c4-6 24-6 28 0s-4 14-14 14-18-8-14-14z"/>'],
  ["The converter","X-ray in, UV out","Nano- and micron-size phosphor particles, a crystalline host doped with an activator atom, absorb penetrating X-ray energy and emit UV light where they sit.",'<path d="M28 8l14 8v24l-14 8-14-8V16z"/><path class="a" d="M28 2v10M22 2l3 9M34 2l-3 9"/><circle class="f" cx="28" cy="28" r="3.2"/><path class="a" d="M36 36l8 8M20 36l-8 8M28 40v12"/>'],
  ["The response","Activated in place","Once activated inside the tumor, psoralen kills the cell through a pathway intended to generate an immune response, possibly reaching other areas of disease.",'<circle cx="28" cy="28" r="12"/><circle class="f" cx="28" cy="28" r="3"/><circle cx="8" cy="12" r="4.5"/><circle cx="48" cy="14" r="4.5"/><circle cx="46" cy="46" r="4.5"/><path class="a" d="M12 15l6 5M44 17l-6 4M42 43l-5-5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function partners(){return '<div class="kl-pa"><span class="lab kick" data-r>Developed with</span><ul data-r>'+PARTNERS.map(function(p){return '<li>'+esc(p)+'</li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li data-r><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[3])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Immunolight<span class="nomob"> · Detroit, Michigan</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Light, generated</span><span class="l"><em>inside the tumor.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Immunolight converts low-dose X-ray into UV light inside a solid tumor to activate psoralen: a non-chemotherapy approach, now in a Phase I trial for advanced solid tumors.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/trial">The clinical trial</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Energy conversion</span>'+
   '<h2 class="txt" id="mani">UV light can activate drugs like psoralen, but it cannot get through tissue. Immunolight’s particles turn penetrating X-ray into UV light inside the tumor itself, <em>so the drug is activated exactly where it is needed.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">200+</span><p class="k">Worldwide patents, with the 200th granted in 2021</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Scientists, engineers and physicians behind the technology</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">US cancer centers recruiting for the Phase I trial</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">X-ray in, <em>UV light out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Inject</span><span>Convert</span><span>Activate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Into the tumor.</h2><p>The phosphor device and methoxsalen, a psoralen, are injected directly into the tumor, where the energy-converting particles settle among the cancer cells.</p></article>'+
     '<article class="step"><h2>Low-dose X-ray, converted.</h2><p>Low-dose X-ray passes easily through the body. Inside the tumor, the phosphor particles absorb it and give off UV light where they sit.</p></article>'+
     '<article class="step"><h2>Psoralen, activated.</h2><p>The UV light activates psoralen inside the tumor. The aim: kill cancer cells in a way that generates an immune response against the tumor, possibly beyond it.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Light that reaches <em>where light can’t.</em></h2></div><p data-r>Immunolight pioneered materials and methods that convert penetrating energy, such as X-ray, down the spectrum into more active energies like UV light, enabling activation without a line of sight.</p></div>'+
   caps()+partners()+
  '</div></section>'+

  '<section class="sec dark2" id="trial" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical trial</span><h2 class="d2 split">A Phase I trial in <em>advanced solid tumors.</em></h2></div><p data-r>Immunolight Cancer Therapy is an experimental, non-chemotherapy treatment. Patients and physicians can find the study on ClinicalTrials.gov or write to the Immunolight study contact.</p></div>'+
   pipeRows(TRIAL)+
   '<div class="act tr-act" data-r><a class="btn solid" href="'+TRIALMAIL+'?subject=Immunolight%20Cancer%20Therapy%20study">Ask about the study '+ARR+'</a><a class="btn" href="'+CTG+'" target="_blank" rel="noopener">NCT04389281</a></div>'+
  '</div></section>'+

  '<section class="sec dark" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">One platform, <em>many fields.</em></h2></div><p data-r>The same energy conversion that activates a drug inside a tumor can cure an adhesive with no line of sight. Immunolight licenses its technology on a competitive basis and is seeking global strategic partners.</p></div>'+
   pipeRows(APPS)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists, engineers <em>and physicians.</em></h2></div><p data-r>Founded in 2007 by Rick Bourke and led by President Harold Walder, Immunolight works with an interdisciplinary team at Duke University and beyond.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the <em>press room.</em></h2></div><p data-r>Milestones from the Phase I program and the company, from FDA clearance to the 2026 expansion cohorts.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Partner with us on <em>light-activated medicine.</em></h2>'+
   '<p class="sub" data-r>Immunolight is seeking global strategic partners to bring this platform to medicine and industry. Patients and physicians can ask about the Phase I study.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Immunolight '+ARR+'</a><a class="btn" href="'+TRIALMAIL+'">Clinical trial enquiries</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Corporate</span><p data-r>6th Floor, Ford Field<br>1901 St. Antoine St.<br>Detroit, MI 48226</p></div>'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>NC Bio Labs<br>701 W. Main Street, Suite 200<br>Durham, NC 27707</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">mbourke@immunolight.com</a><br><a class="ul" href="'+TRIALMAIL+'">smclaughlin@immunolight.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Ford Field, Detroit, Michigan</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">mbourke@immunolight.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/trial">Clinical Trial</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Developed with</span>Duke University</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Cinzel\',serif;font-weight:500;font-size:64px">IMMUNOLIGHT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Immunolight LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",trial:"trial",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Immunolight — light, generated inside the tumor",x:"Home"};
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
