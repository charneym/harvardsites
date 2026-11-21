/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Nerve imaging agents<span class="nomob"> · Woodside, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Show the surgeon</span><span class="l"><em>where the nerves are.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Manzanita Pharmaceuticals attaches small molecule dyes and drugs to human neurotrophins. Its first product, NerveLight, lights up the at-risk nerves around the prostate during cancer surgery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How NerveLight works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A peripheral nerve, cut back to its fascicles, in the teal the ICG channel shows for NerveLight. Crafted render.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">It has been known since 1982 that the cavernous nerves are at risk in prostate cancer surgery. There is still <em>no FDA-approved nerve imaging agent.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.0M</span><span class="k">NCI SBIR Phase II funding in 2024 and 2025 for NerveLight’s IND-enabling studies</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">103</span><span class="k">Rat studies in which NerveLight was visualized and selective, 46 of them in radical prostatectomies</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5 cm</span><span class="k">Depth to which NerveLight illuminates nerves, by Manzanita’s account, without peeling back tissue</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Seen in the ICG channel</span><p data-r>The 800 nm dye is detected in the ICG channel of imaging systems already installed in 99% of surgical suites, by Manzanita’s count.</p></div>'+
    '<div><span class="lab kick" data-r>No autofluorescence</span><p data-r>Working in the 800 nm near-infrared avoids the natural autofluorescence of biological tissue.</p></div>'+
    '<div><span class="lab kick" data-r>Inside the nerve</span><p data-r>rhNGF carries the dye into peripheral nerves intraneuronally; 800-rhNGF does not bind to myelin outside the neuron.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">A dye that <em>rides the nerve.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Apply</span><span>Bind</span><span>Transport</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>One dose, at the start of surgery.</h2><p>NerveLight is a commercial near-infrared dye attached directly, with no linker, to recombinant human Nerve Growth Factor. It is applied once to the wound bed, bathing the prostate for about 15 minutes, and the excess is washed away.</p></article>'+
     '<article class="step"><h2>rhNGF finds the nerve endings.</h2><p>Nerve Growth Factor binds selectively to the high-affinity TrkA receptors at the distal ends of nerves. The NGF and TrkA complex is then taken up into the nerve cell.</p></article>'+
     '<article class="step"><h2>The light travels up the nerve.</h2><p>Retrograde axonal transport carries the dye toward the nerve cell bodies. That is what the surgeon sees: a roadmap of the at-risk nerves in the ICG channel, through a procedure that averages about two hours.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Imaging agents, <em>then targeted drugs.</em></h2></div><p data-r>The pipeline has two parts: nerve imaging agents made of a dye and a neurotrophin, and drug candidates made of a small molecule drug and a neurotrophin.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Venture finance meets <em>drug chemistry.</em></h2></div><p data-r>Manzanita was founded in 2007 and is backed by eleven private investors, five of whom sit on its Board of Directors.</p></div>'+
   team()+
   '<div class="adv"><span class="lab kick" data-r>Board of Directors</span><p data-r><span>Constance McKee <i>MBA</i></span><span>Thomas Knobel</span><span>Robert Dalziel <i>PhD, Chair, Scientific Advisory Board</i></span><span>Robert Webb <i>PhD, co-founder</i></span><span>Gary Blair <i>MD</i></span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News &amp; publications</span><h2 class="d2 split">Funded by <em>the National Cancer Institute.</em></h2></div><p data-r>NerveLight has been developed with Small Business Innovation Research awards from the NCI since its first Phase I grant in 2013.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">Spare the nerve. <em>Keep the cure.</em></h2>'+
   '<p class="sub" data-r>Manzanita Pharmaceuticals works from Woodside, California. To talk about NerveLight, the neurotrophin platform, a partnership or an investment, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Manzanita Pharmaceuticals, Inc.<br>2995 Woodside Road, Suite 400<br>Woodside, California 94062</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Founded in 2007<br>NCI SBIR awardee</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>2995 Woodside Road, Suite 400<br>Woodside, California 94062</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Neurotrophin-targeted<br>imaging agents and drugs</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-style:italic;font-weight:600;font-size:70px;letter-spacing:-.01em"><tspan fill="#eef2f5">Manzanita</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Manzanita Pharmaceuticals, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Manzanita Pharmaceuticals — NerveLight nerve imaging, Woodside, California",x:"Home"};
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
